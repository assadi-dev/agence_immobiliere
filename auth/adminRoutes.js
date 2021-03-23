import React, { useEffect } from 'react';
import { useRouter } from "next/router";
import useAuth from "./context";



export function AdminRoute(Component) {
    return () =>{
        const { isAuthenticated, user, loading } = useAuth();
        const router = useRouter();

        useEffect(() => {
            if(isAuthenticated && !loading && user.role !=="admin") router.push("/")
        }, [isAuthenticated, loading, user]);

        return <Component {...arguments} />;
    }
};
