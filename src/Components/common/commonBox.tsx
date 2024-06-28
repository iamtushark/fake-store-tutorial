import React from "react";
import { Box, BoxProps } from "@mui/material";

interface CommonBoxProps extends BoxProps {}

const CommonBox: React.FC<CommonBoxProps> = (props) => {
  return <Box {...props} />;
};

export default CommonBox;
