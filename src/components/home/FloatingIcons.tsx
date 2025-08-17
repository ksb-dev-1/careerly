"use client";

import { useRef } from "react";

// utils
import { companyIcons } from "@/utils/constants";

// 3rd party
import { FloatingIcon } from "./FloatingIcon";

const FloatingIcons = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div
      ref={containerRef}
      className="absolute z-10 h-full w-full pointer-events-none"
      aria-hidden="true"
    >
      {companyIcons.map((Icon, index) => (
        <FloatingIcon
          key={index}
          Icon={Icon}
          containerRef={containerRef}
          size={24 + Math.floor(Math.random() * 40)}
          className="duration-300"
          speed={0.3 + Math.random() * 0.4}
        />
      ))}
    </div>
  );
};

export default FloatingIcons;
