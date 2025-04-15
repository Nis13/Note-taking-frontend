import { Category } from "../../../interface/category";

export enum NoteStatusEnum {
  PENDING = "pending",
  COMPLETED = "completed",
}

export type UpdateNoteType = {
  title?: string;
  status?: NoteStatusEnum;
};

export type UpdateNoteApiProps = {
  id: string;
  title?: string;
  content?: string;
  categories?: Category[];
};

export type UpdateViewProps = {
  handleSubmit: (props: UpdateNoteApiProps) => void;
  openModal: boolean;
  handleOpen: () => void;
  handleClose: () => void;
  data: UpdateNoteApiProps;
  errorResponse: string | null;
  isLoading: boolean;
};
