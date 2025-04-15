import { useQuery } from "@tanstack/react-query";
import { formatDate } from "../../../utils/formatDate";
import NoteActions from "../../../components/NoteActions";
import fetchNoteApi from "../../../api/fetchNoteApi/useFetchNoteApi";
import { ColumnDef } from "@tanstack/react-table";
import { Note } from "./note.types";
import { useEffect, useState } from "react";
import { useDebouncedValue } from "../../../hooks/use-debounced-value";

export const useNotes = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const debouncedSearchTerm = useDebouncedValue(searchTerm, 200);

  const { isPending, data, isError, error, refetch } = useQuery({
    queryKey: ["note"],
    queryFn: () => fetchNoteApi({ title: debouncedSearchTerm }),
  });

  useEffect(() => {
    refetch();
  }, [debouncedSearchTerm, refetch]);

  const columns: ColumnDef<Note>[] = [
    {
      header: "Title",
      accessorKey: "title",
    },
    {
      header: "Content",
      accessorKey: "content",
    },
    {
      header: "Date Created",
      accessorKey: "createdAt",
      cell: ({ getValue }) => formatDate(getValue() as string),
    },

    {
      header: "Actions",
      cell: ({ row }) => <NoteActions {...row.original} />,
    },
  ];

  return {
    isLoading: isPending,
    isError,
    error,
    columns,
    data,
    handleSearch,
    searchTerm,
  };
};
