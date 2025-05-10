import MobileNavigation from "@/shared/components/molecules/MobileNavigation";
import { Outlet } from "react-router-dom";

export default function DashboardLayout() {
  return (
    <div className="flex flex-col min-h-screen relative">
      <section className=" border h-[100vh]">
        <Outlet />
      </section>
      <footer className="absolute bottom-0 w-full p-3 rounded-t-4xl border">
        <MobileNavigation />
      </footer>
    </div>
  );
}
