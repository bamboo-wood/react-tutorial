import React, { useState } from "react";
import ColorfulMessage from "./components/ColorfulMessage";
const App = () => {
  // functions
  const onClickCountUp = () => {
    setNum(num + 1);
  };
  // state
  const [num, setNum] = useState(0);
  // view
  return (
    <React.Fragment>
      <h1>hello</h1>
      <ColorfulMessage color="blue">I'm bamboo-wood</ColorfulMessage>
      <button onClick={onClickCountUp}>count-up</button>
      <p>{num}</p>
    </React.Fragment>
  );
};

// 他のファイルでも参照できるようにする
export default App;
