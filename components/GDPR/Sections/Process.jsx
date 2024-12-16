import { useTranslations } from "next-intl";
import React from "react";

const Process = () => {
  const t = useTranslations("GDPR");
  return (
    <div>
      <br />
      <br />
      <p>{t("process1")}</p> <br />
      <h3 className="text-[22px] lg:text-[32px] font-bold">
        1. {t("Due diligence ur ett dataskyddsperspektiv")}
      </h3>{" "}
      <br />
      <p>{t("processD1")}</p> <br />
      <h3 className="lg:text-[32px] text-[22px] font-bold">
        2. {t("Personuppgiftsbiträdesavtalet")}
      </h3>{" "}
      <br />
      <p>{t("processD2")}</p>
      <br />
      <h3 className="lg:text-[32px] text-[22px] font-bold">
        3. {t("Uppföljning")}
      </h3>{" "}
      <br />
      <p>
        {t("processD3")} <br />
        <br />
        {t("processD4")}
      </p>
    </div>
  );
};

export default Process;
