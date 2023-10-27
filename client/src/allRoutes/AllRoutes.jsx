import React from "react";
import { Route, Routes } from "react-router-dom";
import ContentGeneration from "../pages/ContentGeneration";
import SentimentAnalysis from "../pages/SentimentAnalysis";
import Summarization from "../pages/Summarization";
const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<ContentGeneration />} />
      <Route path="/sentiment" element={<SentimentAnalysis />} />
      <Route path="/summarization" element={<Summarization />} />
    </Routes>
  );
};

export default AllRoutes;
