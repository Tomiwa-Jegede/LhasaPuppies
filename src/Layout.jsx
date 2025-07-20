import React from "react";
import { Outlet } from "react-router-dom";
import Header_Component from "./Header_Component";

const Layout = () => {
    return (
        <>
            <Header_Component />
            <main>
                <Outlet />
            </main>
        </>
    );
};

export default Layout;
