import { Navbar } from "components/Navbar";
import { Button } from "components/Button";
import { Table } from "components/Table";
import { Header } from "components/Header";
import { purpleButton } from "utils/buttons";
import { Link as Scroll } from "react-scroll";
import useHandleAction from "./hooks";

const View = () => {
  const { chain, isLoading, transactions } = useHandleAction();
  const tempAction = () => {
    console.log("View clicked");
  };

  return (
    <div id='view'>
      <Header />
      <Navbar />
      <section className='min-h-screen'>
        <h1 className='mt-32 mb-52 text-center text-[70px]'>
          View Your Transactions
        </h1>
        <div className='flex flex-col items-center'>
          <input
            type='text'
            className=' mb-28 h-20 w-80 overflow-hidden text-ellipsis border-b-2 border-transparent border-b-white bg-transparent px-4 text-2xl focus:border-white focus:ring-0 md:w-96'
            placeholder='Wallet Address'
          ></input>
          <Scroll to='transaction' smooth={true}>
            <Button
              text='View'
              color={purpleButton}
              onClickAction={tempAction}
            ></Button>
          </Scroll>
        </div>
      </section>
      <section id='transaction' className='min-h-screen bg-gray-800'>
        <div className='flex items-center justify-center pt-44'>
          {chain}
          <Table />
        </div>
      </section>
    </div>
  );
};

export default View;
