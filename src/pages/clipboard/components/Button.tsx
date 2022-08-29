/** @jsxImportSource @emotion/react */
import { FC } from "react";
import "twin.macro";

interface IButton {
  color?: string;
  children: JSX.Element | string;
}

export const Button: FC<IButton> = ({
  color = "bg-androidColor",
  children,
}) => {
  return (
    <a
      href="#"
      className={`p-4 px-8 rounded-full shadow-lg duration-250 hover:opacity-80 hover:-translate-y-2 transition ease-in-out ${color}`}
    >
      {children}
    </a>
  );
};
