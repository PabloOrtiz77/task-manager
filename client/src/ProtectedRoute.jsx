import {Navigate, Outlet} from 'react-router-dom'
import { useAuth } from "./context/AuthContext"

function ProtectedRoute() {
    const {loading, isAunthenticated} = useAuth();
    console.log(loading, isAunthenticated);

    if (loading) return <h1>
        Loading...
    </h1>

    if(!loading && !isAunthenticated) return <Navigate to = '/Login' replace />

    return <Outlet/>;
}

export default ProtectedRoute