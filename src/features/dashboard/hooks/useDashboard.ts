import { useQuery } from "@tanstack/react-query";
import { getAllSensor } from "../services/api";

export default function useDashboard() {
  const {
    data: sensors,
    isLoading,
    isError,
    error,
    isPending,
    isFetching,
  } = useQuery({
    queryKey: ["sensors"],
    queryFn: () => getAllSensor(),
  });

  return {
    sensors,
    isLoading,
    isError,
    error,
    isPending,
    isFetching,
  };
}
