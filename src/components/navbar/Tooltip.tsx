"use client";

import { useState } from "react";

type TooltipProps = {
  text: string;
  children: React.ReactNode;
};

export default function Tooltip({ text, children }: TooltipProps) {
  const [visible, setVisible] = useState(false);

  return (
    <div
      className="relative flex items-center justify-center"
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
    >
      {children}

      <div
        className={`${
          visible
            ? "scale-100 opacity-100 pointer-events-auto"
            : "scale-75 opacity-0 pointer-events-none"
        } transition absolute top-full mt-3 px-3 py-1 text-sm bg-primary text-light dark:text-dark rounded whitespace-nowrap`}
      >
        {text}
        {/* arrow */}
        <div className="absolute bottom-full left-1/2 -translate-x-1/2 w-2 h-2 bg-primary rotate-45 mb-[-4px]"></div>
      </div>
    </div>
  );
}
