import { Color } from "types";

interface Props {
  color: Color;
  text: string;
  onClickAction: () => void;
}

export const Button = ({ color, text, onClickAction }: Props) => {
  return (
    <button
      className={`h-16 w-36 rounded-lg ${color.bgColor} border-[3px] border-black ${color.droopShadowColor} mx-6 text-center ${color.activeColor} active:translate-y-1 active:drop-shadow-none`}
      onClick={onClickAction}
    >
      <p className='menu-text text-center font-black text-white'>{text}</p>
    </button>
  );
};
