import { FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { FaNode, FaJava, FaDocker, FaGitAlt, FaPython } from "react-icons/fa";
import {
  SiMysql,
  SiPostgresql,
  SiSpring,
  SiFlutter,
  SiDart,
  SiTypescript,
  SiMongodb,
} from "react-icons/si";
import { DiGroovy, DiGrails, DiRedis } from "react-icons/di";
import { AiOutlineKubernetes } from "react-icons/ai";
import IconsSection from "../../utils/IconsSection.tsx";
import SectionLabel from "../../utils/SectionLabel.tsx";

const stacks = [
  {
    title: "Frameworks / Technologies",
    icons: [FaReact, FaNode, SiSpring, DiGrails, SiFlutter],
  },
  {
    title: "Languages",
    icons: [IoLogoJavascript, SiTypescript, FaJava, DiGroovy, SiDart, FaPython],
  },
  {
    title: "Databases",
    icons: [SiMysql, SiPostgresql, SiMongodb, DiRedis],
  },
  {
    title: "DevOps",
    icons: [FaDocker, AiOutlineKubernetes],
  },
  {
    title: "Version Management",
    icons: [FaGitAlt],
  },
];

const Technologies = () => {
  return (
    <div id="technologies">
      <SectionLabel label="Technologies" color="rgb(218, 219, 219)" />
      <div id="technologies-wrapper">
        {stacks.map((stack) => (
          <IconsSection
            key={stack.title}
            technologies={stack.icons}
            label={stack.title}
          />
        ))}
      </div>
    </div>
  );
};

export default Technologies;
