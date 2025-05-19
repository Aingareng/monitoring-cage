import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import {
  createSchedule,
  deleteSchedule,
  getSchedules,
  updateSchedule,
} from "../services/api";
import type { ISchedulePayload } from "../types/dashboard";

export default function useSchedules() {
  const queryClient = useQueryClient();

  const {
    data: schedules,
    isLoading,
    isError,
    error,
    isPending,
    isFetching,
  } = useQuery({
    queryKey: ["schedules"],
    queryFn: () => getSchedules(),
  });

  const createMutation = useMutation({
    mutationFn: (payload: ISchedulePayload) => createSchedule(payload),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["schedules"] }),
  });
  const updateMutation = useMutation({
    mutationFn: ({ id, payload }: { id: number; payload: ISchedulePayload }) =>
      updateSchedule(id, payload),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["schedules"] }),
  });
  const deleteMutation = useMutation({
    mutationFn: (id: number) => deleteSchedule(id),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["schedules"] }),
  });

  return {
    schedules,
    isLoading,
    isError,
    error,
    isPending,
    isFetching,
    createSchedule: createMutation.mutateAsync,
    updateSchedule: updateMutation.mutateAsync,
    deleteSchedule: deleteMutation.mutateAsync,
  };
}
