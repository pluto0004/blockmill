import { MenuButton } from "components/MenuButton";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useWindowSize } from "hooks/useWindowSize";
import { skyButton, pinkButton, grassButton } from "utils/buttons";

export const Navbar = () => {
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const width = useWindowSize();

  useEffect(() => {
    setIsMenuVisible(false);
  }, [width]);
  return (
    <div>
      <nav className='px-2 sm:px-4'>
        <div className='hidden md:flex md:items-center md:justify-center'>
          <MenuButton color={grassButton} text='HOME' path='/' />
          <MenuButton color={skyButton} text='ABOUT' path='/about' />
          <MenuButton color={pinkButton} text='VIEW' path='/view' />
          {/* <MenuButton color={yellowButton} text='DONATE' path='/donate' /> */}
        </div>
        <div className='flex justify-end'>
          <img
            className='h-12 cursor-pointer md:hidden'
            src='images/mint_menu.png'
            alt='menu'
            onClick={() => setIsMenuVisible(!isMenuVisible)}
          />
          {isMenuVisible && (
            <div className='list-nonerounded absolute top-28 z-50 rounded-lg bg-gray-800 p-5 shadow'>
              <ul className='flex flex-col items-center text-center'>
                <li className='my-3 cursor-pointer'>
                  <Link
                    to='/'
                    className='px-4 text-xl text-grass hover:text-grass-active'
                  >
                    Home
                  </Link>
                </li>
                <li className='my-3 cursor-pointer'>
                  <Link
                    to='/about'
                    className='px-4 text-xl text-sky hover:text-sky-active'
                  >
                    About
                  </Link>
                </li>
                <li className='my-3 cursor-pointer'>
                  <Link
                    to='/view'
                    className='px-4 text-xl text-pink hover:text-pink-active'
                  >
                    View
                  </Link>
                </li>
                {/* <li className='my-3 cursor-pointer'>
                  <Link
                    to='/donate'
                    className='px-4 text-xl text-yellow hover:text-yellow-active'
                  >
                    Donate
                  </Link>
                </li> */}
              </ul>
            </div>
          )}
        </div>
      </nav>
    </div>
  );
};
