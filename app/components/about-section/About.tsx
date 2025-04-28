import React, { useEffect } from "react";
import Link from "next/link";
import { Syne } from "next/font/google";
import { useView } from "@/contexts/ViewContext";
import { useInView } from "react-intersection-observer";
import AnimatedBody from "../ui/AnimatedBody";
import AnimatedTitle from "../ui/AnimatedTitle";

const syne = Syne({ subsets: ["latin"] });

export default function About() {
  const { setSectionInView } = useView();

  const { ref, inView } = useInView({
    threshold: 0.2,
    rootMargin: "-100px 0px",
  });

  useEffect(() => {
    if (inView) setSectionInView("about");
  }, [inView, setSectionInView]);

  return (
    <section ref={ref} className="pt-24 md:pt-[150px]" id="about">
      <AnimatedTitle
        wordSpace={"mr-[14px]"}
        charSpace={"mr-[0.001em]"}
        className={`uppercase ${syne.className} antialiased text-4xl md:text-5xl xl:text-6xl font-bold opacity-80`}
      >
        Crafting Digital Solutions with Deluge Expertise
      </AnimatedTitle>

      <div className="grid grid-cols-1 lg:grid-cols-[8.5fr_3.5fr] gap-8 mt-6">
        <div className="grid grid-cols-1 antialiased gap-6 text-white/80 text-xl md:text-2xl">
          <AnimatedBody className="leading-[34px] md:leading-[39px]">
          I am a dedicated and passionate individual with a strong foundation in 
          technology and software development. I pursued a Bachelor of Science in 
          Computer Science, where I honed my skills and gained a deep understanding
           of programming and system design. My hard work and commitment were recognized 
           when I was awarded Best in Program Developer during my studies, an achievement 
           that reflects my ability to deliver innovative and efficient solutions.




          </AnimatedBody>
          <AnimatedBody className="leading-[34px] md:leading-[39px]">
          Throughout my academic and professional journey, I have developed proficiency 
          in a wide range of programming languages and frameworks, including HTML, CSS, 
          JavaScript, TypeScript, Next.js, React.js, Node.js, C++, C#, Java, and Deluge. 
          These skills have equipped me to tackle diverse projects, from front-end web 
          development to back-end systems and software applications. My adaptability and 
          eagerness to learn enable me to stay current with the latest technologies and 
          deliver results that exceed expectations.
          </AnimatedBody>
          <AnimatedBody className="inline leading-[34px] md:leading-[39px]">
          Beyond technical expertise, I value collaboration and problem-solving. I thrive 
          in environments where I can contribute to meaningful projects and bring creative 
          ideas to life. Whether its building dynamic web applications, optimizing system 
          performance, or creating user-friendly interfaces, I am driven by the opportunity 
          to make a positive impact through technology. Wanna learn more? 
          Here&apos;s <br className="hidden md:block" />
            <Link
              className="underline"
              href={
                "https://drive.google.com/file/d/17unARTHuw7C2vbVsC96wRYgVl4SX7xvu/view?usp=sharing"
              }
            >
              my résumè
            </Link>
            .
          </AnimatedBody>
        </div>

        <div className="grid grid-cols-1 gap-4">
          <div>
            <AnimatedTitle
              wordSpace={"mr-[0.5ch]"}
              charSpace={"mr-[0.001em]"}
              className="font-bold antialiased text-xl md:text-2xl mb-2"
            >
              Frontend Tools
            </AnimatedTitle>
            <AnimatedBody className="text-white/60 text-base md:text-xl leading-8">
              JavaScript(ES6+), React, Next.js, TypeScript, Redux, Redux
              Toolkit, React Query, HTML5, Git/GitHub, React Hook Form, Formik.
            </AnimatedBody>
          </div>
          <div>
            <AnimatedTitle
              wordSpace={"mr-[0.5ch]"}
              charSpace={"mr-[0.001em]"}
              className="font-bold antialiased text-xl md:text-2xl mb-2"
            >
              UI Libraries
            </AnimatedTitle>
            <AnimatedBody className="text-white/60 text-base md:text-xl leading-8">
              CSS3/SCSS/SASS, Tailwind CSS, Styled Components, Chakra UI, Framer
              Motion, Bootstrap, ReCharts.
            </AnimatedBody>
          </div>
          <div>
            <AnimatedTitle
              wordSpace={"mr-[0.5ch]"}
              charSpace={"mr-[0.001em]"}
              className="font-bold antialiased text-xl md:text-2xl mb-2"
            >
              Design Tools
            </AnimatedTitle>
            <AnimatedBody className="text-white/60 text-base md:text-xl leading-8">
              Figma, FigJam, UX Research, UI Design, Prototyping.
            </AnimatedBody>
          </div>
        </div>
      </div>
    </section>
  );
}
