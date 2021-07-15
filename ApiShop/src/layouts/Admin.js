import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

// components
import AdminNavbar from "../components/admin/Navbars/AdminNavbar.js";
import Sidebar from "../components/admin/Sidebar/Sidebar.js";
import HeaderStats from "../components/admin/Headers/HeaderStats.js";
import FooterAdmin from "../components/admin/Footers/FooterAdmin.js";

// views

import Dashboard from "views/admin/Dashboard.js";

import AddCategory from "views/admin/category/AddCategory.js";
import SearchCategory from "views/admin/category/SearchCategory.js";
import UpdateCategory from "views/admin/category/UpdateCategory.js"
import ViewCategory from "views/admin/category/ViewCategory.js"

import AddProduct from "views/admin/product/AddProduct.js";
import SearchProduct from "views/admin/product/SearchProduct.js";
import UpdateProduct from "views/admin/product/UpdateProduct.js"
import ViewProduct from "views/admin/product/ViewProduct.js"

import AddUser from "views/admin/user/AddUser.js";
import SearchUser from "views/admin/user/SearchUser.js";
import UpdateUser from "views/admin/user/UpdateUser.js";

import SearchBill from "views/admin/bill/SearchBill.js";
import ViewBill from "views/admin/bill/ViewBill.js";

import AddCoupon from "views/admin/coupon/AddCoupon.js";
import SearchCoupon from "views/admin/coupon/SearchCoupon.js";
import UpdateCoupon from "views/admin/coupon/UpdateCoupon.js";

import SearchComment from "views/admin/comment/SearchComment.js";

export default function Admin() {
  return (
    <>
      <Sidebar />
      <div className="relative md:ml-64 bg-blueGray-100">
        <AdminNavbar />
        {/* Header */}
        <HeaderStats />
        <div className="px-4 md:px-10 mx-auto w-full -m-24">
          <Switch>
            <Route path="/admin/dashboard"  component={Dashboard} />
            <Route path="/admin/category/add"  component={AddCategory} />
            <Route path="/admin/category/search"  component={SearchCategory} />
            <Route path="/admin/category/update/:id"  component={UpdateCategory} />
            <Route path="/admin/category/view/:id"  component={ViewCategory} />

            <Route path="/admin/product/add"  component={AddProduct} />
            <Route path="/admin/product/search"  component={SearchProduct} />
            <Route path="/admin/product/update/:id"  component={UpdateProduct} />
            <Route path="/admin/product/view/:id"  component={ViewProduct} />

            <Route path="/admin/user/add"  component={AddUser} />
            <Route path="/admin/user/search"  component={SearchUser} />
            <Route path="/admin/user/update/:id"  component={UpdateUser} />

            <Route path="/admin/bill/search"  component={SearchBill} />
            <Route path="/admin/bill/view/:id"  component={ViewBill} />

            <Route path="/admin/coupon/add"  component={AddCoupon} />
            <Route path="/admin/coupon/search"  component={SearchCoupon} />
            <Route path="/admin/coupon/update/:id"  component={UpdateCoupon} />

            <Route path="/admin/comment/search"  component={SearchComment} />

            <Redirect from="/admin" to="/admin/dashboard" />
          </Switch>
          <FooterAdmin />
        </div>
      </div>
    </>
  );
}
