import React, { PureComponent } from "react";
import { InView } from "react-intersection-observer";
import { animated } from "react-spring";
import { Spring } from "react-spring/renderprops";
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
  state = {
    showH1: false,
  };

  onInViewChange = (inview) => {
    if (!this.state.showH1 && inview) this.setState({ showH1: true });
  };
  render() {
    return (
      <InView as="div" onChange={this.onInViewChange} threshold={0.6}>
        <Spring to={{ opacity: this.state.showH1 ? 1 : 0 }}>
          {(props) => (
            <animated.div style={props}>
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
            </animated.div>
          )}
        </Spring>
      </InView>
    );
  }
}
