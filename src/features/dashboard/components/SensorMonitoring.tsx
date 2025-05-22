import { Card, CardContent, CardHeader } from "@/shared/components/ui/card";
import { Fan, LightbulbOff, Thermometer } from "lucide-react";
import useDashboard from "../hooks/useDashboard";

export default function SensorMonitoring() {
  const { sensors } = useDashboard();
  console.log("🚀 ~ SensorMonitoring ~ sensors:", sensors);

  // if (isLoading || isPending) {
  //   return <span>Memuat data...</span>;
  // }

  return (
    <Card className="w-full p-3 grid grid-cols-2">
      <Card className=" bg-stone-200 gap-0 inset-shadow-sm inset-shadow-stone-500 p-0">
        <CardHeader className="p-0">
          <h6 className="font-semibold p-2">Kondisi Suhu</h6>
        </CardHeader>
        <CardContent className="p-2 text-lg font-bold flex items-center">
          <Thermometer size={22} />
          <span>{sensors?.data.suhu}°C</span>
        </CardContent>
      </Card>

      <Card className="bg-stone-200 gap-0 inset-shadow-sm inset-shadow-stone-500 p-0">
        <CardHeader className="p-0">
          <h6 className="font-semibold p-2">Status Pakan</h6>
        </CardHeader>
        <CardContent className="p-2 text-lg font-bold">
          {sensors?.data.status_pakan}
        </CardContent>
      </Card>

      <Card className="bg-stone-200 gap-0 inset-shadow-sm inset-shadow-stone-500 p-0">
        <CardHeader className="p-0">
          <h6 className="font-semibold p-2">Status Lampu</h6>
        </CardHeader>
        <CardContent className="p-2 text-lg font-bold flex items-center gap-1">
          <LightbulbOff size={22} />
          <span>{sensors?.data.status_lampu}</span>
        </CardContent>
      </Card>

      <Card className="bg-stone-200 gap-0 inset-shadow-sm inset-shadow-stone-500 p-0">
        <CardHeader className="p-0">
          <h6 className="font-semibold p-2">Status Kipas</h6>
        </CardHeader>
        <CardContent className="p-2 text-lg font-bold flex items-center gap-1">
          <Fan size={22} className="animate-spin" />
          <span>{sensors?.data.status_kipas}</span>
        </CardContent>
      </Card>

      <div className="col-span-2 flex items-center justify-center">
        <Card className="bg-stone-200 w-[50%] gap-0 inset-shadow-sm inset-shadow-stone-500 p-0">
          <CardHeader className="p-0">
            <h6 className="font-semibold p-2">Jumlah Pakan</h6>
          </CardHeader>
          <CardContent className="p-2 text-lg font-bold">
            {sensors?.data.jumlah_pakan}
          </CardContent>
        </Card>
      </div>
    </Card>
  );
}
