import { Table } from '@tanstack/react-table';

export type TableWrapperProps<T> = {
  children?: React.ReactNode;
  table: Table<T>;
  height?: number;
};
