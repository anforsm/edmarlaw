"use client";
import React from "react";
import styles from "./Hero.module.css";
import { useTranslations } from "next-intl";
const Hero = () => {
  const t = useTranslations("Index");
  return (
    <section>
      <h1 className="text-3xl pl-6 pt-6">{t("Privacy Policy")}</h1>
    </section>
  );
};

export default Hero;
