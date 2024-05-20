"use client";
import { motion, useAnimate } from "framer-motion";
import { useEffect } from "react";
import useMediaQuery from "~/hooks/useMediaQuery";

const GeometricFigures = () => {
  const isDesktop = useMediaQuery(`(min-width: 768px)`);

  if (isDesktop === true) return <DesktopGeometricFigures />;
  if (isDesktop === false) {
    return <MobileGeometricFigures />;
  }
  return null;
};

const DesktopGeometricFigures = () => {
  const dimension = 60;
  const containerWidth = `${dimension}vw`;
  const insets = { second: -0.15, third: 0.75, fourth: 0.75 };
  const proportion = 2 + insets.second + insets.third + insets.fourth;

  const size = `${dimension / proportion}vw`;
  const diagonal = `${(dimension / proportion) * Math.sqrt(2)}vw`;

  const left = {
    second: `${size}*${insets.second}`,
    third: `${size}*${insets.third}`,
    forth: `${size}*${insets.fourth}`,
  };

  const [scope, animate] = useAnimate();

  const firstFigure = async () => {
    await animate(
      "#first-figure",
      { left: 0, top: 0, borderRadius: "0 0 0 0" },
      { duration: 1 },
    );
    await animate(
      "#first-figure",
      { left: 0, top: "10%", borderRadius: "0 0 0 0" },
      { duration: 1 },
    );
    await animate(
      "#first-figure",
      {
        left: 0,
        top: "30%",
        borderRadius: "0% 0% 0% 50%",
      },
      { duration: 1 },
    );
    await animate(
      "#first-figure",
      {
        left: 0,
        top: 0,
        borderRadius: "50% 0% 0% 0%",
      },
      { duration: 1 },
    );
    await animate(
      "#first-figure",
      {
        left: 0,
        top: 0,
        borderRadius: "100% 100% 100% 100%",
      },
      { duration: 1 },
    );
  };

  const secondKeyFrame = () => {
    void animate(
      "#second-figure",
      {
        left: `calc(${size} + ${left.second})`,
        top: `calc((${diagonal}/2 - ${size}/2) * 0.5)`,
        borderRadius: "0 0 0 0",
      },
      { duration: 1 },
    );
  };

  const handleAnimation = async () => {
    await firstFigure();
  };

  useEffect(() => {
    void handleAnimation();
  });

  const duration = [1, 1, 1, 1];
  const times = [0.2, 1];

  return (
    <div
      ref={scope}
      style={{ height: diagonal, width: containerWidth }}
      className="relative block origin-center bg-red-400"
    >
      <motion.div
        id="first-figure"
        initial={{ left: -500, top: -500 }}
        style={{ height: size, width: size, display: "block" }}
        // animate={{
        //   left: [-200, 0, 0, 0, 0, 0],
        //   top: ["-500%", 0, 0, "30%", 0, 0],
        //   borderRadius: [0, 0, 0, "0 0 0 50%", "100% 100% 100% 100%", "100%"],
        // }}
        transition={{ duration: 4 }}
        className="fl2ex-shrink-0 absolute left-0 top-0 inline-block  rounded-full  bg-matteBlack"
      />
      <motion.div
        id="second-figure"
        style={{
          height: size,
          width: size,
          bottom: `calc(${diagonal}/2 - ${size}/2)`,
          left: `calc(${size} + ${left.second})`,
          display: "block",
        }}
        className="absolute inline-block flex-shrink-0 rotate-45 bg-green-500"
      />
      <div
        style={{
          height: size,
          width: size,
          left: `calc(${size} + ${left.second} + ${left.third})`,
          top: `calc(${diagonal} - ${size})`,
          // borderRadius: `calc(${size}*0.12)`,
          display: "block",
        }}
        className="absolute  inline-block flex-shrink-0 origin-center bg-matteBlack"
      />
      <div
        style={{
          height: size,
          width: size,
          left: `calc(${size} + ${left.second} + ${left.third} + ${left.forth})`,
          borderRadius: `calc(${size}*0.12)`,
          display: "block",
        }}
        className="absolute inline-block flex-shrink-0 bg-matteBlack"
      />
      <motion.div
        style={{ bottom: "calc(50% - 1vw)" }}
        className="absolute w-full  origin-top-left text-center font-arizona text-[2vw] capitalize text-[#fffcf4]"
      >
        An art school for the Wild
      </motion.div>
    </div>
  );
};

const MobileGeometricFigures = () => {
  const dimension = 60;
  const insets = { second: 0.61, third: 0.95, fourth: 0.5 };

  const size = `${dimension}vw`;

  const bottom = {
    second: `${size}*${insets.second}`,
    third: `${size}*${insets.third}`,
    forth: `${size}*${insets.fourth}`,
  };

  const containerHeight =
    dimension * (2 - insets.second + insets.third + insets.fourth);

  return (
    <div
      style={{
        height: `${containerHeight}vw`,
        width: `${dimension * (1 + 0.21)}vw`,
      }}
      className="relative block origin-center"
    >
      <div
        style={{
          height: size,
          width: size,
          left: `calc(${size}*0.21)`,
          display: "block",
        }}
        className="absolute  inline-block flex-shrink-0 origin-center bg-matteBlack"
      />
      <div
        style={{
          height: size,
          width: size,
          top: `calc(${bottom.second})`,

          borderRadius: `calc(${size}*0.12)`,
          display: "block",
        }}
        className="absolute inline-block flex-shrink-0 bg-matteBlack"
      />
      <div
        style={{
          height: size,
          width: size,
          left: `calc(${size}*0.21)`,
          top: `calc(${size} - ${bottom.second} + ${bottom.third})`,
          borderRadius: `calc(${size}*0.12)`,
          display: "block",
        }}
        className="absolute inline-block flex-shrink-0 bg-matteBlack"
      />
      <div
        style={{
          height: size,
          width: size,
          display: "block",
          top: `calc(${size} - ${bottom.second} + ${bottom.third} + ${bottom.forth})`,
        }}
        className="absolute left-0 top-0 inline-block flex-shrink-0  rounded-full  bg-matteBlack"
      />
      <motion.div
        style={{ top: `calc(${size}*0.25)`, right: `calc(${size}*0.25)` }}
        className=" absolute font-arizona text-2xl text-eggWhite"
      >
        An
      </motion.div>
      <motion.div
        style={{ top: `calc(${size}*0.60)`, right: `calc(${size}*0.6)` }}
        className=" absolute font-arizona text-2xl text-eggWhite"
      >
        art
      </motion.div>
      <motion.div
        style={{ top: `calc(${size}*1)`, right: `calc(${size}*0.8)` }}
        className=" absolute font-arizona text-2xl text-eggWhite"
      >
        school
      </motion.div>
      <motion.div
        style={{ top: `calc(${size}*1.4)`, right: `calc(${size}*0.6)` }}
        className=" absolute font-arizona text-2xl text-eggWhite"
      >
        for
      </motion.div>
      <motion.div
        style={{ top: `calc(${size}*1.8)`, right: `calc(${size}*0.25)` }}
        className=" absolute font-arizona text-2xl text-eggWhite"
      >
        the
      </motion.div>
      <motion.div
        style={{ top: `calc(${size}*2.3)`, right: `calc(${size}*0.8)` }}
        className=" absolute font-arizona text-2xl text-eggWhite"
      >
        wild
      </motion.div>
    </div>
  );
};

export default GeometricFigures;
