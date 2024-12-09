"use client";
import React from "react";
import styles from "./styles.module.css";
import { useTranslations } from "next-intl";
const AIGDPR = () => {
  const t = useTranslations("AiActGdpr");
  return (
    <div className={styles.container}>
      <p>{t("AiActGdprDesc")}</p>
      <br />
      <p>{t("AiActGdprDescListHeader")}</p>
      <p>{t("AiActGdprDescList1")}</p>
      <p>{t("AiActGdprDescList2")}</p>
    </div>
  );
};

export default AIGDPR;
