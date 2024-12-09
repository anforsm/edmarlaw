"use client";
import React from "react";
import AreaOFExpertise from "../Home/AreaOFExpertise";
import { useTranslations } from "next-intl";
const ReferencesPage = () => {
  const t = useTranslations("Index");
  return (
    <div className="flex flex-col px-6 sm:gap-y-12 gap-y-0 pb-12">
      <h1 className="text-[60px] font-[300] leading-[76px] tracking-[2%] text-[#00ADEE] pt-14">
        Referenser
      </h1>
      <div className="py-12 border-b border-gray-200">
        <QuoteBlock
          t={t}
          author={"Brian Kennan"}
          authorPosition={"Director, Executive Development, Amazon.com, Inc."}
          size={"large"}
          body={"quote9"}
        />
      </div>
      <div className="flex sm:flex-row flex-col w-full flex-wrap sm:flex-nowrap gap-y-10 py-12 border-b gap-x-10 border-gray-200">
        <QuoteBlock
          t={t}
          author={"Mathias Strand"}
          authorPosition={"Head of Legal, Microsoft Western Europe"}
          body={"quote2"}
          authorBody={`
            Microsoft AB is a wholly owned subsidiary to Microsoft Corporation, a multi national software business based in Redmond, Washington, USA. The corporation is one of the largest in the software industry today. Microsoft develops, manufactures and licenses many software products for a number of different computer systems, and Microsoft AB ensures that adaptations and support functions as well as launches of products and services are localized for the region. Microsoft AB has 600 employees and consultants with offices in Kista.`}
        />
        <div
          id="separator"
          className="w-full my-0 sm:hidden border-b bg-gray-200"
        ></div>
        <QuoteBlock
          t={t}
          author={"Stefan Magnusson"}
          authorPosition={"Vice President, DreamHack AB"}
          body={"quote3"}
        />
      </div>
      <div className="flex w-full flex-wrap gap-y-10 py-12 border-b border-gray-200">
        <QuoteBlock
          t={t}
          author={"Adam Berg"}
          authorPosition={"Co-founding Partner, Looklet AB"}
          size={"large"}
          body={"quote1"}
        />
      </div>
      <div className="flex sm:flex-row flex-col w-full flex-wrap sm:flex-nowrap gap-y-10 py-12 border-b gap-x-10 border-gray-200">
        <QuoteBlock
          t={t}
          author={"Mattias Unosson"}
          authorPosition={"CEO, Exmet AB"}
          body={"quote4"}
        />
        <div
          id="separator"
          className="w-full my-0 sm:hidden border-b bg-gray-200"
        ></div>
        <QuoteBlock
          t={t}
          author={"Patrik Andersson"}
          authorPosition={"Product Manager, Genero Solutions AB"}
          body={"quote5"}
        />
      </div>
      <div className="flex w-full flex-wrap gap-y-10 py-12 border-b border-gray-200">
        <QuoteBlock
          t={t}
          author={"Johan Gustafsson"}
          authorPosition={"CEO, Unomaly"}
          body={"quote7"}
          size={"large"}
        />
      </div>
      <div className="flex sm:flex-row flex-col w-full flex-wrap sm:flex-nowrap gap-y-10 py-12 gap-x-10">
        <QuoteBlock
          t={t}
          author={"Anders Båth"}
          authorPosition={"Senior Vice President, eBuilder"}
          body={"quote6"}
        />
        <div
          id="separator"
          className="w-full my-0 sm:hidden border-b bg-gray-200"
        ></div>
        <QuoteBlock
          t={t}
          author={"Jakob Johansson"}
          body={"quote8"}
          authorPosition={"Sr VP eBuilder"}
        />
      </div>
      <AreaOFExpertise size={"sm"} />
    </div>
  );
};

export default ReferencesPage;

