// utils
import { NAV_LINKS } from "@/utils/constants";

// components
import NavLink from "./NavLink";
import ThemeSwitch from "./ThemeSwitch";
import UserProfile from "./UserProfile";

export default function AuthenticatedNav({ image }: AuthenticatedNavProps) {
  return (
    <div className="flex items-center space-x-4">
      <div className="hidden md:flex items-center space-x-4 ml-8">
        {NAV_LINKS.map((link) => (
          <NavLink
            key={link.href}
            linkPath={link.href}
            matchPath={link.matchPath}
            text={link.text}
            icon={link.icon}
          />
        ))}
        <span className="h-6 border-r border-r-slate-500"></span>
      </div>
      <ThemeSwitch />
      <UserProfile image={image} />
    </div>
  );
}
