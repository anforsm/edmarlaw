"use client";
import Link from "next/link";
import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import LinkI from "next-intl/link";
import "./Navbar.css";
import { useTranslations } from "next-intl";
import { usePathname } from "next/navigation";
const Drawer = ({ onClose }) => {
  const t = useTranslations("Index");
  const asPath = usePathname();

  const getNewPath = (locale) => {
    if (locale === "en") {
      return asPath.startsWith("/en/") || asPath.startsWith("/en")
        ? asPath.substring(3)
        : asPath === "/en"
        ? "/"
        : asPath;
    } else {
      return asPath.startsWith("/en/") || asPath.startsWith("/en")
        ? `/${locale}${asPath.substring(3)}`
        : `/${locale}${asPath}`;
    }
  };

  const [isOpenDropdown, setIsOpenDropdown] = useState(false);

  return (
    <div
      className={`w-screen h-screen bg-white fixed top-28 z-10 left-0 flex flex-col animate-slide-in`}
    >
      <div className={"flex flex-col gap-y-10 px-6 text-[16px]"}>
        <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
          {!asPath.startsWith("/en/") || asPath.startsWith("/en") ? (
            <LinkI
              className="text-[#00adee]"
              href={getNewPath("en")}
              locale="en"
            >
              <p>EN</p>
            </LinkI>
          ) : (
            <LinkI href={getNewPath("se")} locale="se">
              <p>SE</p>
            </LinkI>
          )}
        </div>
        <Link onClick={onClose} href={"/about-us"}>
          <span>{t("ABOUT")}</span>
        </Link>
        <Link onClick={onClose} href={"/references"}>
          <span>{t("REFERENCES")}</span>
        </Link>
        <div className="">
          <div
            className="flex items-center justify-between cursor-pointer"
            onClick={() => setIsOpenDropdown((prev) => !prev)}
          >
            <h2 className="font-bold">{t("expertiseTitle")}</h2>
            <svg
              className={`w-5 h-5 text-black transform transition-transform duration-200 ${
                isOpenDropdown ? "rotate-180" : ""
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
              isOpenDropdown ? "opacity-100 mt-4" : "max-h-0 opacity-0"
            }`}
          >
            <div className="text-black border-l flex flex-col gap-y-4">
              <Link className=" py-2 px-3" href={"/expertise?section=AI"}>
                {t("AI")}
              </Link>
              <Link className=" py-2 px-3" href={"/expertise?section=AI"}>
                {t("IT Law")}
              </Link>
              <Link className=" py-2 px-3" href={"/expertise?section=AI"}>
                {t("Contract Law")}
              </Link>
              <Link className=" py-2 px-3" href={"/expertise?section=AI"}>
                {t("Copyright")}
              </Link>
              <Link className=" py-2 px-3" href={"/expertise?section=AI"}>
                {t("Privacy Law")}
              </Link>
              <Link className=" py-2 px-3" href={"/expertise?section=AI"}>
                {t("Outsourcing")}
              </Link>
              <Link className=" py-2 px-3" href={"/expertise?section=AI"}>
                {t("E-commerce")}
              </Link>
              <Link className=" py-2 px-3" href={"/expertise?section=AI"}>
                {t("Domain Names")}
              </Link>
            </div>
          </div>
        </div>
        <Link onClick={onClose} href={"/gdpr"}>
          <span>{t("GDPR")}</span>
        </Link>
        {/* <div class="dropdown">
              <select>
                <option value="en">
                  <LinkI href={"/"} locale="en">
                    English
                  </LinkI>
                </option>
                <option value="sv">
                  <LinkI href={"/"} locale="sv">
                    Sweeden
                  </LinkI>
                </option>
              </select>
            </div> */}
      </div>
    </div>
  );
};
export default Drawer;
