import React from "react";
import { HiChevronDown, HiChevronUp } from "react-icons/hi";
import SideBarSubMenu from "../SideBarSubMenu/SideBarSubMenu";
const SideBarItems = ({ option, categories, filterData }) => {
  const i = Math.random() * 125;
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <div className="flex flex-col">
      <div
        className="flex flex-row justify-between p-4 border-b-2 border-b-slate-300"
        onClick={() => setIsOpen(!isOpen)}
      >
        <p className="text-lg font-medium">{option}</p>
        {!isOpen && <HiChevronDown className="w-6 h-6" />}
        {isOpen && <HiChevronUp className="w-6 h-6" />}
      </div>
      {isOpen && (
        <SideBarSubMenu
          key={i}
          categories={categories}
          filterData={filterData}
        />
      )}
    </div>
  );
};

export default SideBarItems;
