import { Navigate, Outlet } from "react-router-dom";

export default function PrivateRoute({ isAdmin }) {
  return isAdmin ? <Outlet /> : <Navigate to="/" />;
}
