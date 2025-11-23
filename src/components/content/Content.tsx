import Profile from "./sections/Profile.tsx";
import "./content.scss";
import Education from "./sections/Education.tsx";
import Experience from "./sections/Experience.tsx";
import Technologies from "./sections/Technologies.tsx";
import Projects from "./sections/Projects.tsx";

const Content = () => {
  return (
    <div id="content">
      <Profile />
      <Projects />
      <Education />
      <Technologies />
      <Experience />
    </div>
  );
};

export default Content;
