import React, { useState } from "react";
import CenteredGridContainer from "../../Shared/CenteredGridContainer";
import { useSpring, animated as a } from "react-spring";

import "./SmallProjectCard.css";
import { Grid } from "@material-ui/core";
import CustomContainer from "../../Shared/CustomContainer";

function SmallProjectCard({
  title,
  img,
  description,
  video,
  tags = [],
  index = "X",
}) {
  return (
    <Grid container xs={12} md={6} justify="center">
      <div>
        <Grid item container xs={12} alignItems="center">
          <p className="small-proj-card-number">0{index}</p>
          <div className="small-proj-card-hr" />
        </Grid>

        <img src={img} className="small-proj-card-img" />
        <div>
          <h1 className="small-proj-header">{title}</h1>
          <p className="small-proj-body">{description}</p>
          {tags.map((tag, i) => (
            <p key={`${title}-tag-${i}`} className="small-proj-tags">
              {tag}
            </p>
          ))}
        </div>
      </div>
    </Grid>
  );
}

export default SmallProjectCard;
