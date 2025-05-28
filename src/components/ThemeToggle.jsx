import './ThemeToggle.css';

const ThemeToggle = ({ darkMode, toggleTheme }) => {
  return (
    <div className="theme-toggle">
      <button onClick={toggleTheme} className="toggle-button">
        {darkMode ? (
          <span className="toggle-icon">☀️</span>
        ) : (
          <span className="toggle-icon">🌙</span>
        )}
      </button>
    </div>
  );
};

export default ThemeToggle;