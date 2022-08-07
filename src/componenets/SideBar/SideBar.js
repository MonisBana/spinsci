import React from "react";
import SideBarItems from "./SideBarItems/SideBarItems";
import { BsBookmarkHeart } from "react-icons/bs";
import { Slide } from "react-reveal";

const SideBar = ({
  handleSideBar,
  categories,
  filterData,
  clearFilter,
  favouritesCount,
}) => {
  const MenuOptions = ["Product", "Role", "Industry"];
  return (
    <Slide left className="z-10">
      <div className="bg-white dark-violet text-white h-screen top-0 left-0 fixed  w-screen lg:w-1/5 shadow-xl p-8 z-10 ">
        <div className="flex flex-row justify-between items-center px-4">
          <p className="text-2xl font-medium">Filter By</p>
          <p
            onClick={() => clearFilter()}
            className=" text-md underline opacity-80 hover:opacity-100"
          >
            Clear Filter
          </p>
          <button
            className="border-solid border-2  text-2xl w-12 h-12 hover:hover-btn"
            onClick={() => handleSideBar(false)}
          >
            X
          </button>{" "}
        </div>
        <div className="flex flex-row justify-between border-t-2 border-b-slate-300 mt-6 p-1 px-4 items-center">
          <p className="text-lg font-medium">Favourites</p>
          <p className="flex flex-row items-center">
            <p className="p-2">{favouritesCount}</p>
            <BsBookmarkHeart className="w-4 h-4" />
          </p>
        </div>
        <div className="border-t-2 border-b-slate-300 mt-4">
          {MenuOptions.map((option, index) => (
            <SideBarItems
              option={option}
              key={index}
              categories={categories}
              filterData={filterData}
            />
          ))}
        </div>
      </div>
    </Slide>
  );
};

export default SideBar;
