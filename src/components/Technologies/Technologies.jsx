import { Grid } from "@material-ui/core";
import LocalFloristOutlinedIcon from "@material-ui/icons/LocalFloristOutlined";
import MemoryOutlinedIcon from "@material-ui/icons/MemoryOutlined";
import VisibilityOutlinedIcon from "@material-ui/icons/VisibilityOutlined";
import React from "react";
import CustomContainer from "../Shared/CustomContainer";
import SingleTech from "./SingleTech";
import "./Technologies.css";

function Technologies() {
  return (
    <div className="technology-bg">
      <CustomContainer maxWidth="lg" height="50vh">
        <Grid spacing={6} container justify="center">
          <SingleTech
            list={["ReactJS", "HTML", "CSS", "Android"]}
            svg={() => <LocalFloristOutlinedIcon style={{ color: "white" }} />}
            color="#565656"
            delay={0}
          />
          <SingleTech
            list={["ExpressJS", "SQL", "MongoDB", "AWS"]}
            color="#565656"
            svg={() => <MemoryOutlinedIcon style={{ color: "white" }} />}
            delay={500}
          />
          <SingleTech
            list={["Tensorflow", "Pytorch", "CV2", "Keras"]}
            color="#565656"
            svg={() => <VisibilityOutlinedIcon style={{ color: "white" }} />}
            delay={1000}
          />
        </Grid>
      </CustomContainer>
    </div>
  );
}

export default Technologies;
