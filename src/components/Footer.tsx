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
    <footer className="bg-gradient-to-b from-[#1a1a1a] to-black text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Brand Section */}
          <motion.div 
            className="col-span-1 md:col-span-2"
            variants={itemVariants}
          >
            <div className="relative">
              <h3 className="text-3xl font-bold text-white mb-6 inline-block">
                Vineet Sahoo
                <div className="absolute -bottom-0.2 left-0 w-12 h-1 bg-[#ff6700] rounded-full"></div>
              </h3>
            </div>
            <p className="text-gray-400 mb-8 max-w-md text-lg leading-relaxed">
              Building digital experiences that make a difference. Specialized in modern web development
              and creative solutions.
            </p>
            <div className="flex space-x-4">
              {[
                { icon: <Github />, url: 'https://github.com/Vineetsahoo' },
                { icon: <Linkedin />, url: 'https://www.linkedin.com/in/vineet-sahoo-81b022311/' },
                { icon: <Instagram />, url: 'https://www.instagram.com/sahoo_era/' },
                { icon: <Mail />, url: 'mailto:vineetsahoo3@gmail.com' }
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-gray-800/50 backdrop-blur-sm hover:bg-[#ff6700] text-gray-300 hover:text-white transition-all duration-300"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants}>
            <h4 className="text-xl font-semibold text-white mb-6 relative inline-block">
              Quick Links
              <div className="absolute -bottom-2 left-0 w-8 h-1 bg-[#ff6700] rounded-full"></div>
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
                    <ArrowRight className="h-4 w-4 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300" />
                    <span className="text-base">{link.name}</span>
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div variants={itemVariants}>
            <h4 className="text-xl font-semibold text-white mb-6 relative inline-block">
              Contact
              <div className="absolute -bottom-2 left-0 w-8 h-1 bg-[#ff6700] rounded-full"></div>
            </h4>
            <ul className="space-y-4">
              {contactInfo.map((item, index) => (
                <motion.li 
                  key={index} 
                  className="flex items-center text-gray-400 group"
                  whileHover={{ x: 10 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <span className="mr-3 p-2 rounded-lg bg-gray-800/50 text-[#ff6700] group-hover:bg-[#ff6700] group-hover:text-white transition-all duration-300">
                    {item.icon}
                  </span>
                  <span className="text-base">{item.text}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </motion.div>

        <div className="mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-gray-800">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-0">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Vineet Sahoo. All rights reserved.
            </p>
            <div className="flex space-x-4 text-sm text-gray-500">
              <a href="#" className="hover:text-[#ff6700] transition-colors">Privacy Policy</a>
              <span>•</span>
              <a href="#" className="hover:text-[#ff6700] transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;