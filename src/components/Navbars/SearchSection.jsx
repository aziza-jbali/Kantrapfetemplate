import React, { useState } from "react";

// import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

function TripForm () {
  return (
    <div className="container my-5">
      <form className="trip-form bg-white p-4 shadow rounded">
        {/* العنوان وعدد السيارات */}
        <div className="row align-items-center mb-4">
          <div className="col-md-6">
            <h3 className="m-0">Begin your trip here</h3>
          </div>
          <div className="col-md-6 text-md-end">
            <span className="text-primary fw-bold">32</span>{" "}
            <span>cars available</span>
          </div>
        </div>

        {/* الفورم */}
        <div className="row g-3">
          <div className="col-md-3">
            <label htmlFor="cf-1" className="form-label">
              Where you from
            </label>
            <input
              type="text"
              id="cf-1"
              placeholder="Your pickup address"
              className="form-control"
            />
          </div>

          <div className="col-md-3">
            <label htmlFor="cf-2" className="form-label">
              Where you go
            </label>
            <input
              type="text"
              id="cf-2"
              placeholder="Your drop-off address"
              className="form-control"
            />
          </div>

          <div className="col-md-3">
            <label htmlFor="cf-3" className="form-label">
              Journey date
            </label>
            <input type="date" id="cf-3" className="form-control" />
          </div>

          <div className="col-md-3">
            <label htmlFor="cf-4" className="form-label">
              Return date
            </label>
            <input type="date" id="cf-4" className="form-control" />
          </div>
        </div>

        {/* الزر */}
        <div className="row mt-4">
          <div className="col-lg-6">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default TripForm;
