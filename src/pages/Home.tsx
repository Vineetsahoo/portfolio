import { motion, useScroll, useTransform } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { useState } from 'react';
import { 
  ArrowRight, Download, Github, Linkedin, Instagram, Cpu, Code, X, Star, Sparkles, Rocket, Heart, Coffee, Globe
} from 'lucide-react';
import { Link } from 'react-router-dom';

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
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 relative overflow-hidden">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0">
        {/* Geometric Pattern Background */}
        <div className="absolute inset-0 opacity-30">
          <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="xMidYMid slice">
            <defs>
              <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
                <path d="M 60 0 L 0 0 0 60" fill="none" stroke="url(#gridGradient)" strokeWidth="2.5"/>
              </pattern>
              <linearGradient id="gridGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#f97316" stopOpacity="0.1"/>
                <stop offset="50%" stopColor="#ec4899" stopOpacity="0.15"/>
                <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.1"/>
              </linearGradient>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)"/>
          </svg>
        </div>

        {/* Floating Geometric Shapes */}
        <div className="absolute inset-0">
          <motion.div
            className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-orange-400/10 to-pink-400/10 rounded-3xl rotate-12"
            animate={{ 
              y: [0, -20, 0],
              rotate: [12, 18, 12],
              scale: [1, 1.1, 1]
            }}
            transition={{ 
              duration: 8, 
              repeat: Infinity, 
              ease: "easeInOut" 
            }}
          />
          <motion.div
            className="absolute top-40 right-20 w-24 h-24 bg-gradient-to-l from-blue-400/10 to-purple-400/10 rounded-full"
            animate={{ 
              x: [0, 15, 0],
              y: [0, -15, 0],
              scale: [1, 0.9, 1]
            }}
            transition={{ 
              duration: 6, 
              repeat: Infinity, 
              ease: "easeInOut",
              delay: 1
            }}
          />
          <motion.div
            className="absolute bottom-40 left-1/4 w-28 h-28 bg-gradient-to-t from-green-400/10 to-emerald-400/10 rounded-2xl -rotate-12"
            animate={{ 
              rotate: [-12, -6, -12],
              y: [0, 10, 0]
            }}
            transition={{ 
              duration: 10, 
              repeat: Infinity, 
              ease: "easeInOut",
              delay: 2
            }}
          />
        </div>

        {/* Enhanced Gradient Orbs */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-r from-orange-300/15 to-pink-300/15 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/3 right-0 w-80 h-80 bg-gradient-to-l from-blue-300/15 to-purple-300/15 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-0 left-1/3 w-72 h-72 bg-gradient-to-t from-green-300/15 to-emerald-300/15 rounded-full blur-3xl animate-pulse delay-2000"></div>
        
        {/* Subtle Diagonal Lines */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-orange-400/30 to-transparent transform rotate-12 origin-left"></div>
          <div className="absolute top-32 left-0 w-full h-px bg-gradient-to-r from-transparent via-pink-400/30 to-transparent transform rotate-12 origin-left"></div>
          <div className="absolute top-64 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-400/30 to-transparent transform rotate-12 origin-left"></div>
        </div>
      </div>
      {/* Ultra-Modern Hero Section */}
      <motion.section 
        className="min-h-screen flex items-center relative overflow-hidden"
        style={{ y }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 relative z-10">
          <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12 lg:gap-16">
            
            {/* Left Content - Ultra Modern */}
            <motion.div 
              className="w-full lg:w-1/2 text-center lg:text-left space-y-8"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >

              {/* Enhanced Title with Modern Typography */}
              <div className="relative">
                <motion.h1 
                  className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight mb-5"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  Hi, I'm{' '}
                  <span className="relative inline-block">
                    <span className="bg-gradient-to-r from-orange-500 via-pink-500 to-purple-500 bg-clip-text text-transparent">
                      Vineet Sahoo
                    </span>
                    <motion.div
                      className="absolute -inset-1 bg-gradient-to-r from-orange-400/20 via-pink-400/20 to-purple-400/20 rounded-lg blur-lg"
                      animate={{ 
                        scale: [1, 1.05, 1],
                        opacity: [0.3, 0.6, 0.3]
                      }}
                      transition={{ 
                        duration: 3, 
                        repeat: Infinity, 
                        ease: "easeInOut" 
                      }}
                    />
                  </span>
                </motion.h1>

                {/* Dynamic underline */}
                <motion.div 
                  className="relative h-3 mb-12 overflow-hidden rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: "12rem" }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-orange-400 via-pink-400 to-purple-400 rounded-full">
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-white/40 to-transparent rounded-full"
                      animate={{ x: ["-100%", "100%"] }}
                      transition={{ 
                        duration: 2, 
                        repeat: Infinity, 
                        ease: "easeInOut" 
                      }}
                    />
                  </div>
                </motion.div>
              </div>
              
              {/* Modern Typing Animation with Glass Effect */}
              <motion.div 
                className="relative bg-white/70 backdrop-blur-xl rounded-2xl p-6 border border-white/50 shadow-xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                <div className="absolute top-4 left-4 flex gap-2">
                  <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                </div>
                
                <div className="pt-6">
                  <TypeAnimation
                    sequence={[
                      'Building modern web applications 🚀',
                      2000,
                      'Creating seamless user experiences ✨',
                      2000,
                      'Transforming ideas into reality 💡',
                      2000,
                      'Full-stack development with passion ❤️',
                      2000
                    ]}
                    wrapper="p"
                    cursor={true}
                    repeat={Infinity}
                    className="text-xl md:text-2xl text-gray-700 leading-relaxed font-medium"
                  />
                </div>
              </motion.div>
              
              {/* Modern Action Buttons */}
              <motion.div 
                className="flex flex-wrap justify-center lg:justify-start gap-4 pt-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
              >
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link
                    to="/projects"
                    className="group flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-orange-500 to-pink-500 text-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    <Rocket className="h-5 w-5 group-hover:rotate-12 transition-transform" />
                    View My Work
                    <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </motion.div>
                
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link
                    to="/contact"
                    className="group flex items-center gap-2 px-8 py-4 bg-white/80 backdrop-blur-sm text-gray-900 rounded-2xl shadow-lg hover:shadow-xl border border-gray-200 transition-all duration-300"
                  >
                    <Coffee className="h-5 w-5 group-hover:rotate-12 transition-transform" />
                    Let's Talk
                    <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </motion.div>
                
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <a
                    href="/My Resume.pdf"
                    onClick={handleDownload}
                    className="group flex items-center gap-2 px-8 py-4 border-2 border-gradient-to-r from-orange-500 to-pink-500 text-orange-600 rounded-2xl hover:bg-gradient-to-r hover:from-orange-500 hover:to-pink-500 hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl"
                  >
                    <Download className="h-5 w-5 group-hover:animate-bounce" />
                    Download CV
                  </a>
                </motion.div>
              </motion.div>
              
              {/* Ultra-Modern Social Links */}
              <motion.div 
                className="flex justify-center lg:justify-start gap-6 pt-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.9 }}
              >
                {[
                  { 
                    icon: <Github className="h-6 w-6" />, 
                    url: "https://github.com/Vineetsahoo", 
                    label: "GitHub",
                    color: "from-gray-700 to-gray-900"
                  },
                  { 
                    icon: <Linkedin className="h-6 w-6" />, 
                    url: "https://www.linkedin.com/in/vineet-sahoo-81b022311/", 
                    label: "LinkedIn",
                    color: "from-blue-600 to-blue-800"
                  },
                  { 
                    icon: <Instagram className="h-6 w-6" />, 
                    url: "https://www.instagram.com/sahoo_era/", 
                    label: "Instagram",
                    color: "from-pink-500 to-purple-600"
                  }
                ].map((social, index) => (
                  <motion.div 
                    key={index}
                    whileHover={{ scale: 1.1, y: -5 }}
                    whileTap={{ scale: 0.9 }}
                    className="relative group"
                  >
                    <motion.div 
                      className={`absolute -inset-2 rounded-full bg-gradient-to-r ${social.color} opacity-0 group-hover:opacity-20 blur-md transition-opacity duration-300`}
                    />
                    <a
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="relative flex items-center justify-center w-14 h-14 bg-white/80 backdrop-blur-sm text-gray-600 rounded-full shadow-lg group-hover:text-white group-hover:bg-gradient-to-r group-hover:from-gray-700 group-hover:to-gray-900 transition-all duration-300 border border-gray-200"
                      aria-label={social.label}
                    >
                      {social.icon}
                    </a>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
            
            {/* Right Side - Ultra-Modern Circular Profile Image */}
            <motion.div 
              className="w-full lg:w-1/2 flex justify-center lg:justify-end"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="relative w-80 h-80 lg:w-96 lg:h-96">
                {/* Outermost rotating ring with pulse */}
                <motion.div
                  className="absolute -inset-4 rounded-full bg-gradient-to-r from-orange-400/30 via-pink-400/30 to-purple-400/30 p-0.5"
                  animate={{ 
                    rotate: 360,
                    scale: [1, 1.05, 1]
                  }}
                  transition={{ 
                    rotate: { duration: 30, repeat: Infinity, ease: "linear" },
                    scale: { duration: 4, repeat: Infinity, ease: "easeInOut" }
                  }}
                >
                  <div className="w-full h-full rounded-full bg-gradient-to-br from-slate-50/50 via-white/50 to-blue-50/50 backdrop-blur-sm"></div>
                </motion.div>

                {/* Third rotating ring */}
                <motion.div
                  className="absolute -inset-2 rounded-full bg-gradient-to-r from-blue-400/40 via-emerald-400/40 to-orange-400/40 p-0.5"
                  animate={{ rotate: -360 }}
                  transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                >
                  <div className="w-full h-full rounded-full bg-gradient-to-br from-slate-50/70 via-white/70 to-blue-50/70 backdrop-blur-sm"></div>
                </motion.div>

                {/* Rotating outer ring */}
                <motion.div
                  className="absolute inset-0 rounded-full bg-gradient-to-r from-orange-400 via-pink-400 to-blue-400 p-1"
                  animate={{ 
                    rotate: 360,
                    opacity: [0.8, 1, 0.8]
                  }}
                  transition={{ 
                    rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                    opacity: { duration: 3, repeat: Infinity, ease: "easeInOut" }
                  }}
                >
                  <div className="w-full h-full rounded-full bg-gradient-to-br from-slate-50 via-white to-blue-50"></div>
                </motion.div>

                {/* Inner rotating ring */}
                <motion.div
                  className="absolute inset-2 rounded-full bg-gradient-to-l from-blue-400 via-purple-400 to-orange-400 p-0.5"
                  animate={{ 
                    rotate: -360,
                    scale: [1, 1.02, 1]
                  }}
                  transition={{ 
                    rotate: { duration: 15, repeat: Infinity, ease: "linear" },
                    scale: { duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }
                  }}
                >
                  <div className="w-full h-full rounded-full bg-white/95 backdrop-blur-xl"></div>
                </motion.div>

                {/* Innermost ring with different animation */}
                <motion.div
                  className="absolute inset-4 rounded-full bg-gradient-to-r from-emerald-400/60 via-blue-400/60 to-pink-400/60 p-0.5"
                  animate={{ 
                    rotate: 360,
                    opacity: [0.6, 0.9, 0.6]
                  }}
                  transition={{ 
                    rotate: { duration: 12, repeat: Infinity, ease: "linear" },
                    opacity: { duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }
                  }}
                >
                  <div className="w-full h-full rounded-full bg-white/90 backdrop-blur-xl"></div>
                </motion.div>

                {/* Main circular image container */}
                <div className="absolute inset-6 rounded-full overflow-hidden shadow-2xl border-4 border-white/50 backdrop-blur-sm">
                  <img
                    src="/portrait.jpg"
                    alt="Vineet Sahoo"
                    className="w-full h-full object-cover"
                  />
                  
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent"></div>
                  
                  {/* Enhanced animated pulse overlay */}
                  <motion.div
                    className="absolute inset-0 rounded-full bg-gradient-to-r from-orange-400/20 via-pink-400/20 to-purple-400/20"
                    animate={{ 
                      scale: [1, 1.1, 1],
                      opacity: [0, 0.4, 0],
                      rotate: [0, 180, 360]
                    }}
                    transition={{ 
                      duration: 6, 
                      repeat: Infinity, 
                      ease: "easeInOut" 
                    }}
                  />

                  {/* Additional pulsing effect */}
                  <motion.div
                    className="absolute inset-0 rounded-full bg-gradient-to-l from-blue-400/15 via-emerald-400/15 to-orange-400/15"
                    animate={{ 
                      scale: [1.1, 1, 1.1],
                      opacity: [0.3, 0, 0.3]
                    }}
                    transition={{ 
                      duration: 4, 
                      repeat: Infinity, 
                      ease: "easeInOut",
                      delay: 1
                    }}
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Ultra-Modern Services Section */}
      <section className="py-32 bg-gradient-to-br from-white via-slate-50 to-blue-50 relative overflow-hidden">
        {/* Modern Background Pattern */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-orange-300/20 to-pink-300/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-l from-blue-300/20 to-purple-300/20 rounded-full blur-3xl"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Modern Section Header */}
          <motion.div 
            className="text-center mb-20"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative inline-block mb-8">
              <div className="absolute -inset-4 bg-gradient-to-r from-orange-400/20 via-pink-400/20 to-purple-400/20 rounded-2xl blur-xl"></div>
              <div className="relative inline-flex items-center justify-center p-4 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-white/50">
                <Globe className="w-8 h-8 text-orange-500" />
              </div>
            </div>
            
            <h2 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              What I{' '}
              <span className="bg-gradient-to-r from-orange-500 via-pink-500 to-purple-500 bg-clip-text text-transparent">
                Create
              </span>
            </h2>
            
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Crafting digital experiences with modern technologies and creative solutions.
              From concept to deployment, I build applications that make a difference.
            </p>
            
            {/* Modern decorative line */}
            <motion.div
              className="w-24 h-1 bg-gradient-to-r from-orange-400 via-pink-400 to-purple-400 rounded-full mx-auto mt-8"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.3 }}
            />
          </motion.div>

          {/* Ultra-Modern Services Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Web Development",
                description: "Building responsive, performant web applications with modern frameworks and cutting-edge technologies.",
                icon: <Code className="h-8 w-8" />,
                features: ["React & Next.js", "TypeScript", "API Integration", "Performance Optimization"],
                gradient: "from-blue-500 to-cyan-500",
                bgGradient: "from-blue-50 to-cyan-50",
                accentColor: "blue",
                technologies: ["React", "Node.js", "MongoDB", "TypeScript"],
                image: "https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=500"
              },
              {
                title: "UI/UX Design",
                description: "Creating intuitive and visually appealing user interfaces that enhance user experience and engagement.",
                icon: <Sparkles className="h-8 w-8" />,
                features: ["Figma Prototypes", "User Research", "Interactive Design", "Design Systems"],
                gradient: "from-purple-500 to-pink-500",
                bgGradient: "from-purple-50 to-pink-50",
                accentColor: "purple",
                technologies: ["Figma", "Adobe XD", "Sketch", "Principle"],
                image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=500"
              },
              {
                title: "Full-Stack Solutions",
                description: "End-to-end development solutions from database design to frontend implementation and deployment.",
                icon: <Cpu className="h-8 w-8" />,
                features: ["Database Design", "API Development", "Cloud Deployment", "Testing & QA"],
                gradient: "from-emerald-500 to-teal-500",
                bgGradient: "from-emerald-50 to-teal-50",
                accentColor: "emerald",
                technologies: ["Express.js", "PostgreSQL", "AWS", "Docker"],
                image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=500"
              }
            ].map((service, index) => (
              <motion.div
                key={index}
                className="group h-full"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <motion.div 
                  className={`relative h-full bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100 group-hover:shadow-2xl transition-all duration-500`}
                  whileHover={{ y: -10, scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {/* Modern Card Header */}
                  <div className="relative h-56 overflow-hidden">
                    {/* Background Image */}
                    <img 
                      src={service.image} 
                      alt={service.title}
                      className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                    />
                    
                    {/* Gradient Overlays */}
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-900/40 to-transparent"></div>
                    <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} mix-blend-multiply opacity-60 group-hover:opacity-40 transition-opacity duration-500`}></div>
                    
                    {/* Floating Icon */}
                    <div className="absolute top-6 right-6">
                      <div className={`p-3 bg-white/20 backdrop-blur-sm rounded-2xl text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                        {service.icon}
                      </div>
                    </div>
                    
                    {/* Service Title */}
                    <div className="absolute bottom-6 left-6 right-6">
                      <h3 className="text-2xl font-bold text-white mb-2 group-hover:translate-y-[-4px] transition-transform duration-300">
                        {service.title}
                      </h3>
                      <div className={`w-16 h-1 bg-gradient-to-r ${service.gradient} rounded-full group-hover:w-24 transition-all duration-300`}></div>
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-8">
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {service.description}
                    </p>

                    {/* Key Features */}
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3">Key Features</h4>
                      <ul className="grid grid-cols-2 gap-y-2 gap-x-1">
                        {service.features.map((feature, i) => (
                          <motion.li 
                            key={i} 
                            className="flex items-center text-gray-700 text-sm"
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 + i * 0.1 }}
                          >
                            <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${service.gradient} mr-2 flex-shrink-0`}></div>
                            <span className="truncate">{feature}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </div>

                    {/* Technologies */}
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3">Technologies</h4>
                      <div className="flex flex-wrap gap-2">
                        {service.technologies.map((tech, i) => (
                          <span
                            key={i}
                            className={`px-3 py-1 bg-gradient-to-r ${service.bgGradient} text-${service.accentColor}-700 rounded-full text-xs font-medium border border-${service.accentColor}-200`}
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                  </div>

                  {/* Hover overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-3xl pointer-events-none`}></div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Ultra-Modern Contact CTA Section */}
      <section className="py-32 bg-gradient-to-br from-slate-900 via-gray-900 to-black relative overflow-hidden">
        {/* Modern background effects */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full opacity-20">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-orange-500 to-pink-500 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-l from-blue-500 to-purple-500 rounded-full blur-3xl animate-pulse delay-1000"></div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Modern icon badge */}
            <div className="relative inline-block mb-8">
              <div className="absolute -inset-4 bg-gradient-to-r from-orange-400/20 via-pink-400/20 to-purple-400/20 rounded-2xl blur-xl"></div>
              <div className="relative inline-flex items-center justify-center p-4 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20">
                <Rocket className="w-8 h-8 text-white" />
              </div>
            </div>

            <h2 className="text-5xl lg:text-6xl font-bold text-white mb-6">
              Ready to{' '}
              <span className="bg-gradient-to-r from-orange-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
                Collaborate?
              </span>
            </h2>
            
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12 leading-relaxed">
              Let's turn your ideas into reality. Whether it's a web application, mobile app, 
              or innovative solution, I'm here to help bring your vision to life.
            </p>

            {/* Modern CTA buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <motion.div 
                whileHover={{ scale: 1.05 }} 
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  to="/contact"
                  className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-orange-500 to-pink-500 text-white rounded-2xl shadow-2xl hover:shadow-orange-500/25 transition-all duration-300"
                >
                  <Heart className="h-5 w-5 group-hover:animate-pulse" />
                  Start a Project
                  <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>


            </div>
          </motion.div>
        </div>
      </section>

      {/* Ultra-Modern Modal */}
      {showModal && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4"
          onClick={() => setShowModal(false)}
        >
          <motion.div
            initial={{ scale: 0.5, y: 100, opacity: 0 }}
            animate={{ scale: 1, y: 0, opacity: 1 }}
            exit={{ scale: 0.5, y: 100, opacity: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="relative bg-white rounded-3xl p-8 max-w-md mx-auto shadow-2xl border border-gray-100 overflow-hidden"
            onClick={e => e.stopPropagation()}
          >
            {/* Modern decorative elements */}
            <div className="absolute -top-16 -right-16 w-32 h-32 bg-gradient-to-br from-orange-400/20 to-pink-400/20 rounded-full blur-2xl"></div>
            <div className="absolute -bottom-16 -left-16 w-32 h-32 bg-gradient-to-tr from-blue-400/20 to-purple-400/20 rounded-full blur-2xl"></div>
            
            <motion.button
              whileHover={{ scale: 1.1, rotate: 90 }}
              whileTap={{ scale: 0.9 }}
              transition={{ duration: 0.2 }}
              onClick={() => setShowModal(false)}
              className="absolute right-4 top-4 p-2 text-gray-400 hover:text-gray-600 rounded-full hover:bg-gray-100 transition-all duration-200"
            >
              <X className="h-5 w-5" />
            </motion.button>
            
            <div className="relative z-10">
              <motion.div
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.1 }}
                className="text-center mb-6"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-orange-500 to-pink-500 rounded-2xl mb-4">
                  <Download className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Download Resume</h3>
                <p className="text-gray-600">Choose your preferred format</p>
              </motion.div>

              <div className="space-y-3">
                <motion.button
                  initial={{ x: -50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => { setShowModal(false); setShowPdfViewer(true); }}
                  className="w-full flex items-center gap-3 p-4 bg-gradient-to-r from-orange-500 to-pink-500 text-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <div className="p-2 bg-white/20 rounded-lg">
                    <Star className="h-5 w-5" />
                  </div>
                  <div className="text-left">
                    <div className="font-semibold">View PDF</div>
                    <div className="text-sm opacity-90">Preview in browser</div>
                  </div>
                </motion.button>

                <motion.a
                  initial={{ x: -50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  href="/My Resume.pdf"
                  download="Vineet_Sahoo_Resume.pdf"
                  className="w-full flex items-center gap-3 p-4 bg-white border-2 border-orange-200 text-gray-700 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:border-orange-300"
                  onClick={() => setShowModal(false)}
                >
                  <div className="p-2 bg-orange-100 rounded-lg">
                    <Download className="h-5 w-5 text-orange-600" />
                  </div>
                  <div className="text-left">
                    <div className="font-semibold">Download PDF</div>
                    <div className="text-sm text-gray-500">Save to device</div>
                  </div>
                </motion.a>

                <motion.a
                  initial={{ x: -50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  href="/My Resume.docx"
                  download="Vineet_Sahoo_Resume.docx"
                  className="w-full flex items-center gap-3 p-4 bg-white border-2 border-blue-200 text-gray-700 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:border-blue-300"
                  onClick={() => setShowModal(false)}
                >
                  <div className="p-2 bg-blue-100 rounded-lg">
                    <Globe className="h-5 w-5 text-blue-600" />
                  </div>
                  <div className="text-left">
                    <div className="font-semibold">Download DOCX</div>
                    <div className="text-sm text-gray-500">Word document</div>
                  </div>
                </motion.a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}

      {/* Ultra-Modern PDF Viewer */}
      {showPdfViewer && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4"
          onClick={() => setShowPdfViewer(false)}
        >
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.5, opacity: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="bg-white rounded-2xl w-full max-w-4xl h-[90vh] relative shadow-2xl overflow-hidden"
            onClick={e => e.stopPropagation()}
          >
            <div className="absolute top-0 left-0 right-0 h-16 bg-white border-b border-gray-200 flex items-center justify-between px-6 z-10">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-orange-100 rounded-lg">
                  <Download className="h-5 w-5 text-orange-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Resume Preview</h3>
                  <p className="text-sm text-gray-500">Vineet Sahoo</p>
                </div>
              </div>
              
              <motion.button
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
                transition={{ duration: 0.2 }}
                onClick={() => setShowPdfViewer(false)}
                className="p-2 text-gray-400 hover:text-gray-600 rounded-full hover:bg-gray-100 transition-all duration-200"
              >
                <X className="h-6 w-6" />
              </motion.button>
            </div>

            <iframe
              src="/My Resume.pdf"
              className="w-full h-full pt-16 rounded-b-2xl"
              title="Resume PDF"
            />
          </motion.div>
        </motion.div>
      )}
    </div>
  );
};

export default Home;