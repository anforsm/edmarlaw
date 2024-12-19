import { useTranslations } from "next-intl";
import React from "react";

const WhatGDPR = () => {
  const t = useTranslations("GDPR");
  return (
    <div>
      <br />
      <p>
        {t("what1")}
        <br /> <br /> {t("what2")}
      </p>
    </div>
  );
};

export default WhatGDPR;
