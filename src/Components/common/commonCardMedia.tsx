import React from "react";
import CardMedia, { CardMediaProps } from "@mui/material/CardMedia";

interface CommonCardMediaProps extends CardMediaProps {}

const CommonCardMedia: React.FC<CommonCardMediaProps> = (props) => {
  return <CardMedia {...props} />;
};

export default CommonCardMedia;
