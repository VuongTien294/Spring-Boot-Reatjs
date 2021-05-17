import React from "react";

import CardUpdateUser from "../../../components/admin/Cards/CardUpdateUser";
import CardProfile from "../../../components/admin/Cards/CardProfile";


export default function UpdateUser() {
  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full lg:w-8/12 px-4">
          <CardUpdateUser />
        </div>
        <div className="w-full lg:w-4/12 px-4">
          <CardProfile />
        </div>
      </div>
    </>
  );
}
