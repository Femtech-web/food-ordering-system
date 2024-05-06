/* eslint-disable react/prop-types */

import { Navigate } from "react-router-dom";
import { useContext } from "react";
import AppContext from "../context/app-context";
export default function PublicRoute({ path, children }) {
  const { isLogin } = useContext(AppContext);

  if (path === "/authentication/confirmation") {
    return localStorage.getItem("toConfirmUser") ? (
      children
    ) : (
      <Navigate to="/authentication/login" />
    );
  } else {
    return isLogin ? children : <Navigate to="/authentication/login" />;
  }
}
