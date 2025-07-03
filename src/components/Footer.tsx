import { motion } from 'framer-motion';
import { Github, Linkedin, Instagram, Mail, ArrowRight, MapPin, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const quickLinks = [
    { name: 'About', path: '/about' },
    { name: 'Projects', path: '/projects' },
    { name: 'Achievements', path: '/achievements' },
    { name: 'Contact', path: '/contact' }    
  ];

  const contactInfo = [
    { icon: <MapPin className="h-5 w-5" />, text: 'Delhi, India' },
    { icon: <Mail className="h-5 w-5" />, text: 'vineetsahoo3@gmail.com' },
    { icon: <Phone className="h-5 w-5" />, text: '+91 85956 43778' }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <footer className="bg-gradient-to-br from-slate-900 via-gray-900 to-black text-white relative overflow-hidden">
      {/* Ultra-Modern Background Elements */}
      <div className="absolute inset-0">
        {/* Geometric mesh pattern */}
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" viewBox="0 0 800 600" preserveAspectRatio="xMidYMid slice">
            <defs>
              <pattern id="footerGrid" width="80" height="80" patternUnits="userSpaceOnUse">
                <path d="M 80 0 L 0 0 0 80" fill="none" stroke="url(#footerGradient)" strokeWidth="0.5"/>
              </pattern>
              <linearGradient id="footerGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#f97316" stopOpacity="0.6"/>
                <stop offset="50%" stopColor="#ec4899" stopOpacity="0.4"/>
                <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.6"/>
              </linearGradient>
            </defs>
            <rect width="100%" height="100%" fill="url(#footerGrid)"/>
          </svg>
        </div>

        {/* Floating orbs */}
        <motion.div
          className="absolute top-20 left-1/4 w-40 h-40 bg-gradient-to-r from-orange-500/20 to-pink-500/20 rounded-full blur-[60px]"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-32 right-1/3 w-32 h-32 bg-gradient-to-l from-blue-500/20 to-purple-500/20 rounded-full blur-[50px]"
          animate={{ 
            scale: [1.2, 1, 1.2],
            opacity: [0.4, 0.7, 0.4]
          }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        />

        {/* Top accent line */}
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-orange-400/60 to-transparent"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        {/* Main Footer Content */}
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Left Section - Brand & Social */}
          <motion.div variants={itemVariants}>
            {/* Brand */}
            <div className="mb-8">
              <motion.h2 
                className="text-5xl font-black bg-gradient-to-r from-orange-400 via-pink-400 to-purple-400 bg-clip-text text-transparent mb-4"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                Vineet Sahoo
              </motion.h2>
              <motion.div 
                className="w-32 h-1 bg-gradient-to-r from-orange-400 to-pink-400 rounded-full mb-6"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
              />
              <p className="text-xl text-gray-300 leading-relaxed max-w-lg">
                Crafting exceptional digital experiences through innovative web development and creative problem-solving.
              </p>
            </div>

            {/* Social Media - Modern Card Style */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-white">Let's Connect</h3>
              <div className="flex gap-4">
                {[
                  { 
                    icon: <Github className="w-6 h-6" />, 
                    url: 'https://github.com/Vineetsahoo', 
                    label: 'GitHub',
                    gradient: 'from-gray-600 to-gray-800',
                    hoverGradient: 'hover:from-gray-500 hover:to-gray-700'
                  },
                  { 
                    icon: <Linkedin className="w-6 h-6" />, 
                    url: 'https://www.linkedin.com/in/vineet-sahoo-81b022311/', 
                    label: 'LinkedIn',
                    gradient: 'from-blue-600 to-blue-800',
                    hoverGradient: 'hover:from-blue-500 hover:to-blue-700'
                  },
                  { 
                    icon: <Instagram className="w-6 h-6" />, 
                    url: 'https://www.instagram.com/sahoo_era/', 
                    label: 'Instagram',
                    gradient: 'from-pink-500 to-purple-600',
                    hoverGradient: 'hover:from-pink-400 hover:to-purple-500'
                  }
                ].map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`group relative p-4 bg-gradient-to-r ${social.gradient} ${social.hoverGradient} rounded-2xl transition-all duration-300 shadow-lg hover:shadow-xl`}
                    whileHover={{ y: -8, scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    aria-label={social.label}
                  >
                    <div className="relative z-10 text-white">
                      {social.icon}
                    </div>
                    <motion.div
                      className="absolute inset-0 rounded-2xl bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Section - Navigation & Contact */}
          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 gap-8"
            variants={itemVariants}
          >
            {/* Quick Navigation */}
            <div>
              <h3 className="text-xl font-bold text-white mb-6 relative">
                Navigation
                <motion.div 
                  className="absolute -bottom-2 left-0 w-12 h-1 bg-gradient-to-r from-orange-400 to-pink-400 rounded-full"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                />
              </h3>
              <ul className="space-y-4">
                {quickLinks.map((link, index) => (
                  <motion.li 
                    key={index}
                    whileHover={{ x: 8 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Link
                      to={link.path}
                      className="group flex items-center text-gray-300 hover:text-white transition-all duration-300"
                    >
                      <motion.div 
                        className="w-2 h-2 bg-gradient-to-r from-orange-400 to-pink-400 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      />
                      <span className="text-lg font-medium group-hover:font-semibold transition-all duration-300">
                        {link.name}
                      </span>
                      <ArrowRight className="h-4 w-4 ml-2 opacity-0 group-hover:opacity-100 transform translate-x-[-10px] group-hover:translate-x-0 transition-all duration-300" />
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* Contact Information */}
            <div>
              <h3 className="text-xl font-bold text-white mb-6 relative">
                Get in Touch
                <motion.div 
                  className="absolute -bottom-2 left-0 w-12 h-1 bg-gradient-to-r from-orange-400 to-pink-400 rounded-full"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                />
              </h3>
              <ul className="space-y-5">
                {contactInfo.map((item, index) => (
                  <motion.li 
                    key={index} 
                    className="group"
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div className="flex items-center p-3 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 group-hover:bg-white/10 group-hover:border-orange-400/30 transition-all duration-300">
                      <span className="mr-4 p-2 rounded-lg bg-gradient-to-r from-orange-400 to-pink-400 text-white">
                        {item.icon}
                      </span>
                      <span className="text-gray-300 group-hover:text-white transition-colors duration-300 font-medium">
                        {item.text}
                      </span>
                    </div>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        </motion.div>

        {/* Bottom Section */}
        <motion.div 
          className="pt-8 border-t border-white/10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
            {/* Copyright */}
            <div className="flex items-center gap-4">
              <div className="w-8 h-8 bg-gradient-to-r from-orange-400 to-pink-400 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">VS</span>
              </div>
              <p className="text-gray-400">
                © {new Date().getFullYear()} <span className="text-white font-semibold">Vineet Sahoo</span>. Crafted with passion.
              </p>
            </div>

            {/* Links */}
            <div className="flex items-center gap-8 text-sm">
              <motion.a 
                href="#" 
                className="text-gray-400 hover:text-orange-400 transition-colors duration-300"
                whileHover={{ y: -2 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                Privacy Policy
              </motion.a>
              <motion.a 
                href="#" 
                className="text-gray-400 hover:text-orange-400 transition-colors duration-300"
                whileHover={{ y: -2 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                Terms of Service
              </motion.a>
              <motion.div
                className="text-gray-500"
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                Made in India
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;