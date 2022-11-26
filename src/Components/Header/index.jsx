import { Box, Flex, Img, Text } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import logo from "../../Images/logo-w.png";

const Header = () => {
  return (
    <>
      <Flex
        bg="#363637"
        p="3"
        justifyContent="space-between"
        alignItems="center"
      >
        <Box ml="5">
          <Link to="/">
            <Img src={logo} />
          </Link>
        </Box>
        <Flex fontSize="20px" color="white" mr="5">
          <Text>
            <a href="https://github.com/kaanmtoprak" rel="noreferrer" target="_blank">Follow Me!</a>
          </Text>
        </Flex>
      </Flex>
    </>
  );
};

export default Header;
