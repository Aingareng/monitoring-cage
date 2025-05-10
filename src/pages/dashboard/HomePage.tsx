import SensorMonitoring from "@/features/dashboard/components/SensorMonitoring";
import { formatTanggalIndonesia } from "@/shared/utils/formatDate";

export default function HomePage() {
  return (
    <div className="border size-full flex flex-col gap-5  p-3 ">
      <header className="text-primary">
        <h2 className="font-bold">Hi, Fadur</h2>
        <time className="text-sm">
          {formatTanggalIndonesia(new Date().toString())}
        </time>
      </header>
      <main className="flex items-start justify-center">
        <SensorMonitoring />
      </main>
    </div>
  );
}
