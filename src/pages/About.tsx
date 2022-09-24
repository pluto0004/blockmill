import { Navbar } from "components/Navbar";
import { Footer } from "components/Footer";

import { Header } from "components/Header";
const About = () => {
  return (
    <>
      <Header />
      <Navbar />
      <div className='flex min-h-screen flex-col items-center justify-center'>
        <p className='p-10 font-mono md:mt-20 md:w-1/2 md:text-3xl'>
          BlockMill is the account book for blockchain!
          <br />
          <br />
          You can easily check the total spend on crypto currencies you have
          used by entering your wallet address. <br />
          <br />
          Currently, BlockMill only supports external transactions for Ether and
          only shows the latest 15 transactions. However, more features will
          come soon! Here are some upcoming features!
          <ul className='mt-5 ml-10 list-disc'>
            <li className='mb-3'>Support showing ERC20 tokens on Ethereum</li>
            <li className='mb-3'>Support Polygon</li>
            <li className='mb-3'>
              Add filter functionality (by date and currency/token)
            </li>
            <li className='mb-3'>Budget alert by email</li>
          </ul>
        </p>
        <div className='flex justify-center'>
          <img
            src='images/under_construction.gif'
            alt='account book for blockchain'
            className='w-72'
          />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default About;
