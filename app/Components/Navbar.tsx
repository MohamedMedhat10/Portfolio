import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
export const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-end text-white  py-6">
      <div className="flex flex-shrink-0 items-center">
        <div className="m-8 flex items-center justify-center gap-10 text-5xl">
          <a
            target="_blank"
            href="https://www.linkedin.com/in/mohamed-medhat-mohamed-660023177/"
          >
            <FaLinkedin></FaLinkedin>
          </a>
          <a
            target="_blank"
            href="https://github.com/MohamedMedhat10?tab=repositories"
          >
            <FaGithub></FaGithub>
          </a>
        </div>
      </div>
    </nav>
  );
};
