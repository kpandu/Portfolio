import { Grid } from "@material-ui/core";
import { easeQuadInOut } from "d3-ease";
import React, { Component, Fragment, useState } from "react";
import InView from "react-intersection-observer";
import { Spring } from "react-spring/renderprops";

function SingleExp({
  binary,
  from,
  to,
  index,
  title,
  loc,
  description,
  bullets,
}) {
  const [inView, setInView] = useState(false);

  return (
    <div className="single-exp-body">
      <InView
        as="div"
        onChange={(e) => setInView(e)}
        threshold={0.6}
        triggerOnce
        style={{ width: "100%" }}
      >
        <Spring
          from={{ opacity: 0, y: 100 }}
          to={inView ? { opacity: 1, y: 0 } : {}}
          config={{ duration: 1000, easing: easeQuadInOut }}
        >
          {({ opacity, y }) => (
            <div style={{ opacity, transform: `translate3d(0,${y}px,0)` }}>
              <Grid container xs={12} alignItems="center">
                <div className="single-exp-hex" />
                <h1 className="single-exp-caption">
                  {from}
                  {" - "}
                  <br />
                  {to}
                </h1>{" "}
                <div className="single-exp-caption-div" />
                <span className="single-exp-caption-binary">{binary}</span>
              </Grid>
              <Grid
                container
                item
                xs={12}
                justify="center"
                alignItems="stretch"
                className="single-exp-text-container"
                alignContent="center"
              >
                <Grid
                  container
                  xs={12}
                  md={6}
                  direction="column"
                  justify="center"
                >
                  <p className="single-exp-index">{index}</p>
                  <h1 className="single-exp-title">{title}</h1>
                  <br />
                  <h1 className="single-exp-loc">{loc}</h1>
                </Grid>
                <Grid container xs={12} md={6} justify="space-between">
                  <h1 className="single-exp-paragraph">{description}</h1>

                  <p className="single-exp-bullets">
                    {bullets.map((x) => {
                      return (
                        <Fragment key={x}>
                          <strong>•</strong> &nbsp;
                          {x} <br />
                        </Fragment>
                      );
                    })}
                  </p>
                </Grid>
              </Grid>{" "}
            </div>
          )}
        </Spring>
      </InView>
    </div>
  );
}

export default SingleExp;
