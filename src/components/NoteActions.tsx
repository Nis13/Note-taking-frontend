import { Box } from "@mui/material";
import Update from "../pages/note/update/Update";
import { Note } from "../pages/note/view/note.types";
import Delete from "../pages/note/delete/Delete";

const NoteActions = (row: Note) => {
  return (
    <Box sx={{ display: "flex" }} onClick={(e) => e.stopPropagation()}>
      <Update {...row} />
      <Delete dataId={row.id} />
    </Box>
  );
};

export default NoteActions;
