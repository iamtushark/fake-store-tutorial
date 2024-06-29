import React, { useEffect, useState } from "react";
import getProducts from "./utils/getProducts";
import ProductCardInterface from "../../Interfaces/ProductCardInterface";
import ProductCard from "../../Components/ProductCard";
import CommonCircularProgress from "../../Components/common/commonCircularProgress";
import { useCart } from "../../Contexts/CartContext/CartContext";
import { Box, Grid, Typography } from "@mui/material";

const Products: React.FC = () => {
  const [products, setProducts] = useState<ProductCardInterface[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const cart = useCart();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await getProducts();
        setProducts(data);
        setError(null);
      } catch (error) {
        setError("Failed to fetch products");
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return <CommonCircularProgress />;
  }

  if (error) {
    return (
      <Box sx={{ textAlign: "center", color: "red" }}>
        <Typography variant="h6">{error}</Typography>
      </Box>
    );
  }

  return (
    <Box sx={{ flexGrow: 1, color: "white", p: 3 }}>
      <Grid container spacing={5}>
        {products.map((product) => {
          const isInCart = !!cart && !!cart[product.id];
          return (
            <Grid item xs={12} sm={6} md={4} key={product.id}>
              <ProductCard {...product} isInCart={isInCart} />
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
};

export default Products;
