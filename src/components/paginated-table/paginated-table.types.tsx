import { ColumnDef } from "@tanstack/react-table";

export type TableProps<T> = {
  columns: ColumnDef<T>[];
  data: T[];
  loading?: boolean;
  clickable: boolean;
  onRowClick?: (row: T) => void;
};

export type TableFilterProps = {
  showSearch?: boolean;
  searchTerm?: string;
  handleSearchChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
};
