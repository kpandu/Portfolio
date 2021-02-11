import { Grid } from "@material-ui/core";
import React from "react";
import CenteredGridContainer from "../../Shared/CenteredGridContainer";
import CustomContainer from "../../Shared/CustomContainer";
import "./FullMobileCard.css";

function FullMobileCard({ title, description, body, className, index = "X" }) {
  return (
    <Grid item className="full-mobile-card-grid-item">
      <div className={className + " full-mobile-card-container"}>
        <CustomContainer maxWidth="lg">
          <CenteredGridContainer>
            <div className="full-mobile-card-body">{body}</div>

            <Grid
              container
              justify="space-between"
              className="full-mobile-card-text"
            >
              <h1 className="project-header">{title}</h1>
              <Grid item xs={12} md={6}>
                <p className="project-body">{description}</p>
                <Grid item container alignItems="center">
                  <div className="full-mobile-card-hr" />
                  <p className="full-mobile-card-number">0{index}</p>
                </Grid>
              </Grid>
            </Grid>
          </CenteredGridContainer>
        </CustomContainer>
      </div>
    </Grid>
  );
}

export default FullMobileCard;
