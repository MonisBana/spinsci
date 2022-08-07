import React, { useState } from "react";
import { BsSearch } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";
const Navbar = ({ handleSideBar, getSearchedItems }) => {
  const [searchString, setSearchString] = useState("");
  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      getSearchedItems(searchString);
    }
  };
  return (
    <div className="w-100 h-screen/1 lg:h-20 shadow-lg bg-dark-violet header ">
      <div className="container bg-white mx-auto h-full flex flex-row lg:justify-between items-center bg-dark-violet">
        <div
          className="flex flex-row items-center"
          onClick={() => handleSideBar(true)}
        >
          <GiHamburgerMenu className=" w-6 h-6 lg:w-8 lg:h-8  ml-4 lg:m-0" />
          <h1 className="font-bold  text-2xl lg:text-3xl drop-shadow-xl ml-4">
            SPINSCI
          </h1>
        </div>
        <div className="rounded-lg flex flex-row w-3/6 h-10 items-center bg-white shadow-lg ml-6 lg:ml-0">
          <input
            type="text"
            value={searchString}
            onChange={(e) => setSearchString(e.target.value)}
            className="border-solid border-2 w-9/12 dark-violet lg:w-11/12 h-11 p-2 lg:p-4 rounded-l-lg"
            placeholder="Search products"
            onKeyDown={handleKeyDown}
          />
          <BsSearch
            className="w-3/12 lg:w-1/12 h-4 dark-violet"
            onClick={() => getSearchedItems(searchString.toLowerCase())}
          />
        </div>
        <div className="items-center hidden lg:flex">
          <a
            href="https://github.com/MonisBana"
            className="ml-6 opacity-60 hover:opacity-100 "
          >
            Products
          </a>
          <a
            href="https://github.com/MonisBana"
            className="ml-6 opacity-60 hover:opacity-100 "
          >
            Role
          </a>
          <a
            href="https://github.com/MonisBana"
            className="ml-6 opacity-60 hover:opacity-100 "
          >
            Industry
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
