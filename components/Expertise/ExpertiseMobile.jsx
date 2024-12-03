"use client";
import React from "react";
import { useState } from "react";

export default function ExpertiseMobile({ data }) {
  return (
    <div className="bg-[rgba(252,254,255,1)] w-full h-full px-4 py-14 flex flex-1 flex-col z-10 md:hidden">
      <h1 className="text-2xl text-[#00ADEE] font-[300] pb-10">
        Verksamhetsområden
      </h1>
      <ul className="flex flex-col gap-y-4 w-full flex-1">
        {data.map((item) => {
          return (
            <ExpandCard
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

function ExpandCard({ title, description }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border rounded bg-white p-4 w-full">
      <div
        className="flex items-center justify-between cursor-pointer"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <h2 className="text-lg font-medium">{title}</h2>
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
        <div className="text-gray-600">{description}</div>
      </div>
    </div>
  );
}
