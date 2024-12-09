"use client";
import React from "react";
import "./References.css";
import { useTranslations } from "next-intl";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { ChevronLeft, ChevronRight } from "lucide-react";

const References = () => {
  const t = useTranslations("Index");
  const settings = {
    dots: true,
    infinite: true,
    autoPlay: false,
    adaptiveHeight: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    // prevArrow: <SamplePrevArrow />,
    // nextArrow: <SampleNextArrow />,
    // appendDots: (dots) => (
    //   <div
    //     style={{
    //       borderRadius: "10px",
    //       padding: "10px",
    //     }}
    //   >
    //     <ul className="flex gap-x-3"> {dots} </ul>
    //   </div>
    // ),
    // customPaging: (i) => (
    //   <div
    //     className="paging-dots"
    //     style={{
    //       width: "12px",
    //       height: "12px",
    //       borderRadius: "50%",
    //     }}
    //   ></div>
    // ),
    // dotsClass:
    //   "!relative !w-full !flex !justify-center !rounded-none dots-class",
  };

  const [api, setApi] = React.useState();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  const handleClick = (index) => {
    api.scrollTo(index);
  };

  return (
    <div className={"flex flex-col relative items-center px-4 w-full"}>
      <div className="absolute h-full bg-gray-100 !max-w-none !w-screen tech-background"></div>
      <div className="flex w-full justify-start pt-14">
        <h1 className="text-[40px] text-black z-50 font-bold px-6">
          {t("references_header")}
        </h1>
      </div>
      {/* <div className="flex w-full"> */}
      {/* <div>test</div> */}
      <Carousel
        opts={{ loop: true }}
        setApi={setApi}
        className="max-w-[18rem] sm:max-w-6xl sm:px-24 sm:py-8 pt-10"
      >
        <CarouselContent className="w-full -ml-1">
          <CarouselSlide
            body={t("quote2")}
            author={t("author2")}
            position={t("position2")}
          />
          <CarouselSlide
            body={t("quote1")}
            author={t("author1")}
            position={t("position1")}
          />
          <CarouselSlide
            body={t("quote3")}
            author={t("author3")}
            position={t("position3")}
          />
          <CarouselSlide
            body={t("quote4")}
            author={t("author4")}
            position={t("position4")}
          />
          <CarouselSlide
            body={t("quote5")}
            author={t("author5")}
            position={t("position5")}
          />
          <CarouselSlide
            body={t("quote6")}
            author={t("author6")}
            position={t("position6")}
          />
          <CarouselSlide
            body={t("quote7")}
            author={t("author7")}
            position={t("position7")}
          />
          <CarouselSlide
            body={t("quote8")}
            author={t("author8")}
            position={t("position8")}
          />
          <CarouselSlide
            body="I've sought Malin's advice on new initiatives in Nordic and European countries. She's pragmatic, fast and has excellent judgment when it comes to technology agreements and intellectual property. I highly recommend her."
            author="Brian Kennan"
            position="Director, Executive Development, Amazon.com, Inc."
          />
        </CarouselContent>
        <SamplePrevArrow
          onClick={() => handleClick(api.selectedScrollSnap() - 1)}
        />
        <SampleNextArrow
          onClick={() => handleClick(api.selectedScrollSnap() + 1)}
        />
      </Carousel>
      {/* <div className="py-2 text-center text-sm text-muted-foreground z-50">
        Slide {current} of {count}
      </div> */}
      <div className="flex justify-center gap-2 py-2 z-50 pb-8">
        {Array.from({ length: count }).map((_, i) => (
          <button
            key={i}
            className={`w-2 h-2 rounded-full ${
              i !== current - 1 ? "bg-[#d1f1ff]" : "bg-[#00adee]"
            }`}
          />
        ))}
      </div>
      {/* <div>test</div> */}
      {/* </div> */}
    </div>
  );
};

export default References;

