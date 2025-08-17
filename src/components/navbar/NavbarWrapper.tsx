"use client";

import { useRef } from "react";

// hooks
import { useHeaderShadowOnScroll } from "@/hooks/useHeaderShadowOnScroll";

//components
import NavTitle from "./NavTitle";

// 3rd aprty
import { MdMenu } from "react-icons/md";

export default function NavbarWrapper({
  children,
  setIsSideNavOpen,
}: NavbarWrapperProps) {
  const navbarRef = useRef<HTMLDivElement>(null);

  useHeaderShadowOnScroll(navbarRef);

  return (
    <div
      ref={navbarRef}
      className="navbar-fixed fixed top-0 left-0 right-0 z-30 bg-light dark:bg-dark border-b w-full h-16 flex items-center justify-center"
    >
      <nav className="max-w-5xl w-full mx-auto px-6 flex items-center justify-between">
        <div className="flex items-center">
          {setIsSideNavOpen && (
            <button
              onClick={() => setIsSideNavOpen((prev: boolean) => !prev)}
              className="md:hidden border p-2 rounded mr-4 cursor-pointer hover:bg-dark dark:hover:bg-light transition-colors"
              aria-label="Open menu"
            >
              <MdMenu className="h-5 w-5" aria-hidden="true" />
            </button>
          )}

          <NavTitle />
        </div>
        {children}
      </nav>
    </div>
  );
}
