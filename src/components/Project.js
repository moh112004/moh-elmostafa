import { useTranslation } from "react-i18next";
import "../Project.css";
let AStyle = {
  textDecoration: "none",
  color: "#eee",
  borderBottom: "1px #eee solid",
  fontWeight: "500",
};
export default function Project({ image, lable, content, link }) {
  const { t } = useTranslation();
  return (
    <>
      <div
        className="project"
        data-aos="zoom-in"
        data-aos-duration="1000"
        data-aos-once="true"
        data-aos-delay="50"
      >
        <img src={image} alt="" />
        <h3 style={{ margin: "0", fontSize: "20px" }}>{lable}</h3>
        <p>{content}</p>
        <span>{t('projectslink')} </span>
        <a href={"https://" + link} style={AStyle} target="_blank">
          {link}
        </a>
      </div>
    </>
  );
}
