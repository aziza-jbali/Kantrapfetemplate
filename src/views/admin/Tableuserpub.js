import React from "react";

// components

import CardAnnounceannounceadminprincipale from "components/Cards/CardAnnounceannounceadminprincipale";

export default function Tableuserpub() {
  return (
    <>
      <div className="flex flex-wrap mt-4">
        <div className="w-full mb-12 px-4">
          {/* <CardTable /> */}
        </div> 
        <div className="w-full mb-12 px-4">
          <CardAnnounceannounceadminprincipale color="dark" />
        </div>
      </div>
    </>
  );
}