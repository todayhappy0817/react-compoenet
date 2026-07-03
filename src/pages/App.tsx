import RouteGuard from "@/router/RoutGuard";
import { Link, NavLink, Outlet, useMatches } from "react-router-dom";

export default function App() {
  const matches = useMatches();
  const current = matches[matches.length - 1] as { handle?: { title?: string } } & typeof matches[0];
  console.log("App matches:", matches);
  console.log("App current route:", current);
  return (
    <div>
      <h1>{current?.handle?.title || "App"} Header</h1>
      <RouteGuard>
        <Outlet />
      </RouteGuard>
      {/* <Link to="/about">About</Link>
      <NavLink to="/about"
        style={({ isActive }) => 
      ({ color: isActive ? 'red' : 'black' })}>
          어바웃
      </NavLink>       */}
    </div>
  );
}
