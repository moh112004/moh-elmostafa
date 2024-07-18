import { useTranslation } from "react-i18next";
import me from "../me.jpg";
import "../Landing.css";
export default function Landing() {
  const { t } = useTranslation();

  return (
    <>
      <div className="row">
        <img
          src={me}
          alt=""
          data-aos="zoom-out"
          data-aos-duration="3000"
          data-aos-once="true"
          data-aos-delay="50"
        />
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        <p
          data-aos="zoom-out"
          data-aos-duration="3000"
          data-aos-once="true"
          data-aos-delay="50"
          className="landingText"
        >
          {" "}
          &nbsp; &nbsp; &nbsp;{t('summury')}
        </p>
      </div>
    </>
  );
}
