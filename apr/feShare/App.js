import React from "react";
import ReactDOM from "react-dom/client";
const root = ReactDOM.createRoot(document.getElementById("root"))
const h2 = React.createElement("h2", {}, "Learn React fast!")
const h1 = React.createElement("h1", {}, "Hello React")
const div = React.createElement("div", {}, [h1, h2])
root.render(
   div
);