import { useTranslation } from "react-i18next";
import linkedIn from "../linkedin-in.svg";
import github from "../github.svg";
export default function Footer() {
  const { t } = useTranslation();
  return (
    <>
      <div style={{textAlign: "center", color: "#505050", borderTop: "#eee solid 2px", paddingTop: "10px"}}>
        <div>
            <a href="https://www.linkedin.com/in/mohamed-elmostafa-a20623228/"><img alt="" src={linkedIn} style={{height: "20px"}}/></a>
            &nbsp;
            &nbsp;
            &nbsp;
            &nbsp;
            <a href="https://github.com/moh112004"><img alt="" src={github} style={{height: "20px"}}/></a>
        </div>
        <p>{t('bymoh')}</p>
      </div>
    </>
  );
}

