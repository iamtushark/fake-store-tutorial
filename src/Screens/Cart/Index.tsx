import React from "react";

import {
  useCart,
  useCartDispatch,
} from "../../Contexts/CartContext/CartContext";

import ProductCard from "../../Components/ProductCard";
import CommonTypography from "../../Components/common/CommonTypography";
import CommonBox from "../../Components/common/commonBox";
import CommonButton from "../../Components/common/CommonButtonFIeld";
import CommonGrid from "../../Components/common/commonGrid";

const CartPage: React.FC = () => {
  const cart = useCart();
  const dispatch = useCartDispatch();

  const handleClearCart = () => {
    dispatch({ type: "cleared" });
  };

  if (Object.keys(cart).length === 0) {
    return (
      <CommonTypography variant="h4">Your cart is empty.</CommonTypography>
    );
  }

  return (
    <>
      <CommonBox sx={{ flexGrow: 1, color: "white", p: 3 }}>
        <CommonGrid container spacing={5}>
          {Object.entries(cart).map(([key, item]) => (
            <CommonGrid item xs={12} sm={6} md={4} key={Number(key)}>
              <ProductCard
                key={key}
                id={Number(key)}
                {...item}
                isInCart={true}
              />
            </CommonGrid>
          ))}
        </CommonGrid>
        <CommonButton sx={{ marginTop: "10%" }} onClick={handleClearCart}>
          Clear Cart
        </CommonButton>
      </CommonBox>
    </>
  );
};

export default CartPage;
