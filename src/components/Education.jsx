
import './Education.css';

const Education = () => {
  const educationData = [
    {
      id: 1,
      degree: "Bachelor of Science in Computer Science",
      institution: "Rajiv Gandhi University Of Knowledge Technologies",
      location: "Nuzvid, Krishna District, AP",
      duration: "2021 - 2025",
      CGPA: "8.46",
      description: "I have developed strong fundamentals in programming, web development, and machine learning through hands-on projects and academic coursework."
    },
    {
      id: 2,
      degree: "Pre-University Course",
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
      CGPA: "10.0",
      description: "Successfully completed Secondary Education with excellent academic performance, developing strong fundamentals in analytical and logical reasoning."
    }
  ];

  return (
    <section id="education" className="education">
      <div className="section-container">
        <h2 className="section-title">Education</h2>

        <div className="timeline">
          {educationData.map((item, index) => (
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
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
