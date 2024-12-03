"use client";
import React from "react";
import styles from "./Publisher.module.css";
import Link from "next/link";
import { useTranslations } from "next-intl";
import Image from "next/image";

const Publisher = () => {
  const t = useTranslations("Index");

  return (
    <div className="grid grid-cols-12 gapx px-4 py-36">
      <div className={"col-span-6 grid grid-cols-12"}>
        <Image
          className="w-full h-full col-span-8"
          src={
            "/9789139023012_383x_internetpublicering-och-sociala-medier-en-juridisk-vagledning_haftad.png"
          }
          alt=""
          width={400}
          height={400}
        />
      </div>
      <div className={"col-span-6 flex justify-end"}>
        <div className="flex flex-col gap-y-8">
          <h1 className="text-3xl font-semibold">{t("publisherTitle")}</h1>
          <p>{t("publisherDescription")}</p>
          <button className="bg-[#1D1D1D] text-white px-10 py-5 rounded-[6px] w-fit">
            <span className="text-[16px] font-bold leading-6">
              Se alla publikationer
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Publisher;
