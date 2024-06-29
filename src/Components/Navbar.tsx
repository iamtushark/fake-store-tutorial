import React from "react";
import { Link } from "react-router-dom";
import CommonAppBar from "./common/commonAppBar";
import CommonTypography from "./common/CommonTypography";
import CommonButton from "./common/CommonButtonFIeld";
import CommonToolBar from "./common/commonToolBar";

interface NavbarProps {
  currentPath: string;
}

const Navbar: React.FC<NavbarProps> = React.memo(({ currentPath }) => {
  const isHome = currentPath === "/";
  const isCart = currentPath === "/cart";

  return (
    <>
      <CommonAppBar position="static">
        <CommonToolBar sx={{ flexGrow: 1 }}>
          <CommonTypography variant="h6" sx={{ flexGrow: 1 }}>
            Fake Store
          </CommonTypography>
          {isCart && (
            <CommonButton color="inherit" variant="outlined">
              <Link to="/">Home</Link>
            </CommonButton>
          )}
          {isHome && (
            <CommonButton color="inherit" variant="outlined">
              <Link to="/cart">Cart</Link>
            </CommonButton>
          )}
        </CommonToolBar>
      </CommonAppBar>
    </>
  );
});

export default Navbar;
