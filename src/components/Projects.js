import { useState } from "react";
import "../Projects.css";
import Project from "./Project";
import leon from "../leon.jpg";
import rajil from "../rajil.jpg";
import rajilCaptain from "../rajil-captain.jpg";
import rajilClient from "../rajil-client.jpg";
import moda from "../moda.jpg";
import eltech from "../eltech.jpg";
export default function Projects() {
  let [more, setMore] = useState(0);
  let [buttonTitle, setButtonTitle] = useState("Show more ...");
  return (
    <>
      <div className="projectsRow">
        <Project
          image={eltech}
          lable="ELTECH"
          content="A website for ELTECH Software Solutions Company to display its services."
          link="eltech4.onrender.com"
        />
        <Project
          image={moda}
          lable="Moda steel factory"
          content="An introductory website for Moda Steel Factory."
          link="modasteelfactory.com"
        />

        <Project
          image={rajil}
          lable="Rajil soon page"
          content="'soon' page for Rajil Delivery Company's website."
          link="rajil.onrender.com"
        />
        <Project
          image={leon}
          lable="Leon"
          content="Blank single page application template for reuse."
          link="leon-n8kz.onrender.com"
        />
      </div>
      <div
        className="more"
        style={more === 0 ? { display: "none" } : { display: "block" }}
      >
        <div className="projectsRow" style={{ justifyContent: "space-around" }}>
          <Project
            image={rajilClient}
            lable="Rajil client form"
            content="A page that is a form that is part of an order delivery system that the customer fills out when he orders."
            link="rajil-client-form.onrender.com"
          />
          <Project
            image={rajilCaptain}
            lable="Rajil captain form"
            content="A page that is a form that is part of an order delivery system that the captain fills out when he delivers the order."
            link="rajil-captain-form.onrender.com"
          />
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
