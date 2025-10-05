// import React, { useState, useRef } from "react";
// import { createPopper } from "@popperjs/core";

// export default function PopupPublication({ publications }) {
//   const [popoverShow, setPopoverShow] = useState(false);
//   const btnRef = useRef();
//   const popoverRef = useRef();

//   const openPopover = () => {
//     createPopper(btnRef.current, popoverRef.current, { placement: "bottom" });
//     setPopoverShow(true);
//   };
//   const closePopover = () => setPopoverShow(false);

//   return (
//     <div className="relative inline-block">
//       <button
//         ref={btnRef}
//         className="bg-lightBlue-500 text-white px-4 py-2 rounded shadow hover:shadow-lg"
//         onClick={() => (popoverShow ? closePopover() : openPopover())}
//       >
//         Consulter
//       </button>

//       <div
//         ref={popoverRef}
//         className={`absolute z-50 mt-2 p-4 w-96 bg-white shadow-lg border rounded ${
//           popoverShow ? "" : "hidden"
//         }`}
//       >
//         {publications.length === 0 ? (
//           <p className="text-gray-600">لا توجد منشورات.</p>
//         ) : (
//           publications.map((pub) => (
//             <div key={pub.id} className="mb-4 border-b pb-2">
//               <img
//                 src={pub.img}
//                 alt="publication"
//                 className="w-full h-40 object-cover rounded mb-2"
//               />
//               <p className="text-gray-800 mb-1">
//                 <i className="fas fa-info-circle mr-2"></i>
//                 {pub.description}
//               </p>
//               <p className="text-gray-500 text-sm">
//                 <i className="fas fa-calendar-day mr-1"></i>
//                 {pub.datePublication}
//               </p>
//               <p className="text-gray-500 text-sm">
//                 <i className="fas fa-check-circle mr-1"></i>
//                 {pub.status}
//               </p>
//             </div>
//           ))
//         )}
//       </div>
//     </div>
//   );
// }


















import React, { useRef, useState } from "react";
import { createPopper } from "@popperjs/core";

export default function PopupPublication({ publication }) {
  const [popoverShow, setPopoverShow] = useState(false);
  const btnRef = useRef();
  const popoverRef = useRef();

  const openPopover = () => {
    createPopper(btnRef.current, popoverRef.current, { placement: "top" });
    setPopoverShow(true);
  };
  const closePopover = () => setPopoverShow(false);

  return (
    <>
      <button
        className="bg-lightBlue-500 text-white font-bold text-sm px-4 py-2 rounded shadow hover:shadow-lg"
        ref={btnRef}
        onClick={() => (popoverShow ? closePopover() : openPopover())}
      >
        Consulter
      </button>
      <div
        ref={popoverRef}
        className={
          (popoverShow ? "" : "hidden ") +
          "bg-white border border-gray-300 shadow-lg rounded-lg max-w-xs p-3 z-50"
        }
      >
        <div className="mb-2 font-semibold text-gray-700">Publication Details</div>
        <img
          src={publication.img}
          alt="Publication"
          className="w-full h-32 object-cover rounded mb-2"
        />
        <p className="text-gray-700 text-sm mb-2">
          {publication.description}
        </p>
        <div className="text-sm text-gray-500 flex justify-between">
          <span>
            <i className="fas fa-calendar-alt mr-1"></i>
            {publication.datePublication}
          </span>
          <span>
            <i className="fas fa-info-circle mr-1"></i>
            {publication.status}
          </span>
        </div>
      </div>
    </>
  );
}
