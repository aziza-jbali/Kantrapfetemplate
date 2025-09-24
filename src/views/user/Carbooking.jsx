// import React, { useState } from "react";
// import {
//   FaMapMarkerAlt,
//   FaCalendarAlt,
//   FaUser,
//   FaEnvelope,
//   FaPhone,
//   FaCity,
// } from "react-icons/fa";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap/dist/js/bootstrap.bundle.min.js";
// import "../../assets/styles/index.css";

// function CarBooking() {
//   const [pickupDate, setPickupDate] = useState("");
//   const [returnDate, setReturnDate] = useState("");

//   return (
//     <div className="min-h-screen bg-black text-white flex justify-center items-center px-4 py-8">
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-6xl">
//         {/* القسم الأيسر - معلومات السيارة */}
//         <div className="bg-gray-900 p-6 rounded-lg shadow-lg">
//           <img
//             src="https://cdn.carbuzz.com/gallery-images/2023-hyundai-elantra-n-line-carbuzz-858177-1600.jpg"
//             alt="Hyundai"
//             className="rounded-lg mb-4 w-full h-64 object-cover"
//           />
//           <h2 className="text-2xl font-bold text-yellow-500">Hyundai</h2>
//           <p className="text-green-400 text-xl mb-4">$199997 / day</p>

//           <div className="grid grid-cols-4 gap-4 text-center mb-6">
//             <div>
//               <p className="text-lg font-bold">4</p>
//               <p className="text-sm text-gray-400">Seats</p>
//             </div>
//             <div>
//               <p className="text-lg font-bold">Petrol</p>
//               <p className="text-sm text-gray-400">Fuel</p>
//             </div>
//             <div>
//               <p className="text-lg font-bold">78 kmpl</p>
//               <p className="text-sm text-gray-400">Mileage</p>
//             </div>
//             <div>
//               <p className="text-lg font-bold">Manual</p>
//               <p className="text-sm text-gray-400">Transmission</p>
//             </div>
//           </div>

//           <div className="bg-gray-800 p-4 rounded-lg">
//             <h3 className="text-lg font-semibold mb-2">About this car</h3>
//             <p className="text-sm text-gray-300 leading-relaxed">
//               Experience luxury in the Hyundai. With its manual transmission and
//               seating for 4, every journey is exceptional. Includes 24/7
//               roadside assistance and unlimited mileage.
//             </p>
//           </div>
//         </div>

//         {/* القسم الأيمن - فورم الحجز */}
//         <div className="bg-gray-900 p-6 rounded-lg shadow-lg">
//           <h2 className="text-2xl font-bold mb-4">
//             Reserve <span className="text-yellow-500">Your Drive</span>
//           </h2>
//           <p className="text-gray-400 mb-6">Fast - Secure - Easy</p>

//           <form className="space-y-4">
//             {/* التواريخ */}
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//               <div>
//                 <label className="block text-sm mb-1">Pickup Date</label>
//                 <div className="flex items-center bg-gray-800 p-2 rounded-lg">
//                   <FaCalendarAlt className="mr-2 text-yellow-400" />
//                   <input
//                     type="date"
//                     value={pickupDate}
//                     onChange={(e) => setPickupDate(e.target.value)}
//                     className="bg-transparent w-full outline-none"
//                   />
//                 </div>
//               </div>
//               <div>
//                 <label className="block text-sm mb-1">Return Date</label>
//                 <div className="flex items-center bg-gray-800 p-2 rounded-lg">
//                   <FaCalendarAlt className="mr-2 text-yellow-400" />
//                   <input
//                     type="date"
//                     value={returnDate}
//                     onChange={(e) => setReturnDate(e.target.value)}
//                     className="bg-transparent w-full outline-none"
//                   />
//                 </div>
//               </div>
//             </div>

//             {/* موقع الاستلام */}
//             <div>
//               <label className="block text-sm mb-1">Pickup Location</label>
//               <div className="flex items-center bg-gray-800 p-2 rounded-lg">
//                 <FaMapMarkerAlt className="mr-2 text-yellow-400" />
//                 <input
//                   type="text"
//                   placeholder="Enter pickup location"
//                   className="bg-transparent w-full outline-none"
//                 />
//               </div>
//             </div>

//             {/* معلومات شخصية */}
//             <div>
//               <label className="block text-sm mb-1">Full Name</label>
//               <div className="flex items-center bg-gray-800 p-2 rounded-lg">
//                 <FaUser className="mr-2 text-yellow-400" />
//                 <input
//                   type="text"
//                   placeholder="Your full name"
//                   className="bg-transparent w-full outline-none"
//                 />
//               </div>
//             </div>

//             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//               <div>
//                 <label className="block text-sm mb-1">Email Address</label>
//                 <div className="flex items-center bg-gray-800 p-2 rounded-lg">
//                   <FaEnvelope className="mr-2 text-yellow-400" />
//                   <input
//                     type="email"
//                     placeholder="Your email"
//                     className="bg-transparent w-full outline-none"
//                   />
//                 </div>
//               </div>
//               <div>
//                 <label className="block text-sm mb-1">Phone Number</label>
//                 <div className="flex items-center bg-gray-800 p-2 rounded-lg">
//                   <FaPhone className="mr-2 text-yellow-400" />
//                   <input
//                     type="tel"
//                     placeholder="Your phone number"
//                     className="bg-transparent w-full outline-none"
//                   />
//                 </div>
//               </div>
//             </div>

//             {/* المدينة - الولاية - الرمز */}
//             <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//               <div>
//                 <label className="block text-sm mb-1">City</label>
//                 <div className="flex items-center bg-gray-800 p-2 rounded-lg">
//                   <FaCity className="mr-2 text-yellow-400" />
//                   <input
//                     type="text"
//                     placeholder="Your city"
//                     className="bg-transparent w-full outline-none"
//                   />
//                 </div>
//               </div>
//               <div>
//                 <label className="block text-sm mb-1">State</label>
//                 <input
//                   type="text"
//                   placeholder="Your state"
//                   className="bg-gray-800 p-2 rounded-lg w-full outline-none"
//                 />
//               </div>
//               <div>
//                 <label className="block text-sm mb-1">Zip Code</label>
//                 <input
//                   type="text"
//                   placeholder="ZIP/Post"
//                   className="bg-gray-800 p-2 rounded-lg w-full outline-none"
//                 />
//               </div>
//             </div>

