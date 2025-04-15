import { Box } from "@mui/material";
import { NotesViewProps } from "./note.types";
import CircularProgress from "@mui/material/CircularProgress";
import ErrorPage from "../../../components/ErrorPage";
import { Table } from "../../../components/paginated-table/table";
import { useNavigate } from "react-router-dom";
import { TableFilter } from "../../../components/paginated-table/table-filters";
import NoNotes from "../../../components/NoNote";

export const NotesView = ({
  isLoading,
  isError,
  error,
  columns,
  data,
  handleSearch,
  searchTerm,
}: NotesViewProps) => {
  const navigate = useNavigate();
  if (isLoading)
    return (
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        height="100vh"
      >
        <CircularProgress />
      </Box>
    );

  if (isError && error instanceof Error)
    return (
      <Box>
        <ErrorPage {...error} />
      </Box>
    );

  return (
    <Box display={"flex"} flexDirection={"column"} minWidth={500} gap={"2rem"}>
      <TableFilter
        searchTerm={searchTerm}
        showSearch={true}
        handleSearchChange={handleSearch}
      />
      {data?.length === 0 ? (
        <NoNotes />
      ) : (
        <Table
          columns={columns}
          data={data}
          clickable={true}
          onRowClick={(row) => navigate(`${row.id}`)}
        />
      )}
    </Box>
  );
};
