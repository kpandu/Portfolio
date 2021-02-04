import { easePolyOut } from "d3-ease";
import React from "react";
import { Spring } from "react-spring/renderprops";

function Fade({ children, fadeOptions, duration, inView = false }) {
  return (
    <Spring
      {...fadeOptions}
      from={{ opacity: 0 }}
      to={{ opacity: inView ? 1 : 0 }}
      config={{ easing: easePolyOut, duration }}
    >
      {(props) => <span style={props}>{children}</span>}
    </Spring>
  );
}
export default Fade;
