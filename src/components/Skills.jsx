import { useState, useEffect } from 'react';
import './Skills.css';

const Skills = () => {
  const skillCategories = [
    { id: 'WebTechnologies', name: 'Web Technologies' },
    { id: 'ProgrammingLanguages', name: 'Programming Languages' },
    { id: 'SoftSkills', name: 'Soft Skills' },
    { id: 'tools', name: 'Database & Tools' },
  ];

  const skillsData = {
    WebTechnologies: [
      { name: 'HTML', level: 95 },
      { name: 'CSS', level: 90 },
      { name: 'JavaScript', level: 85 },
      { name: 'React.js', level: 80 },
    ],
    ProgrammingLanguages: [
      { name: 'Python', level: 90 },
      { name: 'C', level: 85 },
      { name: 'Java', level: 75 },
    ],
    SoftSkills: [
      { name: 'Communication', level: 85 },
      { name: 'Problem Solving', level: 90 },
      { name: 'Time Management', level: 90 },
    ],
    tools: [
      { name: 'SQL', level: 90 },
      { name: 'Git', level: 80 },
    ],
  };

  const [activeCategory, setActiveCategory] = useState('WebTechnologies');
  const [animatedSkills, setAnimatedSkills] = useState([]);

  useEffect(() => {
    setAnimatedSkills([]);
    const skillsToAnimate = skillsData[activeCategory] || [];
    let timeoutIds = [];

    skillsToAnimate.forEach((skill, index) => {
      const timeoutId = setTimeout(() => {
        setAnimatedSkills((prev) => [...prev, skill.name]);
      }, 100 * (index + 1));
      timeoutIds.push(timeoutId);
    });

    return () => {
      timeoutIds.forEach((id) => clearTimeout(id));
    };
  }, [activeCategory]);

  return (
    <section id="skills" className="skills">
      <div className="section-container">
        <h2 className="section-title">My Skills</h2>

        <div className="skills-categories fade-in">
          {skillCategories.map((category) => (
            <button
              key={category.id}
              className={`category-button ${
                activeCategory === category.id ? 'active' : ''
              }`}
              onClick={() => setActiveCategory(category.id)}
            >
              {category.name}
            </button>
          ))}
        </div>

        <div className="skills-container">
          <div className="skills-grid">
            {skillsData[activeCategory].map((skill) => (
              <div key={skill.name} className="skill-item">
                <div className="skill-info">
                  <h4 className="skill-name">{skill.name}</h4>
                  <span className="skill-percentage">{skill.level}%</span>
                </div>
                <div className="skill-bar">
                  <div
                    className="skill-progress"
                    style={{
                      width: animatedSkills.includes(skill.name)
                        ? `${skill.level}%`
                        : '0%',
                      transition: 'width 1s ease-in-out',
                    }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