function CarouselSlide({ body, author, position, className }) {
  return (
    <CarouselItem className="">
      <div className="flex flex-col sm:justify-end h-full gap-y-11 w-full pl-1 p-2 sm:px-10 items-center">
        {/* <div className="filler"></div> */}
        <div
          className={
            "flex flex-col gap-y-2 bg-white w-full rounded-[50px] shadow-lg p-10 sm:p-14 relative slide-class"
            // "relative"
          }
        >
          <div className="absolute -bottom-[22px] drop-shadow left-1/2 -translate-x-1/2 speech-tail">
            <svg
              stroke="transparent"
              width="40"
              height="23"
              viewBox="0 0 40 23"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M-3.8147e-06 22.5C-3.8147e-06 22.5 6.83167 17.9858 8.62745 11.5001C9.73818 7.48848 7.84316 2.85722 5.8685 0.500001L40 0.500004C35.2941 16.2143 -3.8147e-06 22.5 -3.8147e-06 22.5Z"
                fill="white"
              />
            </svg>
          </div>

          <div className="flex flex-col gap-y-3">
            <svg
              width="29"
              height="21"
              viewBox="0 0 29 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6.47956 21C4.53043 21 2.95005 20.3333 1.73842 19C0.579473 17.6154 0 15.8205 0 13.6154C0 10.7436 0.86921 8.07692 2.60763 5.61538C4.34605 3.10256 6.5059 1.23077 9.08719 0L9.56131 0.923074C8.45504 1.74359 7.48047 2.79487 6.6376 4.07692C5.79473 5.35897 5.18892 6.94872 4.82016 8.84615L6.47956 9.23077C8.32334 9.64103 9.74569 10.4103 10.7466 11.5385C11.8002 12.6154 12.327 13.9231 12.327 15.4615C12.327 17.1026 11.7475 18.4359 10.5886 19.4615C9.48229 20.4872 8.11263 21 6.47956 21ZM23.1526 21C21.2035 21 19.6231 20.3333 18.4114 19C17.2525 17.6154 16.673 15.8205 16.673 13.6154C16.673 10.7436 17.5422 8.07692 19.2807 5.61538C21.0191 3.10256 23.1789 1.23077 25.7602 0L26.2343 0.923074C25.1281 1.74359 24.1535 2.79487 23.3106 4.07692C22.4678 5.35897 21.8619 6.94872 21.4932 8.84615L23.1526 9.23077C24.9964 9.64103 26.4187 10.4103 27.4196 11.5385C28.4732 12.6154 29 13.9231 29 15.4615C29 17.1026 28.4205 18.4359 27.2616 19.4615C26.1553 20.4872 24.7857 21 23.1526 21Z"
                fill="#00ADEE"
              />
            </svg>

            <p>{body}</p>
          </div>
        </div>
        {/* <div className="filler2"></div> */}

        <div className="flex flex-col items-center gap-y-2 title-class text-center">
          <h6 className="text-lg font-semibold">{author}</h6>
          <span>{position}</span>
        </div>
      </div>
    </CarouselItem>
  );
}

