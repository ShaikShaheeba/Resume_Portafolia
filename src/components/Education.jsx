import { useState } from 'react';
import './Education.css';

const Education = () => {
  const [activeTab, setActiveTab] = useState('education');

  const educationData = [
    {
      id: 1,
      degree: "Bachelor of Science in Computer Science",
      institution: "Rajiv Gandhi University Of Knowledge Technologies",
      location: "Nuzvid, Krishna District, AP",
      duration: "2021 - 2025",
      CGPA:"8.46",
      description: "I have developed strong fundamentals in programming, web development, and machine learning through hands-on projects and academic coursework."
    },
    {
      id: 2,
      degree: "pre - university Course",
      institution: "Rajiv Gandhi University Of Knowledge Technologies",
      location: "Nuzvid, Krishna District, AP",
      duration: "2019 - 2021",
      CGPA: "9.47",
      description: "Completed Pre-University Course (PUC) with a strong academic foundation in Mathematics, Physics, and Chemistry from RGUKT Nuzvid."
    },
    {
      id: 3,
      degree: "Secondary Education",
      institution: "Z.P.H School",
      location: "Peteru, Guntur district, AP",
      duration: "2014 - 2019",
      CGPA:"10.0",
      description: "Successfully completed Secondary Education with excellent academic performance, developing strong fundamentals in analytical and logical reasoning."
    }
  ];

  /*
  const experienceData = [
    {
      id: 1,
      position: "Senior Front-end Developer",
      company: "Tech Solutions Inc.",
      location: "San Francisco, CA",
      duration: "2021 - Present",
      description: "Lead developer on multiple high-profile web applications. Responsible for architecture decisions, mentoring junior developers, and implementing best practices."
    },
    {
      id: 2,
      position: "Web Developer",
      company: "Creative Digital Agency",
      location: "San Jose, CA",
      duration: "2019 - 2021",
      description: "Developed responsive websites and applications for various clients. Worked closely with design team to implement pixel-perfect interfaces."
    },
    {
      id: 3,
      position: "Freelance Web Developer",
      company: "Self-employed",
      location: "Remote",
      duration: "2017 - 2019",
      description: "Built custom websites for small businesses and startups. Managed projects from initial consultation through deployment and maintenance."
    }
  ];
  */

  return (
    <section id="education" className="education">
      <div className="section-container">
        <h2 className="section-title">Education</h2>
        
        <div className="tabs fade-in">
          <div 
            className={`tab ${activeTab === 'education' ? 'active' : ''}`} 
            onClick={() => setActiveTab('education')}
          >
            Education
          </div>
          {/*
          <div 
            className={`tab ${activeTab === 'experience' ? 'active' : ''}`} 
            onClick={() => setActiveTab('experience')}
          >
            Experience
          </div>
          */}
        </div>
        
        <div className="timeline">
          {activeTab === 'education' ? (
            educationData.map((item, index) => (
              <div 
                className={`timeline-item fade-in ${index % 2 === 0 ? 'left' : 'right'}`} 
                key={item.id}
              >
                <div className="timeline-content">
                  <div className="timeline-date">{item.duration}</div>
                  <h3 className="timeline-title">{item.degree}</h3>
                  <h4 className="timeline-subtitle">{item.institution}</h4>
                  <p className="timeline-location">{item.location}</p>
                  <p className="timeline-description">{item.description}</p>
                </div>
              </div>
            ))
          ) 
          : null
          /*
          (
            experienceData.map((item, index) => (
              <div 
                className={`timeline-item fade-in ${index % 2 === 0 ? 'left' : 'right'}`} 
                key={item.id}
              >
                <div className="timeline-content">
                  <div className="timeline-date">{item.duration}</div>
                  <h3 className="timeline-title">{item.position}</h3>
                  <h4 className="timeline-subtitle">{item.company}</h4>
                  <p className="timeline-location">{item.location}</p>
                  <p className="timeline-description">{item.description}</p>
                </div>
              </div>
            ))
          )
          */
          }
        </div>
      </div>
    </section>
  );
};

export default Education;
