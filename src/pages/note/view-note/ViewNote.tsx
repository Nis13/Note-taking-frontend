import { useNotes } from "./useViewNote";
import { NotesView } from "./ViewNoteView";

const NoteById = () => {
  const logic = useNotes();
  return <NotesView {...logic} />;
};

export default NoteById;
