import { Navbar } from "components/Navbar";
import { Header } from "components/Header";
import { Footer } from "components/Footer";
import { EmojiContainer } from "components/EmojiContainer";
import { EMOJIS } from "constants/emoji";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

// import required modules
import { Autoplay } from "swiper";

import { useWindowSize } from "hooks/useWindowSize";

const Home = () => {
  return (
    <>
      <Header />
      <Navbar />
      <div className='mt-28 flex items-end justify-center'>
        <img
          src='public/images/top_cover.png'
          alt='Account Book For Blockchain'
          className='h-[480px] w-[945px] lg:h-[680px] lg:w-[1145px]'
        />
      </div>
      <Footer />
    </>
  );
};

export default Home;
