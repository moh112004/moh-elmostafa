import { useState } from "react";
import Arctict from "./Article";
import ReactHooks from "../logo.svg";

let DivStyle = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  marginBottom: "20px",
};
let SpanStyle = {
  textDecoration: "none",
  color: "#eee",
  fontSize: "20px",
  borderBottom: "#eee solid 2px",
  width: "min-content",
  cursor: "pointer",
};
export default function Arcticts() {
  let [more, setMore] = useState(0);
  let [buttonTitle, setButtonTitle] = useState("Show more ...");
  return (
    <>
      <div style={DivStyle}>
        <Arctict
          image={ReactHooks}
          lable="React Hooks"
          content="Introduction to react hooks."
          page="blog/react_hooks"
        />
        <Arctict
          image={ReactHooks}
          lable="Node.js and Express"
          content="Getting Started with Node.js and Express, Introduction to Node.js and Express."
          page="blog/node_js_and_express"
        />
        <Arctict
          image={ReactHooks}
          lable="JavaScript Promises and Async/Await"
          content="Understanding JavaScript Promises and Async/Await."
          page="blog/java_script_promise"
        />
        <Arctict
          image={ReactHooks}
          lable="Building RESTful APIs with Flask"
          content="Building RESTful APIs with Flask, Introduction to Flask"
          page="blog/restful_apis_with_flask"
        />
      </div>
      <div
        className="more"
        style={more === 0 ? { display: "none" } : { display: "block" }}
      >
        <Arctict
          image={ReactHooks}
          lable="CSS Grid vs. Flexbox"
          content="CSS Grid vs. Flexbox: Which One Should You Use? Introduction to CSS Grid and Flexbox"
          page="blog/css_grid_vs_flexbox"
        />
      </div>
      <span onClick={MoreClicked} style={SpanStyle}>
        {buttonTitle}
      </span>
    </>
  );
  function MoreClicked() {
    more === 0 ? setMore(1) : setMore(0);
    more === 0
      ? setButtonTitle("Show less ...")
      : setButtonTitle("Show more ...");
  }
}
