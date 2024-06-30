import React, { useEffect, useState } from "react";

import getProducts from "./utils/getProducts";

import { useCart } from "../../Contexts/CartContext/CartContext";

import ProductCardInterface from "../../Interfaces/ProductCardInterface";
import ProductCard from "../../Components/ProductCard";

import CommonCircularProgress from "../../Components/common/commonCircularProgress";
import CommonBox from "../../Components/common/commonBox";
import CommonGrid from "../../Components/common/commonGrid";
import CommonTypography from "../../Components/common/CommonTypography";

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
    return (
      <CommonBox
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <CommonCircularProgress size={80} sx={{ color: "black" }} />
      </CommonBox>
    );
  }

  if (error) {
    return (
      <CommonBox sx={{ textAlign: "center", color: "red" }}>
        <CommonTypography variant="h6">{error}</CommonTypography>
      </CommonBox>
    );
  }

  return (
    <CommonBox sx={{ flexGrow: 1, color: "black", p: 3 }}>
      <CommonGrid container spacing={2} sx={{color: "black"}}>
        {products.map((product) => {
          const isInCart = !!cart && !!cart[product.id];
          return (
            <CommonGrid item xs={12} key={product.id}>
              <ProductCard {...product} isInCart={isInCart} />
            </CommonGrid>
          );
        })}
      </CommonGrid>
    </CommonBox>
  );
};

export default Products;
