import "./header.scss";
import { Phone } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [hoveredElement, setHoveredElement] = useState<string | null>(null);

  const formatSection = (element: string) => {
    return hoveredElement == element ? `(${element})` : element;
  };

  const aProps = (section: string) => ({
    onMouseOver: () => {
      setHoveredElement(section);
    },
    onMouseLeave: () => {
      setHoveredElement(null);
    },
  });

  return (
    <header>
      <div id="sections">
        <a {...aProps("Projects")} href="#projects">
          {formatSection("Projects")}
        </a>
        <a {...aProps("Technologies")} href="#technologies">
          {formatSection("Technologies")}
        </a>
        <a {...aProps("Education")} href="#education">
          {formatSection("Education")}
        </a>
        <a {...aProps("Experience")} href="#experience">
          {formatSection("Experience")}
        </a>
      </div>
      <div>
        <p>+48 511-678-414</p>
        <div id="phone-icon">
          <Phone size={50} />
        </div>
      </div>
    </header>
  );
};

export default Header;
