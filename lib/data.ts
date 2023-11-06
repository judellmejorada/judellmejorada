import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import researchhub from "@/public/researchhub.png";
import bitbo from "@/public/bitbo.png";
import hrd from "@/public/hrd.png";
import hs from "@/public/hs.png";


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
    icon: React.createElement(CgWorkAlt),
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
    icon: React.createElement(CgWorkAlt),
    date: "2019 - present",
  },
] as const;

export const projectsData = [
  {
    title: "BitBo: Barangay Management System",
    description: "This system are composed of barangay blotter, somun, certificates, permit, and appointment .",
    tags: ["Vue.js", "PostgreSQL", "API", "AWS"],
    imageUrl: bitbo,
  },
  {
    title: "HappySmile: Dental Clinic Management System",
    description: "This intends to provide an efficient to manage appointments and related activities",
    tags: ["Node.js", "Bootstrap", "Heroku", "PHP", "CodeIgniter", "MySQL", "API"],
    imageUrl: hs,
  },
  {
    title: "ResearchHub: Research Management System",
    description:"This was created to assist the university and staff in managing researchers and their researches through a one system.",
    tags: [ "SQL", "Tailwind", "Vercel", "Railway", "React.JS"],
    imageUrl: researchhub,
  },
  {
    title: "Elysium:",
    description:"This was intended to help the landlord and the tenant to monitor their rent.",
    tags: [ "PHP", "Bootstrap", "MySQL"],
    imageUrl: hrd,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "Node.js",
  "Git",
  "Tailwind",
  "Bootstrap",
  "PostgreSQL",
  "MySQL",
  "PHP",
  "Postman",
] as const;