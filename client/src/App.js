
import Navbar from "./components/Navbar";
import AllRoutes from "./allRoutes/AllRoutes";
import { Box } from "@chakra-ui/react";


function App() {
  return (
    <Box height={"100vh"} >
      <Navbar />
      <AllRoutes />
    </Box>
  );
}

export default App;
