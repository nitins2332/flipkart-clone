import React from "react";

import { Box, AppBar, Toolbar, styled, Typography } from "@mui/material";

import { logoURL, subURL } from "../../Constents/Data";

// Components
import Search from "./Search";
import CustomButton from "./CustomButton";

const StyledHeader = styled(AppBar)`
  background: #2874f0;
  height: 57px;
`;

const Components = styled(Box)`
  margin-left: 12%;
  line-height: 0;
`;

const SubHeading = styled(Typography)`
  font-size: 10px;
  font-style: italic;
`;

const PlusImage = styled("img")({
  width: 10,
  height: 10,
  marginLeft: 4,
});

const CustomButtonWrapper = styled(Box)`
  margin: 0 5% 0 auto;
`;

const Header = () => {
  return (
    <div>
      <StyledHeader>
        <Toolbar style={{ minHeight: 55 }}>
          {/* Main Logo */}
          <Components>
            <img src={logoURL} alt="logo" style={{ width: 75 }} />
            <Box style={{ display: "flex" }}>
              <SubHeading>
                Explore&nbsp;
                <Box component="span" style={{ color: "#ffe500" }}>
                  Plus
                </Box>
              </SubHeading>
              <PlusImage src={subURL} alt="SubHeading" />
            </Box>
          </Components>

          {/* Search Bar */}
          <Search />

          {/* Custom Buttons */}
          <CustomButtonWrapper>
            <CustomButton />
          </CustomButtonWrapper>
        </Toolbar>
      </StyledHeader>
    </div>
  );
};

export default Header;
