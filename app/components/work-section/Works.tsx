import React, { useEffect } from "react";
import FolioCard from "./FolioCard";
import Title from "../ui/Title";
import { useView } from "@/contexts/ViewContext";

// @ts-ignore
import "intersection-observer";
import { useInView } from "react-intersection-observer";
import Timeline from "./Timeline";

export default function Works() {
  const { setSectionInView } = useView();

  const works = [
    {
      title: "Zoho CRM",
      gitLink: "https://github.com/aidrain24",
      liveLink: "https://github.com/aidrain24",
      about:
        "A Zoho CRM Certified Administrator is a professional accredited by Zoho to manage, customize, and optimize Zoho CRM systems, ensuring efficient operations and alignment with business needs.",
      stack: ["Zoho CRM", "DELUGE"],
      img: "/img2.png",

    },
    {
      title: "Javascript",
       gitLink: "https://github.com/aidrain24",
      liveLink: "https://github.com/aidrain24",
      about:
        "Learning JavaScript as a beginner involves understanding its basics, such as variables, data types, loops, and functions, progressing to concepts like DOM manipulation, events, and APIs, and applying these skills through hands-on practice and projects to build interactive web applications.",
      stack: ["javascript", "typescript", "next.js", "React.js", "Node.js"],

      img: "/img1.png",

    },
    {
      title: "Zoho CRM Partner",
      gitLink: "https://github.com/aidrain24",
      liveLink: "https://github.com/aidrain24",
      about:
        "The Zoho CRM Partner Training Program Certificate of Accreditation is an official credential awarded to individuals or organizations that complete Zoho's partner training program. This program equips participants with in-depth knowledge and skills to implement, customize, and manage Zoho CRM solutions for clients. It demonstrates expertise in Zoho CRM functionalities and affirms the participant's capability to provide professional CRM services as an accredited Zoho partner.",
      stack: ["traning", "Zoho CRM"],
      img: "/img3.png",
    },
    {
      title: "HTML, CSS, JS",
      gitLink: "https://github.com/aidrain24",
      liveLink: "https://github.com/aidrain24",
      about:
        "A responsive portfolio website built with HTML, CSS, and JavaScript dynamically adapts to various screen sizes, showcasing your skills, projects, and contact information in a sleek and interactive layout.",
      stack: ["html", "css", "javascript"],
      img: "/img4.png",
    },
    {
      title: "Multi-step form",
      gitLink: "https://github.com/aidrain24",
      liveLink: "https://github.com/aidrain24",
      about:
        "Deluge on a Luge is a playful phrase that encourages learning Zoho's Deluge scripting language to automate and customize workflows across Zoho applications like CRM and Creator.",
      stack: ["deluge"],
      img: "/img5.png",
    },
  ];

  const { ref, inView } = useInView({
    threshold: 0.1,
    rootMargin: "-100px 0px",
  });

  useEffect(() => {
    if (inView) setSectionInView("work");
  }, [inView, setSectionInView]);

  return (
    <section
      className="flex flex-col gap-6 md:gap-10 pt-[110px]"
      ref={ref}
      id="work"
    >
      <Title>Certificates</Title>
      {works.map((work, index) => (
        <FolioCard
          key={index}
          img={work.img}
          title={work.title}
          gitLink={work.gitLink}
          liveLink={work.liveLink}
          about={work.about}
          stack={work.stack}
        />
      ))}

      <Timeline />
    </section>
  );
}
