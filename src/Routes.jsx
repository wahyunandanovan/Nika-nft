import { Navigate, useRoutes } from "react-router-dom";
import DashboardLayout from "./layouts/DashBoardLayout";
import Market from "./pages/Market";


// ----------------------------------------------------------------------

export default function Router() {
  return useRoutes([
    {
      path: "/",
      element: <Navigate to="/dashboard/market" replace />,
    },
    {
      path: "/dashboard",
      element: <DashboardLayout />,
      children: [
        { path: "market", element: <Market /> },
       
      ],
    },
  ]);
}