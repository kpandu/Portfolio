import { Grid } from "@material-ui/core";
import React from "react";
import CenteredGridContainer from "../Shared/CenteredGridContainer";
import CustomContainer from "../Shared/CustomContainer";
import "./Education.css";

function Education() {
  return (
    <div className="education">
      <CustomContainer maxWidth="lg">
        <Grid container>
          <Grid container item xs={12} className="education-card">
            <Grid item xs={12} sm={6}>
              <h1 className="medium-header education-header">
                University of Maryland <br /> (UMD)
              </h1>
            </Grid>

            <Grid item className="education-text-inner" xs={12} sm={6}>
              B.S. Computer Science <br />
              Aug 2017 - Dec. 2020 <br />
              GPA: 3.75 <br />
              Upper Level Concentration in Math / Stat
            </Grid>
          </Grid>
          <Grid container item xs={12} className="education-card">
            <Grid item xs={12} sm={6}>
              <h1 className="medium-header education-header">UMD ACM</h1>
              <br />
              Vice President / Vice Chair
            </Grid>
            <Grid item className="education-text-inner" xs={12} sm={6}>
              Coordinated several events with UMD faculty, companies, and
              students. Some of the events include "Capital One Coding Interview
              Workshop", "Coding Interview Guide", "CS Trivia Night", and "Iribe
              Rooftop Ice Cream Social." During my reign, the club saw a 40%
              increase in members.
            </Grid>
          </Grid>
        </Grid>
      </CustomContainer>
    </div>
  );
}

export default Education;
