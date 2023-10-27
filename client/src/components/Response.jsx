import { Box, Flex, Text } from "@chakra-ui/react";
import React from "react";

const Response = ({ message }) => {
  return (
    <Flex
      justify={"center"}
      align={"center"}
      h={"100%"}
    >
      <Text whiteSpace={"pre-wrap"}>{message}</Text>
    </Flex>
  );
};

export default Response;
