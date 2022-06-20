import React from "react";

export const ColorfulMessage = (props) => {
  // 分割代入
  const { color, children } = props;

  // styles
  const contentStyle = {
    color: color,
    fontSie: "18px"
  };
  return <p style={contentStyle}>{children}</p>;
};

// -- memo
// props.chirdren
// タグの中身を参照する

// export default xxx
// export const xxx
// 後者の方が命名が確約されるのでタイプミスを防ぐことができる

// クラスコンポーネントと関数コンポーネント
// 以前は関数コンポーネントでuseStateが使うことができなかった。
// react-hooksで関数コンポーネントでuseStateを使うことができるようになった。
// 昔はStateless function conpornentと言われていた？
// っていう歴史があった。
