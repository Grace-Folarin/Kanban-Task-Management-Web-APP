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

const NavDropDown = ({
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
      className={`bg-white dark:bg-dark_grey py-4 transition-all duration-1000 absolute top-20 w-[70%] rounded-xl`}
    >
      <h2
        className={`${
          boards.length > 1 ? "mb-7" : "mb-1 "
        } text-medium_grey px-5 text-lg uppercase`}
      >
        ALl boards (8)
      </h2>

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
                } capitalize text-lg text-medium_grey px-5 flex items-center gap-2 rounded-r-full transition-all duration-1000`}
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
            className={`capitalize text-lg text-main_purple hover:bg-main_purple
                 hover:text-white py-2 px-5
                 flex items-center ${boards.length > 0 ? "mt-10" : "mt-0 "}
                gap-2 rounded-r-full transition-all duration-1000`}
            onClick={() => handleActiveBoard(board.id)}
          >
            <Kanban size={20} />
            <span>+ Create New Board</span>
          </li>
        </div>
      </ul>

      <div
        className="flex gap-5 items-center justify-center bg-light_grey dark:bg-very_dark_grey
   text-medium_grey py-1 px-5 rounded-md transition-all duration-1000 mt-3 w-[85%] mx-auto"
      >
        <Sun size={25} />
        {/* Toggle Button */}
        {toggleTheme ? (
          <div className="text-main_purple">
            <ToggleRight
              size={30}
              onClick={handleToggleTheme}
              className="transition-all duration-1000 delay-1000"
            />
          </div>
        ) : (
          <div className="text-main_purple">
            <ToggleLeft
              size={30}
              onClick={handleToggleTheme}
              className="transition-all duration-1000 delay-1000"
            />
          </div>
        )}
        <MoonStars size={25} />
      </div>
    </section>
  );
};

export default NavDropDown;
