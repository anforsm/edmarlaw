"use client";
import React from "react";
import styles from "./styles.module.css";
import { useTranslations } from "next-intl";
const ITLawDescription = () => {
  const t = useTranslations("ItLaw");
  return (
    <div className={styles.container}>
      <p>{t("p1")}</p>
      <br />
      <p>
        <strong>{t("listHeader")}</strong>
      </p>
      <br />
      <ul className="list-disc pl-2">
        <li>{t("list1")}</li>
        <li>{t("list2")}</li>
        <li>{t("list3")}</li>
        <li>{t("list4")}</li>
        <li>{t("list5")}</li>
        <li>{t("list6")}</li>
        <li>{t("list7")}</li>
        <li>{t("list8")}</li>
        <li>{t("list9")}</li>
        <li>{t("list10")}</li>
        <li>{t("list11")}</li>
        <li>{t("list12")}</li>
      </ul>
      {/* <br />
      <p>{t("itDescription2")}</p>
      <br />
      <p>{t("itDescription3")}</p> */}
    </div>
  );
};

export default ITLawDescription;
