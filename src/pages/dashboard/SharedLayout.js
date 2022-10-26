import React from "react";
import { Navbar, SmallSidebar, BigSidebar } from "../../components";
import { Outlet } from "react-router-dom";
import "../../assets/styles/SharedLayout.sass";

const SharedLayout = () => {
  return (
    <section>
      <main className="dashboard">
        <SmallSidebar />
        <BigSidebar />
        <div>
          <Navbar />
          <div className="dashboard-page">
            <Outlet />
          </div>
        </div>
      </main>
    </section>
  );
};

export default SharedLayout;
