import React from "react";

const Backdrop = ({ handleSideBar }) => {
  return (
    <div
      className="w-screen h-screen backdrop-blur-md fixed top-0 left-0 z-0 backdrop-brightness-95"
      onClick={() => handleSideBar()}
    ></div>
  );
};

export default Backdrop;
