import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo">
          <h3>Shaik Shaheeba</h3>
          <p className="tagline">Developer</p>
        </div>
        
        <div className="footer-links">
          <div className="footer-links-column">
            <h4>Navigation</h4>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#education">Education</a></li>
              <li><a href="#skills">Skills</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
          
          <div className="footer-links-column">
            <h4>Contact</h4>
            <ul className="contact-links">
              <li>Repalle, Guntur Distrivt, AP</li>
              <li>shaheebashaik02@gmail.com</li>
              <li>+91 9390703169</li>
            </ul>
          </div>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>&copy; {currentYear} @ShaikShaheeba. All rights reserved.</p>
        <p className="credits">
          Designed & built with 
          <span className="heart">❤</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;