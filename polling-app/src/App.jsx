import { Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Create from './pages/Create';
import { useState } from 'react';

function App() {
  const [darkMode, setDarkMode] = useState(true);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={darkMode ? 'dark' : 'light'}>
      <nav className="navbar">
        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/create">Create Poll</Link>
        </div>
        <button className="toggle-button" onClick={toggleTheme}>
          {darkMode ? "Light Mode" : "Dark Mode"}
        </button>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<Create />} />
      </Routes>
    </div>
  );
}

export default App;
