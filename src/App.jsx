import React from "react";
import ColorfulMessage from "./components/ColorfulMessage";
const App = () => {
  // functions
  const onClickButton = () => alert();
  // view
  return (
    <React.Fragment>
      <h1>hello</h1>
      <ColorfulMessage color="blue">I'm bamboo-wood</ColorfulMessage>
      <button onClick={onClickButton}>button</button>
    </React.Fragment>
  );
};

// 他のファイルでも参照できるようにする
export default App;
