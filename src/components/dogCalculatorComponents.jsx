import { useEffect, useState, useContext } from "react";
import { CalculatorDogContext } from "../Providers/calculatorDog";

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
  useDisclosure,
} from "@chakra-ui/react";
import { BsSuitHeart } from "react-icons/bs";

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
      <Box w="100%" p={4} color="white">
        vai ser a nav
      </Box>
      <Box mt="90px" mb="30px">
        <Heading as="h2" size="2xl" alignText="center">
          the human's age of your dog <Icon as={BsSuitHeart} w="20px" />
        </Heading>
      </Box>
      <Divider orientation="horizontal" w="65%" borderBottomWidth="2px" />
      <RadioGroup onChange={setSizeValue} value={sizeValue}>
        <Stack spacing={6} direction="row">
          <Radio value="mini">until 10kg</Radio>
          <Radio value="little">until 20kg</Radio>
          <Radio value="big">until 40kg</Radio>
          <Radio value="giant">more than 40kg</Radio>
        </Stack>
      </RadioGroup>
      <Flex>
        <NumberInput
          size="lg"
          maxW={32}
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
      <Button
        onClick={() => {
          onToggle();
          calculationDog(ageValue, sizeValue);
        }}
      >
        convert
      </Button>
      <Fade in={isOpen}>
        <Box
          p="40px"
          color="white"
          mt="4"
          bg="teal.500"
          rounded="md"
          shadow="md"
        >
          human age: {result} years old
        </Box>
      </Fade>
      <Button
        onClick={() => {
          setAgeValue("0");
          setSizeValue(null);
          setResult(null);
          onClose();
        }}
      >
        clear
      </Button>
    </Flex>
  );
};
export default DogCalculator;
