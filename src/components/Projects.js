import { useState } from "react";
import "../Projects.css"
import Project from "./Project";

export default function Projects() {
  let [more, setMore] = useState(0);
  let [buttonTitle, setButtonTitle] = useState("Show more ...");
  return (
    <>
      <div className="projectsRow">
        <Project />
        <Project />
        <Project />
        <Project />
      </div>
      <div
        className="more"
        style={more === 0 ? { display: "none" } : { display: "block" }}
      >
        <div className="projectsRow">
          <Project />
          <Project />
          <Project />
          <Project />
        </div>
        <div className="projectsRow">
          <Project />
          <Project />
          <Project />
          <Project />
        </div>
      </div>
      <span onClick={MoreClicked} className="moreButton">
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
