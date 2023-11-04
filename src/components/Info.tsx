import { ReactNode } from "react";

interface IInfo {
  children: ReactNode;
  styles?: string;
}

const Info = ({ styles, children }: IInfo) => {
  return <p className={`info ${styles}`}>{children}</p>;
};

export default Info;
