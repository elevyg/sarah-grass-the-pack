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

  const keyFramesDuration = {
    1: 1,
    2: 1,
    3: 1,
    4: 1,
    5: 1,
  };

  const firstFigure = async () => {
    await animate(
      "#first-figure",
      { left: 0, top: 0, borderRadius: "0 0 0 0" },
      { duration: keyFramesDuration[1] },
    );
    await animate(
      "#first-figure",
      { left: 0, top: "10%", borderRadius: "0 0 0 0" },
      { duration: keyFramesDuration[2] },
    );
    await animate(
      "#first-figure",
      {
        left: 0,
        top: "30%",
        borderRadius: "0% 0% 0% 50%",
      },
      { duration: keyFramesDuration[3] },
    );
    await animate(
      "#first-figure",
      {
        left: 0,
        top: 0,
        borderRadius: "50% 0% 0% 0%",
      },
      { duration: keyFramesDuration[4] },
    );
    await animate(
      "#first-figure",
      {
        left: 0,
        top: 0,
        borderRadius: "100% 100% 100% 100%",
      },
      { duration: keyFramesDuration[5] },
    );
  };

  const secondFigure = async () => {
    await animate(
      "#second-figure",
      {
        left: `calc(${size} + ${left.second})`,
        bottom: 0,
        borderRadius: "10% 10% 10% 10%",
      },
      { duration: keyFramesDuration[1] },
    );
    await animate(
      "#second-figure",
      {
        left: `calc(${size} + ${left.second})`,
        top: 0,
        borderRadius: "0% 0% 0% 0%",
      },
      { duration: keyFramesDuration[2] },
    );
    await animate(
      "#second-figure",
      {
        left: `calc(${size} + ${left.second})`,
        top: `calc((${diagonal}/2 - ${size}/2))`,
        borderRadius: "100% 100% 100% 100%",
        rotate: "-45deg",
      },
      { duration: keyFramesDuration[3] },
    );
    await animate(
      "#second-figure",
      {
        left: `calc(${size} + ${left.second})`,
        top: `calc((${diagonal}/2 - ${size}/2))`,
        borderRadius: "10% 10% 10% 10%",
        rotate: "-45deg",
      },
      { duration: keyFramesDuration[4] },
    );
    await animate(
      "#second-figure",
      {
        left: `calc(${size} + ${left.second})`,
        top: `calc((${diagonal}/2 - ${size}/2))`,
        borderRadius: "0% 0% 0% 0%",
        rotate: "-45deg",
      },
      { duration: keyFramesDuration[5], delay: 0.5 },
    );
  };

  const thirdFigure = async () => {
    await animate(
      "#third-figure",
      {
        left: `calc(${size} + ${left.second} + ${left.third})`,

        top: `15%`,
        borderRadius: "100% 100% 100% 100%",
      },
      { duration: keyFramesDuration[1] },
    );
    await animate(
      "#third-figure",
      {
        left: `calc(${size} + ${left.second} + ${left.third})`,
        top: `15%`,
        borderRadius: "0% 0% 0% 0%",
      },
      { duration: keyFramesDuration[2] },
    );
    await animate(
      "#third-figure",
      {
        left: `calc(${size} + ${left.second} + ${left.third})`,
        top: `29%`,
        borderRadius: "0% 0% 0% 0%",
      },
      { duration: keyFramesDuration[3] },
    );
    await animate(
      "#third-figure",
      {
        left: `calc(${size} + ${left.second} + ${left.third})`,
        top: `29%`,
        rotate: "45deg",
        borderRadius: "100% 100% 100% 100%",
      },
      { duration: keyFramesDuration[4] },
    );
    await animate(
      "#third-figure",
      {
        left: `calc(${size} + ${left.second} + ${left.third})`,
        top: `29%`,
        rotate: "45deg",
        borderRadius: "0% 0% 0% 0%",
      },
      { duration: keyFramesDuration[5] },
    );
  };

  const fourthFigure = async () => {
    await animate(
      "#fourth-figure",
      {
        left: `calc(${size} + ${left.second} + ${left.third} + ${left.forth})`,
        top: "0%",
        borderRadius: "0% 0% 0% 0%",
      },
      { duration: keyFramesDuration[1] },
    );
    await animate(
      "#fourth-figure",
      {
        left: `calc(${size} + ${left.second} + ${left.third} + ${left.forth})`,
        top: "0%",
        rotate: "45deg",
        borderRadius: "100% 100% 100% 100%",
      },
      { duration: keyFramesDuration[2] },
    );
    await animate(
      "#fourth-figure",
      {
        left: `calc(${size} + ${left.second} + ${left.third} + ${left.forth})`,
        top: "0%",
        rotate: "90deg",
        borderRadius: "10% 10% 10% 10%",
      },
      { duration: keyFramesDuration[3] },
    );
    await animate(
      "#fourth-figure",
      {
        left: `calc(${size} + ${left.second} + ${left.third} + ${left.forth})`,
        top: "0%",
        rotate: "45deg",
        borderRadius: "0% 0% 0% 0%",
      },
      { duration: keyFramesDuration[4] },
    );
    await animate(
      "#fourth-figure",
      {
        left: `calc(${size} + ${left.second} + ${left.third} + ${left.forth})`,
        top: "0%",
        borderRadius: "10% 10% 10% 10%",
      },
      { duration: keyFramesDuration[5], delay: 0.5 },
    );
  };

  const handleAnimation = async () => {
    void firstFigure();
    void secondFigure();
    void thirdFigure();
    void fourthFigure();
  };

  useEffect(() => {
    void handleAnimation();
  });

  return (
    <div
      ref={scope}
      style={{ height: diagonal, width: containerWidth }}
      className="relative block origin-center "
    >
      <motion.div
        id="first-figure"
        initial={{ left: -500, top: -500 }}
        style={{ height: size, width: size, display: "block" }}
        transition={{ duration: 4 }}
        className="fl2ex-shrink-0 absolute left-0 top-0 inline-block  rounded-full  bg-matteBlack"
      />
      <motion.div
        id="second-figure"
        style={{
          height: size,
          width: size,
          bottom: -500,
          left: `calc(${size} + ${left.second})`,
          display: "block",
        }}
        className="absolute inline-block flex-shrink-0 bg-matteBlack"
      />
      <div
        id="third-figure"
        style={{
          height: size,
          width: size,
          left: `calc(${size} + ${left.second} + ${left.third})`,
          bottom: 500,
          borderRadius: "100% 100% 100% 100%",
          rotate: "45deg",
          display: "block",
        }}
        className="absolute  inline-block flex-shrink-0 origin-center bg-matteBlack"
      />
      <div
        id="fourth-figure"
        style={{
          height: size,
          width: size,
          left: "calc(100vw + 500px)",
          top: "0%",
          borderRadius: `0% 0% 0% 0%`,
          rotate: "45deg",
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
