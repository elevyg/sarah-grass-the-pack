"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { type ComponentProps } from "react";

type Props = ComponentProps<typeof motion.nav> & {
  mode?: "desktop" | "mobile";
};

const Navbar = (props: Props) => {
  return (
    <motion.nav
      className="fixed z-10 flex h-[111px] w-screen items-end justify-between border-b-2 border-b-matteBlack bg-eggWhite p-2"
      {...props}
    >
      <div>
        <Link href="/">
          <h1 className="font-arizona text-[1.125rem]">The Pack</h1>
        </Link>
      </div>

      {props.mode === "desktop" ? (
        <div className="flex gap-2">
          <a>OFFERINGS</a>
          <Link href="/about">
            <p>ABOUT</p>
          </Link>
          <a href="https://thepackartschool.substack.com/" target="_blank">
            JOURNAL
          </a>
        </div>
      ) : (
        <div>
          <p>MENU</p>
        </div>
      )}
    </motion.nav>
  );
};

export default Navbar;
