import React from "react";

const ColorfulMessage = (props) => {
  // 分割代入
  const { color, children } = props;

  // styles
  const contentStyle = {
    color: color,
    fontSie: "18px"
  };
  return <p style={contentStyle}>{children}</p>;
};

export default ColorfulMessage;

// -- memo
// props.chirdren
// タグの中身を参照する
