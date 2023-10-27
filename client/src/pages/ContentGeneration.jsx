import { Box, Button, Flex, Heading, Input } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { baseUrl } from "../lib/baseUrl";
import QuestionComponent from "../components/QuestionComponent";
import AnswerComponent from "../components/AnswerComponent";

const ContentGeneration = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await baseUrl.post("textGenerator", { message });
      if (response.data) {
        setData(
          response.data.filter((message) => message.role !== "system").reverse()
        );
        setLoading(false);
        setMessage("");
      }
    } catch (error) {
      console.log(error.message);
      setLoading(false);
    }
  };

  const getData = async () => {
    try {
      const response = await baseUrl("textGenerator");
      console.log("this is the response in getData", response);
      setData(
        response.data.filter((message) => message.role !== "system").reverse()
      );
    } catch (error) {
      console.log(error.message);
    }
  };
  useEffect(() => {
    getData();
  }, []);
  console.log("this is the data", data);
  return (
    <Box
      p={"14px"}
      bg={"#343541"}
      color={"#92959f"}
      overflow={"scroll"}
      h={"91%"}
      display={"flex"}
      flexDirection={"column"}
      gap={"1rem"}
    >
      <Heading textDecoration={"underline"} textAlign={"center"}>
        Content Generation
      </Heading>
      <form onSubmit={handleSubmit}>
        <Flex flexDirection={"column"} gap={"1rem"}>
          <Input
            fontSize={"16px"}
            border={"1px solid #ccc"}
            borderRadius={"5px"}
            boxShadow={"0 0 5px rgba(0, 0, 0, 0.2)"}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            _placeholder={{
              textAlign: "center",
              color: "#999",
              fontSize: "14px",
            }}
            placeholder="Write your content here ..."
          />
          <Flex justify={"center"}>
            <Button isLoading={loading} type="submit" w={"400px"}>
              Generate
            </Button>
          </Flex>
        </Flex>
      </form>
      <Box>
        {data &&
          data
            .slice()
            .reverse()
            .map((response, index) =>
              response.role === "user" ? (
                <QuestionComponent key={index} question={response.content} />
              ) : (
                <AnswerComponent key={index} response={response.content} />
              )
            )}
      </Box>
    </Box>
  );
};

export default ContentGeneration;
