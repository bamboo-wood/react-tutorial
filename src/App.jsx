/* eslint react-hooks/exhaustive-deps: off */

import React, { useEffect, useState } from "react";
import ColorfulMessage from "./components/ColorfulMessage";
const App = () => {
  // state
  const [num, setNum] = useState(0);
  const [faceShowFlag, setFaceShowFlag] = useState(true);

  // functions
  const onClickCountUp = () => {
    setNum(num + 1);
  };
  const onClickSwitchShowFlag = () => {
    setFaceShowFlag(!faceShowFlag);
  };

  useEffect(() => {
    if (num > 0 && num % 3 === 0) {
      faceShowFlag || setFaceShowFlag(true);
    } else {
      faceShowFlag && setFaceShowFlag(false);
    }
  }, [num]);

  return (
    <React.Fragment>
      <h1>hello</h1>
      <ColorfulMessage color="blue">I'm bamboo-wood</ColorfulMessage>
      <button onClick={onClickCountUp}>count-up</button>
      <button onClick={onClickSwitchShowFlag}>on/off</button>
      <p>{num}</p>
      {faceShowFlag && <p>٩( ᐛ )و</p>}
    </React.Fragment>
  );
};

// 他のファイルでも参照できるようにする
export default App;

// -- memo
// ・state更新時にコンポーネントを再レンダリングする
// ・親コンポーネントがレンダリングされれば子コンポーネントも再レンダリングされる
// ・propsの値が変更された際にコンポーネントは再レンダリングされる
// ・useStateの使い方を誤ると無限際レンダリングが発生する可能性がある。
// ・useEffectの第二引数に空配列を渡すと、初回描画のみの処理を実現することができる。
// ・useEffectを使うことで処理の関心を分離することができる。
