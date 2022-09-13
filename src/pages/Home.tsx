import { Navbar } from "components/Navbar";
import { Header } from "components/Header";
import { Footer } from "components/Footer";

const Home = () => {
  return (
    <>
      <Header />
      <Navbar />
      <section className='hidden justify-center md:mt-28 md:flex md:min-h-screen'>
        <img
          src='images/top_cover.png'
          alt='Account Book For Blockchain'
          className='hidden md:visible md:block md:h-[480px] md:w-[945px] lg:h-[680px] lg:w-[1145px]'
        />
      </section>
      <div className='flex justify-center md:hidden'>
        <img src='images/jelly.png' alt='jelly picture' className='' />
      </div>
      <Footer />
    </>
  );
};

export default Home;
