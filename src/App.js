import { React, useState } from "react";
import "./styles/index.css";
import Navbar from "./components/Navbar.jsx";
import Header from "./components/Header";
import useLocalStorage from "./hooks/useLocalStorage";
import ProfileView from "./components/ProfileView";
import Features from "./components/Features";
import Footer from "./components/Footer";
import useTheming from "./hooks/useTheme";

function App() {
  const [switchTheme, theme] = useTheming();
  return (
    <div className="app" data-theme={theme}>
      <Navbar theme={switchTheme} />
      <Header />
      <ProfileView />
      <Features />
      <Footer />
    </div>
  );
}

export default App;
