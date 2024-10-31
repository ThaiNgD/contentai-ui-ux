"use client";
import { useState } from "react";
import { IoMoonOutline, IoSunny } from "react-icons/io5";
const HeaderChangeTheme = () => {
  const [onClick, setOnClick] = useState(false);
  const handleClick = () => {
    setOnClick(!onClick);
  };
  return (
    <>
      {onClick ? (
        <IoMoonOutline role="button" size={20} onClick={handleClick} />
      ) : (
        <IoSunny role="button" size={20} onClick={handleClick} />
      )}
    </>
  );
};

export default HeaderChangeTheme;
