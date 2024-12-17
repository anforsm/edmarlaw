"use client";
import { useTranslations } from "next-intl";
import React from "react";
import { useState } from "react";

export default function ExpertiseMobile({ data, translate }) {
  const tExpertise = useTranslations("Index");
  const t = useTranslations(translate);
  return (
    <div className="bg-[rgba(252,254,255,1)] w-full h-full px-4 py-14 flex flex-1 flex-col z-10 md:hidden">
      <h1 className="text-[32px] text-[#00ADEE] font-[300] pb-10">
        {tExpertise("expertiseTitle")}
      </h1>
      <ul className="flex flex-col gap-y-4 w-full flex-1">
        {data.map((item) => {
          return (
            <ExpandCard
              t={t}
              key={item.title}
              title={item.title}
              description={item.description}
            />
          );
        })}
      </ul>
    </div>
  );
}

function ExpandCard({ title, description, t }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border rounded bg-white p-4 w-full">
      <div
        className="flex items-center justify-between cursor-pointer"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <h2 className="text-[22px] font-bold text-[#00ADEE]">{t(title)}</h2>
        <svg
          className={`w-5 h-5 text-gray-500 transform transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </div>
      <div
        className={`overflow-hidden transition-all duration-200 ease-in-out ${
          isOpen ? "opacity-100 mt-4" : "max-h-0 opacity-0"
        }`}
      >
        <div className="">{description}</div>
      </div>
    </div>
  );
}
