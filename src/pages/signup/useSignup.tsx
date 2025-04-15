import { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import checkErrorType from "../../utils/checkErrorType";
import { SignupFields } from "./signup.types";
import useSignupApi from "../../api/signupApi/useSignupApi";

export const useSignup = () => {
  const [errorResponse, setErrorResponse] = useState<string | null>(null);
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { isPending, mutateAsync } = useMutation({
    mutationFn: useSignupApi,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["user"] });
      navigate("/login");
    },
    onError: (error: Error) => {
      const returnMessage = checkErrorType(error);
      setErrorResponse(returnMessage);
    },
  });

  const handleSignup = (signupData: SignupFields) => mutateAsync(signupData);

  return { errorResponse, isLoading: isPending, handleSignup };
};
