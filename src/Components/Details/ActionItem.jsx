import { React, useState } from "react";
import { Box, Button, styled } from "@mui/material";
import { ShoppingCart, FlashOn } from "@mui/icons-material";
import { Link } from "react-router-dom";

import { useNavigate } from "react-router-dom";

import { useDispatch } from "react-redux";
import { addToCart } from "../../Redux/Actions/CartAction";

const LeftContainer = styled(Box)(({ theme }) => ({
  minWidth: "40%",
  padding: "40px 0 0 80px",
  [theme.breakpoints.down("lg")]: {
    padding: "20px 40px",
  },
}));

const Image = styled("img")({
  padding: "15px",
});

const StyledButton = styled(Button)`
  width: 48%;
  height: 50px;
  border-radius: 2px;
  margin-top: 10px;
`;

const ActionItem = ({ product }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(1);

  const { id } = product;

  const addItemToCart = () => {
    dispatch(addToCart(id, quantity));
    navigate("/cart");
  };

  return (
    <LeftContainer>
      <Box
        style={{
          padding: "15px 20px",
          border: "1px solid #f0f0f0",
          width: "90%",
        }}
      >
        <Image src={product.detailUrl} alt="" />
      </Box>

      <StyledButton
        variant="contained"
        style={{ marginRight: 10, background: "#ff9f00" }}
        onClick={() => addItemToCart()}
      >
        <ShoppingCart />
        Add to Cart
      </StyledButton>

      <StyledButton
        variant="outlined"
        style={{ background: "#fb541b", color: "#ffffff" }}
      >
        <FlashOn />
        Buy now
      </StyledButton>
    </LeftContainer>
  );
};

export default ActionItem;
