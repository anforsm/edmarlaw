import { useTranslations } from "next-intl";
import React from "react";

const Incident = () => {
  const t = useTranslations("GDPR");
  return (
    <div>
      <br />
      <p>{t("incident1")}</p>
      <br />
      <p>{t("incident2")}</p>
    </div>
  );
};

export default Incident;
