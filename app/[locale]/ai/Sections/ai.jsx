"use client";
import React from "react";
import styles from "./styles.module.css";
import { useTranslations } from "next-intl";
const AiDescription = () => {
  const t = useTranslations("Ai");
  return (
    <div className={styles.container}>
      <p>{t("aiDesc1")}</p> <br />
      <p>{t("aiDesc2")}</p> <br />
      <p className="italic">{t("aiDescSubheader")}</p> <br />
      <p>{t("aiDesc3")}</p> <br />
      <p>{t("aiDesc4")}</p>
    </div>
  );
};

export default AiDescription;
