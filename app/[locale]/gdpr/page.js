"use client";
import React, { useEffect, useRef, useState } from "react";
import styles from "../../../components/Expertise/Area.module.css"; // Import the CSS module
import { useTranslations } from "next-intl";
import { useSearchParams } from "next/navigation";
import WhatGDPR from "@/components/GDPR/Sections/WhatGDPR";
import DO from "@/components/GDPR/Sections/DO";
import Information from "@/components/GDPR/Sections/Information";
import Privacy from "@/components/GDPR/Sections/Privacy";
import Deletion from "@/components/GDPR/Sections/Deletion";
import Incident from "@/components/GDPR/Sections/Incident";
import Process from "@/components/GDPR/Sections/Process";
import DataProtection from "@/components/GDPR/Sections/DataProtection";

const areasOfExpertise = [
  {
    title: "What is GDPR?",
    image: "/techlogo.png",
    description: <WhatGDPR />, // Replace with the appropriate component for IT Law
  },
  {
    title: "DO_YOU",
    image: "/techlogo.png",
    description: <DO />, // Replace with the appropriate component for Contract Law
  },
  {
    title: "Information Obligation",
    image: "/techlogo.png",
    description: <Information />, // Replace with the appropriate component for Privacy Law
  },
  {
    title: "Privacy by Design",
    image: "/techlogo.png",
    description: <Privacy />, // Replace with the appropriate component for Copyright
  },
  {
    title: "Deletion of Personal Data and Keeping a Data Register",
    image: "/techlogo.png",
    description: <Deletion />, // Replace with the appropriate component for Outsourcing
  },
  {
    title: "Incident Management",
    image: "/techlogo.png",
    description: <Incident />, // Replace with the appropriate component for Marketing Law
  },
  {
    title: "Data Processors",
    image: "/techlogo.png",
    description: <Process />, // Replace with the appropriate component for Domain Names
  },
  {
    title: "Data Protection Officer",
    image: "/techlogo.png",
    description: <DataProtection />, // Replace with the appropriate component for Trademark Law
  },
  // {
  //   title: "Design Law",
  //   image: "/techlogo.png",
  //   description: <DesignLawDescription />, // Replace with the appropriate component for Design Law
  // },
  // {
  //   title: "Telecom Law",
  //   image: "/techlogo.png",
  //   description: <TelecomLawDescription />, // Replace with the appropriate component for Telecom Law
  // },
];
const AreaOfExpertise = () => {
  const t = useTranslations("GDPR");
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

  const [checkScroll, setCheckScroll] = useState(true);

  const handleAreaClick = (area, index) => {
    // setCheckScroll(false)
    setSelectedArea(area);
    setScrollIndex(index);
    const selectedAreaDiv = document.getElementById(`area2-${index}`);
    if (selectedAreaDiv) {
      const offset = 100; // Adjust the offset value as needed
      const top = selectedAreaDiv.offsetTop - offset;
      window.scrollTo({
        top,
        behavior: "instant",
      });
    }
    // setTimeout(() => {
    //   setCheckScroll(true)
    // }, 3000)
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

  useEffect(() => {
    window.requestAnimationFrame(() => {
      // setCheckScroll(true);
    });
  });

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  return (
    <>
      {/* <ExpertiseMobile data={areasOfExpertise}></ExpertiseMobile> */}
      <div className={"md:!flex !hidden gap-x-10 pl-10"}>
        <div className="flex-1 w-full pb-96 relative">
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
                Expertis
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
                  width: "200px",
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
              className="watch"
              style={{
                padding: "28px 0",
              }}
              key={index}
              id={`area2-${index}`}
            >
              <h2
                data-id={`container-${index}`}
                ref={(el) => (containerRefs.current[index] = el)}
                style={{
                  fontSize: 40,
                  fontWeight: 700,
                  color: "#00ADEE",
                }}
              >
                {t(val.title)}
              </h2>{" "}
              <br />
              <h3
                style={{
                  fontSize: 20,
                  padding: "0 16px 24px 0",
                  fontWeight: 400,
                  //styleName: Subheading;
                  fontSize: "22px",
                  fontWeight: 700,
                  color: "#1D1D1D",
                  lineHeight: "30.8px",
                  textAlign: "left",
                  textUnderlinePosition: "from-font",
                  textDecorationSkipInk: "none",
                }}
              >
                {"Placeholder text here lorem lorem lirum larum"}
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
