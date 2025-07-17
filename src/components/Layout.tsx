import React from "react";
import Navigation from "./Navbar";
import Footer from "./Footer";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <div className="d-flex flex-column min-vh-100">
        <Navigation />
        <main className="flex-fill">{children}</main>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
