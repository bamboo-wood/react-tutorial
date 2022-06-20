import React from "react";
import { createRoot } from "react-dom/client";

const App = () => {
  return (
    <React.Fragment>
      <h1>hello</h1>
      <p>I'm bamboo-wood</p>
    </React.Fragment>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
