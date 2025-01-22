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
      <ul className="list-disc flex flex-col gap-y-2">
        <li>{t("AiList1")}</li>
        <li>{t("AiList2")}</li>
        <li>{t("AiList3")}</li>
        <li>{t("AiList4")}</li>
        <li>{t("AiList5")}</li>
        <li>{t("AiList6")}</li>
      </ul>
    </div>
  );
};

export default AiSystem;
