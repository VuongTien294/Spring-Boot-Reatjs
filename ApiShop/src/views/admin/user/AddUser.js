import React from "react";

import CardAddUser from "../../../components/admin/Cards/CardAddUser";
import CardProfile from "../../../components/admin/Cards/CardProfile";


export default function AddUser() {
  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full lg:w-8/12 px-4">
          <CardAddUser />
        </div>
        <div className="w-full lg:w-4/12 px-4">
          <CardProfile />
        </div>
      </div>
    </>
  );
}
