import { Navigate , useLocation } from "react-router-dom";

interface RouteGuardProps {
    children: React.ReactNode;
}

const SKIP_PATHS = ["/login"]; //login

export default function RouteGuard({ children }: RouteGuardProps) {
    const location = useLocation();
    if (SKIP_PATHS.some(path => location.pathname.startsWith(path))) return children;

    if (!localStorage.getItem("token")) {
        return <Navigate to="/login" replace />;
    }

    return children;
}