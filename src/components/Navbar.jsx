import { React, useState, useLayoutEffect } from "react";
import "../styles/index.css";
import Hamburger from "hamburger-react";
import { useMediaQuery } from "react-responsive";

const Navbar = (props) => {
  const [isOpen, setOpen] = useState(false);
  const isDesktopOrLaptop = useMediaQuery({ query: "(min-width: 1224px)" });
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });
  return (
    <nav>
      <div className="p-8 flex justify-between items-center">
        <h2 className="text-2xl font-semibold">Instability</h2>
        <div className="flex ">
          {isTabletOrMobile && (
            <Hamburger
              className="hamburger"
              size={20}
              direction="right"
              color={changeHamburgerColor()}
              label="Menu toggle"
              toggled={isOpen}
              toggle={setOpen}
            />
          )}

          {isDesktopOrLaptop && (
            <p className="text-xl font-medium flex justify-center">About</p>
          )}

          {/* Theme toggle */}
          <button className="theme" onClick={props.theme}>
            <ThemeToggle />
          </button>
        </div>
      </div>

      {/* hamburger menu */}
      {isOpen ? <ShowHamburgerMenu /> : <></>}
    </nav>
  );
};

function ShowHamburgerMenu() {
  useLockBodyScroll();
  return (
    <div className="hamburger-menu">
      <p className="text-xl f ont-medium flex justify-center">About</p>
    </div>
  );
}

// lock scroll of body element
function useLockBodyScroll() {
  useLayoutEffect(() => {
    // Get original body overflow
    const originalStyle = window.getComputedStyle(document.body).overflow;
    // Prevent scrolling on mount
    document.body.style.overflow = "hidden";
    // Re-enable scrolling when component unmounts
    return () => (document.body.style.overflow = originalStyle);
  }, []); // Empty array ensures effect is only run on mount and unmount
}

function changeHamburgerColor() {
  //change hamburger color according to theme
  const theme = localStorage.getItem("theme");

  if (theme === "dark") {
    return "#eceff4";
  } else if (theme === "light") {
    return "#2e3440";
  }
}

function ThemeToggle() {
  const theme = localStorage.getItem("theme");

  return (
    <div className="h-5 w-5">
      {theme === "dark" ? (
        <svg
          viewBox="0 0 22 22"
          transform="translate(0, 0) translate(-12, -12) scale(1, 1) translate(12, 12) rotate(0, 12, 12) skewX(0) skewY(0) "
        >
          <path
            className="day"
            d="M12 6a1 1 0 0 0 1-1V3a1 1 0 0 0-2 0v2a1 1 0 0 0 1 1zm9 5h-2a1 1 0 0 0 0 2h2a1 1 0 0 0 0-2zM6 12a1 1 0 0 0-1-1H3a1 1 0 0 0 0 2h2a1 1 0 0 0 1-1zm.22-7a1 1 0 0 0-1.39 1.47l1.44 1.39a1 1 0 0 0 .73.28 1 1 0 0 0 .72-.31 1 1 0 0 0 0-1.41zM17 8.14a1 1 0 0 0 .69-.28l1.44-1.39A1 1 0 0 0 17.78 5l-1.44 1.42a1 1 0 0 0 0 1.41 1 1 0 0 0 .66.31zM12 18a1 1 0 0 0-1 1v2a1 1 0 0 0 2 0v-2a1 1 0 0 0-1-1zm5.73-1.86a1 1 0 0 0-1.39 1.44L17.78 19a1 1 0 0 0 .69.28 1 1 0 0 0 .72-.3 1 1 0 0 0 0-1.42zm-11.46 0l-1.44 1.39a1 1 0 0 0 0 1.42 1 1 0 0 0 .72.3 1 1 0 0 0 .67-.25l1.44-1.39a1 1 0 0 0-1.39-1.44zM12 8a4 4 0 1 0 4 4 4 4 0 0 0-4-4z"
          ></path>
        </svg>
      ) : (
        <svg
          viewBox="0 0 24 24"
          transform="translate(0, 0) translate(-12.021059513092041, -12.021673440933228) scale(1, 1) translate(12.021059513092041, 12.021673440933228) rotate(0, 12.021059513092041, 12.021673440933228) skewX(0) skewY(0) "
        >
          <path
            className="night"
            d="M12.3 22h-.1a10.31 10.31 0 0 1-7.34-3.15 10.46 10.46 0 0 1-.26-14 10.13 10.13 0 0 1 4-2.74 1 1 0 0 1 1.06.22 1 1 0 0 1 .24 1 8.4 8.4 0 0 0 1.94 8.81 8.47 8.47 0 0 0 8.83 1.94 1 1 0 0 1 1.27 1.29A10.16 10.16 0 0 1 19.6 19a10.28 10.28 0 0 1-7.3 3z"
          ></path>
        </svg>
      )}
    </div>
  );
}

export default Navbar;
