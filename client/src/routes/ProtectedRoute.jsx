/* eslint-disable react/prop-types */
// src/routes/ProtectedRoute.jsx
import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";

export default function ProtectedRoute({ children }) {
  const { currentUser, isAuthChecked } = useContext(AuthContext);

  if (!isAuthChecked) {
    return null;
  }

  if (!currentUser) {
    return <Navigate to="/auth" />;
  }

  return children;
}
