import "./utils.scss";
import type { ReactNode } from "react";

type CircleWrapperProps = {
  children: ReactNode;
};

const CircleWrapper = ({ children }: CircleWrapperProps) => {
  return <div className="circle-wrapper">{children}</div>;
};

export default CircleWrapper;
