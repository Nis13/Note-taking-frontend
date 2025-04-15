export type AddNoteType = {
  title: string;
};
export type AddNoteViewProps = {
  handleAddTask: (value: AddNoteType) => void;
  openModal: boolean;
  handleOpen: () => void;
  handleClose: () => void;
  isLoading: boolean;
  errorResponse: string | null;
  isError?: boolean;
};
