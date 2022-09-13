import { Button } from "components/Button";

export interface Color {
  bgColor: string;
  droopShadowColor: string;
  activeColor: string;
}

export const Navbar = () => {
  const skyButton: Color = {
    bgColor: "bg-sky",
    droopShadowColor: "drop-shadow-sky",
    activeColor: "active:bg-sky-hover",
  };
  const pinkButton: Color = {
    bgColor: "bg-pink",
    droopShadowColor: "drop-shadow-pink",
    activeColor: "active:bg-pink-hover",
  };
  const yellowButton: Color = {
    bgColor: "bg-yellow",
    droopShadowColor: "drop-shadow-yellow",
    activeColor: "active:bg-yellow-hover",
  };
  const grassButton: Color = {
    bgColor: "bg-grass",
    droopShadowColor: "drop-shadow-grass",
    activeColor: "active:bg-grass-hover",
  };

  return (
    <div>
      <nav className='px-2 sm:px-4'>
        <div className='flex flex-wrap items-center justify-center px-2'>
          <Button color={grassButton} text='HOME' path='/' />
          <Button color={skyButton} text='ABOUT' path='/about' />
          <Button color={pinkButton} text='VIEW' path='/view' />
          <Button color={yellowButton} text='DONATE' path='/donate' />
        </div>
      </nav>
    </div>
  );
};
