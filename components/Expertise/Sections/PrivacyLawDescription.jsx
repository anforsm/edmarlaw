"use client";
import React from "react";
import styles from "./styles.module.css";
import { useTranslations } from "next-intl";
import Link from "next/link";
const PrivacyLawDescription = () => {
  const t = useTranslations("Index");
  return (
    <div className={styles.container}>
      <p>{t("privacyDesc1")}</p> <br />
      <p>{t("privacyDesc2")}</p> <br />
      <p>{t("privacyDesc3")}</p> <br />
      <p>{t("privacyDesc4")}</p> <br />
      <p className=" pt-6">
        <strong className="font-bold text-[32px]">
          {t("Typical assignments:")}
        </strong>
      </p>{" "}
      <br />
      <ul className="list-disc">
        <li>{t("How to process personal data")}</li>
        <li>{t("Draft or review of privacy policies")}</li>
        <li>{t("Privacy impact assessments")}</li>
        <li>{t("Privacy by default and security by design aspects")}</li>
        <li>{t("Legal bases for processing, when consent is needed")}</li>
        <li>{t("What information to provide to data subjects")}</li>
        <li>{t("How to handle cookies")}</li>
      </ul>
      <br />
      <br />
      <Link href={"/gdpr"} className="font-bold text-black underline">
        {t("ReadMoreGdpr")}
      </Link>
    </div>
  );
};

export default PrivacyLawDescription;
