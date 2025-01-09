"use client";
import { Syne } from "next/font/google";
import Title from "../ui/Title";
import TimelineItem from "./TimelineItem";

const syne = Syne({ subsets: ["latin"] });

const TimelineData = [
  {
    companyImg: "/bluechip.svg",
    jobTitle: "Zoho Junior Developer",
    company: "The CRM Carpenters",
    jobType: "Developer",
    duration: "Jan. 2021 - present",
    stuffIDid: [
      "Assisted in designing and developing custom applications using Zoho Creator to streamline business operations.",
      "Integrated Zoho CRM and other Zoho tools with third-party applications to enhance workflow efficiency.",
      "Created and optimized workflows, automations, and reports to meet client requirements.",
      "Provided technical support and troubleshooting for Zoho platform issues to ensure seamless functionality.",
      "Collaborated with cross-functional teams to deliver tailored solutions and improve user experience.",
    ],
  },
  {
    companyImg: "/work.svg",
    jobTitle: "Machine Operator",
    company: "Grand Alpha Tech Int'l Corp.",
    jobType: "Regular",
    duration: "Feb. 07, 2014 - Aug. 31, 2020",
    stuffIDid: [
      "Operated and maintained high-performance production machinery to ensure efficient manufacturing of Chips Delight cookies and Smileys biscuits.",
      "Monitored production processes to meet quality standards and achieve daily output targets.",
      "Conducted routine equipment checks and troubleshooting to minimize downtime and maintain smooth operations.",
      "Collaborated with the production team to optimize workflow and address operational challenges promptly.",
      "Ensured compliance with safety and hygiene protocols in a fast-paced food manufacturing environment.",
    ],
  },
  {
    companyImg: "/work1.svg",
    jobTitle: "Machine Operator",
    company: "Grand Alpha Tech Int'l Corp.",
    jobType: "Contractual",
    duration: "Aug. 28, 2013 - Jan.27, 2014",
    stuffIDid: [
      "Operated and maintained high-performance production machinery to ensure efficient manufacturing of Chips Delight cookies and Smileys biscuits.",
      "Monitored production processes to meet quality standards and achieve daily output targets.",
      "Conducted routine equipment checks and troubleshooting to minimize downtime and maintain smooth operations.",
      "Collaborated with the production team to optimize workflow and address operational challenges promptly.",
      "Ensured compliance with safety and hygiene protocols in a fast-paced food manufacturing environment.",
    ],
  },
  {
    companyImg: "/work2.svg",
    jobTitle: "Grinding Operator",
    company: "Cybermate Industrial Corporation",
    jobType: "Blow Moulding",
    duration: "Feb. 07, 2013 - July 07, 2013",
    stuffIDid: [
      "Operated and maintained grinding machines for the production of high-quality plastic bottles, including those for products like Rexona, shampoo, and engine oil.",
      "Monitored machinery settings to ensure precision and consistency in bottle molding and production.",
      "Performed regular maintenance and troubleshooting to minimize downtime and enhance equipment performance.",
      "Ensured compliance with safety protocols and quality standards throughout the production process.",
      "Collaborated with team members to optimize workflow and achieve daily production targets efficiently.",
    ],
  },
  {
    companyImg: "/paint-brush.svg",
    jobTitle: "Painter",
    company: "GSEHVA",
    jobType: "Labour",
    duration: "June 27, 2011 - Dec. 10, 2011",
    stuffIDid: [
      "Prepared surfaces by cleaning, sanding, and priming to ensure a smooth and durable paint application.",
      "Applied high-quality paint to interior and exterior walls, ceilings, and other surfaces with precision and attention to detail.",
      "Mixed and matched colors to meet client preferences and project requirements.",
      "Maintained tools and equipment, ensuring a clean and organized workspace for efficient operations.",
      "Communicated with clients to understand their vision and deliver exceptional results that enhanced the aesthetic appeal of their homes.",
    ],
  },
];

export default function Timeline() {
  return (
    <div className="mt-10 md:mt-[110px]">
      <Title> Work experience</Title>

      {/* THE THING, AFTER WHICH I WOULD DETERMINE THE HEIGHT */}
      <div className="flex mt-6 gap-4 pl-3">
        <div className="w-3 h-auto bg-gradient-to-b from-white to-transparent" />

        <div className="flex flex-col gap-10">
          {TimelineData.map((item, index) => (
            <TimelineItem
              key={index}
              companyImg={item.companyImg}
              jobTitle={item.jobTitle}
              company={item.company}
              jobType={item.jobType}
              duration={item.duration}
              stuffIDid={item.stuffIDid}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
