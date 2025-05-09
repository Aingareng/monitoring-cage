import AuthLayout from "@/pages/auth/AuthLayout";
import LoginPage from "@/pages/auth/LoginPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AuthLayout />}>
          <Route path="/login" element={<LoginPage />} />
        </Route>

        <Route path="/" element={<div>Home</div>} />
        <Route path="/setting" element={<div>Jadwal pakan</div>} />
        <Route path="*" element={<div>404 Not Found</div>} />
      </Routes>
    </BrowserRouter>
  );
}