//             {/* السعر */}
//             <div className="flex justify-between items-center text-lg font-semibold">
//               <p>Rate/day</p>
//               <p>$199997</p>
//             </div>
//             <div className="flex justify-between items-center text-lg font-bold">
//               <p>Total</p>
//               <p>$199997</p>
//             </div>

//             {/* زر */}
//             <button className="w-full bg-yellow-500 hover:bg-yellow-600 transition rounded-lg py-3 font-bold">
//               Confirm Booking
//             </button>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default CarBooking;
// import React, { useState } from "react";
// import { FaMapMarkerAlt, FaCalendarAlt, FaUser, FaEnvelope, FaPhone, FaCity } from "react-icons/fa";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap/dist/js/bootstrap.bundle.min.js";
// import "../../assets/styles/index.css";

// function CarBooking({ car }) {
//   const [pickupDate, setPickupDate] = useState("");
//   const [returnDate, setReturnDate] = useState("");

//   return (
//     <div className="min-h-screen bg-gray-100 flex justify-center items-center p-6">
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-6xl">
        
//         {/* يسار - تفاصيل السيارة */}
//         <div className="bg-white p-6 rounded-lg shadow-md">
//           <img
//             src={car.image}
//             alt={car.name}
//             className="rounded-lg mb-4 w-full h-64 object-cover"
//           />
//           <h2 className="text-2xl font-bold text-gray-800">{car.name}</h2>
//           <p className="text-yellow-600 text-xl font-semibold mb-4">
//             ${car.price} / day
//           </p>

//           {/* مواصفات السيارة */}
//           <div className="grid grid-cols-4 gap-4 text-center mb-6">
//             <div className="bg-gray-100 p-3 rounded-lg shadow-sm">
//               <p className="text-lg font-bold text-gray-800">{car.seats}</p>
//               <p className="text-sm text-gray-500">Seats</p>
//             </div>
//             <div className="bg-gray-100 p-3 rounded-lg shadow-sm">
//               <p className="text-lg font-bold text-gray-800">{car.fuel}</p>
//               <p className="text-sm text-gray-500">Fuel</p>
//             </div>
//             <div className="bg-gray-100 p-3 rounded-lg shadow-sm">
//               <p className="text-lg font-bold text-gray-800">{car.mileage}</p>
//               <p className="text-sm text-gray-500">Mileage</p>
//             </div>
//             <div className="bg-gray-100 p-3 rounded-lg shadow-sm">
//               <p className="text-lg font-bold text-gray-800">{car.transmission}</p>
//               <p className="text-sm text-gray-500">Transmission</p>
//             </div>
//           </div>

//           {/* وصف السيارة */}
//           <div className="bg-gray-50 p-4 rounded-lg border">
//             <h3 className="text-lg font-semibold mb-2 text-gray-800">
//               About this car
//             </h3>
//             <p className="text-sm text-gray-600">{car.description}</p>
//           </div>
//         </div>

//         {/* يمين - فورم الحجز */}
//         <div className="bg-white p-6 rounded-lg shadow-md">
//           <h2 className="text-2xl font-bold mb-2 text-gray-800">
//             Reserve <span className="text-yellow-600">Your Car</span>
//           </h2>
//           <p className="text-gray-500 mb-4">Fast - Secure - Easy</p>

//           <form className="space-y-4">
//             {/* Pickup & Return Dates */}
//             <div className="grid grid-cols-2 gap-4">
//               <div>
//                 <label className="block text-sm font-medium mb-1">Pickup Date</label>
//                 <div className="flex items-center bg-gray-100 p-2 rounded-lg border">
//                   <FaCalendarAlt className="mr-2 text-yellow-600" />
//                   <input
//                     type="date"
//                     value={pickupDate}
//                     onChange={(e) => setPickupDate(e.target.value)}
//                     className="bg-transparent w-full outline-none"
//                   />
//                 </div>
//               </div>
//               <div>
//                 <label className="block text-sm font-medium mb-1">Return Date</label>
//                 <div className="flex items-center bg-gray-100 p-2 rounded-lg border">
//                   <FaCalendarAlt className="mr-2 text-yellow-600" />
//                   <input
//                     type="date"
//                     value={returnDate}
//                     onChange={(e) => setReturnDate(e.target.value)}
//                     className="bg-transparent w-full outline-none"
//                   />
//                 </div>
//               </div>
//             </div>

//             {/* Pickup Location */}
//             <div>
//               <label className="block text-sm font-medium mb-1">Pickup Location</label>
//               <div className="flex items-center bg-gray-100 p-2 rounded-lg border">
//                 <FaMapMarkerAlt className="mr-2 text-yellow-600" />
//                 <input
//                   type="text"
//                   placeholder="Enter pickup location"
//                   className="bg-transparent w-full outline-none"
//                 />
//               </div>
//             </div>

//             {/* Personal Info */}
//             <div>
//               <label className="block text-sm font-medium mb-1">Full Name</label>
//               <div className="flex items-center bg-gray-100 p-2 rounded-lg border">
//                 <FaUser className="mr-2 text-yellow-600" />
//                 <input
//                   type="text"
//                   placeholder="Your full name"
//                   className="bg-transparent w-full outline-none"
//                 />
//               </div>
//             </div>

//             <div className="grid grid-cols-2 gap-4">
//               <div>
//                 <label className="block text-sm font-medium mb-1">Email</label>
//                 <div className="flex items-center bg-gray-100 p-2 rounded-lg border">
//                   <FaEnvelope className="mr-2 text-yellow-600" />
//                   <input
//                     type="email"
//                     placeholder="Your email"
//                     className="bg-transparent w-full outline-none"
//                   />
//                 </div>
//               </div>
//               <div>
//                 <label className="block text-sm font-medium mb-1">Phone</label>
//                 <div className="flex items-center bg-gray-100 p-2 rounded-lg border">
//                   <FaPhone className="mr-2 text-yellow-600" />
//                   <input
//                     type="tel"
//                     placeholder="Your phone"
//                     className="bg-transparent w-full outline-none"
//                   />
//                 </div>
//               </div>
//             </div>

