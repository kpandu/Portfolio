import { Grid } from "@material-ui/core";
import React from "react";
import CustomContainer from "../Shared/CustomContainer";
import LargeHeader from "../Shared/LargeHeader";
import Paragraph from "../Shared/Paragraph";
import Courses from "./Courses";
import "./Education.css";

function Education() {
  return (
    <div id="education" className="education">
      <CustomContainer maxWidth="lg" minHeight="30vh">
        <div>
          <h1 className="large-header">
            <LargeHeader>
              <span>education.</span>
            </LargeHeader>
          </h1>
          <p className="square-paragraph education-subheader">
            <Paragraph>University of Maryland </Paragraph>
          </p>
        </div>
      </CustomContainer>
      <CustomContainer maxWidth="lg" className="education-custom-container">
        <Grid container>
          <Grid container item xs={12} className="education-card">
            <Grid item className="education-text-inner" xs={12} sm={6}>
              <Paragraph>
                B.S. Computer Science <br />
                Aug 2017 - Dec. 2020 <br />
                GPA: 3.75 <br />
                Upper Level Concentration in Math / Stat
              </Paragraph>
            </Grid>
          </Grid>
          <Grid container item xs={12}>
            <Grid item xs={12} sm={6}></Grid>
            <Grid item className="education-text-inner" xs={12} sm={6}>
              <Paragraph>
                As Vice President & Vice Cheif of UMD ACM, I coordinated several
                events with UMD faculty, companies, and students. Some of the
                events include "Capital One Coding Interview Workshop", "Coding
                Interview Guide", "CS Trivia Night", and "Iribe Rooftop Ice
                Cream Social." During my reign, the club saw a 40% increase in
                members.
              </Paragraph>
            </Grid>
          </Grid>
        </Grid>
      </CustomContainer>
      <Courses />
    </div>
  );
}

export default Education;
