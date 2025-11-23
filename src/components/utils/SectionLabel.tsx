import "./utils.scss";

type SectionLabelProps = {
  label: string;
  color: string;
};

const SectionLabel = ({ label, color }: SectionLabelProps) => {
  return (
    <div className="section-label" style={{ color }}>
      {label}
    </div>
  );
};

export default SectionLabel;
