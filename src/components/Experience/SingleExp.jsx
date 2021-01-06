import { Grid } from "@material-ui/core";
import React, { Component, Fragment } from "react";

export default class SingleExp extends Component {
  render() {
    return (
      <Grid
        container
        item
        direction="column"
        xs={12}
        md={6}
        justify="center"
        alignItems="stretch"
        alignContent="center"
      >
        <Grid
          container
          className="single-exp-body"
          style={{ backgroundColor: this.props.backgroundColor }}
          direction="column"
          justify="space-between"
        >
          <div
            className="single-exp-text"
            style={{ color: this.props.textColor }}
          >
            <h1 className="single-exp-title">{this.props.title}</h1>
            <h1 className="single-exp-caption">{this.props.caption}</h1>
            <br />

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
          </div>
          <Grid
            container
            justify="space-between"
            alignContent="center"
            style={{ color: this.props.indexColor }}
          >
            <Grid
              item
              xs={6}
              container
              justify="center"
              alignContent="flex-start"
              direction="column"
            >
              <h1 className="single-exp-caption">{this.props.date}</h1>
              <h1 className="single-exp-caption">{this.props.loc}</h1>
            </Grid>
            <Grid
              item
              xs={6}
              container
              justify="flex-end"
              alignContent="center"
            >
              <p className="single-exp-index">{this.props.index}</p>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    );
  }
}
