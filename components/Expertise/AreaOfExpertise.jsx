"use client";
import React, { useEffect, useRef, useState } from "react";
import styles from "./Area.module.css"; // Import the CSS module
import { AiOutlineRight } from "react-icons/ai";
import TelecomLawDescription from "./Sections/TelecomLawDescription";
import DesignLawDescription from "./Sections/DesignLawDescription";
import TrademarkLawDescription from "./Sections/TrademarkLawDescription";
import DomainNamesDescription from "./Sections/DomainNamesDescription";
import MarketingLawDescription from "./Sections/MarketingLawDescription";
import EcommerceDescription from "./Sections/EcommerceDescription";
import OutsourcingDescription from "./Sections/OutsourcingDescription";
import CopyrightDescription from "./Sections/CopyrightDescription";
import PrivacyLawDescription from "./Sections/PrivacyLawDescription";
import ContractLawDescription from "./Sections/ContractLawDescription";
import ITLawDescription from "./Sections/ITLawDescription";
import { useTranslations } from "next-intl";
import Faq from "./Faq";
import { useSearchParams } from "next/navigation";
import ExpertiseMobile from "./ExpertiseMobile";
import AiExpertise from "./Sections/AiExpertise";

export const areasOfExpertise = [
  {
    title: "AI",
    subheader: "ai",
    image: "/techlogo.png",
    svg: (
      <svg
        width="18"
        height="17"
        viewBox="0 0 16 17"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M5 0.5C5.25 0.5 5.5 0.75 5.5 1V2.5H7.5V1C7.5 0.75 7.71875 0.5 8 0.5C8.25 0.5 8.5 0.75 8.5 1V2.5H10.5V1C10.5 0.75 10.7188 0.5 11 0.5C11.25 0.5 11.5 0.75 11.5 1V2.5H12C13.0938 2.5 14 3.40625 14 4.5V5H15.5C15.75 5 16 5.25 16 5.5C16 5.78125 15.75 6 15.5 6H14V8H15.5C15.75 8 16 8.25 16 8.5C16 8.78125 15.75 9 15.5 9H14V11H15.5C15.75 11 16 11.25 16 11.5C16 11.7812 15.75 12 15.5 12H14V12.5C14 13.625 13.0938 14.5 12 14.5H11.5V16C11.5 16.2812 11.25 16.5 11 16.5C10.7188 16.5 10.5 16.2812 10.5 16V14.5H8.5V16C8.5 16.2812 8.25 16.5 8 16.5C7.71875 16.5 7.5 16.2812 7.5 16V14.5H5.5V16C5.5 16.2812 5.25 16.5 5 16.5C4.71875 16.5 4.5 16.2812 4.5 16V14.5H4C2.875 14.5 2 13.625 2 12.5V12H0.5C0.21875 12 0 11.7812 0 11.5C0 11.25 0.21875 11 0.5 11H2V9H0.5C0.21875 9 0 8.78125 0 8.5C0 8.25 0.21875 8 0.5 8H2V6H0.5C0.21875 6 0 5.78125 0 5.5C0 5.25 0.21875 5 0.5 5H2V4.5C2 3.40625 2.875 2.5 4 2.5H4.5V1C4.5 0.75 4.71875 0.5 5 0.5ZM4 3.5C3.4375 3.5 3 3.96875 3 4.5V12.5C3 13.0625 3.4375 13.5 4 13.5H12C12.5312 13.5 13 13.0625 13 12.5V4.5C13 3.96875 12.5312 3.5 12 3.5H4ZM6.9375 6.3125L8.6875 10.3125C8.8125 10.5625 8.6875 10.875 8.4375 10.9688C8.1875 11.0938 7.90625 10.9688 7.78125 10.7188L7.46875 10H5.5L5.1875 10.7188C5.09375 10.9688 4.78125 11.0938 4.53125 10.9688C4.28125 10.8438 4.15625 10.5625 4.28125 10.3125L6.03125 6.3125C6.09375 6.125 6.28125 6 6.5 6C6.6875 6 6.875 6.125 6.9375 6.3125ZM6.5 7.75L5.9375 9H7.03125L6.5 7.75ZM11 6.5V10.5C11 10.7812 10.75 11 10.5 11C10.2188 11 10 10.7812 10 10.5V6.5C10 6.25 10.2188 6 10.5 6C10.75 6 11 6.25 11 6.5Z"
          fill="#00ADEE"
        />
      </svg>
    ),
    description: <AiExpertise />,
  },
  {
    title: "IT Law",
    subheader: "law",
    image: "/techlogo.png",
    svg: (
      <svg
        width="18"
        height="16"
        viewBox="0 0 20 14"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12 1.5H2C1.71875 1.5 1.5 1.75 1.5 2V9C1.5 9.28125 1.71875 9.5 2 9.5H5.1875H5.75H8.25H8.78125H12C12.25 9.5 12.5 9.28125 12.5 9V2C12.5 1.75 12.25 1.5 12 1.5ZM2 11C0.875 11 0 10.125 0 9V2C0 0.90625 0.875 0 2 0H12C13.0938 0 14 0.90625 14 2V9C14 10.125 13.0938 11 12 11H9.28125L9.78125 12.5H11.25C11.6562 12.5 12 12.8438 12 13.25C12 13.6875 11.6562 14 11.25 14H10.2812H9.25H4.75H3.6875H2.75C2.3125 14 2 13.6875 2 13.25C2 12.8438 2.3125 12.5 2.75 12.5H4.1875L4.6875 11H2ZM5.78125 12.5H8.1875L7.6875 11H6.28125L5.78125 12.5ZM16.5 1.5V2.5H18.5V1.5H16.5ZM16.5 4V5H18.5V4H16.5ZM18.5 6.5H16.5V12.5H18.5V6.5ZM15 1.5C15 0.6875 15.6562 0 16.5 0H18.5C19.3125 0 20 0.6875 20 1.5V12.5C20 13.3438 19.3125 14 18.5 14H16.5C15.6562 14 15 13.3438 15 12.5V1.5ZM17.5 10.25C17.0625 10.25 16.75 9.9375 16.75 9.5C16.75 9.09375 17.0625 8.75 17.5 8.75C17.9062 8.75 18.25 9.09375 18.25 9.5C18.25 9.9375 17.9062 10.25 17.5 10.25Z"
          fill="#00ADEE"
        />
      </svg>
    ),
    description: <ITLawDescription />, // Replace with the appropriate component for IT Law
  },
  {
    title: "Contract Law",
    subheader: "contract",
    image: "/techlogo.png",
    svg: (
      <svg
        width="18"
        height="16"
        viewBox="0 0 12 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M10 15C10.5312 15 11 14.5625 11 14V6H7.5C6.65625 6 6 5.34375 6 4.5V1H2C1.4375 1 1 1.46875 1 2V14C1 14.5625 1.4375 15 2 15H10ZM7.5 5H10.9688C10.9375 4.9375 10.9062 4.84375 10.8438 4.78125L7.21875 1.15625C7.15625 1.09375 7.0625 1.0625 7 1.03125V4.5C7 4.78125 7.21875 5 7.5 5ZM2 0H6.875C7.25 0 7.65625 0.1875 7.9375 0.46875L11.5312 4.0625C11.8125 4.34375 12 4.75 12 5.125V14C12 15.125 11.0938 16 10 16H2C0.875 16 0 15.125 0 14V2C0 0.90625 0.875 0 2 0ZM2.5 2H4.5C4.75 2 5 2.25 5 2.5C5 2.78125 4.75 3 4.5 3H2.5C2.21875 3 2 2.78125 2 2.5C2 2.25 2.21875 2 2.5 2ZM2.5 4H4.5C4.75 4 5 4.25 5 4.5C5 4.78125 4.75 5 4.5 5H2.5C2.21875 5 2 4.78125 2 4.5C2 4.25 2.21875 4 2.5 4ZM4.1875 11.9375C4 12.5938 3.40625 13 2.75 13H2.5C2.21875 13 2 12.7812 2 12.5C2 12.25 2.21875 12 2.5 12H2.75C2.96875 12 3.15625 11.875 3.21875 11.6562L3.6875 10.125C3.78125 9.75 4.125 9.5 4.5 9.5C4.84375 9.5 5.1875 9.75 5.28125 10.0938L5.6875 11.4375C5.90625 11.1562 6.21875 11 6.5625 11C7 11 7.40625 11.25 7.625 11.6562L7.78125 12H9.5C9.75 12 10 12.25 10 12.5C10 12.7812 9.75 13 9.5 13H7.5C7.3125 13 7.125 12.9062 7.03125 12.75L6.71875 12.0938C6.6875 12.0625 6.625 12 6.5625 12C6.53125 12 6.46875 12.0312 6.4375 12.0938L5.875 12.8125C5.78125 12.9688 5.59375 13.0312 5.40625 13C5.21875 12.9688 5.0625 12.8438 5 12.6562L4.5 10.9062L4.1875 11.9375Z"
          fill="#00ADEE"
        />
      </svg>
    ),
    description: <ContractLawDescription />, // Replace with the appropriate component for Contract Law
  },
  {
    title: "Copyright",
    subheader: "copyright",
    image: "/techlogo.png",
    svg: (
      <svg
        width="18"
        height="16"
        viewBox="0 0 18 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M9 1C6.46875 1 4.1875 2.34375 2.9375 4.5C1.65625 6.6875 1.65625 9.34375 2.9375 11.5C4.1875 13.6875 6.46875 15 9 15C11.5 15 13.7812 13.6875 15.0312 11.5C16.3125 9.34375 16.3125 6.6875 15.0312 4.5C13.7812 2.34375 11.5 1 9 1ZM9 16C6.125 16 3.5 14.5 2.0625 12C0.625 9.53125 0.625 6.5 2.0625 4C3.5 1.53125 6.125 0 9 0C11.8438 0 14.4688 1.53125 15.9062 4C17.3438 6.5 17.3438 9.53125 15.9062 12C14.4688 14.5 11.8438 16 9 16ZM11.0938 10.125C11.3125 9.9375 11.625 9.9375 11.8125 10.125C12 10.3438 12 10.6562 11.8125 10.8438C10.25 12.4062 7.71875 12.4062 6.15625 10.8438C4.59375 9.28125 4.59375 6.75 6.15625 5.1875C7.71875 3.625 10.25 3.625 11.8125 5.1875C12 5.375 12 5.6875 11.8125 5.90625C11.625 6.09375 11.3125 6.09375 11.0938 5.90625C9.9375 4.71875 8.03125 4.71875 6.875 5.90625C5.6875 7.0625 5.6875 8.96875 6.875 10.125C8.03125 11.3125 9.9375 11.3125 11.0938 10.125Z"
          fill="#00ADEE"
        />
      </svg>
    ),
    description: <CopyrightDescription />, // Replace with the appropriate component for Copyright
  },
  {
    title: "Privacy Law",
    subheader: "privacy",
    image: "/techlogo.png",
    svg: (
      <svg
        width="18"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M8.375 1.1875C8.125 1.0625 7.84375 1.0625 7.59375 1.1875L2.0625 3.53125C1.71875 3.65625 1.46875 4 1.5 4.375C1.5 7.3125 2.71875 12.5 7.59375 14.8438C7.84375 14.9688 8.125 14.9688 8.375 14.8438C13.25 12.5 14.4688 7.3125 14.5 4.375C14.5 4 14.25 3.65625 13.9062 3.53125L8.375 1.1875ZM7.21875 0.25C7.71875 0.03125 8.28125 0.03125 8.78125 0.25L14.2812 2.59375C14.9688 2.90625 15.5 3.5625 15.5 4.375C15.4688 7.5 14.1875 13.1562 8.8125 15.75C8.28125 16 7.6875 16 7.15625 15.75C1.78125 13.1562 0.5 7.5 0.5 4.375C0.46875 3.5625 1 2.90625 1.6875 2.59375L7.21875 0.25Z"
          fill="#00ADEE"
        />
      </svg>
    ),

    description: <PrivacyLawDescription />, // Replace with the appropriate component for Privacy Law
  },
  {
    title: "Outsourcing",
    subheader: "outsourcing",
    image: "/techlogo.png",
    svg: (
      <svg
        width="18"
        height="17"
        viewBox="0 0 14 17"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M10 5C10 3.9375 9.40625 2.96875 8.5 2.40625C7.5625 1.875 6.40625 1.875 5.5 2.40625C4.5625 2.96875 4 3.9375 4 5C4 6.09375 4.5625 7.0625 5.5 7.625C6.40625 8.15625 7.5625 8.15625 8.5 7.625C9.40625 7.0625 10 6.09375 10 5ZM3 5C3 3.59375 3.75 2.28125 5 1.5625C6.21875 0.84375 7.75 0.84375 9 1.5625C10.2188 2.28125 11 3.59375 11 5C11 6.4375 10.2188 7.75 9 8.46875C7.75 9.1875 6.21875 9.1875 5 8.46875C3.75 7.75 3 6.4375 3 5ZM1 16H13C12.9375 13.5312 10.9062 11.5 8.40625 11.5H5.5625C3.0625 11.5 1.03125 13.5312 1 16ZM0 16.0938C0 13 2.46875 10.5 5.5625 10.5H8.40625C11.5 10.5 14 13 14 16.0938C14 16.5938 13.5625 17 13.0625 17H0.90625C0.40625 17 0 16.5938 0 16.0938Z"
          fill="#00ADEE"
        />
      </svg>
    ),
    description: <OutsourcingDescription />, // Replace with the appropriate component for Outsourcing
  },
  {
    title: "E-commerce",
    subheader: "ecom",
    image: "/techlogo.png",
    svg: (
      <svg
        width="18"
        height="17"
        viewBox="0 0 18 17"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0.5 0H1.65625C2.3125 0 2.875 0.40625 3.09375 1H16.8438C17.5 1 17.9688 1.625 17.8125 2.25L16.5 7.5C16.2812 8.375 15.4688 9 14.5625 9H4.75L4.96875 10.2188C5.0625 10.6875 5.5 11 5.96875 11H15.5C15.75 11 16 11.25 16 11.5C16 11.7812 15.75 12 15.5 12H5.96875C5 12 4.1875 11.3438 4 10.4062L2.15625 1.40625C2.125 1.1875 1.90625 1 1.65625 1H0.5C0.21875 1 0 0.78125 0 0.5C0 0.25 0.21875 0 0.5 0ZM3.3125 2L4.53125 8H14.5625C15.0312 8 15.4375 7.6875 15.5312 7.25L16.8438 2H3.3125ZM5.25 14.25C5.25 14.6875 5.5625 15 6 15C6.40625 15 6.75 14.6875 6.75 14.25C6.75 13.8438 6.40625 13.5 6 13.5C5.5625 13.5 5.25 13.8438 5.25 14.25ZM7.75 14.25C7.75 14.9062 7.40625 15.4688 6.875 15.7812C6.3125 16.0938 5.65625 16.0938 5.125 15.7812C4.5625 15.4688 4.25 14.9062 4.25 14.25C4.25 13.625 4.5625 13.0625 5.125 12.75C5.65625 12.4375 6.3125 12.4375 6.875 12.75C7.40625 13.0625 7.75 13.625 7.75 14.25ZM14 13.5C13.5625 13.5 13.25 13.8438 13.25 14.25C13.25 14.6875 13.5625 15 14 15C14.4062 15 14.75 14.6875 14.75 14.25C14.75 13.8438 14.4062 13.5 14 13.5ZM14 16C13.3438 16 12.7812 15.6875 12.4688 15.125C12.1562 14.5938 12.1562 13.9375 12.4688 13.375C12.7812 12.8438 13.3438 12.5 14 12.5C14.625 12.5 15.1875 12.8438 15.5 13.375C15.8125 13.9375 15.8125 14.5938 15.5 15.125C15.1875 15.6875 14.625 16 14 16Z"
          fill="#00ADEE"
        />
      </svg>
    ),
    description: <EcommerceDescription />, // Replace with the appropriate component for E-commerce
  },
  // {
  //   title: "Marketing Law",
  //   image: "/techlogo.png",
  //   description: <MarketingLawDescription />, // Replace with the appropriate component for Marketing Law
  // },
  {
    title: "Domain Names",
    subheader: "domain",
    image: "/techlogo.png",
    svg: (
      <svg
        width="18"
        height="16"
        viewBox="0 0 18 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M9 15C9.5 15 10.25 14.5625 10.9062 13.2188C11.2188 12.5938 11.5 11.8438 11.6875 11H6.3125C6.46875 11.8438 6.75 12.5938 7.0625 13.2188C7.71875 14.5625 8.46875 15 9 15ZM6.125 10H11.8438C11.9375 9.375 12 8.71875 12 8C12 7.3125 11.9375 6.65625 11.8438 6H6.125C6.03125 6.65625 6 7.3125 6 8C6 8.71875 6.03125 9.375 6.125 10ZM6.3125 5H11.6875C11.5 4.15625 11.2188 3.4375 10.9062 2.8125C10.25 1.46875 9.5 1 9 1C8.46875 1 7.71875 1.46875 7.0625 2.8125C6.75 3.4375 6.46875 4.15625 6.3125 5ZM12.875 6C12.9375 6.65625 13 7.3125 13 8C13 8.71875 12.9375 9.375 12.875 10H15.6875C15.875 9.375 16 8.71875 16 8C16 7.3125 15.875 6.65625 15.6875 6H12.875ZM15.3125 5C14.5 3.3125 13.0312 2 11.2188 1.375C11.875 2.25 12.4062 3.53125 12.6875 5H15.3125ZM5.28125 5C5.59375 3.53125 6.09375 2.25 6.75 1.375C4.9375 2 3.46875 3.3125 2.65625 5H5.28125ZM2.28125 6C2.09375 6.65625 2 7.3125 2 8C2 8.71875 2.09375 9.375 2.28125 10H5.125C5.03125 9.375 5 8.71875 5 8C5 7.3125 5.03125 6.65625 5.125 6H2.28125ZM11.2188 14.6562C13.0312 14.0312 14.5 12.7188 15.3125 11H12.6875C12.4062 12.5 11.875 13.75 11.2188 14.6562ZM6.75 14.6562C6.09375 13.75 5.59375 12.5 5.28125 11H2.65625C3.46875 12.7188 4.9375 14.0312 6.75 14.6562ZM9 16C6.125 16 3.5 14.5 2.0625 12C0.625 9.53125 0.625 6.5 2.0625 4C3.5 1.53125 6.125 0 9 0C11.8438 0 14.4688 1.53125 15.9062 4C17.3438 6.5 17.3438 9.53125 15.9062 12C14.4688 14.5 11.8438 16 9 16Z"
          fill="#00ADEE"
        />
      </svg>
    ),
    description: <DomainNamesDescription />, // Replace with the appropriate component for Domain Names
  },
];
const AreaOfExpertise = () => {
  const t = useTranslations("Index");
  const tCard = useTranslations("Cards");

  const searchParams = useSearchParams();

  const indx = searchParams.get("index");
  const search = searchParams.get("section");
  useEffect(() => {
    if (indx && search) {
      const selectedAreaDiv = document.getElementById(`area2-${indx}`);
      if (selectedAreaDiv) {
        const offset = 100; // Adjust the offset value as needed
        const top = selectedAreaDiv.offsetTop - offset;
        window.scrollTo({
          top,
          behavior: "smooth",
        });
      }
      const data = { title: search };
      setSelectedArea(data);
    }
  }, []);

  const SECTION_NUMBER_MAP = {
    ai: 0,
    law: 1,
    contract: 2,
    copyright: 3,
    privacy: 4,
    outsourcing: 5,
    ecom: 6,
    domain: 7,
  };

  useEffect(() => {
    //check for url params
    const urlParams = new URLSearchParams(window.location.search);
    const section = urlParams.get("section");
    if (section) {
      setSelectedArea({ title: section });
      const selectedAreaDiv = document.getElementById(
        `area2-${SECTION_NUMBER_MAP[section]}`
      );
      if (selectedAreaDiv) {
        const offset = 100; // Adjust the offset value as needed
        const top = selectedAreaDiv.offsetTop - offset;
        window.scrollTo({
          top,
          behavior: "instant",
        });
      }
    }
  }, []);

  const [selectedArea, setSelectedArea] = useState({
    title: "IT Law",
    image: "/techlogo.png",
    description: <ITLawDescription />, // Replace with the appropriate component for IT Law
  });

  const [checkScroll, setCheckScroll] = useState(true);

  const handleAreaClick = (area, index) => {
    // setCheckScroll(false)
    setSelectedArea(area);
    setScrollIndex(index);
    const selectedAreaDiv = document.getElementById(`area2-${index}`);
    if (selectedAreaDiv) {
      const offset = 100;
      const top = selectedAreaDiv.offsetTop - offset;
      window.scrollTo({
        top,
        behavior: "instant",
      });
    }
  };

  const [scrollIndex, setScrollIndex] = useState(0);
  const containerRefs = useRef([]);
  const [visibleItems, setVisibleItems] = useState([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const containerId = entry.target.dataset.id;
          if (entry.isIntersecting) {
            setVisibleItems((prev) => [...new Set([...prev, containerId])]);
          } else {
            setVisibleItems((prev) => prev.filter((id) => id !== containerId));
          }
        });
      },
      {
        root: null,
        rootMargin: "0px 0px -50% 0px",
        threshold: 1, // Adjust as needed
      }
    );

    containerRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    const cleanUpRefs = containerRefs.current.forEach((ref) => {
      return ref;
    });

    return () => {
      if (cleanUpRefs) {
        cleanUpRefs.forEach((ref) => {
          if (ref) observer.unobserve(ref);
        });
      }
    };
  }, []);

  useEffect(() => {
    if (checkScroll) {
      if (visibleItems[0]?.split("-")[1]) {
        setScrollIndex(Number(visibleItems[0]?.split("-")[1]));
      }
    }
  }, [visibleItems, checkScroll]);

  useEffect(() => {
    const onScroll = () => {
      // if (!checkScroll) {
      window.requestAnimationFrame(() => {
        // setCheckScroll(true);
      });
      // Wait until scrolling is finished
      // }
    };

    const contentContainer = document.querySelector(".Area_gridContent__66ewb");

    contentContainer.addEventListener("scroll", onScroll);

    return () => {
      contentContainer.removeEventListener("scroll", onScroll);
    };
  }, [checkScroll]);

  return (
    <>
      <ExpertiseMobile
        mainPageTitle={"Areas of Expertise"}
        data={areasOfExpertise}
        translate={"Index"}
      ></ExpertiseMobile>
      <div className={"md:!flex !hidden gap-x-10 pl-4"}>
        <div className="flex-1 w-full pb-96 pt-[6.5rem] relative border-r">
          <div className={styles.gridList}>
            <div
              style={{
                display: "flex",
                columnGap: "16px",
                marginBottom: "12px",
                alignItems: "center",
              }}
            >
              <svg
                width="28"
                height="28"
                viewBox="0 0 28 28"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g filter="url(#filter0_b_265_2165)">
                  <path
                    d="M13.9992 28C10.1395 28 6.63993 26.4301 4.10493 23.8951C1.56993 21.3601 0 17.86 0 14.0003C0 10.1405 1.56993 6.64043 4.10493 4.10544C6.63942 1.57044 10.1395 0 13.9992 0C17.859 0 21.3591 1.56993 23.8946 4.10493C26.4296 6.63993 28 10.14 28 13.9997C28 17.8595 26.4301 21.3596 23.8946 23.8946C21.3596 26.4296 17.8595 27.9995 13.9992 27.9995V28ZM13.9992 1.28238C10.4931 1.28238 7.31341 2.70854 5.01097 5.01148C2.70803 7.31441 1.28188 10.4941 1.28188 14.0003C1.28188 17.5064 2.70803 20.6861 5.01097 22.989C7.31391 25.292 10.4931 26.7181 13.9992 26.7181C17.5054 26.7181 20.6856 25.292 22.988 22.989C25.291 20.6861 26.7176 17.5069 26.7176 14.0003C26.7176 10.4936 25.291 7.31441 22.988 5.01148C20.6851 2.70854 17.5054 1.28238 13.9992 1.28238Z"
                    fill="#00ADEE"
                  />
                  <path
                    d="M14.0007 27.148C17.6254 27.148 20.912 25.6739 23.2927 23.2937C25.6733 20.9131 27.1474 17.627 27.1474 14.0018C27.1474 10.3766 25.6733 7.08944 23.2927 4.70881C20.912 2.32768 17.6254 0.853088 14.0007 0.853088C10.376 0.853088 7.08936 2.32768 4.70873 4.70881C2.3281 7.08994 0.853516 10.3771 0.853516 14.0018C0.853516 17.6264 2.3281 20.9131 4.70873 23.2937C7.08936 25.6739 10.3765 27.148 14.0007 27.148ZM16.4499 18.8755C16.3299 18.8755 16.2214 18.8266 16.1427 18.7474C16.064 18.6682 16.0151 18.5597 16.0151 18.4397V15.5349C16.0151 15.1757 15.8688 14.8498 15.6327 14.6137C15.3966 14.3776 15.0707 14.2313 14.711 14.2313H2.37754C2.37653 14.193 2.37603 14.1546 2.37502 14.1163C2.37451 14.078 2.37401 14.0396 2.37401 14.0018C2.37401 13.6083 2.39368 13.2193 2.43202 12.8359C2.47036 12.4525 2.52737 12.0747 2.60203 11.7029H7.25987C7.61956 11.7029 7.94596 11.5571 8.18205 11.321C8.41815 11.0854 8.56445 10.7595 8.56445 10.3998V8.60488C8.87773 8.51055 9.14964 8.31834 9.34286 8.06358C9.53607 7.80882 9.6516 7.491 9.6516 7.14644C9.6516 6.72672 9.48108 6.34685 9.20513 6.0714C8.92969 5.79596 8.54931 5.62544 8.12959 5.62544C7.70986 5.62544 7.32949 5.79596 7.05404 6.0714C6.7786 6.34685 6.60809 6.72722 6.60809 7.14644C6.60809 7.491 6.72311 7.80831 6.91632 8.06358C7.10954 8.31834 7.38095 8.51055 7.69423 8.60488V10.3998C7.69423 10.5194 7.6458 10.6283 7.5671 10.7065C7.4884 10.7847 7.37994 10.8337 7.26038 10.8337H2.8124C3.36733 8.86822 4.42572 7.11466 5.83977 5.72129C7.25382 4.32742 9.02352 3.29324 11.0006 2.76607V6.27773C11.0006 6.63742 11.1469 6.96332 11.383 7.19891C11.6191 7.435 11.945 7.5813 12.3041 7.5813H17.9033C17.9967 7.89458 18.1889 8.16649 18.4441 8.35971C18.6989 8.55292 19.0167 8.66845 19.3603 8.66845C19.7805 8.66845 20.1604 8.49794 20.4358 8.22199C20.7112 7.94654 20.8813 7.56566 20.8813 7.14644C20.8813 6.72722 20.7112 6.34685 20.4358 6.0714C20.1604 5.79596 19.7805 5.62544 19.3603 5.62544C19.0162 5.62544 18.6989 5.74046 18.4441 5.93368C18.1894 6.12689 17.9972 6.39881 17.9033 6.71259H12.3041C12.1846 6.71259 12.0756 6.66366 11.9964 6.58445C11.9172 6.50576 11.8683 6.39679 11.8683 6.27723V2.57083C12.2148 2.50676 12.5655 2.45733 12.9211 2.42403C13.2768 2.39074 13.6365 2.37358 14.0002 2.37358C15.6377 2.37358 17.1966 2.71209 18.6101 3.32351C20.0236 3.93494 21.2914 4.81878 22.3478 5.90997L23.2175 6.9159C23.8032 7.67665 24.2976 8.51257 24.6825 9.407C25.0674 10.3009 25.3434 11.2534 25.4937 12.2472L25.5926 13.1179C25.6037 13.2632 25.6122 13.4095 25.6178 13.5573C25.6233 13.7046 25.6264 13.853 25.6264 14.0028C25.6264 14.2631 25.6178 14.5219 25.6006 14.7787C25.5835 15.0355 25.5583 15.2907 25.5245 15.5435H19.9772C19.8567 15.5435 19.7477 15.4945 19.669 15.4153C19.5903 15.3361 19.5419 15.2272 19.5419 15.1066V12.1367C19.5419 11.777 19.3956 11.4516 19.16 11.2156C18.9239 10.98 18.5985 10.8337 18.2393 10.8337H12.8929C12.7995 10.5194 12.6073 10.2475 12.3521 10.0542C12.0973 9.86103 11.7795 9.74652 11.4354 9.74652C11.0162 9.74652 10.6363 9.91753 10.3609 10.193C10.0854 10.4684 9.91493 10.8488 9.91493 11.2675C9.91493 11.6862 10.0854 12.0676 10.3609 12.3436C10.6363 12.6195 11.0162 12.79 11.4354 12.79C11.7795 12.79 12.0973 12.6745 12.3521 12.4813C12.6073 12.2876 12.7995 12.0157 12.8929 11.7024H18.2393C18.3589 11.7024 18.4678 11.7513 18.546 11.83C18.6242 11.9087 18.6732 12.0172 18.6732 12.1362V15.1061C18.6732 15.4658 18.8195 15.7922 19.0556 16.0288C19.2917 16.2649 19.618 16.4117 19.9777 16.4117H25.3767C25.2853 16.842 25.1708 17.2632 25.0336 17.6739C24.8969 18.085 24.738 18.4856 24.5579 18.8755H16.4499ZM11.4349 11.9198C11.2558 11.9198 11.0929 11.8467 10.9748 11.7286C10.8568 11.6106 10.7836 11.4476 10.7836 11.2675C10.7836 11.0874 10.8568 10.925 10.9748 10.8069C11.0929 10.6889 11.2558 10.6157 11.4349 10.6157C11.614 10.6157 11.778 10.6889 11.896 10.8069C12.0141 10.925 12.0872 11.0879 12.0872 11.2675C12.0872 11.4471 12.0141 11.6106 11.896 11.7286C11.778 11.8467 11.615 11.9198 11.4349 11.9198ZM19.3603 6.49365C19.5404 6.49365 19.7028 6.56781 19.8208 6.68636C19.9389 6.80491 20.0115 6.96836 20.0115 7.14695C20.0115 7.32553 19.9389 7.48999 19.8208 7.60804C19.7028 7.72609 19.5404 7.79924 19.3603 7.79924C19.1802 7.79924 19.0182 7.72609 18.8997 7.60804C18.7816 7.48999 18.708 7.32704 18.708 7.14695C18.708 6.96685 18.7816 6.80491 18.8997 6.68636C19.0177 6.56781 19.1812 6.49365 19.3603 6.49365ZM7.4778 7.14644C7.4778 6.96786 7.55095 6.80441 7.669 6.68585C7.78705 6.5673 7.95 6.49314 8.12959 6.49314C8.30918 6.49314 8.47263 6.5673 8.59068 6.68585C8.70873 6.80441 8.78188 6.96786 8.78188 7.14644C8.78188 7.32503 8.70873 7.48949 8.59068 7.60753C8.47263 7.72558 8.30969 7.79873 8.12959 7.79873C7.94949 7.79873 7.78705 7.72558 7.669 7.60753C7.55095 7.48949 7.4778 7.32654 7.4778 7.14644ZM15.1943 25.5669C14.998 25.5866 14.7998 25.6017 14.601 25.6118C14.4018 25.6219 14.202 25.627 14.0007 25.627C13.7994 25.627 13.5875 25.6209 13.3832 25.6103C13.1789 25.5997 12.9761 25.5836 12.7753 25.5634V18.8755C12.7753 18.5158 12.629 18.1889 12.3929 17.9523C12.1568 17.7157 11.8304 17.5694 11.4707 17.5694H8.91203C8.8187 17.2567 8.6265 16.9858 8.37174 16.7926C8.11698 16.5993 7.79966 16.4848 7.45611 16.4848C7.03588 16.4848 6.65551 16.6553 6.38006 16.9308C6.10462 17.2062 5.9341 17.5866 5.9341 18.0058C5.9341 18.425 6.10462 18.8054 6.38006 19.0814C6.65551 19.3573 7.03588 19.5283 7.45611 19.5283C7.80017 19.5283 8.11698 19.4128 8.37174 19.2196C8.6265 19.0259 8.8182 18.754 8.91203 18.4402H11.4707C11.5908 18.4402 11.6998 18.4886 11.778 18.5673C11.8562 18.646 11.9046 18.755 11.9046 18.8755V25.4383C11.4813 25.3611 11.0662 25.2612 10.6606 25.1396C10.255 25.0181 9.85843 24.8753 9.4715 24.7118L8.60279 24.2992C7.95201 23.9571 7.33756 23.5566 6.767 23.1026C6.19643 22.649 5.66925 22.143 5.19303 21.5911L4.5251 20.7204C4.5251 20.7204 4.52106 20.7204 4.51905 20.7204C4.51703 20.7204 4.51552 20.7204 4.51249 20.7204C3.93839 19.9127 3.4657 19.0274 3.11206 18.0845C2.75842 17.1411 2.52384 16.1398 2.42547 15.099H14.71C14.8301 15.099 14.939 15.1474 15.0172 15.2261C15.0954 15.3048 15.1438 15.4133 15.1438 15.5339V18.4387C15.1438 18.7978 15.2906 19.1237 15.5272 19.3598C15.7638 19.5959 16.0897 19.7422 16.4484 19.7422H24.1089C23.8607 20.1791 23.5842 20.5978 23.2831 20.9974C22.9819 21.3964 22.655 21.7758 22.3054 22.1334L21.356 23.0022C20.6063 23.6156 19.779 24.1372 18.8911 24.5504C18.0032 24.9631 17.0548 25.2673 16.0625 25.4443L15.1928 25.5664L15.1943 25.5669ZM7.45611 18.6581C7.27601 18.6581 7.11307 18.5845 6.99452 18.4664C6.87647 18.3479 6.80281 18.1849 6.80281 18.0058C6.80281 17.8267 6.87596 17.6633 6.99452 17.5457C7.11256 17.4282 7.27601 17.355 7.45611 17.355C7.63621 17.355 7.79865 17.4277 7.9162 17.5457C8.03424 17.6633 8.10739 17.8257 8.10739 18.0058C8.10739 18.1859 8.03424 18.3479 7.9162 18.4664C7.79815 18.5845 7.6352 18.6581 7.45611 18.6581Z"
                    fill="#00ADEE"
                  />
                </g>
                <defs>
                  <filter
                    id="filter0_b_265_2165"
                    x="-4"
                    y="-4"
                    width="36"
                    height="36"
                    filterUnits="userSpaceOnUse"
                    colorInterpolationFilters="sRGB"
                  >
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feGaussianBlur in="BackgroundImageFix" stdDeviation="2" />
                    <feComposite
                      in2="SourceAlpha"
                      operator="in"
                      result="effect1_backgroundBlur_265_2165"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_backgroundBlur_265_2165"
                      result="shape"
                    />
                  </filter>
                </defs>
              </svg>

              <h2
                style={{
                  fontWeight: 700,
                  fontSize: 18,
                }}
              >
                {t("expertiseTitleShort")}
              </h2>
            </div>
            <div
              style={{
                padding: "0 14px",
              }}
            >
              <ul
                style={{
                  position: "relative",
                  height: "100%",
                  overflowY: "scroll",
                  maxHeight: "70dvh",
                  display: "flex",
                  flexDirection: "column",
                  rowGap: "16px",
                  width: "250px",
                }}
              >
                <div
                  style={{
                    height: "100%",
                    backgroundColor: "#D9D9D9",
                    width: "1px",
                    position: "absolute",
                  }}
                >
                  <div
                    style={{
                      height: "39.4px",
                      transition: "transform 0.3s ease-in-out",
                      transform: `translateY(calc(56px * ${scrollIndex}))`,
                      width: "1px",
                      backgroundColor: "#01acef",
                    }}
                  ></div>
                </div>
                {areasOfExpertise.map((area, index) => (
                  <li
                    key={index}
                    onClick={() => handleAreaClick(area, index)}
                    className={
                      index === scrollIndex
                        ? styles.active
                        : `
                    `
                    }
                  >
                    <div className={styles.row}>
                      {/* <img src={area.image} alt="" /> */}
                      {area.svg}
                      <span>{t(area.title)}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className={styles.gridContent}>
          {areasOfExpertise.map((val, index) => (
            <div
              className="watch border-b"
              style={{
                padding: "40px 0",
              }}
              key={index}
              id={`area2-${index}`}
            >
              <h2
                data-id={`container-${index}`}
                ref={(el) => (containerRefs.current[index] = el)}
                style={{
                  fontSize: 28,
                  fontWeight: 700,
                  color: "#00ADEE",
                }}
              >
                {t(val.title)}
              </h2>{" "}
              <br />
              <h3
                style={{
                  fontSize: "20px",
                  padding: "0 16px 24px 0",
                  fontWeight: 400,
                  //styleName: Subheading;
                  fontWeight: 700,
                  color: "#1D1D1D",
                  lineHeight: "30.8px",
                  textAlign: "left",
                  textUnderlinePosition: "from-font",
                  textDecorationSkipInk: "none",
                }}
              >
                {tCard(val.subheader)}
              </h3>
              {val.description}
            </div>
          ))}
        </div>
      </div>
      {/* <div className={`${styles.mobileContainer} md:!hidden`}>
        <Faq />
      </div> */}
    </>
  );
};

export default AreaOfExpertise;
