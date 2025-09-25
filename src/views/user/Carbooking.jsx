

import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { FaUser, FaEnvelope, FaPhone, FaCalendarAlt, FaMapMarkerAlt, FaCity, FaGlobeAsia, FaMapPin, FaCreditCard, FaArrowLeft } from "react-icons/fa";

// Sample car images (replace with your imports)
import car1 from "../../assets/img/car1.jpg";
import car2 from "../../assets/img/car2.jpg";
import car3 from "../../assets/img/car3.jpg";
import car4 from "../../assets/img/car4.jpg";
import car5 from "../../assets/img/car5.jpg";
import car6 from "../../assets/img/car6.jpg";

// const cars = [
//   { id: 1, title: "Range Rover S64 Coupe", img: car1, price: 250, seats: 5, fuel: "Petrol", mileage: 12, transmission: "Automatic", description: "Luxury SUV for comfortable trips." },
//   { id: 2, title: "Tesla Model X", img: car2, price: 300, seats: 5, fuel: "Electric", mileage: 0, transmission: "Automatic", description: "High tech electric SUV." },
//   { id: 3, title: "BMW i8", img: car3, price: 400, seats: 2, fuel: "Hybrid", mileage: 18, transmission: "Automatic", description: "Sports car with hybrid technology." },
//   { id: 4, title: "Audi Q7", img: car4, price: 350, seats: 7, fuel: "Diesel", mileage: 14, transmission: "Automatic", description: "Spacious SUV for family trips." },
//   { id: 5, title: "Mercedes GLE", img: car5, price: 380, seats: 5, fuel: "Petrol", mileage: 13, transmission: "Automatic", description: "Premium SUV with comfort features." },
//   { id: 6, title: "Porsche Taycan", img: car6, price: 450, seats: 4, fuel: "Electric", mileage: 0, transmission: "Automatic", description: "Electric sports car for enthusiasts." },
// ];
const cars = [
  {
    id: 1,
    title: "Range Rover S64 Coupe",
    img: car1,
    price: "$250/day",
    doors: 4,
    seats: 5,
    transmission: "Automatic",
    minAge: 18,
    rating: 5,
  },
  {
    id: 2,
    title: "Tesla Model X",
    img: car2,
    price: "$300/day",
    doors: 4,
    seats: 5,
    transmission: "Automatic",
    minAge: 21,
    rating: 5,
  },
  {
    id: 3,
    title: "BMW i8",
    img: car3,
    price: "$400/day",
    doors: 2,
    seats: 4,
    transmission: "Automatic",
    minAge: 21,
    rating: 4,
  },
  {
    id: 4,
    title: "Audi Q7",
    img: car4,
    price: "$350/day",
    doors: 4,
    seats: 7,
    transmission: "Automatic",
    minAge: 21,
    rating: 5,
  },
  {
    id: 5,
    title: "Mercedes GLE",
    img: car5,
    price: "$380/day",
    doors: 4,
    seats: 5,
    transmission: "Automatic",
    minAge: 21,
    rating: 5,
  },
  {
    id: 6,
    title: "Porsche Taycan",
    img: car6,
    price: "$450/day",
    doors: 4,
    seats: 4,
    transmission: "Automatic",
    minAge: 25,
    rating: 5,
  },
  {
    id: 7,
    title: "Lexus RX",
    img: "https://via.placeholder.com/400x250?text=Car+7",
    price: "$320/day",
    doors: 4,
    seats: 5,
    transmission: "Automatic",
    minAge: 21,
    rating: 4,
  },
  {
    id: 8,
    title: "Jaguar F-Type",
    img: "https://via.placeholder.com/400x250?text=Car+8",
    price: "$420/day",
    doors: 2,
    seats: 2,
    transmission: "Automatic",
    minAge: 25,
    rating: 5,
  },
  {
    id: 9,
    title: "Ford Mustang",
    img: "https://via.placeholder.com/400x250?text=Car+9",
    price: "$300/day",
    doors: 2,
    seats: 4,
    transmission: "Manual",
    minAge: 21,
    rating: 4,
  },
  {
    id: 10,
    title: "Chevrolet Camaro",
    img: "https://via.placeholder.com/400x250?text=Car+10",
    price: "$350/day",
    doors: 2,
    seats: 4,
    transmission: "Manual",
    minAge: 21,
    rating: 4,
  },
  {
    id: 11,
    title: "Nissan GT-R",
    img: "https://via.placeholder.com/400x250?text=Car+11",
    price: "$500/day",
    doors: 2,
    seats: 2,
    transmission: "Automatic",
    minAge: 25,
    rating: 5,
  },
  {
    id: 12,
    title: "Honda Civic",
    img: "https://via.placeholder.com/400x250?text=Car+12",
    price: "$200/day",
    doors: 4,
    seats: 5,
    transmission: "Automatic",
    minAge: 18,
    rating: 4,
  },
  {
    id: 13,
    title: "Toyota Corolla",
    img: "https://via.placeholder.com/400x250?text=Car+13",
    price: "$220/day",
    doors: 4,
    seats: 5,
    transmission: "Automatic",
    minAge: 18,
    rating: 4,
  },
  {
    id: 14,
    title: "Kia Sportage",
    img: "https://via.placeholder.com/400x250?text=Car+14",
    price: "$230/day",
    doors: 4,
    seats: 5,
    transmission: "Automatic",
    minAge: 18,
    rating: 4,
  },
  {
    id: 15,
    title: "Hyundai Tucson",
    img: "https://via.placeholder.com/400x250?text=Car+15",
    price: "$240/day",
    doors: 4,
    seats: 5,
    transmission: "Automatic",
    minAge: 18,
    rating: 4,
  },
  {
    id: 16,
    title: "Mazda CX-5",
    img: "https://via.placeholder.com/400x250?text=Car+16",
    price: "$250/day",
    doors: 4,
    seats: 5,
    transmission: "Automatic",
    minAge: 18,
    rating: 4,
  },
  {
    id: 17,
    title: "Subaru Outback",
    img: "https://via.placeholder.com/400x250?text=Car+17",
    price: "$260/day",
    doors: 4,
    seats: 5,
    transmission: "Automatic",
    minAge: 18,
    rating: 4,
  },
  {
    id: 18,
    title: "Volkswagen Tiguan",
    img: "https://via.placeholder.com/400x250?text=Car+18",
    price: "$270/day",
    doors: 4,
    seats: 5,
    transmission: "Automatic",
    minAge: 18,
    rating: 4,
  },
];
function CarBooking() {
  const { id } = useParams();
  const car = cars.find(c => c.id === parseInt(id)) || cars[0]; // fallback to first car if id invalid

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

  const calculateDays = (from, to) => {
    if (!from || !to) return 1;
    const days = Math.ceil((new Date(to) - new Date(from)) / (1000*60*60*24));
    return Math.max(1, days);
  };

  const days = calculateDays(formData.pickupDate, formData.returnDate);
  const total = days * car.price;

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData({...formData, [name]: value});
  };

  const handleSubmit = e => {
    e.preventDefault();
    alert(`Booking confirmed!\nName: ${formData.name}\nTotal Price: $${total}`);
  };

  return (
    <div style={styles.pageContainer}>
      {/* Left Column */}
      <div style={styles.leftColumn}>
        <img src={car.img} alt={car.title} style={styles.carImage} />
        <h1>{car.title}</h1>
        <p style={{margin: "5px 0"}}>${car.price} <span style={{fontSize:"14px"}}>/ day</span></p>

        <div style={styles.specsGrid}>
          <div style={styles.specCard}><p>Seats</p><p>{car.seats}</p></div>
          <div style={styles.specCard}><p>Fuel</p><p>{car.fuel}</p></div>
          <div style={styles.specCard}><p>Mileage</p><p>{car.mileage} km/l</p></div>
          <div style={styles.specCard}><p>Transmission</p><p>{car.transmission}</p></div>
        </div>

        <h2>About this car</h2>
        <p>{car.description}</p>
        <ul>
          <li>Free cancellation</li>
          <li>24/7 Roadside assistance</li>
          <li>Unlimited mileage</li>
          <li>Collision damage waiver</li>
        </ul>
      </div>

      {/* Right Column */}
      <div style={styles.rightColumn}>
        <Link to="/" style={styles.backButton}><FaArrowLeft /> Back</Link>
        <h2>Reserve Your Drive</h2>
        <form onSubmit={handleSubmit} style={styles.form}>

          {/* Dates Row */}
          <div style={styles.grid2}>
            <div style={styles.inputGroup}>
              <label>Pickup Date</label>
              <div style={styles.inputWrapper}>
                <FaCalendarAlt style={styles.icon} />
                <input type="date" name="pickupDate" value={formData.pickupDate} onChange={handleChange} required style={styles.inputField}/>
              </div>
            </div>
            <div style={styles.inputGroup}>
              <label>Return Date</label>
              <div style={styles.inputWrapper}>
                <FaCalendarAlt style={styles.icon} />
                <input type="date" name="returnDate" value={formData.returnDate} onChange={handleChange} required style={styles.inputField}/>
              </div>
            </div>
          </div>

          {/* Pickup Location */}
          <div style={styles.inputGroup}>
            <label>Pickup Location</label>
            <div style={styles.inputWrapper}>
              <FaMapMarkerAlt style={styles.icon} />
              <input type="text" name="pickupLocation" value={formData.pickupLocation} onChange={handleChange} required style={styles.inputField}/>
            </div>
          </div>

          {/* Name, Email */}
          <div style={styles.grid2}>
            <div style={styles.inputGroup}>
              <label>Full Name</label>
              <div style={styles.inputWrapper}>
                <FaUser style={styles.icon} />
                <input type="text" name="name" value={formData.name} onChange={handleChange} required style={styles.inputField}/>
              </div>
            </div>
            <div style={styles.inputGroup}>
              <label>Email</label>
              <div style={styles.inputWrapper}>
                <FaEnvelope style={styles.icon} />
                <input type="email" name="email" value={formData.email} onChange={handleChange} required style={styles.inputField}/>
              </div>
            </div>
          </div>

          {/* Phone */}
          <div style={styles.inputGroup}>
            <label>Phone</label>
            <div style={styles.inputWrapper}>
              <FaPhone style={styles.icon} />
              <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required style={styles.inputField}/>
            </div>
          </div>

          {/* City, State, ZIP */}
          <div style={styles.grid3}>
            <div style={styles.inputGroup}>
              <label>City</label>
              <div style={styles.inputWrapper}>
                <FaCity style={styles.icon} />
                <input type="text" name="city" value={formData.city} onChange={handleChange} required style={styles.inputField}/>
              </div>
            </div>
            <div style={styles.inputGroup}>
              <label>State</label>
              <div style={styles.inputWrapper}>
                <FaGlobeAsia style={styles.icon} />
                <input type="text" name="state" value={formData.state} onChange={handleChange} required style={styles.inputField}/>
              </div>
            </div>
            <div style={styles.inputGroup}>
              <label>ZIP Code</label>
              <div style={styles.inputWrapper}>
                <FaMapPin style={styles.icon} />
                <input type="text" name="zipCode" value={formData.zipCode} onChange={handleChange} required style={styles.inputField}/>
              </div>
            </div>
          </div>

          {/* Price Breakdown */}
          <div style={styles.priceBreakdown}>
            <div style={styles.priceRow}><span>Rate/day</span><span>${car.price}</span></div>
            <div style={styles.priceRow}><span>Days</span><span>{days}</span></div>
            <div style={styles.totalRow}><span>Total</span><span>${total}</span></div>
          </div>

          {/* Submit */}
          <button type="submit" style={styles.submitButton}><FaCreditCard style={{marginRight:"5px"}}/> Confirm Booking</button>
        </form>
      </div>
    </div>
  );
}

