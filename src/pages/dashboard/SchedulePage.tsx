import AddScheduleForm from "@/features/dashboard/components/AddScheduleForm";
import ScheduleTable from "@/features/dashboard/components/ScheduleTable";
import { Button } from "@/shared/components/ui/button";
import { Dialog } from "@/shared/components/ui/dialog";
import { Plus } from "lucide-react";
import { useState } from "react";

export default function SchedulePage() {
  const [open, setOpen] = useState(false);

  function handleOpenModal(state: boolean) {
    setOpen(state);
  }

  return (
    <div className="border size-full flex flex-col gap-5  p-3 ">
      <header className="text-primary gap-2 grid grid-cols-1 md:grid-cols-2">
        <h2 className="font-bold">Jadwal pemberian pakan</h2>
        <Button type="button" className="w-max" onClick={() => setOpen(true)}>
          <Plus size={24} />
          Tambah Jadwal
        </Button>
      </header>

      <main className="flex items-start justify-center">
        <ScheduleTable openUpdateModal={handleOpenModal} />
      </main>

      <Dialog open={open} onOpenChange={setOpen}>
        <AddScheduleForm open={open} onOpenChange={setOpen} />
      </Dialog>
    </div>
  );
}
