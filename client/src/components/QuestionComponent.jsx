import { Box, Text } from "@chakra-ui/react";
import React from "react";

const QuestionComponent = ({ question }) => {
  return (
    <Box w={"100%"} p={"14px"} bg={"gray.600"} color={"#ececf1"}>
      <Text whiteSpace={"pre-wrap"}>
        Q : {question.charAt(0).toUpperCase() + question.slice(1)}.
      </Text>
    </Box>
  );
};

export default QuestionComponent;
