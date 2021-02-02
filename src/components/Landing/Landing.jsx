import React, { Component } from "react";
import CustomContainer from "../Shared/CustomContainer";
import "./Landing.css";
import Fade from "react-reveal/Fade";
import Navbar from "./Navbar";
import EmailIcon from "@material-ui/icons/Email";
import { Grid } from "@material-ui/core";

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
              md={7}
              container
              direction="column"
              justify="center"
              className="landing-text-container"
            >
              <div className="landing-text-container">
                <h1 className="large-header">
                  full-stack software <br />
                  engineer.
                </h1>
                <p className="landing-p">
                  Welcome to Krishan Panduwawala's portfolio. I am currently a
                  Software Development Engineer at Amazon on the MerchFT team.
                </p>
              </div>
            </Grid>
            <Grid item xs={12} md={5}>
              <img
                src="https://i.pinimg.com/originals/10/17/8e/10178ebec8ddd92f032a4391bf378138.png"
                style={{ width: "100%" }}
              />
            </Grid>
          </Grid>
        </CustomContainer>
        <CustomContainer maxWidth="lg">
          <Grid container alignItems="center" justify="space-between">
            <Grid item xs={6}>
              <hr className="landing-hr" />
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
