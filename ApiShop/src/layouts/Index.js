import React from "react";
import Home from "../views/client/Home";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Footer from "components/client/Footer/Footer";
import Header from "components/client/Header/Header";

import DetailProduct from "../views/client/product/DetailProduct"
import SearchProduct from "../views/client/product/SearchProduct"

export default function Index() {
    return (
        <>
            <Header />

            <BrowserRouter>
                <Switch>

                    <Route path="/product/:id" exact component={DetailProduct} />

                    <Route path="/product/search" exact component={SearchProduct} />

                    <Route path="/" exact component={Home} />

                </Switch>

            </BrowserRouter>
            
            <Footer />
        </>
    );
}