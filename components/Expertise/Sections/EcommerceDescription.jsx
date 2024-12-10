"use client";
import React from "react";
import styles from "./styles.module.css";
import { useTranslations } from "next-intl";
const EcommerceDescription = () => {
  const t = useTranslations("Ecom");
  return (
    <div className={styles.container}>
      <p>{t("p1")}</p> <br />
      <p>{t("p2")}</p>
    </div>
  );
};

export default EcommerceDescription;
