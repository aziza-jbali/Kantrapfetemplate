import React from "react";

// components

import CardsPublicationadminprincipale from "components/Cards/CardsPublicationadminprincipale";

export default function Tables() {
  return (
    <>
      <div className="flex flex-wrap mt-4">
        <div className="w-full mb-12 px-4">
          {/* <CardTableMesvoitures /> */}
        </div>
        <div className="w-full mb-12 px-4">
          <CardsPublicationadminprincipale color="dark" />
        </div>
      </div>
    </>
  );
}