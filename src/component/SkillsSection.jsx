import React, { useState } from 'react';
import { 
  SiFlutter, 
  SiDart, 
  SiReact, 
  SiJavascript, 
  SiFirebase, 
  SiGit, 
  SiAndroid, 
  SiApple,
  SiHtml5,
  SiCss3,
  SiFigma,
  SiPhp,
  SiGithub,
  SiMysql
} from 'react-icons/si';
import { VscCode } from 'react-icons/vsc';
import { FaServer, FaMicrosoft } from 'react-icons/fa';
import { DiDotnet } from 'react-icons/di';
import './SkillsSection.css';

const SkillsSection = () => {
  const [activeCard, setActiveCard] = useState(null);

  // Skills data for a Flutter Developer with expertise levels
  const skills = [
    // { name: 'Flutter', icon: SiFlutter, color: '#02569B', expertise: 85 },
    // { name: 'Dart', icon: SiDart, color: '#0175C2', expertise: 80 },
    { name: 'C#', icon: DiDotnet, color: '#239120', expertise: 50 },
    { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E', expertise: 45 },
    { name: 'PHP', icon: SiPhp, color: '#FFCA28', expertise: 70 },
    // { name: 'Github', icon: SiGithub, color: '#F05032', expertise: 75 },
    { name: 'MySQL', icon: SiMysql, color: '#3DDC84', expertise: 70 },
    // { name: 'iOS', icon: SiApple, color: '#000000', expertise: 65 },
    { name: 'HTML5', icon: SiHtml5, color: '#E34F26', expertise: 85 },
    { name: 'CSS3', icon: SiCss3, color: '#1572B6', expertise: 65 },
    // { name: 'Figma', icon: SiFigma, color: '#F24E1E', expertise: 75 },
    { name: 'VS Code', icon: VscCode, color: '#007ACC', expertise: 90 },
    { name: 'XAMPP', icon: FaServer, color: '#FB7A24', expertise: 90 },
    { name: 'MS Office', icon: FaMicrosoft, color: '#EB3C00', expertise: 90 }
  ];

  const handleCardClick = (index) => {
    if (activeCard === index) {
      setActiveCard(null);
    } else {
      setActiveCard(index);
    }
  };

  return (
    <section className="skills-section">
      <div className="skills-container">
        <div className="skills-header">
          <h2 className="skills-title">Skills & Technologies</h2>
          <p className="skills-subtitle">Technologies I work with</p>
        </div>
        
        <div className="skills-grid">
          {skills.map((skill, index) => {
            const IconComponent = skill.icon;
            const isActive = activeCard === index;
            return (
              <div 
                key={index} 
                className={`skill-card ${isActive ? 'active' : ''}`}
                onClick={() => handleCardClick(index)}
                style={{
                  '--skill-color': skill.color
                }}
              >
                <div className="skill-icon">
                  <IconComponent />
                </div>
                <div className="skill-name">{skill.name}</div>
                {isActive && (
                  <div className="skill-pulse"></div>
                )}
                <div className="skill-expertise">
                  <div className="expertise-label">
                    <span>Expertise</span>
                    {/* <span className="expertise-percentage">{skill.expertise}%</span> */}
                  </div>
                  <div className="expertise-bar-container">
                    <div 
                      className="expertise-bar"
                      style={{
                        width: `${skill.expertise}%`,
                        backgroundColor: skill.color
                      }}
                    ></div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;

