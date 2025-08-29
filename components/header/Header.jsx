import React from "react";
import "./header.css";
function Header() {
  return (
   <div className="scroll-container cursor-hover">
        <div className="marquee cursor-hover">
            <div className="marquee__group cursor-hover">
                <div className="marquee__item cursor-hover">Consulting that Cares. Results that Last.</div>
                <div className="marquee__item cursor-hover">Solutions That Work for You.</div>
                <div className="marquee__item cursor-hover">Guidance That Moves You Forward.</div>
            </div>
            
            <div className="marquee__group cursor-hover">
                <div className="marquee__item cursor-hover">Consulting that Cares. Results that Last.</div>
                <div className="marquee__item cursor-hover">Solutions That Work for You.</div>
                <div className="marquee__item cursor-hover">Guidance That Moves You Forward.</div>
            </div>
        </div>
    </div>
  );
}

export default Header
