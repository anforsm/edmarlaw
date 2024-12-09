"use client";
import React from "react";
import styles from "./styles.module.css";
import { useTranslations } from "next-intl";
const EuDescription2 = () => {
  const t = useTranslations("AiActEu2");
  return (
    <div className={styles.container}>
      <p>{t("AiActEuDesc")}</p>
      <br />
      <p>{t("AiActEuDesc2")}</p>
    </div>
  );
};

export default EuDescription2;
