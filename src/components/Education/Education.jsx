import { Grid } from "@material-ui/core";
import React from "react";
import CustomContainer from "../Shared/CustomContainer";
import SectionNumber from "../Shared/SectionNumber";
import "./Education.css";

function Education() {
  return (
    <div className="education-bg">
      <CustomContainer maxWidth="lg" height="100vh">
        <Grid container direction="column" spacing={4}>
          <Grid item container justify="flex-end">
            <h1 className="large-header white-text">Education</h1>
          </Grid>
          <Grid item container justify="center" spacing={4}>
            <Grid
              item
              container
              justify="flex-start"
              xs={12}
              md={6}
              alignContent="stretch"
            >
              <div className="education-text education-left">
                <p>
                  University of Maryland,
                  <br />
                  College Park
                </p>
                <p>
                  B.S. Computer Science <br />
                  Aug 2017 - Dec. 2020 <br />
                  GPA: 3.75 <br />
                  Upper Level Concentration in Math / Stat
                </p>
              </div>
            </Grid>
            <Grid
              item
              container
              justify="flex-start"
              alignContent="stretch"
              xs={12}
              md={6}
              className="education-card-container"
            >
              <div className="education-text education-right">
                <p>
                  Vice President / Vice Chair <br />
                  UMD Association For Computing Machinery
                </p>
                <p>
                  Coordinated several events with UMD faculty, companies, and
                  students. Some of the events include "Capital One Coding
                  Interview Workshop", "Coding Interview Guide", "CS Trivia
                  Night", and "Iribe Rooftop Ice Cream Social." During my reign,
                  the club saw a 40% increase in members.
                </p>
              </div>
            </Grid>
          </Grid>
          <Grid item container justify="flex-end">
            <SectionNumber number="0x4" light />
          </Grid>
        </Grid>
      </CustomContainer>
    </div>
  );
}

export default Education;
