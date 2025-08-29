import React, { useState, useEffect } from 'react';
import { Link, NavLink } from "react-router-dom";
import "./home.css";
import img1 from "../../src/assets/1.jpeg";
import img2 from "../../src/assets/2.jpeg";
import img3 from "../../src/assets/3.jpeg";
import img4 from "../../src/assets/4.jpeg";
import img5 from "../../src/assets/5.jpeg";
import img6 from "../../src/assets/6.jpg";
import img7 from "../../src/assets/7.jpg";
import img8 from "../../src/assets/8.jpg";
import img9 from "../../src/assets/9.jpg";
import img10 from "../../src/assets/10.jpg";
import img11 from "../../src/assets/11.png";
import img12 from "../../src/assets/12.jpg";
import pp from "../../src/assets/profile.jpeg";
import { LiaBrainSolid } from "react-icons/lia";
import { LiaHeartbeatSolid } from "react-icons/lia";
import { IoStar } from "react-icons/io5";


function Home() {
  const originalImages = [img1, img2, img3, img4, img5];
  
  // Add the first image at the end for seamless loop
  const images = [...originalImages, originalImages[0]];
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent(prev => prev + 1);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  // Handle seamless reset when reaching the duplicate
  useEffect(() => {
    if (current === originalImages.length) {
      const timer = setTimeout(() => {
        setCurrent(0);
      }, 600); // Wait for transition to complete
      return () => clearTimeout(timer);
    }
  }, [current, originalImages.length]);

  // Transform values for each slide position
  const getTransform = (slideIndex) => {
    const transforms = {
      0: 'translateX(0%)',      // Image 1
      1: 'translateX(-100%)',   // Image 2  
      2: 'translateX(-200%)',   // Image 3
      3: 'translateX(-300%)',   // Image 4
      4: 'translateX(-400%)',   // Image 5
      5: 'translateX(-500%)'    // Duplicate Image 1
    };
    return transforms[slideIndex] || 'translateX(0%)';
  };

  return (
    <section id="home">
      <div className="slider">
        <div 
          className="slider-track"
          style={{
            transform: getTransform(current),
            transition: current === 0 && current !== originalImages.length ? 'none' : 'transform 0.6s ease-in-out'
          }}
        >
          {images.map((img, i) => (
            <img key={i} src={img} alt={`slide-${i}`} draggable={false}/>
          ))}
        </div>

        <div className="slider-text">
          <h1>Healing & Growth</h1>
          <p>Supporting you through clarity, strength, and self-discovery.</p>
          <p>Your well-being matters – let’s take the first step together.</p>
          <Link to={"/contactus"}><button id='homebtn' className="btn cursor-hover">Appointment</button></Link>
        </div>
      </div>
      <div className="home-text slant">
        <h1>What Drives My Work?</h1>
        Here, I work to heal deep wounds and support individuals in navigating
        pain, grief, relationships, anxiety, depression, career challenges,
        confidence issues, personality development, behavioral patterns, and
        more. Through thoughtful guidance, psychological insights, and
        meaningful discussions, I help you move toward clarity, strength, and
        self-discovery.
      </div>

      <div className="intro">
        <div className="left">
          <div className="up">
            <LiaBrainSolid className='icon'/>
            <h1>Psychological Healing</h1>
            <p>I help individuals overcome emotional struggles, guiding them toward inner peace and resilience.</p>
            <NavLink to={"/services"}>See More</NavLink>
          </div>
          <div className="down">
            <LiaHeartbeatSolid className='icon' />
            <h1>Counselling</h1>
            <p>Through empathy and practical strategies, I support personal growth, self-awareness, and mental well-being.</p>
            <NavLink to={"/services"}>See More</NavLink>
          </div>
        </div>
        <div className="middle">
          <div className="circle-img"><img src={pp} alt="profile pic" /></div>
        </div>
        <div className="right">
          <div className="number">
            <h1>400+</h1>
            <p>Clients</p>
            <p>Collaborations</p>
          </div>
          <div className="number">
            <h1>6+</h1>
            <p>Years of Experience</p>
          </div>
          <div className="number">
            <h1>1000+</h1>
            <p>5<IoStar /> reviews</p>
            <div className="stackedimg">
              <img src={img6} alt="" />
              <img src={img7} alt="" />
              <img src={img8} alt="" />
            </div>
          </div>
        </div>
      </div>

      <div className="help">
        <h1>Ready to take your next step?</h1>
        <div className="help-cont">
          <div className="helpleft">
          <div className="card">
            <div className="help-img-cont">
              <img src={img9} alt="" />
            </div>
            <div className="info-cont">
              <p>Through empathy and practical strategies</p>
              <h1>Stress Management</h1>
              <p>Do you feel overwhelmed and struggle to find balance in your daily life? Let’s work together to develop healthy coping strategies that bring you peace and clarity.</p>
            </div>
          </div>
          <div className="card">
            <div className="help-img-cont">
              <img src={img10} alt="" />
            </div>
            <div className="info-cont">
              <p>Through empathy and practical strategies</p>
              <h1>Dating & Relationship</h1>
              <p>Are you facing challenges in your relationships or finding it hard to connect with others? I can help you build healthier bonds and navigate love with confidence.</p>
            </div>
          </div>
        </div>
        <div className="helpright">
          <div className="card">
            <div className="help-img-cont">
              <img src={img11} alt="" />
            </div>
            <div className="info-cont">
              <p>Through empathy and practical strategies</p>
              <h1>Self-Esteem/Confidence</h1>
              <p>Do self-doubt and negative thoughts hold you back? Let’s work on strengthening your self-worth and embracing your true potential.</p>
            </div>
          </div>
          <div className="card">
            <div className="help-img-cont">
              <img src={img12} alt="" />
            </div>
            <div className="info-cont">
              <p>Through empathy and practical strategies</p>
              <h1>Past Trauma</h1>
              <p>Is your past pain affecting your present life and relationships? I provide a safe space to help you heal, process, and move forward with strength.</p>
            </div>
          </div>
        </div>
        </div>
      </div>
    </section>
  );
}

export default Home;