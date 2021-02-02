import React, { PureComponent } from "react";
import TrackVisibility from "react-on-screen";
import { RadarChart, PolarGrid, PolarAngleAxis, Radar } from "recharts";

const data = [
  {
    subject: "Back-End",
    A: 83,
  },
  {
    subject: "Front-End",
    A: 100,
  },
  {
    subject: "Data Science",
    A: 38,
  },
  {
    subject: "Computer Vision",
    A: 24,
  },

  {
    subject: "Cloud (AWS)",
    A: 65,
  },
];
const WIDTH = window.innerWidth / 2;
const HEIGHT = window.innerHeight / 2;

export default class RadialStats extends PureComponent {
  render() {
    return (
      <TrackVisibility once className="flex-center">
        {({ isVisible }) =>
          isVisible && (
            <RadarChart
              cx={WIDTH / 2}
              cy={HEIGHT / 2}
              width={WIDTH}
              height={HEIGHT}
              data={data}
            >
              <PolarGrid />
              <PolarAngleAxis dataKey="subject" />
              <Radar
                dataKey="A"
                stroke="#AAAAAA"
                fill="#CCCCCC"
                fillOpacity={0.4}
                animationDuration={1200}
                animationBegin={300}
              />
            </RadarChart>
          )
        }
      </TrackVisibility>
    );
  }
}
