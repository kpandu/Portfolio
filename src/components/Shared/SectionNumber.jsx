import { Grid } from "@material-ui/core";
import React from "react";
import "./SectionNumber.css";

function SectionNumber({ number, light }) {
  return (
    <Grid container alignItems="center" spacing={2}>
      <Grid item>
        <p className={light ? "section-number-white" : "section-number-black"}>
          {number}
        </p>
      </Grid>
      <Grid item>
        <hr className="section-number-hr" />
      </Grid>
    </Grid>
  );
}

export default SectionNumber;
