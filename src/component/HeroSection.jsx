import React from 'react';
import './HeroSection.css';

const HeroSection = ({ 
  greeting = "Hi, my name is",
  firstName = "Dishank",
  lastName = "Patel",
  nameComponent,
  tagline = "I build elegant UI & fast apps for mobile",
  description = "I'm currently pursuing my MCA and learning to design and build clean, responsive user interfaces that feel fast and enjoyable to use.",
  photoSrc = "/profile-photo.jpg",
  onSeeWork,
  onContact
}) => {
  return (
    <div className="hero-section">
      <div className="hero-photo-container">
        <img 
          src={photoSrc} 
          alt="Profile" 
          className="hero-photo"
          onError={(e) => {
            // Fallback to a placeholder if image doesn't exist
            e.target.style.display = 'none';
            e.target.nextSibling.style.display = 'block';
          }}
        />
        <div className="hero-photo-placeholder" style={{display: 'none'}}>
          <svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="100" cy="100" r="100" fill="rgba(99, 102, 241, 0.2)"/>
            <circle cx="100" cy="80" r="30" fill="rgba(99, 102, 241, 0.4)"/>
            <path d="M40 160 Q40 140 100 140 Q160 140 160 160 L160 200 L40 200 Z" fill="rgba(99, 102, 241, 0.4)"/>
          </svg>
        </div>
      </div>
      
      {greeting && <p className="hero-greeting">{greeting}</p>}
      
      <h1 className="hero-name">
        {nameComponent ? (
          nameComponent
        ) : (
          <>
            <span className="hero-first-name">{firstName}</span>
            <span className="hero-last-name">{lastName}</span>
          </>
        )}
      </h1>
      
      {tagline && <p className="hero-tagline">{tagline}</p>}
      
      {description && (
        <div className="hero-description">
          <p>{description}</p>
        </div>
      )}
      
      {/* {(onSeeWork || onContact) && (
        <div className="hero-buttons">
          {onSeeWork && (
            <button className="hero-btn hero-btn-primary" onClick={onSeeWork}>
              See my work
            </button>
          )}
          {onContact && (
            <button className="hero-btn hero-btn-secondary" onClick={onContact}>
              Contact me
            </button>
          )}
        </div>
      )} */}
    </div>
  );
};

export default HeroSection;

