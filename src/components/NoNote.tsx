import { Box, Typography } from "@mui/material";
import TaskAltIcon from "@mui/icons-material/TaskAlt";

const NoNotes = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      textAlign="center"
      color="text.secondary"
      p={2}
    >
      <TaskAltIcon style={{ fontSize: 80, color: "#b0bec5" }} />
      <Typography variant="h6" mt={2} color="text.primary">
        No Notes to Show
      </Typography>
    </Box>
  );
};

export default NoNotes;
