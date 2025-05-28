import './About.css';

const About = () => {
  return (
    <section id="about" className="about">
      <div className="section-container">
        <h2 className="section-title">About Me</h2>
        
        <div className="about-content">
          <div className="about-text">
           {/* <h3 className="fade-in">Who I Am</h3> */}
            <p className="fade-in delay-1">
              A recent B.Tech graduate in Computer Science and Engineering from RGUKT, Nuzvid, with hands-on experience in Java Full Stack Development, Machine Learning projects, and strong problem-solving skills.
              Eager to contribute to a dynamic organization and apply technical and analytical skills in a real-world environment.
            </p>
            
            <div className="personal-info fade-in delay-3">
              <div className="info-item">
                <span className="info-label">Name:</span>
                <span className="info-value">SHAIK SHAHEEBA</span>
              </div>
              <div className="info-item">
                <span className="info-label">Email:</span>
                <span className="info-value">shaheebashaik02@gmail.com</span>
              </div>
              <div className="info-item">
                <span className="info-label">Location:</span>
                <span className="info-value">Guntur, Andhra Pradesh</span>
              </div>
              <div className="info-item">
                <span className="info-label">Availability:</span>
                <span className="info-value">Open to opportunities</span>
              </div>
            </div>
          </div> 
        </div>
      </div>
    </section>
  );
};

export default About;
