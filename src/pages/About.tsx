import { motion, useScroll, useTransform } from 'framer-motion';
import { 
  CommandLineIcon, 
  ServerIcon, 
  BoltIcon,
  TrophyIcon,
  AcademicCapIcon,
  NewspaperIcon,
  CodeBracketIcon // Add this import for Python icon
} from '@heroicons/react/24/outline';

const About = () => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);

  const skillsData = [
    { icon: <CommandLineIcon className="w-6 h-6" />, name: "React & TypeScript", level: 70 },
    { icon: <ServerIcon className="w-6 h-6" />, name: "Node.js & Express", level: 65 },
    { icon: <BoltIcon className="w-6 h-6" />, name: "MongoDB & SQL", level: 70 },
    { icon: <CodeBracketIcon className="w-6 h-6" />, name: "Python", level: 75 }
  ];

  const educationData = [
    {
      degree: "Secondary & Senior Secondary Education",
      school: "CBSE Board",
      period: "2021 - 2023",
      details: "Got First Division with 90% Marks"
    },
    {
      degree: "Bachelor of Engineering in Computer Science",
      school: "SRM Institute of Science & Technology",
      period: "2023 - 2027",
      details: "Graduated with First Class Honors"
    }
  ];

  const publications = [
    {
      title: "Blood Sync Life - Blood Donation App",
      publisher: "A Web Application",
      year: "2024"
    }
  ];

  const hackathonExperience = [
    {
      title: "Smart India Hackathon",
      organizer: "Government of India",
      period: "2024",
      description: "Developed an innovative solution for digital governance and smart cities",
      achievements: [
        "Secured a position among 100+ teams",
        "Built A Web Appication for Community Resource Sharing",
        "Implemented AI-based Chatbot for Citizen Queries"
      ],
      techStack: ["React", "Node.js", "IoT", "Blockchain"]
    },
    {
      title: "Flipkart Grid 8.0",
      organizer: "Flipkart",
      period: "2024",
      description: "Created an AI-powered e-commerce recommendation system",
      achievements: [
        "Cleared Round 1 & 2 with top scores",
        "Developed Web Application for Product Recommendations",
        "Implemented real-time product analytics"
      ],
      techStack: ["Python", "TensorFlow", "React", "AWS"]
    },
    {
      title: "Ultron 8.0",
      organizer: "Tech Community",
      period: "2025",
      description: "Built a sustainable energy management platform",
      achievements: [
        "Our topic was on Carbon Emission",
        "Reduced energy consumption by 30%",
        "Integrated smart grid solutions"
      ],
      techStack: ["IoT", "React", "Node.js", "MongoDB"]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-gray-50 to-white">
      {/* Enhanced Hero Section with Left Image */}
      <div className="relative overflow-hidden pt-20 min-h-screen flex items-center">
        <motion.div 
          className="absolute inset-0 bg-grid-pattern opacity-5"
          style={{ y }}
        />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-16 items-center px-4 sm:px-6">
            {/* Left Side - Enhanced Image with Creative Styling as Larger Rounded Rectangle */}
            <motion.div
              className="relative w-80 h-96 mx-auto lg:w-[450px] lg:h-[540px]"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              whileHover={{ scale: 1.03 }}
            >
              {/* Animated Background Elements */}
              <div className="absolute inset-3 bg-gradient-to-r from-orange-500 to-orange-300 rounded-2xl blur-2xl opacity-20 animate-pulse"></div>
              
              {/* Rotating Border */}
              <motion.div
                className="absolute inset-0 rounded-2xl"
                style={{
                  background: 'linear-gradient(90deg, #f97316 0%, #fdba74 50%, #f97316 100%)',
                  padding: '3px'
                }}
                animate={{
                  rotate: 360
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "linear"
                }}
              >
                <div className="absolute inset-0 bg-white rounded-2xl" />
              </motion.div>

              {/* Decorative Borders */}
              <motion.div
                className="absolute -inset-4 border-2 border-orange-200 rounded-2xl"
                animate={{
                  scale: [1, 1.1, 1],
                  rotate: [0, -5, 0],
                }}
                transition={{
                  duration: 12,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              <motion.div
                className="absolute -inset-8 border-2 border-dashed border-orange-100 rounded-2xl"
                animate={{
                  scale: [1.1, 1, 1.1],
                  rotate: [0, 5, 0],
                }}
                transition={{
                  duration: 12,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />

              {/* Main Image */}
              <motion.div
                className="relative h-full w-full rounded-2xl p-3 bg-white z-10"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <img
                  src="/portrait.jpg"
                  alt="Profile"
                  className="w-full h-full rounded-xl object-cover shadow-2xl
                    ring-2 ring-orange-500 ring-opacity-50
                    transition-all duration-300 hover:ring-opacity-75"
                  style={{
                    boxShadow: '0 0 25px rgba(249, 115, 22, 0.15)'
                  }}
                />
              </motion.div>
            </motion.div>

            {/* Right Side - Enhanced Content */}
            <motion.div
              className="text-left lg:pl-8"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="space-y-6">
                <div>
                  <motion.h1 
                    className="text-5xl lg:text-6xl font-bold text-gray-900 mb-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    About <span className="bg-gradient-to-r from-orange-500 to-orange-300 inline-block text-transparent bg-clip-text">Me</span>
                  </motion.h1>
                  <motion.div 
                    className="w-32 h-2 bg-gradient-to-r from-orange-400 to-orange-500 rounded-full mb-8"
                    initial={{ width: 0 }}
                    animate={{ width: "8rem" }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                  />
                </div>
                <motion.div 
                  className="space-y-8"
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    show: { opacity: 1, y: 0 }
                  }}
                  initial="hidden"
                  animate="show"
                  transition={{ delay: 0.4 }}
                >
                  {/* Introduction Card */}
                  <motion.div
                    className="bg-white/50 backdrop-blur-sm rounded-2xl p-6 border border-orange-100 shadow-xl relative overflow-hidden"
                    whileHover={{ y: -5 }}
                  >
                    {/* Decorative Element */}
                    <div className="absolute -right-8 -top-8 w-32 h-32 bg-orange-100 rounded-full opacity-50" />
                    
                    <div className="relative z-10">
                      <p className="text-xl leading-relaxed text-gray-700">
                        Hi, I'm <span className="font-bold text-orange-500">Vineet Sahoo</span>, 
                        pursuing <span className="font-medium">Computer Science Engineering</span> at{' '}
                        <span className="font-medium">SRM Institute of Science & Technology</span>. 
                        I specialize in building innovative, user-friendly, and visually stunning digital experiences.
                      </p>
                    </div>
                  </motion.div>

                  {/* Expertise Areas */}
                  <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 gap-4"
                    variants={{
                      hidden: { opacity: 0 },
                      show: { opacity: 1, transition: { staggerChildren: 0.2 } }
                    }}
                  >
                    {[
                      {
                        title: "Development",
                        details: "Front-end development with modern frameworks and responsive design principles"
                      },
                      {
                        title: "Design",
                        details: "UI/UX design focusing on user-centric and intuitive interfaces"
                      },
                      {
                        title: "Problem Solving",
                        details: "Creative solutions for complex technical challenges"
                      },
                      {
                        title: "Innovation",
                        details: "Pushing boundaries with cutting-edge technologies and approaches"
                      }
                    ].map((item, index) => (
                      <motion.div
                        key={index}
                        className="bg-white/30 backdrop-blur-sm rounded-xl p-4 border border-orange-50"
                        variants={{
                          hidden: { opacity: 0, y: 20 },
                          show: { opacity: 1, y: 0 }
                        }}
                        whileHover={{ y: -5, backgroundColor: "rgba(255, 255, 255, 0.5)" }}
                      >
                        <h3 className="text-lg font-semibold text-orange-600 mb-2">
                          {item.title}
                        </h3>
                        <p className="text-gray-600">
                          {item.details}
                        </p>
                      </motion.div>
                    ))}
                  </motion.div>

                  {/* Modern Quote Section with Glass Morphism */}
                  <motion.div
                    className="relative py-8"
                    variants={{
                      hidden: { opacity: 0, y: 20 },
                      show: { opacity: 1, y: 0 }
                    }}
                  >
                    {/* Enhanced Decorative Elements */}
                    <div className="absolute left-0 top-0 w-24 h-24 bg-gradient-to-r from-orange-200 to-transparent rounded-full blur-2xl opacity-60" />
                    <div className="absolute right-0 bottom-0 w-24 h-24 bg-gradient-to-l from-orange-200 to-transparent rounded-full blur-2xl opacity-60" />
                    
                    {/* Modern Quote Container with Glass Effect */}
                    <div className="relative bg-white/40 backdrop-blur-md rounded-2xl p-8 border border-white/50 shadow-xl overflow-hidden">
                      {/* Decorative elements */}
                      <div className="absolute top-0 right-0 w-40 h-40 bg-orange-100/30 rounded-full -mt-20 -mr-20 blur-md" />
                      <div className="absolute bottom-0 left-0 w-40 h-40 bg-orange-100/30 rounded-full -mb-20 -ml-20 blur-md" />
                      
                      {/* Modern quote marks */}
                      <div className="absolute top-3 left-3 text-6xl text-orange-200/70 font-serif">"</div>
                      <div className="absolute bottom-0 right-3 text-6xl text-orange-200/70 font-serif">"</div>
                      
                      {/* Quote Text with improved typography */}
                      <p className="text-xl md:text-2xl text-gray-700 text-center font-medium leading-relaxed px-8 relative z-10">
                        Thriving on{' '}
                        <span className="text-orange-500 font-bold relative">
                          innovation
                          <span className="absolute bottom-0 left-0 w-full h-1 bg-orange-200 rounded-full opacity-60"></span>
                        </span>,{' '}
                        <span className="text-orange-500 font-bold relative">
                          collaboration
                          <span className="absolute bottom-0 left-0 w-full h-1 bg-orange-200 rounded-full opacity-60"></span>
                        </span>,{' '}
                        and pushing{' '}
                        <span className="text-orange-500 font-bold relative">
                          creative boundaries
                          <span className="absolute bottom-0 left-0 w-full h-1 bg-orange-200 rounded-full opacity-60"></span>
                        </span>
                      </p>
                      
                      {/* Modern Decorative Line */}
                      <div className="mt-6 flex justify-center">
                        <motion.div
                          className="h-1.5 w-32 bg-gradient-to-r from-orange-500 via-orange-300 to-orange-500 rounded-full"
                          animate={{ 
                            width: ["0%", "100%", "70%"], 
                            opacity: [0, 1, 0.8],
                            x: ["-50%", "0%", "-15%"]
                          }}
                          transition={{ 
                            duration: 2, 
                            repeat: Infinity, 
                            repeatType: "reverse" 
                          }}
                        />
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Enhanced Skills Section with Modern Cards */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          className="bg-white/70 backdrop-blur-sm rounded-3xl shadow-xl p-8 lg:p-12 overflow-hidden relative border border-orange-50"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Enhanced Decorative Background */}
          <div className="absolute top-0 right-0 -mt-20 -mr-20 w-96 h-96 bg-gradient-to-b from-orange-100 to-orange-50 rounded-full opacity-70 blur-3xl" />
          <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-96 h-96 bg-gradient-to-t from-orange-50 to-orange-100 rounded-full opacity-70 blur-3xl" />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-96 bg-orange-50/50 rounded-full opacity-30 blur-3xl" />
          
          {/* Content */}
          <div className="relative z-10">
            <motion.div 
              className="max-w-2xl mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4 flex items-center">
                <div className="p-3 bg-orange-100 rounded-xl mr-4 text-orange-500">
                  <CommandLineIcon className="w-8 h-8" />
                </div>
                Core Skills
              </h2>
              <p className="text-gray-600 text-lg">
                Expertise in modern web technologies and development practices
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 lg:gap-10">
              {skillsData.map((skill, index) => (
                <motion.div
                  key={index}
                  className="bg-white p-6 rounded-xl border border-orange-100 hover:shadow-lg transition-all duration-300 relative overflow-hidden group"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -5, boxShadow: '0 15px 30px rgba(249, 115, 22, 0.1)' }}
                >
                  {/* Decorative background */}
                  <div className="absolute -right-4 -bottom-4 w-24 h-24 bg-orange-50 rounded-full opacity-70 transition-all duration-300 group-hover:scale-150 group-hover:opacity-100" />
                  
                  <div className="flex items-center justify-between mb-6 relative z-10">
                    <div className="flex items-center">
                      <div className="p-3 bg-gradient-to-br from-orange-100 to-white rounded-lg mr-4 text-orange-500 shadow-sm">
                        {skill.icon}
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900">{skill.name}</h3>
                    </div>
                    <span className="text-lg font-bold text-orange-500">{skill.level}%</span>
                  </div>
                  <div className="h-2.5 bg-gray-100 rounded-full overflow-hidden relative z-10">
                    <motion.div
                      className="h-full bg-gradient-to-r from-orange-400 to-orange-500 rounded-full relative"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.2 }}
                    >
                      <div className="absolute top-0 right-0 -mr-1.5 -mt-1 w-4 h-4 bg-white rounded-full border-2 border-orange-500 shadow-sm" />
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      {/* Enhanced Hackathon Experience Timeline with Modern Cards */}
      <motion.div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold text-gray-900 mb-12 flex items-center">
          <div className="p-3 bg-orange-100 rounded-xl mr-4 text-orange-500">
            <TrophyIcon className="w-8 h-8" />
          </div>
          Hackathon Achievements
        </h2>
        <div className="space-y-8 sm:space-y-12 px-4 sm:px-6">
          {hackathonExperience.map((hackathon, index) => (
            <motion.div
              key={index}
              className="mb-12"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
            >
              <motion.div 
                className="bg-white rounded-2xl shadow-lg overflow-hidden relative group border border-orange-50"
                whileHover={{ y: -8, boxShadow: '0 20px 40px rgba(249, 115, 22, 0.15)' }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {/* Decorative elements */}
                <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-bl from-orange-100 to-transparent rounded-full -mr-20 -mt-20 transition-transform group-hover:scale-150" />
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-orange-50 to-transparent rounded-full -ml-16 -mb-16 transition-transform group-hover:scale-150" />
                
                {/* Card Header with Gradient */}
                <div className="bg-gradient-to-r from-orange-500 to-orange-400 p-6 relative">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="p-2 bg-white rounded-lg text-orange-500">
                        <TrophyIcon className="w-5 h-5" />
                      </div>
                      <h3 className="text-2xl font-bold text-white">{hackathon.title}</h3>
                    </div>
                    <span className="px-4 py-1.5 bg-white/20 text-white rounded-full font-medium">
                      {hackathon.period}
                    </span>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-8 relative z-10">
                  <p className="text-lg text-orange-600 font-medium mb-4 flex items-center">
                    <span className="w-2 h-2 bg-orange-500 rounded-full mr-2"></span>
                    {hackathon.organizer}
                  </p>
                  <p className="text-gray-700 mb-6 border-l-4 border-orange-200 pl-4 py-2 bg-orange-50/50 rounded-r-lg">
                    {hackathon.description}
                  </p>
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                      <div className="w-6 h-1 bg-orange-300 rounded-full mr-2"></div>
                      Key Achievements
                    </h4>
                    <ul className="space-y-2 pl-2">
                      {hackathon.achievements.map((achievement, i) => (
                        <li key={i} className="flex items-start">
                          <div className="w-1.5 h-1.5 bg-orange-400 rounded-full mt-2 mr-2"></div>
                          <span className="text-gray-600">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {hackathon.techStack.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-orange-50 text-orange-600 rounded-full text-sm font-medium border border-orange-100 shadow-sm hover:bg-orange-100 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Redesigned Education & Publications Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Education Column with Modern Timeline */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="sticky top-8 space-y-8">
              <h2 className="text-3xl font-bold text-gray-900 flex items-center mb-12">
                <div className="p-3 bg-orange-100 rounded-xl mr-4 text-orange-500">
                  <AcademicCapIcon className="w-8 h-8" />
                </div>
                Educational Journey
              </h2>
              
              {/* Modern Timeline Design */}
              <div className="relative space-y-16 pl-10">
                <div className="absolute left-9 top-0 bottom-0 w-1 bg-gradient-to-b from-orange-500 via-orange-300 to-transparent rounded-full" />
                
                {educationData.map((edu, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.2 }}
                    className="relative pl-10"
                  >
                    {/* Modern Timeline Node */}
                    <div className="absolute left-[-10px] top-5 z-10">
                      <div className="w-6 h-6 rounded-full border-4 border-white bg-orange-500 shadow-md" />
                      <div className="absolute w-16 h-0.5 bg-orange-200 top-3 left-6" />
                    </div>
                    
                    {/* Content Card with Glass Effect */}
                    <motion.div
                      className="bg-white/70 backdrop-blur-sm rounded-2xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 relative overflow-hidden border border-orange-50"
                      whileHover={{ y: -5, scale: 1.02 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      {/* Decorative Elements */}
                      <div className="absolute -right-16 -top-16 w-40 h-40 bg-gradient-to-bl from-orange-100 to-transparent rounded-full opacity-70" />
                      
                      {/* Period Badge */}
                      <div className="inline-block px-4 py-2 bg-gradient-to-r from-orange-100 to-orange-50 text-orange-600 rounded-full text-sm font-semibold mb-4 border border-orange-100 shadow-sm">
                        {edu.period}
                      </div>
                      
                      <h3 className="text-2xl font-bold text-gray-900 mb-3 relative">
                        {edu.degree}
                        <div className="absolute -bottom-2 left-0 w-12 h-1 bg-orange-300 rounded-full"></div>
                      </h3>
                      <p className="text-lg text-orange-600 font-medium mb-4 flex items-center">
                        <AcademicCapIcon className="w-5 h-5 mr-2 text-orange-500" />
                        {edu.school}
                      </p>
                      <p className="text-gray-600 leading-relaxed bg-orange-50/50 p-3 rounded-lg italic">
                        {edu.details}
                      </p>
                    </motion.div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Publications Column with Modern Cards */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h2 className="text-3xl font-bold text-gray-900 flex items-center mb-12">
              <div className="p-3 bg-orange-100 rounded-xl mr-4 text-orange-500">
                <NewspaperIcon className="w-8 h-8" />
              </div>
              Featured Work
            </h2>

            {publications.map((pub, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="group"
              >
                <motion.div
                  className="bg-white rounded-2xl shadow-lg overflow-hidden border border-orange-50"
                  whileHover={{ 
                    y: -8,
                    boxShadow: '0 25px 50px -12px rgba(249, 115, 22, 0.25)'
                  }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {/* Modern Card Header with Wave Effect */}
                  <div className="relative h-36 bg-gradient-to-r from-orange-500 to-orange-400 overflow-hidden">
                    {/* Wave-like decorative element */}
                    <svg className="absolute bottom-0 w-full" viewBox="0 0 1440 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path 
                        d="M0 50L48 50C96 50 192 50 288 43.3C384 36.7 480 23.3 576 26.7C672 30 768 50 864 56.7C960 63.3 1056 56.7 1152 46.7C1248 36.7 1344 23.3 1392 16.7L1440 10V100H1392C1344 100 1248 100 1152 100C1056 100 960 100 864 100C768 100 672 100 576 100C480 100 384 100 288 100C192 100 96 100 48 100H0V50Z" 
                        fill="white" 
                      />
                    </svg>
                    
                    <div className="absolute top-6 right-6 bg-white/20 rounded-full p-3">
                      <NewspaperIcon className="w-8 h-8 text-white" />
                    </div>
                    
                    <div className="absolute top-6 left-6">
                      <span className="text-white font-medium px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm border border-white/30">
                        {pub.year}
                      </span>
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-orange-500 transition-colors">
                      {pub.title}
                      <div className="w-0 group-hover:w-full h-1 bg-orange-300 rounded-full mt-2 transition-all duration-300"></div>
                    </h3>
                    <p className="text-gray-600 mb-6 flex items-center">
                      <span className="w-2 h-2 bg-orange-500 rounded-full mr-2"></span>
                      {pub.publisher}
                    </p>
                    
                    {/* Interactive Elements */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-orange-500 rounded-full" />
                        <span className="text-sm text-gray-500">Web Development</span>
                      </div>
                      
                      <motion.div 
                        className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center text-orange-500 cursor-pointer"
                        whileHover={{ scale: 1.1, backgroundColor: "#fed7aa" }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                      </motion.div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;