"use client";
import React from "react";
import styles from "./styles.module.css";
import { useTranslations } from "next-intl";
const AiActSystem = () => {
  const t = useTranslations("AiActSystem");
  return (
    <div className={styles.container}>
      <p>{t("AiActSystemDesc")}</p>
      <p className="font-bold md:!text-[32px] !text-[22px] pb-4 pt-12">
        {t("AiActSystemList1")}
      </p>
      <ul className="list-disc">
        <div className="">{t("AiActSystemDesc2")}</div>
        <div className="flex flex-col gap-y-2">
          <li>{t("AiActSystemDesc3")}</li>
          <li>{t("AiActSystemDesc4")}</li>
          <li>{t("AiActSystemDesc5")}</li>
          <li>{t("AiActSystemDesc6")}</li>
          <li>{t("AiActSystemDesc7")}</li>
          <li>{t("AiActSystemDesc8")}</li>
          <li>{t("AiActSystemDesc9")}</li>
        </div>
      </ul>
      <p className=" md:!text-[32px] !text-[22px] font-bold pt-12 pb-4">
        {t("AiActSystemList2Subheader")}
      </p>
      <ul className="list-disc flex flex-col gap-y-2">
        <div>{t("AiActSystemList2Desc")}</div>
        <li>{t("AiActSystemList2Desc2")}</li>
        <li>{t("AiActSystemList2Desc3")}</li>
        <li>{t("AiActSystemList2Desc4")}</li>
        <li>{t("AiActSystemList2Desc5")}</li>
      </ul>
      <p className=" md:!text-[32px] !text-[22px] font-bold pt-12 pb-4">
        {t("AiActSystemList2Subheader2")}
      </p>
      <p>{t("AiActSystemList2Desc6")}</p>
      {/* <p>{t("AiActSystemList2Desc7")}</p> */}
      <p className=" md:!text-[32px] !text-[22px] font-bold pt-12 pb-4">
        {t("AiActSystemList2Subheader3")}
      </p>
      <p>{t("AiActSystemList2Desc8")}</p>
    </div>
  );
};

export default AiActSystem;

/*
    "AiActSystemDesc": "The AI Act has a risk-based approach.",
    "AiActSystemList1": "Unacceptable risk",
    "AiActSystemDesc2": "AI systems that violate fundamental rights are considered particularly harmful. Uses of such AI systems will be banned. Examples of such violation of fundamental rights are:",
    "AiActSystemDesc3": "Exploitation of vulnerabilities of persons, manipulation and use of subliminal techniques;",
    "AiActSystemDesc4": "Social scoring for public and private purposes;",
    "AiActSystemDesc5": "Individual predictive policing based solely on profiling people;",
    "AiActSystemDesc6": "Untargeted scraping of internet or CCTV for facial images to build-up or expand databases;",
    "AiActSystemDesc7": "Emotion recognition in the workplace and education institutions, unless for medical or safety reasons (i.e., monitoring the tiredness levels of a pilot);",
    "AiActSystemDesc8": "Biometric categorization of natural persons to deduce or infer their race, political opinions, trade union membership, religious or philosophical beliefs or sexual orientation. Labelling or filtering of datasets and categorizing data in the field of law enforcement will still be possible;",
    "AiActSystemDesc9": "Real-time remote biometric identification in publicly accessible spaces by law enforcement, subject to narrow exceptions (see below).",
    "AiActSystemList2Subheader": "High risk",
    "AiActSystemList2Desc": "AI systems with an adverse impact on people’s safety or their fundamental rights are considered to be high-risk. There’s a list in the AI Act of these high-risk AI systems, and it is subject to frequent review based on technology advances. Examples are:",
    "AiActSystemList2Desc2": "AI systems that assess whether somebody is able to receive a certain medical treatment (AI-based medical software),",
    "AiActSystemList2Desc3": "AI systems that assess whether somebody is able to get a certain job or loan to buy an apartment.",
    "AiActSystemList2Desc4": "AI systems used by the police for profiling people or assessing their risk of committing a crime",
    "AiActSystemList2Desc5": "AI systems operating robots, drones, or medical devices.",
    "AiActSystemList2Subheader2": "Minimal risk",
    "AiActSystemList2Desc6": "The majority of AI systems today can be developed and used without particular obligations under the AI Act. But we recommend that you apply the requirements for trustworthy AI and implement an AI code of conduct when using AI technologies.",
    "AiActSystemList2Desc7": "It is important to ensure transparency around the use of AI. The AI Act therefore includes transparency requirements for some AI applications, where there is a clear risk of manipulation or deep fakes. Chatbots and social media are typical examples where users should be made aware that they are interacting with a machine.",
    "AiActSystemList2Subheader3": "General",
    "AiActSystemList2Desc8": "It is important to ensure transparency around the use of AI. The AI Act therefore includes transparency requirements for some AI applications, where there is a clear risk of manipulation or deep fakes. Chatbots and social media are typical examples where users should be made aware that they are interacting with a machine. The transparency requirement is similar to that in GDPR, i.e. an information requirement, and we recommend that you document your use of AI and inform your users in the same way as you would regarding your business’ use of personal data. You can apply the same approach; would the user expect its personal data to be used for this purpose? Would the user expect AI to be used in this scenario? If not, then you should inform the users about this. The EU AI Office (see below) will provide further guidelines for labelling AI generated content."
  
*/
