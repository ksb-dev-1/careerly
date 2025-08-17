import { usePathname } from "next/navigation";

// components
import LinkWithProgress from "../shared/LinkWithProgress";

export default function NavLink({
  linkPath,
  matchPath,
  text,
  icon,
  onClick,
  isMobile = false,
}: NavLinkProps) {
  const path = usePathname();
  const isActive = path === matchPath;

  const baseClasses = isMobile
    ? "w-full flex items-center px-4 py-2 rounded font-semibold text-lg"
    : "relative w-8 h-8 rounded-full";

  const activeClasses =
    "text-light dark:text-dark bg-primary pointer-events-none";
  const iconClass = isMobile
    ? "mr-3"
    : "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2";

  const inactiveClasses = "hover:bg-dark dark:hover:bg-light";

  return (
    <LinkWithProgress
      href={linkPath}
      onClick={onClick}
      className={`${baseClasses} ${isActive ? activeClasses : inactiveClasses}`}
      aria-label={text}
    >
      <span className={iconClass}>{icon}</span>
      {isMobile ? (
        <span>{text}</span>
      ) : (
        <span className="sr-only">{text}</span> // 👈 ensures accessible name
      )}
    </LinkWithProgress>
  );
}
