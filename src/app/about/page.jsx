"use client";
import React, { useState } from "react";
import Sidebar from "@/component/sidebar";

const Invoice = () => {
  return (
    <>
      <div
        style={{
          width: "100% ",
          height: "50px",
          backgroundColor: "white",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <h1 style={{ color: "black" }}>Dashboard</h1>
        <h3 className="app_name">Invoice Management System</h3>
        <button style={{ margin: "10px" }}>Logout</button>
      </div>
      <div className="dashboard_wrapper">
        <div className="sidebar_wrapper">
          <Sidebar />
        </div>
        <div className="content_wrapper">
            about us
        </div>
      </div>
    </>
  );
};

export default Invoice;
