"use client";
import React from "react";
import styles from "./Publisher.module.css";
import Link from "next/link";
import { useTranslations } from "next-intl";
import Image from "next/image";

const Publisher = () => {
  const t = useTranslations("Index");

  return (
    <div className="sm:grid sm:grid-cols-12 gapx px-6 sm:py-36 flex flex-col gap-y-12 sm:gap-y-0 pb-40">
      <div className={"sm:col-span-6 sm:grid sm:grid-cols-12"}>
        <Image
          className="w-full h-full sm:col-span-8 shadow sm:shadow-none"
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
          <h1 className="sm:text-3xl font-semibold text-[28px] leading-[39.2px]">
            {t("publisherTitle")}
          </h1>
          <p className="text-[16px] leading-[23.68px]">
            {t("publisherDescription")}
          </p>
          <button className="bg-[#1D1D1D] text-white sm:px-10 sm:py-5 py-4 rounded-[6px] sm:w-fit text-center w-full">
            <span className="text-[16px] font-bold leading-6">
              {t("publisherViewAllPublications")}
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Publisher;
