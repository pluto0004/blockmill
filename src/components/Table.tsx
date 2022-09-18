import React, { useEffect } from "react";
import {
  useReactTable,
  getCoreRowModel,
  createColumnHelper,
  flexRender,
} from "@tanstack/react-table";
import { Transaction } from "types";
import { LoadingSpinner } from "./Spinner";

interface Props {
  transactions: Transaction[];
  isLoading: boolean;
}

export const Table = ({ transactions, isLoading }: Props) => {
  const columnHelper = createColumnHelper<Transaction>();

  const columns = [
    columnHelper.accessor("dateTime", {
      cell: (info) => info.getValue(),
      footer: (info) => info.column.id,
    }),
    columnHelper.accessor("value", {
      header: () => "Value",
      cell: (info) => info.renderValue(),
      footer: (info) => info.column.id,
    }),
    columnHelper.accessor("url", {
      header: () => <p className='px-5'>Block Explore</p>,
      cell: (info) => (
        <a
          target='_blank'
          className='text-blue-400'
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
  });

  return (
    <>
      {!isLoading && transactions.length === 0 ? (
        <h1 className='text-center text-3xl font-bold text-sky'>No Data</h1>
      ) : (
        <div className='w-full'>
          {isLoading ? (
            <LoadingSpinner />
          ) : (
            <>
              <p className='ml-20 mb-10 text-2xl'>
                Currently only show the latest 15 transactions
              </p>

              <table className='ml-20 w-1/2 border-separate border-spacing-x-5 border-spacing-y-2 border border-slate-500'>
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
            </>
          )}
        </div>
      )}
    </>
  );
};
