import { easeQuadInOut } from "d3-ease";
import React, { useState } from "react";
import InView from "react-intersection-observer";
import { Spring } from "react-spring/renderprops";
import "./Paragraph.css";

function FadeInView({ children, duration, fadeOptions, ...props }) {
  const [inView, setInView] = useState(false);
  return (
    <InView
      as="div"
      onChange={(e) => {
        setInView(e);
      }}
      threshold={0.5}
      triggerOnce
      style={{ width: "100%" }}
    >
      <Spring
        from={{ opacity: 0, y: 100 }}
        to={inView ? { opacity: 1, y: 0 } : {}}
        config={{ duration: 1000, easing: easeQuadInOut }}
        {...fadeOptions}
      >
        {(props) => <div style={props}>{children}</div>}
      </Spring>
    </InView>
  );
}
export default FadeInView;
