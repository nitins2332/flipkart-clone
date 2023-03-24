import { React } from "react";
import { Box, Grid, Typography, styled, Button } from "@mui/material";

import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import CartItem from "./CartItem";
import TotalView from "./TotalView";
import EmptyCart from "./EmptyCart";

const Container = styled(Grid)`
  padding: 30px 135px;
`;

const Header = styled(Box)`
  padding: 15px 24px;
  background: #fff;
`;

const ButtonWrapper = styled(Box)`
  border-top: 1px solid #f0f0f0;
  padding: 16px 22px;
  background: #fff;
  box-shadow: 0 -2px 10px 0 rgb(0 0 0 / 10%);
`;

const StyledButton = styled(Button)`
  display: flex;
  margin-left: auto;
  width: 250px;
  height: 51px;
  border-radius: 2px;
`;

const LeftComponent = styled(Grid)`
  padding-right: 15px;
`;

const Cart = () => {
  const navigate = useNavigate();
  const { cartItems } = useSelector((state) => state.cart);

  const placeOrder = () => {
    navigate("/payment");
  };

  return (
    <>
      {cartItems.length ? (
        <Container container>
          <LeftComponent item lg={9} md={9} sm={12} xs={12}>
            <Header>
              <Typography>My Cart ({cartItems.length})</Typography>
            </Header>
            {cartItems.map((item) => (
              <CartItem item={item} />
            ))}
            <ButtonWrapper>
              <StyledButton
                variant="contained"
                color="success"
                onClick={() => placeOrder()}
              >
                Place Order
              </StyledButton>
            </ButtonWrapper>
          </LeftComponent>
          <Grid item lf={3} md={3} sm={12} xs={12}>
            <TotalView cartItems={cartItems} />
          </Grid>
        </Container>
      ) : (
        <EmptyCart />
      )}
    </>
  );
};

export default Cart;
