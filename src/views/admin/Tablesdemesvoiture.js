import React from "react";

// components

import CardTableMesvoitures from "components/Cards/CardTablemesvoitures";

export default function Tables() {
  return (
    <>
      <div className="flex flex-wrap mt-4">
        <div className="w-full mb-12 px-4">
          {/* <CardTableMesvoitures /> */}
        </div>
        <div className="w-full mb-12 px-4">
          <CardTableMesvoitures color="dark" />
        </div>
      </div>
    </>
  );
}
