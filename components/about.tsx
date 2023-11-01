"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      {/* <p className="mb-3">
        
        I have always wanted to become someone that{" "}
        <span className="font-medium">can do anything and pursue whatever she can think</span>, I decided to pursue my
         whatever she can think. 
        <span className="font-medium">With this kind of want,</span>.{" "}
        I obtained certain skills, which I think prior of starting the journey, are impossible to gain. 
      </p> */}

    </motion.section>
  );
}