"use client";
import { useTranslations } from "next-intl";
import Link from "next/link";
import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  const t = useTranslations("Index");
  return (
    <footer className={"relative w-full flex justify-center"}>
      <div className="absolute h-full bg-gray-100 !max-w-none !w-screen"></div>

      <div className={"px-4 z-10 w-full pt-16"}>
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
          <div className="flex flex-col md:flex-row md:gap-x-16 pt-8 lg:pt-0 gap-y-8">
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
          <div className={"w-full flex justify-center pt-16 items-end"}>
            {/* <Image
              className="w-full"
              width={1000}
              height={1000}
              src="/logo2.png"
              alt=""
            /> */}
            <svg
              width="1082"
              viewBox="0 0 1082 178"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_1087_785)">
                <path
                  d="M63.0793 169.779C27.0886 169.779 0.976562 143.416 0.976562 107.102C0.976562 70.7879 27.6784 44.2185 63.0793 44.2185C82.2762 44.2185 98.8635 50.8425 109.774 62.8539C120.832 75.042 125.61 92.3231 123.59 112.828L123.059 118.186H25.0539C29.6688 138.146 46.8311 147.155 63.0645 147.155C77.3074 147.155 91.7273 141.237 98.1263 132.773L101.812 127.886L118.975 141.576L115.451 146.198C104.363 160.726 84.2815 169.764 63.0645 169.764L63.0793 169.779ZM25.0686 96.6949H101.473C99.0552 77.1911 85.343 66.1511 63.0793 66.1511C43.9118 66.1511 29.3002 78.1773 25.0686 96.6949Z"
                  fill="#1D1D1D"
                />
                <path
                  d="M468.251 168.66H445.383V96.6066C445.383 78.5306 433.573 66.3719 415.998 66.3719C398.423 66.3719 386.377 79.0752 386.377 97.269V168.646H363.508V97.269C363.508 79.2077 351.33 66.5927 333.902 66.5927C316.474 66.5927 304.517 78.928 304.517 97.269V168.646H281.648V46.4559H303.78L303.868 54.3458C311.918 47.7807 322.343 44.2185 334.123 44.2185C352.096 44.2185 366.767 51.5637 375.304 64.37C384.298 51.8434 399.219 44.2185 415.998 44.2185C446.268 44.2185 468.251 66.2542 468.251 96.6213V168.675V168.66Z"
                  fill="#1D1D1D"
                />
                <path
                  d="M543.255 170C507.854 170 481.152 142.96 481.152 107.102C481.152 71.2443 507.854 44.6602 543.255 44.6602C558.545 44.6602 572.301 49.8121 582.489 58.9532V45.9997H605.372V168.204H582.489V155.251C571.918 164.848 558.427 170 543.255 170ZM543.255 67.0491C520.519 67.0491 504.021 83.8887 504.021 107.102C504.021 130.315 520.519 147.39 543.255 147.39C555.758 147.39 566.182 143.092 573.407 134.981C579.865 127.71 583.433 117.847 583.433 107.22C583.433 87.8777 570.856 67.0491 543.255 67.0491Z"
                  fill="#1D1D1D"
                />
                <path
                  d="M646.052 168.219H623.184V45.9996H645.256L645.285 47.133L645.315 48.2665L645.344 49.3999L645.374 50.5333L645.403 51.6668L645.433 52.8002L645.462 53.9336L645.492 55.0671C646.494 54.2575 647.541 53.4773 648.632 52.756C649.723 52.0348 650.859 51.3576 652.023 50.7247C653.188 50.0917 654.397 49.5177 655.636 48.9877C656.874 48.4578 658.157 47.9721 659.469 47.5452C660.781 47.1183 662.123 46.7356 663.494 46.4118C664.866 46.0879 666.266 45.8082 667.696 45.5874C669.127 45.3666 670.586 45.2047 672.075 45.087C673.55 44.9692 675.069 44.925 676.587 44.925C676.631 44.925 676.676 44.925 676.735 44.925C676.794 44.925 676.838 44.925 676.897 44.925C676.956 44.925 677.015 44.925 677.074 44.925C677.133 44.925 677.192 44.925 677.251 44.925C677.31 44.925 677.383 44.925 677.442 44.925C677.501 44.925 677.575 44.925 677.634 44.925C677.693 44.925 677.767 44.925 677.826 44.925H678.017C678.504 44.925 678.976 44.925 679.433 44.9398C679.89 44.9398 680.347 44.9692 680.775 44.9839C681.202 44.9986 681.615 45.0134 682.013 45.0428C682.396 45.0575 682.765 45.087 683.089 45.1017C683.429 45.1311 683.738 45.1458 684.004 45.1606C684.284 45.1753 684.52 45.2047 684.711 45.2194C684.903 45.2342 685.065 45.2489 685.183 45.2636C685.301 45.2636 685.36 45.2783 685.375 45.2783L685.861 45.3372L686.348 45.3814L686.834 45.4402L687.321 45.4991V50.7541V56.0091V61.1611V66.3278H682.175L679.566 66.4308L675.909 66.7399C673.461 67.0638 671.265 67.4759 669.274 67.9911C667.284 68.5063 665.485 69.1245 663.819 69.8753C662.153 70.626 660.619 71.5092 659.16 72.5543C657.7 73.5994 656.314 74.8064 654.943 76.1901C653.571 77.5738 652.333 79.1046 651.242 80.7385C650.151 82.3724 649.222 84.1241 648.455 85.9641C647.689 87.8041 647.099 89.7471 646.701 91.7637C646.288 93.7804 646.17 95.7234 646.081 98.005V168.263L646.052 168.219Z"
                  fill="#1D1D1D"
                />
                <path
                  d="M200.025 169.779C164.624 169.779 137.922 142.739 137.922 106.881C137.922 71.0235 164.624 44.4393 200.025 44.4393C215.314 44.4393 229.071 49.5913 239.244 58.7324L239.362 0H262.009L261.936 168.66H239.259V155.045C228.673 164.642 215.182 169.794 200.025 169.794V169.779ZM200.025 66.843C177.289 66.843 160.79 83.6826 160.79 106.896C160.79 130.109 177.289 147.184 200.025 147.184C212.528 147.184 222.952 142.901 230.177 134.775C236.649 127.504 240.203 117.641 240.203 107.014C240.203 87.6717 227.626 66.843 200.025 66.843Z"
                  fill="#1D1D1D"
                />
                <path
                  d="M712.742 46.6472V161.006H781.406L777.587 169.985H703.32V46.6472H712.727H712.742Z"
                  fill="#00ADEE"
                />
                <path
                  d="M900.258 170L886.841 139.692H813.99L800.749 170H790.635L845.365 46.6619H855.642L910.373 170H900.258ZM883.184 130.874L850.408 55.8176L817.646 130.874H883.184Z"
                  fill="#00ADEE"
                />
                <path
                  d="M979.245 46.6472H984.449L1021.65 159.107L1070.76 46.6472H1081.02L1026.51 169.985H1016.43L997.129 112.357L981.839 63.6929L966.55 112.004L947.087 169.985H937.002L882.832 46.6472H893.094L941.868 159.107L979.23 46.6472H979.245Z"
                  fill="#00ADEE"
                />
              </g>
              <defs>
                <clipPath id="clip0_1087_785">
                  <rect
                    width="1080.05"
                    height="178"
                    fill="white"
                    transform="translate(0.976562)"
                  />
                </clipPath>
              </defs>
            </svg>

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
