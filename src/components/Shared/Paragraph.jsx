import React, { useState } from "react";
import InView from "react-intersection-observer";
import Fade from "./Fade";
import "./Paragraph.css";

function Paragraph({ children, text, duration, fadeOptions, ...props }) {
  const [inView, setInView] = useState(false);
  return (
    // <InView as="div" onChange={(e) => setInView(e)} threshold={1} triggerOnce>
    //   <Fade duration={6000}>{children}</Fade>
    // </InView>
    <InView threshold={0.5}>
      {({ inView, ref, entry }) => (
        <div ref={ref}>
          <Fade
            duration={duration || 2000}
            inView={inView}
            fadeOptions={fadeOptions}
          >
            {children}
          </Fade>
        </div>
      )}
    </InView>
  );
}
export default Paragraph;
