import React from "react";
import CardActions, { CardActionsProps } from "@mui/material/CardActions";

interface CommonCardActionsProps extends CardActionsProps {}

const CommonCardActions: React.FC<CommonCardActionsProps> = (props) => {
  return <CardActions {...props} />;
};

export default CommonCardActions;
