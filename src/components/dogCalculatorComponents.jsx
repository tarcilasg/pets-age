import { useEffect, useState, useContext } from "react";
import { CalculatorDogContext } from "../Providers/calculatorDog";
import NavBar from "./navBar";

import {
  Flex,
  Box,
  Button,
  Divider,
  Fade,
  Heading,
  Icon,
  Stack,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  Radio,
  RadioGroup,
  Text,
  Tooltip,
  useDisclosure,
} from "@chakra-ui/react";
import { BsSuitHeart } from "react-icons/bs";
import { InfoIcon } from "@chakra-ui/icons";

const DogCalculator = () => {
  const [ageValue, setAgeValue] = useState(0);
  const [sizeValue, setSizeValue] = useState("");
  const { calculationDog, setResult, result } =
    useContext(CalculatorDogContext);
  const { isOpen, onClose, onToggle } = useDisclosure();

  useEffect(() => {
    setResult();
  }, [setResult]);

  return (
    <Flex direction="column" w="100vw" h="100vh" align="center">
      <NavBar />
      <Box mt="90px" mb="30px">
        <Heading as="h2" size="2xl" alignText="center" color="#f0f8ff">
          the human's age of your dog <Icon as={BsSuitHeart} w="20px" />
        </Heading>
      </Box>
      <Divider
        orientation="horizontal"
        w="65%"
        borderBottomWidth="2px"
        mb="20px"
      />
      <RadioGroup
        onChange={setSizeValue}
        value={sizeValue}
        mb="5px"
        color="#f0f8ff"
      >
        <Stack spacing={6} direction="row">
          <Radio value="mini" size="lg" colorScheme="pink">
            until 10kg
          </Radio>
          <Radio value="little" size="lg" colorScheme="pink">
            until 20kg
          </Radio>
          <Radio value="big" size="lg" colorScheme="pink">
            until 40kg
          </Radio>
          <Radio value="giant" size="lg" colorScheme="pink">
            more than 40kg
          </Radio>
          <Tooltip label="*choose the weight of your dog" fontSize="md">
            <InfoIcon w={6} h={6} />
          </Tooltip>
        </Stack>
      </RadioGroup>
      <Text fontSize="20px" mt="90px" color="#f0f8ff">
        set yours dog age:
      </Text>
      <Flex mt="20px" mb="30px">
        <NumberInput
          size="lg"
          maxW={32}
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
      <Flex mt="40px" display="inline-flex">
        <Box pr="60px">
          <Button
            letterSpacing="2px"
            _hover={{
              transform: "scale(1.07)",
            }}
            onClick={() => {
              onToggle();
              calculationDog(ageValue, sizeValue);
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
            letterSpacing="2px"
            _hover={{
              bg: "#f54d3e",
              transition: "all 0.5s ease-in-out",
              transform: "scale(1.07)",
              boxShadow: "0px 0px 5px 3px #e7413373",
            }}
            onClick={() => {
              setAgeValue("0");
              setSizeValue(null);
              setResult(null);
              onClose();
            }}
          >
            <Tooltip label="reset values">clear</Tooltip>
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
export default DogCalculator;
