import React from "react";

// components

// import CardAddCategory from "components/Cards/CardAddCategory.js";
// import CardProfile from "components/Cards/CardProfile.js";

import CardAddCategory from "../../../components/admin/Cards/CardAddCategory";
import CardProfile from "../../../components/admin/Cards/CardProfile";


export default function AddCategory() {
  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full lg:w-8/12 px-4">
          <CardAddCategory />
        </div>
        <div className="w-full lg:w-4/12 px-4">
          <CardProfile />
        </div>
      </div>
    </>
  );
}
