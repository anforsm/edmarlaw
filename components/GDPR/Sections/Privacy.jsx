import { useTranslations } from "next-intl";
import React from "react";

const Privacy = () => {
  const t = useTranslations("GDPR");
  return (
    <div>
      <p>{t("privacy1")}</p> <br />
      <p>{t("privacy2")}</p> <br />
      <p>{t("privacy3")}</p> <br />
      <p>{t("privacy4")}</p>
    </div>
  );
};

export default Privacy;
