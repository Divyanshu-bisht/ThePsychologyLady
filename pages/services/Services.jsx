import React, { useRef } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer"; // ✅ already imported
import ServiceCard from "../../components/serviceCard/ServiceCard";
import "./services.css";

// Import your images
import img13 from "../../src/assets/13.jpg";
import img14 from "../../src/assets/14.jpg";
import img15 from "../../src/assets/15.jpg";
import img16 from "../../src/assets/16.jpg";
import img17 from "../../src/assets/17.jpg";
import img18 from "../../src/assets/18.jpg";
import img19 from "../../src/assets/19.jpg";
import img20 from "../../src/assets/20.jpg";
import img21 from "../../src/assets/21.jpg";
import img22 from "../../src/assets/22.jpg";
import pp from "../../src/assets/image1.jpg";

const Services = () => {
  const containerRef = useRef(null);

  // Array of card data
  const servicesData = [
    { 
      image: img13, 
      title: "Healing Past Traumas", 
      description: "Unresolved pain can shape your present and hold you back. Through guided therapy and trauma healing, I help you process deep-seated wounds, release emotional burdens, and find inner peace.",
      className: "card-blue"
    },
    { 
      image: img14, 
      title: "Shadow Healing", 
      description: "The parts of yourself that you suppress often hold the key to your transformation. I guide you through shadow healing, helping you acknowledge hidden fears, insecurities, and emotions to foster self-awareness and empowerment.",
      className: "card-pink"
    },
    { 
      image: img15, 
      title: "Inner Child Healing", 
      description: "Your early experiences influence your emotional patterns. I help you reconnect with your inner child, heal past wounds, and cultivate self-love, emotional security, and inner joy.",
      className: "card-blue"
    },
    { 
      image: img16, 
      title: "Emotional & Spiritual Healing", 
      description: "For those seeking deeper self-connection, I offer mindfulness practices, CBT techniques, and therapeutic healing to balance emotions and promote inner harmony. My sessions provide soul-aligned guidance for emotional well-being.",
      className: "card-pink"
    },
    { 
      image: img17, 
      title: "Pre-Marital & Relationship Counseling", 
      description: "Healthy relationships thrive on understanding and communication. I provide pre-marital counseling for couples preparing for marriage and relationship counseling to strengthen emotional bonds, rebuild trust, and resolve conflicts.",
      className: "card-blue" 
    },
    { 
      image: img18, 
      title: "Career & Personality Development", 
      description: "With over six years of experience in training and mentoring, I have helped 5,000+ students shape their careers and personalities. My sessions focus on decision-making, confidence-building, and self-improvement, empowering you to achieve personal and professional success.",
      className: "card-pink" 
    },
    { 
      image: img19, 
      title: "Family Counseling", 
      description: "Family relationships can be complex, but healing is possible. I offer counseling to help improve communication, resolve conflicts, and create a supportive environment for emotional well-being and growth.",
      className: "card-blue" 
    },
    { 
      image: img20, 
      title: "Stress & Anxiety Management", 
      description: "If stress and anxiety are overwhelming your daily life, I provide coping strategies, emotional regulation techniques, and relaxation methods to help you regain control and find peace.",
      className: "card-pink" 
    },
    { 
      image: img21, 
      title: "Self-Esteem & Confidence Building", 
      description: "Struggling with self-doubt? I offer personalized sessions to strengthen self-worth, boost confidence, and help you embrace your true potential in both personal and professional life.",
      className: "card-blue" 
    },
    { 
      image: img22, 
      title: "Life Transitions & Decision-Making Support", 
      description: "Big life changes can feel overwhelming. Whether it’s a career shift, relationship decision, or personal transformation, I offer guidance and clarity to help you navigate transitions with confidence.",
      className: "card-pink" 
    },
  ];

  return (
    <div id="services">
      <div className="services-intro">
        <h1>My Services</h1>
        <p>At The Psychology Lady, I offer a compassionate and holistic approach to healing, personal growth, and transformation. My services integrate psychology, counseling, and therapeutic healing to help individuals navigate life’s challenges with clarity and resilience.</p>
        <button className="navbtn cursor-hover">Book Appointment</button>
      </div>

      <div className="service-container" ref={containerRef}>
      
      <div className="sticky-column">
        <img
          src={pp}
          alt="Consultancy Visual"
          className="sticky-image"
        />
      </div>
      {servicesData.map((service, index) => {
        const [ref, inView] = useInView({
        triggerOnce: false,  // animate again when scrolled back
        threshold: 0.5,      // trigger when 20% visible
      });

        return (
          <motion.div
  ref={ref}
  key={index}
  className="card-wrapper cursor-hover"
  drag
  dragConstraints={containerRef}
  dragElastic={1}
  initial={{ 
    opacity: 0,
    scale: 0.6   // smaller size initially
  }}
  animate={{
    opacity: inView ? 1 : 0,
    scale: inView ? 1 : 0.6  // grow to full size
  }}
  transition={{ duration: 0.8, ease: "easeOut" }}
>
  <ServiceCard
    image={service.image}
    title={service.title}
    description={service.description}
    className={service.className}
  />
</motion.div>

        );
      })}
    </div>
    </div>
  );
};

export default Services;
