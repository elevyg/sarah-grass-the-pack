"use client";
import React from "react";
import { motion } from "framer-motion";

const GeometricFigures = () => {
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

  return (
    <div
      style={{ height: diagonal, width: containerWidth }}
      className="relative block origin-center"
    >
      <div
        style={{ height: size, width: size, display: "block" }}
        className="absolute left-0 top-0 inline-block flex-shrink-0  rounded-full  bg-matteBlack"
      />
      <motion.div
        style={{
          height: size,
          width: size,
          bottom: `calc(${diagonal}/2 - ${size}/2)`,
          left: `calc(${size} + ${left.second})`,
          display: "block",
        }}
        className="absolute inline-block flex-shrink-0 rotate-45 bg-matteBlack"
      />
      <div
        style={{
          height: size,
          width: size,
          left: `calc(${size} + ${left.second} + ${left.third})`,
          bottom: 0,
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
        className="font-arizona absolute  w-full origin-top-left text-center text-[2vw] capitalize text-[#fffcf4]"
      >
        An art school for the Wild
      </motion.div>
    </div>
  );
};

export default GeometricFigures;
