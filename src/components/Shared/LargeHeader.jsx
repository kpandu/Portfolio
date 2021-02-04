import { easePolyOut } from "d3-ease";
import React, { useState } from "react";
import InView from "react-intersection-observer";
import { useTrail, a } from "react-spring";
import "./LargeHeader.css";

function LargeHeader({ children, ...props }) {
  const items = React.Children.toArray(children);

  const [inView, setInView] = useState(false);
  const trail = useTrail(items.length, {
    config: { mass: 50, tension: 2000, friction: 450, easing: easePolyOut },
    to: inView
      ? { opacity: inView ? 1 : 0, y: 0, height: 90 }
      : { opacity: 0, y: 40, height: 0 },
  });
  return (
    <div className="large-header-main" {...props}>
      <InView as="div" onChange={(e) => setInView(e)} threshold={1} triggerOnce>
        {trail.map(({ y, height, ...rest }, index) => (
          <a.div
            key={items[index].props.children}
            className="large-header-text large-header"
            style={{
              ...rest,
              transform: y.interpolate((y) => `translate3d(0,${y}px,0)`),
            }}
          >
            <a.div style={{ height: height }}>{items[index]}</a.div>
          </a.div>
        ))}
      </InView>
    </div>
  );
}
export default LargeHeader;
