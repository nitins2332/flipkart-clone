import { Box } from "@mui/material";
import React from "react";

import { imageURL } from "../../Constents/Data";

const MidSection = () => {
  return (
    <Box style={{ display: "flex" }}>
      {imageURL.map((image) => (
        <img src={image} alt="banner" style={{ width: "100%" }} />
      ))}
    </Box>
  );
};

export default MidSection;
