"use client";
import { useTheme } from "next-themes";
import { useState } from "react";
import { IoMoonOutline, IoSunny } from "react-icons/io5";
const HeaderChangeTheme = () => {
  const { setTheme } = useTheme();
  const [onClick, setOnClick] = useState(false);
  const handleClick = () => {
    if (onClick) {
      setTheme("light");
    } else {
      setTheme("dark");
    }
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
