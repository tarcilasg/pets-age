import { useNavigate } from "react-router-dom";

import {
  Flex,
  Box,
  Center,
  Container,
  Divider,
  Heading,
  Link,
} from "@chakra-ui/react";
import "./styles.css";

const WelcomePage = () => {
  const navigate = useNavigate();

  return (
    <Flex direction="column" w="100vw" h="100vh" align="center">
      <Box w="100%" p={4} color="white">
        vai ser a nav
      </Box>
      <Box mt="30px" mb="30px">
        <Heading as="h2" size="2xl" alignText="center">
          the human's age of your pet
        </Heading>
      </Box>
      <Divider orientation="horizontal" w="65%" borderBottomWidth="2px" />
      <Heading as="h3" size="xl" mt="90px">
        what's your pet?
      </Heading>
      <Flex mt="65px" display="inline-flex">
        <Box pr="60px">
          <button className="btn" onClick={() => navigate("/agecat")}>
            cat
          </button>
        </Box>
        <Box pl="60px">
          <button className="btn" onClick={() => navigate("/agedog")}>
            dog
          </button>
          {/* <AvatarGroup spacing="2.5rem">
          <Link onClick={() => navigate("/agecat")}>
            <Avatar bg="green.500" name="cat" size="2xl" src="just-cat.png" />
          </Link>
          <Link onClick={() => navigate("/agedog")}>
            <Avatar bg="green.500" name="dog" size="2xl" src="just-dog.png" />
          </Link>
        </AvatarGroup> */}
        </Box>
      </Flex>
    </Flex>
  );
};
export default WelcomePage;