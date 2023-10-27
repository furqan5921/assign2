import { Box, Button, Flex } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <Box zIndex={999}  position={"sticky"} top={"0px"} bg={"gray.300"} p={"14px"} w={"100%"}>
      <Flex justify={"space-between"} color={"teal.100"}>
        <Link to={"/"}>
          <Button variant={"ghost"} size={"lg"}>
            Text Generation
          </Button>
        </Link>
        <Link to={"/sentiment"}>
          <Button variant={"ghost"} size={"lg"}>
            Sentiment Analysis
          </Button>
        </Link>
        <Link to={"/summarization"}>
          <Button variant={"ghost"} size={"lg"}>
            Summarization
          </Button>
        </Link>
      </Flex>
    </Box>
  );
};

export default Navbar;
