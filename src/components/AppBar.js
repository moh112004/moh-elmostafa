import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import langIcon from "../lang.png";
import "../AppBar.css";
export default function AppBar() {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };
let changeLanguageButtonClicked = () => {
  document.documentElement.lang === "ar"
    ? changeLanguage("en")
    : changeLanguage("ar");
};
  useEffect(() => {
    document.documentElement.lang = i18n.language;
  }, [i18n.language]);

  return (
    <>
      <div className="appBar">
        <p>Moh Elmostafa</p>
        <div className="apear">
          <div className="icon">
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
          </div>
          <div>
            {/* small */}
            <ul className="small">
              <li>
                <a href="#">{t("home")}</a>
              </li>
              <hr />
              <li>
                <a href="#about">{t("about")}</a>
              </li>
              <hr />
              <li>
                <a href="#portfolio">{t("portfolio")}</a>
              </li>
              <hr />
              {/* <li><a href="#blog">Blog</a></li> */}
              <li>
                <a href="#services">{t("services")}</a>
              </li>
              <hr />
              {/* <li><a href="#testimonials">Testimonials</a></li> */}
              <li>
                <a href="#contact">{t("contact")}</a>
              </li>
              <hr />
              <li>
                <span href="#contact" onClick={changeLanguageButtonClicked}>{t('languagesmall')}</span>
              </li>
            </ul>
          </div>
        </div>
        {/* Large */}
        <div className="largeDiv">
          <ul className="large">
            <li>
              <a href="#">{t("home")}</a>
            </li>
            <li>
              <a href="#about">{t("about")}</a>
            </li>
            <li>
              <a href="#portfolio">{t("portfolio")}</a>
            </li>
            {/* <li><a href="#blog">Blog</a></li> */}
            <li>
              <a href="#services">{t("services")}</a>
            </li>
            {/* <li><a href="#testimonials">Testimonials</a></li> */}
            <li>
              <a href="#contact">{t("contact")}</a>
            </li>
          </ul>
          <span
            onClick={changeLanguageButtonClicked}
            style={{ color: "#eee", cursor: "pointer" }}
          >
            <img src={langIcon} />
            &nbsp;{t("language")}
          </span>
        </div>
      </div>
    </>
  );
}
