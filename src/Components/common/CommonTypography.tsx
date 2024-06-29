import React, { ReactNode } from "react";
import Typography from "@mui/material/Typography";
import { TypographyProps } from "@mui/material/Typography";

interface CommonTypographyProps extends TypographyProps {}

const CommonTypography: React.FC<CommonTypographyProps> = (props) => (
  <Typography {...props} />
);

export default CommonTypography;
