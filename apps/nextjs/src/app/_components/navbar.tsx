"use client";

import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useState, type ComponentProps } from "react";

type Props = ComponentProps<typeof motion.nav> & {
  mode?: "desktop" | "mobile";
};

const Navbar = (props: Props) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleMenuClick = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <AnimatePresence>
      <motion.nav
        {...props}
        className={`fixed z-20 flex h-[4rem] w-screen items-end justify-between border-b-2 border-b-matteBlack bg-eggWhite pb-2 pl-6 pr-6 md:h-[5rem] md:pr-8 ${props.className}`}
      >
        <div>
          <Link href="/">
            <h1 className="font-arizona text-[1.125rem]">The Pack</h1>
          </Link>
        </div>

        {props.mode === "desktop" ? (
          <div className="flex gap-6">
            <Link href="/offerings">
              <p>OFFERINGS</p>
            </Link>
            <Link href="/about">
              <p>ABOUT</p>
            </Link>
            <a href="https://thepackartschool.substack.com/" target="_blank">
              JOURNAL
            </a>
          </div>
        ) : (
          <div className="px-4">
            <button onClick={handleMenuClick}>
              {<p>{isOpen ? "CLOSE" : "MENU"}</p>}
            </button>
          </div>
        )}
      </motion.nav>
      {isOpen && (
        <motion.div
          key="menu"
          initial={{ opacity: 0, y: "-100%" }}
          animate={{ opacity: 1, y: "0%" }}
          exit={{ opacity: 0, y: "-100%" }}
          transition={{ type: "spring", ease: "easeIn", duration: 0.5 }}
          className="fixed left-0 top-0 z-10 flex w-screen flex-col border-b-2 border-b-matteBlack bg-eggWhite px-4 pt-[4rem] md:pt-[6rem]"
        >
          <Link
            href="/offerings"
            className="border-b-[1px] border-b-matteBlack py-2"
          >
            <p>OFFERINGS</p>
          </Link>
          <Link
            href="/about"
            className="border-b-[1px] border-b-matteBlack py-2"
          >
            <p>ABOUT</p>
          </Link>
          <a
            href="https://thepackartschool.substack.com/"
            target="_blank"
            className=" border-b-matteBlack py-2"
          >
            JOURNAL
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Navbar;
