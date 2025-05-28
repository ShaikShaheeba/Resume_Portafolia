import { useState } from 'react';
import './Contact.css';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [formErrors, setFormErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');
  const [submitStatus, setSubmitStatus] = useState('');
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    
    // Clear error for this field when user starts typing
    if (formErrors[name]) {
      setFormErrors({
        ...formErrors,
        [name]: ''
      });
    }
  };
  
  const validateForm = () => {
    let errors = {};
    let isValid = true;
    
    if (!formData.name.trim()) {
      errors.name = 'Name is required';
      isValid = false;
    }
    
    if (!formData.email.trim()) {
      errors.email = 'Email is required';
      isValid = false;
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email)) {
        errors.email = 'Please enter a valid email address';
        isValid = false;
      }
    }
    
    if (!formData.message.trim()) {
      errors.message = 'Message is required';
      isValid = false;
    }
    
    setFormErrors(errors);
    return isValid;
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      setIsSubmitting(true);
      setSubmitStatus('');
      setSubmitMessage('');
      
      // Simulate API call
      setTimeout(() => {
        // For demo purposes, just log the form data
        console.log('Form submitted:', formData);
        
        // Reset form
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
        
        setIsSubmitting(false);
        setSubmitStatus('success');
        setSubmitMessage('Your message has been sent successfully. I will get back to you soon!');
        
        // Clear success message after 5 seconds
        setTimeout(() => {
          setSubmitMessage('');
          setSubmitStatus('');
        }, 5000);
      }, 1500);
    }
  };

  return (
    <section id="contact" className="contact">
      <div className="section-container">
        <h2 className="section-title">Contact Me</h2>
        
        <div className="contact-container">
          <div className="contact-info fade-in">
            <h3>Get In Touch</h3>
            <p>Feel free to contact me for any work or suggestions. I'm always open to discussing new projects, creative ideas or opportunities to be part of your vision.</p>
            
            <div className="info-item">
              <div className="info-icon">📍</div>
              <div className="info-content">
                <h4>Location</h4>
                <p>Repalle, Guntur District, AP</p>
              </div>
            </div>
            
            <div className="info-item">
              <div className="info-icon">📧</div>
              <div className="info-content">
                <h4>Email</h4>
                <p>shaheebashaik02@gmail.com</p>
              </div>
            </div>
            
            <div className="info-item">
              <div className="info-icon">📱</div>
              <div className="info-content">
                <h4>Phone</h4>
                <p>+91 9390703169</p>
              </div>
            </div>
            
            <div className="social-links">
              <a
                   href="https://linkedin.com/in/shaik-shaheeba-28b1b32b1"
                   target="_blank"
                   rel="noopener noreferrer"
                   title="LinkedIn"
                   >
                   <FaLinkedin  size={35}/>
             </a>
               <a
                   href="https://github.com/your-github-username"
                   target="_blank"
                   rel="noopener noreferrer"
                   title="GitHub"
                   style={{ color: '#333' }} // GitHub blackish
                   >
                   <FaGithub size={35} />
               </a>
             {/* </a>
              <a href="#" className="social-link" title="Twitter">
                <span>X</span>
              </a>
              <a href="#" className="social-link" title="Instagram">
                <span>IG</span> </a> */}
              
            </div>
          </div>
          
          <div className="contact-form-container fade-in delay-2">
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">your name</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  value={formData.name}
                  onChange={handleChange}
                  className={formErrors.name ? 'error' : ''}
                />
                {formErrors.name && <div className="error-message">{formErrors.name}</div>}
              </div>
              
              <div className="form-group">
                <label htmlFor="email">Your Email</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  value={formData.email}
                  onChange={handleChange}
                  className={formErrors.email ? 'error' : ''}
                />
                {formErrors.email && <div className="error-message">{formErrors.email}</div>}
              </div>
              
              <div className="form-group">
                <label htmlFor="subject">Subject (Optional)</label>
                <input 
                  type="text" 
                  id="subject" 
                  name="subject" 
                  value={formData.subject}
                  onChange={handleChange}
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="message">Your Message</label>
                <textarea 
                  id="message" 
                  name="message" 
                  rows="5" 
                  value={formData.message}
                  onChange={handleChange}
                  className={formErrors.message ? 'error' : ''}
                ></textarea>
                {formErrors.message && <div className="error-message">{formErrors.message}</div>}
              </div>
              
              <button 
                type="submit" 
                className="btn btn-primary submit-btn"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
              
              {submitMessage && (
                <div className={`submit-message ${submitStatus}`}>
                  {submitMessage}
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;