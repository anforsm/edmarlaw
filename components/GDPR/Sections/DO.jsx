import { useTranslations } from "next-intl";
import React from "react";

const DO = () => {
  const t = useTranslations("GDPR");
  return (
    <div>
      <br />
      <p>{t("doDesc")}</p>
      <ul className="list-disc p-4">
        <li>{t("first")}</li>
        <li>{t("second")}</li>
        <li>{t("third")}</li>
        <li>{t("fourth")}</li>
        <li>{t("fifth")}</li>
        <li>{t("sixth")}</li>
      </ul>
      <br />
      <p>{t("seventh")}</p>
    </div>
  );
};

export default DO;
