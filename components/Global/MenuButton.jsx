import React from "react";
import { motion, Transition, SVGMotionProps } from "framer-motion";

const MenuButton = ({ isOpen = false }) => {
  const variant = isOpen ? "opened" : "closed";
  return !isOpen ? (
    <svg
      width="21"
      height="18"
      viewBox="0 0 21 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0 0H21V2.25H0V0ZM0 7.5H21V9.75H0V7.5ZM21 15V17.25H0V15H21Z"
        fill="#1D1D1D"
      />
    </svg>
  ) : (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M15.1719 2.42188L9.54688 8L15.125 13.5781L15.9219 14.375L14.375 15.9688L13.5781 15.1719L8 9.59375L2.42188 15.1719L1.625 15.9688L0.03125 14.375L0.828125 13.5781L6.40625 8L0.828125 2.42188L0.03125 1.625L1.625 0.03125L2.42188 0.828125L8 6.45312L13.5781 0.875L14.375 0.078125L15.9688 1.625L15.1719 2.42188Z"
        fill="#1D1D1D"
      />
    </svg>
  );
};

export { MenuButton };
