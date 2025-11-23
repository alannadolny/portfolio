type TitleProps = {
  label: string;
};

const Title = ({ label }: TitleProps) => {
  return <div className="title">{label}</div>;
};

export default Title;
