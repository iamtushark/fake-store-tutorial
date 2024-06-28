import React from "react";
import Button, { ButtonProps } from "@mui/material/Button";

interface CommonButtonProps extends ButtonProps {}

const CommonBox: React.FC<CommonButtonProps> = (props) => {
  return <Button {...props} variant="contained" />;
};

export default CommonBox;
