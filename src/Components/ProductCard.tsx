import React, { useState } from "react";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Box,
} from "@mui/material";
import CommonTypography from "./common/CommonTypography";
import { ProductCardProps } from "../Interfaces/ProductCardInterface";
import { useCartDispatch } from "../Contexts/CartContext/CartContext";
import CommonButton from "./common/CommonButtonFIeld";

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
    <Card
      sx={{
        display: "flex",
        flexDirection: "column",
        height: "100%",
        bgcolor: "grey",
        color: "white",
      }}
    >
      <CardMedia
        component="img"
        image={image}
        sx={{ height: 150, width: "100%", objectFit: "cover" }}
        alt={title}
        title={title}
      />
      <Box
        sx={{
          flexGrow: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          p: 2,
        }}
      >
        <CardContent sx={{ flexGrow: 1 }}>
          <CommonTypography variant="h5" gutterBottom>
            {title.length > 35 ? `${title.slice(0, 35)}...` : title}
          </CommonTypography>
          <CommonTypography variant="body2" gutterBottom>
            {description.length > 90
              ? `${description.slice(0, 90)}...`
              : description}
          </CommonTypography>
        </CardContent>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            mt: 2,
          }}
        >
          <CommonTypography variant="h6">${price}</CommonTypography>
          <CardActions sx={{ padding: 0 }}>
            <CommonButton size="small" color="secondary" onClick={toggleCart}>
              {inCart ? "Remove from Cart" : "Add to Cart"}
            </CommonButton>
          </CardActions>
        </Box>
      </Box>
    </Card>
  );
};

export default ProductCard;
