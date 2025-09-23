import React, { useState } from "react";
import { FaMapMarkerAlt, FaCalendarAlt, FaUser, FaEnvelope, FaPhone, FaCity } from "react-icons/fa";

function CarBooking() {
  const [pickupDate, setPickupDate] = useState("");
  const [returnDate, setReturnDate] = useState("");

  return (
    <div className="min-h-screen bg-black text-white flex justify-center items-center p-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-6xl">
        
        {/* Left Side - Car Info */}
        <div className="bg-gray-900 p-6 rounded-lg">
          <img
            src="https://cdn.carbuzz.com/gallery-images/2023-hyundai-elantra-n-line-carbuzz-858177-1600.jpg"
            alt="Hyundai"
            className="rounded-lg mb-4"
          />
          <h2 className="text-2xl font-bold text-yellow-500">Hyundai</h2>
          <p className="text-green-400 text-xl mb-4">$199997 / day</p>

          <div className="grid grid-cols-4 gap-4 text-center mb-6">
            <div>
              <p className="text-lg">4</p>
              <p className="text-sm">Seats</p>
            </div>
            <div>
              <p className="text-lg">Petrol</p>
              <p className="text-sm">Fuel</p>
            </div>
            <div>
              <p className="text-lg">78 kmpl</p>
              <p className="text-sm">Mileage</p>
            </div>
            <div>
              <p className="text-lg">Manual</p>
              <p className="text-sm">Transmission</p>
            </div>
          </div>

          <div className="bg-gray-800 p-4 rounded-lg">
            <h3 className="text-lg font-semibold mb-2">About this car</h3>
            <p className="text-sm text-gray-300">
              Experience luxury in the Hyundai. With its manual transmission and seating for 4,
              every journey is exceptional. Includes 24/7 roadside assistance and unlimited mileage.
            </p>
          </div>
        </div>

        {/* Right Side - Booking Form */}
        <div className="bg-gray-900 p-6 rounded-lg">
          <h2 className="text-2xl font-bold mb-4">
            Reserve <span className="text-yellow-500">Your Drive</span>
          </h2>
          <p className="text-gray-400 mb-4">Fast - Secure - Easy</p>

          <form className="space-y-4">
            {/* Dates */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm mb-1">Pickup Date</label>
                <div className="flex items-center bg-gray-800 p-2 rounded-lg">
                  <FaCalendarAlt className="mr-2 text-yellow-400" />
                  <input
                    type="date"
                    value={pickupDate}
                    onChange={(e) => setPickupDate(e.target.value)}
                    className="bg-transparent w-full outline-none"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm mb-1">Return Date</label>
                <div className="flex items-center bg-gray-800 p-2 rounded-lg">
                  <FaCalendarAlt className="mr-2 text-yellow-400" />
                  <input
                    type="date"
                    value={returnDate}
                    onChange={(e) => setReturnDate(e.target.value)}
                    className="bg-transparent w-full outline-none"
                  />
                </div>
              </div>
            </div>

            {/* Pickup Location */}
            <div>
              <label className="block text-sm mb-1">Pickup Location</label>
              <div className="flex items-center bg-gray-800 p-2 rounded-lg">
                <FaMapMarkerAlt className="mr-2 text-yellow-400" />
                <input
                  type="text"
                  placeholder="Enter pickup location"
                  className="bg-transparent w-full outline-none"
                />
              </div>
            </div>

            {/* Personal Info */}
            <div>
              <label className="block text-sm mb-1">Full Name</label>
              <div className="flex items-center bg-gray-800 p-2 rounded-lg">
                <FaUser className="mr-2 text-yellow-400" />
                <input
                  type="text"
                  placeholder="Your full name"
                  className="bg-transparent w-full outline-none"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm mb-1">Email Address</label>
                <div className="flex items-center bg-gray-800 p-2 rounded-lg">
                  <FaEnvelope className="mr-2 text-yellow-400" />
                  <input
                    type="email"
                    placeholder="Your email"
                    className="bg-transparent w-full outline-none"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm mb-1">Phone Number</label>
                <div className="flex items-center bg-gray-800 p-2 rounded-lg">
                  <FaPhone className="mr-2 text-yellow-400" />
                  <input
                    type="tel"
                    placeholder="Your phone number"
                    className="bg-transparent w-full outline-none"
                  />
                </div>
              </div>
            </div>

            {/* City, State, Zip */}
            <div className="grid grid-cols-3 gap-4">
              <div>
                <label className="block text-sm mb-1">City</label>
                <div className="flex items-center bg-gray-800 p-2 rounded-lg">
                  <FaCity className="mr-2 text-yellow-400" />
                  <input
                    type="text"
                    placeholder="Your city"
                    className="bg-transparent w-full outline-none"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm mb-1">State</label>
                <input
                  type="text"
                  placeholder="Your state"
                  className="bg-gray-800 p-2 rounded-lg w-full outline-none"
                />
              </div>
              <div>
                <label className="block text-sm mb-1">Zip Code</label>
                <input
                  type="text"
                  placeholder="ZIP/Post"
                  className="bg-gray-800 p-2 rounded-lg w-full outline-none"
                />
              </div>
            </div>

            {/* Price */}
            <div className="flex justify-between items-center text-lg font-semibold">
              <p>Rate/day</p>
              <p>$199997</p>
            </div>
            <div className="flex justify-between items-center text-lg font-bold">
              <p>Total</p>
              <p>$199997</p>
            </div>

            {/* Button */}
            <button className="w-full bg-yellow-500 hover:bg-yellow-600 transition rounded-lg py-3 font-bold">
              Confirm Booking
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default CarBooking;
