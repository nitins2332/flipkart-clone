// Components
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import DetailView from "./Components/Details/DetailView";
import Cart from "./Components/Cart/Cart";
import Payment from "./Components/PaymentPage/Payment";
import DataProvider from "./Context/DataProvider";

import { Box } from "@mui/material";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <DataProvider>
      <BrowserRouter>
        {/* Header */}
        <Header />
        {/* Home */}
        <Box style={{ marginTop: 54 }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/product/:id" element={<DetailView />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/payment" element={<Payment />} />
          </Routes>
        </Box>
      </BrowserRouter>
    </DataProvider>
  );
}

export default App;
