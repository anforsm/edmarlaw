"use client";
import React from "react";
import styles from "./styles.module.css";
import { useTranslations } from "next-intl";
const AiSystem = () => {
  const t = useTranslations("AiSystem");
  return (
    <div className={styles.container}>
      <p>{t("AiSystem1")}</p>
      <br />
      <p>{t("AiList1")}</p>
      <br />
      <p>{t("AiList2")}</p>
      <br />
      <p>{t("AiList3")}</p>
      <br />
      <p>{t("AiList4")}</p>
      <br />
      <p>{t("AiList5")}</p>
      <br />
      <p>{t("AiList6")}</p>
      <br />
    </div>
  );
};

export default AiSystem;
