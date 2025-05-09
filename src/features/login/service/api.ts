import { api } from "@/shared/utils/api";
import type { ILoginPayload } from "../types/login";
import type IApiResponse from "@/shared/types/apiResponse";

export const postLogin = async (payload: ILoginPayload) =>
  await api.post<IApiResponse<null>>("/login", payload);
