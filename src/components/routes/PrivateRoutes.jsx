import React, { useContext } from "react";
import { AuthContext } from "../../providers/AuthProviders";
import { Navigate } from "react-router-dom";

const PrivateRoutes = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  if (loading)
    return (
      <div className="h-screen flex mt-56 justify-center">
        <progress className="progress w-56 "></progress>
      </div>
    );
  if (user) return children;
  return <Navigate to="/login" replace={true}></Navigate>;
};

export default PrivateRoutes;
