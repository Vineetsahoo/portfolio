import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Code2 } from 'lucide-react';
import { motion, AnimatePresence, useScroll, useSpring } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Projects', path: '/projects' },
    { name: 'Achievements', path: '/achievements' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  const navVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        staggerChildren: 0.08,
        ease: "easeOut",
        duration: 0.6
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 right-0 h-0.5 sm:h-1 bg-gradient-to-r from-white/40 to-white/20 origin-[0%] z-50"
        style={{ scaleX }}
      />
      <nav 
        className={`fixed w-full z-40 transition-all duration-500 ${
          isScrolled 
            ? 'bg-white/80 backdrop-blur-xl border-b border-gray-200/50 shadow-lg shadow-gray-900/5'
            : 'bg-gradient-to-r from-orange-500/95 via-pink-500/95 to-purple-500/95 backdrop-blur-xl shadow-2xl shadow-orange-500/25'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-18 lg:h-20">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <Link to="/" className="flex items-center space-x-3 sm:space-x-4 group">
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.8, type: "spring", bounce: 0.6 }}
                  className={`p-2.5 rounded-2xl shadow-lg transition-all duration-300 ${
                    isScrolled 
                      ? 'bg-gradient-to-r from-orange-500 to-pink-500 text-white shadow-orange-500/25'
                      : 'bg-white/20 backdrop-blur-md hover:bg-white/30 text-white shadow-white/20'
                  }`}
                >
                  <Code2 className="h-6 w-6 sm:h-7 sm:w-7 text-white" />
                </motion.div>
                <div className="flex flex-col">
                  <motion.span 
                    className={`text-2xl sm:text-3xl font-bold transition-colors duration-300 ${
                      isScrolled ? 'text-gray-900' : 'text-white'
                    }`}
                    whileHover={{ scale: 1.05 }}
                    style={{
                      fontFamily: '"Crimson Text", serif',
                      fontStyle: 'italic',
                      fontWeight: 700,
                      letterSpacing: '0.02em',
                      textShadow: isScrolled ? 'none' : '2px 2px 8px rgba(0,0,0,0.2)',
                    }}
                  >
                    Vineet
                  </motion.span>
                  <motion.span 
                    className={`text-xs sm:text-sm tracking-[0.2em] transition-colors duration-300 ${
                      isScrolled ? 'text-gray-600' : 'text-white/90'
                    }`}
                    style={{
                      fontFamily: '"Inter", sans-serif',
                      fontWeight: 500
                    }}
                  >
                    SAHOO
                  </motion.span>
                </div>
              </Link>
            </motion.div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center">
              <motion.div 
                className="flex items-center space-x-1 lg:space-x-2"
                variants={navVariants}
                initial="hidden"
                animate="visible"
              >
                {navLinks.map((link) => (
                  <motion.div
                    key={link.path}
                    variants={itemVariants}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Link
                      to={link.path}
                      className={`px-4 lg:px-5 py-2 lg:py-2.5 rounded-xl text-sm font-medium transition-all duration-300 ${
                        isActive(link.path)
                          ? isScrolled
                            ? 'bg-gradient-to-r from-orange-500 to-pink-500 text-white shadow-lg shadow-orange-500/25'
                            : 'bg-white/25 text-white shadow-lg border border-white/20 backdrop-blur-md'
                          : isScrolled
                            ? 'text-gray-700 hover:bg-gray-100 hover:text-gray-900'
                            : 'text-white/90 hover:bg-white/15 hover:text-white hover:shadow-md hover:shadow-orange-500/10'
                      }`}
                      style={{ 
                        fontFamily: '"Inter", sans-serif',
                        textShadow: isScrolled ? 'none' : '0 1px 2px rgba(0,0,0,0.1)'
                      }}
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                ))}
              </motion.div>
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsOpen(!isOpen)}
              className={`md:hidden p-2.5 rounded-xl transition-all duration-300 backdrop-blur-md shadow-lg ${
                isScrolled
                  ? 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  : 'bg-white/20 text-white hover:bg-white/30 shadow-white/10'
              }`}
            >
              <motion.div
                animate={{ rotate: isOpen ? 180 : 0 }}
                transition={{ duration: 0.4 }}
              >
                {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </motion.div>
            </motion.button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="md:hidden overflow-hidden bg-gradient-to-b from-[#ff6700]/90 to-[#ff8534]/90 backdrop-blur-xl rounded-2xl shadow-xl border border-white/10 mx-3 mb-4"
            >
              <motion.div 
                className="px-2 py-3 space-y-1"
                variants={navVariants}
                initial="hidden"
                animate="visible"
              >
                {navLinks.map((link) => (
                  <motion.div
                    key={link.path}
                    variants={itemVariants}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Link
                      to={link.path}
                      className={`block px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 ${
                        isActive(link.path)
                          ? 'bg-white/20 text-white shadow-lg backdrop-blur-md'
                          : 'text-white/90 hover:bg-white/15 hover:text-white'
                      }`}
                      onClick={() => setIsOpen(false)}
                      style={{ fontFamily: '"Inter", sans-serif' }}
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
};

export default Navbar;