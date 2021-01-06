import React, { Component } from "react";
import CustomContainer from "../Shared/CustomContainer";
import "./Landing.css";
import Fade from "react-reveal/Fade";
import Navbar from "./Navbar";
import EmailIcon from "@material-ui/icons/Email";
import { Grid } from "@material-ui/core";
import SectionNumber from "../Shared/SectionNumber";
class Landing extends Component {
  render() {
    return (
      <div className="landing-bg">
        <Navbar />
        <CustomContainer justify="flex-start">
          <Fade bottom delay={100}>
            <h1 className="landing-header">
              Put some cool quote here to fill in the space like what I'm doing
              now.
            </h1>
          </Fade>
        </CustomContainer>
        <CustomContainer>
          <Grid container alignItems="center" justify="space-between">
            <Grid item xs={6}>
              <SectionNumber number={"0x1"} light />
            </Grid>
            <Grid
              container
              item
              spacing={2}
              xs={6}
              justify="flex-end"
              alignItems="center"
            >
              <Grid item>
                <img
                  src={require("../../assets/github.svg").default}
                  className="landing-svg-social"
                  onClick={() =>
                    window.location.assign("https://github.com/kpandu")
                  }
                />
              </Grid>
              <Grid item>
                <img
                  src={require("../../assets/linkedin.svg").default}
                  className="landing-svg-social"
                  onClick={() =>
                    window.location.assign(
                      "https://www.linkedin.com/in/krishan-panduwawala-ba9749185/"
                    )
                  }
                />
              </Grid>

              <Grid item>
                <EmailIcon
                  className="landing-svg-social"
                  style={{ fontSize: 40.5, margin: 0 }}
                  onClick={() =>
                    (window.location.href = "mailto:krishan103@hotmail.com")
                  }
                ></EmailIcon>
              </Grid>
            </Grid>
          </Grid>
        </CustomContainer>
      </div>
    );
  }
}

export default Landing;
