import { Box, Text } from "@chakra-ui/react";
import React from "react";

const AnswerComponent = ({ response }) => {
  return (
    <Box
      w={"100%"}
      //   borderBottom={"1px solid teal"}
      borderBottom={"1px solid teal"}
      p={"14px"}
      bg={"#434654"}
      color={"#b5b9c1"}
    >
      <Text whiteSpace={"pre-wrap"}>{response}</Text>
    </Box>
  );
};

export default AnswerComponent;
