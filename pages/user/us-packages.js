import React from "react";

// components

import CardWarehousePackage from "components/Cards/CardWarehousePackage.js";
import CardStats from "components/Cards/CardStats";

// layout for page

import User from "layouts/User.js";

export default function Dashboard() {
  return (
    <>
      <div className="flex flex-wrap">
      <div className="w-full lg:w-12/12 xl:w-12/12 px-4">
          <CardStats
            statSubtitle="Packages In Warehouse"
            statTitle="You have no package in warehouse"
            statArrow=""
            statPercent=""
            statPercentColor="text-emerald-500"
            statDescripiron=""
            statIconName="far fa-chart-bar"
            statIconColor="bg-purple-500"
          />
        </div>
      </div>

      <div className="w-full xl:w-12/12 px-4 mt-5">
          <CardWarehousePackage
            cardTitle= "PACKAGE HISTORY(US)"
          />
        </div>
    </>
  );
}

Dashboard.layout = User;
