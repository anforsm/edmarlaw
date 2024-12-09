"use client";
import React from "react";
import styles from "./styles.module.css";
import { useTranslations } from "next-intl";
const AiSystem2 = () => {
  const t = useTranslations("AiSystem2");
  return (
    <div className={styles.container}>
      <p>{t("AiSystem2Desc")}</p>
      <br />
      <p>{t("AiSystem2Desc2")}</p>
      <br />
      <p>{t("AiSystem2Desc3")}</p>
      <br />
      <p>{t("AiSystem2Desc4")}</p>
      <br />
    </div>
  );
};

export default AiSystem2;
