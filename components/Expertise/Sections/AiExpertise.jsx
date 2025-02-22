"use client";
import React from "react";
import styles from "./styles.module.css";
import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";
const AiExpertise = () => {
  const t = useTranslations("Ai");
  const t2 = useTranslations("AiAct");
  const locale = useLocale();
  return (
    <div className={styles.container}>
      <p>{t("p1")}</p>
      <br />
      <p>{t("p2")}</p>
      <br />
      <p className="font-bold text-xl">{t2("subHeader")}</p>
      <br />
      <p>{t2("p1")}</p>
      <br />
      <p>{t2("p2")}</p>
      <br />
      <Link className="text-black underline font-bold" href={`/${locale}/ai`}>
        {t2("link")}
      </Link>
    </div>
  );
};

export default AiExpertise;
