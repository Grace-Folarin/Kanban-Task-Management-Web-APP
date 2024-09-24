"use client";

// Import next.js related hooks
import { useState } from "react";
import Image from "next/image";

// Font
import { Plus_Jakarta_Sans } from "next/font/google";

// Icons
import {
  Plus,
  DotsThreeVertical,
  Sun,
  MoonStars,
  ToggleLeft,
  ToggleRight,
  EyeSlash,
  Eye,
  Kanban,
} from "@phosphor-icons/react/dist/ssr";

// Declare font
const plus_jakarta_sans = Plus_Jakarta_Sans({
  weight: "400",
  style: "normal",
  subsets: ["latin"],
  variable: "--font-plus_jakarta_sans-",
});

const Navigation = ({ children }) => {
  const [toggleTheme, setToggleTheme] = useState(false);
  const [activeTab, setActiveTab] = useState(false);
  const [showSidebar, setShowSidebar] = useState(true);

  const handleShowSidebar = () => {
    setShowSidebar((prevState) => !prevState);
  };

  const handleActiveTab = () => {
    setActiveTab((prevState) => !prevState);
  };

  const handleToggleTheme = () => {
    setToggleTheme((prevState) => !prevState);
  };

  return (
    <body
      className={`${plus_jakarta_sans.className} ${toggleTheme ? "dark" : ""}`}
    >
      <nav className="flex flex-row items-center bg-white dark:bg-dark_grey fixed w-full z-10">
        {/* logo */}
        <section
          className="basis-[15%] flex gap-5 py-[22px] px-5 border-b
         border-b-lines_light dark:border-b-lines_dark"
        >
          <Image
            src={`/Images/logo.webp`}
            width={36}
            height={36}
            alt="Kanban Logo"
          />
          <h1 className="text-4xl text-black dark:text-white font-bold">
            Kanban
          </h1>
        </section>

        {/* navigation */}
        <sections
          className="flex flex-row justify-between items-center 
          border-l border-l-lines_light dark:border-l-lines_dark py-5 border-b
         border-b-lines_light dark:border-b-lines_dark
         basis-[85%]
         "
        >
          <h2 className="text-2xl text-black dark:text-white font-bold px-5">
            Platform Launch
          </h2>

          <div className="flex gap-5 items-center">
            <button
              type="button"
              className="text-white bg-purple_hover dark:bg-main_purple flex gap-1 text-lg 
              py-2 px-7 rounded-3xl items-center opacity-50"
            >
              <Plus size={20} />
              <span>Add New Task</span>
            </button>

            <DotsThreeVertical size={32} />
          </div>
        </sections>
      </nav>

      <main className="flex flex-row">
        {/* side bar */}
        {showSidebar ? (
          <section className="basis-[15%] bg-white dark:bg-dark_grey relative h-screen pt-24">
            <h2 className="text-medium_grey p-5 text-xl uppercase">
              ALl boards (8)
            </h2>

            {/* Board List */}
            <ul className="w-[85%] space-y-3">
              <li className="text-lg  px-5 py-2 bg-main_purple text-white flex items-center gap-2 rounded-r-full">
                <Kanban size={20} />
                <span>Board 1</span>
              </li>
              <li className="text-lg text-medium_grey px-5  flex items-center gap-2 rounded-r-full">
                <Kanban size={20} />
                <span>Board 1</span>
              </li>
              <li className="text-lg text-medium_grey px-5  flex items-center gap-2 rounded-r-full">
                <Kanban size={20} />
                <span>Board 1</span>
              </li>
            </ul>

            <div className="absolute bottom-12 px-5">
              {/* Theme Toggle */}
              <div
                className="flex gap-3 items-center justify-center bg-light_grey dark:bg-very_dark_grey
             text-medium_grey py-1 px-8 rounded-md"
              >
                <Sun size={23} />
                {/* Toggle Button */}
                {toggleTheme ? (
                  <div className="text-main_purple">
                    <ToggleRight size={35} onClick={handleToggleTheme} />
                  </div>
                ) : (
                  <div className="text-main_purple">
                    <ToggleLeft size={35} onClick={handleToggleTheme} />
                  </div>
                )}
                <MoonStars size={23} />
              </div>

              <div
                className="flex gap-2 text-medium_grey items-center justify-center mt-5 cursor-pointer"
                onClick={handleShowSidebar}
              >
                <EyeSlash size={25} />
                <p className="text-lg">Hide side bar</p>
              </div>
            </div>
          </section>
        ) : null}

        <section
          className={`${
            showSidebar ? "basis-[85%]" : "w-full"
          } border-l border-l-lines_light dark:border-l-lines_dark relative`}
        >
          {children}
          {showSidebar ? null : (
            <div
              onClick={handleShowSidebar}
              className="absolute left-0 bottom-12 py-2 px-4 rounded-r-full bg-main_purple"
            >
              <Eye size={32} />
            </div>
          )}
        </section>
      </main>
    </body>
  );
};

export default Navigation;
