// import React from "react";
// import { createPopper } from "@popperjs/core";

// const NotificationDropdown = () => {
//   // dropdown props
//   const [dropdownPopoverShow, setDropdownPopoverShow] = React.useState(false);
//   const btnDropdownRef = React.createRef();
//   const popoverDropdownRef = React.createRef();
//   const openDropdownPopover = () => {
//     createPopper(btnDropdownRef.current, popoverDropdownRef.current, {
//       placement: "left-start",
//     });
//     setDropdownPopoverShow(true);
//   };
//   const closeDropdownPopover = () => {
//     setDropdownPopoverShow(false);
//   };
//   return (
//     <>
//       <a
//         className="text-blueGray-500 py-1 px-3"
//         href="#pablo"
//         ref={btnDropdownRef}
//         onClick={(e) => {
//           e.preventDefault();
//           dropdownPopoverShow ? closeDropdownPopover() : openDropdownPopover();
//         }}
//       >
//         <i className="fas fa-ellipsis-v"></i>
//       </a>
//       <div
//         ref={popoverDropdownRef}
//         className={
//           (dropdownPopoverShow ? "block " : "hidden ") +
//           "bg-white text-base z-50 float-left py-2 list-none text-left rounded shadow-lg min-w-48"
//         }
//       >
       
        
//         <a
//           href="#pablo"
//           className={
//             "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
//           }
//           onClick={(e) => e.preventDefault()}
//         >
       
//        Supprimer
//         </a>
//            <a
//           href="#pablo"
//           className={
//             "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
//           }
//           onClick={(e) => e.preventDefault()}
//         >
//          Modifier
//         </a>
//       </div>
//     </>
//   );
// };

// export default NotificationDropdown;





import React from "react";
import { createPopper } from "@popperjs/core";

const TableDropdownmesvoiture = ({ booking, onAction }) => {
  const [dropdownPopoverShow, setDropdownPopoverShow] = React.useState(false);
  const btnDropdownRef = React.createRef();
  const popoverDropdownRef = React.createRef();

  const openDropdownPopover = () => {
    createPopper(btnDropdownRef.current, popoverDropdownRef.current, {
      placement: "left-start",
    });
    setDropdownPopoverShow(true);
  };
  const closeDropdownPopover = () => {
    setDropdownPopoverShow(false);
  };

  return (
    <>
      <a
        className="text-blueGray-500 py-1 px-3"
        href="#pablo"
        ref={btnDropdownRef}
        onClick={(e) => {
          e.preventDefault();
          dropdownPopoverShow ? closeDropdownPopover() : openDropdownPopover();
        }}
      >
        <i className="fas fa-ellipsis-v"></i>
      </a>

      <div
        ref={popoverDropdownRef}
        className={
          (dropdownPopoverShow ? "block " : "hidden ") +
          "bg-white text-base z-50 float-left py-2 list-none text-left rounded shadow-lg min-w-48"
        }
      >
        {/* زر التعديل */}
        <a
          href="#modifier"
          className="text-sm py-2 px-4 block w-full text-blueGray-700"
          onClick={(e) => {
            e.preventDefault();
            onAction("edit", booking); // نبعث الأكشن للجدول
            closeDropdownPopover();
          }}
        >
          Modifier
        </a>

        {/* زر الحذف */}
        <a
          href="#supprimer"
          className="text-sm py-2 px-4 block w-full text-blueGray-700"
          onClick={(e) => {
            e.preventDefault();
            onAction("delete", booking); // نبعث الأكشن للجدول
            closeDropdownPopover();
          }}
        >
          Supprimer
        </a>
      </div>
    </>
  );
};

export default TableDropdownmesvoiture;
