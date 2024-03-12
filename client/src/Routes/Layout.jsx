import Footer from "../Components/Footer";
import Nav from "../Components/Nav";

import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <Nav />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
