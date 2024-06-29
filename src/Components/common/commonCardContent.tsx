import React from "react";
import CardContent, { CardContentProps } from "@mui/material/CardContent";

interface CommonCardContentProps extends CardContentProps {}

const CommonCardContent: React.FC<CommonCardContentProps> = (props) => {
  return <CardContent {...props} />;
};

export default CommonCardContent;
