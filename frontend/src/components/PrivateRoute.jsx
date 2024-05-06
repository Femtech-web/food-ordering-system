/* eslint-disable react/prop-types */

import { Navigate } from "react-router-dom";
import { useContext } from "react";
import AppContext from "../context/app-context";
export default function PrivateRoute({ path, children }) {
  const { isAdmin, isModerator } = useContext(AppContext);

  const AdminPrivateRoutes = ["/dashboard/users"];

  let requireAdmin;

  for (let i = 0; i < AdminPrivateRoutes.length; i++) {
    if (path === AdminPrivateRoutes[i]) requireAdmin = true;
  }

  if (requireAdmin) {
    return isAdmin ? children : <Navigate to="/authentication/login" />;
  } else {
    return isAdmin || isModerator ? (
      children
    ) : (
      <Navigate to="/authentication/login" />
    );
  }
}
