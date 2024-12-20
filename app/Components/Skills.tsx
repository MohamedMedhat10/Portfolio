"use client";
import React, { useEffect, useRef } from "react";

export const Skills = () => {
  const scrollerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const scroller = scrollerRef.current;
    if (!scroller) return;

    const scrollerInner = scroller.querySelector(
      ".scroller__inner"
    ) as HTMLElement; // Cast to HTMLElement
    if (scrollerInner) {
      const scrollerContent = Array.from(scrollerInner.children);

      // Duplicate the items for the infinite scrolling effect
      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true) as HTMLElement; // Cast to HTMLElement
        duplicatedItem.setAttribute("aria-hidden", "true");
        scrollerInner.appendChild(duplicatedItem);
      });

      // Optionally, handle the speed by changing the animation duration dynamically if needed
      const speed = scroller.getAttribute("data-speed") || "10s";
      scrollerInner.style.animationDuration = speed; // Now it's safe to access the style property
    }
  }, []);

  return (
    <div className="scroller" data-speed="10s" ref={scrollerRef}>
      <ul className="tag-list scroller__inner">
        <li>OOP</li>
        <li>Algorithms</li>
        <li>SOLID Principles</li>
        <li>Github</li>
        <li>Agile</li>
        <li>SEO</li>
        <li>Problem Solving</li>
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
        <li>C#</li>
        <li>React</li>
        <li>NextJs</li>
        <li>JQuery</li>
        <li>Bootstrap</li>
        <li>Tailwind</li>
        <li>.NET Core</li>
        <li>Web API</li>
        <li>Database Administration</li>
        <li>SQL</li>
        <li>NoSQL</li>
        <li>Performance Testing</li>
        <li>API Testing</li>
        <li>Penetration Testing</li>
      </ul>
    </div>
  );
};
