"use client";
import React, { useState } from "react";
import styles from "./Navbar.module.css";
import Link from "next/link";
import LinkI from "next-intl/link";
import { useTranslations } from "next-intl";
import Drawer from "./Drawer";
import { usePathname, useRouter } from "next/navigation";
import Image from "next/image";
const Navbar = () => {
  const t = useTranslations("Index");
  const [isOpen, setIsOpen] = useState(false);
  const toggleDrawer = () => {
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
  return (
    <nav className="flex w-full">
      <div className="w-full flex">
        <div className="w-full flex justify-between">
          <div className="w-full flex items-center py-8">
            <Link href={"/"}>
              <Image
                className="max-h-[48px]"
                width={100}
                height={48}
                src="/logo2.png"
                alt=""
              />
            </Link>
          </div>
          <div className="flex w-full items-center justify-end gap-x-4">
            <Link href={"/expertise"}>
              <span>{t("Area of Expertise")}</span>
            </Link>
            <Link href={"/gdpr"}>
              <span>{t("GDPR")}</span>
            </Link>
            <Link href={"/references"}>
              <span>{t("REFERENCES")}</span>
            </Link>
            <Link href={"/about-us"}>
              <span>{t("ABOUT")}</span>
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
              {/* <LinkI href={getNewPath("en")} locale="en">
                <p>EN</p>
              </LinkI> */}
              <LinkI href={getNewPath("se")} locale="se">
                <p>SE</p>
              </LinkI>
            </div>
          </div>
          <div
            className={`navbar__hamburger ${isOpen ? "open" : ""}`}
            onClick={toggleDrawer}
          >
            <div className="navbar__hamburger-line" />
            <div className="navbar__hamburger-line" />
            <div className="navbar__hamburger-line" />
          </div>
        </div>
      </div>
      {isOpen && <Drawer onClose={() => setIsOpen(false)} />}
    </nav>
  );
};
export default Navbar;
