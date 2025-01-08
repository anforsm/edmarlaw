"use client";
import React, { useRef, useState } from "react";
import "./Faq.css";
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
            <ExpandCardTerms
              title={
                <span className="regular" style={{ fontWeight: "600" }}>
                  {t("Confidentiality and Information")}
                </span>
              }
              template={
                <>
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
                </>
              }
            />
            <ExpandCardTerms
              title={
                <span className="regular" style={{ fontWeight: "600" }}>
                  {t("Personal Data")}
                </span>
              }
              template={
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
              }
            ></ExpandCardTerms>

            <ExpandCardTerms
              title={
                <span className="regular" style={{ fontWeight: "600" }}>
                  {t("Fees and Billing")}
                </span>
              }
              template={
                <div>
                  <p className="regular grey">
                    {t("feeDesc1")} <br /> <br /> {t("feeDesc2")}
                  </p>
                </div>
              }
            ></ExpandCardTerms>

            <ExpandCardTerms
              title={
                <span className="regular" style={{ fontWeight: "600" }}>
                  {t("Limitation of Liability")}
                </span>
              }
              template={
                <div>
                  <p className="regular grey">{t("limitedDesc1")}</p>
                </div>
              }
            />

            <ExpandCardTerms
              title={
                <span className="regular" style={{ fontWeight: "600" }}>
                  {t("Other Advisors")}
                </span>
              }
              template={
                <div>
                  <p className="regular grey">{t("otherDesc")}</p>
                </div>
              }
            />

            <ExpandCardTerms
              title={
                <span className="regular" style={{ fontWeight: "600" }}>
                  {t("Intellectual Property Rights")}
                </span>
              }
              template={
                <div>
                  <p className="regular grey">{t("intDesc")}</p>
                </div>
              }
            />

            <ExpandCardTerms
              title={
                <span className="regular" style={{ fontWeight: "600" }}>
                  {t("Complaints, Time Limits and Dispute Resolution")}
                </span>
              }
              template={
                <p className="regular grey">
                  {t("compDesc1")} <br /> <br /> {t("compDesc2")}
                </p>
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;

function ExpandCardTerms({ title, template }) {
  const [isOpen, setIsOpen] = useState(false);

  const cardRef = useRef(null);

  return (
    <div ref={cardRef} className="bg-white w-full py-4">
      <div
        data-open={isOpen}
        className="flex items-center justify-between cursor-pointer py-2 pb-4 data-[open=true]:bg-[rgb(1,173,239,0.15)] data-[open=false]:border-b border-[#E0E0E0]"
        onClick={() => setIsOpen((prev) => !prev)}
        role="button"
      >
        <div className="pl-[24px]">{title}</div>
        <svg
          className={`w-5 h-5 min-w-5 min-h-5 text-gray-500 mr-4 transform transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
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
      <div className="-mt-4"></div>
      <div
        className={`overflow-hidden px-[30px] py-[20px] text-[14px] bg-[#f9f9f9] transition-all duration-200 ease-in-out ${
          isOpen ? "opacity-100 mt-4" : "max-h-0 opacity-0"
        }`}
      >
        {template}
      </div>
    </div>
  );
}
