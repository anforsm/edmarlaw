"use client";
import { useTranslations } from "next-intl";
import { useSearchParams } from "next/navigation";
import React, { useEffect, useRef } from "react";
import { useState } from "react";

export default function ExpertiseMobile({ data, translate }) {
  const tExpertise = useTranslations("Index");
  const t = useTranslations(translate);
  const pathname = useSearchParams();

  return (
    <div className="bg-[rgba(252,254,255,1)] w-full h-full px-4 py-14 flex flex-1 flex-col z-10 md:hidden">
      <h1 className="text-[32px] text-[#00ADEE] font-[300] pb-10">
        {tExpertise("expertiseTitle")}
      </h1>
      <ul className="flex flex-col gap-y-4 w-full flex-1">
        {data.map((item) => {
          return (
            <ExpandCard
              subHeader={item.subheader}
              params={pathname.get("section")}
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

function ExpandCard({ title, description, t, params, subHeader }) {
  const [isOpen, setIsOpen] = useState(
    () => params?.toLowerCase() === subHeader?.toLowerCase()
  );
  const cardRef = useRef(null);

  useEffect(() => {
    if (!params) return;
    setIsOpen(params?.toLowerCase() === subHeader.toLowerCase());
    if (params?.toLowerCase() === subHeader.toLowerCase()) {
      setTimeout(() => {
        cardRef.current?.scrollIntoView({
          behavior: "smooth",
          block: "start",
          inline: "start",
        });
      }, 100);
    }
  }, [params, subHeader]);

  return (
    <div
      ref={cardRef}
      className="border rounded bg-white p-4 w-full scroll-mt-32"
    >
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
