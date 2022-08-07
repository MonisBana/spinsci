import React from "react";
import SideBarSubMenuItem from "./SideBarSubMenuItem/SideBarSubMenuItem";

const SideBarSubMenu = ({ categories, filterData }) => {
  // const subItems = getSubitems(option);
  const i = Math.random() * 4287;
  return (
    <div>
      {categories.map((subItem) => (
        <SideBarSubMenuItem
          subMenuItem={subItem}
          filterData={filterData}
          key={i}
        />
      ))}
    </div>
  );
};

export default SideBarSubMenu;
