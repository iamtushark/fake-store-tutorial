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
        flexDirection: { xs: "column", sm: "row" },
        bgcolor: "white",
        color: "black",
        p: 2,
        mb: 2,
        alignItems: "center",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        borderRadius: "8px",
      }}
    >
      <CommonBox
        sx={{
          height: { xs: 200, sm: 150 },
          width: { xs: "100%", sm: 150 },
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginBottom: { xs: 2, sm: 0 },
          marginRight: { sm: 2 },
        }}
      >
        <CommonCardMedia
          component="img"
          image={image}
          sx={{
            maxHeight: "100%",
            maxWidth: "100%",
            objectFit: "contain",
            borderRadius: "8px",
          }}
          title={title}
        />
      </CommonBox>
      <CommonBox
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          width: "100%",
          p: 1,
        }}
      >
        <CommonCardContent sx={{ flexGrow: 1, padding: 0 }}>
          <CommonTypography variant="h6" gutterBottom noWrap>
            {title.length > 80 ? `${title.slice(0, 80)}...` : title}
          </CommonTypography>
          <CommonTypography variant="body2" color="textSecondary" noWrap>
            {description.length > 90
              ? `${description.slice(0, 90)}...`
              : description}
          </CommonTypography>
          <CommonTypography variant="h6" sx={{ mt: 1 }}>
            ${price}
          </CommonTypography>
        </CommonCardContent>
        <CommonCardActions sx={{ padding: 0, mt: 2 }}>
          <CommonButton size="small" color={inCart ? "error" : "primary"} onClick={toggleCart}>
            {inCart ? "Remove from Cart" : "Add to Cart"}
          </CommonButton>
        </CommonCardActions>
      </CommonBox>
    </CommonCard>
  );
};

export default ProductCard;
