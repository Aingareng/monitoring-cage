import ScheduleTable from "@/features/dashboard/components/ScheduleTable";

export default function SchedulePage() {
  return (
    <div className="border size-full flex flex-col gap-5  p-3 ">
      <header className="text-primary">
        <h2 className="font-bold">Jadwal pemberian pakan</h2>
      </header>

      <main className="flex items-start justify-center">
        <ScheduleTable />
      </main>
    </div>
  );
}