function QuoteBlock({ size, body, authorBody, author, authorPosition, t }) {
  return (
    <div
      data-size={size}
      className="flex peer flex-col gap-y-10 sm:[&>.body]:data-[size=large]:text-3xl [&>.test]:data-[size=large]:leading-[40px] text-[22px] data-[size=large]:basis-[100%] basis-1/2"
    >
      <div className="flex w-full">
        <QuoteSvg size={size} />
      </div>
      <div className="font-[700] text-[22px] leading-[32px] tracking-[1%] body test">
        {t(body)}
      </div>
      <div className="flex flex-col text-sm gap-y-2">
        <div className="font-bold">{author}</div>
        <div className="">{authorPosition}</div>
        {authorBody && <div className="text-[#4F4F4F]">{authorBody}</div>}
      </div>
    </div>
  );
}

function QuoteSvg({ size }) {
  const SIZE_MAP = {
    large: { width: 80, height: 57 },
    default: { width: 57, height: 40 },
  };

  const MOBILE_SIZE_MAP = {
    large: { width: 55, height: 39 },
    default: { width: 55, height: 39 },
  };
  return (
    <>
      <div
        className="hidden sm:flex"
        style={{
          width: SIZE_MAP[size || "default"].width,
          height: SIZE_MAP[size || "default"].height,
        }}
      >
        <svg viewBox="0 0 80 57" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M17.8747 57C12.4977 57 8.13806 55.1905 4.79564 51.5714C1.59855 47.8132 0 42.9414 0 36.956C0 29.1612 2.39782 21.9231 7.19346 15.2417C11.9891 8.42124 17.9473 3.34066 25.0681 0L26.376 2.50549C23.3242 4.7326 20.6358 7.58608 18.3106 11.0659C15.9855 14.5458 14.3143 18.8608 13.297 24.011L17.8747 25.0549C22.9609 26.1685 26.8847 28.2564 29.6458 31.3187C32.5522 34.2418 34.0055 37.7912 34.0055 41.967C34.0055 46.4212 32.4069 50.0403 29.2098 52.8242C26.158 55.6081 22.3797 57 17.8747 57ZM63.8692 57C58.4923 57 54.1326 55.1905 50.7902 51.5714C47.5931 47.8132 45.9946 42.9414 45.9946 36.956C45.9946 29.1612 48.3924 21.9231 53.188 15.2417C57.9837 8.42124 63.9419 3.34066 71.0627 0L72.3706 2.50549C69.3188 4.7326 66.6303 7.58608 64.3052 11.0659C61.98 14.5458 60.3088 18.8608 59.2916 24.011L63.8692 25.0549C68.9555 26.1685 72.8792 28.2564 75.6403 31.3187C78.5468 34.2418 80 37.7912 80 41.967C80 46.4212 78.4015 50.0403 75.2044 52.8242C72.1526 55.6081 68.3742 57 63.8692 57Z"
            fill="#00ADEE"
          />
        </svg>
      </div>
      <div
        className="flex sm:hidden"
        style={{
          width: MOBILE_SIZE_MAP[size || "default"].width,
          height: MOBILE_SIZE_MAP[size || "default"].height,
        }}
      >
        <svg viewBox="0 0 80 57" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M17.8747 57C12.4977 57 8.13806 55.1905 4.79564 51.5714C1.59855 47.8132 0 42.9414 0 36.956C0 29.1612 2.39782 21.9231 7.19346 15.2417C11.9891 8.42124 17.9473 3.34066 25.0681 0L26.376 2.50549C23.3242 4.7326 20.6358 7.58608 18.3106 11.0659C15.9855 14.5458 14.3143 18.8608 13.297 24.011L17.8747 25.0549C22.9609 26.1685 26.8847 28.2564 29.6458 31.3187C32.5522 34.2418 34.0055 37.7912 34.0055 41.967C34.0055 46.4212 32.4069 50.0403 29.2098 52.8242C26.158 55.6081 22.3797 57 17.8747 57ZM63.8692 57C58.4923 57 54.1326 55.1905 50.7902 51.5714C47.5931 47.8132 45.9946 42.9414 45.9946 36.956C45.9946 29.1612 48.3924 21.9231 53.188 15.2417C57.9837 8.42124 63.9419 3.34066 71.0627 0L72.3706 2.50549C69.3188 4.7326 66.6303 7.58608 64.3052 11.0659C61.98 14.5458 60.3088 18.8608 59.2916 24.011L63.8692 25.0549C68.9555 26.1685 72.8792 28.2564 75.6403 31.3187C78.5468 34.2418 80 37.7912 80 41.967C80 46.4212 78.4015 50.0403 75.2044 52.8242C72.1526 55.6081 68.3742 57 63.8692 57Z"
            fill="#00ADEE"
          />
        </svg>
      </div>
    </>
  );
}

