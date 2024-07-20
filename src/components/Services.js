import { useTranslation } from "react-i18next";
import Service from "./Service";
import "../Services.css";
import mobile from "../mobile.jfif";
import web from "../web.jfif";
import responsive from "../responsive.jfif";
import speed from "../speed.jfif";
export default function Services() {
  const { t } = useTranslation();
  return (
    <>
      <div className="services">
        <Service
          image={responsive}
          lable={t("service.responsiveDesign.name")}
          content={t("service.responsiveDesign.content")}
        />
          <Service
            image={mobile}
            lable={t("service.customUI.name")}
            content={t("service.customUI.content")}
          />
          <Service
            image={speed}
            lable={t("service.performanceOptimization.name")}
            content={t("service.performanceOptimization.content")}
          />
        <Service
          image={web}
          lable={t("service.seoOptimization.name")}
          content={t("service.seoOptimization.content")}
        />
      </div>
    </>
  );
}
