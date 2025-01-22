"use client";
import React from "react";
import styles from "./styles.module.css";
import { useTranslations } from "next-intl";
const ContractLawDescription = () => {
  const t = useTranslations("ContractLaw");
  return (
    <div className={styles.container}>
      <p>{t("p1")}</p>
      <br />
      <p>{t("p2")}</p>
      <br />
      <p>{t("p3")}</p>
    </div>
  );
};

export default ContractLawDescription;
