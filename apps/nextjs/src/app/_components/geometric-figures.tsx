"use client";
import {
  type DynamicAnimationOptions,
  motion,
  useAnimate,
} from "framer-motion";
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

const DESKTOP_FINAL_LETTERS_HEIGHT = "50%";

export const DesktopGeometricFigures = () => {
  const dimension = 70;
  const containerWidth = `${dimension}vw`;
  const insets = { second: -0.4, third: 0.65, fourth: 0.7 };
  const proportion = 2 + insets.second + insets.third + insets.fourth;

  const size = `${dimension / proportion}vw`;
  const diagonal = `${(dimension / proportion) * Math.sqrt(2)}vw`;

  const left = {
    second: `${size}*${insets.second}`,
    third: `${size}*${insets.third}`,
    forth: `${size}*${insets.fourth}`,
  };

  const [scope, animate] = useAnimate();

  const firstKeyFrame = async (options: DynamicAnimationOptions) => {
    void animate(
      "#first-figure",
      { left: 0, top: 0, borderRadius: "0 0 0 0" },
      options,
    );
    void animate(
      "#second-figure",
      {
        left: `calc(${size} + ${left.second})`,
        bottom: 0,
        borderRadius: "20% 20% 20% 20%",
      },
      options,
    );
    void animate(
      "#third-figure",
      {
        left: `calc(${size} + ${left.second} + ${left.third})`,

        top: `15%`,
        borderRadius: "100% 100% 100% 100%",
      },
      options,
    );
    await animate(
      "#fourth-figure",
      {
        left: `calc(${size} + ${left.second} + ${left.third} + ${left.forth})`,
        top: "0%",
        borderRadius: "0% 0% 0% 0%",
      },
      options,
    );
  };

  const secondKeyFrame = async (options: DynamicAnimationOptions) => {
    await animate(
      "#an-text",
      { top: "30%", left: "13%", opacity: "100%" },
      options,
    );
  };

  const thirdKeyFrame = async (options: DynamicAnimationOptions) => {
    void animate("#navbar", { backgroundColor: colors.lavander }, options);
    void animate(
      "#background",
      { backgroundColor: colors.lavander, color: colors.lavander },
      options,
    );
    void animate(
      "#an-text",
      { top: "40%", left: "13%", opacity: "100%" },
      options,
    );
    void animate(
      "#first-figure",
      { left: 0, top: "10%", borderRadius: "0 0 0 0" },
      options,
    );
    void animate(
      "#art-text",
      {
        opacity: "100%",
        top: "22%",
        left: "35%",
      },
      options,
    );
    void animate(
      "#second-figure",
      {
        left: `calc(${size} + ${left.second})`,
        top: 0,
        borderRadius: "0% 0% 0% 0%",
      },
      options,
    );
    void animate(
      "#third-figure",
      {
        left: `calc(${size} + ${left.second} + ${left.third})`,
        top: `15%`,
        borderRadius: "0% 0% 0% 0%",
      },
      options,
    );
    await animate(
      "#fourth-figure",
      {
        left: `calc(${size} + ${left.second} + ${left.third} + ${left.forth})`,
        top: "0%",
        rotate: "45deg",
        borderRadius: "100% 100% 100% 100%",
      },
      options,
    );
  };

  const fourthKeyFrame = async (options: DynamicAnimationOptions) => {
    void animate("#navbar", { backgroundColor: colors.beige }, options);
    void animate(
      "#background",
      { backgroundColor: colors.beige, color: colors.beige },
      options,
    );
    void animate(
      "#an-text",
      { top: "60%", left: "14%", opacity: "100%" },
      options,
    );

    void animate("#art-text", { top: "40%", left: "35%" }, options);
    void animate(
      "#school-text",
      { top: "58%", left: "50%", opacity: "100%" },
      options,
    );
    void animate(
      "#first-figure",
      {
        left: 0,
        top: "30%",
        borderRadius: "0% 0% 0% 50%",
      },
      options,
    );
    void animate(
      "#second-figure",
      {
        left: `calc(${size} + ${left.second})`,
        top: `calc((${diagonal}/2 - ${size}/2))`,
        borderRadius: "100% 100% 100% 100%",
        rotate: "-45deg",
      },
      options,
    );

    void animate(
      "#third-figure",
      {
        left: `calc(${size} + ${left.second} + ${left.third})`,
        top: `29%`,
        borderRadius: "0% 0% 0% 0%",
      },
      options,
    );
    await animate(
      "#fourth-figure",
      {
        left: `calc(${size} + ${left.second} + ${left.third} + ${left.forth})`,
        top: "0%",
        rotate: "-90deg",
        borderRadius: "20% 20% 20% 20%",
      },
      options,
    );
  };

  const fifthKeyFrame = async (options: DynamicAnimationOptions) => {
    void animate("#navbar", { backgroundColor: colors.skyBlue }, options);
    void animate(
      "#background",
      { backgroundColor: colors.skyBlue, color: colors.skyBlue },
      options,
    );
    void animate(
      "#an-text",
      { top: "26%", left: "10%", opacity: "100%" },
      options,
    );

    void animate("#art-text", { top: "34%", left: "20%" }, options);
    void animate(
      "#school-text",
      { top: "44%", left: "30%", opacity: "100%" },
      options,
    );
    void animate(
      "#for-text",
      { top: "66%", left: "60%", opacity: "100%" },
      options,
    );
    void animate(
      "#the-text",
      { top: "43%", left: "74%", opacity: "100%" },
      options,
    );
    void animate(
      "#first-figure",
      {
        left: 0,
        top: 0,
        borderRadius: "50% 0% 0% 0%",
      },
      options,
    );
    void animate(
      "#second-figure",
      {
        left: `calc(${size} + ${left.second})`,
        top: `calc((${diagonal}/2 - ${size}/2))`,
        borderRadius: "20% 20% 20% 20%",
        rotate: "-45deg",
      },
      options,
    );
    void animate(
      "#third-figure",
      {
        left: `calc(${size} + ${left.second} + ${left.third})`,
        top: `29%`,
        rotate: "45deg",
        borderRadius: "100% 100% 100% 100%",
      },
      options,
    );
    await animate(
      "#fourth-figure",
      {
        left: `calc(${size} + ${left.second} + ${left.third} + ${left.forth})`,
        top: "0%",
        rotate: "-45deg",
        borderRadius: "0% 0% 0% 0%",
      },
      options,
    );
  };

  const sixthKeyFrame = async (options: DynamicAnimationOptions) => {
    void animate("#navbar", { backgroundColor: colors.yellow }, options);
    void animate(
      "#background",
      { backgroundColor: colors.yellow, color: colors.yellow },
      options,
    );
    void animate(
      "#an-text",
      { top: "22%", left: "10%", opacity: "100%" },
      options,
    );

    void animate("#art-text", { top: "36%", left: "22%" }, options);
    void animate(
      "#school-text",
      { top: "48%", left: "34%", opacity: "100%" },
      options,
    );
    void animate(
      "#for-text",
      { top: "70%", left: "60%", opacity: "100%" },
      options,
    );
    void animate(
      "#the-text",
      { top: "45%", left: "76%", opacity: "100%" },
      options,
    );
    void animate(
      "#wild-text",
      { top: "20%", left: "85%", opacity: "100%" },
      options,
    );
    void animate(
      "#first-figure",
      {
        left: 0,
        top: 0,
        borderRadius: "100% 100% 100% 100%",
      },
      options,
    );
    void animate(
      "#second-figure",
      {
        left: `calc(${size} + ${left.second})`,
        top: `calc((${diagonal}/2 - ${size}/2))`,
        borderRadius: "0% 0% 0% 0%",
        rotate: "-45deg",
      },
      options,
    );
    void animate(
      "#third-figure",
      {
        left: `calc(${size} + ${left.second} + ${left.third})`,
        top: `29%`,
        rotate: "45deg",
        borderRadius: "0% 0% 0% 0%",
      },
      options,
    );
    await animate(
      "#fourth-figure",
      {
        left: `calc(${size} + ${left.second} + ${left.third} + ${left.forth})`,
        top: "0%",
        borderRadius: "20% 20% 20% 20%",
      },
      options,
    );
  };

  const lettersAligning = {
    "#an-text": "33.8%",
    "#art-text": "37.9%",
    "#school-text": "42.6%",
    "#for-text": "51.6%",
    "#the-text": "55.8%",
    "#wild-text": "60.4%",
  };

  const seventhKeyFrame = async (options: DynamicAnimationOptions) => {
    const lettersTop = DESKTOP_FINAL_LETTERS_HEIGHT;
    void animate(
      "#an-text",
      { top: lettersTop, left: lettersAligning["#an-text"], opacity: "100%" },
      options,
    );

    void animate(
      "#art-text",
      { top: lettersTop, left: lettersAligning["#art-text"], opacity: "100%" },
      options,
    );
    void animate(
      "#school-text",
      {
        top: lettersTop,
        left: lettersAligning["#school-text"],
        opacity: "100%",
      },
      options,
    );
    void animate(
      "#for-text",
      { top: lettersTop, left: lettersAligning["#for-text"], opacity: "100%" },
      options,
    );
    void animate(
      "#the-text",
      { top: lettersTop, left: lettersAligning["#the-text"], opacity: "100%" },
      options,
    );
    await animate(
      "#wild-text",
      { top: lettersTop, left: lettersAligning["#wild-text"], opacity: "100%" },
      options,
    );
  };

  const eightKeyFrame = async (options: DynamicAnimationOptions) => {
    void animate(
      "#navbar",
      {
        backgroundColor: colors.eggWhite,
        color: colors.matteBlack,
        borderBottomColor: colors.matteBlack,
      },
      options,
    );
    void animate(
      "#background",
      { backgroundColor: colors.eggWhite, color: colors.eggWhite },
      options,
    );
    void animate(
      "#first-figure",
      {
        backgroundColor: colors.matteBlack,
      },
      options,
    );
    void animate(
      "#second-figure",
      {
        backgroundColor: colors.matteBlack,
      },
      options,
    );
    void animate(
      "#third-figure",
      {
        backgroundColor: colors.matteBlack,
      },
      options,
    );
    await animate(
      "#fourth-figure",
      {
        backgroundColor: colors.matteBlack,
      },
      options,
    );
  };

  const finalFrame = (options?: DynamicAnimationOptions) => {
    const lettersTop = DESKTOP_FINAL_LETTERS_HEIGHT;
    void animate(
      "#navbar",
      {
        backgroundColor: colors.eggWhite,
        color: colors.matteBlack,
        borderBottomColor: colors.matteBlack,
      },
      options,
    );
    void animate(
      "#background",
      { backgroundColor: colors.eggWhite, color: colors.eggWhite },
      options,
    );
    void animate(
      "#an-text",
      { top: lettersTop, left: lettersAligning["#an-text"], opacity: "100%" },
      options,
    );

    void animate(
      "#art-text",
      { top: lettersTop, left: lettersAligning["#art-text"], opacity: "100%" },
      options,
    );
    void animate(
      "#school-text",
      {
        top: lettersTop,
        left: lettersAligning["#school-text"],
        opacity: "100%",
      },
      options,
    );
    void animate(
      "#for-text",
      { top: lettersTop, left: lettersAligning["#for-text"], opacity: "100%" },
      options,
    );
    void animate(
      "#the-text",
      { top: lettersTop, left: lettersAligning["#the-text"], opacity: "100%" },
      options,
    );
    void animate(
      "#wild-text",
      { top: lettersTop, left: lettersAligning["#wild-text"], opacity: "100%" },
      options,
    );
    void animate(
      "#first-figure",
      {
        left: 0,
        top: 0,
        borderRadius: "100% 100% 100% 100%",
        backgroundColor: colors.matteBlack,
      },
      options,
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
      options,
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
      options,
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
      options,
    );
  };

  const handleAnimation = async () => {
    await firstKeyFrame({ duration: 1.2, ease: "easeInOut" });
    await secondKeyFrame({ duration: 0.2, delay: 0.5, ease: "easeInOut" });
    await thirdKeyFrame({ duration: 0.8, delay: 0.5, ease: "easeInOut" });
    await fourthKeyFrame({ duration: 0.8, delay: 0.5, ease: "easeInOut" });
    await fifthKeyFrame({ duration: 0.8, delay: 0.5, ease: "easeInOut" });
    await sixthKeyFrame({ duration: 0.8, delay: 0.5, ease: "easeInOut" });
    await seventhKeyFrame({ duration: 1.2, delay: 0.5, ease: "easeInOut" });
    await eightKeyFrame({ duration: 0.8, ease: "easeInOut" });
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
      void finalFrame({ duration: 1.2 });
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
        className="pt-navbar-desktop overflow-hidden"
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
          {/* This is to align correctly the letters keep it hidden but do not delete */}
          {/* <div
            style={{ top: "55.8%" }}
            className="absolute text-center font-arizona text-[2vw] text-[#e36868]"
          >
            An Art School for the Wild
          </div> */}
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

  const firstKeyFrame = async (options?: DynamicAnimationOptions) => {
    void animate("#first-figure", { top: 0, left: "21%" }, options);
    void animate(
      "#second-figure",
      { top: `calc(${bottom.second})`, left: 0 },
      options,
    );
    void animate(
      "#third-figure",
      {
        left: `calc(${size}*0.21)`,
        top: `calc(${size} - ${bottom.second} + ${bottom.third})`,
      },
      options,
    );
    await animate(
      "#fourth-figure",
      {
        top: `calc(${size} - ${bottom.second} + ${bottom.third} + ${bottom.forth})`,
        left: 0,
      },
      options,
    );
  };

  const secondKeyFrame = async (options?: DynamicAnimationOptions) => {
    await animate("#an-text", { opacity: "100%" }, options);
  };

  const thirdKeyFrame = async (options?: DynamicAnimationOptions) => {
    void animate(
      "#navbar",
      {
        backgroundColor: colors.lavander,
      },
      options,
    );
    void animate(
      "#background",
      {
        backgroundColor: colors.lavander,
        color: colors.lavander,
      },
      options,
    );
    void animate(
      "#an-text",
      {
        top: `calc(${size}*0.25)`,
        right: `calc(${size}*0.25)`,
        opacity: "100%",
      },
      options,
    );
    void animate("#art-text", { opacity: "100%" }, options);
    void animate(
      "#second-figure",
      {
        borderRadius: "0% 0% 0% 0%",
      },
      options,
    );
    void animate(
      "#third-figure",
      {
        borderRadius: "0% 0% 0% 0%",
      },
      options,
    );
    await animate(
      "#fourth-figure",
      {
        borderRadius: "100% 100% 100% 100%",
      },
      options,
    );
  };

  const fourthKeyFrame = async (options?: DynamicAnimationOptions) => {
    void animate(
      "#navbar",
      {
        backgroundColor: colors.beige,
      },
      options,
    );
    void animate(
      "#background",
      {
        backgroundColor: colors.beige,
        color: colors.beige,
      },
      options,
    );
    void animate(
      "#an-text",
      {
        top: `calc(${size}*0.25)`,
        right: `calc(${size}*0.25)`,
        opacity: "100%",
      },
      options,
    );
    void animate(
      "#art-text",
      {
        top: `calc(${size}*0.55)`,
        right: `calc(${size}*0.55)`,
        opacity: "100%",
      },
      options,
    );
    void animate("#school-text", { opacity: "100%" }, options);
    void animate(
      "#first-figure",
      {
        borderRadius: "10% 0% 0% 0%",
      },
      options,
    );
    void animate(
      "#second-figure",
      {
        borderRadius: "100% 100% 100% 100%",
      },
      options,
    );
    await animate(
      "#fourth-figure",
      {
        borderRadius: "10% 10% 10% 10%",
      },
      options,
    );
  };

  const fifthKeyFrame = async (options?: DynamicAnimationOptions) => {
    void animate(
      "#navbar",
      {
        backgroundColor: colors.skyBlue,
      },
      options,
    );
    void animate(
      "#background",
      {
        backgroundColor: colors.skyBlue,
        color: colors.skyBlue,
      },
      options,
    );
    void animate(
      "#an-text",
      {
        top: `calc(${size}*0.25)`,
        right: `calc(${size}*0.25)`,
        opacity: "100%",
      },
      options,
    );
    void animate(
      "#art-text",
      {
        top: `calc(${size}*0.55)`,
        right: `calc(${size}*0.55)`,
        opacity: "100%",
      },
      options,
    );
    void animate("#school-text", { opacity: "100%" }, options);
    void animate("#for-text", { opacity: "100%" }, options);
    void animate("#the-text", { opacity: "100%" }, options);
    void animate(
      "#first-figure",
      {
        borderRadius: "0% 10% 0% 0%",
      },
      options,
    );
    void animate(
      "#second-figure",
      {
        borderRadius: "10% 10% 10% 10%",
        rotate: "45deg",
      },
      options,
    );
    void animate(
      "#third-figure",
      {
        borderRadius: "100% 100% 100% 100%",
        rotate: "45deg",
      },
      options,
    );
    await animate(
      "#fourth-figure",
      {
        borderRadius: "0% 0% 0% 0%",
        rotate: "90deg",
      },
      options,
    );
  };

  const sixthKeyFrame = async (options?: DynamicAnimationOptions) => {
    void animate(
      "#navbar",
      {
        backgroundColor: colors.yellow,
      },
      options,
    );
    void animate(
      "#background",
      {
        backgroundColor: colors.yellow,
        color: colors.yellow,
      },
      options,
    );
    void animate(
      "#an-text",
      {
        top: `calc(${size}*0.25)`,
        right: `calc(${size}*0.25)`,
        opacity: "100%",
      },
      options,
    );
    void animate(
      "#art-text",
      {
        top: `calc(${size}*0.55)`,
        right: `calc(${size}*0.55)`,
        opacity: "100%",
      },
      options,
    );
    void animate("#school-text", { opacity: "100%" }, options);
    void animate(
      "#for-text",
      { opacity: "100%", right: `calc(${size}*0.5)` },
      options,
    );
    void animate(
      "#the-text",
      {
        opacity: "100%",
        right: `calc(${size}*0.25)`,
        top: `calc(${size}*1.8)`,
      },
      options,
    );
    void animate(
      "#wild-text",
      { opacity: "100%", right: `calc(${size}*0.6)` },
      options,
    );
    void animate(
      "#wild-text",
      { opacity: "100%", right: `calc(${size}*0.6)` },
      options,
    );
    void animate(
      "#first-figure",
      {
        borderRadius: "0% 0% 0% 0%",
      },
      options,
    );
    void animate(
      "#second-figure",
      {
        borderRadius: "10% 10% 10% 10%",
        rotate: "90deg",
      },
      options,
    );
    void animate(
      "#third-figure",
      {
        borderRadius: "10% 10% 10% 10%",
        rotate: "90deg",
      },
      options,
    );
    await animate(
      "#fourth-figure",
      {
        borderRadius: "100% 100% 100% 100%",
      },
      options,
    );
  };
  const seventhKeyFrame = async (options?: DynamicAnimationOptions) => {
    void animate(
      "#navbar",
      {
        backgroundColor: colors.eggWhite,
        color: colors.matteBlack,
        borderBottomColor: colors.matteBlack,
      },
      options,
    );
    void animate(
      "#background",
      {
        backgroundColor: colors.eggWhite,
        color: colors.eggWhite,
      },
      options,
    );
    void animate(
      "#an-text",
      {
        top: `calc(${size}*0.25)`,
        right: `calc(${size}*0.25)`,
        opacity: "100%",
      },
      options,
    );
    void animate(
      "#art-text",
      {
        top: `calc(${size}*0.55)`,
        right: `calc(${size}*0.55)`,
        opacity: "100%",
      },
      options,
    );
    void animate("#school-text", { opacity: "100%" }, options);
    void animate(
      "#wild-text",
      { opacity: "100%", right: `calc(${size}*0.6)` },
      options,
    );
    void animate(
      "#wild-text",
      { opacity: "100%", right: `calc(${size}*0.6)` },
      options,
    );
    void animate("#wild-text", { opacity: "100%" }, options);
    void animate(
      "#first-figure",
      {
        borderRadius: "0% 0% 0% 0%",
        backgroundColor: colors.matteBlack,
      },
      options,
    );
    void animate(
      "#second-figure",
      {
        borderRadius: "10% 10% 10% 10%",
        backgroundColor: colors.matteBlack,
      },
      options,
    );
    void animate(
      "#third-figure",
      {
        borderRadius: "10% 10% 10% 10%",
        backgroundColor: colors.matteBlack,
      },
      options,
    );
    await animate(
      "#fourth-figure",
      {
        borderRadius: "100% 100% 100% 100%",
        backgroundColor: colors.matteBlack,
      },
      options,
    );
  };
  const finalFrame = async (options?: DynamicAnimationOptions) => {
    void animate(
      "#navbar",
      {
        backgroundColor: colors.eggWhite,
        color: colors.matteBlack,
        borderBottomColor: colors.matteBlack,
      },
      options,
    );
    void animate(
      "#background",
      {
        backgroundColor: colors.eggWhite,
        color: colors.eggWhite,
      },
      options,
    );
    void animate(
      "#an-text",
      {
        top: `calc(${size}*0.25)`,
        right: `calc(${size}*0.25)`,
        opacity: "100%",
      },
      options,
    );
    void animate(
      "#art-text",
      {
        top: `calc(${size}*0.55)`,
        right: `calc(${size}*0.55)`,
        opacity: "100%",
      },
      options,
    );
    void animate("#school-text", { opacity: "100%" }, options);
    void animate(
      "#for-text",
      { opacity: "100%", right: `calc(${size}*0.5)` },
      options,
    );
    void animate(
      "#the-text",
      {
        opacity: "100%",
        right: `calc(${size}*0.25)`,
        top: `calc(${size}*1.8)`,
      },
      options,
    );
    void animate(
      "#wild-text",
      { opacity: "100%", right: `calc(${size}*0.6)` },
      options,
    );
    void animate("#wild-text", { opacity: "100%" }, options);
    void animate(
      "#first-figure",
      {
        top: 0,
        left: "21%",
        borderRadius: "0% 0% 0% 0%",
        backgroundColor: colors.matteBlack,
      },
      options,
    );
    void animate(
      "#second-figure",
      {
        top: `calc(${bottom.second})`,
        left: 0,
        borderRadius: "10% 10% 10% 10%",
        backgroundColor: colors.matteBlack,
      },
      options,
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
      options,
    );
    await animate(
      "#fourth-figure",
      {
        top: `calc(${size} - ${bottom.second} + ${bottom.third} + ${bottom.forth})`,
        left: 0,
        borderRadius: "100% 100% 100% 100%",
        backgroundColor: colors.matteBlack,
      },
      options,
    );
  };

  const handleAnimation = async () => {
    await firstKeyFrame({ duration: 1.2 });
    await secondKeyFrame({ duration: 0.2, delay: 0.5 });
    await thirdKeyFrame({ duration: 1.2, delay: 0.5 });
    await fourthKeyFrame({ duration: 1.2, delay: 0.5 });
    await fifthKeyFrame({ duration: 1.2, delay: 0.5 });
    await sixthKeyFrame({ duration: 1.2, delay: 0.5 });
    await seventhKeyFrame({ duration: 1.2, delay: 0.5 });
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
      void finalFrame({ duration: 1.2 });
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
        className="pt-navbar-mobile"
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
