import Button from "../Button";
import { useRouter } from "next/router";
// Local Data
import data from "../../personalData";

const Header = ({
  handleWorkScroll,
  handleEduScroll,
  handleSkillsScroll,
  handleProjectsScroll,
  handleAboutScroll,
  handleContactAction,
  isBlog,
}) => {
  const router = useRouter();
  return (
    <div className="mt-10 flex flex-row items-center justify-between sticky top-0 z-10 p-4 mx-4 bg-white/80 rounded-lg">
      <h1
        onClick={() => router.push("/")}
        className="font-bold text-2xl gradient-text cursor-pointer mob:p-2 laptop:p-0 hover:scale-105 transition-transform duration-200"
      >
        {data.name}.
      </h1>
      {!isBlog ? (
        <div className="flex gap-2">
          <Button onClick={handleWorkScroll}>Work</Button>
          <Button onClick={handleEduScroll}>Education</Button>
          <Button onClick={handleSkillsScroll}>Skills</Button>
          <Button onClick={handleProjectsScroll}>Projects</Button>
          <Button onClick={handleAboutScroll}>About</Button>
          <Button onClick={handleContactAction}>Contact</Button>
        </div>
      ) : (
        <div className="flex gap-2">
          <Button onClick={() => router.push("/")}>Home</Button>
          <Button onClick={handleContactAction}>Contact</Button>
        </div>
      )}
    </div>
  );
};

export default Header;
