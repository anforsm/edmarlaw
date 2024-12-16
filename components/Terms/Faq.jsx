"use client";
import React, { useState } from "react";
import "./Faq.css";
import { AiOutlineMinusCircle, AiOutlinePlusCircle } from "react-icons/ai";
import { useTranslations } from "next-intl";
const Faq = () => {
  const [first, setFirst] = useState(false);
  const [second, setSecond] = useState(false);
  const [third, setThird] = useState(false);
  const [fourth, setFourth] = useState(false);
  const [fifth, setFifth] = useState(false);
  const [six, setSix] = useState(false);
  const [seventh, setSeventh] = useState(false);
  const [eigth, setEigth] = useState(false);
  const [ninth, setNinth] = useState(false);
  const t = useTranslations("Terms");
  return (
    <div className="b-faq">
      <div className={"container"}>
        <div id="faq" className="b-faq_wrapper">
          <div className="b-faq_list">
            <div
              className={`b-faq_list_item ${first && " open !max-h-none"}`}
              onClick={() => {
                setFirst(!first);
                setSecond(false);
                setThird(false);
                setFourth(false);
                setFifth(false);
                setSix(false);
                setNinth(false);
              }}
            >
              <div
                className="b-faq_list_item_header flex middle between-xs"
                role="button"
              >
                <span className="regular" style={{ fontWeight: "600" }}>
                  {t("Confidentiality and Information")}
                </span>
              </div>
              <div
                className={`b-faq_list_item_content ${
                  first ? "accordin" : "accordinback"
                }`}
              >
                <div>
                  <p className="regular grey">
                    {t("confDesc1")}
                    <br /> <br />
                    {t("confDesc2")}
                  </p>
                  <br /> <br />
                </div>
              </div>
            </div>

            <div
              className={`b-faq_list_item ${second && "open max-h-none"}`}
              onClick={() => {
                setSecond(!second);
                setFirst(false);
                setNinth(false);
                setThird(false);
                setFourth(false);
                setFifth(false);
                setSix(false);
              }}
            >
              <div
                className="b-faq_list_item_header flex middle between-xs"
                role="button"
              >
                <span className="regular" style={{ fontWeight: "600" }}>
                  {t("Personal Data")}
                </span>
              </div>
              <div
                className={`b-faq_list_item_content ${
                  second ? "accordin" : "accordinback"
                }`}
              >
                <div>
                  <p className="regular grey">
                    {t("personalDesc1")}{" "}
                    <a
                      href="https://www.advokatsamfundet.se/Advokatsamfundet-engelska/Rules-and-regulations/Code-of-Conduct/"
                      target="_blank"
                      style={{ color: "00AEEF" }}
                    >
                      {t("personalDesc2")}
                    </a>
                  </p>
                </div>
              </div>
            </div>

            <div
              className={`b-faq_list_item ${third && "open !max-h-none"}`}
              onClick={() => {
                setThird(!third);
                setSecond(false);
                setFirst(false);
                setNinth(false);
                setFourth(false);
                setFifth(false);
                setSix(false);
              }}
            >
              <div
                className="b-faq_list_item_header flex middle between-xs"
                role="button"
              >
                <span className="regular" style={{ fontWeight: "600" }}>
                  {t("Fees and Billing")}
                </span>
              </div>
              <div
                className={`b-faq_list_item_content ${
                  third ? "accordin" : "accordinback"
                }`}
              >
                <div>
                  <p className="regular grey">
                    {t("feeDesc1")} <br /> <br /> {t("feeDesc2")}
                  </p>
                </div>
              </div>
            </div>

            <div
              className={`b-faq_list_item ${fourth && "open max-h-none"}`}
              onClick={() => {
                setFourth(!fourth);
                setSecond(false);
                setThird(false);
                setFirst(false);
                setNinth(false);
                setFifth(false);
                setSix(false);
              }}
            >
              <div
                className="b-faq_list_item_header flex middle between-xs"
                role="button"
              >
                <span className="regular" style={{ fontWeight: "600" }}>
                  {t("Limitation of Liability")}
                </span>
              </div>
              <div
                className={`b-faq_list_item_content ${
                  fourth ? "accordin" : "accordinback"
                }`}
              >
                <div>
                  <p className="regular grey">{t("limitedDesc1")}</p>
                </div>
              </div>
            </div>

            <div
              className={`b-faq_list_item ${fifth && "open max-h-none"}`}
              onClick={() => {
                setFifth(!fifth);
                setSecond(false);
                setThird(false);
                setFourth(false);
                setFirst(false);
                setNinth(false);
                setSix(false);
              }}
            >
              <div
                className="b-faq_list_item_header flex middle between-xs"
                role="button"
              >
                <span className="regular" style={{ fontWeight: "600" }}>
                  {t("Other Advisors")}
                </span>
              </div>
              <div
                className={`b-faq_list_item_content ${
                  fifth ? "accordin" : "accordinback"
                }`}
              >
                <div>
                  <p className="regular grey">{t("otherDesc")}</p>
                </div>
              </div>
            </div>

            <div
              className={`b-faq_list_item ${six && "open max-h-none"}`}
              onClick={() => {
                setSix(!six);
                setSecond(false);
                setThird(false);
                setFourth(false);
                setFifth(false);
                setFirst(false);
                setNinth(false);
              }}
            >
              <div
                className="b-faq_list_item_header flex middle between-xs"
                role="button"
              >
                <span className="regular" style={{ fontWeight: "600" }}>
                  {t("Intellectual Property Rights")}
                </span>
              </div>
              <div
                className={`b-faq_list_item_content ${
                  six ? "accordinsp" : "accordinbacksp"
                }`}
              >
                <div>
                  <p className="regular grey">{t("intDesc")}</p>
                </div>
              </div>
            </div>
            <div
              className={`b-faq_list_item ${seventh && "open max-h-none"}`}
              onClick={() => {
                setSeventh(!seventh);
                setSix(false);
                setSecond(false);
                setThird(false);
                setFourth(false);
                setFifth(false);
                setFirst(false);
                setNinth(false);
              }}
            >
              <div
                className="b-faq_list_item_header flex middle between-xs"
                role="button"
              >
                <span className="regular" style={{ fontWeight: "600" }}>
                  {t("Complaints, Time Limits and Dispute Resolution")}
                </span>
              </div>
              <div
                className={`b-faq_list_item_content ${
                  seventh ? "accordinsp" : "accordinbacksp"
                }`}
              >
                <div>
                  <p className="regular grey">
                    {t("compDesc1")} <br /> <br /> {t("compDesc2")}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
