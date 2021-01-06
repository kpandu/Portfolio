import { Grid } from "@material-ui/core";
import React from "react";

function CenteredGridContainer(props) {
  let children = props.children;
  return (
    <Grid container item justify="center" alignItems="center" {...props}>
      {children}
    </Grid>
  );
}

export default CenteredGridContainer;
