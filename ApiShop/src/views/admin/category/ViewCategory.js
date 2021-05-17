import React from "react";

// components

import CardUpdateCategory from "../../../components/admin/Cards/CardUpdateCategory.js";
import CardProfile from "../../../components/admin/Cards/CardProfile.js";

export default function ViewCategory() {
  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full lg:w-8/12 px-4">
          <CardUpdateCategory />
        </div>
        <div className="w-full lg:w-4/12 px-4">
          <CardProfile />
        </div>
      </div>
    </>
  );
}