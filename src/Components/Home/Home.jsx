import { Box, styled } from "@mui/material";
import { React, useEffect } from "react";

// Components
import NavBar from "./NavBar";
import Banner from "./Banner";
import Slide from "./Slide";
import MidSlide from "./MidSlide";
import MidSection from "./MidSection";

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
        <MidSlide products={products} title="Deal of the Day" timer={true} />
        <MidSection />
        <Slide products={products} title="Discounts for you" timer={false} />
        <Slide products={products} title="Suggesting Items" timer={false} />
        <Slide products={products} title="Top Selection" timer={false} />
        <Slide products={products} title="Recommended Items" timer={false} />
        <Slide products={products} title="Trending Offers" timer={false} />
        <Slide products={products} title="Season's top picks" timer={false} />
        <Slide
          products={products}
          title="Top Deals on Accessories"
          timer={false}
        />
      </Component>
    </Box>
  );
};

export default Home;
