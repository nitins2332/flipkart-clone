// Components
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";

import DataProvider from "./Context/DataProvider";

import { Box } from "@mui/material";

function App() {
  return (
    <DataProvider>
      {/* Header */}
      <Header />
      {/* Home */}
      <Box style={{ marginTop: 54 }}>
        <Home />
      </Box>
    </DataProvider>
  );
}

export default App;
