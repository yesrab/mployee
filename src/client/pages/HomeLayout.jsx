import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import SideBar from "../components/SideBar";

const HomeLayout = () => {
  return (
    <>
      <Header />
      <div className='flex min-h-[90dvh]'>
        <SideBar />
        <Outlet />
      </div>
    </>
  );
};

export default HomeLayout;
