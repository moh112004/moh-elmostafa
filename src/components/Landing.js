import { useTranslation } from "react-i18next";
import me from "../me.jpg";
import "../Landing.css";
export default function Landing() {
  const { t } = useTranslation();

  return (
    <>
      <div
        className="row"
        data-aos="fade-down"
        data-aos-duration="2000"
        data-aos-once="true"
        data-aos-delay="800"
      >
        <img src={me} alt="" />
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        <p className="landingText"> &nbsp; &nbsp; &nbsp;{t("summury")}</p>
      </div>
    </>
  );
}
