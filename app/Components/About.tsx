"use client";
import React from "react";
import { ABOUT_TEXT } from "../constants";
import { motion } from "framer-motion";

export const About = () => {
  return (
    <motion.div
      whileInView={{ opacity: 1, y: 0 }}
      initial={{ y: -50, opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="border-b border-neutral-800 pb-4"
    >
      <h1 className="my-20 text-center text-4xl">
        About
        <span className="text-neutral-500"> Me</span>
      </h1>
      <div className="text-white">
        <div className="w-full">
          <p className="py-3 mb-10 font-light tracking-tighter">{ABOUT_TEXT}</p>
        </div>
      </div>
    </motion.div>
  );
};
