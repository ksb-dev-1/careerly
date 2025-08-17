import { forwardRef } from "react";
import { MdMenu } from "react-icons/md";
import NavTitle from "./NavTitle";

const NavbarWrapper = forwardRef<HTMLDivElement, NavbarWrapperProps>(
  ({ children, setIsSideNavOpen }, ref) => {
    return (
      <div
        ref={ref}
        className="navbar-fixed fixed top-0 left-0 right-0 z-30 bg-light dark:bg-dark border-b w-full h-16 flex items-center justify-center"
      >
        <nav className="max-w-5xl w-full mx-auto px-4 flex items-center justify-between">
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
);

NavbarWrapper.displayName = "NavbarWrapper";

export default NavbarWrapper;
