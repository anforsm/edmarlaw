import Image from "next/image";
import React from "react";

export default function Card({ title, description, icon }) {
  return (
    <div className="flex flex-col gap-y-6 border border-gray-200 pb-6 rounded col-span-4 p-4">
      <div>
        <Image src={icon} alt={title} width={36} height={36} />
      </div>
      <div className="flex flex-col gap-y-2">
        <div>{title}</div>
        <p>{description}</p>
        <div>Läs mer</div>
      </div>
    </div>
  );
}
