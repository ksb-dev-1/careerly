"use client";

import { usePathname } from "next/navigation";

// components
import LinkWithProgress from "@/components/shared/LinkWithProgress";
import ThemeSwitch from "@/components/navbar/ThemeSwitch";
import { SigninIcon } from "../shared/icons";

export default function UnauthenticatedNav() {
  const path = usePathname();
  const isSignin = path === "/sign-in";

  return (
    <div className="flex items-center">
      <ThemeSwitch />
      <LinkWithProgress
        href="/sign-in"
        className={`ml-4 px-3 py-1 flex items-center font-medium border hover:bg-dark dark:hover:bg-light transition-colors rounded ${
          isSignin ? "pointer-events-none" : ""
        }`}
      >
        <SigninIcon />
        <span className="ml-2">Sign in</span>
      </LinkWithProgress>
    </div>
  );
}
