import Image from "next/image";
import React from "react";

export default function Card({ title, description, icon }) {
  return (
    <div className="flex flex-col gap-y-6 border border-[#CBCDD0] bg-white rounded sm:col-span-4 col-span-12 p-4">
      <div>
        {/* <Image src={icon} alt={title} width={36} height={36} /> */}
        {icon}
      </div>
      <div className="flex flex-col gap-y-2">
        <h4 className="font-semibold text-lg">{title}</h4>
        <p>
          {description} Lorem ipsum dolor, sit amet consectetur adipisicing elit
        </p>
        <div className="font-semibold text-sm">Läs mer</div>
      </div>
    </div>
  );
}
