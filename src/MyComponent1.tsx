import React, { useRef, useState } from "react";

const MyComponent1: React.FC = () => {
    const divRef = useRef<HTMLDivElement>(null);

    const handleButtonClick = () => {
      divRef.current?.scrollIntoView({ behavior: "smooth" });
    };
  return (
    <div style={{ height: "100vh", overflow: "scroll" }}>
    <button onClick={handleButtonClick}>Scroll to Div</button>
    <div
      ref={divRef}
      style={{ height: "1000px", backgroundColor: "red", marginTop: "50px" }}
    >
      This is a scrollable div.
    </div>
  </div>
  );
};

export default MyComponent1;
