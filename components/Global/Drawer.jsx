"use client";
import Link from "next/link";
import React from "react";
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

  return (
    <div
      className={`w-dvw h-dvh bg-white absolute top-28 left-0 flex flex-col animate-slide-in`}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-end",
        }}
      >
        <AiOutlineClose onClick={onClose} />
      </div>
      <div className={"flex flex-col gap-y-4"}>
        <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
          {!asPath.startsWith("/en/") || asPath.startsWith("/en") ? (
            <LinkI href={getNewPath("en")} locale="en">
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
        <Link onClick={onClose} href={"/expertise"}>
          <span>{t("Area of Expertise")}</span>
        </Link>
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
