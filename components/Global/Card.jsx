import Image from "next/image";
import React from "react";
import { useTranslations } from "next-intl";
import Link from "next/link";
export default function Card({ title, description, icon, size, link }) {
  const SIZE_MAP = {
    lg: { width: 80, height: 57 },
    default: { width: 57, height: 40 },
  };
  const t = useTranslations("Cards");
  return (
    <Link
      href={link}
      data-size={size}
      className="flex data-[size=sm]:flex-row data-[size=sm]:gap-x-4 data-[size=sm]:items-center flex-col gap-y-6 border border-[#CBCDD0] bg-white rounded lg:col-span-4 col-span-12 p-4"
    >
      <div>
        {/* <Image src={icon} alt={title} width={36} height={36} /> */}
        {icon}
      </div>
      <div
        data-size={size}
        className="flex flex-col gap-y-2 h-full data-[size=sm]:justify-center justify-between"
      >
        <div className="flex flex-col gap-y-2">
          <h4 className="font-semibold text-lg">{title}</h4>
          {size !== "sm" && <p>{t(description)}</p>}
        </div>
        {size !== "sm" && (
          <div className="font-semibold text-sm">{t("readMore")}</div>
        )}
      </div>
    </Link>
  );
}