function SamplePrevArrow({ onClick }) {
  return (
    <div
      className={`!flex !left-0 top-[97%] !basis-1/12 sm:top-1/2 sm:-translate-y-1/2 left-arrow-class absolute`}
      onClick={onClick}
    >
      <svg
        width="60"
        height="60"
        viewBox="0 0 60 60"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          cx="48.6287"
          cy="29.9999"
          r="2.05645"
          transform="rotate(-180 48.6287 29.9999)"
          fill="#00ADEE"
          stroke="#00ADEE"
          stroke-width="0.725806"
        />
        <circle
          cx="42.4178"
          cy="29.9999"
          r="2.05645"
          transform="rotate(-180 42.4178 29.9999)"
          fill="#00ADEE"
          stroke="#00ADEE"
          stroke-width="0.725806"
        />
        <circle
          cx="36.2108"
          cy="29.9999"
          r="2.05645"
          transform="rotate(-180 36.2108 29.9999)"
          fill="#00ADEE"
          stroke="#00ADEE"
          stroke-width="0.725806"
        />
        <circle
          cx="29.9998"
          cy="29.9999"
          r="2.05645"
          transform="rotate(-180 29.9998 29.9999)"
          fill="#00ADEE"
          stroke="#00ADEE"
          stroke-width="0.725806"
        />
        <circle
          cx="23.7928"
          cy="42.4194"
          r="2.05645"
          transform="rotate(-180 23.7928 42.4194)"
          fill="#00ADEE"
          stroke="#00ADEE"
          stroke-width="0.725806"
        />
        <circle
          cx="23.7928"
          cy="29.9999"
          r="2.05645"
          transform="rotate(-180 23.7928 29.9999)"
          fill="#00ADEE"
          stroke="#00ADEE"
          stroke-width="0.725806"
        />
        <circle
          cx="23.7928"
          cy="17.5806"
          r="2.05645"
          transform="rotate(-180 23.7928 17.5806)"
          fill="#00ADEE"
          stroke="#00ADEE"
          stroke-width="0.725806"
        />
        <circle
          cx="17.5818"
          cy="36.2096"
          r="2.05645"
          transform="rotate(-180 17.5818 36.2096)"
          fill="#00ADEE"
          stroke="#00ADEE"
          stroke-width="0.725806"
        />
        <circle
          cx="17.5818"
          cy="29.9999"
          r="2.05645"
          transform="rotate(-180 17.5818 29.9999)"
          fill="#00ADEE"
          stroke="#00ADEE"
          stroke-width="0.725806"
        />
        <circle
          cx="17.5818"
          cy="23.7903"
          r="2.05645"
          transform="rotate(-180 17.5818 23.7903)"
          fill="#00ADEE"
          stroke="#00ADEE"
          stroke-width="0.725806"
        />
        <circle
          cx="11.3709"
          cy="29.9999"
          r="2.05645"
          transform="rotate(-180 11.3709 29.9999)"
          fill="#00ADEE"
          stroke="#00ADEE"
          stroke-width="0.725806"
        />
      </svg>
    </div>
  );
}

function SampleNextArrow({ onClick }) {
  return (
    <div
      className={`!flex !right-0 top-[97%] sm:top-1/2 sm:-translate-y-1/2 !basis-1/12 !justify-end right-arrow-class absolute`}
      onClick={onClick}
    >
      <svg
        width="60"
        height="60"
        viewBox="0 0 60 60"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          cx="11.3713"
          cy="30.0001"
          r="2.05645"
          fill="#00ADEE"
          stroke="#00ADEE"
          stroke-width="0.725806"
        />
        <circle
          cx="17.5822"
          cy="30.0001"
          r="2.05645"
          fill="#00ADEE"
          stroke="#00ADEE"
          stroke-width="0.725806"
        />
        <circle
          cx="23.7893"
          cy="30.0001"
          r="2.05645"
          fill="#00ADEE"
          stroke="#00ADEE"
          stroke-width="0.725806"
        />
        <circle
          cx="30.0002"
          cy="30.0001"
          r="2.05645"
          fill="#00ADEE"
          stroke="#00ADEE"
          stroke-width="0.725806"
        />
        <circle
          cx="36.2072"
          cy="17.5806"
          r="2.05645"
          fill="#00ADEE"
          stroke="#00ADEE"
          stroke-width="0.725806"
        />
        <circle
          cx="36.2072"
          cy="30.0001"
          r="2.05645"
          fill="#00ADEE"
          stroke="#00ADEE"
          stroke-width="0.725806"
        />
        <circle
          cx="36.2072"
          cy="42.4194"
          r="2.05645"
          fill="#00ADEE"
          stroke="#00ADEE"
          stroke-width="0.725806"
        />
        <circle
          cx="42.4182"
          cy="23.7903"
          r="2.05645"
          fill="#00ADEE"
          stroke="#00ADEE"
          stroke-width="0.725806"
        />
        <circle
          cx="42.4182"
          cy="30.0001"
          r="2.05645"
          fill="#00ADEE"
          stroke="#00ADEE"
          stroke-width="0.725806"
        />
        <circle
          cx="42.4182"
          cy="36.2097"
          r="2.05645"
          fill="#00ADEE"
          stroke="#00ADEE"
          stroke-width="0.725806"
        />
        <circle
          cx="48.6291"
          cy="30.0001"
          r="2.05645"
          fill="#00ADEE"
          stroke="#00ADEE"
          stroke-width="0.725806"
        />
      </svg>
    </div>
  );
}
