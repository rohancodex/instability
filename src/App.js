import { React, useState } from "react";
import "./styles/index.css";
import Navbar from "./components/Navbar.jsx";
import Header from "./components/Header";
import useLocalStorage from "./hooks/useLocalStorage";
import ProfileView from "./components/ProfileView";
import Features from "./components/Features";
import Footer from "./components/Footer";

function App() {
  const defaultDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

  const [theme, setTheme] = useLocalStorage(
    "theme",
    defaultDark ? "dark" : "light"
  );
  console.log(theme);
  const switchTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
  };
  return (
    <div className="app" data-theme={theme}>
      <Navbar theme={switchTheme} />
      <Header />
      {/* <ProfileView /> */}
      <Features />
      <Footer />
    </div>
  );
}

export default App;
