import { Box, Chip, Divider, Paper, Typography } from "@mui/material";
import { Note } from "./view-note.types";
import CircularProgress from "@mui/material/CircularProgress";
import ErrorPage from "../../../components/ErrorPage";

export const NotesView = ({
  isLoading,
  isError,
  error,
  data,
}: {
  isLoading: boolean;
  isError: boolean;
  error: Error | null;
  data: Note;
}) => {
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
    <Box maxWidth="700px" margin="auto" mt={5} px={3}>
      <Paper elevation={3} sx={{ p: 4, borderRadius: 3 }}>
        <Typography variant="h4" fontWeight={600} gutterBottom>
          {data.title}
        </Typography>

        <Divider sx={{ my: 2 }} />

        <Typography variant="body1" sx={{ whiteSpace: "pre-line", mb: 3 }}>
          {data.content}
        </Typography>

        <Typography variant="subtitle1" fontWeight={500} gutterBottom>
          Categories:
        </Typography>
        <Box display="flex" gap={1} flexWrap="wrap">
          {data.categories?.map((category) => (
            <Chip
              key={category.id}
              label={category.name}
              color="primary"
              variant="outlined"
            />
          ))}
        </Box>
      </Paper>
    </Box>
  );
};
