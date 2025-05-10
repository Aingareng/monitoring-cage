import { Home, LogOut, CalendarSync } from "lucide-react";
import { Menubar, MenubarMenu, MenubarTrigger } from "../ui/menubar";
import { useNavigate } from "react-router-dom";

export default function MobileNavigation() {
  const navigate = useNavigate();

  return (
    <Menubar className="box-border text-primary items-center h-max border-none shadow-none grid grid-cols-3">
      <MenubarMenu>
        <MenubarTrigger
          onClick={() => navigate("/login")}
          className="flex items-center justify-center flex-col cursor-pointer"
        >
          <LogOut size={20} />
          <span className="text-xs">Keluar</span>
        </MenubarTrigger>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger
          onClick={() => navigate("/")}
          className="flex items-center justify-center flex-col cursor-pointer"
        >
          <Home size={20} />
          <span className="text-xs">Beranda</span>
        </MenubarTrigger>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger
          onClick={() => navigate("/schedule")}
          className="flex items-center justify-center flex-col cursor-pointer"
        >
          <CalendarSync size={20} />
          <span className="text-xs">Jadwal</span>
        </MenubarTrigger>
      </MenubarMenu>
    </Menubar>
  );
}
