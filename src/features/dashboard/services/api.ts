import { api } from "@/shared/utils/api";
import type {
  ISchedulePayload,
  ISchedules,
  ISensorData,
} from "../types/dashboard";
import type IApiResponse from "@/shared/types/apiResponse";

export const getAllSensor = async () =>
  api.get<IApiResponse<ISensorData>>("/readData");

export const getSchedules = async () =>
  api.get<IApiResponse<ISchedules>>("/schedules");

export const createSchedule = async (payload: ISchedulePayload) =>
  api.post<IApiResponse<null>>("/schedules", payload);
export const updateSchedule = async (id: number, payload: ISchedulePayload) =>
  api.put<IApiResponse<null>>(`/schedules/${id}`, payload);
export const deleteSchedule = async (id: number) =>
  api.delete(`/schedule/${id}`);
