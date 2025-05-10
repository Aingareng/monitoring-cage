import { Card, CardContent, CardHeader } from "@/shared/components/ui/card";

export default function SensorMonitoring() {
  return (
    <Card className="w-full p-3 grid grid-cols-2">
      <Card className=" bg-red-300 gap-0 inset-shadow-sm inset-shadow-red-500 p-0">
        <CardHeader className="p-0">
          <h6 className="font-semibold p-2">Kondisi Suhu</h6>
        </CardHeader>
        <CardContent className="p-2 text-lg font-bold">80°C</CardContent>
      </Card>

      <Card className="bg-green-300 gap-0 inset-shadow-sm inset-shadow-green-500 p-0">
        <CardHeader className="p-0">
          <h6 className="font-semibold p-2">Status Pakan</h6>
        </CardHeader>
        <CardContent className="p-2 text-lg font-bold">Penuh</CardContent>
      </Card>

      <Card className="bg-gray-300 gap-0 inset-shadow-sm inset-shadow-gray-500 p-0">
        <CardHeader className="p-0">
          <h6 className="font-semibold p-2">Status Lampu</h6>
        </CardHeader>
        <CardContent className="p-2 text-lg font-bold">Mati</CardContent>
      </Card>

      <Card className="bg-gray-300 gap-0 inset-shadow-sm inset-shadow-gray-500 p-0">
        <CardHeader className="p-0">
          <h6 className="font-semibold p-2">Status Kipas</h6>
        </CardHeader>
        <CardContent className="p-2 text-lg font-bold">Mati</CardContent>
      </Card>

      <div className="col-span-2 flex items-center justify-center">
        <Card className="bg-yellow-300 w-[50%] gap-0 inset-shadow-sm inset-shadow-yellow-500 p-0">
          <CardHeader className="p-0">
            <h6 className="font-semibold p-2">Jumlah Pakan</h6>
          </CardHeader>
          <CardContent className="p-2 text-lg font-bold">10</CardContent>
        </Card>
      </div>
    </Card>
  );
}
