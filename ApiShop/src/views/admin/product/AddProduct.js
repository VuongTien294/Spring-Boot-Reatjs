import React from "react";

import CardAddProduct from "../../../components/admin/Cards/CardAddProduct";
import CardProfile from "../../../components/admin/Cards/CardProfile";


export default function AddCategory() {
  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full lg:w-8/12 px-4">
          <CardAddProduct />
        </div>
        <div className="w-full lg:w-4/12 px-4">
          <CardProfile />
        </div>
      </div>
    </>
  );
}
