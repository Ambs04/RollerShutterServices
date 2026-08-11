import { Outlet, useLocation } from "react-router-dom";
import LoadingPage from "../Common Components/LoadingPage";

export default function Layout() {
  const location = useLocation();

  return (
    <>
      <LoadingPage key={location.pathname} />
      <Outlet />
    </>
  );
}