//             {/* City, State, Zip */}
//             <div className="grid grid-cols-3 gap-4">
//               <div>
//                 <label className="block text-sm font-medium mb-1">City</label>
//                 <div className="flex items-center bg-gray-100 p-2 rounded-lg border">
//                   <FaCity className="mr-2 text-yellow-600" />
//                   <input
//                     type="text"
//                     placeholder="City"
//                     className="bg-transparent w-full outline-none"
//                   />
//                 </div>
//               </div>
//               <div>
//                 <label className="block text-sm font-medium mb-1">State</label>
//                 <input
//                   type="text"
//                   placeholder="State"
//                   className="bg-gray-100 p-2 rounded-lg border w-full outline-none"
//                 />
//               </div>
//               <div>
//                 <label className="block text-sm font-medium mb-1">ZIP</label>
//                 <input
//                   type="text"
//                   placeholder="ZIP/Post"
//                   className="bg-gray-100 p-2 rounded-lg border w-full outline-none"
//                 />
//               </div>
//             </div>

//             {/* Price & Total */}
//             <div className="flex justify-between items-center text-lg font-semibold mt-4">
//               <p>Rate/day</p>
//               <p>${car.price}</p>
//             </div>
//             <div className="flex justify-between items-center text-lg font-bold">
//               <p>Total</p>
//               <p>${car.price}</p>
//             </div>

//             {/* Button */}
//             <button className="w-full bg-yellow-600 hover:bg-yellow-700 transition rounded-lg py-3 font-bold text-white mt-4">
//               Confirm Booking
//             </button>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default CarBooking;



// import { useLocation } from "react-router-dom";
// import { useState } from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap/dist/js/bootstrap.bundle.min.js";
// import "../../assets/styles/index.css";
// function CarBooking() {
//   const location = useLocation();
//   const { car } = location.state || {};

//   const [pickupDate, setPickupDate] = useState("");
//   const [dropDate, setDropDate] = useState("");
//   const [totalPrice, setTotalPrice] = useState(0);

//   if (!car) {
//     return (
//       <p className="text-red-500 font-bold mt-10 text-center">
//         ⚠️ No car data found
//       </p>
//     );
//   }

//   // حساب السعر الكلي
//   const calculateTotal = () => {
//     if (pickupDate && dropDate) {
//       const start = new Date(pickupDate);
//       const end = new Date(dropDate);
//       const days = (end - start) / (1000 * 60 * 60 * 24);

//       if (days > 0) {
//         setTotalPrice(days * car.price);
//       } else {
//         setTotalPrice(0);
//       }
//     }
//   };
//   console.log(car); // جرب تشوف لو Car موجودة

//   return (
//     <div className="max-w-5xl mx-auto p-6">
//       {/* تفاصيل السيارة */}
//       <div className="bg-white shadow-lg rounded-lg p-6 mb-6 flex flex-col md:flex-row items-center">
//         <img
//           src={car.image}
//           alt={car.name}
//           className="w-full md:w-1/2 rounded-lg object-cover"
//         />
//         <div className="md:ml-6 mt-4 md:mt-0">
//           <h1 className="text-2xl font-bold mb-2">{car.name}</h1>
//           <p className="text-gray-600 mb-2">{car.description}</p>
//           <p className="text-gray-800 font-semibold">
//             Price per day: ${car.price}
//           </p>
//           <p className="text-gray-600">Seats: {car.seats}</p>
//           <p className="text-gray-600">Transmission: {car.transmission}</p>
//         </div>
//       </div>

//       {/* فورم الحجز */}
//       <div className="bg-gray-100 shadow-md rounded-lg p-6">
//         <h2 className="text-xl font-bold mb-4">Reservation Form</h2>
//         <form
//           onSubmit={(e) => {
//             e.preventDefault();
//             calculateTotal();
//           }}
//         >
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
//             <div>
//               <label className="block mb-1 font-medium">Pickup Date</label>
//               <input
//                 type="date"
//                 value={pickupDate}
//                 onChange={(e) => setPickupDate(e.target.value)}
//                 className="w-full border rounded p-2"
//                 required
//               />
//             </div>

//             <div>
//               <label className="block mb-1 font-medium">Drop Date</label>
//               <input
//                 type="date"
//                 value={dropDate}
//                 onChange={(e) => setDropDate(e.target.value)}
//                 className="w-full border rounded p-2"
//                 required
//               />
//             </div>
//           </div>

//           <button
//             type="submit"
//             className="w-full bg-yellow-500 hover:bg-yellow-600 text-white py-2 px-4 rounded-lg font-bold"
//           >
//             Calculate Total
//           </button>
//         </form>

//         {totalPrice > 0 && (
//           <p className="mt-4 text-lg font-bold text-green-600">
//             Total Price: ${totalPrice}
//           </p>
//         )}
//       </div>
//     </div>
//   );
// }

// export default CarBooking;
// import React, { useState } from "react";
// import { useLocation } from "react-router-dom";
// import { FaUser, FaPhone, FaEnvelope, FaCalendarAlt, FaMapMarkerAlt, FaCity, FaGlobeAsia, FaMapPin, FaCreditCard } from "react-icons/fa";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap/dist/js/bootstrap.bundle.min.js";
// import "@fortawesome/fontawesome-free/css/all.min.css";
// import "../../assets/styles/index.css";

// function CarBooking() {
//   const location = useLocation();
//   const { car } = location.state || {};

//   const [formData, setFormData] = useState({
//     pickupDate: "",
//     dropDate: "",
//     pickupLocation: "",
//     name: "",
//     email: "",
//     phone: "",
//     city: "",
//     state: "",
//     zipCode: "",
//   });

