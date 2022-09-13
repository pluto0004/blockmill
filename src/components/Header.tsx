import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <div className='m-10'>
      <Link to='/'>
        <img src='images/logo.png' className='w-40 cursor-pointer' />
      </Link>
    </div>
  );
};
