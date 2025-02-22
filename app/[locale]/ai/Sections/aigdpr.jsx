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
      <p className="font-bold md:!text-[20px] pb-4 pt-4 md:pt-12 !leading-[32px]">
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
