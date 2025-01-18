import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <div style={{ textAlign: "center", marginTop: "1rem" }}>
      <Typewriter
        options={{
          strings: [
            "Innovator",
            "Product Manager",
            "Technology Enthusiast",
            "Design Thinker",
            "Growth Strategist",
          ],
          autoStart: true,
          loop: true,
          deleteSpeed: 50,
        }}
      />
    </div>
  );
}

export default Type;
