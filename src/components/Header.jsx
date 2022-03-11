import React from "react";
import "../styles/index.css";
import Lottie from "react-lottie-player";
import lottieJson from "../plane2.json";
import { BiSearchAlt } from "react-icons/bi";

const Header = () => {
  return (
    <header className="lg:grid lg:grid-cols-2  lg:my-24 container mx-auto py-8 px-10 flex flex-col justify-center content-center">
      <Lottie
        className="h-64 w-64 m-auto lg:h-96 lg:w-96"
        loop={false}
        animationData={lottieJson}
        play
      />
      <div className="lg:order-first">
        <h1
          id="title"
          className="text-center font-bold text-6xl py-5 lg:text-left"
        >
          Instability
        </h1>
        <h2
          id="sub-heading"
          className="text-center font-light text-2xl lg:text-left"
        >
          Browse instagram without it shouting at you to log in
        </h2>
        <Searchbar />
      </div>
    </header>
  );
};
function Searchbar() {
  return (
    <div className="mx-auto lg:mx-0">
      <div className="flex flex-row lg:mt-10">
        <BiSearchAlt className="mt-11 ml-auto mr-2 h-5 w-5 lg:ml-0 lg:mt-0 " />
        <input
          id="searchbar"
          className="mt-10 w-40 mr-auto lg:m-0"
          type="search"
          placeholder="Enter username here"
        />
      </div>
      <hr className="searchline my-2 mx-auto lg:mx-0" />
    </div>
  );
}
export default Header;
