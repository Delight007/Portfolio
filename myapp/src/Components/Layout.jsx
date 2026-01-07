import { Outlet } from "react-router-dom";
import Nav from "./Navbar/Nav";
import Footer from "./Footer/Footer";
import GlobalProvider from "./context/GlobalContext";
export default function Layout() {
  return (
    <>
      <GlobalProvider>
        <div>
          <Nav />
          <div className="content">
            <Outlet />
          </div>
          <Footer />
        </div>
      </GlobalProvider>
    </>
  );
}
