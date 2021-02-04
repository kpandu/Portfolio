import React from "react";
import SingleExp from "./SingleExp";
import CustomContainer from "../Shared/CustomContainer";
import "./Experience.css";
import { Grid } from "@material-ui/core";
import LargeHeader from "../Shared/LargeHeader";

function Experience() {
  return (
    <div id="experience" className="exp">
      <CustomContainer maxWidth="lg" className="exp-container">
        <div>
          <h1 className="large-header white-text">
            <LargeHeader>
              <span>work experience.</span>
            </LargeHeader>
          </h1>
          <p className="square-paragraph"></p>

          <Grid container alignItems="stretch">
            <SingleExp
              loc="Annapolis Juntion, MD"
              from="June 2019"
              to="August 2019"
              title="Boeing I&A"
              description="At BI&A I engineered a facial recognition app applying AWS
          Rekognition to identify people, objects, and frequent associations
          between people. Given an image of someone, you can find all the
          images that person is in, the frequency of people that person is
          with, and the objects within those images. You can also search for
          objects in the datasets and find the matching images along with
          graphs to better visualize the results."
              align="right"
              bullets={[
                "Hosted ReactJS frontend on AWS S3, ExpressJS REST APIs on AWS EC2, and MySQL database in AWS RDS.",
                "Improved reliability with multiple REST APIs in a microservice architecture.",
                "Maximized scalability by deploying through AWS Elastic Beanstalk.",
              ]}
              caption="Software Engineer Intern"
              index="01"
              binary="0001"
            />
            <SingleExp
              title="UMD"
              loc="College Park, MD"
              from="August 2019"
              to="May 2020"
              description="In the class CMSC389N: Single Page Web Application Development,
          I taught ReactJS, ExpressJS, and MongoDB. I held weekly office hours and aided 
          in the creation of projects and exams. "
              align="left"
              bullets={[]}
              caption="Teaching Assistant"
              index="02"
              binary="0010"
            />
            <SingleExp
              title="UMD"
              loc="College Park, MD"
              from="August 2019"
              to="May 2020"
              description="Under the guidance of Prof. Muhammad Nayeem Teli, Hyekang Joo, Ashan Panduwawala, and I completed a 3-point distracted/drowsy driver
          detection application that runs on a Rasberry Pi in a car. The main features include: yawn frequency detection;
          blink detection; and finally driver action detection. I completed the third part,
          where I trained a convolutional neural network using transfer learning 
          and YOLO object detection to predict the actions of a driver. Actions include and are not limited to:
          texting, calling, driving normally,
          and reaching behind. The system was optimized heavily to allow for real-time detection.
          "
              align="left"
              bullets={[]}
              caption="Undergraduate Researcher"
              index="03"
              binary="0011"
            />
            <SingleExp
              title="Amazon"
              loc="Seattle, WA"
              from="May 2020"
              to="August 2020"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
          Ut enim ad minim veniam, quis nostrud exercitation ullamco
          laboris nisi ut aliquip ex ea commodo consequat."
              align="right"
              bullets={[
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                "Tortor vitae purus faucibus ornare suspendisse sed nisi lacus sed.",
              ]}
              caption="Software Development Engineer Intern"
              index="04"
              binary="0100"
            />
          </Grid>
        </div>
      </CustomContainer>
    </div>
  );
}

export default Experience;
