import React from "react";
import "./section.css";

const Section = ({
  children,
  wrapper = true,
  backgroundColor = "#FFFFFF",
  hero,
}) => {
  return (
    <section className={hero ? "hero" : "section"} style={{ backgroundColor }}>
      {wrapper ? <div className="section-wrapper">{children}</div> : children}
    </section>
  );
};

export default Section;
