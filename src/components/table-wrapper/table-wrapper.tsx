import {
  Paper,
  Table as MUITable,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { flexRender } from "@tanstack/react-table";

import { TableWrapperProps } from "./table-wrapper.types";

export const TableWrapper = <T,>({ children, table }: TableWrapperProps<T>) => {
  return (
    <TableContainer component={Paper}>
      <MUITable>
        <TableHead sx={{ backgroundColor: "grey.400" }}>
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <TableCell key={header.id}>
                  {flexRender(
                    header.column.columnDef.header,
                    header.getContext()
                  )}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableHead>
        <TableBody>{children}</TableBody>
      </MUITable>
    </TableContainer>
  );
};
