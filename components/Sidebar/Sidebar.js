import { useSelector, useDispatch } from "react-redux";
import { setActiveBoard } from "../../global_states/kanbanSlice";

import {
  Sun,
  MoonStars,
  ToggleLeft,
  ToggleRight,
  EyeSlash,
  Kanban,
} from "@phosphor-icons/react/dist/ssr";

const Sidebar = ({
  toggleTheme,
  handleToggleTheme,
  handleShowSidebar,
  showSidebar,
}) => {
  const dispatch = useDispatch();
  const { boards, activeBoard } = useSelector((state) => state.kanban);

  const handleActiveBoard = (boardId) => {
    dispatch(setActiveBoard(boardId));
  };

  return (
    <section
      className={`${
        showSidebar
          ? "sm:block hidden"
          : "hidden transition-all ease-in-out duration-1000"
      } sm:basis-[30%] xl:basis-1/5 bg-white dark:bg-dark_grey relative h-screen pt-24 transition-all duration-1000`}
    >
      <h2 className="text-medium_grey p-5 text-lg uppercase">ALl boards (8)</h2>

      {/* Board List */}
      <ul className="w-[95%] space-y-4">
        {boards.map((board) => {
          return (
            <div key={board.id}>
              <li
                className={`${
                  activeBoard === board.id
                    ? "bg-main_purple text-white py-2"
                    : ""
                } capitalize sm:text-sm xl:text-lg text-medium_grey px-5 flex items-center gap-2 rounded-r-full transition-all duration-1000`}
                onClick={() => handleActiveBoard(board.id)}
              >
                <Kanban size={20} />
                <span>{board.name}</span>
              </li>
            </div>
          );
        })}
        <div>
          <li
            className={`capitalize sm:text-sm xl:text-lg text-main_purple px-5 flex items-center gap-2 rounded-r-full transition-all duration-1000`}
            onClick={() => handleActiveBoard(board.id)}
          >
            <Kanban size={20} />
            <span>+ Create New Board</span>
          </li>
        </div>
      </ul>

      {/* Sidebar footer */}
      <div className="absolute bottom-12 px-5">
        {/* Theme Toggle */}
        <div
          className="flex gap-5 items-center justify-center bg-light_grey dark:bg-very_dark_grey
   text-medium_grey py-1 px-12 rounded-md transition-all duration-1000 sm:w-[90%] xl:w-full"
        >
          <Sun size={25} />
          {/* Toggle Button */}
          {toggleTheme ? (
            <div className="text-main_purple">
              <ToggleRight
                size={35}
                onClick={handleToggleTheme}
                className="transition-all duration-1000 delay-1000"
              />
            </div>
          ) : (
            <div className="text-main_purple">
              <ToggleLeft
                size={35}
                onClick={handleToggleTheme}
                className="transition-all duration-1000 delay-1000"
              />
            </div>
          )}
          <MoonStars size={25} />
        </div>

        <div
          className="flex gap-2 text-medium_grey items-center justify-center mt-5 cursor-pointer "
          onClick={handleShowSidebar}
        >
          <EyeSlash size={25} />
          <p className="text-lg">Hide side bar</p>
        </div>
      </div>
    </section>
  );
};

export default Sidebar;
