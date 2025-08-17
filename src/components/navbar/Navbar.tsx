"use client";

import { useState } from "react";

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
  const { data: session, status } = useSession();

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
