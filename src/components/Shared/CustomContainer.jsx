import React from "react";
import { Container } from "@material-ui/core";
import "./CustomContainer.css";

function CustomContainer(props) {
  return (
    <Container
      maxWidth={props.maxWidth || "xl"}
      className={`custom-container ${props.className || ""}`}
      style={{
        display: "flex",
        minHeight: props.height,
        justifyContent: props.justify || "center",
        alignItems: props.alignItems || "center",
      }}
      id={props.id}
    >
      {props.children}
    </Container>
  );
}

export default CustomContainer;
