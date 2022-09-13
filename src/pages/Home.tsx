import { Navbar } from "components/Navbar";
import { Header } from "components/Header";
import { Footer } from "components/Footer";

const Home = () => {
  return (
    <>
      <Header />
      <Navbar />
      <section className='mt-28 flex min-h-screen justify-center'>
        <img
          src='images/top_cover.png'
          alt='Account Book For Blockchain'
          className='h-[480px] w-[945px] lg:h-[680px] lg:w-[1145px]'
        />
      </section>
      <Footer />
    </>
  );
};

export default Home;