//   const [totalPrice, setTotalPrice] = useState(0);
//   const [activeField, setActiveField] = useState(null);

//   if (!car) {
//     return (
//       <p className="text-red-500 font-bold mt-10 text-center">
//         ⚠️ No car data found
//       </p>
//     );
//   }

//   const todayISO = () => new Date().toISOString().split("T")[0];

//   const calculateTotal = () => {
//     if (formData.pickupDate && formData.dropDate) {
//       const start = new Date(formData.pickupDate);
//       const end = new Date(formData.dropDate);
//       let days = Math.ceil((end - start) / (1000 * 60 * 60 * 24));
//       days = Math.max(days, 1);
//       setTotalPrice(days * car.price);
//     }
//   };

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     calculateTotal();
//     alert(`Booking calculated! Total price: $${totalPrice}`);
//   };

//   return (
//     <div className="max-w-5xl mx-auto p-6">
//       {/* تفاصيل السيارة */}
//       <div className="bg-white shadow-lg rounded-lg p-6 mb-6 flex flex-col md:flex-row items-center">
//         <img
//           src={car.img}
//           alt={car.title}
//           className="w-full md:w-1/2 rounded-lg object-cover"
//         />
//         <div className="md:ml-6 mt-4 md:mt-0">
//           <h1 className="text-2xl font-bold mb-2">{car.title}</h1>
//           <p className="text-gray-600 mb-2">{car.description}</p>
//           <p className="text-gray-800 font-semibold">
//             Price per day: ${car.price}
//           </p>
//           <p className="text-gray-600">Seats: {car.seats}</p>
//           <p className="text-gray-600">Transmission: {car.transmission}</p>
//         </div>
//       </div>

//       {/* فورم الحجز */}
//       <div className="bg-gray-900 shadow-md rounded-lg p-6 text-white">
//         <h2 className="text-xl font-bold mb-4">Reservation Form</h2>
//         <form onSubmit={handleSubmit}>
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
//             <div>
//               <label className="block mb-1 font-medium">Pickup Date</label>
//               <div className={`flex items-center border rounded p-2 ${activeField === "pickupDate" ? "border-yellow-400" : "border-gray-400"}`}>
//                 <FaCalendarAlt className="mr-2 text-yellow-400" />
//                 <input
//                   type="date"
//                   name="pickupDate"
//                   min={todayISO()}
//                   value={formData.pickupDate}
//                   onChange={handleInputChange}
//                   onFocus={() => setActiveField("pickupDate")}
//                   onBlur={() => setActiveField(null)}
//                   className="w-full bg-transparent outline-none text-white"
//                   required
//                 />
//               </div>
//             </div>
//             <div>
//               <label className="block mb-1 font-medium">Drop Date</label>
//               <div className={`flex items-center border rounded p-2 ${activeField === "dropDate" ? "border-yellow-400" : "border-gray-400"}`}>
//                 <FaCalendarAlt className="mr-2 text-yellow-400" />
//                 <input
//                   type="date"
//                   name="dropDate"
//                   min={formData.pickupDate || todayISO()}
//                   value={formData.dropDate}
//                   onChange={handleInputChange}
//                   onFocus={() => setActiveField("dropDate")}
//                   onBlur={() => setActiveField(null)}
//                   className="w-full bg-transparent outline-none text-white"
//                   required
//                 />
//               </div>
//             </div>
//           </div>

//           <div className="flex flex-col mb-4">
//             <label className="block mb-1 font-medium">Pickup Location</label>
//             <div className={`flex items-center border rounded p-2 ${activeField === "pickupLocation" ? "border-yellow-400" : "border-gray-400"}`}>
//               <FaMapMarkerAlt className="mr-2 text-yellow-400" />
//               <input
//                 type="text"
//                 name="pickupLocation"
//                 placeholder="Enter pickup location"
//                 value={formData.pickupLocation}
//                 onChange={handleInputChange}
//                 onFocus={() => setActiveField("pickupLocation")}
//                 onBlur={() => setActiveField(null)}
//                 className="w-full bg-transparent outline-none text-white"
//                 required
//               />
//             </div>
//           </div>

//           <div className="flex flex-col mb-4">
//             <label className="block mb-1 font-medium">Full Name</label>
//             <div className={`flex items-center border rounded p-2 ${activeField === "name" ? "border-yellow-400" : "border-gray-400"}`}>
//               <FaUser className="mr-2 text-yellow-400" />
//               <input
//                 type="text"
//                 name="name"
//                 placeholder="Your full name"
//                 value={formData.name}
//                 onChange={handleInputChange}
//                 onFocus={() => setActiveField("name")}
//                 onBlur={() => setActiveField(null)}
//                 className="w-full bg-transparent outline-none text-white"
//                 required
//               />
//             </div>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
//             <div>
//               <label className="block mb-1 font-medium">Email Address</label>
//               <div className={`flex items-center border rounded p-2 ${activeField === "email" ? "border-yellow-400" : "border-gray-400"}`}>
//                 <FaEnvelope className="mr-2 text-yellow-400" />
//                 <input
//                   type="email"
//                   name="email"
//                   placeholder="Your email"
//                   value={formData.email}
//                   onChange={handleInputChange}
//                   onFocus={() => setActiveField("email")}
//                   onBlur={() => setActiveField(null)}
//                   className="w-full bg-transparent outline-none text-white"
//                   required
//                 />
//               </div>
//             </div>
//             <div>
//               <label className="block mb-1 font-medium">Phone Number</label>
//               <div className={`flex items-center border rounded p-2 ${activeField === "phone" ? "border-yellow-400" : "border-gray-400"}`}>
//                 <FaPhone className="mr-2 text-yellow-400" />
//                 <input
//                   type="tel"
//                   name="phone"
//                   placeholder="Your phone number"
//                   value={formData.phone}
//                   onChange={handleInputChange}
//                   onFocus={() => setActiveField("phone")}
//                   onBlur={() => setActiveField(null)}
//                   className="w-full bg-transparent outline-none text-white"
//                   required
//                 />
//               </div>
//             </div>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
//             <div>
//               <label className="block mb-1 font-medium">City</label>
//               <div className={`flex items-center border rounded p-2 ${activeField === "city" ? "border-yellow-400" : "border-gray-400"}`}>
//                 <FaCity className="mr-2 text-yellow-400" />
//                 <input
//                   type="text"
//                   name="city"
//                   placeholder="Your city"
//                   value={formData.city}
//                   onChange={handleInputChange}
//                   onFocus={() => setActiveField("city")}
//                   onBlur={() => setActiveField(null)}
//                   className="w-full bg-transparent outline-none text-white"
//                   required
//                 />
//               </div>
//             </div>
//             <div>
//               <label className="block mb-1 font-medium">State</label>
//               <div className={`flex items-center border rounded p-2 ${activeField === "state" ? "border-yellow-400" : "border-gray-400"}`}>
//                 <FaGlobeAsia className="mr-2 text-yellow-400" />
//                 <input
//                   type="text"
//                   name="state"
//                   placeholder="Your state"
//                   value={formData.state}
//                   onChange={handleInputChange}
//                   onFocus={() => setActiveField("state")}
//                   onBlur={() => setActiveField(null)}
//                   className="w-full bg-transparent outline-none text-white"
//                   required
//                 />
//               </div>
//             </div>
//             <div>
//               <label className="block mb-1 font-medium">ZIP Code</label>
//               <div className={`flex items-center border rounded p-2 ${activeField === "zipCode" ? "border-yellow-400" : "border-gray-400"}`}>
//                 <FaMapPin className="mr-2 text-yellow-400" />
//                 <input
//                   type="text"
//                   name="zipCode"
//                   placeholder="ZIP/Postal code"
//                   value={formData.zipCode}
//                   onChange={handleInputChange}
//                   onFocus={() => setActiveField("zipCode")}
//                   onBlur={() => setActiveField(null)}
//                   className="w-full bg-transparent outline-none text-white"
//                   required
//                 />
//               </div>
//             </div>
//           </div>

