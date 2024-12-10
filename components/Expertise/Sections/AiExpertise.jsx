"use client";
import React from "react";
import styles from "./styles.module.css";
import { useTranslations } from "next-intl";
import Link from "next/link";
const AiExpertise = () => {
  const t = useTranslations("Ai");
  return (
    <div className={styles.container}>
      <p>{t("subHeader")}</p>
      <br />
      <p>{t("aiDesc3")}</p>
      <br />
      <p>{t("aiDesc4")}</p>
      <br />
      <Link className="text-black underline font-bold" href={t("aiLink")}>
        {t("aiLink")}
      </Link>
    </div>
  );
};

export default AiExpertise;
