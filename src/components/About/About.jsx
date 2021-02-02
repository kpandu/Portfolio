import React from "react";
import { Grid } from "@material-ui/core";
import "./About.css";
import CustomContainer from "../Shared/CustomContainer";

function About() {
  return (
    <div id="about">
      <CustomContainer height="60vh" maxWidth="lg">
        <Grid container justify="space-evenly" spacing={4}>
          <Grid item xs={12} md={6}>
            <div className="about-avatar-container">
              <svg
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                width="425"
                height="490"
                viewbox="0 0 424.35244785437493 490"
                className="about-avatar-svg"
              >
                <path
                  fill="#232323"
                  d="M206.98007150448083 2.9999999999999996Q212.17622392718746 0 217.3723763498941 2.9999999999999996L419.1562954316683 119.5Q424.35244785437493 122.5 424.35244785437493 128.5L424.35244785437493 361.5Q424.35244785437493 367.5 419.1562954316683 370.5L217.3723763498941 487Q212.17622392718746 490 206.98007150448083 487L5.196152422706632 370.5Q0 367.5 0 361.5L0 128.5Q0 122.5 5.196152422706632 119.5Z"
                ></path>
              </svg>
              <svg
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                width="399"
                height="460"
                className="about-avatar-svg2"
                viewbox="0 0 398.37168574084177 460"
              >
                <path
                  fill="#fff"
                  d="M193.98969044771425 2.9999999999999996Q199.18584287042088 0 204.38199529312752 2.9999999999999996L393.17553331813514 112Q398.37168574084177 115 398.37168574084177 121L398.37168574084177 339Q398.37168574084177 345 393.17553331813514 348L204.38199529312752 457Q199.18584287042088 460 193.98969044771425 457L5.196152422706632 348Q0 345 0 339L0 121Q0 115 5.196152422706632 112Z"
                ></path>
              </svg>

              <img
                src={require("../../assets/me.png").default}
                className="about-avatar-portrait"
              />
            </div>
          </Grid>
          <Grid
            container
            item
            direction="column"
            xs={12}
            md={6}
            justify="center"
            alignContent="flex-start"
          >
            <h1 className="large-header">about me.</h1>
            <p className="square-paragraph">
              Hi, I'm Krishan. I just graduated from the University of Maryland,
              College Park with a B.S. in Computer Science alongside an upper
              level concentration in mathematics. After interning at Boeing I&A
              and then Amazon, I have learned a lot about the software
              development lifecycle and am excited to apply many skills at my
              job at Amazon as a Software Development Engineer. A couple side
              interests include playing the piano and building computers
              (audiophile coming soon).
            </p>
          </Grid>
        </Grid>
      </CustomContainer>
    </div>
  );
}

export default About;
