import { useTranslations } from "next-intl";
import React from "react";

const Information = () => {
  const t = useTranslations("GDPR");
  return (
    <div>
      <br />
      <br />
      <h3 className="font-bold lg:text-[32px] text-[22px] pb-4">
        {t("Requirements to provide information")}
      </h3>
      <p>{t("info1")}</p>
      <br />
      <p className="lg:text-[28px] text-[22px] font-semibold">{t("info2")}</p>
      <br />
      <ul className="list-disc p-4">
        <li>{t("infoList1")}</li>
        <li>{t("infoList2")}</li>
        <li>{t("infoList3")}</li>
        <li>{t("infoList4")}</li>
        <li>{t("infoList5")}</li>
        <li>{t("infoList6")}</li>
        <li>{t("infoList7")}</li>
      </ul>
      <br />
      <p>{t("info3")}</p>
      <br />
      <h2 className="lg:text-[32px] text-[22px] font-bold">
        {t("Data Records")}
      </h2>
      <br />
      <p>
        {t("data1")} <br /> <br />
        {t("data2")}
      </p>
    </div>
  );
};

export default Information;
