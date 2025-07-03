import { motion, AnimatePresence } from 'framer-motion';
import { 
  Trophy,
  Award,
  Scroll,
  X,
  ExternalLink,
  ChevronRight,
  Eye,
  Download
} from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { useState } from 'react';

const Achievements = () => {
  const { isDarkMode } = useTheme();
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [imageError, setImageError] = useState<boolean>(false);
  const [selectedCert, setSelectedCert] = useState<any>(null);
  const [selectedPdf, setSelectedPdf] = useState<string | null>(null);

  const handleCertificateView = (cert: any) => {
    if (cert.src?.endsWith('.pdf')) {
      setSelectedPdf(cert.src);
    } else {
      setSelectedCert(cert);
    }
  };

  const achievements = {
    professional: [
      {
        icon: <Trophy className="w-6 h-6" />,
        title: "Creative Ingenuity 2024",
        organization: "Certified Innovation Award",
        description: "Recognized for outstanding performance in AUTO CAD",
        src: "/Auto Cad Competition.jpg",
        date: "March 2024"
      },
      {
        icon: <Award className="w-6 h-6" />,
        title: "SemiConductor Competition 2023",
        organization: "Certification of Excellence",
        description: "Awarded for best design in semiconductor category",
        src: "/Semiconductor Competition.jpg",
        date: "November 2023"
      }
    ],
    certifications: [
      {
        icon: <Scroll className="w-6 h-6" />,
        title: "Certified Associate in Cyber Security",
        organization: "Fortinet",
        date: "2025",
        credentialId: "2013374927VS",
        src: "/Fortinet_Certified_Associate_in_Cybersecurity.pdf",
        type: "pdf"
      },
      {
        icon: <Scroll className="w-6 h-6" />,
        title: "Cloud Infrastructure Foundations Associate",
        organization: "Oracle",
        date: "2025",
        credentialId: "101123395OCI2024DCFA",
        src: "/eCertificate.pdf",
        type: "pdf"
      }
    ]
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100 } }
  };

  const floatingAnimation = {
    y: [0, -20, 0],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut"
    }
  };

  const popupVariants = {
    hidden: { 
      opacity: 0,
      scale: 0.5,
      y: 20
    },
    visible: { 
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        type: "spring",
        duration: 0.5,
        bounce: 0.3
      }
    },
    exit: { 
      opacity: 0,
      scale: 0.8,
      y: -20,
      transition: {
        duration: 0.3
      }
    }
  };

  const certificationPopupVariants = {
    hidden: { 
      x: "100%",
      opacity: 0
    },
    visible: { 
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30
      }
    },
    exit: { 
      x: "100%",
      opacity: 0,
      transition: {
        duration: 0.3
      }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.07,
        delayChildren: 0.2
      }
    }
  };

  const fadeInUp = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12
      }
    }
  };

  const getImageClassName = (title: string) => {
    if (title === "Creative Ingenuity 2024") {
      return "max-w-md mx-auto h-auto rounded-lg shadow-2xl";
    }
    if (title === "SemiConductor Competition 2023") {
      return "max-w-xxl mx-auto h-auto rounded-lg shadow-2xl";
    }
    return "w-full h-auto rounded-lg shadow-2xl";
  };

  const letterAnimation = {
    hidden: { y: 50, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  return (
    <div className={`min-h-screen relative overflow-hidden ${
      isDarkMode 
        ? 'bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white' 
        : 'bg-gradient-to-br from-slate-50 via-white to-blue-50'
    }`}>
      {/* Ultra-Modern Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-r from-orange-300/10 to-pink-300/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/3 right-0 w-80 h-80 bg-gradient-to-l from-blue-300/10 to-purple-300/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-0 left-1/3 w-72 h-72 bg-gradient-to-t from-green-300/10 to-emerald-300/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-orange-200/5 to-pink-200/5 rounded-full blur-[150px]"></div>
      </div>
      
      {/* Enhanced Decorative Elements */}
      <motion.div 
        animate={floatingAnimation}
        className="absolute top-20 right-10 w-80 h-80 bg-gradient-to-r from-orange-500/10 to-pink-500/10 rounded-full blur-[100px]"
      />
      <motion.div 
        animate={{
          ...floatingAnimation,
          transition: {
            ...floatingAnimation.transition,
            delay: 0.5
          }
        }}
        className="absolute bottom-40 -left-20 w-96 h-96 bg-gradient-to-l from-purple-500/5 to-blue-500/5 rounded-full blur-[120px]"
      />
      
      {/* Modern Grid Pattern Background */}
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.02]"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative">
        {/* Ultra-Modern Header Section */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="relative mb-32 mt-16 px-4"
        >
          {/* Enhanced Background Elements */}
          <div className="absolute inset-0 overflow-hidden">
            <motion.div 
              animate={{ 
                rotate: [0, 360],
                scale: [1, 1.1, 1]
              }}
              transition={{ 
                duration: 20,
                repeat: Infinity,
                ease: "linear"
              }}
              className="absolute -top-1/2 -right-1/2 w-full h-full"
            >
              <div className="w-full h-full bg-gradient-to-br from-orange-500/20 to-transparent rounded-full blur-[100px]" />
            </motion.div>
            <motion.div 
              animate={{ 
                rotate: [360, 0],
                scale: [1, 1.2, 1]
              }}
              transition={{ 
                duration: 25,
                repeat: Infinity,
                ease: "linear"
              }}
              className="absolute -bottom-1/2 -left-1/2 w-full h-full"
            >
              <div className="w-full h-full bg-gradient-to-tr from-purple-500/10 to-transparent rounded-full blur-3xl" />
            </motion.div>
          </div>

          {/* Content */}
          <div className="relative max-w-7xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              {/* Trending line animation */}
              <motion.div 
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 1.5, ease: "easeInOut", delay: 0.2 }}
                className="h-[2px] bg-gradient-to-r from-transparent via-orange-500/50 to-transparent mx-auto mb-6 max-w-lg"
              />

              <div className="relative">
                {/* Ultra-modern title with enhanced animations */}
                <motion.h1 
                  className={`text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight ${
                    isDarkMode ? 'text-white' : 'text-gray-900'
                  } tracking-tight`}
                >
                  {["Achievements", "&", "Milestones"].map((word, i) => (
                    <motion.span
                      key={i}
                      initial="hidden"
                      animate="visible"
                      variants={{
                        hidden: { opacity: 0 },
                        visible: { opacity: 1 }
                      }}
                      transition={{ delay: i * 0.2 }}
                      className="inline-block mx-2"
                    >
                      {word.split('').map((letter, index) => (
                        <motion.span
                          key={index}
                          variants={letterAnimation}
                          initial="hidden"
                          animate="visible"
                          transition={{ delay: i * 0.2 + index * 0.05 }}
                          className={`inline-block ${
                            word === "Milestones" 
                              ? "relative inline-block"
                              : ""
                          }`}
                        >
                          {word === "Milestones" ? (
                            <>
                              <span className="bg-gradient-to-r from-orange-500 via-pink-500 to-purple-500 bg-clip-text text-transparent">
                                {letter}
                              </span>
                              {index === word.length - 1 && (
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
                              )}
                            </>
                          ) : (
                            letter
                          )}
                        </motion.span>
                      ))}
                    </motion.span>
                  ))}
                </motion.h1>

                {/* Dynamic underline */}
                <div className="flex justify-center mb-8">
                  <motion.div 
                    className="relative h-3 overflow-hidden rounded-full"
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

                {/* Enhanced subtitle with gradient text */}
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1, duration: 0.8 }}
                  className={`text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed mb-12 ${
                    isDarkMode ? 'text-gray-300' : 'text-gray-600'
                  }`}
                >
                  <span className="bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent font-medium">Exploring</span> a journey of continuous growth and{' '}
                  <span className="bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent font-medium">excellence</span> in technology and innovation
                </motion.p>

                {/* Enhanced Decorative Elements */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.2 }}
                  className="absolute top-1/2 left-0 transform -translate-y-1/2 hidden lg:block"
                >
                  <div className="relative">
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                      className="w-32 h-32 border-2 border-orange-500/20 rounded-full"
                    />
                    <motion.div
                      animate={{ rotate: -360 }}
                      transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                      className="absolute inset-4 border-2 border-pink-500/30 rounded-full"
                    />
                    <motion.div
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                      className="absolute inset-0 -m-2 border border-purple-500/10 rounded-full"
                    />
                  </div>
                </motion.div>

                {/* Right side decorative element */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.4 }}
                  className="absolute top-1/2 right-0 transform -translate-y-1/2 hidden lg:block"
                >
                  <div className="relative">
                    <motion.div
                      animate={{ 
                        scale: [1, 1.1, 1],
                        rotate: [0, 180, 360]
                      }}
                      transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                      className="w-24 h-24 bg-gradient-to-br from-orange-400/20 to-pink-400/20 rounded-xl blur-sm"
                    />
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Professional Recognition - Play Card Style */}
        <motion.div
          id="professional"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="mb-32"
        >
          <motion.div className="text-center mb-16">
            <motion.h2 
              className={`text-5xl font-bold mb-4 ${
                isDarkMode ? 'text-white' : 'text-gray-900'
              }`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent">
                Professional Recognition
              </span>
            </motion.h2>
          </motion.div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {achievements.professional.map((item, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group perspective-1000"
                whileHover={{ scale: 1.02 }}
              >
                <motion.div
                  className={`relative ${
                    isDarkMode 
                      ? 'bg-gradient-to-br from-gray-800/90 via-gray-900/80 to-black/90' 
                      : 'bg-gradient-to-br from-white/95 via-white/90 to-blue-50/80'
                  } backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-white/20 overflow-hidden transform-gpu transition-all duration-700`}
                  whileHover={{ 
                    rotateY: 5,
                    rotateX: 5,
                    boxShadow: "0 35px 80px -15px rgba(255, 103, 0, 0.3)"
                  }}
                >
                  {/* Animated background orbs */}
                  <motion.div
                    className="absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-r from-orange-400/20 to-pink-400/20 rounded-full blur-3xl"
                    animate={{ 
                      scale: [1, 1.2, 1],
                      opacity: [0.3, 0.6, 0.3]
                    }}
                    transition={{ duration: 4, repeat: Infinity }}
                  />
                  <motion.div
                    className="absolute -bottom-20 -left-20 w-32 h-32 bg-gradient-to-r from-purple-400/20 to-blue-400/20 rounded-full blur-3xl"
                    animate={{ 
                      scale: [1, 1.3, 1],
                      opacity: [0.2, 0.5, 0.2]
                    }}
                    transition={{ duration: 5, repeat: Infinity, delay: 1 }}
                  />
                  
                  {/* Play button style icon */}
                  <motion.div 
                    className="absolute top-6 right-6 w-12 h-12 bg-gradient-to-r from-orange-500 to-pink-500 rounded-full flex items-center justify-center shadow-lg group-hover:shadow-xl"
                    whileHover={{ scale: 1.1, rotate: 90 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="w-8 h-8 text-white">
                      {item.icon}
                    </div>
                  </motion.div>
                  
                  {/* Image with play card styling */}
                  <motion.div className="relative mb-6 rounded-2xl overflow-hidden aspect-video shadow-xl">
                    <motion.img
                      src={item.src}
                      alt={item.title}
                      className="w-full h-full object-cover"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                      onError={(e) => {
                        e.currentTarget.src = '/placeholder-achievement.jpg';
                      }}
                    />
                    
                    {/* Overlay with glassmorphism */}
                    <motion.div 
                      className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6"
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                    >
                      <motion.div
                        className="bg-white/20 backdrop-blur-md rounded-full px-4 py-2 text-white text-sm font-medium"
                        initial={{ y: 20, opacity: 0 }}
                        whileHover={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.1 }}
                      >
                        {item.date}
                      </motion.div>
                    </motion.div>
                    
                    {/* Holographic shine effect */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transform -skew-x-12"
                      animate={{ x: ["-100%", "200%"] }}
                      transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                    />
                  </motion.div>
                  
                  {/* Content with enhanced typography */}
                  <motion.div className="space-y-4">
                    <motion.h3 
                      className={`text-2xl font-bold ${
                        isDarkMode ? 'text-white' : 'text-gray-900'
                      } group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-orange-500 group-hover:to-pink-500 group-hover:bg-clip-text transition-all duration-500`}
                      whileHover={{ scale: 1.02 }}
                    >
                      {item.title}
                    </motion.h3>
                    
                    <motion.p className="text-orange-500 font-semibold text-lg">
                      {item.organization}
                    </motion.p>
                    
                    <motion.p className={`${
                      isDarkMode ? 'text-gray-300' : 'text-gray-600'
                    } leading-relaxed`}>
                      {item.description}
                    </motion.p>
                  </motion.div>
                  
                  {/* Interactive button with play styling */}
                  <motion.button
                    className="mt-6 w-full py-4 bg-gradient-to-r from-orange-500/10 to-pink-500/10 hover:from-orange-500 hover:to-pink-500 border border-orange-500/30 hover:border-transparent rounded-2xl text-orange-500 hover:text-white font-semibold transition-all duration-500 flex items-center justify-center gap-3 group/btn"
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => setSelectedImage(item.src || null)}
                  >
                    <Eye className="w-5 h-5 group-hover/btn:scale-110 transition-transform" />
                    <span>View Achievement</span>
                    <motion.div
                      className="w-6 h-6 bg-orange-500/20 rounded-full flex items-center justify-center"
                      whileHover={{ rotate: 180 }}
                    >
                      <ChevronRight className="w-3 h-3" />
                    </motion.div>
                  </motion.button>
                  
                  {/* Animated border */}
                  <motion.div
                    className="absolute inset-0 rounded-3xl border-2 border-transparent bg-gradient-to-r from-orange-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{ 
                      background: 'linear-gradient(45deg, transparent, transparent)',
                      backgroundSize: '300% 300%'
                    }}
                    animate={{ 
                      backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
                    }}
                    transition={{ duration: 3, repeat: Infinity }}
                  />
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Enhanced Certifications Section */}
        <motion.div
          id="certifications"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="mb-28"
        >
          <h2 className={`text-3xl font-bold mb-10 flex items-center ${
            isDarkMode ? 'text-white' : 'text-gray-900'
          }`}>
            <div className="mr-4 p-3 rounded-xl bg-gradient-to-br from-orange-500 to-pink-500 text-white shadow-lg shadow-orange-500/25">
              <Scroll className="w-6 h-6" />
            </div>
            <span className="bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent">
              Global Certifications
            </span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {achievements.certifications.map((cert, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className={`group relative ${
                  isDarkMode 
                    ? 'bg-gray-800/50' 
                    : 'bg-white/80'
                } backdrop-blur-lg p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer overflow-hidden`}
                whileHover={{ y: -8 }}
                onClick={() => handleCertificateView(cert)}
              >
                {/* Enhanced Background shapes */}
                <div className="absolute -right-16 -top-16 w-32 h-32 bg-gradient-to-r from-orange-500/5 to-pink-500/5 rounded-full blur-xl group-hover:from-orange-500/10 group-hover:to-pink-500/10 transition-all duration-300" />
                <div className="absolute -left-16 -bottom-16 w-40 h-40 bg-gradient-to-l from-purple-500/5 to-blue-500/5 rounded-full blur-xl group-hover:from-purple-500/10 group-hover:to-blue-500/10 transition-all duration-300" />
                
                {/* Certificate type indicator */}
                {cert.type === 'pdf' && (
                  <div className="absolute top-6 right-6 flex items-center gap-2 text-xs font-medium px-3 py-1.5 rounded-full bg-orange-500/10 text-orange-600">
                    <Download className="w-3 h-3" /> PDF
                  </div>
                )}
                
                <div className="flex items-start mb-6 relative">
                  <div className="p-3 rounded-xl bg-gradient-to-br from-orange-100 to-pink-100 text-orange-600 mr-4 group-hover:scale-110 transition-transform duration-300 shadow-md">
                    {cert.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className={`text-2xl font-bold mb-2 ${
                      isDarkMode ? 'text-white' : 'text-gray-900'
                    } group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-orange-500 group-hover:to-pink-500 group-hover:bg-clip-text transition-all duration-300`}>{cert.title}</h3>
                    <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'} mb-4`}>
                      {cert.organization}
                    </p>
                    <motion.div 
                      className={`flex justify-between items-center p-3 ${
                        isDarkMode ? 'bg-gray-700/70' : 'bg-gray-50/80'
                      } backdrop-blur-sm rounded-lg text-sm border-l-4 border-orange-500`}
                      initial={{ x: 0 }}
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      <span className={isDarkMode ? 'text-gray-300' : 'text-gray-500'}>
                        Issued: {cert.date}
                      </span>
                      <span className="text-orange-600 font-medium">
                        ID: {cert.credentialId}
                      </span>
                    </motion.div>
                  </div>
                </div>
                
                <div className={`pt-4 border-t ${
                  isDarkMode ? 'border-gray-700' : 'border-gray-200'
                } mt-4`}>
                  <motion.button
                    className="w-full text-orange-600 group-hover:text-orange-500 transition-colors flex items-center justify-between gap-2 py-2"
                    whileHover={{ x: 5 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <span className="font-medium">
                      {cert.type === 'pdf' ? 'View Certificate' : 'View Credentials'}
                    </span>
                    <motion.div
                      animate={{ x: [0, 5, 0] }}
                      transition={{ 
                        repeat: Infinity, 
                        repeatType: "mirror",
                        duration: 1.5,
                        ease: "easeInOut"
                      }}
                    >
                      <ChevronRight className="w-5 h-5" />
                    </motion.div>
                  </motion.button>
                </div>
                
                {/* Hover indicator */}
                <motion.div 
                  className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-orange-500 to-pink-500"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Enhanced Image Popup */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 backdrop-blur-md"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              variants={popupVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="relative max-w-4xl w-full"
              onClick={e => e.stopPropagation()}
            >
              <motion.button
                className="absolute -top-12 right-0 text-white hover:text-orange-400 transition-colors"
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setSelectedImage(null)}
              >
                <X className="w-8 h-8" />
              </motion.button>
              {!imageError ? (
                <motion.img
                  src={selectedImage}
                  alt="Achievement"
                  className={`${getImageClassName(achievements.professional.find(item => item.src === selectedImage)?.title || '')} ring-4 ring-orange-500/20`}
                  layoutId={selectedImage}
                  transition={{ duration: 0.3 }}
                  onError={() => {
                    setImageError(true);
                    console.error('Failed to load image:', selectedImage);
                  }}
                />
              ) : (
                <motion.div
                  variants={popupVariants}
                  className="w-full p-8 text-center bg-gray-800 rounded-lg"
                >
                  <p className="text-white">Failed to load image. Please check the image path.</p>
                </motion.div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Enhanced PDF Popup */}
      <AnimatePresence>
        {selectedPdf && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 backdrop-blur-sm"
            onClick={() => setSelectedPdf(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative w-full h-[85vh] max-w-6xl bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-2xl border border-orange-500/20"
              onClick={e => e.stopPropagation()}
            >
              <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-orange-500 to-pink-500 h-1" />
              <motion.button
                className="absolute top-4 right-4 z-10 bg-white/10 backdrop-blur-sm rounded-full p-2 text-orange-500 shadow-lg"
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setSelectedPdf(null)}
              >
                <X className="w-6 h-6" />
              </motion.button>
              <iframe
                src={`${selectedPdf}#view=FitH`}
                className="w-full h-full"
                title="PDF Viewer"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Enhanced Certification Popup */}
      <AnimatePresence>
        {selectedCert && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/60 z-50 backdrop-blur-sm"
              onClick={() => setSelectedCert(null)}
            />
            <motion.div
              variants={certificationPopupVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className={`fixed right-0 top-0 h-full w-full md:w-2/3 lg:w-1/2 z-50 ${
                isDarkMode ? 'bg-gray-900' : 'bg-white'
              } shadow-2xl overflow-y-auto`}
            >
              {/* Top color bar */}
              <div className="h-1 w-full bg-gradient-to-r from-orange-500 to-pink-500" />
              
              <div className="p-8">
                <div className="flex justify-between items-center">
                  <motion.button
                    className="text-gray-500 hover:text-orange-500 p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800"
                    whileHover={{ rotate: 90 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => setSelectedCert(null)}
                  >
                    <X className="w-6 h-6" />
                  </motion.button>
                  
                  <span className={`text-sm ${
                    isDarkMode ? 'text-gray-400' : 'text-gray-500'
                  }`}>Certificate Details</span>
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="mt-8"
                >
                  <div className="flex items-center gap-4 mb-8">
                    <div className="p-4 rounded-xl bg-gradient-to-br from-orange-500 to-pink-500 text-white shadow-lg">
                      {selectedCert.icon}
                    </div>
                    <div>
                      <h2 className={`text-2xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                        {selectedCert.title}
                      </h2>
                      <p className="text-orange-500">{selectedCert.organization}</p>
                    </div>
                  </div>

                  {selectedCert.image && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.3 }}
                      className="relative aspect-[4/3] w-full overflow-hidden rounded-xl mb-8 shadow-xl border-4 border-[#ff6700]/10"
                    >
                      <img
                        src={selectedCert.image}
                        alt={selectedCert.title}
                        className="w-full h-full object-cover"
                      />
                    </motion.div>
                  )}

                  <div className="mt-8 space-y-4">
                    <motion.div 
                      className={`p-5 rounded-xl ${isDarkMode ? 'bg-gray-800' : 'bg-gray-50'} shadow-inner`}
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: 0.4 }}
                    >
                      <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>Credential ID</p>
                      <p className={`font-mono mt-1 text-lg ${isDarkMode ? 'text-white' : 'text-gray-900'} select-all`}>
                        {selectedCert.credentialId}
                      </p>
                    </motion.div>
                    <motion.div 
                      className={`p-5 rounded-xl ${isDarkMode ? 'bg-gray-800' : 'bg-gray-50'} shadow-inner`}
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: 0.5 }}
                    >
                      <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>Issue Date</p>
                      <p className={`mt-1 text-lg ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                        {selectedCert.date}
                      </p>
                    </motion.div>
                    
                    {/* Verification button */}
                    <motion.button
                      className="mt-6 w-full py-3 rounded-xl bg-gradient-to-r from-[#ff6700] to-[#ffb38a] text-white font-medium flex items-center justify-center gap-2 shadow-lg shadow-[#ff6700]/20"
                      whileHover={{ y: -2, boxShadow: '0 10px 25px -5px rgba(255, 103, 0, 0.3)' }}
                      whileTap={{ y: 0, boxShadow: '0 5px 15px -5px rgba(255, 103, 0, 0.2)' }}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.6 }}
                    >
                      Verify Credential <ExternalLink className="w-4 h-4 ml-1" />
                    </motion.button>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Achievements;