//           <div className="bg-gray-800 p-4 rounded mb-4">
//             <p className="font-semibold">Total Price: ${totalPrice}</p>
//           </div>

//           <button
//             type="submit"
//             className="w-full bg-yellow-500 hover:bg-yellow-600 text-white py-2 px-4 rounded-lg font-bold flex items-center justify-center"
//           >
//             <FaCreditCard className="mr-2" />
//             Confirm Booking
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// }

// export default CarBooking;
// import React from "react";
// import { useParams } from "react-router-dom";
// // import { cars } from "./Cardsvehiculs";
// import car1 from "../../assets/img/car1.jpg";
// import car2 from "../../assets/img/car2.jpg";
// import car3 from "../../assets/img/car3.jpg";
// import car4 from "../../assets/img/car4.jpg";
// import car5 from "../../assets/img/car5.jpg";
// import car6 from "../../assets/img/car6.jpg";
// function CarBooking() {
// //     const cars = [
// //     {
// //          id: 1,
// //       title: "Range Rover S64 Coupe",
// //       img: car1,
// //       price: "$250/day",
// //       doors: 4,
// //       seats: 5,
// //       transmission: "Automatic",
// //       minAge: 18,
// //       rating: 5,
// //     },
// //     {          id: 2,

// //       title: "Tesla Model X",
// //       img: car2,
// //       price: "$300/day",
// //       doors: 4,
// //       seats: 5,
// //       transmission: "Automatic",
// //       minAge: 21,
// //       rating: 5,
// //     },
// //     {          id: 3,

// //       title: "BMW i8",
// //       img: car3,
// //       price: "$400/day",
// //       doors: 2,
// //       seats: 4,
// //       transmission: "Automatic",
// //       minAge: 21,
// //       rating: 4,
// //     },
// //     {
// //                  id: 4,

// //       title: "Audi Q7",
// //       img: car4,
// //       price: "$350/day",
// //       doors: 4,
// //       seats: 7,
// //       transmission: "Automatic",
// //       minAge: 21,
// //       rating: 5,
// //     },
// //     {          id: 5,

// //       title: "Mercedes GLE",
// //       img: car5,
// //       price: "$380/day",
// //       doors: 4,
// //       seats: 5,
// //       transmission: "Automatic",
// //       minAge: 21,
// //       rating: 5,
// //     },
// //     {
// //       title: "Porsche Taycan",
// //       img: car6,
// //       price: "$450/day",
// //       doors: 4,
// //       seats: 4,
// //       transmission: "Automatic",
// //       minAge: 25,
// //       rating: 5,
// //     },
// //     {
                 

