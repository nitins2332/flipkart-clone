import { React, useState, useContext } from "react";

import {
  Box,
  Button,
  Dialog,
  TextField,
  Typography,
  styled,
} from "@mui/material";

import { authenticateSignup, authenticateLogin } from "../../Service/Api";

import { DataContext } from "../../Context/DataProvider";

const Component = styled(Box)`
  height: 80vh;
  width: 90vh;
`;

const LeftSideWrapper = styled(Box)`
  background: #2874f0
    url(https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/login_img_c4a81e.png)
    center 85% no-repeat;
  height: 85%;
  width: 28%;
  padding: 40px 35px;
  & > p,
  & > h5 {
    color: #fff;
    font-weight: 600;
  }
`;

const RightSideWrapper = styled(Box)`
  display: flex;
  flex-direction: column;
  padding: 25px 35px;
  flex: 1;
  & > div,
  & > button {
    margin-top: 20px;
  }
`;

const LoginButton = styled(Button)`
  text-transform: none;
  height: 48px;
  border-radius: 2px;
`;

const RequestButton = styled(Button)`
  text-transform: none;
  height: 48px;
  border-radius: 2px;
  box-shadow: 0 2px 4px 0 rgb(0 0 0/ 20%);
`;

const Text = styled(Typography)`
  font-size: 12px;
  color: #878787;
  padding-top: 10px;
`;

const CreateAccount = styled(Typography)`
  font-size: 14px;
  padding-top: 20px;
  text-align: center;
  color: #2874f0;
  font-weight: 600;
  cursor: pointer;
`;

const Error = styled(Typography)`
  font-size: 10px;
  color: #ff6161;
  line-height: 0;
  margin-top: 10px;
  font-weight: 600;
`;

const accountIntitialValues = {
  login: {
    view: "login",
    heading: "Login",
    subHeading: "Get access to your Orders, Wishlist and Recommendations",
  },
  signup: {
    view: "signup",
    heading: "Looks like you're new here!",
    subHeading: "Sign up with your mobile number to get started",
  },
};

const signupInitialValues = {
  firstname: "",
  lastname: "",
  username: "",
  email: "",
  password: "",
  phone: "",
};

const loginInitialValues = {
  username: "",
  password: "",
};

const LoginDialog = ({ open, setOpen }) => {
  const [account, toggleAccount] = useState(accountIntitialValues.login);
  const [signup, setSignup] = useState(signupInitialValues);
  const [login, setLogin] = useState(loginInitialValues);
  const [error, setError] = useState(false);

  const { setAccount } = useContext(DataContext);

  const handleClose = () => {
    setOpen(false);
    toggleAccount(accountIntitialValues.login);
    setError(false);
  };

  const toggleSignup = () => {
    toggleAccount(accountIntitialValues.signup);
  };

  const onInputChange = (event) => {
    // console.log(event.target.value);
    setSignup({ ...signup, [event.target.name]: event.target.value });
    // console.log(signup);
  };

  const signupUser = async () => {
    let response = await authenticateSignup(signup);
    // console.log(response);
    if (!response) return;
    handleClose();
    setAccount(signup.firstname);
  };

  const onvalueChange = (event) => {
    setLogin({ ...login, [event.target.name]: event.target.value });
    setError(false);
  };

  const loginUser = async () => {
    let response = await authenticateLogin(login);
    // console.log(response);
    if (response.status === 200) {
      handleClose();
      setAccount(response.data.data.firstname);
    } else {
      setError(true);
    }
  };

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      PaperProps={{ sx: { maxWidth: "unset" } }}
    >
      <Component>
        <Box style={{ display: "flex", height: "100%" }}>
          <LeftSideWrapper>
            <Typography variant="h5">{account.heading}</Typography>
            <Typography style={{ marginTop: 20 }}>
              {account.subHeading}
            </Typography>
          </LeftSideWrapper>

          {account.view === "login" ? (
            <RightSideWrapper>
              <TextField
                variant="standard"
                onChange={(event) => onvalueChange(event)}
                name="username"
                label="Enter Username"
              />
              <TextField
                variant="standard"
                onChange={(event) => onvalueChange(event)}
                name="password"
                label="Enter Password"
              />
              {error && <Error>Please enter valid username or password</Error>}
              <Text>
                By continuing, you agree to FlipKart's Terms of Use and Privacy
                Policy.
              </Text>
              <LoginButton variant="contained" onClick={() => loginUser()}>
                Login
              </LoginButton>
              <Typography style={{ paddingTop: 20, textAlign: "center" }}>
                OR
              </Typography>
              <RequestButton>Request OTP</RequestButton>
              <CreateAccount onClick={() => toggleSignup()}>
                New to FlipKart? Create an account
              </CreateAccount>
            </RightSideWrapper>
          ) : (
            <RightSideWrapper>
              <TextField
                variant="standard"
                onChange={(event) => onInputChange(event)}
                name="firstname"
                label="Enter Firstname"
              />
              <TextField
                variant="standard"
                onChange={(event) => onInputChange(event)}
                name="lastname"
                label="Enter Lastname"
              />
              <TextField
                variant="standard"
                onChange={(event) => onInputChange(event)}
                name="username"
                label="Enter Username"
              />
              <TextField
                variant="standard"
                onChange={(event) => onInputChange(event)}
                name="email"
                label="Enter Email"
              />
              <TextField
                variant="standard"
                onChange={(event) => onInputChange(event)}
                name="password"
                label="Enter Password"
              />
              <TextField
                variant="standard"
                onChange={(event) => onInputChange(event)}
                name="phone"
                label="Enter Phone number"
              />

              <LoginButton variant="contained" onClick={() => signupUser()}>
                Continue
              </LoginButton>
              {/* <RequestButton>Sign In</RequestButton> */}
            </RightSideWrapper>
          )}
        </Box>
      </Component>
    </Dialog>
  );
};

export default LoginDialog;
