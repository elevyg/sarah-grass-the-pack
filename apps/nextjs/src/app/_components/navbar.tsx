import React from "react";

const Navbar = () => {
  return (
    <nav className="border-b-matteBlack fixed z-10 flex h-[111px] w-screen items-end justify-between border-b-2 bg-eggWhite p-2">
      <div>
        <h1>The Pack</h1>
      </div>
      <div className="flex gap-2">
        <a>OFFERINGS</a>
        <a>ABOUT</a>
        <a>JOURNAL</a>
      </div>
    </nav>
  );
};

export default Navbar;
