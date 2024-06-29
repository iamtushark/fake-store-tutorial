import React from "react";
import Grid, { GridProps } from "@mui/material/Grid";

interface CommonGridProps extends GridProps {}

const CommonGrid: React.FC<CommonGridProps> = (props) => {
  return <Grid {...props} />;
};

export default CommonGrid;
