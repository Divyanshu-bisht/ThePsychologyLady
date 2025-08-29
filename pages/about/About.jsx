import React from 'react'
import pp2 from "../../src/assets/pp2.jpg"
import "./about.css"
import med from "../../src/assets/med.jpg"

function About() {
  return (
    <div className='about'>
      <div className="about-me">
        <div className="about-left-cont">
          <div className="about-img-cont">
            <img src={pp2} alt="Profile" />
          </div>
        </div>
        <div className="about-right-cont">
          <h1>ABOUT ME</h1>
          <p>
            I’m a psychologist, counselor and trauma healer with a passion for guiding individuals toward emotional well-being and personal growth.
            <br /><br />
            With over six years of experience in training and teaching students across schools, colleges, and institutions, I have helped 5,000+ students shape their careers, overcome challenges, and build strong personalities. My three years of counseling and healing experience have allowed me to support clients dealing with stress, trauma, self-doubt, and relationship struggles.
            <br /><br />
            In addition to personal counseling, I specialize in developing training programs, equipping individuals with confidence and emotional intelligence. Through ‘The Psychology Lady,’ I share insights that make healing a transformative journey. Whether you’re seeking clarity, resilience, or a fresh perspective on life, I am here to support you on your path to self-discovery and empowerment.
          </p>
        </div>
      </div>

      <div className="container">
        <div className="section-title">
            <h1>About Dr. Bhawana Joshi</h1>
            <p>Compassionate Psychology Consultant & Therapist</p>
        </div>
        
        <div className="about-container">
            <div className="photo-section">
                <div className="photo-wrapper">
                    <img src={med} alt="Dr. Bhawna Joshi"/>
                </div>
                <div className="name-tag">
                    <h3>Dr. Bhawana Joshi</h3>
                    <p>Licensed Clinical Psychologist</p>
                </div>
            </div>
            
            <div className="content-section">
                <div className="content-card">
                    <div className="card-icon">📖</div>
                    <h3>Professional Background</h3>
                    <p>With over 12 years of experience in clinical psychology, I specialize in helping individuals navigate life's challenges with compassion and evidence-based approaches. My journey began with a deep passion for understanding the human mind and a commitment to creating safe, healing spaces.</p>
                    
                    <div className="highlight">
                        <p><strong>Education:</strong> Ph.D. in Clinical Psychology from Stanford University, specializing in Cognitive Behavioral Therapy and Mindfulness-Based Interventions.</p>
                    </div>
                    
                    <div className="stats-grid">
                        <div className="stat-item">
                            <span className="stat-number">500+</span>
                            <span className="stat-label">Clients Helped</span>
                        </div>
                        <div className="stat-item">
                            <span className="stat-number">12</span>
                            <span className="stat-label">Years Experience</span>
                        </div>
                        <div className="stat-item">
                            <span className="stat-number">95%</span>
                            <span className="stat-label">Success Rate</span>
                        </div>
                    </div>
                </div>
                
                <div className="content-card">
                    <div className="card-icon">💡</div>
                    <h3>Treatment Approach</h3>
                    <p>I believe in the power of personalized, holistic treatment that addresses not just symptoms, but the whole person. My approach combines traditional therapeutic methods with innovative techniques tailored to each individual's unique needs and goals.</p>
                    
                    <div className="specialties-list">
                        <span className="specialty-tag">Cognitive Behavioral Therapy</span>
                        <span className="specialty-tag">Mindfulness Training</span>
                        <span className="specialty-tag">Anxiety Disorders</span>
                        <span className="specialty-tag">Depression</span>
                        <span className="specialty-tag">Trauma Recovery</span>
                        <span className="specialty-tag">Relationship Counseling</span>
                    </div>
                    
                    <p>Every session is designed to be a collaborative journey toward healing, growth, and self-discovery. I create a non-judgmental environment where you can explore your thoughts and feelings freely.</p>
                </div>
                
                <div className="content-card">
                    <div className="card-icon">🌟</div>
                    <h3>Personal Philosophy</h3>
                    <p>Mental health is not a destination, but a journey of continuous growth and self-compassion. I'm honored to walk alongside my clients as they discover their inner strength and resilience.</p>
                    
                    <div className="highlight">
                        <p><em>"The greatest revolution of our generation is the discovery that human beings, by changing the inner attitudes of their minds, can change the outer aspects of their lives."</em> - William James</p>
                    </div>
                    
                    <p>When I'm not in practice, you'll find me hiking mountain trails, practicing yoga, or curled up with a good book on psychology or mindfulness. I believe that maintaining my own well-being allows me to be fully present for my clients.</p>
                    
                    <p>I'm also passionate about mental health advocacy and regularly speak at community events, write for psychology publications, and mentor upcoming therapists in the field.</p>
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default About
