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
  X } from 'lucide-react';
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
      {/* Hero Section */}
      <motion.section 
        className="min-h-screen flex items-center relative overflow-hidden bg-gradient-to-br from-[#ffd7b5] via-white to-[#fff1e6]"
        style={{ y }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="absolute inset-0 opacity-20">
          <div className="grid grid-cols-8 grid-rows-8 gap-1 h-full w-full">
            {[...Array(64)].map((_, i) => (
              <motion.div
                key={i}
                className="bg-[#ff6700]"
                initial={{ opacity: 0 }}
                animate={{ opacity: Math.random() }}
                transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
              />
            ))}
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 relative">
          <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-12 md:gap-16 px-4 sm:px-6">
            <motion.div 
              className="w-full md:w-1/2 text-center md:text-left space-y-8"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold ${commonStyles.heading} leading-tight`}>
                Hi, I'm <span className="text-[#ff6700]">Vineet Sahoo</span>
              </h1>
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
              <div className="flex justify-center md:justify-start gap-6 sm:gap-8 pt-6">
                <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                  <a
                    href="https://github.com/Vineetsahoo"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-[#ff6700] transition-colors"
                  >
                    <Github className="h-6 w-6" />
                  </a>
                </motion.div>
                <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                  <a
                    href="https://www.linkedin.com/in/vineet-sahoo-81b022311/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-[#ff6700] transition-colors"
                  >
                    <Linkedin className="h-6 w-6" />
                  </a>
                </motion.div>
                <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                  <a
                    href="https://www.instagram.com/sahoo_era/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-[#ff6700] transition-colors"
                  >
                    <Instagram className="h-6 w-6" />
                  </a>
                </motion.div>
              </div>
            </motion.div>
            <motion.div 
              className="w-48 h-48 sm:w-60 sm:h-60 md:w-80 md:h-80 lg:w-[450px] lg:h-[450px] mb-12 md:mb-0"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
            >
              <div className="relative">
                <div className="absolute inset-0 bg-[#ff6700] rounded-full blur-3xl opacity-20 animate-pulse"></div>
                <img
                  src="/portrait.jpg"
                  alt="Vineet Sahoo"
                  className="relative rounded-full w-96 h-96 object-cover border-4 border-white/10 shadow-2xl"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Services Section */}
      <section className="py-20 bg-gradient-to-br from-white via-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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

            {/* Subtitle with Highlighted Words */}
            <motion.p
              className="text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              Delivering{' '}
              <span className="text-[#ff6700] font-medium">comprehensive</span> web solutions 
              with a focus on{' '}
              <span className="text-[#ff6700] font-medium">performance</span>,{' '}
              <span className="text-[#ff6700] font-medium">scalability</span>, and{' '}
              <span className="text-[#ff6700] font-medium">user experience</span>
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12">
            {[
              {
                title: "Full-Stack Development",
                description: "End-to-end web application development using modern technologies and best practices. Focus on scalable and maintainable solutions.",
                icon: <Code className="h-6 w-6" />,
                features: ["Custom Web Apps", "RESTful APIs", "Database Design", "Performance Optimization"],
                gradient: "from-[#ff6700] to-[#ff9248]"
              },
              {
                title: "Frontend Development",
                description: "Crafting modern, responsive user interfaces with React and other cutting-edge frontend technologies.",
                icon: <Cpu className="h-6 w-6" />,
                features: ["React Applications", "State Management", "Performance Testing", "Progressive Web Apps"],
                gradient: "from-[#ff9248] to-[#ffb38a]"
              },
              {
                title: "UI/UX Development",
                description: "Creating responsive and intuitive user interfaces with modern design patterns and smooth animations.",
                icon: <Code className="h-6 w-6" />,
                features: ["Responsive Design", "Animation", "Component Libraries", "Accessibility"],
                gradient: "from-[#ffb38a] to-[#ffd7b5]"
              }
            ].map((service, index) => (
              <motion.div
                key={index}
                className="group relative bg-white p-8 rounded-2xl shadow-lg transition-all duration-500 border border-gray-100 overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
              >
                {/* Animated Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                
                {/* Decorative Elements */}
                <div className="absolute -right-12 -top-12 w-40 h-40 bg-gradient-to-br from-orange-100 to-orange-50 rounded-full opacity-0 group-hover:opacity-50 transition-all duration-500 blur-2xl" />
                
                {/* Icon Container */}
                <div className="inline-flex p-4 rounded-xl bg-[#ff6700] text-white shadow-lg mb-6">
                  {service.icon}
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold mb-4 text-gray-900 group-hover:text-[#ff6700] transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Features List */}
                <ul className="space-y-3">
                  {service.features.map((feature, i) => (
                    <motion.li 
                      key={i} 
                      className="flex items-center text-gray-700 group-hover:text-gray-900 transition-colors duration-300"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 + i * 0.1 }}
                    >
                      <span className="w-2 h-2 rounded-full bg-[#ff6700] mr-3 transform transition-transform duration-300 group-hover:scale-150" />
                      {feature}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="py-32 bg-gradient-to-br from-[#ffd7b5] via-white to-[#fff1e6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className={`text-4xl md:text-5xl font-bold ${commonStyles.heading}`}>
              Let's Work{' '}
              <motion.span
                className="inline-block bg-gradient-to-r from-[#ff6700] via-[#ff9248] to-[#ffb38a] text-transparent bg-clip-text animate-gradient"
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
            <p className="text-xl text-gray-600">
              Have a project in mind? I'd love to help you bring it to life.
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
          </motion.div>
        </div>
      </section>

      {/* Modified Modal with Enhanced Animations */}
      {showModal && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
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
            className="bg-white rounded-lg p-8 max-w-md mx-4 relative"
            onClick={e => e.stopPropagation()}
          >
            <motion.button
              whileHover={{ scale: 1.1, rotate: 90 }}
              whileTap={{ scale: 0.9 }}
              transition={{ duration: 0.2 }}
              onClick={() => setShowModal(false)}
              className="absolute right-4 top-4 text-gray-500 hover:text-gray-700"
            >
              <X className="h-6 w-6" />
            </motion.button>
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
                className="block w-full px-4 py-3 bg-[#ff6700] text-white rounded-lg transition-all text-center"
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
                className="block w-full px-4 py-3 bg-[#ffb38a] text-gray-900 rounded-lg transition-all text-center"
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
                className="block w-full px-4 py-3 border-2 border-[#ff6700] text-[#ff6700] rounded-lg transition-all text-center"
                onClick={() => setShowModal(false)}
              >
                Download DOCX
              </motion.a>
            </div>
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
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
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
            className="bg-white rounded-lg p-4 w-11/12 h-[90vh] relative"
            onClick={e => e.stopPropagation()}
          >
            <motion.button
              whileHover={{ scale: 1.1, rotate: 90 }}
              whileTap={{ scale: 0.9 }}
              transition={{ duration: 0.2 }}
              onClick={() => setShowPdfViewer(false)}
              className="absolute right-4 top-4 text-gray-500 hover:text-gray-700 z-10"
            >
              <X className="h-6 w-6" />
            </motion.button>
            <motion.iframe
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              src="/My Resume.pdf"
              className="w-full h-full"
              title="Resume PDF"
            />
          </motion.div>
        </motion.div>
      )}
    </div>
  );
};

export default Home;