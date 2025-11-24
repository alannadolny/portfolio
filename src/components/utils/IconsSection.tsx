import Title from "./Title.tsx";
import type { IconType } from "react-icons";
import CircleWrapper from "./CircleWrapper.tsx";
import "./utils.scss";

type IconsSectionProps = {
  technologies: IconType[];
  label: string;
};

const mapTechnologies = (technologies: IconType[]) =>
  technologies.map((Icon, index) => (
    <CircleWrapper key={index}>
      <Icon size={100} />
    </CircleWrapper>
  ));

const IconsSection = ({ technologies, label }: IconsSectionProps) => {
  return (
    <div className="icons-section">
      <Title label={label} />
      <div className="icons-wrapper">{mapTechnologies(technologies)}</div>
    </div>
  );
};

export default IconsSection;
