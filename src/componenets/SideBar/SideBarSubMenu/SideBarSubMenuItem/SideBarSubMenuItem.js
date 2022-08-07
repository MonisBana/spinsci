import React from "react";

const SideBarSubMenuItem = ({ subMenuItem, filterData }) => {
  return (
    <div
      onClick={() => {
        filterData(subMenuItem);
      }}
      className="cursor-pointer p-4 m-2 text-lg hover:bg-dark-violet hover:text-white rounded-lg capitalize"
    >
      {subMenuItem}
    </div>
  );
};

export default SideBarSubMenuItem;
