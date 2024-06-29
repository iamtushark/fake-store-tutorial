import React, { memo } from "react";
import { Link } from "react-router-dom";

import CommonAppBar from "./common/commonAppBar";
import CommonTypography from "./common/CommonTypography";
import CommonButton from "./common/CommonButtonFIeld";
import CommonToolBar from "./common/commonToolBar";
import CommonBadge from "./common/commonBadge";

import { useCart } from "../Contexts/CartContext/CartContext";

interface NavbarProps {
  currentPath: string;
}

const Navbar: React.FC<NavbarProps> = memo(({ currentPath }) => {
  const isHome = currentPath === "/";
  const isCart = currentPath === "/cart";
  const cart = useCart();
  const cartItemCount = Object.keys(cart).length;

  return (
    <>
      <CommonAppBar position="sticky" sx={{ backgroundColor: "black" }}>
        <CommonToolBar sx={{ flexGrow: 1 }}>
          <CommonTypography variant="h6" sx={{ flexGrow: 1 }}>
            Fake Store
          </CommonTypography>
          {isCart && (
            <CommonButton color="inherit" variant="outlined">
              <Link to="/">
                <CommonBadge color="secondary">Home</CommonBadge>
              </Link>
            </CommonButton>
          )}
          {isHome && (
            <CommonButton color="inherit" variant="outlined">
              <Link to="/cart">
                <CommonBadge badgeContent={cartItemCount} color="secondary">
                  Cart
                </CommonBadge>
              </Link>
            </CommonButton>
          )}
        </CommonToolBar>
      </CommonAppBar>
    </>
  );
});

export default Navbar;