// Styles
const styles = {
  pageContainer: { display: "flex", flexWrap:"wrap", gap:"20px", padding:"20px", color:"#fff", background:"#1a1a1a" },
  leftColumn: { flex:2, minWidth:"300px" },
  rightColumn: { flex:1, minWidth:"300px", background:"#2a2a2a", padding:"20px", borderRadius:"10px" },
  carImage: { width:"100%", height:"200px", objectFit:"cover", borderRadius:"10px", marginBottom:"15px" },
  specsGrid: { display:"flex", gap:"10px", flexWrap:"wrap", marginTop:"15px", marginBottom:"15px" },
  specCard: { background:"#3a3a3a", borderRadius:"8px", padding:"10px", textAlign:"center", flex:"1 1 100px" },
  form: { display:"flex", flexDirection:"column", gap:"10px" },
  inputGroup: { display:"flex", flexDirection:"column", marginBottom:"10px" },
  inputWrapper: { display:"flex", alignItems:"center", background:"#3a3a3a", borderRadius:"6px", padding:"5px 10px" },
  icon: { marginRight:"8px", color:"#ffa500" },
  inputField: { flex:1, padding:"8px", border:"none", borderRadius:"4px", outline:"none", background:"#2a2a2a", color:"#fff" },
  grid2: { display:"flex", gap:"10px", flexWrap:"wrap" },
  grid3: { display:"flex", gap:"10px", flexWrap:"wrap" },
  priceBreakdown: { background:"#3a3a3a", padding:"10px", borderRadius:"8px", margin:"10px 0" },
  priceRow: { display:"flex", justifyContent:"space-between", marginBottom:"5px" },
  totalRow: { display:"flex", justifyContent:"space-between", fontWeight:"bold" },
  submitButton: { background:"#ffa500", border:"none", padding:"10px", borderRadius:"6px", color:"#000", fontWeight:"bold", cursor:"pointer", display:"flex", alignItems:"center", justifyContent:"center" },
  backButton: { background:"#555", border:"none", padding:"5px 10px", borderRadius:"6px", color:"#fff", marginBottom:"15px", cursor:"pointer", display:"flex", alignItems:"center", gap:"5px", textDecoration:"none" }
};

export default CarBooking;

