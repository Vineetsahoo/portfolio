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
  
  interface QuickLink {
    name: string;
    path: string;
  }

  interface ContactInfo {
    icon: JSX.Element;
    text: string;
  }

  interface SocialLink {
    icon: JSX.Element;
    url: string;
    label: string;
  }

  return (
    <footer className="bg-gradient-to-b from-[#121212] via-[#1a1a1a] to-black text-gray-300 relative">
      {/* Modern decorative elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#ff6700] to-transparent opacity-70"></div>
      <div className="absolute top-10 right-10 w-20 h-20 bg-[#ff6700] rounded-full filter blur-[80px] opacity-20"></div>
      <div className="absolute bottom-20 left-10 w-32 h-32 bg-blue-500 rounded-full filter blur-[100px] opacity-10"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24 relative z-10">
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-12 gap-10"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Brand Section - Modernized */}
          <motion.div 
            className="col-span-1 md:col-span-5"
            variants={itemVariants}
          >
            <div className="relative mb-8">
              <motion.h3 
                className="text-4xl font-extrabold text-white inline-block"
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                Vineet Sahoo
                <div className="absolute -bottom-1 left-0 w-16 h-1.5 bg-gradient-to-r from-[#ff6700] to-orange-400 rounded-full"></div>
              </motion.h3>
            </div>
            <p className="text-gray-400 mb-8 text-lg leading-relaxed">
              Building digital experiences that make a difference. Specialized in modern web development
              and creative solutions that blend innovation with practicality.
            </p>
            <div className="grid grid-cols-4 gap-3">
              {[
                { icon: <Github className="w-5 h-5" />, url: 'https://github.com/Vineetsahoo', label: 'GitHub' },
                { icon: <Linkedin className="w-5 h-5" />, url: 'https://www.linkedin.com/in/vineet-sahoo-81b022311/', label: 'LinkedIn' },
                { icon: <Instagram className="w-5 h-5" />, url: 'https://www.instagram.com/sahoo_era/', label: 'Instagram' },
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center justify-center p-4 rounded-xl bg-gray-800/30 backdrop-blur-sm border border-gray-700/30 hover:border-[#ff6700]/50 hover:bg-gray-800/50 text-gray-300 hover:text-white transition-all duration-300 group"
                  whileHover={{ y: -5, scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={social.label}
                >
                  <span className="transform group-hover:text-[#ff6700] transition-all duration-300">
                    {social.icon}
                  </span>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links - Modernized */}
          <motion.div variants={itemVariants} className="col-span-1 md:col-span-3">
            <h4 className="text-xl font-bold text-white mb-6 relative inline-block">
              Quick Links
              <div className="absolute -bottom-2 left-0 w-8 h-1 bg-gradient-to-r from-[#ff6700] to-orange-400 rounded-full"></div>
            </h4>
            <ul className="space-y-4">
              {quickLinks.map((link, index) => (
                <motion.li 
                  key={index}
                  whileHover={{ x: 10 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Link
                    to={link.path}
                    className="flex items-center text-gray-400 hover:text-[#ff6700] transition-colors group"
                  >
                    <span className="inline-block w-0 group-hover:w-4 overflow-hidden transition-all duration-300 transform translate-y-0.5">
                      <ArrowRight className="h-4 w-4" />
                    </span>
                    <span className="text-base ml-1">{link.name}</span>
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info - Modernized */}
          <motion.div variants={itemVariants} className="col-span-1 md:col-span-4">
            <h4 className="text-xl font-bold text-white mb-6 relative inline-block">
              Contact Info
              <div className="absolute -bottom-2 left-0 w-8 h-1 bg-gradient-to-r from-[#ff6700] to-orange-400 rounded-full"></div>
            </h4>
            
            {/* Contact Information */}
            <ul className="space-y-5">
              {contactInfo.map((item, index) => (
                <motion.li 
                  key={index} 
                  className="flex items-center text-gray-400 group"
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <span className="mr-3 p-2 rounded-lg bg-gray-800/50 text-[#ff6700] border border-gray-700/30 group-hover:bg-[#ff6700]/10 transition-all duration-300">
                    {item.icon}
                  </span>
                  <span className="text-base">{item.text}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </motion.div>

        <div className="mt-16 pt-8 border-t border-gray-800/50">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-0">
            <motion.p 
              className="text-gray-400 text-sm"
              whileHover={{ x: 5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              © {new Date().getFullYear()} <span className="text-white font-medium">Vineet Sahoo</span>. All rights reserved.
            </motion.p>
            <div className="flex space-x-6 text-sm text-gray-500">
              <motion.a 
                href="#" 
                className="hover:text-[#ff6700] transition-colors"
                whileHover={{ y: -2 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                Privacy Policy
              </motion.a>
              <motion.a 
                href="#" 
                className="hover:text-[#ff6700] transition-colors"
                whileHover={{ y: -2 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                Terms of Service
              </motion.a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;