"use client";

import { useState, useRef } from "react";

// Hooks
import { useHeaderShadowOnScroll } from "@/hooks/useHeaderShadowOnScroll";

// Components
import NavbarWrapper from "./NavbarWrapper";
import NavbarLoadingState from "./NavLoadingState";
import AuthenticatedNav from "./AuthenticatedNav";
import UnauthenticatedNav from "./UnauthenticatedNav";
import SideNav from "./SideNav";

// 3rd party
import { useSession } from "next-auth/react";

export default function Navbar() {
  const [isSideNavOpen, setIsSideNavOpen] = useState(false);
  const navbarRef = useRef<HTMLDivElement>(null);
  const { data: session, status } = useSession();

  useHeaderShadowOnScroll(navbarRef);

  if (status === "loading") {
    return (
      <NavbarWrapper>
        <NavbarLoadingState />
      </NavbarWrapper>
    );
  }

  if (session?.user.id) {
    return (
      <NavbarWrapper setIsSideNavOpen={setIsSideNavOpen}>
        <AuthenticatedNav image={session.user.image} />
        <SideNav
          isOpen={isSideNavOpen}
          onClose={() => setIsSideNavOpen(false)}
        />
      </NavbarWrapper>
    );
  }

  return (
    <NavbarWrapper>
      <UnauthenticatedNav />
    </NavbarWrapper>
  );
}
