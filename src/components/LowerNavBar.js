import React from 'react'
import { Link } from 'react-router-dom'
import { FaCloudSun } from 'react-icons/fa'
export default function LowerNavBar() {
    return (
      <nav className="lowerNav">
        <div className="lowerNav__container">
          <div className="lowerNav-links col col-md-9">
            <p>
              Promotion: Get Up To 15% Instant Booking Credit
            </p>
          </div>
          <div className="weather-container col col-md-3">
            <p>
              87°
              <FaCloudSun />
            </p>
          </div>
        </div>
      </nav>
    );
}
