import React from "react";
import Button, { ButtonProps } from "@mui/material/Button";

interface CommonButtonProps extends ButtonProps {}

const CommonButton: React.FC<CommonButtonProps> = ({ sx, ...props }) => {
  return (
    <Button {...props} variant="contained"/>
  );
};

export default CommonButton;
