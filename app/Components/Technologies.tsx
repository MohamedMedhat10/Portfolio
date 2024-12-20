"use client";
import React from "react";
import { RiReactjsLine } from "react-icons/ri";
import { TbBrandNextjs } from "react-icons/tb";
import { TbSql } from "react-icons/tb";
import { SiDotnet } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
import { motion } from "framer-motion";
import { Skills } from "./Skills";

const iconVariants = (duration: number) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse" as const,
    },
  },
});

export const Technologies = () => {
  return (
    <motion.div
      whileInView={{ opacity: 1, y: 0 }}
      initial={{ y: -50, opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="border-b border-neutral-800 pb-24"
    >
      <h1 className="my-20 text-center text-4xl">Technologies</h1>
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ x: -300, opacity: 0 }}
        transition={{ duration: 1 }}
        className="flex flex-wrap items-center justify-center gap-4"
      >
        <motion.div
          variants={iconVariants(2)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <SiDotnet className="text-7xl text-violet-800"></SiDotnet>
        </motion.div>

        <motion.div
          variants={iconVariants(2.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <RiReactjsLine className="text-7xl text-cyan-400"></RiReactjsLine>
        </motion.div>

        <motion.div
          variants={iconVariants(3)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <TbBrandNextjs className="text-7xl text-white"></TbBrandNextjs>
        </motion.div>

        <motion.div
          variants={iconVariants(3.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <TbSql className="text-7xl text-amber-800"></TbSql>
        </motion.div>

        <motion.div
          variants={iconVariants(4)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <SiTailwindcss className="text-7xl text-teal-800"></SiTailwindcss>
        </motion.div>
      </motion.div>
      <br></br>
      <br></br>
      <br></br>
      <Skills></Skills>
    </motion.div>
  );
};
