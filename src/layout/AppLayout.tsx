import { Outlet } from "react-router-dom";

import Header from "../components/header";

export default function AppLaout() {
  return (
    <div>
      <Header />
      <main className="container pd-block full-height">
        <Outlet />
      </main>
    </div>
  );
}
