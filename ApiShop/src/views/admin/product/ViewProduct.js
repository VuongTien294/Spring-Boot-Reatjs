import React from "react";

import CardViewProduct from "../../../components/admin/Cards/CardViewProduct";
import CardProfile from "../../../components/admin/Cards/CardProfile";


export default function ViewProduct() {
  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full lg:w-8/12 px-4">
          <CardViewProduct />
        </div>
        <div className="w-full lg:w-4/12 px-4">
          <CardProfile />
        </div>
      </div>
    </>
  );
}