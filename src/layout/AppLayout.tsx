import { Outlet } from "react-router-dom";

import Header from "../components/header";

export default function AppLaout() {
  return (
    <div>
      <Header />
      <main>
        <Outlet />
      </main>
    </div>
  );
}
