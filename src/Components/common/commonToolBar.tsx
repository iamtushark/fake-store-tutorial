import React from "react";
import ToolBar, { ToolbarProps } from "@mui/material/Toolbar";

interface CommonToolBarProps extends ToolbarProps {}

const CommonToolBar: React.FC<CommonToolBarProps> = (props) => {
  return <ToolBar {...props} />;
};

export default CommonToolBar;
