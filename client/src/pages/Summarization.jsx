// DocumentUploader.js
import React, { useCallback, useState } from "react";
import Dropzone, { useDropzone } from "react-dropzone";
import "./summarization.css";
import { Heading } from "@chakra-ui/react";

const Summarization = () => {
  const [uploadedContent, setUploadedContent] = useState("");
  const reader = new FileReader();
  const onDrop = useCallback((acceptedFiles) => {
    const file = acceptedFiles[0];
    setUploadedContent(file);
    // if (file.type === "application/pdf") {
    //   setUploadedContent(file);
    // }
  }, []);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: [".pdf", ".doc", ".docx"],
  });
  console.log("this is uploaded file", uploadedContent);
  return (
    <div>
      <Heading textAlign={"center"}>Drop your files here</Heading>
      <div {...getRootProps()} className="dropzone">
        <input type="file" {...getInputProps()} />
        <p>Drag & drop a document file here, or click to select one.</p>
      </div>
      <div>
        <h2>Uploaded Content:</h2>
        {/* <div className="uploaded-content">{uploadedContent}</div> */}
      </div>
    </div>
  );
};

export default Summarization;
