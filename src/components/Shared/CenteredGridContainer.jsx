import { Grid } from "@material-ui/core";
import React from "react";
import "./CenteredGridContainer.css";

function CenteredGridContainer(props) {
  let children = props.children;
  return (
    <Grid
      container
      item
      justify="center"
      alignItems="center"
      {...props}
      className={`${props.className} centered-grid-container`}
    >
      {children}
    </Grid>
  );
}

export default CenteredGridContainer;