{
  /*
   <div className={""}>
      <div className={""}>
        <div className={""}>
          <div className={""}>
            <h4>Adam Berg</h4>
            <span>Co-founding Partner, Looklet AB</span>
            <p>{t("first")}</p>
          </div>
          <div className={""}>
            {pathname === "/references" ? (
              <FirstRef />
            ) : (
              <img src={"/firstref.png"} alt="" />
            )}
          </div>
        </div>
        <div className={`${""} ${""}`}>
          <div className={""}>
            {pathname === "/references" ? (
              <Ref2 />
            ) : (
              <img src={"/ref2.png"} alt="" />
            )}
          </div>
          <div className={""}>
            <h4>Mathias Strand</h4>
            <span>Head of Legal, Microsoft Western Europe</span>
            <p>{t("second")}</p>
          </div>
        </div>
        <div className={""}>
          <div className={""}>
            <h4>Stefan Magnusson</h4>
            <span>Vice President, DreamHack AB</span>
            <p>{t("third")}</p>
          </div>
          <div className={""}>
            {pathname === "/references" ? (
              <Ref3 />
            ) : (
              <img src={"/ref3.png"} alt="" />
            )}
          </div>
        </div>
        <div className={`${""} ${""}`}>
          <div className={""}>
            {pathname === "/references" ? (
              <Ref4 />
            ) : (
              <img src={"/ref4.png"} alt="" />
            )}
          </div>
          <div className={""}>
            <h4>Anders Båth</h4>
            <span>Senior Vice President, eBuilder</span>
            <p>{t("eBuilder")}</p>
          </div>
        </div>
        <div className={""}>
          <div className={""}>
            <h4>Johan Gustafsson</h4>
            <span>CEO, Unomaly</span>
            <p>{t("unomly")}</p>
          </div>
          <div className={""}>
            {pathname === "/references" ? (
              <Ref5 />
            ) : (
              <img src={"/ref5.png"} alt="" />
            )}
          </div>
        </div>
        <div className={`${""} ${""}`}>
          <div className={""}>
            {pathname === "/references" ? (
              <Ref6 />
            ) : (
              <img src={"/ref6.png"} alt="" />
            )}
          </div>
          <div className={""}>
            <h4>Mattias Unosson</h4>
            <span>CEO, Exmet AB</span>
            <p>{t("exmet")}</p>
          </div>
        </div>
        <div className={""}>
          <div className={""}>
            <h4>Patrik Andersson</h4>
            <span>Product Manager, Genero Solutions AB</span>
            <p>{t("genero")}</p>
          </div>
          <div className={""}>
            {pathname === "/references" ? (
              <Ref7 />
            ) : (
              <img src={"/ref7.png"} alt="" />
            )}
          </div>
        </div>
        <div className={`${""} ${""}`}>
          <div className={""}>
            {pathname === "/references" ? (
              <Ref8 />
            ) : (
              <img src={"/ref8.png"} alt="" />
            )}
          </div>
          <div className={""}>
            <h4>Brian Kennan</h4>
            <span>Director, Executive Development, Amazon.com, Inc.</span>
          </div>
        </div>
        <div className={""}>
          <div className={""}>
            <h4>Jakob Johansson</h4>
            <span>CEO, Gleechi AB</span>
            <p>{t("gleechi")}</p>
          </div>
          <div className={""}>
            {pathname === "/references" ? (
              <Ref9 />
            ) : (
              <img src={"/ref9.png"} alt="" />
            )}
          </div>
        </div>
      </div>
    </div>*/
}
