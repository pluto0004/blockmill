import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <div className='m-3 md:m-10'>
      <Link to='/'>
        <img src='images/logo.png' className='w-32 cursor-pointer md:w-40' />
      </Link>
    </div>
  );
};
