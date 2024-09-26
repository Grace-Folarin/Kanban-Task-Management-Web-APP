"use client";

// Import Redux-related hooks
import { Provider } from "react-redux";
import store from "@/global_states/store";

// Import next.js related hooks
import { useState } from "react";
import Image from "next/image";

// Components
import Sidebar from "../Sidebar/Sidebar";
import NavDropDown from "../NavDropDown/NavDropDown";

// Font
import { Plus_Jakarta_Sans } from "next/font/google";

// Icons
import {
  Plus,
  DotsThreeVertical,
  CaretDown,
  CaretUp,
  Eye,
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
  const [showSidebar, setShowSidebar] = useState(true);
  const [showDropDown, setShowDropDown] = useState(false);

  const handleShowDropDown = () => {
    setShowDropDown((prevState) => !prevState);
  };

  const handleShowSidebar = () => {
    setShowSidebar((prevState) => !prevState);
  };

  const handleToggleTheme = () => {
    setToggleTheme((prevState) => !prevState);
  };

  return (
    <Provider store={store}>
      <body
        className={`${plus_jakarta_sans.className} ${
          toggleTheme ? "dark" : ""
        } 2xl:w-[75%] 2xl:mx-auto 2xl:shadow-2xl transition-all duration-1000`}
      >
        <nav
          className="flex flex-row items-center justify-between bg-white dark:bg-dark_grey 
          fixed w-full 2xl:w-[75%] z-10 transition-all duration-1000"
        >
          {/* logo */}
          <section className="sm:basis-[30%] xl:basis-1/5 flex justify-center items-center xl:gap-2 gap-2 xl:px-5 px-2 ">
            <Image
              src={`/Images/logo.webp`}
              width={32}
              height={32}
              alt="Kanban Logo"
            />

            {/* Display on Mobile */}
            <div
              className="flex gap-1 items-center text-lg sm:hidden
             text-black dark:text-white font-bold"
              // onClick={handleShowDropDown}
            >
              <h2>Platform Launch</h2>
              {showDropDown ? (
                <CaretUp size={20} onClick={handleShowDropDown} />
              ) : (
                <CaretDown size={20} onClick={handleShowDropDown} />
              )}
              {showDropDown ? (
                <NavDropDown
                  toggleTheme={toggleTheme}
                  handleToggleTheme={handleToggleTheme}
                  handleShowSidebar={handleShowSidebar}
                  showSidebar={showSidebar}
                />
              ) : null}
            </div>

            <h1 className="xl:text-3xl sm:block sm:text-2xl hidden text-black dark:text-white font-bold">
              Kanban
            </h1>
          </section>

          {/* navigation */}
          <sections
            className="flex flex-row justify-between items-center 
          sm:border-l sm:border-l-lines_light sm:dark:border-l-lines_dark py-4 sm:border-b
         sm:border-b-lines_light sm:dark:border-b-lines_dark
         sm:basis-[70%] xl:basis-4/5
         "
          >
            <h2 className="sm:text-2xl hidden sm:block text-black dark:text-white font-bold px-5">
              Platform Launch
            </h2>

            <div className="flex xl:gap-5 items-center">
              <button
                type="button"
                className="text-white bg-purple_hover dark:bg-main_purple flex sm:gap-1 
                sm:text-lg text-sm
              sm:py-2 py-1 sm:px-7 px-3 rounded-3xl items-center opacity-50"
              >
                <Plus size={20} />
                <span className="xl:block hidden">Add New Task</span>
              </button>

              <div>
                <DotsThreeVertical size={32} />
              </div>
            </div>
          </sections>
        </nav>

        <main
          className={`flex flex-row ${
            showDropDown ? "blur-sm sm:blur-none" : null
          }`}
        >
          {/* side bar */}

          <Sidebar
            toggleTheme={toggleTheme}
            handleToggleTheme={handleToggleTheme}
            handleShowSidebar={handleShowSidebar}
            showSidebar={showSidebar}
          />

          <section
            className={`${
              showSidebar ? "sm:basis-[70%] xl:basis-4/5 w-full" : "w-full"
            } sm:border-l sm:border-l-lines_light sm:dark:border-l-very_dark_grey relative`}
          >
            {children}
            {showSidebar ? null : (
              <div
                onClick={handleShowSidebar}
                className="xl:block hidden absolute left-0 bottom-12 py-2 px-4 rounded-r-full bg-main_purple"
              >
                <Eye size={32} />
              </div>
            )}
          </section>
        </main>
      </body>
    </Provider>
  );
};

export default Navigation;
