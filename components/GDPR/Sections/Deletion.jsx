import { useTranslations } from "next-intl";
import React from "react";

const Deletion = () => {
  const t = useTranslations("GDPR");
  return (
    <div>
      <p>{t("delete1")}</p> <br />
      <p>{t("delete2")}</p>
    </div>
  );
};

export default Deletion;
