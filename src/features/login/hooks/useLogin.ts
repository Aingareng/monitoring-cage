import { useMutation, useQueryClient } from "@tanstack/react-query";
import { postLogin } from "../service/api";
import type { ILoginPayload } from "../types/login";

export default function useLogin() {
  const queryClient = useQueryClient();

  const createMutation = useMutation({
    mutationFn: (payload: ILoginPayload) => postLogin(payload),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["login"] }),
  });

  return {
    postLogin: createMutation.mutateAsync,
  };
}
