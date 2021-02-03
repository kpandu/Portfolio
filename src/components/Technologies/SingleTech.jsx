import { Grid } from "@material-ui/core";
import * as easings from "d3-ease";
import React, { Component } from "react";
import { Fade } from "react-reveal";
import { animated } from "react-spring";
import { Spring } from "react-spring/renderprops";
import { InView } from "react-intersection-observer";

export default class SingleTech extends Component {
  render() {
    return (
      <Grid
        item
        container
        direction="column"
        alignItems="center"
        xs={12}
        md={6}
        lg={4}
        className="single-tech-card"
      >
        <Grid item>
          <InView>
            {({ inView, ref, entry }) =>
              inView && (
                <Spring
                  from={{ value: 2 }}
                  to={{ value: 50 }}
                  config={{
                    duration: 5500,
                    easing: easings.easeCubic,
                  }}
                  delay={this.props.delay}
                  reset
                >
                  {(props) => (
                    <Fade zoom delay={this.props.delay}>
                      <animated.svg
                        width="100"
                        height="100"
                        stroke={this.props.color}
                        fillOpacity={0}
                        strokeWidth={0.35}
                        strokeDasharray={props.value * 3}
                        strokeDashoffset={props.value}
                      >
                        <this.props.svg></this.props.svg>
                      </animated.svg>
                    </Fade>
                  )}
                </Spring>
              )
            }
          </InView>
        </Grid>

        <Fade delay={1800 + this.props.delay / 1.5} cascade>
          <h1 className="single-tech-list">
            {this.props.list.map((x) => {
              return <p key={x}>{x}</p>;
            })}
          </h1>
        </Fade>
      </Grid>
    );
  }
}
