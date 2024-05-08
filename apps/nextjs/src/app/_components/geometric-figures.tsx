"use client";
import React from "react";
import { motion } from "framer-motion";

const GeometricFigures = () => {
  const dimension = 200;
  const size = `${dimension}px`;
  const diagonal = `${dimension * Math.sqrt(2)}px`;
  const left = {
    second: `${size}*0.1`,
    third: `${size}*0.75`,
    forth: `${size}*0.75`,
  };

  const containerWidth = `calc(${size}*2 - ${left.second} + ${left.third} + ${left.forth})`;
  return (
    <div
      style={{ height: diagonal, width: containerWidth }}
      className="relative block origin-center  bg-purple-400"
    >
      <div
        style={{ height: size, width: size, display: "block" }}
        className="absolute left-0 top-0 inline-block flex-shrink-0  rounded-full bg-blue-400"
      />
      <motion.div
        style={{
          height: size,
          width: size,
          bottom: `calc(${diagonal}/2 - ${size}/2)`,
          left: `calc(${size} - ${left.second})`,
          display: "block",
        }}
        className="absolute inline-block flex-shrink-0 rotate-45 bg-green-400"
      />
      <div
        style={{
          height: size,
          width: size,
          left: `calc(${size} - ${left.second} + ${left.third})`,
          bottom: 0,
          display: "block",
        }}
        className="absolute  inline-block flex-shrink-0 origin-center bg-red-400"
      />
      <div
        style={{
          height: size,
          width: size,
          left: `calc(${size} - ${left.second} + ${left.third} + ${left.forth})`,
          borderRadius: `calc(${size}*0.12)`,
          display: "block",
        }}
        className="absolute inline-block flex-shrink-0 bg-yellow-400"
      />
      <div className="absolute bottom-1/2 left-1/2 right-0 top-1/2 z-10 w-full origin-top-left bg-red-400  text-left text-[40px] font-light capitalize text-[#fffcf4]">
        An art school for the Wild
      </div>
    </div>
  );
};

export default GeometricFigures;
