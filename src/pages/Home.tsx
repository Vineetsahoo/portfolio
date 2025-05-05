import { motion, useScroll, useTransform } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { useState } from 'react';
import { 
  ArrowRight, 
  Download, 
  Github, 
  Linkedin, 
  Instagram,
  Cpu,
  Code,
  X,
  Star
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { commonStyles } from '../styles/commonStyles';

const Home = () => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 300], [0, -50]);
  const [showModal, setShowModal] = useState(false);
  const [showPdfViewer, setShowPdfViewer] = useState(false);

  const handleDownload = (e: React.MouseEvent) => {
    e.preventDefault();
    setShowModal(true);
  };

  return (
    <div className={commonStyles.pageBackground}>
      {/* Enhanced Hero Section */}
      <motion.section 
        className="min-h-screen flex items-center relative overflow-hidden bg-gradient-to-br from-[#ffd7b5] via-white to-[#fff1e6]"
        style={{ y }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        {/* Abstract Background */}
        <div className="absolute inset-0 opacity-20">
          <div className="grid grid-cols-12 grid-rows-12 gap-1 h-full w-full">
            {[...Array(144)].map((_, i) => (
              <motion.div
                key={i}
                className="bg-[#ff6700]"
                initial={{ opacity: 0 }}
                animate={{ 
                  opacity: Math.random() * 0.7,
                  transition: { 
                    duration: 2 + Math.random() * 3,
                    repeat: Infinity, 
                    repeatType: "reverse" 
                  }
                }}
              />
            ))}
          </div>
        </div>
        
        {/* Floating Elements Animation */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(10)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full"
              style={{
                width: `${20 + Math.random() * 60}px`,
                height: `${20 + Math.random() * 60}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                background: `rgba(255, ${103 + Math.random() * 100}, ${Math.random() * 100}, 0.1)`,
              }}
              animate={{
                y: [0, -15, 0, 15, 0],
                scale: [1, 1.2, 1, 0.8, 1],
                rotate: [0, 10, 0, -10, 0],
              }}
              transition={{
                duration: 5 + Math.random() * 10,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 relative">
          <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-12 md:gap-16 px-4 sm:px-6">
            <motion.div 
              className="w-full md:w-1/2 text-center md:text-left space-y-8"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              {/* Enhanced Title with Glow Effect */}
              <div className="relative">
                <motion.div
                  className="absolute -inset-2 rounded-lg bg-gradient-to-r from-[#ff6700]/30 to-[#ffb38a]/30 blur-xl"
                  animate={{
                    scale: [1, 1.05, 1],
                    opacity: [0.3, 0.5, 0.3]
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
                <h1 className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold ${commonStyles.heading} leading-tight relative`}>
                  Hi, I'm <span className="text-[#ff6700] relative inline-block">
                    Vineet Sahoo
                    <motion.span
                      className="absolute -bottom-2 left-0 h-1 bg-gradient-to-r from-[#ff6700] to-[#ffb38a] w-0"
                      animate={{ width: '100%' }}
                      transition={{ delay: 1, duration: 0.8 }}
                    />
                  </span>
                </h1>
              </div>
              
              {/* Enhanced Type Animation */}
              <div className="relative p-3 bg-white/50 backdrop-blur-sm rounded-xl shadow-sm">
                <TypeAnimation
                  sequence={[
                    'Building modern web applications',
                    2000,
                    'Creating seamless user experiences',
                    2000,
                    'Transforming ideas into reality',
                    2000
                  ]}
                  wrapper="p"
                  cursor={true}
                  repeat={Infinity}
                  className={`text-xl md:text-2xl ${commonStyles.subHeading} leading-relaxed`}
                />
              </div>
              
              <div className="flex flex-wrap justify-center md:justify-start gap-4 sm:gap-6 pt-4">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link
                    to="/projects"
                    className="flex items-center gap-2 px-8 py-4 bg-[#ff6700] text-white rounded-full hover:bg-[#ff9248] transition-all shadow-lg hover:shadow-xl"
                  >
                    View My Work
                    <ArrowRight className="h-5 w-5" />
                  </Link>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link
                    to="/contact"
                    className="flex items-center gap-2 px-8 py-4 bg-[#ffb38a] text-gray-900 rounded-full hover:bg-[#ffd7b5] transition-all shadow-lg hover:shadow-xl"
                  >
                    Hire Me
                    <ArrowRight className="h-5 w-5" />
                  </Link>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <a
                    href="/My Resume.pdf"
                    onClick={handleDownload}
                    className="flex items-center gap-2 px-8 py-4 border-2 border-[#ff6700] text-[#ff6700] rounded-full hover:bg-[#ff6700] hover:text-white transition-all shadow-lg hover:shadow-xl"
                  >
                    Download CV
                    <Download className="h-5 w-5" />
                  </a>
                </motion.div>
              </div>
              
              {/* Enhanced Social Links */}
              <div className="flex justify-center md:justify-start gap-6 sm:gap-8 pt-6">
                {[
                  { icon: <Github className="h-6 w-6" />, url: "https://github.com/Vineetsahoo", label: "GitHub" },
                  { icon: <Linkedin className="h-6 w-6" />, url: "https://www.linkedin.com/in/vineet-sahoo-81b022311/", label: "LinkedIn" },
                  { icon: <Instagram className="h-6 w-6" />, url: "https://www.instagram.com/sahoo_era/", label: "Instagram" }
                ].map((social, index) => (
                  <motion.div 
                    key={index}
                    whileHover={{ scale: 1.1, y: -5 }}
                    whileTap={{ scale: 0.9 }}
                    className="relative group"
                  >
                    <motion.div 
                      className="absolute -inset-2 rounded-full bg-gradient-to-r from-[#ff6700]/20 to-[#ffb38a]/20 opacity-0 group-hover:opacity-100 blur-md"
                      transition={{ duration: 0.2 }}
                    />
                    <a
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="relative flex items-center justify-center w-12 h-12 bg-white/80 text-gray-600 rounded-full shadow-md group-hover:text-[#ff6700] transition-all duration-300"
                      aria-label={social.label}
                    >
                      {social.icon}
                    </a>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            
            {/* Enhanced Profile Image */}
            <motion.div 
              className="w-48 h-48 sm:w-60 sm:h-60 md:w-80 md:h-80 lg:w-[450px] lg:h-[450px] mb-12 md:mb-0"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
            >
              <div className="relative">
                {/* Multiple gradient layers for enhanced glow effect */}
                <motion.div 
                  className="absolute inset-0 bg-[#ff6700] rounded-full blur-3xl opacity-20"
                  animate={{ 
                    scale: [1, 1.05, 1],
                    opacity: [0.2, 0.3, 0.2] 
                  }}
                  transition={{ 
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
                <motion.div 
                  className="absolute inset-0 bg-[#ffb38a] rounded-full blur-2xl opacity-20"
                  animate={{ 
                    scale: [1.05, 1, 1.05],
                    opacity: [0.2, 0.3, 0.2] 
                  }}
                  transition={{ 
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
                
                {/* Image with frame */}
                <div className="relative p-2 bg-gradient-to-br from-[#ff6700] to-[#ffb38a] rounded-full overflow-hidden shadow-2xl">
                  <img
                    src="/portrait.jpg"
                    alt="Vineet Sahoo"
                    className="relative rounded-full w-full h-full object-cover border-4 border-white/30"
                  />
                  
                  {/* Decorative elements */}
                  <motion.div 
                    className="absolute top-0 left-0 w-full h-full rounded-full bg-gradient-to-b from-white/20 to-transparent"
                    animate={{ opacity: [0.7, 0.3, 0.7] }}
                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Modernized Services Section */}
      <section className="py-20 bg-gradient-to-br from-white via-gray-50 to-white relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full bg-gradient-to-br from-[#ff6700]/5 to-[#ffb38a]/5 blur-3xl"
              style={{
                width: `${100 + Math.random() * 300}px`,
                height: `${100 + Math.random() * 300}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`
              }}
              animate={{
                x: [0, 20, 0, -20, 0],
                y: [0, -20, 0, 20, 0],
                scale: [1, 1.1, 1, 0.9, 1],
              }}
              transition={{
                duration: 20 + Math.random() * 10,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          ))}
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Enhanced Header Design */}
            <div className="relative inline-block">
              {/* Background Elements */}
              <motion.div
                className="absolute -left-4 -top-4 w-24 h-24 bg-[#ff6700]/10 rounded-full blur-xl"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.5, 0.8, 0.5]
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              <motion.div
                className="absolute -right-4 -bottom-4 w-24 h-24 bg-[#ffb38a]/10 rounded-full blur-xl"
                animate={{
                  scale: [1.2, 1, 1.2],
                  opacity: [0.5, 0.8, 0.5]
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              
              {/* Main Title */}
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                What I{' '}
                <motion.span
                  className="inline-block bg-gradient-to-r from-[#ff6700] via-[#ff9248] to-[#ffb38a] text-transparent bg-clip-text"
                  animate={{
                    backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                >
                  Offer
                </motion.span>
              </h2>
            </div>

            {/* Decorative Line with Dots */}
            <div className="relative w-32 h-2 mx-auto my-8 flex items-center justify-center">
              <motion.div
                className="absolute w-full h-0.5 bg-gradient-to-r from-[#ff6700] to-[#ffb38a]"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
              />
              <motion.div
                className="absolute left-0 w-2 h-2 bg-[#ff6700] rounded-full"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
              />
              <motion.div
                className="absolute right-0 w-2 h-2 bg-[#ffb38a] rounded-full"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
              />
            </div>

            {/* Student-Focused Subtitle */}
            <motion.p
              className="text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              As a student developer, I offer{' '}
              <span className="text-[#ff6700] font-medium">innovative</span> solutions 
              with fresh perspectives and{' '}
              <span className="text-[#ff6700] font-medium">cutting-edge</span> technologies.
              Let's create something{' '}
              <span className="text-[#ff6700] font-medium">amazing</span> together!
            </motion.p>
          </motion.div>

          {/* Modern Card Grid for Student Services */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Web Development",
                description: "Building responsive, modern websites and web applications using React, Next.js, and other contemporary frameworks.",
                icon: <Code className="h-6 w-6" />,
                features: ["React & Next.js", "Responsive Design", "API Integration", "Performance Optimization"],
                gradient: "from-[#ff6700] to-[#ff9248]",
                image: "/services/webdev.jpg",
                fallbackImage: "https://images.unsplash.com/photo-1607706189992-eae578626c86?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
              },
              {
                title: "UI/UX Design",
                description: "Creating intuitive and engaging user interfaces with modern aesthetics and smooth user experiences.",
                icon: <Cpu className="h-6 w-6" />,
                features: ["Figma Prototypes", "User-Centered Design", "Interactive Elements", "Design Systems"],
                gradient: "from-[#ff9248] to-[#ffb38a]",
                image: "/services/uiux.jpg",
                fallbackImage: "https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2000&q=80"
              },
              {
                title: "Academic Projects",
                description: "Collaborating on college projects with innovative solutions and technical implementation for real-world problems.",
                icon: <Star className="h-6 w-6" />,
                features: ["Research Integration", "Documentation", "GitHub Management", "Presentations"],
                gradient: "from-[#ffb38a] to-[#ffd7b5]",
                image: "/services/academic.jpg",
                fallbackImage: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
              }
            ].map((service, index) => (
              <motion.div
                key={index}
                className="group relative bg-white rounded-xl shadow-lg transition-all duration-500 border border-gray-100 overflow-hidden h-full"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
              >
                {/* Modern Card Header with Overlay Gradient */}
                <div className="relative h-56 overflow-hidden">
                  {/* Gradients and Overlays */}
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-900/40 to-transparent z-10" />
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} mix-blend-multiply opacity-40 group-hover:opacity-60 transition-opacity duration-500 z-10`} />
                  
                  {/* Icon with circle background */}
                  <div className="absolute top-6 right-6 z-20">
                    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-white/90 backdrop-blur-sm shadow-lg text-[#ff6700] group-hover:scale-110 transition-transform duration-300">
                      {service.icon}
                    </div>
                  </div>
                  
                  {/* Background Image */}
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:rotate-1"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.onerror = null;
                      target.src = service.fallbackImage;
                    }}
                  />
                  
                  {/* Title positioned at bottom */}
                  <h3 className="absolute bottom-6 left-6 text-2xl font-bold text-white z-20 group-hover:translate-x-1 transition-transform duration-300">
                    {service.title}
                  </h3>
                </div>

                {/* Card Content */}
                <div className="p-6 flex flex-col h-[calc(100%-14rem)]">
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features List with Modern Style */}
                  <div className="mt-auto">
                    <ul className="grid grid-cols-2 gap-y-2 gap-x-4">
                      {service.features.map((feature, i) => (
                        <motion.li 
                          key={i} 
                          className="flex items-center text-gray-700 text-sm"
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.1 + i * 0.1 }}
                        >
                          <div className={`flex-shrink-0 w-1.5 h-1.5 rounded-full bg-gradient-to-br ${service.gradient} mr-2`} />
                          {feature}
                        </motion.li>
                      ))}
                    </ul>
                    
                    {/* Learn More Link */}
                    <motion.div
                      className="mt-6 border-t border-gray-100 pt-4"
                      whileHover={{ x: 5 }}
                    >
                      <Link to="/services" className="flex items-center justify-between text-[#ff6700] font-medium group/link">
                        <span>Learn more</span>
                        <span className="w-6 h-6 rounded-full bg-[#ff6700]/10 flex items-center justify-center">
                          <ArrowRight className="h-3 w-3 transition-transform group-hover/link:translate-x-0.5" />
                        </span>
                      </Link>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Contact CTA Section */}
      <section className="py-32 bg-gradient-to-br from-[#ffd7b5] via-white to-[#fff1e6] relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-full">
            <motion.div
              className="absolute top-1/4 left-1/4 w-64 h-64 bg-[#ff6700]/10 rounded-full blur-3xl"
              animate={{
                scale: [1, 1.2, 1],
                x: [-10, 10, -10],
                y: [-10, 10, -10],
              }}
              transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
              className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-[#ffb38a]/10 rounded-full blur-3xl"
              animate={{
                scale: [1.2, 1, 1.2],
                x: [10, -10, 10],
                y: [10, -10, 10],
              }}
              transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 2 }}
            />
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            className="bg-white/80 backdrop-blur-lg p-12 rounded-3xl shadow-xl relative overflow-hidden border border-gray-100"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Decorative elements */}
            <div className="absolute -top-12 -right-12 w-40 h-40 bg-gradient-to-br from-[#ff6700]/10 to-[#ffb38a]/10 rounded-full blur-2xl" />
            <div className="absolute -bottom-12 -left-12 w-40 h-40 bg-gradient-to-br from-[#ffb38a]/10 to-[#ff6700]/10 rounded-full blur-2xl" />
            
            <div className="text-center space-y-8 relative">
              <h2 className={`text-4xl md:text-5xl font-bold ${commonStyles.heading}`}>
                Let's Work{' '}
                <motion.span
                  className="inline-block bg-gradient-to-r from-[#ff6700] via-[#ff9248] to-[#ffb38a] text-transparent bg-clip-text"
                  animate={{
                    backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                >
                  Together
                </motion.span>
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Have a project in mind? I'd love to help you bring it to life and create something amazing together.
              </p>
              <motion.div className="pt-4" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-[#ff6700] text-white rounded-full hover:bg-[#ff9248] transition-all shadow-lg hover:shadow-xl"
                >
                  Get in Touch
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Modified Modal with Enhanced Animations */}
      {showModal && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 backdrop-blur-sm"
          onClick={() => setShowModal(false)}
        >
          <motion.div
            initial={{ scale: 0.5, y: 100, opacity: 0 }}
            animate={{ scale: 1, y: 0, opacity: 1 }}
            exit={{ scale: 0.5, y: 100, opacity: 0 }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 30
            }}
            className="bg-white rounded-2xl p-8 max-w-md mx-4 relative shadow-2xl border border-gray-100 overflow-hidden"
            onClick={e => e.stopPropagation()}
          >
            {/* Decorative elements */}
            <div className="absolute -top-12 -right-12 w-40 h-40 bg-gradient-to-br from-[#ff6700]/10 to-[#ffb38a]/10 rounded-full blur-xl" />
            <div className="absolute -bottom-12 -left-12 w-40 h-40 bg-gradient-to-br from-[#ffb38a]/10 to-[#ff6700]/10 rounded-full blur-xl" />
            
            <motion.button
              whileHover={{ scale: 1.1, rotate: 90 }}
              whileTap={{ scale: 0.9 }}
              transition={{ duration: 0.2 }}
              onClick={() => setShowModal(false)}
              className="absolute right-4 top-4 text-gray-500 hover:text-gray-700 z-10"
            >
              <X className="h-6 w-6" />
            </motion.button>
            
            <motion.div className="relative z-10">
              <motion.h3 
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.1 }}
                className="text-2xl font-bold mb-4 text-gray-900"
              >
                Resume Options
              </motion.h3>
              <motion.p 
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-gray-600 mb-6"
              >
                Choose what you'd like to do:
              </motion.p>
              <div className="space-y-4">
                <motion.button
                  initial={{ x: -50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  whileHover={{ scale: 1.02, backgroundColor: "#ff9248" }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => {
                    setShowModal(false);
                    setShowPdfViewer(true);
                  }}
                  className="block w-full px-4 py-3 bg-[#ff6700] text-white rounded-lg transition-all text-center shadow-md hover:shadow-lg"
                >
                  View PDF
                </motion.button>
                <motion.a
                  initial={{ x: -50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  whileHover={{ scale: 1.02, backgroundColor: "#ffd7b5" }}
                  whileTap={{ scale: 0.98 }}
                  href="/My Resume.pdf"
                  download="Vineet_Sahoo_Resume.pdf"
                  className="block w-full px-4 py-3 bg-[#ffb38a] text-gray-900 rounded-lg transition-all text-center shadow-md hover:shadow-lg"
                  onClick={() => setShowModal(false)}
                >
                  Download PDF
                </motion.a>
                <motion.a
                  initial={{ x: -50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  whileHover={{ scale: 1.02, backgroundColor: "#ff6700", color: "white" }}
                  whileTap={{ scale: 0.98 }}
                  href="/My Resume.docx"
                  download="Vineet_Sahoo_Resume.docx"
                  className="block w-full px-4 py-3 border-2 border-[#ff6700] text-[#ff6700] rounded-lg transition-all text-center shadow-md hover:shadow-lg"
                  onClick={() => setShowModal(false)}
                >
                  Download DOCX
                </motion.a>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      )}

      {/* PDF Viewer Modal with Enhanced Animations */}
      {showPdfViewer && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 bg-black bg-opacity-80 backdrop-blur-sm flex items-center justify-center z-50"
          onClick={() => setShowPdfViewer(false)}
        >
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.5, opacity: 0 }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 30
            }}
            className="bg-white rounded-xl p-4 w-11/12 h-[90vh] relative shadow-2xl border border-gray-100"
            onClick={e => e.stopPropagation()}
          >
            <motion.button
              whileHover={{ scale: 1.1, rotate: 90 }}
              whileTap={{ scale: 0.9 }}
              transition={{ duration: 0.2 }}
              onClick={() => setShowPdfViewer(false)}
              className="absolute right-4 top-4 bg-white/80 backdrop-blur-sm p-2 rounded-full text-gray-500 hover:text-gray-700 z-10 shadow-md"
            >
              <X className="h-6 w-6" />
            </motion.button>
            <motion.iframe
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              src="/My Resume.pdf"
              className="w-full h-full rounded-lg"
              title="Resume PDF"
            />
          </motion.div>
        </motion.div>
      )}
    </div>
  );
};

export default Home;