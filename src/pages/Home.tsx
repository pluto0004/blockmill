import { Navbar } from "components/Navbar";
import { Header } from "components/Header";
import { Footer } from "components/Footer";

const Home = () => {
  return (
    <>
      <Header />
      <Navbar />
      <div className='mt-28 flex items-end justify-center'>
        <img
          src='images/top_cover.png'
          alt='Account Book For Blockchain'
          className='h-[480px] w-[945px] lg:h-[680px] lg:w-[1145px]'
        />
      </div>
      <Footer />
    </>
  );
};

export default Home;
