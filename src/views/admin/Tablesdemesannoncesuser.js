import React from "react";

// components

import CardTablemesannoncesuser from "components/Cards/CardTablemesannoncesuser";

export default function Tables() {
  return (
    <>
      <div className="flex flex-wrap mt-4">
        <div className="w-full mb-12 px-4">
          {/* <CardTableMesvoitures /> */}
        </div>
        <div className="w-full mb-12 px-4">
          <CardTablemesannoncesuser color="dark" />
        </div>
      </div>
    </>
  );
}
