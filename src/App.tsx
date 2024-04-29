import { RouterProvider, createBrowserRouter } from "react-router-dom";
import AppLaout from "./layout/AppLayout";
import HomePage from "./pages/home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLaout />,
    children: [{ path: "/", element: <HomePage /> }],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
