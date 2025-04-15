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
  // memoizedData: Note[];
  isError: boolean;
  error: Error | null;
  columns: ColumnDef<Note>[];
  handleSearch: (event: React.ChangeEvent<HTMLInputElement>) => void;
  searchTerm: string;
  // activeTab: NoteStatus;
  // filteredNotes: Note[];
  data: Note[];
  // handleChange: (event: React.SyntheticEvent, value: NoteStatus) => void;
};
