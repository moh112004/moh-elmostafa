import { useState } from "react";
import { useTranslation } from "react-i18next";
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
  const { t } = useTranslation();
  return (
    <>
      <div className="projectsRow">
        <Project
          image={eltech}
          lable={t('project.eltech.name')}
          content={t('project.eltech.content')}
          link="eltech4.onrender.com"
        />
        <Project
          image={moda}
          lable={t('project.moda.name')}
          content={t('project.moda.content')}
          link="modasteelfactory.com"
        />

        <Project
          image={rajil}
          lable={t('project.rajil.name')}
          content={t('project.rajil.content')}
          link="rajil.onrender.com"
        />
        {/* <Project
          image={leon}
          lable="Leon"
          content="Blank single page application template for reuse."
          link="leon-n8kz.onrender.com"
        /> */}
        <Project
          image={rajilClient}
          lable={t('project.rajilclient.name')}
          content={t('project.rajilclient.content')}
          link="rajil-client-form.onrender.com"
        />
      </div>
      <div
        className="more"
        style={more === 0 ? { display: "none" } : { display: "block" }}
      >
        <div className="projectsRow" style={{ justifyContent: "start" }}>
          <Project
            image={rajilCaptain}
            lable={t('project.rajilcaptain.name')}
            content={t('project.rajilcaptain.content')}
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
