import React from "react";
import AppBar, { AppBarProps } from "@mui/material/AppBar";

interface CommonAppBarProps extends AppBarProps {}

const CommonAppBar: React.FC<CommonAppBarProps> = (props) => {
  return <AppBar {...props} sx={{ backgroundColor: '#000000' }}/>;
};

export default CommonAppBar;
