import { Box, styled } from "@mui/material";
import React from "react";

import Slide from "./Slide";

const Component = styled(Box)`
  display: flex;
`;

const LeftComponent = styled(Box)`
  width: 83%;
`;

const RightComponent = styled(Box)`
  background: #ffffff;
  padding: 5px;
  margin-top: 10px;
  margin-left: 10px;
  width: 17%;
  text-align: center;
`;

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
