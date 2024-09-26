"use client";

import { useSelector, useDispatch } from "react-redux";
import { addBoard } from "../../global_states/kanbanSlice";

const BoardDisplay = () => {
  const boards = useSelector((state) => state.kanban.boards);
  const dispatch = useDispatch();

  const boardId = boards.length < 0 ? 1 : boards.length + 1;

  const handleAddBoard = () => {
    dispatch(addBoard({ name: "New board", id: boardId }));
  };

  return (
    <>
      {boards.length > 0 ? (
        <div className="bg-lines_light dark:bg-very_dark_grey h-screen relative">
          {" "}
          <h1 className="text-5xl font-bold text-center absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
            Boards greater than zero
          </h1>
        </div>
      ) : (
        <div className="bg-lines_light dark:bg-very_dark_grey h-screen relative">
          <div className=" absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full sm:w-[75%] px-2">
            <h1 className="2xl:text-[25px] xl:text-2xl text-2xl text-black dark:text-white font-bold text-center capitalize">
              Welcome To Kanban Task management app
            </h1>
            <p className="text-medium_grey mt-5 text-center">
              You don&apos;t have any board yet. Create a new board to get
              started
            </p>

            <button
              type="button"
              className="bg-main_purple text-white px-10 py-3 text-base rounded-3xl mt-5 text-center 
              absolute left-1/2 transform -translate-x-1/2 w-[75%] xl:w-[35%]"
              onClick={handleAddBoard}
            >
              {" "}
              + Add New Board
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default BoardDisplay;
