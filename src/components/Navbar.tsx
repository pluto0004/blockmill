import { MenuButton } from "components/MenuButton";
import {
  skyButton,
  pinkButton,
  yellowButton,
  grassButton,
} from "utils/buttons";

export const Navbar = () => {
  return (
    <div>
      <nav className='px-2 sm:px-4'>
        <div className='hidden md:flex md:items-center md:justify-center'>
          <MenuButton color={grassButton} text='HOME' path='/' />
          <MenuButton color={skyButton} text='ABOUT' path='/about' />
          <MenuButton color={pinkButton} text='VIEW' path='/view' />
          <MenuButton color={yellowButton} text='DONATE' path='/donate' />
        </div>
        <div className='flex justify-end'>
          <img
            className='h-12 cursor-pointer md:hidden'
            src='images/mint_menu.png'
            alt='menu'
          />
        </div>
      </nav>
    </div>
  );
};
