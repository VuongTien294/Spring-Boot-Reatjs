import React from "react";

import CardUpdateCoupon from "../../../components/admin/Cards/CardUpdateCoupon.js";
import CardProfile from "../../../components/admin/Cards/CardProfile.js";

export default function UpdateCoupon() {
  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full lg:w-8/12 px-4">
          <CardUpdateCoupon />
        </div>
        <div className="w-full lg:w-4/12 px-4">
          <CardProfile />
        </div>
      </div>
    </>
  );
}