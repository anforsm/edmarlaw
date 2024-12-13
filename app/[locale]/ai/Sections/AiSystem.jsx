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
      <ul className="list-disc">
        <li>{t("AiList1")}</li>
        <br />
        <li>{t("AiList2")}</li>
        <br />
        <li>{t("AiList3")}</li>
        <br />
        <li>{t("AiList4")}</li>
        <br />
        <li>{t("AiList5")}</li>
        <br />
        <li>{t("AiList6")}</li>
        <br />
      </ul>
    </div>
  );
};

export default AiSystem;
