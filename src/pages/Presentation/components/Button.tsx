/** @jsxImportSource @emotion/react */
import { FC } from "react";
import "twin.macro";
import { Link } from "react-router-dom";
interface IButton {
  color?: string;
  link?: string;
  text: string;
}

export const Button: FC<IButton> = ({
  color = "bg-androidColor",
  link = "",
  text,
}) => {
  return (
    <Link
      to={link}
      className={`p-4 px-8 rounded-full shadow-lg duration-250
      hover:opacity-80 hover:scale-105 transition ease-in-out ${color}`}
    >
      Go To The {text} Website →
    </Link>
  );
};
