import React from "react";
import "./ServiceCard.css";
import { Link } from 'react-router-dom'

function ServiceCard({ image, title, description, className }) {
  return (
    <div className={`card-container cursor-hover ${className || ""}`}>
      <div className="image-container cursor-hover">
        {image && <img src={image} alt={title} className="cursor-hover" />}
        {/* Stars around */}
        <div className="stars-around star-1">⭐</div>
        <div className="stars-around star-2">⭐</div>
        <div className="stars-around star-3">⭐</div>
        <div className="stars-around star-4">⭐</div>
      </div>

      <div className="content-box cursor-hover">
        {title && <div className="header-title cursor-hover">{title}</div>}

        {/* Clouds decoration */}
        <div className="clouds-decoration cursor-hover">☁️ ☁️ ☁️</div>

        {/* Fixed author name */}
        <div className="author-name cursor-hover">with Bhawana Joshi</div>

        {description && (
          <div className="content-description cursor-hover">
            {description.split("\n").map((line, i) => (
              <React.Fragment key={i}>
                {line}
                <br />
              </React.Fragment>
            ))}
          </div>
        )}

        {/* Button */}
        <Link to={"/contactus"}><button className="play-btn contact-btn cursor-hover">Book Now</button></Link>
      </div>
    </div>
  );
}

export default ServiceCard;