/* eslint-disable no-unused-vars */
import React from "react";
import { Outlet } from "react-router-dom";

const Client = () => {
  return (
    <>
      <h1>Client Component</h1>
      <Outlet />
    </>
  );
};

export default Client;
