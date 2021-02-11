import { Grid } from "@material-ui/core";
import React from "react";
import CustomContainer from "../Shared/CustomContainer";
import FadeInView from "../Shared/FadeInView";
import "./Courses.css";

const COURSES = [
  "Data Science",
  "Algorithms",
  "Web Development",
  "Computer Vision",
  "Machine Learning",
  "Data Visualization",
  "Adv. Data Structures",
  "Android Programming",
];
const FADE_DELAY = 200;
function Courses() {
  return (
    <CustomContainer maxWidth="md">
      <Grid
        container
        justify="space-between"
        alignContent="center"
        spacing={10}
      >
        {COURSES.slice(0, COURSES.length / 2).map((c, i) => (
          <Grid
            container
            item
            xs
            key={c}
            md={3}
            justify="center"
            alignContent="center"
          >
            {console.log(c)}
            <FadeInView fadeOptions={{ delay: i * FADE_DELAY }}>
              <p className="courses-p">{c}</p>
            </FadeInView>
          </Grid>
        ))}
        <Grid item container justify="center" xs={12}>
          <p className="courses-title">Courses</p>
        </Grid>

        {COURSES.slice(COURSES.length / 2).map((c, i) => (
          <Grid
            container
            item
            xs
            key={c}
            md={3}
            justify="center"
            alignContent="center"
          >
            <FadeInView
              fadeOptions={{
                delay: i * 200 + (COURSES.length / 2) * FADE_DELAY,
              }}
            >
              <p className="courses-p">{c}</p>
            </FadeInView>
          </Grid>
        ))}
      </Grid>
    </CustomContainer>
  );
}

export default Courses;
