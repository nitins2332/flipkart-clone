import { Box, styled } from "@mui/material";
import { React, useEffect } from "react";

// Components
import NavBar from "./NavBar";
import Banner from "./Banner";

import { getProducts } from "../../Redux/Actions/ProductActions";
import { useDispatch, useSelector } from "react-redux";

const Component = styled(Box)`
  padding: 10px;
  background: #f2f2f2;
`;

const Home = () => {
  const getAllProducts = useSelector((state) => state.getProducts);
  const { products } = getAllProducts;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  return (
    <Box>
      {/* NavBar */}
      <NavBar />
      <Component>
        {/* Banner */}
        <Banner />
      </Component>
    </Box>
  );
};

export default Home;
