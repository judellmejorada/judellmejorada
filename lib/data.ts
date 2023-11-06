import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import sample1 from "@/public/sample.png";
import sample2 from "@/public/sample.png";
import sample3 from "@/public/sample.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Information Technology Intern",
    location: "Quezon City Local Government - City Real Estate Management and Control Office",
    description: "",
    icon: React.createElement(LuGraduationCap),
    date: "2023",
  },
  {
    title: "Panelist | Lead Developer | Backend Developer",
    location: "Polytechnic University of the Philippines - Quezon City Branch",
    description:
      "",
    icon: React.createElement(CgWorkAlt),
    date: "2020 - 2023",
  },
  {
    title: "Part-time Online Seller",
    location: "Quezon City | Various Online Platforms",
    description:"",
    icon: React.createElement(FaReact),
    date: "2019 - present",
  },
] as const;

export const projectsData = [
  {
    title: "BitBo: Barangay Management System",
    description: "",
    tags: ["Vue.js", "PostgreSQL", "API", "AWS"],
    imageUrl: sample1,
  },
  {
    title: "HappySmile: Dental Clinic Management System",
    description:
      "",
    tags: ["Node.js", "Tailwind", "Heroku"],
    imageUrl: sample2,
  },
  {
    title: "ResearchHub: Research Management System",
    description:
      "",
    tags: [ "SQL", "Tailwind", "Vercel"],
    imageUrl: sample3,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Bootstrap",
  "PostgreSQL",
  "MySQL",
  "Python",
  "PHP",
  "Postman",
] as const;