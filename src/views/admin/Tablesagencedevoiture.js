import React from "react";

// components

import CardsTableagencedevoiture from "components/Cards/CardsTableagencedevoiture.jsx";

export default function Tables() {
  return (
    <>
      <div className="flex flex-wrap mt-4">
        {/* <div className="w-full mb-12 px-4">
           <CardsTableagencedevoiture /> 
        </div> */}
        <div className="w-full mb-12 px-4 mt-4">
          <CardsTableagencedevoiture color="dark" />
        </div>
      </div>
    </>
  );
}
