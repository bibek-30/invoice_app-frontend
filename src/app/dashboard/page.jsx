"use client";
import React, { useState } from "react";
import Sidebar from "@/component/sidebar";

const Dashboard = () => {
  const [totalCustomer, setTotalCustomer] = useState("");
  const [totalProduct, setTotalProduct] = useState("");
  const [invoice, setInvoice] = useState("");
  const [revenue, setRevenue]  = useState("");

  const getCustomer = () => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var requestOptions = {
      method: "GET",
      headers: myHeaders
    };

    fetch("http://127.0.0.1:8000/api/customer/count", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        console.log(result)
        setTotalCustomer(result.total_customers)
        // setTotalCustomer(56)
      })
      .catch((error) => console.log("error", error));
  };


	// useEffect(() => {
	// 	fetchTransactions();
	// }, [currentPage, finalSearchQuery, finalSelected]);


  getCustomer();

  const invoiceThisMonths = () => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var requestOptions = {
      method: "GET",
      headers: myHeaders
    };

    fetch("http://127.0.0.1:8000/api/totalOrder", requestOptions)
      .then((response) => response.json())
      .then((result) => {console.log("bibek", result.total_invoices_for_current_month)
        setInvoice(result.total_invoices_for_current_month)
      })
      .catch((error) => console.log("error", error));
  };

  invoiceThisMonths();


  const totalRevenue = () => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var requestOptions = {
      method: "GET",
      headers: myHeaders
    };

    fetch("http://127.0.0.1:8000/api/totalRevenue", requestOptions)
      .then((response) => response.json())
      .then((result) => {
          console.log(result)
          setRevenue(result.total_revenue)

      })
      .catch((error) => console.log("error", error));
  };

  totalRevenue();
  
  const totalProducts = () => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var requestOptions = {
      method: "GET",
      headers: myHeaders
    };

    fetch("http://127.0.0.1:8000/api/totalCount/product", requestOptions)
      .then((response) => response.json())
      .then((result) => {console.log(result)
        setTotalProduct(result.count)
      })
      .catch((error) => console.log("error", error));
  };

  totalProducts();
  


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
          <div className="card-container">
            <div className="card">
              <h1>
                <i className="material-icons">{totalProduct}</i>
              </h1>
              <div className="content">
                <div className="icon-container">
                  <i className="material-icons">icon1</i>
                  <i className="material-icons">icon2</i>
                </div>
                <h2>Heading 1</h2>
              </div>
            </div>

            <div className="card">
              <h1>
                <i className="material-icons">{revenue}</i>
              </h1>
              <div className="content">
                <div className="icon-container">
                  <i className="material-icons">icon3</i>
                  <i className="material-icons">icon4</i>
                </div>
                <h2>Heading 2</h2>
              </div>
            </div>

            <div className="card">
              <h1>
                <i className="material-icons">{invoice}</i>
              </h1>
              <div className="content">
                <div className="icon-container">
                  <i className="material-icons">icon5</i>
                  <i className="material-icons">icon6</i>
                </div>
                <h2>Heading 3</h2>
              </div>
            </div>

            <div className="card">
              <h1>
                <i className="material-icons">{totalCustomer}</i>
              </h1>
              <div className="content">
                <div className="icon-container">
                  <i className="material-icons">icon7</i>
                  <i className="material-icons">icon8</i>
                </div>
                <h2>Heading 4</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
