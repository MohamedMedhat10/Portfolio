"use client";
import React from "react";
import { CONTACT } from "../constants";
import { motion } from "framer-motion";

export const Contact = () => {
  return (
    <motion.div
      whileInView={{ opacity: 1, y: 0 }}
      initial={{ y: -100, opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="border-b text-white border-neutral-900 pb-20"
    >
      <h1 className="my-10 text-center text-4xl">Contact Me</h1>
      <div className="text-center tracking-tighter">
        <p className="my-4">{CONTACT.address}</p>
        <p className="my-4">{CONTACT.phoneNo}</p>
        <a href="#" className="border-b">
          {CONTACT.email}
        </a>
      </div>
    </motion.div>
  );
};
