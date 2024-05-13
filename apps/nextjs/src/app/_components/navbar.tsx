import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav className="fixed z-10 flex h-[111px] w-screen items-end justify-between border-b-2 border-b-matteBlack bg-eggWhite p-2">
      <div>
        <Link href="/">
          <h1>The Pack</h1>
        </Link>
      </div>
      <div className="flex gap-2">
        <a>OFFERINGS</a>
        <Link href="about">
          <p>ABOUT</p>
        </Link>
        <a>JOURNAL</a>
      </div>
    </nav>
  );
};

export default Navbar;
