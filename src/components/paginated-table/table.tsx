import { SxProps, TableCell, TableRow } from "@mui/material";
import {
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { TableWrapper } from "../table-wrapper/table-wrapper";
import { TableProps } from "./paginated-table.types";
import Loading from "../Loading";

export const Table = <T,>({
  data,
  columns,
  loading,
  onRowClick,
  clickable,
}: TableProps<T>) => {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  const tableCellStyles: SxProps = {
    maxWidth: 150,
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
  };
  if (loading)
    return (
      <TableWrapper table={table}>
        <TableRow>
          <TableCell colSpan={columns.length}>
            <Loading />
          </TableCell>
        </TableRow>
      </TableWrapper>
    );
  return (
    <TableWrapper table={table}>
      {table.getRowModel().rows.map((row) => (
        <TableRow
          key={row.id}
          onClick={
            clickable && onRowClick ? () => onRowClick(row.original) : undefined
          }
          sx={{
            cursor: clickable ? "pointer" : "default",
            "&:hover": {
              backgroundColor: "primary.light",
            },
          }}
        >
          {row.getVisibleCells().map((cell) => (
            <TableCell key={cell.id} sx={tableCellStyles}>
              {cell.getValue() == null && cell.column.id !== "Actions"
                ? "N/A"
                : flexRender(cell.column.columnDef.cell, cell.getContext())}
            </TableCell>
          ))}
        </TableRow>
      ))}
    </TableWrapper>
  );
};
