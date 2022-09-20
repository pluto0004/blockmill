import { Navbar } from "components/Navbar";
import { Header } from "components/Header";
import { Footer } from "components/Footer";

const Home = () => {
  return (
    <>
      <Header />
      <Navbar />
      <section className='hidden justify-center md:mt-28 md:flex'>
        <img
          src='images/top_cover.png'
          alt='Account Book For Blockchain'
          className='hidden md:visible md:block md:h-[480px] md:w-[945px] lg:h-[680px] lg:w-[1145px]'
        />
      </section>
      <div className='mt-10 flex justify-center md:hidden'>
        <img
          src='images/title_mobile.png'
          alt='account book for blockchain'
          className='w-[300px]'
        />
      </div>
      <div className='flex justify-center md:hidden'>
        <img src='images/jelly.png' alt='jelly picture' className='' />
      </div>
      <Footer />
    </>
  );
};

export default Home;
