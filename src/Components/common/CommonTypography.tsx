import React, { ReactNode } from "react";
import Typography from "@mui/material/Typography";
import { TypographyProps } from "@mui/material/Typography";

interface ServiceDetailsTypographyProps {
  children: ReactNode;
  variant: TypographyProps["variant"];
}

const CommonTypographyHeading: React.FC<ServiceDetailsTypographyProps> = ({
  children,
  variant,
}) => (
  <Typography variant={variant} gutterBottom>
    {children}
  </Typography>
);

export default CommonTypographyHeading;
