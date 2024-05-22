"use client";
import { motion, useAnimate } from "framer-motion";
import { useEffect } from "react";
import Navbar from "~/app/_components/navbar";

const colors = {
  eggWhite: "#FFFCF4",
  matteBlack: "#232323",
  mint: "#B4DDCB",
  lavander: "#BBA0CA",
  beige: "#CCA887",
  skyBlue: "#ACCEED",
  yellow: "#EDDF94",
};

const DESKTOP_FINAL_LETTERS_HEIGHT = "55%";

export const DesktopGeometricFigures = () => {
  const dimension = 85;
  const containerWidth = `${dimension}vw`;
  const insets = { second: -0.5, third: 0.65, fourth: 0.6 };
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
      "#navbar",
      { backgroundColor: colors.lavander },
      { duration: 1 },
    );
    void animate(
      "#background",
      { backgroundColor: colors.lavander, color: colors.lavander },
      { duration: 1 },
    );
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

  const fourthKeyFrame = async () => {
    void animate("#navbar", { backgroundColor: colors.beige }, { duration: 1 });
    void animate(
      "#background",
      { backgroundColor: colors.beige, color: colors.beige },
      { duration: 1 },
    );
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

  const fifthKeyFrame = async () => {
    void animate(
      "#navbar",
      { backgroundColor: colors.skyBlue },
      { duration: 1 },
    );
    void animate(
      "#background",
      { backgroundColor: colors.skyBlue, color: colors.skyBlue },
      { duration: 1 },
    );
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

  const sixthKeyFrame = async () => {
    void animate(
      "#navbar",
      { backgroundColor: colors.yellow },
      { duration: 1 },
    );
    void animate(
      "#background",
      { backgroundColor: colors.yellow, color: colors.yellow },
      { duration: 1 },
    );
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

  const seventhKeyFrame = async () => {
    const lettersTop = DESKTOP_FINAL_LETTERS_HEIGHT;
    void animate(
      "#an-text",
      { top: lettersTop, left: "36.7%", opacity: "100%" },
      { duration: keyFramesDuration[3] },
    );

    void animate(
      "#art-text",
      { top: lettersTop, left: "40%", opacity: "100%" },
      { duration: keyFramesDuration[3] },
    );
    void animate(
      "#school-text",
      { top: lettersTop, left: "43.9%", opacity: "100%" },
      { duration: 1 },
    );
    void animate(
      "#for-text",
      { top: lettersTop, left: "51.2%", opacity: "100%" },
      { duration: 1 },
    );
    void animate(
      "#the-text",
      { top: lettersTop, left: "54.8%", opacity: "100%" },
      { duration: 1 },
    );
    await animate(
      "#wild-text",
      { top: lettersTop, left: "58.5%", opacity: "100%" },
      { duration: 1 },
    );
  };

  const eightKeyFrame = async () => {
    void animate(
      "#navbar",
      {
        backgroundColor: colors.eggWhite,
        color: colors.matteBlack,
        borderBottomColor: colors.matteBlack,
      },
      { duration: 1 },
    );
    void animate(
      "#background",
      { backgroundColor: colors.eggWhite, color: colors.eggWhite },
      { duration: 1 },
    );
    void animate(
      "#first-figure",
      {
        backgroundColor: colors.matteBlack,
      },
      { duration: keyFramesDuration[5] },
    );
    void animate(
      "#second-figure",
      {
        backgroundColor: colors.matteBlack,
      },
      { duration: keyFramesDuration[5] },
    );
    void animate(
      "#third-figure",
      {
        backgroundColor: colors.matteBlack,
      },
      { duration: keyFramesDuration[5] },
    );
    await animate(
      "#fourth-figure",
      {
        backgroundColor: colors.matteBlack,
      },
      { duration: keyFramesDuration[5] },
    );
  };

  const finalFrame = () => {
    const lettersTop = DESKTOP_FINAL_LETTERS_HEIGHT;
    void animate(
      "#navbar",
      {
        backgroundColor: colors.eggWhite,
        color: colors.matteBlack,
        borderBottomColor: colors.matteBlack,
      },
      { duration: 1 },
    );
    void animate(
      "#background",
      { backgroundColor: colors.eggWhite, color: colors.eggWhite },
      { duration: 1 },
    );
    void animate(
      "#an-text",
      { top: lettersTop, left: "36.7%", opacity: "100%" },
      { duration: keyFramesDuration[3] },
    );

    void animate(
      "#art-text",
      { top: lettersTop, left: "40%", opacity: "100%" },
      { duration: keyFramesDuration[3] },
    );
    void animate(
      "#school-text",
      { top: lettersTop, left: "43.9%", opacity: "100%" },
      { duration: 1 },
    );
    void animate(
      "#for-text",
      { top: lettersTop, left: "51.2%", opacity: "100%" },
      { duration: 1 },
    );
    void animate(
      "#the-text",
      { top: lettersTop, left: "54.8%", opacity: "100%" },
      { duration: 1 },
    );
    void animate(
      "#wild-text",
      { top: lettersTop, left: "58.5%", opacity: "100%" },
      { duration: 1 },
    );
    void animate(
      "#first-figure",
      {
        left: 0,
        top: 0,
        borderRadius: "100% 100% 100% 100%",
        backgroundColor: colors.matteBlack,
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
        backgroundColor: colors.matteBlack,
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
        backgroundColor: colors.matteBlack,
      },
      { duration: keyFramesDuration[5] },
    );
    void animate(
      "#fourth-figure",
      {
        left: `calc(${size} + ${left.second} + ${left.third} + ${left.forth})`,
        top: "0%",
        borderRadius: "10% 10% 10% 10%",
        rotate: "45deg",
        backgroundColor: colors.matteBlack,
      },
      { duration: keyFramesDuration[5] },
    );
  };

  const handleAnimation = async () => {
    await firstKeyFrame();
    await secondKeyFrame();
    await thirdKeyFrame();
    await fourthKeyFrame();
    await fifthKeyFrame();
    await sixthKeyFrame();
    await seventhKeyFrame();
    await eightKeyFrame();
    localStorage.setItem("lastAnimatedAt", Date.now().toString());
  };

  useEffect(() => {
    const lastAnimatedAtString = localStorage.getItem("lastAnimatedAt");

    const lastAnimatedAt = lastAnimatedAtString
      ? parseInt(lastAnimatedAtString)
      : null;

    const aMinute = 60 * 1000;

    const hasAnimatedInTheLast = lastAnimatedAt
      ? Date.now() - lastAnimatedAt < aMinute * 15
      : false;

    if (hasAnimatedInTheLast) {
      void finalFrame();
    } else {
      void handleAnimation();
    }
  });

  return (
    <div ref={scope}>
      <Navbar
        mode="desktop"
        id="navbar"
        style={{
          backgroundColor: colors.mint,
          color: colors.eggWhite,
          borderBottomColor: colors.eggWhite,
        }}
      />
      <div
        id="background"
        className="pt-[6rem]"
        style={{ backgroundColor: colors.mint, color: colors.mint }}
      >
        <div className="flex min-h-[calc(100vh-6rem)] flex-1 items-center justify-center">
          <div
            style={{ height: diagonal, width: containerWidth }}
            className="relative block origin-center "
          >
            <motion.p
              id="an-text"
              className="absolute z-20 font-arizona text-[2vw] "
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
              className="absolute z-20 font-arizona text-[2vw] "
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
              className="absolute z-20 font-arizona text-[2vw] "
              style={{
                top: "58%",
                left: "50%",
                opacity: "0%",
              }}
            >
              School
            </motion.p>
            <motion.p
              id="for-text"
              className="absolute z-20 font-arizona text-[2vw] "
              style={{
                top: "66%",
                left: "60%",
                opacity: "0%",
              }}
            >
              for
            </motion.p>
            <motion.p
              id="the-text"
              className="absolute z-20 font-arizona text-[2vw] "
              style={{
                top: "43%",
                left: "74%",
                opacity: "0%",
              }}
            >
              the
            </motion.p>
            <motion.p
              id="wild-text"
              className="absolute z-20 font-arizona text-[2vw]"
              style={{
                top: "20%",
                left: "85%",
                opacity: "0%",
              }}
            >
              Wild
            </motion.p>
            <motion.div
              id="first-figure"
              initial={{ left: -500, top: -500 }}
              style={{
                backgroundColor: colors.eggWhite,
                height: size,
                width: size,
              }}
              className="absolute"
            />
            <motion.div
              id="second-figure"
              style={{
                backgroundColor: colors.eggWhite,
                height: size,
                width: size,
                bottom: -500,
                left: `calc(${size} + ${left.second})`,
              }}
              className="absolute"
            />
            <div
              id="third-figure"
              style={{
                backgroundColor: colors.eggWhite,
                height: size,
                width: size,
                left: `calc(${size} + ${left.second} + ${left.third})`,
                bottom: 500,
                borderRadius: "100% 100% 100% 100%",
                rotate: "45deg",
                display: "block",
              }}
              className="absolute  inline-block flex-shrink-0 origin-center"
            />
            <div
              id="fourth-figure"
              style={{
                backgroundColor: colors.eggWhite,
                height: size,
                width: size,
                left: "calc(100vw + 500px)",
                top: "0%",
                borderRadius: `0% 0% 0% 0%`,
                rotate: "45deg",
                display: "block",
              }}
              className="absolute inline-block flex-shrink-0"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export const MobileGeometricFigures = () => {
  const dimension = 55;
  const insets = { second: 0.61, third: 0.95, fourth: 0.5 };

  const size = `${dimension}vw`;

  const bottom = {
    second: `${size}*${insets.second}`,
    third: `${size}*${insets.third}`,
    forth: `${size}*${insets.fourth}`,
  };

  const containerHeight =
    dimension * (2 - insets.second + insets.third + insets.fourth);

  const [scope, animate] = useAnimate();

  const firstKeyFrame = async ({ duration } = { duration: 1 }) => {
    void animate("#first-figure", { top: 0, left: "21%" }, { duration });
    void animate(
      "#second-figure",
      { top: `calc(${bottom.second})`, left: 0 },
      { duration },
    );
    void animate(
      "#third-figure",
      {
        left: `calc(${size}*0.21)`,
        top: `calc(${size} - ${bottom.second} + ${bottom.third})`,
      },
      { duration },
    );
    await animate(
      "#fourth-figure",
      {
        top: `calc(${size} - ${bottom.second} + ${bottom.third} + ${bottom.forth})`,
        left: 0,
      },
      { duration },
    );
  };

  const secondKeyFrame = async ({ duration } = { duration: 1 }) => {
    await animate("#an-text", { opacity: "100%" }, { duration });
  };

  const thirdKeyFrame = async ({ duration } = { duration: 1 }) => {
    void animate("#navbar", {
      backgroundColor: colors.lavander,
    });
    void animate("#background", {
      backgroundColor: colors.lavander,
      color: colors.lavander,
    });
    void animate(
      "#an-text",
      {
        top: `calc(${size}*0.25)`,
        right: `calc(${size}*0.25)`,
        opacity: "100%",
      },
      { duration },
    );
    void animate("#art-text", { opacity: "100%" }, { duration });
    void animate(
      "#second-figure",
      {
        borderRadius: "0% 0% 0% 0%",
      },
      { duration },
    );
    void animate(
      "#third-figure",
      {
        borderRadius: "0% 0% 0% 0%",
      },
      { duration },
    );
    await animate(
      "#fourth-figure",
      {
        borderRadius: "100% 100% 100% 100%",
      },
      { duration },
    );
  };

  const fourthKeyFrame = async ({ duration } = { duration: 1 }) => {
    void animate("#navbar", {
      backgroundColor: colors.beige,
    });
    void animate("#background", {
      backgroundColor: colors.beige,
      color: colors.beige,
    });
    void animate(
      "#an-text",
      {
        top: `calc(${size}*0.25)`,
        right: `calc(${size}*0.25)`,
        opacity: "100%",
      },
      { duration },
    );
    void animate(
      "#art-text",
      {
        top: `calc(${size}*0.55)`,
        right: `calc(${size}*0.55)`,
        opacity: "100%",
      },
      { duration },
    );
    void animate("#school-text", { opacity: "100%" }, { duration });
    void animate(
      "#first-figure",
      {
        borderRadius: "10% 0% 0% 0%",
      },
      { duration },
    );
    void animate(
      "#second-figure",
      {
        borderRadius: "100% 100% 100% 100%",
      },
      { duration },
    );
    await animate(
      "#fourth-figure",
      {
        borderRadius: "10% 10% 10% 10%",
      },
      { duration },
    );
  };

  const fifthKeyFrame = async ({ duration } = { duration: 1 }) => {
    void animate("#navbar", {
      backgroundColor: colors.skyBlue,
    });
    void animate("#background", {
      backgroundColor: colors.skyBlue,
      color: colors.skyBlue,
    });
    void animate(
      "#an-text",
      {
        top: `calc(${size}*0.25)`,
        right: `calc(${size}*0.25)`,
        opacity: "100%",
      },
      { duration },
    );
    void animate(
      "#art-text",
      {
        top: `calc(${size}*0.55)`,
        right: `calc(${size}*0.55)`,
        opacity: "100%",
      },
      { duration },
    );
    void animate("#school-text", { opacity: "100%" }, { duration });
    void animate("#for-text", { opacity: "100%" }, { duration });
    void animate("#the-text", { opacity: "100%" }, { duration });
    void animate(
      "#first-figure",
      {
        borderRadius: "0% 10% 0% 0%",
      },
      { duration },
    );
    void animate(
      "#second-figure",
      {
        borderRadius: "10% 10% 10% 10%",
        rotate: "45deg",
      },
      { duration },
    );
    void animate(
      "#third-figure",
      {
        borderRadius: "100% 100% 100% 100%",
        rotate: "45deg",
      },
      { duration },
    );
    await animate(
      "#fourth-figure",
      {
        borderRadius: "0% 0% 0% 0%",
        rotate: "90deg",
      },
      { duration },
    );
  };

  const sixthKeyFrame = async ({ duration } = { duration: 1 }) => {
    void animate("#navbar", {
      backgroundColor: colors.yellow,
    });
    void animate("#background", {
      backgroundColor: colors.yellow,
      color: colors.yellow,
    });
    void animate(
      "#an-text",
      {
        top: `calc(${size}*0.25)`,
        right: `calc(${size}*0.25)`,
        opacity: "100%",
      },
      { duration },
    );
    void animate(
      "#art-text",
      {
        top: `calc(${size}*0.55)`,
        right: `calc(${size}*0.55)`,
        opacity: "100%",
      },
      { duration },
    );
    void animate("#school-text", { opacity: "100%" }, { duration });
    void animate(
      "#for-text",
      { opacity: "100%", right: `calc(${size}*0.5)` },
      { duration },
    );
    void animate(
      "#the-text",
      {
        opacity: "100%",
        right: `calc(${size}*0.25)`,
        top: `calc(${size}*1.8)`,
      },
      { duration },
    );
    void animate(
      "#wild-text",
      { opacity: "100%", right: `calc(${size}*0.6)` },
      { duration },
    );
    void animate(
      "#wild-text",
      { opacity: "100%", right: `calc(${size}*0.6)` },
      { duration },
    );
    void animate(
      "#first-figure",
      {
        borderRadius: "0% 0% 0% 0%",
      },
      { duration },
    );
    void animate(
      "#second-figure",
      {
        borderRadius: "10% 10% 10% 10%",
        rotate: "90deg",
      },
      { duration },
    );
    void animate(
      "#third-figure",
      {
        borderRadius: "10% 10% 10% 10%",
        rotate: "90deg",
      },
      { duration },
    );
    await animate(
      "#fourth-figure",
      {
        borderRadius: "100% 100% 100% 100%",
      },
      { duration },
    );
  };
  const seventhKeyFrame = async ({ duration } = { duration: 1 }) => {
    void animate("#navbar", {
      backgroundColor: colors.eggWhite,
      color: colors.matteBlack,
      borderBottomColor: colors.matteBlack,
    });
    void animate("#background", {
      backgroundColor: colors.eggWhite,
      color: colors.eggWhite,
    });
    void animate(
      "#an-text",
      {
        top: `calc(${size}*0.25)`,
        right: `calc(${size}*0.25)`,
        opacity: "100%",
      },
      { duration },
    );
    void animate(
      "#art-text",
      {
        top: `calc(${size}*0.55)`,
        right: `calc(${size}*0.55)`,
        opacity: "100%",
      },
      { duration },
    );
    void animate("#school-text", { opacity: "100%" }, { duration });
    void animate(
      "#wild-text",
      { opacity: "100%", right: `calc(${size}*0.6)` },
      { duration },
    );
    void animate(
      "#wild-text",
      { opacity: "100%", right: `calc(${size}*0.6)` },
      { duration },
    );
    void animate("#wild-text", { opacity: "100%" }, { duration });
    void animate(
      "#first-figure",
      {
        borderRadius: "0% 0% 0% 0%",
        backgroundColor: colors.matteBlack,
      },
      { duration },
    );
    void animate(
      "#second-figure",
      {
        borderRadius: "10% 10% 10% 10%",
        backgroundColor: colors.matteBlack,
      },
      { duration },
    );
    void animate(
      "#third-figure",
      {
        borderRadius: "10% 10% 10% 10%",
        backgroundColor: colors.matteBlack,
      },
      { duration },
    );
    await animate(
      "#fourth-figure",
      {
        borderRadius: "100% 100% 100% 100%",
        backgroundColor: colors.matteBlack,
      },
      { duration },
    );
  };
  const finalFrame = async ({ duration } = { duration: 1 }) => {
    void animate("#navbar", {
      backgroundColor: colors.eggWhite,
      color: colors.matteBlack,
      borderBottomColor: colors.matteBlack,
    });
    void animate("#background", {
      backgroundColor: colors.eggWhite,
      color: colors.eggWhite,
    });
    void animate(
      "#an-text",
      {
        top: `calc(${size}*0.25)`,
        right: `calc(${size}*0.25)`,
        opacity: "100%",
      },
      { duration },
    );
    void animate(
      "#art-text",
      {
        top: `calc(${size}*0.55)`,
        right: `calc(${size}*0.55)`,
        opacity: "100%",
      },
      { duration },
    );
    void animate("#school-text", { opacity: "100%" }, { duration });
    void animate(
      "#for-text",
      { opacity: "100%", right: `calc(${size}*0.5)` },
      { duration },
    );
    void animate(
      "#the-text",
      {
        opacity: "100%",
        right: `calc(${size}*0.25)`,
        top: `calc(${size}*1.8)`,
      },
      { duration },
    );
    void animate(
      "#wild-text",
      { opacity: "100%", right: `calc(${size}*0.6)` },
      { duration },
    );
    void animate("#wild-text", { opacity: "100%" }, { duration });
    void animate(
      "#first-figure",
      {
        top: 0,
        left: "21%",
        borderRadius: "0% 0% 0% 0%",
        backgroundColor: colors.matteBlack,
      },
      { duration },
    );
    void animate(
      "#second-figure",
      {
        top: `calc(${bottom.second})`,
        left: 0,
        borderRadius: "10% 10% 10% 10%",
        backgroundColor: colors.matteBlack,
      },
      { duration },
    );
    void animate(
      "#third-figure",
      {
        left: `calc(${size}*0.21)`,
        top: `calc(${size} - ${bottom.second} + ${bottom.third})`,
        borderRadius: "10% 10% 10% 10%",
        rotate: "90deg",
        backgroundColor: colors.matteBlack,
      },
      { duration },
    );
    await animate(
      "#fourth-figure",
      {
        top: `calc(${size} - ${bottom.second} + ${bottom.third} + ${bottom.forth})`,
        left: 0,
        borderRadius: "100% 100% 100% 100%",
        backgroundColor: colors.matteBlack,
      },
      { duration },
    );
  };

  const handleAnimation = async () => {
    await firstKeyFrame();
    await secondKeyFrame();
    await thirdKeyFrame();
    await fourthKeyFrame();
    await fifthKeyFrame();
    await sixthKeyFrame();
    await seventhKeyFrame();
    localStorage.setItem("lastAnimatedAt", Date.now().toString());
  };

  useEffect(() => {
    const lastAnimatedAtString = localStorage.getItem("lastAnimatedAt");

    const lastAnimatedAt = lastAnimatedAtString
      ? new Date(parseInt(lastAnimatedAtString))
      : null;

    const aMinute = 60 * 1000;

    const hasAnimatedInTheLast = lastAnimatedAt
      ? Date.now() - lastAnimatedAt.getTime() < aMinute * 15
      : false;

    if (hasAnimatedInTheLast) {
      void finalFrame();
    } else {
      void handleAnimation();
    }
  });

  return (
    <div ref={scope}>
      <Navbar
        mode="mobile"
        id="navbar"
        style={{
          backgroundColor: colors.mint,
          color: colors.eggWhite,
          borderBottomColor: colors.eggWhite,
        }}
      />
      <motion.div
        id="background"
        className="pt-[4rem]"
        style={{ backgroundColor: colors.mint, color: colors.mint }}
      >
        <div className="flex min-h-[calc(100vh-4rem)] flex-1 items-center justify-center py-14">
          <div
            style={{
              height: `${containerHeight}vw`,
              width: `${dimension * (1 + 0.21)}vw`,
            }}
            className="relative block origin-center"
          >
            <motion.div
              id="first-figure"
              style={{
                height: size,
                width: size,
                top: -500,
                left: "21%",
                backgroundColor: colors.eggWhite,
                borderRadius: "0% 0% 0% 0%",
              }}
              className="absolute"
            />
            <motion.div
              id="second-figure"
              style={{
                height: size,
                width: size,
                top: `calc(${bottom.second})`,
                left: -500,
                borderRadius: `10% 10% 10% 10%`,
                backgroundColor: colors.eggWhite,
              }}
              className="absolute"
            />
            <motion.div
              id="third-figure"
              style={{
                height: size,
                width: size,
                left: `150vw`,
                top: `calc(${size} - ${bottom.second} + ${bottom.third} + 300px)`,
                borderRadius: "100% 100% 100% 100%",
                backgroundColor: colors.eggWhite,
                rotate: "45deg",
              }}
              className="absolute"
            />
            <motion.div
              id="fourth-figure"
              style={{
                height: size,
                width: size,
                top: "150vh",
                left: 0,
                backgroundColor: colors.eggWhite,
                borderRadius: `10% 10% 10% 10%`,
                rotate: "45deg",
              }}
              className="absolute"
            />
            <motion.div
              id="an-text"
              style={{
                top: `calc(${size}*0.30)`,
                right: `calc(${size}*0.40)`,
                opacity: "0%",
              }}
              className=" absolute font-arizona text-2xl"
            >
              An
            </motion.div>
            <motion.div
              id="art-text"
              style={{
                top: `calc(${size}*0.60)`,
                right: `calc(${size}*0.6)`,
                opacity: "0%",
              }}
              className=" absolute font-arizona text-2xl"
            >
              art
            </motion.div>
            <motion.div
              id="school-text"
              style={{
                top: `calc(${size}*1)`,
                right: `calc(${size}*0.6)`,
                opacity: "0%",
              }}
              className=" absolute font-arizona text-2xl"
            >
              school
            </motion.div>
            <motion.div
              id="for-text"
              style={{
                top: `calc(${size}*1.4)`,
                right: `calc(${size}*0.6)`,
                opacity: "0%",
              }}
              className=" absolute font-arizona text-2xl"
            >
              for
            </motion.div>
            <motion.div
              id="the-text"
              style={{
                top: `calc(${size}*1.7)`,
                right: `calc(${size}*0.45)`,
                opacity: "0%",
              }}
              className=" absolute font-arizona text-2xl"
            >
              the
            </motion.div>
            <motion.div
              id="wild-text"
              style={{
                top: `calc(${size}*2.3)`,
                right: `calc(${size}*1.05)`,
                opacity: "0%",
              }}
              className=" absolute font-arizona text-2xl"
            >
              wild
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
