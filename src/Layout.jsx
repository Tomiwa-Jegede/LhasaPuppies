import React from "react";
import { Outlet } from "react-router-dom";
import Header_Component from "./Header_Component";
import Footer_Component from "./Footer_Component";

const Layout = () => {
    return (
        <>
            <Header_Component />
            <main>
                <Outlet />
            </main>
            <Footer_Component />
        </>
    );
};

export default Layout;
