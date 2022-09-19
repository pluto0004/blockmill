import { Navbar } from "components/Navbar";
import { Footer } from "components/Footer";
import { Button } from "components/Button";
import { pinkButton } from "utils/buttons";

import { Header } from "components/Header";
const Donate = () => {
  const copyText = (): void => {
    navigator.clipboard.writeText("0x7bDa7742a4AFB02aC9037Bf6A51A12bB46242478");
  };
  return (
    <>
      <Header />
      <Navbar />
      <div>
        <h1 className='mt-32 text-center text-3xl md:text-[60px]'>
          Buy me a coffee ☕️
        </h1>

        <div className='mt-20 flex items-center justify-center'>
          <p className='break-words px-4 text-center md:text-3xl'>
            0x7bDa7742a4AFB02aC9037Bf6A51A12bB46242478
          </p>
          <Button
            onClickAction={(): void => copyText()}
            text='Copy'
            color={pinkButton}
          />
        </div>
        <div className='flex justify-center'>
          <img
            src='images/buy_me_coffee.png'
            alt='account book for blockchain'
            className='mt-10'
          />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Donate;
