import { Grid } from "@material-ui/core";
import React, { Component, Fragment } from "react";

export default class SingleExp extends Component {
  render() {
    return (
      <div className="single-exp-body">
        <Grid container xs={12} alignItems="center">
          <div className="single-exp-hex" />
          <h1 className="single-exp-caption">
            {this.props.from}
            {" - "}
            <br />
            {this.props.to}
          </h1>{" "}
          <div className="single-exp-caption-div" />
          <span className="single-exp-caption-binary">{this.props.binary}</span>
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
          <Grid container xs={12} md={6} direction="column" justify="center">
            <p className="single-exp-index">{this.props.index}</p>
            <h1 className="single-exp-title">{this.props.title}</h1>
            <br />
            <h1 className="single-exp-loc">{this.props.loc}</h1>
          </Grid>
          <Grid container xs={12} md={6} justify="space-between">
            <h1 className="single-exp-paragraph">{this.props.description}</h1>

            <p className="single-exp-bullets">
              {this.props.bullets.map((x) => {
                return (
                  <Fragment key={x}>
                    <strong>•</strong> &nbsp;
                    {x} <br />
                  </Fragment>
                );
              })}
            </p>
          </Grid>
        </Grid>
      </div>
    );
  }
}
