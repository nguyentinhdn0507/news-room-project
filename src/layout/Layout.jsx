import React from "react";
import { Outlet } from "react-router-dom";
import { FooterComponent } from "../components/FooterComponent";

import { AppBarComponent } from "../components/Menu";
import { HeaderComponent } from "../components/HeaderComponent";
export const Layout = () => {
  return (
    <div  className="flex flex-col min-h-screen ">
      <div>
        <HeaderComponent />
      </div>
        <AppBarComponent />
      <div className="flex-1 bg-zinc-200 ">
        <div className="max-w-screen-xl w-full mx-auto sm:px-20 sm:py-4 px-4 py-5">
          <Outlet />
        </div>
      </div>
      <div className="py-5">
        <FooterComponent />
      </div>
    </div>
  );
};
