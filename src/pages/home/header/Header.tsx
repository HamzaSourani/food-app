import React from "react";

const Header = () => {
  return (
    <header className="sm:h-96  relative flex justify-center items-center">
      <h1 className=" text-white text-center font-bold z-50 sm:text-6xl md:text-8xl">
        Menu.Sy
      </h1>
      <img
        className=" absolute h-full w-full"
        src="./assets/header.jpg"
        alt=""
      />
      <p className=" absolute bottom-4 text-center text-white text-lg font-medium">
        <span className=" bg-white text-red-800 rounded-sm ">Menu.</span>Sy
      </p>
    </header>
  );
};

export default Header;
