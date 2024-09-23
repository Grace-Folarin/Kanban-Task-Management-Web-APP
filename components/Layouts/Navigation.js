"use client";

import { useState } from "react";

import { Plus_Jakarta_Sans } from "next/font/google";

const plus_jakarta_sans = Plus_Jakarta_Sans({
  weight: "400",
  style: "normal",
  subsets: ["latin"],
  variable: "--font-plus_jakarta_sans-",
});

const Navigation = ({ children }) => {
  const [toggleTheme, setToggleTheme] = useState(false);

  const handleToggleTheme = () => {
    setToggleTheme((prevState) => !prevState);
  };

  return (
    <body
      className={`${plus_jakarta_sans.className} ${toggleTheme ? "dark" : ""}`}
    >
      {children}
      <button onClick={handleToggleTheme}>Light mode</button>
    </body>
  );
};

export default Navigation;
