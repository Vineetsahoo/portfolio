import { motion, AnimatePresence } from 'framer-motion';
import { 
  Trophy,
  Award,
  Scroll,
  X,
  ExternalLink,
  ChevronRight,
  Eye,
  Check,
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
  const [activeSection, setActiveSection] = useState<string>("professional");

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
    ],
    badges: [
      {
        icon: <Award className="w-6 h-6" />,
        title: "AWS Cloud Champion",
        organization: "Amazon Web Services",
        date: "2024",
        badgeUrl: "/aws-badge.png",
        verificationUrl: "https://www.credly.com/badges/your-badge-id",
        color: "from-[#FF9900] to-[#232F3E]",
        description: "Recognized for exceptional cloud architecture and solutions"
      },
      {
        icon: <Award className="w-6 h-6" />,
        title: "Microsoft Azure Expert",
        organization: "Microsoft",
        date: "2024",
        badgeUrl: "/azure-badge.png",
        verificationUrl: "https://learn.microsoft.com/en-us/users/your-profile",
        color: "from-[#008AD7] to-[#0078D4]",
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
        : 'bg-gradient-to-br from-white via-gray-50 to-[#fff1e6]'
    }`}>
      {/* Enhanced Decorative Elements */}
      <motion.div 
        animate={floatingAnimation}
        className="absolute top-20 right-10 w-80 h-80 bg-[#ff6700]/10 rounded-full blur-[100px]"
      />
      <motion.div 
        animate={{
          ...floatingAnimation,
          transition: {
            ...floatingAnimation.transition,
            delay: 0.5
          }
        }}
        className="absolute bottom-40 -left-20 w-96 h-96 bg-[#ff6700]/5 rounded-full blur-[120px]"
      />
      
      {/* Modern Glowing Grid Background */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative">
        {/* Enhanced Header Section */}
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
              <div className="w-full h-full bg-gradient-to-br from-[#ff6700]/20 to-transparent rounded-full blur-[100px]" />
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
              {/* Enhanced decorative elements */}
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="absolute top-0 right-0 w-20 h-20 bg-[#ff6700]/10 rounded-full blur-xl"
              />
              
              {/* Trending line animation */}
              <motion.div 
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 1.5, ease: "easeInOut", delay: 0.2 }}
                className="h-[2px] bg-gradient-to-r from-transparent via-[#ff6700]/50 to-transparent mx-auto mb-6 max-w-lg"
              />

              <div className="relative">
                {/* Enhanced title with more dramatic animations */}
                <motion.h1 
                  className={`text-4xl md:text-6xl lg:text-7xl font-bold mb-6 ${
                    isDarkMode ? 'text-white' : 'text-gray-900'
                  } tracking-tight leading-tight`}
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
                            word === "Milestones" ? "bg-clip-text text-transparent bg-gradient-to-r from-[#ff6700] to-[#ffb38a]" : ""
                          }`}
                        >
                          {letter}
                        </motion.span>
                      ))}
                    </motion.span>
                  ))}
                </motion.h1>

                {/* Enhanced Decorative Line */}
                <div className="relative w-40 mx-auto mb-8 overflow-hidden">
                  <motion.div
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ delay: 0.8, duration: 0.8 }}
                    className="h-2 bg-gradient-to-r from-[#ff6700] to-[#ffb38a] rounded-full"
                  />
                  <motion.div
                    animate={{ 
                      scale: [1, 1.5, 1],
                      opacity: [0.5, 0.8, 0.5]
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="absolute -inset-4 bg-[#ff6700]/20 blur-xl rounded-full"
                  />
                </div>

                {/* Enhanced subtitle with gradient text */}
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1, duration: 0.8 }}
                  className={`text-lg md:text-xl ${
                    isDarkMode ? 'text-gray-300' : 'text-gray-600'
                  } max-w-3xl mx-auto leading-relaxed`}
                >
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#ff6700] to-[#ffb38a] font-medium">Exploring</span> a journey of continuous growth and{' '}
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#ff6700] to-[#ffb38a] font-medium">excellence</span> in tech innovation
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
                      className="w-32 h-32 border-2 border-[#ff6700]/20 rounded-full"
                    />
                    <motion.div
                      animate={{ rotate: -360 }}
                      transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                      className="absolute inset-4 border-2 border-[#ff6700]/30 rounded-full"
                    />
                    <motion.div
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                      className="absolute inset-0 -m-2 border border-[#ff6700]/10 rounded-full"
                    />
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Modernized Professional Achievements Section */}
        <motion.div
          id="professional"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="mb-28"
          onViewportEnter={() => setActiveSection("professional")}
        >
          <h2 className={`text-3xl font-bold mb-10 flex items-center ${
            isDarkMode ? 'text-white' : 'text-gray-900'
          }`}>
            <div className="mr-4 p-3 rounded-xl bg-gradient-to-br from-[#ff6700] to-[#ffb38a] text-white shadow-lg shadow-[#ff6700]/20">
              <Trophy className="w-6 h-6" />
            </div>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#ff6700] to-[#ffb38a]">
              Recognition
            </span>
          </h2>
          
          <div className="space-y-12">
            {achievements.professional.map((item, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className={`group relative overflow-hidden ${
                  isDarkMode 
                    ? 'bg-gray-800/50' 
                    : 'bg-white/80'
                } backdrop-blur-lg rounded-2xl shadow-lg transition-all duration-500`}
                whileHover={{ 
                  y: -5, 
                  boxShadow: isDarkMode 
                    ? '0 25px 50px -12px rgba(255, 103, 0, 0.15)' 
                    : '0 25px 50px -12px rgba(255, 103, 0, 0.25)'
                }}
              >
                {/* Background gradient */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#ff6700]/5 to-transparent opacity-50 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Visual accent line */}
                <motion.div 
                  initial={{ height: '0%' }}
                  animate={{ height: '100%' }}
                  className="absolute left-0 top-0 w-1 bg-gradient-to-b from-[#ff6700] to-[#ffb38a] group-hover:w-2 transition-all duration-300"
                />
                
                <div className="relative p-6 md:p-8 grid md:grid-cols-5 gap-8">
                  {/* Image column */}
                  <div className="md:col-span-2">
                    <div className="relative rounded-xl overflow-hidden bg-gray-100 shadow-inner aspect-[4/3] group-hover:shadow-xl transition-all duration-300">
                      {item.src && (
                        <motion.img
                          src={item.src}
                          alt={item.title}
                          className="w-full h-full object-cover"
                          initial={{ scale: 1 }}
                          whileHover={{ scale: 1.05 }}
                          transition={{ duration: 0.4 }}
                          onError={(e) => {
                            e.currentTarget.src = '/placeholder-achievement.jpg';
                          }}
                        />
                      )}
                      
                      {/* Overlay with gradient */}
                      <motion.div 
                        className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4"
                        initial={{ opacity: 0 }}
                        whileHover={{ opacity: 1 }}
                      >
                        <span className="text-white text-xs font-medium px-2 py-1 rounded bg-black/30 backdrop-blur-sm">
                          {item.date}
                        </span>
                      </motion.div>
                    </div>
                  </div>
                  
                  {/* Content column */}
                  <div className="md:col-span-3 flex flex-col justify-between">
                    <div>
                      <div className="flex items-start gap-4 mb-4">
                        <div className="p-3 rounded-xl bg-[#fff1e6] text-[#ff6700] transform transition-transform duration-300 group-hover:scale-110 shadow-md">
                          {item.icon}
                        </div>
                        <div>
                          <h3 className={`text-2xl font-bold ${
                            isDarkMode ? 'text-white' : 'text-gray-900'
                          } group-hover:text-[#ff6700] transition-colors duration-300`}>{item.title}</h3>
                          <p className="text-[#ff6700] font-medium mt-1">{item.organization}</p>
                        </div>
                      </div>
                      
                      <p className={`${
                        isDarkMode ? 'text-gray-300' : 'text-gray-600'
                      } leading-relaxed mb-6`}>
                        {item.description}
                      </p>
                    </div>
                    
                    <div className="flex flex-wrap items-center justify-between mt-4">
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
                        <Eye className="w-4 h-4" />
                        View Achievement
                      </motion.button>
                      
                      {/* Visual indicator for interaction */}
                      <motion.div 
                        initial={{ opacity: 0, x: -10 }}
                        whileHover={{ opacity: 1, x: 0 }}
                        className="text-[#ff6700]/70 flex items-center text-sm"
                      >
                        <span className="mr-2">Click to enlarge</span>
                        <ChevronRight className="w-4 h-4" />
                      </motion.div>
                    </div>
                  </div>
                </div>
                
                {/* Bottom edge highlight */}
                <div className="h-1 w-full bg-gradient-to-r from-[#ff6700]/0 via-[#ff6700]/30 to-[#ff6700]/0 group-hover:opacity-100 opacity-0 transition-opacity duration-300" />
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
          onViewportEnter={() => setActiveSection("certifications")}
        >
          <h2 className={`text-3xl font-bold mb-10 flex items-center ${
            isDarkMode ? 'text-white' : 'text-gray-900'
          }`}>
            <div className="mr-4 p-3 rounded-xl bg-gradient-to-br from-[#ff6700] to-[#ffb38a] text-white shadow-lg shadow-[#ff6700]/20">
              <Scroll className="w-6 h-6" />
            </div>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#ff6700] to-[#ffb38a]">
              Global Level Certifications
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
                {/* Background shape */}
                <div className="absolute -right-16 -top-16 w-32 h-32 bg-[#ff6700]/5 rounded-full blur-xl group-hover:bg-[#ff6700]/10 transition-colors duration-300" />
                <div className="absolute -left-16 -bottom-16 w-40 h-40 bg-[#ff6700]/5 rounded-full blur-xl group-hover:bg-[#ff6700]/10 transition-colors duration-300" />
                
                {/* Certificate type indicator */}
                {cert.type === 'pdf' && (
                  <div className="absolute top-6 right-6 flex items-center gap-2 text-xs font-medium px-3 py-1.5 rounded-full bg-[#ff6700]/10 text-[#ff6700]">
                    <Download className="w-3 h-3" /> PDF
                  </div>
                )}
                
                <div className="flex items-start mb-6 relative">
                  <div className="p-3 rounded-xl bg-gradient-to-br from-[#fff1e6] to-white text-[#ff6700] mr-4 group-hover:scale-110 transition-transform duration-300 shadow-md">
                    {cert.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className={`text-2xl font-bold mb-2 ${
                      isDarkMode ? 'text-white' : 'text-gray-900'
                    } group-hover:text-[#ff6700] transition-colors duration-300`}>{cert.title}</h3>
                    <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'} mb-4`}>
                      {cert.organization}
                    </p>
                    <motion.div 
                      className={`flex justify-between items-center p-3 ${
                        isDarkMode ? 'bg-gray-700/70' : 'bg-gray-50/80'
                      } backdrop-blur-sm rounded-lg text-sm border-l-4 border-[#ff6700]`}
                      initial={{ x: 0 }}
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      <span className={isDarkMode ? 'text-gray-300' : 'text-gray-500'}>
                        Issued: {cert.date}
                      </span>
                      <span className="text-[#ff6700] font-medium">
                        ID: {cert.credentialId}
                      </span>
                    </motion.div>
                  </div>
                </div>
                
                <div className={`pt-4 border-t ${
                  isDarkMode ? 'border-gray-700' : 'border-gray-200'
                } mt-4`}>
                  <motion.button
                    className="w-full text-[#ff6700] group-hover:text-[#ff8533] transition-colors flex items-center justify-between gap-2 py-2"
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
                  className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#ff6700] to-[#ffb38a]"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Modernized Global Badges Section */}
        <motion.div
          id="badges"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="mb-20"
          onViewportEnter={() => setActiveSection("badges")}
        >
          <h2 className={`text-3xl font-bold mb-10 flex items-center ${
            isDarkMode ? 'text-white' : 'text-gray-900'
          }`}>
            <div className="mr-4 p-3 rounded-xl bg-gradient-to-br from-[#ff6700] to-[#ffb38a] text-white shadow-lg shadow-[#ff6700]/20">
              <Award className="w-6 h-6" />
            </div>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#ff6700] to-[#ffb38a]">
              Global Badges
            </span>
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {achievements.badges.map((badge, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className={`relative overflow-hidden rounded-2xl shadow-lg group`}
                whileHover={{ y: -5 }}
              >
                {/* Enhanced glass-like background */}
                <div className={`absolute inset-0 ${
                  isDarkMode ? 'bg-gray-800/90' : 'bg-white/90'
                } backdrop-blur-md z-0`} />
                
                {/* Background gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${badge.color} opacity-10 group-hover:opacity-15 transition-opacity duration-500`} />
                
                {/* Badge shape in background */}
                <div className="absolute -right-16 -bottom-16 w-64 h-64 bg-gradient-to-br from-[#ff6700]/5 to-transparent rounded-full blur-3xl group-hover:scale-110 transition-transform duration-500" />
                
                <div className="relative p-8 z-10">
                  <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
                    <div className="relative">
                      {/* Badge glow effect */}
                      <motion.div 
                        animate={{ 
                          boxShadow: ['0 0 0 rgba(255, 103, 0, 0.3)', '0 0 20px rgba(255, 103, 0, 0.6)', '0 0 0 rgba(255, 103, 0, 0.3)'],
                        }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="absolute inset-0 rounded-full"
                      />
                      <div className="relative w-24 h-24 rounded-full p-1 bg-gradient-to-r from-[#ff6700] to-[#ffb38a] shadow-lg">
                        <div className={`rounded-full p-2 w-full h-full flex items-center justify-center ${
                          isDarkMode ? 'bg-gray-900' : 'bg-white'
                        }`}>
                          <img
                            src={badge.badgeUrl}
                            alt={badge.title}
                            className="w-full h-full object-contain rounded-full"
                            onError={(e) => {
                              e.currentTarget.src = '/placeholder-badge.svg';
                            }}
                          />
                        </div>
                      </div>
                      
                      {/* Verified indicator */}
                      <div className="absolute -bottom-1 -right-1 bg-[#ff6700] text-white p-1 rounded-full border-2 border-white dark:border-gray-800">
                        <Check className="w-3 h-3" />
                      </div>
                    </div>
                    
                    <div className="flex-1">
                      <h3 className={`text-2xl font-bold mb-2 ${
                        isDarkMode ? 'text-white' : 'text-gray-900'
                      } group-hover:text-[#ff6700] transition-colors duration-300`}>
                        {badge.title}
                      </h3>
                      <p className="bg-clip-text text-transparent bg-gradient-to-r from-[#ff6700] to-[#ffb38a] font-medium">
                        {badge.organization}
                      </p>
                      <p className={`mt-2 ${
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
                      className="flex items-center gap-2 text-[#ff6700] hover:text-[#ff8533] font-medium group/link"
                      whileHover={{ x: 5 }}
                    >
                      Verify Badge
                      <motion.span 
                        className="text-xl transition-transform"
                        animate={{ x: [0, 3, 0] }}
                        transition={{ repeat: Infinity, duration: 1.5 }}
                      >
                        <ExternalLink className="w-4 h-4" />
                      </motion.span>
                    </motion.a>
                  </div>
                </div>
                
                {/* Edge highlights */}
                <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#ff6700]/50 to-transparent opacity-50 group-hover:opacity-100 transition-opacity duration-500" />
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
                  className={`${getImageClassName(achievements.professional.find(item => item.src === selectedImage)?.title || '')} ring-4 ring-[#ff6700]/20`}
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
              className="relative w-full h-[85vh] max-w-6xl bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-2xl border border-[#ff6700]/20"
              onClick={e => e.stopPropagation()}
            >
              <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-[#ff6700] to-[#ffb38a] h-1" />
              <motion.button
                className="absolute top-4 right-4 z-10 bg-white/10 backdrop-blur-sm rounded-full p-2 text-[#ff6700] shadow-lg"
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
              <div className="h-1 w-full bg-gradient-to-r from-[#ff6700] to-[#ffb38a]" />
              
              <div className="p-8">
                <div className="flex justify-between items-center">
                  <motion.button
                    className="text-gray-500 hover:text-[#ff6700] p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800"
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
                    <div className="p-4 rounded-xl bg-gradient-to-br from-[#ff6700] to-[#ffb38a] text-white shadow-lg">
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