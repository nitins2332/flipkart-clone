import { Box, styled } from "@mui/material";
import React from "react";

import Slide from "./Slide";

const Component = styled(Box)`
  display: flex;
`;

const LeftComponent = styled(Box)(({ theme }) => ({
  width: "83%",
  [theme.breakpoints.down("md")]: {
    width: "100%",
  },
}));

const RightComponent = styled(Box)(({ theme }) => ({
  background: "#ffffff",
  padding: "5px",
  marginTOp: "10px",
  marginLeft: "10px",
  width: "17%",
  textAlign: "center",
  [theme.breakpoints.down("md")]: {
    display: "none",
  },
}));

const MidSlide = ({ products, timer, title }) => {
  const addURL =
    "https://rukminim1.flixcart.com/image/832/832/ktn9pjk0/sari/e/q/y/free-leaf-jall-firozi-divastri-unstitched-original-imag6ydxnhvtcn8q.jpeg?q=70";

  return (
    <Component>
      <LeftComponent>
        <Slide products={products} title={title} timer={timer} />
      </LeftComponent>
      <RightComponent>
        <img src={addURL} alt="addImage" style={{ width: 180 }} />
      </RightComponent>
    </Component>
  );
};

export default MidSlide;
