import React from "react";
import Card, { CardProps } from "@mui/material/Card";

interface CommonCardProps extends CardProps {}

const CommonCard: React.FC<CommonCardProps> = (props) => {
  return <Card {...props} />;
};

export default CommonCard;
