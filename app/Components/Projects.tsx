"use client";
import React from "react";
import { PROJECTS } from "../constants";
import { motion } from "framer-motion";
import Image from "next/image";

export const Projects = () => {
  return (
    <motion.div
      whileInView={{ opacity: 1, y: 0 }}
      initial={{ y: -100, opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="border-b border-neutral-900 pb-4"
    >
      <h1 className="my-20 text-center text-4xl">Projects</h1>
      <div>
        {PROJECTS.map((project, index) => (
          <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ x: -300, opacity: 0 }}
              transition={{ duration: 1 }}
              className="w-full lg:w-1/4"
            >
              <a href={project.link} target="_blank">
                <Image
                  src={project.image}
                  width={150}
                  height={150}
                  alt={project.title}
                  className="mb-6 rounded"
                />
              </a>
            </motion.div>
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ x: 300, opacity: 0 }}
              transition={{ duration: 1 }}
              className="w-full max-w-xl lg:w-3/4"
            >
              <a href={project.link} target="_blank">
                <h6 className="mb-2 text-white font-semibold">
                  {project.title}
                </h6>
              </a>
              <p className="mb-4 text-neutral-400">{project.description}</p>
              {project.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-800"
                >
                  {tech}
                </span>
              ))}
            </motion.div>
          </div>
        ))}
      </div>
    </motion.div>
  );
};
