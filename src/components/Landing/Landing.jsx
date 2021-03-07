import React, { Component } from "react";
import CustomContainer from "../Shared/CustomContainer";
import "./Landing.css";
import Navbar from "./Navbar";
import EmailIcon from "@material-ui/icons/Email";
import { Grid } from "@material-ui/core";
import LargeHeader from "../Shared/LargeHeader";
import { Spring } from "react-spring/renderprops";
import { easePolyOut } from "d3-ease";
import Fade from "../Shared/Fade";
import Paragraph from "../Shared/Paragraph";
class Landing extends Component {
  render() {
    return (
      <div className="landing-bg">
        <Navbar />
        <CustomContainer justify="flex-start" maxWidth="lg">
          <Grid container>
            <Grid
              item
              xs={12}
              lg={7}
              container
              direction="column"
              justify="center"
              className="landing-text-container"
            >
              <div className="landing-text-container">
                <h1 className="large-header">
                  <LargeHeader>
                    <span>full-stack </span>
                    <span>software engineer.</span>
                  </LargeHeader>
                </h1>
                <p className="landing-p">
                  <Paragraph>
                    Welcome to Krishan Panduwawala's portfolio. I am currently a
                    Software Development Engineer at Amazon on the MerchFT team.
                  </Paragraph>
                </p>
              </div>
            </Grid>
            <Grid item xs={12} lg={5}>
              <Fade duration={3500} inView>
                <img
                  src={require("../../assets/keyboard.png").default}
                  className="landing-keyboard"
                />
              </Fade>
            </Grid>
          </Grid>
        </CustomContainer>
        <CustomContainer maxWidth="lg">
          <Grid container alignItems="center" justify="space-between">
            <Grid item xs={10}>
              <Spring
                delay={200}
                from={{ width: 0 }}
                to={{ width: 220 }}
                config={{ easing: easePolyOut, duration: 1500 }}
              >
                {(props) => <hr style={props} className="landing-hr" />}
              </Spring>
            </Grid>
            <Grid
              container
              item
              spacing={1}
              xs={2}
              justify="flex-end"
              alignItems="center"
            >
              <Grid item md>
                <Fade duration={3000} fadeOptions={{ delay: 400 }} inView>
                  <img
                    src={require("../../assets/github.svg").default}
                    className="landing-svg-social"
                    onClick={() =>
                      window.location.assign("https://github.com/kpandu")
                    }
                  />
                </Fade>
              </Grid>
              <Grid item md>
                <Fade duration={3000} fadeOptions={{ delay: 600 }} inView>
                  <img
                    src={require("../../assets/linkedin.svg").default}
                    className="landing-svg-social"
                    onClick={() =>
                      window.location.assign(
                        "https://www.linkedin.com/in/krishan-panduwawala-ba9749185/"
                      )
                    }
                  />
                </Fade>
              </Grid>

              <Grid item md>
                <Fade duration={3000} fadeOptions={{ delay: 800 }} inView>
                  <EmailIcon
                    style={{ fontSize: 40.5, margin: 0 }}
                    onClick={() =>
                      (window.location.href = "mailto:krishanpand@gmail.com")
                    }
                  ></EmailIcon>
                </Fade>
              </Grid>
            </Grid>
          </Grid>
        </CustomContainer>
      </div>
    );
  }
}

export default Landing;
