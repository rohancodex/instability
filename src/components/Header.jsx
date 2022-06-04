import React from "react";
import "../styles/index.css";
import Lottie from "react-lottie-player";
import lottieJson from "../plane2.json";
import { BiSearchAlt } from "react-icons/bi";

const Header = () => {
  return (
    <header className="lg:grid lg:grid-cols-2 lg:my-24 container mx-auto py-8 px-10 flex flex-col justify-center content-center">
      <Lottie
        className="h-64 w-64 m-auto lg:h-96 lg:w-96"
        loop={false}
        animationData={lottieJson}
        play
      />
      <div className="lg:order-first">
        <h1
          id="title"
          className="text-center font-bold text-6xl py-5 lg:text-left lg:text-8xl"
        >
          Instability
        </h1>
        <h2
          id="sub-heading"
          className="text-center font-light text-2xl lg:text-left lg:my-5"
        >
          Browse instagram without it shouting at you to log in
        </h2>
        <Searchbar />
      </div>
    </header>
  );
};
function Searchbar() {
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("You have submitted the form.");

    const url = `https://glacial-stream-56779.herokuapp.com/https://www.instagram.com/shivaleekaoberoi/?__a=1`;

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        // prepareImages(
        //   data["graphql"]["user"]["edge_owner_to_timeline_media"]["edges"]
        // );
        console.log(data);
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="mx-auto lg:mx-0">
      <form onSubmit={handleSubmit}>
        <div className="flex flex-row lg:mt-10">
          <BiSearchAlt className="mt-11 ml-auto mr-2 h-5 w-5 lg:ml-0 lg:mt-0 " />
          <input
            id="searchbar"
            className="font-light mt-10 w-48 mr-auto lg:m-0 lg:text-2xl lg:w-64"
            type="search"
            placeholder="Enter username here"
          />
          <button type="submit">Submit</button>
        </div>
      </form>
      <hr className="searchline my-2 mx-auto lg:mx-0 lg:w-72" />
    </div>
  );
}
export default Header;