// //       title: "Lexus RX",
// //       img: "https://via.placeholder.com/400x250?text=Car+7",
// //       price: "$320/day",
// //       doors: 4,
// //       seats: 5,
// //       transmission: "Automatic",
// //       minAge: 21,
// //       rating: 4,
// //     },
// //     {
// //       title: "Jaguar F-Type",
// //       img: "https://via.placeholder.com/400x250?text=Car+8",
// //       price: "$420/day",
// //       doors: 2,
// //       seats: 2,
// //       transmission: "Automatic",
// //       minAge: 25,
// //       rating: 5,
// //     },
// //     {
// //       title: "Ford Mustang",
// //       img: "https://via.placeholder.com/400x250?text=Car+9",
// //       price: "$300/day",
// //       doors: 2,
// //       seats: 4,
// //       transmission: "Manual",
// //       minAge: 21,
// //       rating: 4,
// //     },
// //     {
// //       title: "Chevrolet Camaro",
// //       img: "https://via.placeholder.com/400x250?text=Car+10",
// //       price: "$350/day",
// //       doors: 2,
// //       seats: 4,
// //       transmission: "Manual",
// //       minAge: 21,
// //       rating: 4,
// //     },
// //     {
// //       title: "Nissan GT-R",
// //       img: "https://via.placeholder.com/400x250?text=Car+11",
// //       price: "$500/day",
// //       doors: 2,
// //       seats: 2,
// //       transmission: "Automatic",
// //       minAge: 25,
// //       rating: 5,
// //     },
// //     {
// //       title: "Honda Civic",
// //       img: "https://via.placeholder.com/400x250?text=Car+12",
// //       price: "$200/day",
// //       doors: 4,
// //       seats: 5,
// //       transmission: "Automatic",
// //       minAge: 18,
// //       rating: 4,
// //     },
// //     {
// //       title: "Toyota Corolla",
// //       img: "https://via.placeholder.com/400x250?text=Car+13",
// //       price: "$220/day",
// //       doors: 4,
// //       seats: 5,
// //       transmission: "Automatic",
// //       minAge: 18,
// //       rating: 4,
// //     },
// //     {
// //       title: "Kia Sportage",
// //       img: "https://via.placeholder.com/400x250?text=Car+14",
// //       price: "$230/day",
// //       doors: 4,
// //       seats: 5,
// //       transmission: "Automatic",
// //       minAge: 18,
// //       rating: 4,
// //     },
// //     {
// //       title: "Hyundai Tucson",
// //       img: "https://via.placeholder.com/400x250?text=Car+15",
// //       price: "$240/day",
// //       doors: 4,
// //       seats: 5,
// //       transmission: "Automatic",
// //       minAge: 18,
// //       rating: 4,
// //     },
// //     {
// //       title: "Mazda CX-5",
// //       img: "https://via.placeholder.com/400x250?text=Car+16",
// //       price: "$250/day",
// //       doors: 4,
// //       seats: 5,
// //       transmission: "Automatic",
// //       minAge: 18,
// //       rating: 4,
// //     },
// //     {
// //       title: "Subaru Outback",
// //       img: "https://via.placeholder.com/400x250?text=Car+17",
// //       price: "$260/day",
// //       doors: 4,
// //       seats: 5,
// //       transmission: "Automatic",
// //       minAge: 18,
// //       rating: 4,
// //     },
// //     {
// //       title: "Volkswagen Tiguan",
// //       img: "https://via.placeholder.com/400x250?text=Car+18",
// //       price: "$270/day",
// //       doors: 4,
// //       seats: 5,
// //       transmission: "Automatic",
// //       minAge: 18,
// //       rating: 4,
// //     },
// //   ];
// const cars = [
//   {
//     id: 1,
//     title: "Range Rover S64 Coupe",
//     img: car1,
//     price: "$250/day",
//     doors: 4,
//     seats: 5,
//     transmission: "Automatic",
//     minAge: 18,
//     rating: 5,
//   },
//   {
//     id: 2,
//     title: "Tesla Model X",
//     img: car2,
//     price: "$300/day",
//     doors: 4,
//     seats: 5,
//     transmission: "Automatic",
//     minAge: 21,
//     rating: 5,
//   },
//   {
//     id: 3,
//     title: "BMW i8",
//     img: car3,
//     price: "$400/day",
//     doors: 2,
//     seats: 4,
//     transmission: "Automatic",
//     minAge: 21,
//     rating: 4,
//   },
//   {
//     id: 4,
//     title: "Audi Q7",
//     img: car4,
//     price: "$350/day",
//     doors: 4,
//     seats: 7,
//     transmission: "Automatic",
//     minAge: 21,
//     rating: 5,
//   },
//   {
//     id: 5,
//     title: "Mercedes GLE",
//     img: car5,
//     price: "$380/day",
//     doors: 4,
//     seats: 5,
//     transmission: "Automatic",
//     minAge: 21,
//     rating: 5,
//   },
//   {
//     id: 6,
//     title: "Porsche Taycan",
//     img: car6,
//     price: "$450/day",
//     doors: 4,
//     seats: 4,
//     transmission: "Automatic",
//     minAge: 25,
//     rating: 5,
//   },
//   {
//     id: 7,
//     title: "Lexus RX",
//     img: "https://via.placeholder.com/400x250?text=Car+7",
//     price: "$320/day",
//     doors: 4,
//     seats: 5,
//     transmission: "Automatic",
//     minAge: 21,
//     rating: 4,
//   },
//   {
//     id: 8,
//     title: "Jaguar F-Type",
//     img: "https://via.placeholder.com/400x250?text=Car+8",
//     price: "$420/day",
//     doors: 2,
//     seats: 2,
//     transmission: "Automatic",
//     minAge: 25,
//     rating: 5,
//   },
//   {
//     id: 9,
//     title: "Ford Mustang",
//     img: "https://via.placeholder.com/400x250?text=Car+9",
//     price: "$300/day",
//     doors: 2,
//     seats: 4,
//     transmission: "Manual",
//     minAge: 21,
//     rating: 4,
//   },
//   {
//     id: 10,
//     title: "Chevrolet Camaro",
//     img: "https://via.placeholder.com/400x250?text=Car+10",
//     price: "$350/day",
//     doors: 2,
//     seats: 4,
//     transmission: "Manual",
//     minAge: 21,
//     rating: 4,
//   },
//   {
//     id: 11,
//     title: "Nissan GT-R",
//     img: "https://via.placeholder.com/400x250?text=Car+11",
//     price: "$500/day",
//     doors: 2,
//     seats: 2,
//     transmission: "Automatic",
//     minAge: 25,
//     rating: 5,
//   },
//   {
//     id: 12,
//     title: "Honda Civic",
//     img: "https://via.placeholder.com/400x250?text=Car+12",
//     price: "$200/day",
//     doors: 4,
//     seats: 5,
//     transmission: "Automatic",
//     minAge: 18,
//     rating: 4,
//   },
//   {
//     id: 13,
//     title: "Toyota Corolla",
//     img: "https://via.placeholder.com/400x250?text=Car+13",
//     price: "$220/day",
//     doors: 4,
//     seats: 5,
//     transmission: "Automatic",
//     minAge: 18,
//     rating: 4,
//   },
//   {
//     id: 14,
//     title: "Kia Sportage",
//     img: "https://via.placeholder.com/400x250?text=Car+14",
//     price: "$230/day",
//     doors: 4,
//     seats: 5,
//     transmission: "Automatic",
//     minAge: 18,
//     rating: 4,
//   },
//   {
//     id: 15,
//     title: "Hyundai Tucson",
//     img: "https://via.placeholder.com/400x250?text=Car+15",
//     price: "$240/day",
//     doors: 4,
//     seats: 5,
//     transmission: "Automatic",
//     minAge: 18,
//     rating: 4,
//   },
//   {
//     id: 16,
//     title: "Mazda CX-5",
//     img: "https://via.placeholder.com/400x250?text=Car+16",
//     price: "$250/day",
//     doors: 4,
//     seats: 5,
//     transmission: "Automatic",
//     minAge: 18,
//     rating: 4,
//   },
//   {
//     id: 17,
//     title: "Subaru Outback",
//     img: "https://via.placeholder.com/400x250?text=Car+17",
//     price: "$260/day",
//     doors: 4,
//     seats: 5,
//     transmission: "Automatic",
//     minAge: 18,
//     rating: 4,
//   },
//   {
//     id: 18,
//     title: "Volkswagen Tiguan",
//     img: "https://via.placeholder.com/400x250?text=Car+18",
//     price: "$270/day",
//     doors: 4,
//     seats: 5,
//     transmission: "Automatic",
//     minAge: 18,
//     rating: 4,
//   },
// ];

