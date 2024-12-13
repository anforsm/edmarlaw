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
      <p className="font-bold text-[32px] pb-4 pt-12 !leading-[48px]">
        {t("AiActGdprDescListHeader")}
      </p>
      <ul className="list-disc pl-2">
        <li>{t("AiActGdprDescList1")}</li>
        <li>{t("AiActGdprDescList2")}</li>
      </ul>
    </div>
  );
};

export default AIGDPR;
