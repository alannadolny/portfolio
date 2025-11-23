import Timeline from "../../timeline/Timeline.tsx";
import SectionLabel from "../../utils/SectionLabel.tsx";

const dataset = [
  {
    titleLeftLabel: "University of Gdańsk",
    titleRightLabel: "Master's degree",
    contentRightLabelArray: [
      "Rector's scholarship for high grades",
      "Thesis: 'Codely' - Web application for running code through browser",
      "Diploma thesis grade: 5",
    ],
    timeRangeLabel: "2023 - 2025",
    pointColor: "rgb(75, 42, 29)",
  },
  {
    titleLeftLabel: "University of Gdańsk",
    titleRightLabel: "Bachelor's degree",
    contentRightLabelArray: [
      "Rector's scholarship for high grades",
      "Thesis: 'Comparison of JavaScript Technologies in the Context of Performance'",
      "Diploma thesis grade: 5",
    ],
    timeRangeLabel: "2020 - 2023",
    pointColor: "rgb(28, 90, 103)",
  },
  {
    titleLeftLabel: "Stefan Żeromski Secondary School in Bartoszyce",
    titleRightLabel: "Secondary education",
    contentRightLabelArray: ["Passed the matura exam"],
    timeRangeLabel: "2017 - 2020",
    pointColor: "rgb(24, 40, 58)",
  },
];

const Education = () => {
  return (
    <div id="education">
      <SectionLabel label="Education" color="rgb(28, 90, 103)" />
      <Timeline id="education" dataset={dataset} />
    </div>
  );
};

export default Education;
