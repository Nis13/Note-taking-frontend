import { useUpdate } from "./useUpdate";
import UpdateView from "./UpdateView";
import { Note } from "../view/note.types";

const Update = (rowData: Note) => {
  const logic = useUpdate();
  return <UpdateView data={rowData} {...logic} />;
};

export default Update;
