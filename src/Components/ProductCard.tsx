import React, { useState } from "react";

import { ProductCardProps } from "../Interfaces/ProductCardInterface";

import { useCartDispatch } from "../Contexts/CartContext/CartContext";

import CommonTypography from "./common/CommonTypography";
import CommonButton from "./common/CommonButtonFIeld";
import CommonCardMedia from "./common/commonCardMedia";
import CommonCard from "./common/commonCard";
import CommonCardActions from "./common/commonCardActions";
import CommonCardContent from "./common/commonCardContent";
import CommonBox from "./common/commonBox";

const ProductCard: React.FC<ProductCardProps> = ({
  description,
  image,
  price,
  title,
  id,
  isInCart,
}) => {
  const [inCart, setInCart] = useState<boolean>(isInCart);
  const cartDispatch = useCartDispatch();

  const toggleCart = () => {
    if (inCart) {
      cartDispatch({ type: "removed", id });
    } else {
      cartDispatch({
        type: "added",
        item: { id, title, description, image, price },
      });
    }
    setInCart(!inCart);
  };

  return (
    <CommonCard
      sx={{
        display: "flex",
        flexDirection: "column",
        height: "100%",
        bgcolor: "grey",
        color: "white",
      }}
    >
      <CommonCardMedia
        component="img"
        image={image}
        sx={{ height: 150, width: "100%", objectFit: "cover" }}
        title={title}
      />
      <CommonBox
        sx={{
          flexGrow: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          p: 2,
        }}
      >
        <CommonCardContent sx={{ flexGrow: 1 }}>
          <CommonTypography variant="h5" gutterBottom>
            {title.length > 35 ? `${title.slice(0, 35)}...` : title}
          </CommonTypography>
          <CommonTypography variant="body2" gutterBottom>
            {description.length > 90
              ? `${description.slice(0, 90)}...`
              : description}
          </CommonTypography>
        </CommonCardContent>
        <CommonBox
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            mt: 2,
          }}
        >
          <CommonTypography variant="h6">${price}</CommonTypography>
          <CommonCardActions sx={{ padding: 0 }}>
            <CommonButton size="small" color="secondary" onClick={toggleCart}>
              {inCart ? "Remove from Cart" : "Add to Cart"}
            </CommonButton>
          </CommonCardActions>
        </CommonBox>
      </CommonBox>
    </CommonCard>
  );
};

export default ProductCard;
