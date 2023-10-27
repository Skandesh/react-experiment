import React from "react";
import ReactDOM from "react-dom/client";

const heading = <h1>Hello from JSX</h1>;

const elem = <span>Hey span</span>;
const title = <h1 className="head">{elem}</h1>;

const HeadingComponent = () => (
  <div>
    <h1>Namaste Functional component </h1>
    {title}
    {heading}
  </div>
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <HeadingComponent />
  //{HeadingComponent()}
  //<HeadingComponent></HeadingComponent>
);
