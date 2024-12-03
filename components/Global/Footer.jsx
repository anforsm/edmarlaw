"use client";
import React from "react";
import styles from "./Footer.module.css";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { FaLinkedinIn, FaMailchimp } from "react-icons/fa";
import { AiFillMail, AiOutlineMail } from "react-icons/ai";
import Image from "next/image";
const Footer = () => {
  const t = useTranslations("Index");
  return (
    <footer className={"relative w-full flex justify-center"}>
      <div className="absolute h-full bg-gray-100 !max-w-none !w-screen"></div>

      <div className={"px-8 z-10 w-full pt-16"}>
        <div className="flex flex-col md:gap-y-16 md:pt-16">
          <div className="flex flex-col md:flex-row md:gap-x-16 gap-y-8">
            <a style={{ color: "black" }} href="tel:+46767742220">
              +46 76-774 2220
            </a>
            <a
              style={{
                color: "black",
                display: "flex",
                alignItems: "center",
                gap: "0.5rem",
              }}
              href="mailto:info@edmarlaw.se"
            >
              <AiOutlineMail /> info@edmarlaw.se
            </a>
            <div>Advokatfirman EdmarLaw AB</div>
            <a
              style={{
                color: "black",
                display: "flex",
                alignItems: "center",
                gap: "0.5rem",
              }}
              href="https://www.linkedin.com/company/advokatfirman-edmarlaw/"
              target="_blank"
            >
              <FaLinkedinIn /> LinkedIn
            </a>
          </div>
          {/* <hr /> */}
          <div className="flex flex-col md:flex-row md:gap-x-16 pt-8 sm:pt-0 gap-y-8">
            <p>
              {" "}
              <Link style={{ color: "" }} href={"/terms"}>
                {t("Terms and Conditions")}{" "}
              </Link>{" "}
              <span className="text-[]">&</span>{" "}
              <Link style={{ color: "" }} href={"/privacy-policy"}>
                {t("Privacy Policy")}
              </Link>
            </p>
            <p>© Advokatfirman EdmarLaw AB</p>
          </div>
          <div className={"w-full flex justify-center pt-16"}>
            <Image
              className="w-full"
              width={1000}
              height={1000}
              src="/logo2.png"
              alt=""
            />
            {/* <div className="flex items-end">
              <span className="">edmar</span>
              <span className="text-[#00adee] text-[12px]">LAW</span>
            </div> */}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
