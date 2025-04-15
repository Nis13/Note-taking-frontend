import { Role } from "../../constants/role";

export type SignupFields = {
  name?: string;
  email: string;
  password: string;
  role?: Role;
};

export type SignupViewProps = {
  errorResponse: string | null;
  isLoading: boolean;
  isError?: boolean;
  handleSignup: (value: SignupFields) => void;
  error?: Error | null;
};
