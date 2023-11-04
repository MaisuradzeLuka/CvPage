import { ReactNode } from "react";

interface IButton {
  clickHandler?: () => void;
  children: ReactNode;
  styles?: string;
  type?: "button" | "submit" | "reset" | undefined;
  disabled?: boolean;
}

const Button = ({
  children,
  clickHandler,
  styles,
  type = "button",
  disabled,
}: IButton) => {
  return (
    <button
      type={type}
      onClick={clickHandler}
      className={`btn ${styles}`}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
