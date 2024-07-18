import { useTranslation } from "react-i18next";
import Service from "./Service";
import "../Services.css";
import mobile from "../mobile.jfif";
import web from "../web.jfif";
export default function Services() {
  const { t } = useTranslation();
  return (
    <>
      <div className="services">
        <Service
          image={web}
          lable={t("service.web.name")}
          content={t("service.web.content")}
        />
        <Service
          image={mobile}
          lable={t("service.mobile.name")}
          content={t("service.mobile.content")}
        />
      </div>
    </>
  );
}
