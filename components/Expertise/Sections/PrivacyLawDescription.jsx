"use client";
import React from "react";
import styles from "./styles.module.css";
import { useTranslations } from "next-intl";
import Link from "next/link";
const PrivacyLawDescription = () => {
  const t = useTranslations("PrivacyLaw");
  return (
    <div className={styles.container}>
      <p>{t("p1")}</p> <br />
      <p>{t("p2")}</p> <br />
      <p>{t("p3")}</p> <br />
      <p>{t("p4")}</p> <br />
      <p>{t("p5")}</p> <br />
      <p>{t("p6")}</p>
      <br />
      <p className="font-bold text-[32px] leading-[48px]">{t("listHeader")}</p>
      <ul className="list-disc pl-2">
        <br />
        <li>{t("list1")}</li>
        <li>{t("list2")}</li>
        <li>{t("list3")}</li>
        <li>{t("list4")}</li>
        <li>{t("list5")}</li>
        <li>{t("list6")}</li>
        <li>{t("list7")}</li>
        <li>{t("list8")}</li>
        {t("list9") && <li>{t("list9")}</li>}
      </ul>
      <br />
      <br />
      <Link href={"/gdpr"} className="underline font-bold">
        {t("link")}
      </Link>
    </div>
  );
};

export default PrivacyLawDescription;
