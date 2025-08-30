import { Outlet } from "react-router-dom";
import MainNav from "./MainNav";
import "./index.css";

function RootLayout() {
  return (
    <>
        <MainNav />
      <main className='content'>
        <Outlet />
      </main>
    </>
  );
}

export default RootLayout;
