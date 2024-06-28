import React from "react";
import { Container, ContainerProps } from "@mui/material";

interface CommonContainerProps extends ContainerProps {}

const CommonContainer: React.FC<CommonContainerProps> = (props) => {
  return <Container {...props} />;
};

export default CommonContainer;
