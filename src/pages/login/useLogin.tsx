import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { loginSuccess } from "../../store/authSlice";
import checkErrorType from "../../utils/checkErrorType";
import { LoginCredentials } from "./login.types";
import useLoginApi from "../../api/loginApi/useLoginApi";

const useLogin = () => {
  const [errorResponse, setErrorResponse] = useState<string | null>(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const queryClient = useQueryClient();

  const { isPending, mutateAsync } = useMutation({
    mutationFn: useLoginApi,
    onSuccess: (accessToken: string) => {
      // Invalidate user-related data if needed
      queryClient.invalidateQueries({ queryKey: ["user"] });

      dispatch(loginSuccess({ accessToken }));
      navigate("/note");
    },
    onError: (error: Error) => {
      const message = checkErrorType(error);
      setErrorResponse(message);
    },
  });

  const handleLogin = (credentials: LoginCredentials) =>
    mutateAsync(credentials);

  return {
    isLoading: isPending,
    handleLogin,
    errorResponse,
  };
};

export default useLogin;
