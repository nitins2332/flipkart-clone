import { Box, Typography, Menu, MenuItem, styled } from "@mui/material";
import { PowerSettingsNew } from "@mui/icons-material";

import { React, useState } from "react";

const Component = styled(Menu)`
  margin-top: 5px;
`;

const LogoutStyle = styled(Typography)`
  font-size: 14px;
  margin-left: 20px;
`;

const Profile = ({ account, setAccount }) => {
  const [open, setOpen] = useState(false);

  const handleClick = (event) => {
    setOpen(event.currentTarget);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const LogoutUser = () => {
    setAccount("");
  };

  return (
    <Box>
      <Box onClick={handleClick}>
        <Typography style={{ marginTop: 2, cursor: "pointer" }}>
          {account}
        </Typography>
      </Box>

      <Component anchorEl={open} open={Boolean(open)} onClose={handleClose}>
        <MenuItem
          onClick={() => {
            handleClose();
            LogoutUser();
          }}
        >
          <PowerSettingsNew color="primary" fontSize="small" />
          <LogoutStyle>Logout</LogoutStyle>
        </MenuItem>
      </Component>
    </Box>
  );
};

export default Profile;
