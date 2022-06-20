import React from "react";

const ColorfulMessage = (props) => {
  // styles
  const contentStyle = {
    color: props.color,
    fontSie: "18px"
  };
  return <p style={contentStyle}>{props.message}</p>;
};

export default ColorfulMessage;
