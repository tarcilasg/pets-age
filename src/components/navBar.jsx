import { useNavigate } from "react-router-dom";

import {
  Box,
  Button,
  Flex,
  Hstack,
  Icon,
  Spacer,
  Stack,
  Tooltip,
} from "@chakra-ui/react";
import { CloseIcon, HamburgerIcon } from "@chakra-ui/icons";

const NavBar = () => {
  const navigate = useNavigate();

  return (
    <Flex w="100vw" h="10vh">
      <Box
        display={"flex"}
        direction="row"
        alignItems="center"
        justifyContent="flex-end"
        w="100%"
        pr="80px"
        color="white"
      >
        {/* <HStack spacing='24px'>
        <Box w='70px' h='10' bg='teal.500' />
        <Box w='170px' h='10' bg='teal.500' />
        <Box w='180px' h='10' bg='teal.500' />
      </HStack> */}
        <Stack spacing={7} direction="row" align="center">
          <Button
            px="30px"
            py="25px"
            variant="link"
            fontSize="19px"
            _hover={{
              transform: "scale(1.15)",
            }}
            onClick={() => navigate("#")}
          >
            about project
          </Button>
          <Button
            px="30px"
            py="25px"
            variant="link"
            fontSize="19px"
            _hover={{
              transform: "scale(1.15)",
            }}
            onClick={() => navigate("#")}
          >
            about me
          </Button>
          <Button
            // colorScheme="whiteAlpha"
            variant="ghost"
            color="white"
            _hover={{
              bg: "#f54d3e",
              transition: "all 0.5s ease-in-out",
              transform: "scale(1.07)",
              boxShadow: "0px 0px 5px 3px #e7413373",
            }}
            onClick={() => navigate("/")}
          >
            <Tooltip label="back to Home!">
              <CloseIcon color="white" w={6} h={6} />
            </Tooltip>
          </Button>
        </Stack>
      </Box>
    </Flex>
  );
};
export default NavBar;
