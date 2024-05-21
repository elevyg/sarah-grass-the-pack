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

export const DesktopGeometricFigures = () => {
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

  // const textAnimations = async () => {};

  const firstKeyFrame = async () => {
    void animate(
      "#first-figure",
      { left: 0, top: 0, borderRadius: "0 0 0 0" },
      { duration: keyFramesDuration[1] },
    );
    void animate(
      "#second-figure",
      {
        left: `calc(${size} + ${left.second})`,
        bottom: 0,
        borderRadius: "10% 10% 10% 10%",
      },
      { duration: keyFramesDuration[1] },
    );
    void animate(
      "#third-figure",
      {
        left: `calc(${size} + ${left.second} + ${left.third})`,

        top: `15%`,
        borderRadius: "100% 100% 100% 100%",
      },
      { duration: keyFramesDuration[1] },
    );
    await animate(
      "#fourth-figure",
      {
        left: `calc(${size} + ${left.second} + ${left.third} + ${left.forth})`,
        top: "0%",
        borderRadius: "0% 0% 0% 0%",
      },
      { duration: keyFramesDuration[1] },
    );
  };

  const secondKeyFrame = async () => {
    await animate(
      "#an-text",
      { top: "30%", left: "13%", opacity: "100%" },
      { duration: 0.5 },
    );
  };

  const thirdKeyFrame = async () => {
    void animate(
      "#an-text",
      { top: "40%", left: "13%", opacity: "100%" },
      { duration: keyFramesDuration[2] },
    );
    void animate(
      "#first-figure",
      { left: 0, top: "10%", borderRadius: "0 0 0 0" },
      { duration: keyFramesDuration[2] },
    );
    void animate(
      "#art-text",
      {
        opacity: "100%",
        top: "22%",
        left: "35%",
      },
      { duration: 1 },
    );
    void animate(
      "#second-figure",
      {
        left: `calc(${size} + ${left.second})`,
        top: 0,
        borderRadius: "0% 0% 0% 0%",
      },
      { duration: keyFramesDuration[2] },
    );
    void animate(
      "#third-figure",
      {
        left: `calc(${size} + ${left.second} + ${left.third})`,
        top: `15%`,
        borderRadius: "0% 0% 0% 0%",
      },
      { duration: keyFramesDuration[2] },
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
  };

  const fifthKeyFrame = async () => {
    void animate(
      "#an-text",
      { top: "60%", left: "14%", opacity: "100%" },
      { duration: keyFramesDuration[3] },
    );

    void animate(
      "#art-text",
      { top: "40%", left: "35%" },
      { duration: keyFramesDuration[3] },
    );
    void animate(
      "#school-text",
      { top: "58%", left: "50%", opacity: "100%" },
      { duration: 1 },
    );
    void animate(
      "#first-figure",
      {
        left: 0,
        top: "30%",
        borderRadius: "0% 0% 0% 50%",
      },
      { duration: keyFramesDuration[3] },
    );
    void animate(
      "#second-figure",
      {
        left: `calc(${size} + ${left.second})`,
        top: `calc((${diagonal}/2 - ${size}/2))`,
        borderRadius: "100% 100% 100% 100%",
        rotate: "-45deg",
      },
      { duration: keyFramesDuration[3] },
    );

    void animate(
      "#third-figure",
      {
        left: `calc(${size} + ${left.second} + ${left.third})`,
        top: `29%`,
        borderRadius: "0% 0% 0% 0%",
      },
      { duration: keyFramesDuration[3] },
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
  };

  const sixthKeyFrame = async () => {
    void animate(
      "#an-text",
      { top: "26%", left: "10%", opacity: "100%" },
      { duration: keyFramesDuration[3] },
    );

    void animate(
      "#art-text",
      { top: "34%", left: "20%" },
      { duration: keyFramesDuration[3] },
    );
    void animate(
      "#school-text",
      { top: "44%", left: "30%", opacity: "100%" },
      { duration: 1 },
    );
    void animate(
      "#for-text",
      { top: "66%", left: "60%", opacity: "100%" },
      { duration: 1 },
    );
    void animate(
      "#the-text",
      { top: "43%", left: "74%", opacity: "100%" },
      { duration: 1 },
    );
    void animate(
      "#first-figure",
      {
        left: 0,
        top: 0,
        borderRadius: "50% 0% 0% 0%",
      },
      { duration: keyFramesDuration[4] },
    );
    void animate(
      "#second-figure",
      {
        left: `calc(${size} + ${left.second})`,
        top: `calc((${diagonal}/2 - ${size}/2))`,
        borderRadius: "10% 10% 10% 10%",
        rotate: "-45deg",
      },
      { duration: keyFramesDuration[4] },
    );
    void animate(
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
      "#fourth-figure",
      {
        left: `calc(${size} + ${left.second} + ${left.third} + ${left.forth})`,
        top: "0%",
        rotate: "45deg",
        borderRadius: "0% 0% 0% 0%",
      },
      { duration: keyFramesDuration[4] },
    );
  };

  const seventhKeyFrame = async () => {
    void animate(
      "#an-text",
      { top: "22%", left: "10%", opacity: "100%" },
      { duration: keyFramesDuration[3] },
    );

    void animate(
      "#art-text",
      { top: "36%", left: "22%" },
      { duration: keyFramesDuration[3] },
    );
    void animate(
      "#school-text",
      { top: "48%", left: "34%", opacity: "100%" },
      { duration: 1 },
    );
    void animate(
      "#for-text",
      { top: "70%", left: "60%", opacity: "100%" },
      { duration: 1 },
    );
    void animate(
      "#the-text",
      { top: "45%", left: "76%", opacity: "100%" },
      { duration: 1 },
    );
    void animate(
      "#wild-text",
      { top: "20%", left: "85%", opacity: "100%" },
      { duration: 1 },
    );
    void animate(
      "#first-figure",
      {
        left: 0,
        top: 0,
        borderRadius: "100% 100% 100% 100%",
      },
      { duration: keyFramesDuration[5] },
    );
    void animate(
      "#second-figure",
      {
        left: `calc(${size} + ${left.second})`,
        top: `calc((${diagonal}/2 - ${size}/2))`,
        borderRadius: "0% 0% 0% 0%",
        rotate: "-45deg",
      },
      { duration: keyFramesDuration[5] },
    );
    void animate(
      "#third-figure",
      {
        left: `calc(${size} + ${left.second} + ${left.third})`,
        top: `29%`,
        rotate: "45deg",
        borderRadius: "0% 0% 0% 0%",
      },
      { duration: keyFramesDuration[5] },
    );
    await animate(
      "#fourth-figure",
      {
        left: `calc(${size} + ${left.second} + ${left.third} + ${left.forth})`,
        top: "0%",
        borderRadius: "10% 10% 10% 10%",
      },
      { duration: keyFramesDuration[5] },
    );
  };

  const eighthKeyFrame = async () => {
    void animate(
      "#an-text",
      { top: "42%", left: "31.1%", opacity: "100%" },
      { duration: keyFramesDuration[3] },
    );

    void animate(
      "#art-text",
      { top: "42%", left: "35.9%" },
      { duration: keyFramesDuration[3] },
    );
    void animate(
      "#school-text",
      { top: "42%", left: "41.35%", opacity: "100%" },
      { duration: 1 },
    );
    void animate(
      "#for-text",
      { top: "42%", left: "51.9%", opacity: "100%" },
      { duration: 1 },
    );
    void animate(
      "#the-text",
      { top: "42%", left: "56.8%", opacity: "100%" },
      { duration: 1 },
    );
    await animate(
      "#wild-text",
      { top: "42%", left: "62.2%", opacity: "100%" },
      { duration: 1 },
    );
  };

  const handleAnimation = async () => {
    await firstKeyFrame();
    await secondKeyFrame();
    await thirdKeyFrame();
    await fifthKeyFrame();
    await sixthKeyFrame();
    await seventhKeyFrame();
    await eighthKeyFrame();
  };

  useEffect(() => {
    void handleAnimation();
  });

  return (
    <div
      ref={scope}
      className="flex min-h-screen flex-1 items-center justify-center py-10 md:py-0"
    >
      <div
        style={{ height: diagonal, width: containerWidth }}
        className="relative block origin-center "
      >
        <motion.p
          id="an-text"
          className="absolute z-20 font-arizona text-[2vw] text-eggWhite"
          style={{
            top: "30%",
            left: "13%",
            opacity: "0%",
          }}
        >
          An
        </motion.p>
        <motion.p
          id="art-text"
          className="absolute z-20 font-arizona text-[2vw] text-eggWhite"
          style={{
            top: "22%",
            left: "35%",
            opacity: "0%",
          }}
        >
          Art
        </motion.p>
        <motion.p
          id="school-text"
          className="absolute z-20 font-arizona text-[2vw] text-eggWhite"
          style={{ top: "58%", left: "50%", opacity: "0%" }}
        >
          School
        </motion.p>
        <motion.p
          id="for-text"
          className="absolute z-20 font-arizona text-[2vw] text-eggWhite"
          style={{ top: "66%", left: "60%", opacity: "0%" }}
        >
          for
        </motion.p>
        <motion.p
          id="the-text"
          className="absolute z-20 font-arizona text-[2vw] text-eggWhite"
          style={{ top: "43%", left: "74%", opacity: "0%" }}
        >
          the
        </motion.p>
        <motion.p
          id="wild-text"
          className="absolute z-20 font-arizona text-[2vw] text-eggWhite"
          style={{ top: "20%", left: "85%", opacity: "0%" }}
        >
          Wild
        </motion.p>
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
      </div>
    </div>
  );
};

export const MobileGeometricFigures = () => {
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
    <div className="flex min-h-screen flex-1 items-center justify-center py-10 md:py-0">
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
    </div>
  );
};

export default GeometricFigures;
