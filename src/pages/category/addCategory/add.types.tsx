export type AddCategoryType = {
  name: string;
};
export type AddNoteViewProps = {
  handleAddTask: (value: AddCategoryType) => void;
  openModal: boolean;
  handleOpen: () => void;
  handleClose: () => void;
  isLoading: boolean;
  errorResponse: string | null;
  isError?: boolean;
};
