"use client";

import { usePathname } from "next/navigation";

// components
import LinkWithProgress from "../shared/LinkWithProgress";

export default function NavTitle({ onClose }: { onClose?: () => void }) {
  const path = usePathname();
  const isHome = path === "/";

  return (
    <LinkWithProgress
      href="/"
      onClick={onClose}
      className={`${
        isHome ? "pointer-events-none" : ""
      } text-2xl font-extrabold text-primary hover:opacity-80 dark:hover:opacity-90 transition-opacity`}
    >
      Careerly
    </LinkWithProgress>
  );
}
