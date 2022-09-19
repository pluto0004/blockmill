import { Navbar } from "components/Navbar";
import { Footer } from "components/Footer";

import { Header } from "components/Header";
const About = () => {
  return (
    <>
      <Header />
      <Navbar />
      <div>
        <h1 className='mt-20 text-center text-3xl md:text-[60px]'>
          Coming Soon!
        </h1>
        <div className='flex justify-center'>
          <img
            src='images/under_construction.gif'
            alt='account book for blockchain'
          />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default About;
