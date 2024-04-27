import { RouterProvider, createBrowserRouter } from "react-router-dom";
import AppLaout from "./layout/AppLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLaout />,
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
