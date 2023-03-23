import { React } from "react";
import { Box, Typography, styled, Button } from "@mui/material";
import { useDispatch } from "react-redux";

import { addEllipsis } from "../../utils/Common-utils";
import ButtonGroup from "./ButtonGroup";

import { removeFromCart } from "../../Redux/Actions/CartAction";

const Component = styled(Box)`
  border-top: 1px solid #f0f0f0;
  background: #fff;
  display: flex;
`;

const LeftComponent = styled(Box)`
  margin: 20px;
  display: flex;
  flex-direction: column;
`;

const SmallText = styled(Box)`
  color: #878787;
  font-size: 14px;
  margin-top: 10px;
`;

const Remove = styled(Button)`
  margin-top: 20px;
  font-weight: 600;
`;

const CartItem = ({ item }) => {
  const fassured =
    "https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png";

  const dispatch = useDispatch();

  const removeItemFromCart = (id) => {
    dispatch(removeFromCart(id));
  };

  return (
    <Component>
      <LeftComponent>
        <img src={item.url} alt="Product" style={{ height: 110, width: 110 }} />
        <ButtonGroup />
      </LeftComponent>
      <Box style={{ margin: 20 }}>
        <Typography>{addEllipsis(item.title.longTitle)}</Typography>
        <SmallText style={{ display: "flex" }}>
          Seller:RetailNet
          <Box Component={"span"}>
            <img
              src={fassured}
              alt="flipkart"
              style={{ width: 50, marginLeft: 10 }}
            />
          </Box>
        </SmallText>
        <Typography style={{ margin: "20px 0" }}>
          <Box component="span" style={{ fontWeight: 600, fontSize: 18 }}>
            ₹{item.price.cost}
          </Box>
          &nbsp;&nbsp;&nbsp;
          <Box component={"span"} style={{ color: "#878787" }}>
            <strike>₹{item.price.mrp}</strike>
          </Box>
          &nbsp;&nbsp;&nbsp;
          <Box component={"span"} style={{ color: "#388e3c" }}>
            {item.price.discount}
          </Box>
          &nbsp;&nbsp;&nbsp;
        </Typography>
        <Remove variant="contained" onClick={() => removeItemFromCart(item.id)}>
          Remove
        </Remove>
      </Box>
    </Component>
  );
};

export default CartItem;
