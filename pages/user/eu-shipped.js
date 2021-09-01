import React from "react";

// components

import CardWarehousePackage from "components/Cards/CardWarehousePackage.js";
import CardStats from "components/Cards/CardStats";

// layout for page

import User from "layouts/User.js";

export default function Dashboard() {
  return (
    <>

      <div className="w-full xl:w-12/12 px-4 mt-5">
          <CardWarehousePackage 
            cardTitle= "SHIPPED PACKAGEs (EU)"
          />
        </div>
    </>
  );
}

Dashboard.layout = User;
