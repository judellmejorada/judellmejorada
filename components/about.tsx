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
      <p className="mb-3">
        
        I have always wanted to become someone that{" "}
        <span className="font-medium">can do anything and pursue whatever she decided to be.</span>
        <span className="font-medium"> With this kind of want,</span>{" "}
        I obtained certain skills are impossible(at first) to gain. 
        Being in the tech field has given me the imminent intense training of <span className="font-medium">problem solving</span>{" "} 
        in both stressful and enjoyable way by doing tasks that were given to me despite the level of difficulty, especially in 
        programming— which I sometimes love. I am currently looking for a{" "}
        <span className="font-medium">part time position</span> as a junior web developer or an Analyst.
      </p>

      <p className="mb-3">
        When I am not coding and free of any academic tasks I often read books, do online selling tasks, and listen to music. 
        For my outdoor hobbies, I usually play badminton, and archery. I am always eager to learn new things that challenge 
        my ignorant mind that is why I am into learning my way to my own financial freedom, which will surely help myself and people around me.
      </p>




  

    </motion.section>
  );
}