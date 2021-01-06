import { Grid } from "@material-ui/core";
import React from "react";
import "./FullProjectCard.css";
import CustomContainer from "../Shared/CustomContainer";
import CenteredGridContainer from "../Shared/CenteredGridContainer";
function FullProjectCard({ title, description, body, className }) {
  return (
    <Grid item>
      <div className={className + " full-project-container"}>
        <CustomContainer maxWidth="lg">
          <CenteredGridContainer>
            <div className="full-project-body">{body}</div>
            <Grid
              container
              className="full-project-text"
              justify="space-between"
            >
              <h1 className="project-header">{title}</h1>
              <p className="project-body">{description}</p>
            </Grid>
          </CenteredGridContainer>
        </CustomContainer>
      </div>
    </Grid>
  );
}

export default FullProjectCard;
