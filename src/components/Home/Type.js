import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Development",
          "JavaScript Developers",
          "Backend Developers",
          "Open Source Contributor",
          "Web Developers",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
        typeSpeed: 100
      }}
    />
  );
}

export default Type;
