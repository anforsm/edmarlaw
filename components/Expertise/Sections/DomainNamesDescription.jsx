"use client";
import React from "react";
import styles from "./styles.module.css";
import { useTranslations } from "next-intl";
const DomainNamesDescription = () => {
  const t = useTranslations("Domains");
  return (
    <div className={styles.container}>
      <p>{t("p1")}</p> <br />
      <p>{t("p2")}</p>
    </div>
  );
};

export default DomainNamesDescription;
