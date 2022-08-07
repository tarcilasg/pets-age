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
  // w={[300, 400, 500]}
  return (
    <Flex w={["30vw", "50vw", "80vw", "100vw"]} h={["7px", "10vh"]}>
      <Box
        display={"flex"}
        direction="row"
        alignItems="center"
        justifyContent={["center", "center", "center", "flex-end", "flex-end"]}
        w="100%"
        h={["7vh", "10vh"]}
        pr={["0px", "0px", "40px", "40px", "80px"]}
        color="white"
      >
        <Stack spacing={7} direction="row" align="center">
          <Button
            px={["0px", "10px", "20px", "30px"]}
            py={["0px", "5px", "15px", "25px"]}
            variant="link"
            fontSize={["13px", "13px", "17px", "22px"]}
            _hover={{
              transform: "scale(1.15)",
            }}
            onClick={() => navigate("#")}
          >
            about project
          </Button>
          <Button
            px={["0px", "10px", "20px", "30px"]}
            py={["0px", "5px", "15px", "25px"]}
            variant="link"
            fontSize={["13px", "13px", "17px", "22px"]}
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
              <CloseIcon color="white" w={[4, 5, 6, 6]} h={[4, 5, 6, 6]} />
            </Tooltip>
          </Button>
        </Stack>
      </Box>
    </Flex>
  );
};
export default NavBar;
