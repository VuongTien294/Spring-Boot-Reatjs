import React from "react";

import CardUpdateProduct from "../../../components/admin/Cards/CardUpdateProduct";
import CardProfile from "../../../components/admin/Cards/CardProfile";


export default function UpdateProduct() {
  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full lg:w-8/12 px-4">
          <CardUpdateProduct />
        </div>
        <div className="w-full lg:w-4/12 px-4">
          <CardProfile />
        </div>
      </div>
    </>
  );
}
