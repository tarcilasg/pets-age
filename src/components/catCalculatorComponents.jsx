import { useEffect, useState, useContext } from "react";
import { CalculatorCatContext } from "../Providers/calculatorCat";

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
  Spacer,
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
  //<Wrap p={"15px"} align="center" justify="center" h="100%">

  return (
    <Flex direction="column" w="100vw" h="100vh" align="center">
      <Box w="100%" p={4} color="white">
        vai ser a nav
      </Box>
      <Box mt="90px" mb="30px">
        <Heading as="h2" size="2xl" alignText="center">
          the human's age of your cat <Icon as={BsSuitHeart} w="20px" />
        </Heading>
      </Box>
      <Divider orientation="horizontal" w="65%" borderBottomWidth="2px" />
      <Text fontSize="20px" mt="90px">
        set yours cat age:
      </Text>
      <Flex mt="20px" mb="30px">
        <NumberInput
          size="lg"
          maxW={36}
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
      <Flex mt="65px" display="inline-flex">
        <Box pr="60px">
          <Button
            letterSpacing="2px"
            p="0 20px"
            // p="0 20px 0 10px"
            // borderRadius="10px"
            // bg="#e74133"
            // transition="all 0.5s ease-in-out"
            // letterSpacing="2px"
            // _focus={{ boxShadow: "0px 0px 5px 7px #e7413373" }}
            // color="white"
            // fontSize="17px"
            // border="none"
            // _hover={{
            //   bg: "#f54d3e",
            //   transition: "all 0.5s ease-in-out",
            //   boxShadow: "0px 0px 5px 3px #e7413373",
            // }}
            onClick={() => {
              onToggle();
              calculationCat(ageValue);
            }}
          >
            convert
          </Button>
        </Box>
        <Box pl="60px">
          <Button
            variant="ghost"
            p="0 20px"
            color="white"
            fontSize="17px"
            letterSpacing="2px"
            // _hover={{
            //   bg: "#f54d3e",
            //   transition: "all 0.5s ease-in-out",
            //   boxShadow: "0px 0px 5px 3px #e7413373",
            // }}
            onClick={() => {
              setAgeValue("0");
              setResult(null);
              onClose();
            }}
          >
            clear
          </Button>
        </Box>
      </Flex>
      <Flex>
        <Fade direction="bottom" in={isOpen}>
          <Box
            p="20px 35px"
            fontSize="25px"
            color="white"
            mt="30px"
            bg="teal.500"
            rounded="md"
            shadow="md"
            letterSpacing="2px"
          >
            {result} years old human
          </Box>
        </Fade>
      </Flex>
    </Flex>
  );
};
export default CatCalculator;
