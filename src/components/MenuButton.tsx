import { Link } from "react-router-dom";
import { Color } from "types";

interface Props {
  color: Color;
  text: string;
  path?: string;
  onClick?: () => void;
}

export const MenuButton = ({ color, text, path }: Props) => {
  return (
    <Link
      to={path ? path : "/"}
      className={`h-16 w-40 rounded-full ${color.bgColor} border-[3px] border-black ${color.droopShadowColor} mx-6 text-center md:my-0 ${color.activeColor} my-4 active:translate-y-1 active:drop-shadow-none`}
    >
      <p className='menu-text mt-2 text-center font-black text-white'>{text}</p>
    </Link>
  );
};
