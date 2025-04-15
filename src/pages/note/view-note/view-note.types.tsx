import { ColumnDef } from "@tanstack/react-table";
import { Category } from "../../../interface/category";

export type Note = {
  id: string;
  title: string;
  content: string;
  categories: Category[];
};

export type Columns = {
  Header: string;
  accessor: string;
};

export type NoteStatus = "all" | "pending" | "completed";

export type NotesViewProps = {
  isLoading: boolean;
  isError: boolean;
  error: Error | null;
  columns: ColumnDef<Note>[];
  data: Note[];
};
