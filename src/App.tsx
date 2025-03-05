import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Achievements from './pages/Achievements';
import Contact from './pages/Contact';
import Footer from './components/Footer';
import { ThemeProvider, useTheme } from './context/ThemeContext';

const AppContent = () => {
  const { isDarkMode } = useTheme();
  
  return (
    <div className={`min-h-screen ${isDarkMode ? 'bg-gray-900' : 'bg-white'}`}>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/achievements" element={<Achievements />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  );
};

function App() {
  return (
    <Router>
      <ThemeProvider>
        <AppContent />
      </ThemeProvider>
    </Router>
  );
}

export default App;