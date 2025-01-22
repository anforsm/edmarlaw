"use client";
import React from "react";
import styles from "./styles.module.css";
import { useTranslations } from "next-intl";
const AiOffice = () => {
  const t = useTranslations("AiOffice");
  return (
    <div className={styles.container}>
      <p>{t("AiOfficeDesc")}</p>
    </div>
  );
};

export default AiOffice;
