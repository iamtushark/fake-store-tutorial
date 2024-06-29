import React from "react";
import Badge, { BadgeProps } from "@mui/material/Badge";

interface CommonBadgeProps extends BadgeProps {}

const CommonBadge: React.FC<CommonBadgeProps> = (props) => {
  return <Badge {...props} />;
};

export default CommonBadge;
