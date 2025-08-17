interface NavLinkProps {
  linkPath: string;
  matchPath: string;
  text?: string;
  icon: React.ReactNode;
  onClick?: () => void;
  isMobile?: boolean;
}

interface NavbarWrapperProps {
  children: React.ReactNode;
  setIsSideNavOpen?: Dispatch<SetStateAction<boolean>>;
}

interface AuthenticatedNavProps {
  image: string | undefined | null;
}

interface SideNavProps {
  isOpen: boolean;
  onClose: () => void;
}

interface UserProfileProps {
  image: string | null | undefined;
}
