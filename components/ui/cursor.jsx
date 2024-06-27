"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/utils/cn";

const Cursor = ({ isMouseEnter }) => {
  const cursorSize = 35;
  const cursorRef = useRef(null);
  useEffect(() => {
    const mouseMoveHandler = (e) => {
      const cursor = cursorRef.current;
      if (cursor) {
        cursor.style.transform = `translate(${e.clientX - cursorSize / 2}px, ${
          e.clientY - cursorSize / 2
        }px)`;
      }
    };

    window.addEventListener("mousemove", mouseMoveHandler);

    return () => window.removeEventListener("mousemove", mouseMoveHandler);
  }, []);
  useEffect(() => {
    const handleMouseEnter = (e) => {
      const target = e.target.getBoundingClientRect();
      const cursor = cursorRef.current;
      if (cursor) {
        cursor.style.width = `${target.width + 10}px`;
        cursor.style.height = `${target.height + 10}px`;
        cursor.style.borderRadius = "0";
        cursor.style.transition = "0.1s";
      }
    };

    const handleMouseLeave = () => {
      const cursor = cursorRef.current;
      if (cursor) {
        cursor.style.width = `${cursorSize}px`;
        cursor.style.height = `${cursorSize}px`;
        cursor.style.borderRadius = "50%";
        cursor.style.transition = "0.1s";
      }
    };

    const hoverElements = document.querySelectorAll(
      ".custom-cursor-hover-target"
    );
    hoverElements.forEach((el) => {
      el.addEventListener("mouseenter", handleMouseEnter);
      el.addEventListener("mouseleave", handleMouseLeave);
    });

    return () => {
      hoverElements.forEach((el) => {
        el.removeEventListener("mouseenter", handleMouseEnter);
        el.removeEventListener("mouseleave", handleMouseLeave);
      });
    };
  }, []);

  return (
    <motion.div
      className={cn(
        !isMouseEnter && "hidden",
        ` h-[30px] w-[30px] rounded-[50%] fixed top-0 left-0 z-100 pointer-events-none border-2 border-[#fefefe] bg-transparent`
      )}
      ref={cursorRef}
    />
  );
};

export default Cursor;
