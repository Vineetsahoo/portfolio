import { motion, AnimatePresence } from 'framer-motion';
import { 
  Trophy,
  Award,
  Scroll,
  X
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
        src: "/Auto Cad Competition.jpg" // Fix the image path (no spaces, proper extension)
      },
      {
        icon: <Award className="w-6 h-6" />,
        title: "SemiConductor Competition 2023",
        organization: "Certification of Excellence",
        description: "Awarded for best design in semiconductor category",
        src: "/Semiconductor Competition.jpg"
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
        type: "pdf"  // Add type to help with rendering
      },
      {
        icon: <Scroll className="w-6 h-6" />,
        title: "Cloud Infrastructure Foundations Associate",
        organization: "Oracle",
        date: "2025",
        credentialId: "101123395OCI2024DCFA",
        src: "/eCertificate.pdf", // Update to use src instead of image
        type: "pdf"  // Update type to pdf
      }
    ],
    badges: [
      {
        icon: <Award className="w-6 h-6" />,
        title: "AWS Cloud Champion",
        organization: "Amazon Web Services",
        date: "2024",
        badgeUrl: "/aws-badge.png",
        verificationUrl: "https://www.credly.com/badges/your-badge-id",
        color: "from-[#FF9900] to-[#232F3E]", // AWS colors
        description: "Recognized for exceptional cloud architecture and solutions"
      },
      {
        icon: <Award className="w-6 h-6" />,
        title: "Microsoft Azure Expert",
        organization: "Microsoft",
        date: "2024",
        badgeUrl: "/azure-badge.png",
        verificationUrl: "https://learn.microsoft.com/en-us/users/your-profile",
        color: "from-[#008AD7] to-[#0078D4]", // Azure colors
        description: "Advanced proficiency in Azure cloud services"
      }
    ]
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const floatingAnimation = {
    y: [0, -20, 0],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut"
    }
  };

  const buttonVariants = {
    rest: { scale: 1 },
    hover: { 
      scale: 1.05,
      transition: {
        duration: 0.2,
        type: "spring",
        stiffness: 400,
        damping: 10
      }
    },
    tap: { scale: 0.95 }
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

  const getImageClassName = (title: string) => {
    if (title === "Creative Ingenuity 2024") {
      return "max-w-md mx-auto h-auto rounded-lg shadow-2xl";
    }
    if (title === "SemiConductor Competition 2023") {
      return "max-w-xxl mx-auto h-auto rounded-lg shadow-2xl"; // Added specific size for Semiconductor Competition
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
        : 'bg-gradient-to-br from-white via-gray-50 to-[#fff1e6]'
    }`}>
      {/* Decorative Elements */}
      <motion.div 
        animate={floatingAnimation}
        className="absolute top-20 right-10 w-64 h-64 bg-[#ff6700]/10 rounded-full blur-3xl"
      />
      <motion.div 
        animate={floatingAnimation}
        className="absolute bottom-20 left-10 w-64 h-64 bg-[#ff6700]/10 rounded-full blur-3xl"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative">
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="relative mb-32 mt-12 px-4"
        >
          {/* Background Elements */}
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
              <div className="w-full h-full bg-gradient-to-br from-[#ff6700]/20 to-transparent rounded-full blur-3xl" />
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
              <div className="w-full h-full bg-gradient-to-tr from-[#ff6700]/10 to-transparent rounded-full blur-3xl" />
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
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="absolute -top-8 -right-8 w-16 h-16 bg-[#ff6700]/10 rounded-full blur-xl"
              />

              <div className="relative">
                {/* Main Title */}
                <motion.h1 
                  className={`text-4xl md:text-5xl lg:text-6xl font-bold mb-6 ${
                    isDarkMode ? 'text-white' : 'text-gray-900'
                  }`}
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
                            word === "Milestones" ? "text-[#ff6700]" : ""
                          }`}
                        >
                          {letter}
                        </motion.span>
                      ))}
                    </motion.span>
                  ))}
                </motion.h1>

                {/* Decorative Line */}
                <div className="relative w-32 mx-auto mb-8">
                  <motion.div
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ delay: 0.8, duration: 0.8 }}
                    className="h-2 bg-gradient-to-r from-[#ff6700] to-[#ffb38a] rounded-full"
                  />
                  <motion.div
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="absolute -inset-4 bg-[#ff6700]/20 blur-xl rounded-full"
                  />
                </div>

                {/* Subtitle */}
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1, duration: 0.8 }}
                  className={`text-lg md:text-xl ${
                    isDarkMode ? 'text-gray-300' : 'text-gray-600'
                  } max-w-3xl mx-auto leading-relaxed`}
                >
                  <span className="text-[#ff6700] font-medium">Exploring</span> a journey of continuous growth and{' '}
                  <span className="text-[#ff6700] font-medium">excellence</span> in tech innovation
                </motion.p>

                {/* Decorative Elements */}
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
                      className="w-32 h-32 border-2 border-[#ff6700]/20 rounded-full"
                    />
                    <motion.div
                      animate={{ rotate: -360 }}
                      transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                      className="absolute inset-4 border-2 border-[#ff6700]/30 rounded-full"
                    />
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Professional Achievements Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="mb-20"
        >
          <h2 className={`text-3xl font-bold mb-10 flex items-center ${
            isDarkMode ? 'text-white' : 'text-gray-900'
          }`}>
            <Trophy className="w-8 h-8 mr-3 text-[#ff6700]" />
            Recognition
          </h2>
          <div className="grid grid-cols-1 gap-8">
            {achievements.professional.map((item, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className={`group relative ${
                  isDarkMode 
                    ? 'bg-gray-800/50 hover:bg-gray-800' 
                    : 'bg-white/80 hover:bg-white'
                } backdrop-blur-lg rounded-2xl shadow-lg transition-all duration-300`}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-[#ff6700]/5 to-transparent rounded-2xl" />
                <div className="relative p-6 md:p-8 flex flex-col md:flex-row items-start gap-6">
                  <div className="flex-shrink-0 w-full md:w-64">
                    <div className="aspect-[4/3] rounded-xl overflow-hidden bg-gray-100 relative group-hover:shadow-xl transition-shadow duration-300">
                      {item.src && (
                        <img
                          src={item.src}
                          alt={item.title}
                          className="w-full h-full object-cover transform transition-transform duration-300 group-hover:scale-105"
                          onError={(e) => {
                            e.currentTarget.src = '/placeholder-achievement.jpg';
                          }}
                        />
                      )}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="p-3 rounded-xl bg-[#fff1e6] text-[#ff6700] transform transition-transform duration-300 group-hover:scale-110">
                        {item.icon}
                      </div>
                      <div>
                        <h3 className={`text-2xl font-bold ${
                          isDarkMode ? 'text-white' : 'text-gray-900'
                        }`}>{item.title}</h3>
                        <p className="text-[#ff6700] font-medium mt-1">{item.organization}</p>
                      </div>
                    </div>
                    
                    <p className={`${
                      isDarkMode ? 'text-gray-300' : 'text-gray-600'
                    } leading-relaxed mb-6`}>
                      {item.description}
                    </p>
                    
                    <motion.button 
                      variants={buttonVariants}
                      initial="rest"
                      whileHover="hover"
                      whileTap="tap"
                      className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg ${
                        isDarkMode 
                          ? 'bg-gray-700 hover:bg-gray-600' 
                          : 'bg-[#fff1e6] hover:bg-[#ffe4d3]'
                      } text-[#ff6700] font-medium transition-colors`}
                      onClick={() => setSelectedImage(item.src || null)}
                    >
                      <Trophy className="w-4 h-4" />
                      View Achievement
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Certifications Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="mb-20"
        >
          <h2 className={`text-3xl font-bold mb-10 flex items-center ${
            isDarkMode ? 'text-white' : 'text-gray-900'
          }`}>
            <Scroll className="w-8 h-8 mr-3 text-[#ff6700]" />
            Global Level Certifications
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {achievements.certifications.map((cert, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className={`group relative ${
                  isDarkMode 
                    ? 'bg-gray-800/50 hover:bg-gray-800' 
                    : 'bg-white/80 hover:bg-white'
                } backdrop-blur-lg p-8 rounded-2xl shadow-lg transition-all duration-300 cursor-pointer`}
                whileHover={{ y: -8 }}
                onClick={() => handleCertificateView(cert)}
              >
                <div className="flex items-start mb-6">
                  <div className="p-3 rounded-xl bg-[#fff1e6] text-[#ff6700] mr-4 group-hover:scale-110 transition-transform duration-300">
                    {cert.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className={`text-2xl font-bold mb-2 ${
                      isDarkMode ? 'text-white' : 'text-gray-900'
                    }`}>{cert.title}</h3>
                    <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'} mb-4`}>
                      {cert.organization}
                    </p>
                    <div className={`flex justify-between items-center p-3 ${
                      isDarkMode ? 'bg-gray-700' : 'bg-gray-50'
                    } rounded-lg text-sm`}>
                      <span className={isDarkMode ? 'text-gray-300' : 'text-gray-500'}>
                        Issued: {cert.date}
                      </span>
                      <span className="text-[#ff6700] font-medium">
                        ID: {cert.credentialId}
                      </span>
                    </div>
                  </div>
                </div>
                <motion.button
                  className="mt-4 text-[#ff6700] hover:text-[#ff8533] transition-colors flex items-center gap-2"
                  whileHover={{ x: 5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {cert.type === 'pdf' ? 'Open Certificate' : 'View Credentials'} <span className="text-xl">→</span>
                </motion.button>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Global Badges Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="mb-20"
        >
          <h2 className={`text-3xl font-bold mb-10 flex items-center ${
            isDarkMode ? 'text-white' : 'text-gray-900'
          }`}>
            <Award className="w-8 h-8 mr-3 text-[#ff6700]" />
            Global Badges
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {achievements.badges.map((badge, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className={`relative overflow-hidden ${
                  isDarkMode ? 'bg-gray-800' : 'bg-white'
                } rounded-2xl shadow-lg`}
                whileHover={{ y: -5 }}
              >
                {/* Background gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${badge.color} opacity-10`} />
                
                <div className="relative p-8">
                  <div className="flex items-center gap-6">
                    <div className="relative">
                      <div className="absolute inset-0 bg-gradient-to-r from-[#ff6700] to-[#ff8533] blur-lg opacity-50" />
                      <img
                        src={badge.badgeUrl}
                        alt={badge.title}
                        className="relative w-24 h-24 object-contain rounded-full bg-white p-2"
                      />
                    </div>
                    
                    <div className="flex-1">
                      <h3 className={`text-2xl font-bold mb-2 ${
                        isDarkMode ? 'text-white' : 'text-gray-900'
                      }`}>{badge.title}</h3>
                      <p className="text-[#ff6700] font-medium">{badge.organization}</p>
                      <p className={`mt-2 text-sm ${
                        isDarkMode ? 'text-gray-400' : 'text-gray-600'
                      }`}>{badge.description}</p>
                    </div>
                  </div>
                  
                  <div className={`mt-6 flex items-center justify-between ${
                    isDarkMode ? 'border-gray-700' : 'border-gray-200'
                  } pt-4 border-t`}>
                    <div className={`flex items-center ${
                      isDarkMode ? 'text-gray-400' : 'text-gray-600'
                    }`}>
                      <Award className="w-5 h-5 mr-2" />
                      <span>Earned {badge.date}</span>
                    </div>
                    <motion.a
                      href={badge.verificationUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-[#ff6700] hover:text-[#ff8533] font-medium"
                      whileHover={{ x: 5 }}
                    >
                      Verify Badge
                      <span className="text-xl">→</span>
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Image Popup */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4 backdrop-blur-sm"
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
                className="absolute -top-12 right-0 text-white hover:text-[#ff6700] transition-colors"
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
                  className={getImageClassName(achievements.professional.find(item => item.src === selectedImage)?.title || '')}
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

      {/* Add PDF Popup */}
      <AnimatePresence>
        {selectedPdf && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedPdf(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative w-full h-[85vh] max-w-6xl bg-white rounded-lg overflow-hidden"
              onClick={e => e.stopPropagation()}
            >
              <motion.button
                className="absolute top-4 right-4 z-10 bg-white/10 backdrop-blur-sm rounded-full p-2"
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setSelectedPdf(null)}
              >
                <X className="w-6 h-6 text-white" />
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

      {/* Add New Certification Popup */}
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
              <div className="p-8">
                <motion.button
                  className="absolute top-4 right-4 text-gray-500 hover:text-[#ff6700]"
                  whileHover={{ rotate: 90 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setSelectedCert(null)}
                >
                  <X className="w-6 h-6" />
                </motion.button>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="mt-8"
                >
                  <div className="flex items-center gap-4 mb-8">
                    <div className="p-3 rounded-xl bg-[#fff1e6] text-[#ff6700]">
                      {selectedCert.icon}
                    </div>
                    <div>
                      <h2 className={`text-2xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                        {selectedCert.title}
                      </h2>
                      <p className="text-[#ff6700]">{selectedCert.organization}</p>
                    </div>
                  </div>

                  {selectedCert.image && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.3 }}
                      className="relative aspect-[4/3] w-full overflow-hidden rounded-xl"
                    >
                      <img
                        src={selectedCert.image}
                        alt={selectedCert.title}
                        className="w-full h-full object-cover"
                      />
                    </motion.div>
                  )}

                  <div className="mt-8 space-y-4">
                    <div className={`p-4 rounded-lg ${isDarkMode ? 'bg-gray-800' : 'bg-gray-50'}`}>
                      <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>Credential ID</p>
                      <p className={`font-mono mt-1 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                        {selectedCert.credentialId}
                      </p>
                    </div>
                    <div className={`p-4 rounded-lg ${isDarkMode ? 'bg-gray-800' : 'bg-gray-50'}`}>
                      <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>Issue Date</p>
                      <p className={`mt-1 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                        {selectedCert.date}
                      </p>
                    </div>
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