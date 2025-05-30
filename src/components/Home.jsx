import { Link } from 'react-scroll';
import myPic from '../assets/my_pic.jpg';
import './Home.css';

const Home = () => {
  return (
    <section id="home" className="home">
      <div className="home-content">
        <div className="text-content fade-in">
          <h4 className="greeting">Hello, I'm</h4>
          <h1 className="name">SHAIK SHAHEEBA</h1>
          <h3 className="profession">
            <span>I'm a </span>
            <span className="typed-text">FrontEnd Developer</span>
          </h3>
          <p className="intro-text">
            Creating, learning, and growing as a developer every day.
          </p>
          <div className="cta-buttons">
            <Link to="contact" smooth={true} duration={800} className="btn btn-primary">
              Contact Me
            </Link>
            <Link to="projects" smooth={true} duration={800} className="btn btn-outline">
              View My Projects
            </Link>
          </div>
        </div>

        <div className="home-image fade-in delay-2">
          <div className="image-container">
            <img src={myPic} alt="My Profile" className="my-profile-img" />
          </div>
        </div>
      </div>

      <div className="scroll-indicator fade-in delay-3">
        <Link to="about" smooth={true} duration={800}>
          <div className="mouse">
            <div className="wheel"></div>
          </div>
          <div className="arrow">
            <span></span>
            <span></span>
          </div>
        </Link>
      </div>
    </section>
  );
};

export default Home;
