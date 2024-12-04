"use client";
import React from "react";
import styles from "./Hero.module.css";
import { useTranslations } from "next-intl";
import Image from "next/image";
const Hero = ({ title, isEdmr, logoImg }) => {
  const t = useTranslations("Index");
  return (
    <div className="flex gap-x-0 px-6 justify-between flex-col sm:flex-row">
      <div className="flex flex-col basis-1/2">
        <div className="flex flex-col gap-y-6">
          <h1 className="font-[300] sm:text-[60px] text-[48px] sm:leading-[72px] leading-[57.6px] text-[#00ADEE]">
            Navigating Legal Waters with Excellence
          </h1>
          <p className="text-[16px] leading-[23.68px] pb-14">
            Advokatfirman EdmarLaw hjälper främst IT-bolag och teknikintensiva
            bolag, och har specialistkompetens sedan 25 år inom IT-rätt,
            dataskydd (GDPR), avtalsrätt, immaterialrätt och e-handel.
          </p>
        </div>
        <div className="sm:flex gap-x-11 sm:flex-row flex-col hidden">
          <div className="sm:w-fit w-full py-4 sm:px-8 px-6 h-min bg-black rounded-md text-center">
            <div className="text-white font-bold leading-[23.4px]">
              Verksamhetsområden
            </div>
          </div>
          <div className="sm:w-fit w-full sm:py-4 sm:px-8 h-min text-[18px] py-4 leading-[23.4px] font-bold rounded-md border-[#00ADEE] border flex items-center justify-center">
            <div className="text-black">Om EdmarLaw</div>
          </div>
        </div>
      </div>
      <div className="basis-1/2 flex justify-end">
        <Image
          className=""
          src={"/Featured Image.png"}
          alt="Bild på Malin Edmar"
          width={400}
          height={600}
        ></Image>
      </div>
      <div className="sm:hidden gap-x-11 sm:flex-row flex-col flex gap-y-6 pt-10">
        <div className="sm:w-fit w-full py-4 sm:px-8 px-6 h-min bg-black rounded-md text-center">
          <div className="text-white font-bold leading-[23.4px]">
            Verksamhetsområden
          </div>
        </div>
        <div className="sm:w-fit w-full sm:py-4 sm:px-8 h-min text-[18px] py-4 leading-[23.4px] font-bold rounded-md border-[#00ADEE] border flex items-center justify-center">
          <div className="text-black">Om EdmarLaw</div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

{
  /*
      <section className={"sm:grid sm:grid-cols-12 sm:px-4 px-6 flex flex-col"}>
      <div className="sm:col-span-12 col-span-12 flex flex-col sm:gap-y-11 gap-y-6">
        <div className="flex w-full flex-col gap-y-4">
          <h1 className="font-[300] sm:text-[60px] text-[48px] sm:leading-[72px] leading-[57.6px] text-[#00ADEE]">
            Navigating Legal Waters with Excellence
          </h1>
          <p className="text-[16px] leading-[23.68px] pb-14">
            Advokatfirman EdmarLaw hjälper främst IT-bolag och teknikintensiva
            bolag, och har specialistkompetens sedan 25 år inom IT-rätt,
            dataskydd (GDPR), avtalsrätt, immaterialrätt och e-handel.
          </p>
        </div>
        <div className="flex w-full sm:flex-row flex-col sm:gap-x-11 gap-y-6 sm:gap-y-0">
          <div className="w-full py-4 sm:px-8 px-6 h-min bg-black rounded-md text-center">
            <div className="text-white font-bold leading-[23.4px]">
              Verksamhetsområden
            </div>
          </div>
          <div className="w-full sm:py-4 sm:px-8 h-min text-[18px] py-4 leading-[23.4px] font-bold rounded-md border-[#00ADEE] border flex items-center justify-center">
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
