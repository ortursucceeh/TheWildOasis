import { useMutation } from "@tanstack/react-query"; //
import { signup as signupApi } from "../../services/apiAuth";
import { toast } from "react-hot-toast";

export function useSignup() {
  const { mutate: signup, isLoading } = useMutation({
    // mutationFn: ({ email, password }) => signupApi({ email, password }),
    mutationFn: signupApi,
    onSuccess: () => {
      toast.success("Account successfully created!");
    },
    onError: (err) => {
      toast.error("Password or email are incorrect!");
    },
  });

  return { signup, isLoading };
}
