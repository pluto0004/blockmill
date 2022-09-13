import React from "react";
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";

type Transaction = {
  date: string;
  value: string;
  transactionFees: string;
  url: string;
};

const defaultData: Transaction[] = [
  {
    date: "2 days 5 hrs ago	",
    value: "0.012",
    transactionFees: "0.000143084672367 ",
    url: "View More",
  },
  {
    date: "2 days 5 hrs ago	",
    value: "0.012",
    transactionFees: "0.000143084672367 ",
    url: "View More",
  },
  {
    date: "2 days 5 hrs ago	",
    value: "0.012",
    transactionFees: "0.000143084672367 ",
    url: "View More",
  },
];

const columnHelper = createColumnHelper<Transaction>();

const columns = [
  columnHelper.accessor("date", {
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("value", {
    cell: (info) => info.renderValue(),
  }),
  columnHelper.accessor("transactionFees", {
    cell: (info) => info.renderValue(),
  }),
  columnHelper.accessor("url", {
    cell: (info) => info.renderValue(),
  }),
];

export const Table = () => {
  const [data] = React.useState(() => [...defaultData]);
  const rerender = React.useReducer(() => ({}), {})[1];

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div className='p-2'>
      <table className='w-[600px] text-center'>
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th key={header.id}>
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
                <td key={cell.id}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
        <tfoot>
          {table.getFooterGroups().map((footerGroup) => (
            <tr key={footerGroup.id}>
              {footerGroup.headers.map((header) => (
                <th key={header.id}>
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.footer,
                        header.getContext()
                      )}
                </th>
              ))}
            </tr>
          ))}
        </tfoot>
      </table>
      <div className='h-4' />
      <button onClick={() => rerender()} className='border p-2'>
        Refresh
      </button>
    </div>
  );
};
