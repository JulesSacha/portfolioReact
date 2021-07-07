import React from "react";

function Icon() {
  return (
    <svg viewBox="0 0 150 150" xmlns="http://www.w3.org/2000/svg"
    className="icon"
    > 
    
    <defs>
      <path
        id="d"
        className="svg-elem-1"
        d="M-236.107 573.402h164.6V724.51h-164.6z"
     
      />
      <path
        id="c"
        className="svg-elem-2"
        d="M-254.995 597.688h186.187v149.759h-186.187z"

      />
      <path
        id="b"
        className="svg-elem-3"
        d="M-215.869 470.865H16.19v265.789h-232.059z"

      />
      <linearGradient id="a">
        <stop offset={0} />
        <stop offset={1} stopOpacity={0} />
    
      </linearGradient>
    </defs>
    <rect
      width={89.243}
      height={87.458}
  
      x={33.912}
      y={108.341}
      ry={15.707}
      className="svg-elem-4"
      fill="#5061cd"
      fillOpacity={0.707}
    />
    <text
      style={{
        lineHeight: 1.25,
        whiteSpace: "pre",
        inlineSize: 55.6875,
      }}
      x={-63.898}
      y={197.762}
      fontWeight={400}
      fontSize={50.8}
      fontFamily="sans-serif"
      stroke="#000"
      strokeWidth={0.265}
      strokeDasharray=".265,.53"
    >
      <tspan x={-63.898} y={197.762} />
    </text>

    <rect
      width={89.243}
      height={87.458}
      x={44.978}
      y={118.871}
      ry={15.707}
      className="svg-elem-8"
      fill="#5271ff"
      fillOpacity={0.706}
     
    
    />
    <text
      transform="matrix(1.07447 0 0 1.07447 333.879 -458.275)"
      fontSize={40}
      fontFamily="Fredoka One"
      fill="#ececec"
    >
      <tspan x={-236.107} y={610.601}>
        {"JF"}
      </tspan>
    </text>
  </svg>
  );
}

export default Icon;