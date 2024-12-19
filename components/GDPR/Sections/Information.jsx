import { useTranslations } from "next-intl";
import React from "react";

const Information = () => {
  const t = useTranslations("GDPR");
  return (
    <div>
      <br />
      <h3 className="font-semi text-[20px] pb-4">
        {t("Requirements to provide information")}
      </h3>
      <p>{t("info1")}</p>
      <br />
      <p className="text-[20px] !font-semibold">{t("info2")}</p>
      <ul className="list-disc p-4">
        <li>{t("infoList1")}</li>
        <li>{t("infoList2")}</li>
        <li>{t("infoList3")}</li>
        <li>{t("infoList4")}</li>
        <li>{t("infoList5")}</li>
        <li>{t("infoList6")}</li>
        <li>{t("infoList7")}</li>
      </ul>
      <p>{t("info3")}</p>
      <br />
      <h2 className="text-[20px] !font-semibold">{t("Data Records")}</h2>
      <br />
      <p>
        {t("data1")} <br /> <br />
        {t("data2")}
      </p>
    </div>
  );
};

export default Information;
