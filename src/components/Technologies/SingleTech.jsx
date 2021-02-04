import { Grid } from "@material-ui/core";
import * as easings from "d3-ease";
import React, { Component } from "react";
import { animated } from "react-spring";
import { Spring, Trail } from "react-spring/renderprops";
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
          <InView triggerOnce delay={this.props.delay}>
            {({ inView, ref, entry }) => (
              <Spring
                to={inView ? { opacity: 0.9, y: 0 } : { opacity: 0, y: 5 }}
                config={{
                  duration: 1500,
                  easing: easings.easePolyInOut,
                }}
                delay={this.props.delay}
                // reset
              >
                {({ opacity, y }) => (
                  <div
                    ref={ref}
                    style={{
                      opacity,
                      transform: `translate3d(0,${y}px,0)`,
                    }}
                  >
                    <Spring
                      to={inView ? { value: 50 } : { value: 2 }}
                      config={{
                        duration: 5500,
                        easing: easings.easePolyInOut,
                      }}
                      delay={this.props.delay}
                      // reset
                    >
                      {({ value }) => (
                        <animated.svg
                          width="100"
                          height="100"
                          stroke={this.props.color}
                          strokeWidth={0.35}
                          strokeDasharray={value * 3 || 2}
                          strokeDashoffset={value || 2}
                        >
                          <this.props.svg />
                        </animated.svg>
                      )}
                    </Spring>
                  </div>
                )}
              </Spring>
            )}
          </InView>
        </Grid>

        <h1 className="single-tech-list">
          <Trail
            delay={this.props.delay}
            items={this.props.list}
            keys={(item) => item}
            from={{ transform: "translate3d(0,-10px,0)", opacity: 0 }}
            to={{ transform: "translate3d(0,0px,0)", opacity: 1 }}
            config={{ easing: easings.easeQuadInOut }}
          >
            {(item) => (props) => <p style={props}>{item}</p>}
          </Trail>
        </h1>
      </Grid>
    );
  }
}
