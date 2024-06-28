import React from "react";
import { CircularProgress, CircularProgressProps } from "@mui/material";

interface CommonCircularProgressProps extends CircularProgressProps {}

const CommonCircularProgress: React.FC<CommonCircularProgressProps> = (
  props,
) => {
  return <CircularProgress {...props} />;
};

export default CommonCircularProgress;