//   const { id } = useParams();
//   const car = cars.find((c) => c.id === parseInt(id));

//   if (!car) {
//     return <div className="text-center text-red-600 mt-5">Car not found!</div>;
//   }

//   return (
//     <div className="container py-5">
//       <h2 className="text-center mb-4">Booking - {car.title}</h2>
//       <div className="row">
//         <div className="col-md-6">
//           <img src={car.img} alt={car.title} className="img-fluid rounded" />
//           <p className="mt-3 fw-bold">{car.price}</p>
//         </div>
//         <div className="col-md-6">
//           {/* FORM - نسخة مطابقة للسكريينشوت */}
//           <form className="p-4 shadow rounded" style={{ backgroundColor: "#f8f9fa" }}>
//             <div className="mb-3">
//               <label className="form-label">Full Name</label>
//               <input type="text" className="form-control" placeholder="Enter your name" />
//             </div>
//             <div className="mb-3">
//               <label className="form-label">Email</label>
//               <input type="email" className="form-control" placeholder="Enter your email" />
//             </div>
//             <div className="mb-3">
//               <label className="form-label">Phone Number</label>
//               <input type="tel" className="form-control" placeholder="Enter your phone number" />
//             </div>
//             <div className="mb-3">
//               <label className="form-label">Pickup Date</label>
//               <input type="date" className="form-control" />
//             </div>
//             <div className="mb-3">
//               <label className="form-label">Return Date</label>
//               <input type="date" className="form-control" />
//             </div>
//             <button type="submit" className="btn btn-primary w-100">Confirm Booking</button>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default CarBooking;
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import {
  FaUser,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaCity,
  FaGlobeAsia,
  FaMapPin,
  FaCalendarAlt,
  FaCreditCard,
} from "react-icons/fa";

// صور السيارات المحلية
import car1 from "../../assets/img/car1.jpg";
import car2 from "../../assets/img/car2.jpg";
import car3 from "../../assets/img/car3.jpg";
import car4 from "../../assets/img/car4.jpg";
import car5 from "../../assets/img/car5.jpg";
import car6 from "../../assets/img/car6.jpg";

// مصفوفة السيارات
const cars = [
  { id: 1, title: "Range Rover S64 Coupe", img: car1, price: 250 },
  { id: 2, title: "Tesla Model X", img: car2, price: 300 },
  { id: 3, title: "BMW i8", img: car3, price: 400 },
  { id: 4, title: "Audi Q7", img: car4, price: 350 },
  { id: 5, title: "Mercedes GLE", img: car5, price: 380 },
  { id: 6, title: "Porsche Taycan", img: car6, price: 450 },
  { id: 7, title: "Lexus RX", img: "https://via.placeholder.com/400x250?text=Car+7", price: 320 },
  { id: 8, title: "Jaguar F-Type", img: "https://via.placeholder.com/400x250?text=Car+8", price: 420 },
  { id: 9, title: "Ford Mustang", img: "https://via.placeholder.com/400x250?text=Car+9", price: 300 },
  { id: 10, title: "Chevrolet Camaro", img: "https://via.placeholder.com/400x250?text=Car+10", price: 350 },
  { id: 11, title: "Nissan GT-R", img: "https://via.placeholder.com/400x250?text=Car+11", price: 500 },
  { id: 12, title: "Honda Civic", img: "https://via.placeholder.com/400x250?text=Car+12", price: 200 },
  { id: 13, title: "Toyota Corolla", img: "https://via.placeholder.com/400x250?text=Car+13", price: 220 },
  { id: 14, title: "Kia Sportage", img: "https://via.placeholder.com/400x250?text=Car+14", price: 230 },
  { id: 15, title: "Hyundai Tucson", img: "https://via.placeholder.com/400x250?text=Car+15", price: 240 },
  { id: 16, title: "Mazda CX-5", img: "https://via.placeholder.com/400x250?text=Car+16", price: 250 },
  { id: 17, title: "Subaru Outback", img: "https://via.placeholder.com/400x250?text=Car+17", price: 260 },
  { id: 18, title: "Volkswagen Tiguan", img: "https://via.placeholder.com/400x250?text=Car+18", price: 270 },
];

const todayISO = () => new Date().toISOString().split("T")[0];

