import { useTranslations } from "next-intl";
import React from "react";

const DataProtection = () => {
  const t = useTranslations("GDPR");
  return (
    <div>
      <p>{t("officer1")}</p> <br />
      <p>{t("officer2")}</p> <br />
      <p>{t("officer3")}</p>
    </div>
  );
};

export default DataProtection;
