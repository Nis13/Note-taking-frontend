import { Box, Container } from "@mui/material";
import AddCategory from "../category/addCategory/Add";
import AddNote from "./add/Add";
import Notes from "./view/Note";

const NotePage = () => {
  return (
    <Container sx={{ display: "flex", flexDirection: "column" }}>
      <Box>
        <AddCategory />
        <AddNote />
      </Box>
      <Notes />
    </Container>
  );
};

export default NotePage;
