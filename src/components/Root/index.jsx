import React from "react";
import NavBar from "../NavBar";
import { Outlet } from "react-router-dom";
import Footer from "../Footer";
import Bookmarks from "../Bookmarks";

const Root = () => {
    return(
        <>
            <NavBar/>
            <Bookmarks />
            <Outlet/>
            <Footer/>
        </>
    )
}
export default Root;