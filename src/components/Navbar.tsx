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
        <div className='flex flex-col items-center justify-center md:flex-row'>
          <MenuButton color={grassButton} text='HOME' path='/' />
          <MenuButton color={skyButton} text='ABOUT' path='/about' />
          <MenuButton color={pinkButton} text='VIEW' path='/view' />
          <MenuButton color={yellowButton} text='DONATE' path='/donate' />
        </div>
      </nav>
    </div>
  );
};
