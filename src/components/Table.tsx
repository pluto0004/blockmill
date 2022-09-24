import React, { useEffect } from "react";
import {
  useReactTable,
  getCoreRowModel,
  createColumnHelper,
  flexRender,
  getPaginationRowModel,
} from "@tanstack/react-table";
import { PriceResponse, Transaction } from "types";
import { LoadingSpinner } from "./Spinner";

interface Props {
  transactions: Transaction[];
  isLoading: boolean;
  totalValue: string;
  fiatTotal: number;
  fiatPrice: PriceResponse;
}

export const Table = ({
  transactions,
  isLoading,
  totalValue,
  fiatTotal,
  fiatPrice,
}: Props) => {
  const columnHelper = createColumnHelper<Transaction>();

  // TODO: This variable is temporary
  const currency = "$";

  const columns = [
    columnHelper.accessor("dateTime", {
      header: () => <p className='bg-gray-600 py-6 text-sm md:text-xl'>Date</p>,
      cell: (info) => <p className='text-sm md:text-base'>{info.getValue()}</p>,
      footer: (info) => info.column.id,
    }),
    columnHelper.accessor("value", {
      header: () => (
        <p className='bg-gray-600 py-6 text-sm md:text-xl'>Value</p>
      ),
      cell: (info) => info.renderValue(),
      footer: (info) => info.column.id,
    }),
    columnHelper.accessor("isSucceeded", {
      header: () => (
        <p className='bg-gray-600 py-6 text-sm md:px-3 md:text-xl'>Status</p>
      ),
      cell: (info) => (
        <p className='text-center text-sm md:text-base'>
          {info.getValue() ? (
            <span>Succes</span>
          ) : (
            <span className='text-red-500'>Fail</span>
          )}
        </p>
      ),
      footer: (info) => info.column.id,
    }),
    columnHelper.accessor("url", {
      header: () => (
        <p className='bg-gray-600 py-6 text-sm md:px-5 md:text-xl'>Details</p>
      ),
      cell: (info) => (
        <a
          target='_blank'
          className='text-center text-sm text-blue-400 md:text-base'
          href={`${info.getValue()}`}
        >
          View More
        </a>
      ),
      footer: (info) => info.column.id,
    }),
  ];

  const [data, setData] = React.useState(() => [...transactions]);

  useEffect(() => {
    setData([...transactions]);
  }, [transactions]);

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
  });

  return (
    <>
      <div className='mb-10 w-full'>
        {isLoading ? (
          <div className='flex items-center justify-center'>
            <LoadingSpinner />
          </div>
        ) : transactions.length === 0 ? (
          <p className='mb-10 text-center text-yellow md:text-2xl'>
            No transaction data
          </p>
        ) : (
          <>
            <p className='mb-10 p-3 text-center text-2xl'>
              Show the latest transactions (Up to 100 transactions)
            </p>
            <p className='mb-5 text-center text-xl text-pink md:text-3xl'>
              <span className='text-white'>Total Spent Ether: </span>
              {totalValue} ({currency} {fiatTotal.toFixed(2)}
              )
              <br />
              <span className='text-sm text-white md:text-base'>
                *1 Ether = ${fiatPrice["ethereum"]["usd"]}
              </span>{" "}
              <span className='text-sm text-gray-400 md:text-base'>
                (Powered by{" "}
                <a href='https://www.coingecko.com/' target='_blank'>
                  CoinGecko
                </a>
                )
              </span>
              <br />
              <span className='text-sm text-white md:text-base'>
                * Failed Transactions are excluded from the total
              </span>
            </p>

            <div className='m-auto flex w-2/3 flex-col'>
              <table className='border-separate border border-slate-500 md:border-spacing-y-2 md:border-spacing-x-5'>
                <thead>
                  {table.getHeaderGroups().map((headerGroup) => (
                    <tr key={headerGroup.id}>
                      {headerGroup.headers.map((header) => (
                        <th className='border border-slate-600' key={header.id}>
                          {header.isPlaceholder
                            ? null
                            : flexRender(
                                header.column.columnDef.header,
                                header.getContext()
                              )}
                        </th>
                      ))}
                    </tr>
                  ))}
                </thead>
                <tbody>
                  {table.getRowModel().rows.map((row) => (
                    <tr key={row.id}>
                      {row.getVisibleCells().map((cell) => (
                        <td
                          className='border border-slate-700 p-2'
                          key={cell.id}
                        >
                          {flexRender(
                            cell.column.columnDef.cell,
                            cell.getContext()
                          )}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className='m-auto mt-5 flex w-2/3 items-center'>
              <button
                className='mx-5 rounded border p-1'
                onClick={() => table.setPageIndex(0)}
                disabled={!table.getCanPreviousPage()}
              >
                {"<<"}
              </button>
              <button
                className='rounded border p-1'
                onClick={() => table.previousPage()}
                disabled={!table.getCanPreviousPage()}
              >
                {"<"}
              </button>
              <button
                className='mx-5 rounded border p-1'
                onClick={() => table.nextPage()}
                disabled={!table.getCanNextPage()}
              >
                {">"}
              </button>
              <button
                className='rounded border p-1'
                onClick={() => table.setPageIndex(table.getPageCount() - 1)}
                disabled={!table.getCanNextPage()}
              >
                {">>"}
              </button>
              <span className='ml-5 flex items-center'>
                <div>Page</div>
                <strong>
                  {table.getState().pagination.pageIndex + 1} of{" "}
                  {table.getPageCount()}
                </strong>
              </span>
            </div>
          </>
        )}
      </div>
    </>
  );
};
