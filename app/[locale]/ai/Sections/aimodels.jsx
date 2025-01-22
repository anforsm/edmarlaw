"use client";
import React from "react";
import styles from "./styles.module.css";
import { useTranslations } from "next-intl";
const AiModels = () => {
  const t = useTranslations("AiModels");
  return (
    <div className={styles.container}>
      <p>{t("AiModelsDesc2")}</p>
      <br />
      <p>{t("AiModelsDesc3")}</p>
      <br />
    </div>
  );
};

export default AiModels;
