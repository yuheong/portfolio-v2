import { useRef } from "react";
import Header from "../components/Header";
import Socials from "../components/Socials";
import WorkCard from "../components/WorkCard";
import ExperienceCard from "../components/ExperienceCard";
import EducationCard from "../components/EducationCard";
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
      </Head>
      <div className="container mx-auto mb-10">
        <Header
          handleWorkScroll={() => handleScroll(workRef)}
          handleEduScroll={() => handleScroll(educationRef)}
          handleProjectsScroll={() => handleScroll(portfolioRef)}
          handleAboutScroll={() => handleScroll(aboutRef)}
          handleContactAction={() => handleScroll(contactRef)}
        />
        <div className="laptop:mt-20 mob:mt-10">
          <div className="flex flex-row items-end">
            <div className="mt-5">
              <h1
                ref={textOne}
                className="text-8xl mob:text-3xl laptop:text-8xl mob:p-2 text-bold w-4/5 mob:w-full laptop:w-4/5"
              >
                {data.headerTaglineOne}
              </h1>
              <h1
                ref={textTwo}
                className="text-8xl mob:text-3xl laptop:text-8xl mob:p-2 text-bold w-4/5 mob:w-full laptop:w-4/5"
              >
                {data.headerTaglineTwo}
              </h1>
              {/* <h1
              ref={textThree}
              className="text-8xl mob:text-3xl laptop:text-8xl mob:p-2 text-bold w-4/5 mob:w-full laptop:w-4/5">
              {data.headerTaglineThree}
            </h1>
            <h1
              ref={textFour}
              className="text-8xl mob:text-3xl laptop:text-8xl mob:p-2 text-bold w-4/5 mob:w-full laptop:w-4/5">
              {data.headerTaglineFour}
            </h1> */}
            </div>
            <img className="w-6/12 mb-16 mr-2" src="images/me.png" />
          </div>

          <Socials className="mt-5 mob:mt-2 laptop:mt-5" />
        </div>
        <div
          className="mt-40 mob:mt-10 laptop:mt-40 mob:p-2 laptop:p-0"
          ref={workRef}
        >
          <h1 className="text-2xl text-bold">Work Experience</h1>
          {data.experiences.map((experience, index) => (
            <ExperienceCard
              key={index}
              title={experience.title}
              companyName={experience.companyName}
              location={experience.location}
              description={experience.description}
              years={experience.years}
            />
          ))}
        </div>
        <div
          className="mt-40 mob:mt-10 laptop:mt-40 mob:p-2 laptop:p-0"
          ref={educationRef}
        >
          <h1 className="text-2xl text-bold">Education</h1>
          {data.education.map((edu, index) => (
            <EducationCard
              key={index}
              title={edu.title}
              school={edu.school}
              years={edu.years}
              cap={edu.cap}
              specialization={edu.specialization}
              grade={edu.grade}
            />
          ))}
        </div>
        <div
          className="mt-40 mob:mt-10 laptop:mt-40 mob:p-2 laptop:p-0"
          ref={portfolioRef}
        >
          <h1 className="text-2xl text-bold">Portfolio</h1>
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
        <div
          className="mt-40 mob:mt-2 laptop:mt-40 mob:p-2 laptop:p-0"
          ref={aboutRef}
        >
          <h1 className="text-2xl text-bold">About</h1>
          <p className="m-5 mob:m-0 laptop:m-5 mob:mt-2 laptop:ml-0 ml-0 text-3xl mob:text-xl laptop:text-3xl w-3/5 mob:w-full laptop:w-3/5">
            {data.aboutpara}
          </p>
        </div>
        <div ref={contactRef}>
          <Footer />
        </div>
      </div>
    </>
  );
}
