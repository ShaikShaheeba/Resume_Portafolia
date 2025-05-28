import { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import myPic from '../assets/my_pic.jpg';
import './Home.css';

const Home = () => {
  const [typed, setTyped] = useState('');
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  
  const phrases = [
    'FrontEnd Developer',
     'AI Enthusiast',
     'Web Developer'
  ];

  useEffect(() => {
    const typeSpeed = isDeleting ? 50 : 150;
    const deleteSpeed = 75;
    const pauseTime = 1500;
    
    const currentPhrase = phrases[currentPhraseIndex];
    
    const handleTyping = () => {
      if (isDeleting) {
        setTyped(currentPhrase.substring(0, typed.length - 1));
      } else {
        setTyped(currentPhrase.substring(0, typed.length + 1));
      }
    };
    
    let timeout;
    
    if (!isDeleting && typed === currentPhrase) {
      // Pause at complete phrase
      timeout = setTimeout(() => {
        setIsDeleting(true);
      }, pauseTime);
    } else if (isDeleting && typed === '') {
      // Move to next phrase
      setIsDeleting(false);
      setCurrentPhraseIndex((currentPhraseIndex + 1) % phrases.length);
    } else {
      // Continue typing or deleting
      timeout = setTimeout(
        handleTyping, 
        isDeleting ? deleteSpeed : typeSpeed
      );
    }
    
    return () => clearTimeout(timeout);
  }, [typed, currentPhraseIndex, isDeleting, phrases]);

  return (
    <section id="home" className="home">
      <div className="home-content">
        <div className="text-content fade-in">
          <h4 className="greeting">Hello, I'm</h4>
          <h1 className="name">SHAIK SHAHEEBA</h1>
          <h3 className="profession">
            <span>I'm a </span>
            <span className="typed-text">{typed}</span>
            <span className="cursor"></span>
          </h3>
          <p className="intro-text">
          Creating, learning, and growing as a developer every day.
          </p>
          <div className="cta-buttons">
            <Link 
              to="contact" 
              smooth={true} 
              duration={800} 
              className="btn btn-primary"
            >
              Contact Me
            </Link>
            <Link 
              to="projects" 
              smooth={true} 
              duration={800} 
              className="btn btn-outline"
            >
              View My Projects
            </Link>
          </div>
        </div>
        <div className="home-image fade-in delay-2">
          <div className="image-container">
            {/*<img 
             src="C:\Users\shahe\Downloads\resume portafolia\project\src\assets\my_pic.jpg" 
              alt="Professional headshot"  
            /> */}
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