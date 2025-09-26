import React, { useState } from "react";

export default function CarForm() {
  const [formData, setFormData] = useState({
    name: "",
    brand: "",
    price: "",
    year: "",
    model: "",
    fuel: "",
    mileage: "",
    seats: "",
    category: "",
    transmission: "",
    description: "",
    image: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData((prev) => ({
        ...prev,
        image: URL.createObjectURL(file),
      }));
    }
  };

  const handleRemoveImage = () => {
    setFormData((prev) => ({ ...prev, image: null }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted:", formData);
  };

  return (
    <div className="form-container">
      <h2>Add New Car</h2>
      <form className="car-form" onSubmit={handleSubmit}>
        {/* جميع الحقول الأخرى */}
        <div className="form-group">
          <label>Car Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Brand</label>
          <input
            type="text"
            name="brand"
            value={formData.brand}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Price ($)</label>
          <input
            type="number"
            name="price"
            value={formData.price}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Year</label>
          <input
            type="number"
            name="year"
            value={formData.year}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Model</label>
          <input
            type="text"
            name="model"
            value={formData.model}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Fuel</label>
          <select name="fuel" value={formData.fuel} onChange={handleChange}>
            <option value="">Select</option>
            <option value="Petrol">Petrol</option>
            <option value="Diesel">Diesel</option>
            <option value="Electric">Electric</option>
            <option value="Hybrid">Hybrid</option>
          </select>
        </div>
        <div className="form-group">
          <label>Mileage (km)</label>
          <input
            type="number"
            name="mileage"
            value={formData.mileage}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Seats</label>
          <input
            type="number"
            name="seats"
            value={formData.seats}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Category</label>
          <input
            type="text"
            name="category"
            value={formData.category}
            onChange={handleChange}
          />
        </div>
        <div className="form-group transmission">
          <label>Transmission</label>
          <div className="radio-group">
            <label>
              <input
                type="radio"
                name="transmission"
                value="Automatic"
                checked={formData.transmission === "Automatic"}
                onChange={handleChange}
              />
              Automatic
            </label>
            <label>
              <input
                type="radio"
                name="transmission"
                value="Manual"
                checked={formData.transmission === "Manual"}
                onChange={handleChange}
              />
              Manual
            </label>
          </div>
        </div>
        <div className="form-group description">
          <label>Description</label>
          <textarea
            name="description"
            rows="4"
            value={formData.description}
            onChange={handleChange}
          />
        </div>

        {/* Upload Image with Remove Button */}
        <div className="form-group image-upload">
          <label htmlFor="image">Upload Image</label>
          <input
            type="file"
            name="image"
            id="image"
            accept="image/*"
            onChange={handleImageChange}
          />
          {formData.image ? (
            <div className="image-preview-wrapper">
              <img
                src={formData.image}
                alt="Preview"
                className="image-preview"
              />
              <button
                type="button"
                className="remove-image-btn"
                onClick={handleRemoveImage}
              >
                Remove
              </button>
            </div>
          ) : (
            <p>Drag & drop or click to upload</p>
          )}
        </div>

        <button type="submit" className="submit-btn">
          Save Car
        </button>
      </form>

      {/* CSS داخل المكون */}
      <style>{`
        body {
          background: linear-gradient(135deg, #1e293b, #0f172a);
          font-family: Arial, sans-serif;
          color: white;
          margin: 0;
          padding: 20px;
        }
        .form-container {
          max-width: 1000px;
          margin: auto;
          background: #111827;
          padding: 30px;
          border-radius: 12px;
          box-shadow: 0 6px 15px rgba(0,0,0,0.6);
        }
        h2 {
          text-align: center;
          margin-bottom: 20px;
          color: #f97316;
        }
        .car-form {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
        }
        .form-group {
          display: flex;
          flex-direction: column;
        }
        .form-group label {
          margin-bottom: 6px;
          font-weight: bold;
          color: #e5e7eb;
        }
        .form-container input,
        .form-container select,
        .form-container textarea {
          padding: 10px;
          border-radius: 8px;
          border: 1px solid #374151;
          background: #1f2937;
          color: white;
          font-size: 14px;
        }
        textarea {
          resize: none;
        }
        .transmission .radio-group {
          display: flex;
          gap: 20px;
          margin-top: 8px;
        }
        .radio-group label {
          display: flex;
          align-items: center;
          gap: 6px;
        }
        .image-upload {
          grid-column: span 2;
          border: 2px dashed #6b7280;
          border-radius: 12px;
          padding: 20px;
          text-align: center;
          cursor: pointer;
          position: relative;
          background-color: #1f2937;
          min-height: 200px;
          display: flex;
          justify-content: center;
          align-items: center;
          overflow: hidden;
        }
        .image-upload input {
          position: absolute;
          inset: 0;
          opacity: 0;
          cursor: pointer;
        }
        .image-preview-wrapper {
          position: relative;
          display: inline-block;
          width: 100%;
          height: 100%;
        }
        .image-preview {
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: 12px;
        }
        .remove-image-btn {
          position: absolute;
          top: 5px;
          right: 5px;
          background: rgba(255, 0, 0, 0.7);
          border: none;
          color: white;
          padding: 4px 8px;
          cursor: pointer;
          border-radius: 6px;
          font-size: 12px;
        }
        .submit-btn {
          grid-column: span 2;
          padding: 12px;
          border: none;
          border-radius: 8px;
          background: #f97316;
          color: white;
          font-size: 16px;
          font-weight: bold;
          cursor: pointer;
          transition: background 0.3s;
        }
        .submit-btn:hover {
          background: #ea580c;
        }
      `}</style>
    </div>
  );
}
