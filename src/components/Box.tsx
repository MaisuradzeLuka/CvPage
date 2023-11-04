import { ReactNode } from "react";

interface IBox {
  children: ReactNode;
  title: string;
  styles?: string;
}

const Box = ({ children, title, styles }: IBox) => {
  return (
    <div className={`box ${styles}`}>
      <h3 className="box__title">{title}</h3>
      <p className="box__paragraph">{children}</p>
    </div>
  );
};

export default Box;
