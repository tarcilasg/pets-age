import { Box, Flex } from "@chakra-ui/react";
import Routers from "./routes";

function App() {
  return (
    <>
      <Box
        backgroundImage="url('wave-haikei_orange.svg')"
        backgroundPosition="center"
        backgroundRepeat="no-repeat"
      >
        <Routers />
      </Box>
    </>
  );
}
export default App;
