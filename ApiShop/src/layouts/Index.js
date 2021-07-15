import React from "react";
import Home from "../views/client/Home";
import { Route, Switch } from "react-router-dom";

import Footer from "components/client/Footer/Footer";
import Header from "components/client/Header/Header";

import DetailProduct from "../views/client/product/DetailProduct"
import SearchProduct from "../views/client/product/SearchProduct"
import Contact from "../views/client/contact/Contact";
import Blog from "../views/client/blog/Blog";
import ViewCart from "views/client/cart/ViewCart";
import LoginMember from "views/client/auth/LoginMember";
import MemberInfo from "views/client/auth/MemberInfo";
import ViewBill from "views/client/bill/ViewBill";

export default function Index() {
    return (
        <>
            <Header />
                <Switch>
                    <Route path="/product/search"  render={()=>{return<SearchProduct/>}} /> 
                    <Route path="/product/:id"  render={()=>{return<DetailProduct/>}} />
                    <Route path="/cart"  render={()=>{return<ViewCart/>}} />
                    <Route path="/bill"  render={()=>{return<ViewBill/>}} />
                    <Route path="/contact" render={()=>{return<Contact/>}}/>
                    <Route path="/blog" render={()=>{return<Blog/>}}/>
                    <Route path="/login" render={()=>{return<LoginMember/>}}/>
                    <Route path="/member" render={()=>{return<MemberInfo/>}}/>
                    <Route path="/" component={Home} />

                </Switch>       
            <Footer />
        </>
    );
}