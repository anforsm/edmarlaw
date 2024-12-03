"use client";
import React from "react";
import styles from "./Hero.module.css";
import { useTranslations } from "next-intl";
import Image from "next/image";
const Hero = ({ title, isEdmr, logoImg }) => {
  const t = useTranslations("Index");
  return (
    <section className={"grid grid-cols-12 px-4"}>
      <div className="col-span-6 flex flex-col gap-y-11">
        <h1 className="font-[300] text-[60px] leading-[72px] text-[#00ADEE]">
          Navigating Legal Waters with Excellence
        </h1>
        <p className="text-[16px]">
          Advokatfirman EdmarLaw hjälper främst IT-bolag och teknikintensiva
          bolag, och har specialistkompetens sedan 25 år inom IT-rätt, dataskydd
          (GDPR), avtalsrätt, immaterialrätt och e-handel.
        </p>
        <div className="flex w-full gap-x-11">
          <div className="w-full py-4 px-8 h-min bg-black rounded-md">
            <div className="text-white font-bold leading-[23.4px]">
              Verksamhetsområden
            </div>
          </div>
          <div className="w-full py-4 px-8 h-min font-bold rounded-md border-[#00ADEE] border flex items-center justify-center">
            <div className="text-black">Om EdmarLaw</div>
          </div>
        </div>
      </div>
      <div className="col-span-6 flex justify-between">
        <div className="pl-[89px]"></div>
        <Image
          className=""
          src={"/Featured Image.png"}
          alt="Bild på Malin Edmar"
          width={400}
          height={600}
        ></Image>
      </div>
      {/* <h1 className="">Navigating Legal Waters with Excellence</h1> */}
      {/* <div className="col-span-6"></div> */}
    </section>
  );
};

export default Hero;
