import { Outlet } from "react-router-dom";

export default function AuthLayout() {
  return (
    <div className="w-[100vw] h-[100vh]">
      <section className="flex items-center justify-center h-[100vh]">
        <Outlet />
      </section>
    </div>
  );
}
