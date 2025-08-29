import React from 'react'
import logo2 from "../../src/assets/logo2.png"
import { FaInstagram } from "react-icons/fa";
import { PiLinkedinLogoBold } from "react-icons/pi";
import { LiaHandshake } from "react-icons/lia";
import "./footer.css"

function Footer() {
  return (
    <div>
      <footer className='footer'>
        
        <p>“I bridge the mind and the moment—teaching, healing, and shaping perspectives to turn uncertainty into clarity and potential into purpose.”</p>
        
        <div className="down-footer">
          <div className='footer-img-cont'>
            <img src={logo2} alt="" />
            <LiaHandshake size={140} color='#7a1e21'/>
          </div>
          <div className='social'>
            <div className="icon-cont cursor-hover">
              <a className="cursor-hover" href="https://www.instagram.com/the_psychology_lady/"><FaInstagram className="cursor-hover" size={50} color='#7a1e21'/></a>
            </div>
            <div className="icon-cont linkedin cursor-hover">
              <a className="cursor-hover" href="https://www.linkedin.com/in/bhawana-joshi-58b8a9296/"><PiLinkedinLogoBold className="cursor-hover" size={48} color='#7a1e21'/></a>
            </div>
          </div>
        </div>
      </footer>
      <div className="copyright">Copyright © 2025 <a className="cursor-hover" href="https://thepsychologylady.netlify.app/" target='_blank'>The Psychology Lady</a></div>
    </div>
  )
}

export default Footer
