import { Link } from "react-router-dom";
import { Color } from "./Navbar";

interface Props {
  color: Color;
  text: string;
  path: string;
}

export const Button = ({ color, text, path }: Props) => {
  return (
    <Link
      to={path}
      className={`h-16 w-40 rounded-full ${color.bgColor} border-[3px] border-black ${color.droopShadowColor} mx-6 text-center ${color.activeColor} active:translate-y-1 active:drop-shadow-none`}
    >
      <p className='menu-text mt-2 text-center font-black text-white'>{text}</p>
    </Link>
  );
};
