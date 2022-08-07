import {
  Box,
  chakra,
  Container,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
// https://chakra-templates.dev/page-sections/footer
const FooterBar = () => {
  return (
    <Box
      bg={useColorModeValue("gray.50", "gray.900")}
      color={useColorModeValue("gray.700", "gray.200")}
    >
      <Container
        as={Stack}
        maxW={"6xl"}
        py={4}
        direction={{ base: "column", md: "row" }}
        spacing={4}
        justify={{ base: "center", md: "space-between" }}
        align={{ base: "center", md: "center" }}
      >
        <Text>© 2022 Chakra Templates. All rights reserved</Text>
        <Stack direction={"row"} spacing={6}>
          <chakra.button
            bg={useColorModeValue("blackAlpha.100", "whiteAlpha.100")}
            rounded={"full"}
            w={8}
            h={8}
            cursor={"pointer"}
            as={"a"}
            href="#"
            display={"inline-flex"}
            alignItems={"center"}
            justifyContent={"center"}
            transition={"background 0.3s ease"}
            _hover={{
              bg: useColorModeValue("blackAlpha.200", "whiteAlpha.200"),
            }}
          >
            <FaTwitter />
          </chakra.button>
          <chakra.button
            bg={useColorModeValue("blackAlpha.100", "whiteAlpha.100")}
            rounded={"full"}
            w={8}
            h={8}
            cursor={"pointer"}
            as={"a"}
            href="#"
            display={"inline-flex"}
            alignItems={"center"}
            justifyContent={"center"}
            transition={"background 0.3s ease"}
            _hover={{
              bg: useColorModeValue("blackAlpha.200", "whiteAlpha.200"),
            }}
          >
            <FaYoutube />
          </chakra.button>
          <chakra.button
            bg={useColorModeValue("blackAlpha.100", "whiteAlpha.100")}
            rounded={"full"}
            w={8}
            h={8}
            cursor={"pointer"}
            as={"a"}
            href="#"
            display={"inline-flex"}
            alignItems={"center"}
            justifyContent={"center"}
            transition={"background 0.3s ease"}
            _hover={{
              bg: useColorModeValue("blackAlpha.200", "whiteAlpha.200"),
            }}
          >
            <FaInstagram />
          </chakra.button>
        </Stack>
      </Container>
    </Box>
  );
};
export default FooterBar;
