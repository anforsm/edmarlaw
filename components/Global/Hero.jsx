"use client";
import React from "react";
import styles from "./Hero.module.css";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
const Hero = ({ title, isEdmr, logoImg }) => {
  const t = useTranslations("Index");
  return (
    <div className="flex px-6 justify-between flex-col lg:flex-row gap-x-6 pt-14">
      <div className="flex flex-col basis-1/2 pb-14 py-0 lg:py-14">
        <div className="flex flex-col gap-y-6">
          <h1 className="font-[300] xl:w-4/5 lg:text-[60px] text-[48px] lg:leading-[72px] leading-[57.6px] text-[#00ADEE]">
            {t("MainTitle")}
          </h1>
          <p className="text-[16px] leading-[23.68px] lg:pb-14 lg:pr-9">
            {t("intro")}
          </p>
        </div>
        <div className="lg:flex gap-x-11 lg:flex-row flex-col hidden">
          <Link
            href={"/expertise"}
            className="lg:w-fit w-full py-4 lg:px-8 px-6 h-min bg-black rounded-md text-center"
          >
            <div className="text-white font-bold leading-[23.4px]">
              {t("expertiseTitle")}
            </div>
          </Link>
          <Link
            href={"/about-us"}
            className="lg:w-fit w-full lg:py-4 lg:px-8 h-min text-[18px] py-4 leading-[23.4px] font-bold rounded-md border-[#00ADEE] border flex items-center justify-center"
          >
            <div className="text-black">{t("aboutTitle")}</div>
          </Link>
        </div>
      </div>
      <div className="basis-1/2 flex justify-end">
        <Image
          className="object-contain w-full"
          src={"/malinfrontpage.png"}
          alt="Bild på Malin Edmar"
          width={800}
          height={1200}
        ></Image>
      </div>
      <div className="lg:hidden gap-x-11 lg:flex-row flex-col flex gap-y-6 pt-10">
        <Link
          href={"/expertise"}
          className="lg:w-fit w-full py-4 lg:px-8 px-6 h-min bg-black rounded-md text-center"
        >
          <div className="text-white font-bold leading-[23.4px]">
            {t("expertiseTitle")}
          </div>
        </Link>
        <Link
          href={"/about-us"}
          className="lg:w-fit w-full lg:py-4 lg:px-8 h-min text-[18px] py-4 leading-[23.4px] font-bold rounded-md border-[#00ADEE] border flex items-center justify-center"
        >
          <div className="text-black">{t("aboutTitle")}</div>
        </Link>
      </div>
    </div>
  );
};

export default Hero;

{
  /*
      <section className={"lg:grid lg:grid-cols-12 lg:px-4 px-6 flex flex-col"}>
      <div className="lg:col-span-12 col-span-12 flex flex-col lg:gap-y-11 gap-y-6">
        <div className="flex w-full flex-col gap-y-4">
          <h1 className="font-[300] lg:text-[60px] text-[48px] lg:leading-[72px] leading-[57.6px] text-[#00ADEE]">
            Navigating Legal Waters with Excellence
          </h1>
          <p className="text-[16px] leading-[23.68px] pb-14">
            Advokatfirman EdmarLaw hjälper främst IT-bolag och teknikintensiva
            bolag, och har specialistkompetens sedan 25 år inom IT-rätt,
            dataskydd (GDPR), avtalsrätt, immaterialrätt och e-handel.
          </p>
        </div>
        <div className="flex w-full lg:flex-row flex-col lg:gap-x-11 gap-y-6 lg:gap-y-0">
          <div className="w-full py-4 lg:px-8 px-6 h-min bg-black rounded-md text-center">
            <div className="text-white font-bold leading-[23.4px]">
              Verksamhetsområden
            </div>
          </div>
          <div className="w-full lg:py-4 lg:px-8 h-min text-[18px] py-4 leading-[23.4px] font-bold rounded-md border-[#00ADEE] border flex items-center justify-center">
            <div className="text-black">Om EdmarLaw</div>
          </div>
        </div>
        <div className="col-span-6 flex justify-between">
          <div className=""></div>
          <Image
            className=""
            src={"/Featured Image.png"}
            alt="Bild på Malin Edmar"
            width={400}
            height={600}
          ></Image>
        </div>
      </div>
      {/* <h1 className="">Navigating Legal Waters with Excellence</h1> */
  /* <div className="col-span-6"></div> 
      </section>
  */
}
