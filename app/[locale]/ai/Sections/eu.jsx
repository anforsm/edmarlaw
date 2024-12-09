"use client";
import React from "react";
import styles from "./styles.module.css";
import { useTranslations } from "next-intl";
const EuDescription = () => {
  const t = useTranslations("AiActEu1");
  return (
    <div className={styles.container}>
      <p>{t("AiActEu1Desc")}</p>
    </div>
  );
};

export default EuDescription;