const CarBooking = () => {
  const { id } = useParams();
  const car = cars.find((c) => String(c.id) === String(id));
  const [formData, setFormData] = useState({
    pickupDate: "",
    returnDate: "",
    pickupLocation: "",
    name: "",
    email: "",
    phone: "",
    city: "",
    state: "",
    zipCode: "",
  });
  const [activeField, setActiveField] = useState(null);
  const [submitting, setSubmitting] = useState(false);
  const today = todayISO();

  if (!car) return <div className="text-center text-red-600 mt-5">Car not found!</div>;

  const calculateDays = (from, to) => {
    if (!from || !to) return 1;
    const days = Math.ceil((new Date(to) - new Date(from)) / (1000 * 60 * 60 * 24));
    return Math.max(1, days);
  };

  const days = calculateDays(formData.pickupDate, formData.returnDate);
  const calculateTotal = () => days * car.price;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((f) => ({ ...f, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.pickupDate || !formData.returnDate) {
      alert("Please select pickup and return dates.");
      return;
    }
    if (new Date(formData.returnDate) < new Date(formData.pickupDate)) {
      alert("Return date must be the same or after pickup date.");
      return;
    }
    setSubmitting(true);
    setTimeout(() => {
      alert("Booking submitted successfully!");
      setSubmitting(false);
    }, 1000);
  };

  return (
    <div className="bg-black text-white flex justify-center items-center min-h-screen p-8">
      <div className="grid md:grid-cols-2 gap-8 w-full max-w-6xl">

        {/* Left: Car Details */}
        <div className="bg-gray-900 rounded-2xl shadow-lg overflow-hidden">
          <img src={car.img} alt={car.title} className="w-full h-64 object-cover" />
          <div className="p-6">
            <h2 className="text-2xl font-bold text-yellow-500">{car.title}</h2>
            <p className="text-green-400 text-xl mt-2">${car.price} / day</p>

            <div className="grid grid-cols-4 gap-4 mt-6 text-center text-gray-300">
              <div>
                <p className="text-lg font-bold">4</p>
                <p className="text-sm">Seats</p>
              </div>
              <div>
                <p className="text-lg font-bold">Petrol</p>
                <p className="text-sm">Fuel</p>
              </div>
              <div>
                <p className="text-lg font-bold">20km/l</p>
                <p className="text-sm">Mileage</p>
              </div>
              <div>
                <p className="text-lg font-bold">Auto</p>
                <p className="text-sm">Gear</p>
              </div>
            </div>

            <div className="bg-gray-800 rounded-lg p-4 mt-6">
              <h3 className="text-lg font-semibold">About this car</h3>
              <p className="text-gray-300 text-sm mt-2">
                {car.title} is a comfortable and fuel-efficient car, perfect for city and long trips.
              </p>
            </div>
          </div>
        </div>

        {/* Right: Booking Form */}
        <div className="bg-gray-900 rounded-2xl shadow-lg p-6">
          <h2 className="text-2xl font-bold">
            Reserve <span className="text-yellow-500">Your Drive</span>
          </h2>
          <p className="text-gray-400 text-sm mb-6">Fast - Secure - Easy</p>

          <form className="space-y-4" onSubmit={handleSubmit}>
            {/* Dates */}
            <div className="grid grid-cols-2 gap-4">
              {["pickupDate", "returnDate"].map((field) => (
                <div key={field} className="flex items-center bg-gray-800 rounded-lg p-2">
                  <FaCalendarAlt className="text-yellow-400 mr-2" />
                  <input
                    type="date"
                    name={field}
                    min={field === "pickupDate" ? today : formData.pickupDate || today}
                    value={formData[field]}
                    onChange={handleInputChange}
                    onFocus={() => setActiveField(field)}
                    onBlur={() => setActiveField(null)}
                    className="bg-transparent w-full focus:outline-none"
                    required
                  />
                </div>
              ))}
            </div>

            {/* Pickup Location */}
            <div className="flex items-center bg-gray-800 rounded-lg p-2">
              <FaMapMarkerAlt className="text-yellow-400 mr-2" />
              <input
                type="text"
                placeholder="Pickup Location"
                name="pickupLocation"
                value={formData.pickupLocation}
                onChange={handleInputChange}
                className="bg-transparent w-full focus:outline-none"
                required
              />
            </div>

            {/* Name */}
            <div className="flex items-center bg-gray-800 rounded-lg p-2">
              <FaUser className="text-yellow-400 mr-2" />
              <input
                type="text"
                placeholder="Full Name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className="bg-transparent w-full focus:outline-none"
                required
              />
            </div>

            {/* Email & Phone */}
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center bg-gray-800 rounded-lg p-2">
                <FaEnvelope className="text-yellow-400 mr-2" />
                <input
                  type="email"
                  placeholder="Email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="bg-transparent w-full focus:outline-none"
                  required
                />
              </div>
              <div className="flex items-center bg-gray-800 rounded-lg p-2">
                <FaPhone className="text-yellow-400 mr-2" />
                <input
                  type="tel"
                  placeholder="Phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="bg-transparent w-full focus:outline-none"
                  required
                />
              </div>
            </div>

            {/* City / State / Zip */}
            <div className="grid grid-cols-3 gap-4">
              <div className="flex items-center bg-gray-800 rounded-lg p-2">
                <FaCity className="text-yellow-400 mr-2" />
                <input
                  type="text"
                  placeholder="City"
                  name="city"
                  value={formData.city}
                  onChange={handleInputChange}
                  className="bg-transparent w-full focus:outline-none"
                  required
                />
              </div>
              <div className="flex items-center bg-gray-800 rounded-lg p-2">
                <input
                  type="text"
                  placeholder="State"
                  name="state"
                  value={formData.state}
                  onChange={handleInputChange}
                  className="bg-transparent w-full focus:outline-none"
                  required
                />
              </div>
              <div className="flex items-center bg-gray-800 rounded-lg p-2">
                <input
                  type="text"
                  placeholder="Zip"
                  name="zipCode"
                  value={formData.zipCode}
                  onChange={handleInputChange}
                  className="bg-transparent w-full focus:outline-none"
                  required
                />
              </div>
            </div>

            {/* Price Summary */}
            <div className="flex justify-between mt-4">
              <span className="font-semibold">Price/day</span>
              <span>${car.price}</span>
            </div>
            <div className="flex justify-between">
              <span className="font-bold">Total</span>
              <span className="font-bold">${calculateTotal()}</span>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={submitting}
              className="w-full bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-3 rounded-lg flex justify-center items-center"
            >
              <FaCreditCard className="mr-2" />
              {submitting ? "Confirming..." : "Book Now"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CarBooking;

