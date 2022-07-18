import Button from "../Button";
import { useRouter } from "next/router";
// Local Data
import data from "../../personalData";

const Header = ({
  handleWorkScroll,
  handleEduScroll,
  handleProjectsScroll,
  handleAboutScroll,
  handleContactAction,
  isBlog,
}) => {
  const router = useRouter();
  return (
    <div className="mt-10 flex flex-row items-center justify-between sticky bg-white top-0 z-10">
      <h1
        onClick={() => router.push("/")}
        className="font-medium cursor-pointer mob:p-2 laptop:p-0"
      >
        {data.name}.
      </h1>
      {!isBlog ? (
        <div className="flex">
          <Button onClick={handleWorkScroll}>Work</Button>
          <Button onClick={handleEduScroll}>Education</Button>
          <Button onClick={handleProjectsScroll}>Projects</Button>
          <Button onClick={handleAboutScroll}>About</Button>
          <Button onClick={handleContactAction}>Contact</Button>
        </div>
      ) : (
        <div className="flex">
          <Button onClick={() => router.push("/")}>Home</Button>
          <Button onClick={handleContactAction}>Contact</Button>
        </div>
      )}
    </div>
  );
};

export default Header;
