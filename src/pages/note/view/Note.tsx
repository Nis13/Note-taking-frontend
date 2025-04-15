import { NotesView } from "./NoteView";
import { useNotes } from "./useNote";

const Notes = () => {
  const logic = useNotes();
  return <NotesView {...logic} />;
};

export default Notes;
