"use client";
import React, { useState } from "react";
import "./Navbar.css";
import Link from "next/link";
import LinkI from "next-intl/link";
import { useTranslations } from "next-intl";
import Drawer from "./Drawer";
import { usePathname, useRouter } from "next/navigation";
import Image from "next/image";
import { MenuButton } from "./MenuButton";
const Navbar = () => {
  const t = useTranslations("Index");
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = () => {
    document.body.style.overflow = !isOpen ? "hidden" : "auto";
    setIsOpen(!isOpen);
  };
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
  //
  return (
    <nav className="flex w-full px-6 lg:px-6 xl:px-2 bg-white z-[10000] h-28 sticky top-0 items-center justify-center">
      <div className="absolute bg-white h-full !max-w-none !w-screen shadow-sm pointer-events-none z-[9999]"></div>
      <div className="w-full flex z-[10001]">
        <div className="w-full flex justify-between items-center">
          <div className="flex items-center max-h-12">
            <Link
              onClick={() => {
                document.body.style.overflow = "auto";
                setIsOpen(false);
              }}
              href={"/"}
              className="h-full w-fit"
            >
              <Image
                className="h-12 w-44 object-contain"
                width={200}
                height={200}
                src="/logo2.png"
                alt=""
              />
            </Link>
          </div>
          <div className="md:flex hidden w-full items-center justify-end gap-x-4">
            <Link className="w-max flex" href={"/expertise"}>
              <span>{t("Area of Expertise")}</span>
            </Link>
            <Link href={"/ai"}>
              <span>{t("AI")}</span>
            </Link>
            <Link href={"/gdpr"}>
              <span>{t("GDPR")}</span>
            </Link>
            <Link href={"/references"}>
              <span>{t("REFERENCES")}</span>
            </Link>
            <Link className="flex w-max" href={"/about-us"}>
              <span>{t("aboutTitle")}</span>
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
            <div className="text-[#00adee]">
              {asPath.startsWith("/en") ? (
                <LinkI href={getNewPath("se")} locale="se">
                  <p>SE</p>
                </LinkI>
              ) : (
                <LinkI href={getNewPath("en")} locale="en">
                  <p>EN</p>
                </LinkI>
              )}
            </div>
          </div>
          <div
            className={`${isOpen ? "open" : ""} md:hidden flex`}
            onClick={toggleDrawer}
          >
            <MenuButton isOpen={isOpen}></MenuButton>
          </div>
        </div>
      </div>
      {isOpen && (
        <Drawer
          onClose={() => {
            setIsOpen(false);
            document.body.style.overflow = "auto";
          }}
        />
      )}
    </nav>
  );
};
export default Navbar;
