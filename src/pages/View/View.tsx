import { Navbar } from "components/Navbar";
import { Button } from "components/Button";
import { Table } from "components/Table";
import { Header } from "components/Header";
import { purpleButton } from "utils/buttons";
import { Link as Scroll } from "react-scroll";
import useHandleAction from "./hooks";
import { useEffect } from "react";

const View = () => {
  const {
    isLoading,
    transactions,
    totalValue,
    fiatTotal,
    fiatPrice,
    chain,
    fetchData,
    fetchPrice,
    updateAddress,
    updateChain,
  } = useHandleAction();

  useEffect(() => {
    fetchPrice();
  }, []);

  return (
    <div id='view'>
      <Header />
      <Navbar />
      <section className='min-h-screen'>
        <h1 className='mt-32 mb-10 text-center text-5xl md:mb-52 md:text-[70px]'>
          View Your Transactions
        </h1>
        <div className='flex flex-col items-center'>
          <p className='mb-5 text-grass'>Please enter your wallet address</p>
          <input
            type='text'
            className='mb-5 h-12 w-80 overflow-hidden text-ellipsis border-b-2 border-transparent border-b-white bg-transparent px-4 text-lg focus:border-white focus:ring-0 md:h-20 md:w-96 md:text-2xl'
            placeholder='Wallet Address'
            onChange={(e) => updateAddress(e.currentTarget.value)}
          />
          <label
            htmlFor='blockchain'
            className='mb-2 block text-sm font-medium text-gray-900 dark:text-gray-400'
          >
            Select blockchain
          </label>
          <select
            defaultValue={chain}
            id='blockchain'
            className='mb-28 block w-1/6 rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500'
            onChange={(e) => updateChain(e.target.value)}
          >
            <option value='Ethereum'>Ethereum</option>
            <option value='Polygon'>Polygon</option>
          </select>
          <Scroll to='transaction' smooth={true}>
            <Button
              text='View'
              color={purpleButton}
              onClickAction={() => fetchData()}
            ></Button>
          </Scroll>
        </div>
      </section>
      <section id='transaction' className='min-h-screen bg-gray-800'>
        <div className=' flex items-center justify-center pt-20'>
          <Table
            fiatPrice={fiatPrice}
            transactions={transactions}
            isLoading={isLoading}
            totalValue={totalValue}
            fiatTotal={fiatTotal}
          />
        </div>
      </section>
    </div>
  );
};

export default View;
