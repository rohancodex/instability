import React from "react";
import "../styles/index.css";
import Lottie from "react-lottie-player";
import lottieJson from "../plane.json";

const Header = () => {
  return (
    <header className="py-8 px-10">
      <Lottie
        className="flex justify-center"
        loop={false}
        animationData={lottieJson}
        play
        style={{ width: 400, height: 400 }}
      />
      <h1 className="flex justify-center font-bold text-6xl">Instability</h1>
      <h2 className="flex justify-center text-center font-light text-3xl">
        Browse instagram without it shouting at you to log in
      </h2>
    </header>
  );
};
export default Header;
