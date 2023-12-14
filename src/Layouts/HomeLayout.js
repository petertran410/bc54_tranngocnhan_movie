import React from "react";
import Header from "../Components/Header/Header";
import { Outlet } from "react-router";

export default function HomeLayout() {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
}
