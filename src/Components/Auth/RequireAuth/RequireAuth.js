import { useEffect, useState } from "react";
import { useLocation, Navigate } from "react-router-dom";
import UseFirebase from "../../../Hooks/useFirebase";

function RequireAuth({ children }) {
    const { user, loading } = UseFirebase();
    const location = useLocation();

    if (loading) {
        return;
    }

    if (!user.uid) {
        return <Navigate to="/login" state={{ from: location }} replace />;
    }

    return children;
}

export default RequireAuth;