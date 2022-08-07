import { useEffect, useState, useContext } from "react";
import { CalculatorCatContext } from "../Providers/calculatorCat";
import NavBar from "./navBar";
import FooterBar from "./Footer";

import {
  Flex,
  Box,
  Button,
  Divider,
  Fade,
  Heading,
  Icon,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  Text,
  Tooltip,
  useDisclosure,
} from "@chakra-ui/react";
import { BsSuitHeart } from "react-icons/bs";

const CatCalculator = () => {
  const [ageValue, setAgeValue] = useState(0);
  const { calculationCat, setResult, result } =
    useContext(CalculatorCatContext);
  const { isOpen, onClose, onToggle } = useDisclosure();

  useEffect(() => {
    setResult();
  }, [setResult]);
  // w={[300, 400, 500]} do menor (celular) pro maior (televisão)

  return (
    <Flex direction="column" w="100vw" h="100vh" align="center">
      <NavBar />
      <Box mt={["110px", "110px", "90px", "90px"]} mb={["30px"]}>
        <Heading
          as="h2"
          size={["md", "lg", "lg", "xl", "2xl"]}
          textAlign="center"
          color="#f0f8ff"
        >
          the human's age of your cat <Icon as={BsSuitHeart} w="20px" />
        </Heading>
      </Box>
      <Divider
        orientation="horizontal"
        w="65%"
        borderBottomWidth="2px"
        mb="20px"
      />
      <Text
        fontSize={["15px", "15px", "20px", "25px"]}
        mt={["10px", "30px", "90px", "90px"]}
        color="#f0f8ff"
      >
        set yours cat age:
      </Text>
      <Flex mt="20px" mb="30px">
        <NumberInput
          size={["sm", "md", "md", "lg"]}
          maxW={[100, 36, 36, 36]}
          color="#f0f8ff"
          defaultValue={ageValue}
          min={1}
          max={25}
          onChange={setAgeValue}
          value={ageValue}
        >
          <NumberInputField />
          <NumberInputStepper>
            <NumberIncrementStepper />
            <NumberDecrementStepper />
          </NumberInputStepper>
        </NumberInput>
      </Flex>
      <Flex mt={["25px", "35px", "50px"]} display="inline-flex">
        <Box pr={["20px", "40px", "80px", "130px"]}>
          <Button
            letterSpacing={["0px", "2px"]}
            _hover={{
              transform: "scale(1.07)",
            }}
            p="0 20px"
            onClick={() => {
              onToggle();
              calculationCat(ageValue);
            }}
          >
            <Tooltip label="click to calculate">convert</Tooltip>
          </Button>
        </Box>
        <Box pl="60px">
          <Button
            variant="ghost"
            p="0 20px"
            color="white"
            fontSize="17px"
            letterSpacing={["0px", "2px"]}
            _hover={{
              bg: "#f54d3e",
              transition: "all 0.5s ease-in-out",
              transform: "scale(1.07)",
              boxShadow: "0px 0px 5px 3px #e7413373",
            }}
            onClick={() => {
              setAgeValue("0");
              setResult(null);
              onClose();
            }}
          >
            <Tooltip label="reset all values">clear</Tooltip>
          </Button>
        </Box>
      </Flex>
      <Flex>
        <Fade direction="bottom" in={isOpen}>
          <Box
            p={["20px 22px", "20px 35px", "25px 50px"]}
            fontSize={["22px", "22px", "25px", "30px"]}
            color="white"
            mt={["20px", "20px", "30px", "40px"]}
            bg="teal.500"
            rounded="md"
            shadow="md"
            letterSpacing="2px"
          >
            {result} years old human
          </Box>
        </Fade>
      </Flex>
      {/* <FooterBar /> */}
    </Flex>
  );
};
export default CatCalculator;
