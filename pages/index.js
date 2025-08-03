import { useRef } from "react";
import Image from "next/image";
import Header from "../components/Header";
import Socials from "../components/Socials";
import WorkCard from "../components/WorkCard";
import ExperienceCard from "../components/ExperienceCard";
import EducationCard from "../components/EducationCard";
import SkillsCard from "../components/SkillsCard";
import { useIsomorphicLayoutEffect } from "../utils";
import { stagger } from "../animations";
import Footer from "../components/Footer";
import Head from "next/head";

// Local Data
import data from "../personalData";

export default function Home() {
  // Refs
  const workRef = useRef();
  const educationRef = useRef();
  const skillsRef = useRef();
  const portfolioRef = useRef();
  const aboutRef = useRef();
  const contactRef = useRef();
  const textOne = useRef();
  const textTwo = useRef();
  const textThree = useRef();
  const textFour = useRef();

  // Handling Scroll
  const handleScroll = (ref) => {
    window.scrollTo({
      top: ref.current.offsetTop - 70,
      left: 0,
      behavior: "smooth",
    });
  };

  useIsomorphicLayoutEffect(() => {
    stagger(
      [textOne.current, textTwo.current, textThree.current, textFour.current],
      { y: 30 },
      { y: 0 }
    );
  }, []);

  return (
    <>
      <Head>
        <title>{data.name}</title>
        <meta name="description" content="Yuhe's Portfolio - Software Engineer" />
      </Head>
      <Header
        handleWorkScroll={() => handleScroll(workRef)}
        handleEduScroll={() => handleScroll(educationRef)}
        handleSkillsScroll={() => handleScroll(skillsRef)}
        handleProjectsScroll={() => handleScroll(portfolioRef)}
        handleAboutScroll={() => handleScroll(aboutRef)}
        handleContactAction={() => handleScroll(contactRef)}
      />
      <div className="container mx-auto mb-10 px-4">
        
        {/* Hero Section */}
        <div className="laptop:mt-20 mob:mt-10">
          <div className="flex flex-row items-end">
            <div className="mt-5">
              <h1
                ref={textOne}
                className="text-8xl mob:text-3xl laptop:text-8xl mob:p-2 text-bold w-4/5 mob:w-full laptop:w-4/5 text-gray-800"
              >
                {data.headerTaglineOne}
              </h1>
              <h1
                ref={textTwo}
                className="text-8xl mob:text-3xl laptop:text-8xl mob:p-2 text-bold w-4/5 mob:w-full laptop:w-4/5 text-gray-800"
              >
                {data.headerTaglineTwo}
              </h1>
            </div>
            <div className="w-7/12 mb-16 mr-2 bg-white p-8 rounded-2xl shadow-lg">
              <Image
                src="/images/me.png"
                alt="Yuhe Ong"
                width={500}
                height={500}
                className="w-full"
              />
            </div>
          </div>

          <Socials className="mt-5 mob:mt-2 laptop:mt-5" />
        </div>

        {/* Work Experience Section */}
        <div
          className="mt-40 mob:mt-10 laptop:mt-40 mob:p-2 laptop:p-0"
          ref={workRef}
        >
          <h1 className="section-title">Work Experience</h1>
          <div className="space-y-6">
            {data.experiences.map((experience, index) => (
              <div key={index} className="card-hover">
                <ExperienceCard
                  title={experience.title}
                  companyName={experience.companyName}
                  location={experience.location}
                  description={experience.description}
                  years={experience.years}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Education Section */}
        <div
          className="mt-40 mob:mt-10 laptop:mt-40 mob:p-2 laptop:p-0"
          ref={educationRef}
        >
          <h1 className="section-title">Education</h1>
          <div className="space-y-6">
            {data.education.map((edu, index) => (
              <div key={index} className="card-hover">
                <EducationCard
                  title={edu.title}
                  school={edu.school}
                  years={edu.years}
                  cap={edu.cap}
                  specialization={edu.specialization}
                  grade={edu.grade}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Skills Section */}
        <div
          className="mt-40 mob:mt-10 laptop:mt-40 mob:p-2 laptop:p-0"
          ref={skillsRef}
        >
          <h1 className="section-title">Skills & Technologies</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {data.skills.map((skill, index) => (
              <div key={index} className="card-hover">
                <SkillsCard
                  category={skill.category}
                  technologies={skill.technologies}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Portfolio Section */}
        <div
          className="mt-40 mob:mt-10 laptop:mt-40 mob:p-2 laptop:p-0"
          ref={portfolioRef}
        >
          <h1 className="section-title">Portfolio</h1>
          <div className="mt-10 mob:mt-5 laptop:mt-10 grid grid-cols-2 mob:grid-cols-1 laptop:grid-cols-2 gap-4">
            {data.projects.map((project, index) => (
              <WorkCard
                key={index}
                img={project.imageSrc}
                name={project.title}
                description={project.description}
                url={project.url}
              />
            ))}
          </div>
        </div>

        {/* About Section */}
        <div
          className="mt-40 mob:mt-2 laptop:mt-40 mob:p-2 laptop:p-0"
          ref={aboutRef}
        >
          <h1 className="section-title">About</h1>
          <div className="glass-effect rounded-2xl p-8">
            <p className="text-xl mob:text-lg laptop:text-xl text-gray-700 leading-relaxed">
              {data.aboutpara}
            </p>
          </div>
        </div>

        {/* Contact Section */}
        <div ref={contactRef}>
          <Footer />
        </div>
      </div>
    </>
  );
}
