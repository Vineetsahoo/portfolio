import { motion, useScroll, useTransform } from 'framer-motion';
import { 
  CommandLineIcon, 
  ServerIcon, 
  BoltIcon,
  TrophyIcon,
  AcademicCapIcon,
  NewspaperIcon,
  CodeBracketIcon,
  SparklesIcon,
  RocketLaunchIcon,
  CpuChipIcon,
  BeakerIcon
} from '@heroicons/react/24/outline';

const About = () => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);

  const skillsData = [
    { 
      icon: <CommandLineIcon className="w-7 h-7" />, 
      name: "React & TypeScript", 
      level: 85, 
      color: "from-blue-500 to-cyan-500",
      bgColor: "from-blue-50 to-cyan-50",
      description: "Modern frontend development with type-safe code"
    },
    { 
      icon: <ServerIcon className="w-7 h-7" />, 
      name: "Node.js & Express", 
      level: 78, 
      color: "from-green-500 to-emerald-500",
      bgColor: "from-green-50 to-emerald-50",
      description: "Scalable backend services and RESTful APIs"
    },
    { 
      icon: <BoltIcon className="w-7 h-7" />, 
      name: "MongoDB & SQL", 
      level: 82, 
      color: "from-purple-500 to-violet-500",
      bgColor: "from-purple-50 to-violet-50",
      description: "Database design and optimization expertise"
    },
    { 
      icon: <CodeBracketIcon className="w-7 h-7" />, 
      name: "Python & AI/ML", 
      level: 88, 
      color: "from-amber-500 to-orange-500",
      bgColor: "from-amber-50 to-orange-50",
      description: "Data science and machine learning solutions"
    },
    { 
      icon: <CpuChipIcon className="w-7 h-7" />, 
      name: "System Design", 
      level: 75, 
      color: "from-indigo-500 to-blue-500",
      bgColor: "from-indigo-50 to-blue-50",
      description: "Scalable architecture and cloud solutions"
    },
    { 
      icon: <BeakerIcon className="w-7 h-7" />, 
      name: "DevOps & Cloud", 
      level: 70, 
      color: "from-rose-500 to-pink-500",
      bgColor: "from-rose-50 to-pink-50",
      description: "CI/CD pipelines and cloud infrastructure"
    }
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
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 relative overflow-hidden">
      {/* Modern Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-r from-orange-300/20 to-pink-300/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/3 right-0 w-80 h-80 bg-gradient-to-l from-blue-300/20 to-purple-300/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-0 left-1/3 w-72 h-72 bg-gradient-to-t from-green-300/20 to-emerald-300/20 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      {/* Enhanced Hero Section */}
      <div className="relative pt-20 min-h-screen flex items-center">
        <motion.div 
          className="absolute inset-0 bg-grid-pattern opacity-5"
          style={{ y }}
        />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-16 items-center px-4 sm:px-6">
            {/* Left Side - Ultra Modern Image Design */}
            <motion.div
              className="relative w-80 h-96 mx-auto lg:w-[460px] lg:h-[560px]"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              whileHover={{ scale: 1.02 }}
            >
              {/* Modern Floating Elements */}
              <motion.div
                className="absolute -top-6 -left-6 w-24 h-24 bg-gradient-to-r from-orange-400 to-pink-400 rounded-2xl shadow-2xl"
                animate={{ 
                  rotate: [0, 10, -10, 0],
                  y: [0, -10, 10, 0]
                }}
                transition={{ 
                  duration: 6, 
                  repeat: Infinity, 
                  ease: "easeInOut" 
                }}
              >
                <div className="w-full h-full bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center">
                  <SparklesIcon className="w-8 h-8 text-white" />
                </div>
              </motion.div>

              <motion.div
                className="absolute -bottom-6 -right-6 w-20 h-20 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full shadow-2xl"
                animate={{ 
                  scale: [1, 1.2, 1],
                  rotate: [0, -15, 15, 0]
                }}
                transition={{ 
                  duration: 8, 
                  repeat: Infinity, 
                  ease: "easeInOut" 
                }}
              >
                <div className="w-full h-full bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                  <RocketLaunchIcon className="w-6 h-6 text-white" />
                </div>
              </motion.div>

              {/* Premium Glass Border Effect */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-orange-400/30 via-pink-400/30 to-purple-400/30 p-1">
                <div className="w-full h-full rounded-3xl bg-white/95 backdrop-blur-xl shadow-2xl overflow-hidden border border-white/50">
                  <div className="relative w-full h-full p-4">
                    {/* Decorative corner elements */}
                    <div className="absolute top-4 left-4 w-8 h-8 border-l-4 border-t-4 border-orange-400 rounded-tl-lg"></div>
                    <div className="absolute top-4 right-4 w-8 h-8 border-r-4 border-t-4 border-pink-400 rounded-tr-lg"></div>
                    <div className="absolute bottom-4 left-4 w-8 h-8 border-l-4 border-b-4 border-purple-400 rounded-bl-lg"></div>
                    <div className="absolute bottom-4 right-4 w-8 h-8 border-r-4 border-b-4 border-blue-400 rounded-br-lg"></div>
                    
                    <img
                      src="/portrait.jpg"
                      alt="Profile"
                      className="w-full h-full rounded-2xl object-cover shadow-xl"
                    />
                    
                    {/* Overlay gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent rounded-2xl"></div>
                  </div>
                </div>
              </div>

              {/* Floating skill badges */}
              <motion.div
                className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg border border-orange-200"
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              >
                <span className="text-sm font-semibold text-orange-600">Front End Developer</span>
              </motion.div>

              <motion.div
                className="absolute -bottom-4 left-1/4 bg-white/90 backdrop-blur-sm px-3 py-2 rounded-full shadow-lg border border-blue-200"
                animate={{ y: [0, 5, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              >
                <span className="text-sm font-semibold text-blue-600">AI Enthusiast</span>
              </motion.div>
            </motion.div>

            {/* Right Side - Ultra Modern Content */}
            <motion.div
              className="text-left lg:pl-8"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="space-y-8">
                {/* Modern Header Section */}
                <div className="relative">
                  <motion.h1 
                    className="text-5xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    About{' '}
                    <span className="relative inline-block">
                      <span className="bg-gradient-to-r from-orange-500 via-pink-500 to-purple-500 inline-block text-transparent bg-clip-text">
                        Me
                      </span>
                      <motion.div
                        className="absolute -inset-2 bg-gradient-to-r from-orange-400/20 via-pink-400/20 to-purple-400/20 rounded-lg blur-lg"
                        animate={{ 
                          scale: [1, 1.1, 1],
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
                    className="relative h-3 mb-8 overflow-hidden rounded-full"
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

                {/* Premium Introduction Card */}
                <motion.div
                  className="relative overflow-hidden"
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    show: { opacity: 1, y: 0 }
                  }}
                  initial="hidden"
                  animate="show"
                  transition={{ delay: 0.4 }}
                >
                  <div className="relative bg-white/70 backdrop-blur-xl rounded-3xl p-8 border border-white/50 shadow-2xl overflow-hidden">
                    {/* Modern decorative elements */}
                    <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-orange-200/30 to-transparent rounded-full -mr-16 -mt-16"></div>
                    <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-purple-200/30 to-transparent rounded-full -ml-12 -mb-12"></div>
                    
                    {/* Content */}
                    <div className="relative z-10">
                      <div className="flex items-center mb-4">
                        <div className="w-2 h-2 bg-gradient-to-r from-orange-400 to-pink-400 rounded-full mr-3"></div>
                        <span className="text-sm font-semibold text-gray-500 uppercase tracking-wider">Introduction</span>
                      </div>
                      
                      <p className="text-xl leading-relaxed text-gray-700">
                        Hi, I'm{' '}
                        <span className="font-bold bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent">
                          Vineet Sahoo
                        </span>, 
                        pursuing{' '}
                        <span className="font-semibold text-gray-800 relative">
                          Computer Science Engineering
                          <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full"></span>
                        </span>{' '}
                        at{' '}
                        <span className="font-semibold text-gray-800 relative">
                          SRM Institute of Science & Technology
                          <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full"></span>
                        </span>. 
                        I specialize in building innovative, user-friendly, and visually stunning digital experiences.
                      </p>
                    </div>
                  </div>
                </motion.div>

                {/* Modern Inspirational Quote Section */}
                <motion.div
                  className="relative py-8"
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    show: { opacity: 1, y: 0 }
                  }}
                  initial="hidden"
                  animate="show"
                  transition={{ delay: 0.6 }}
                >
                  <div className="relative bg-gradient-to-br from-slate-900 via-gray-900 to-black rounded-3xl p-8 overflow-hidden shadow-2xl">
                    {/* Modern background effects */}
                    <div className="absolute top-0 left-0 w-40 h-40 bg-gradient-to-br from-orange-500/20 to-pink-500/20 rounded-full blur-2xl"></div>
                    <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-blue-500/20 to-purple-500/20 rounded-full blur-2xl"></div>
                    
                    {/* Quote content */}
                    <div className="relative z-10 text-center">
                      <div className="text-6xl text-orange-400/30 font-serif mb-4">"</div>
                      <p className="text-xl md:text-2xl text-white font-medium leading-relaxed mb-6">
                        Thriving on{' '}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-pink-400 font-bold">
                          innovation
                        </span>,{' '}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 font-bold">
                          collaboration
                        </span>,{' '}
                        and pushing{' '}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-400 font-bold">
                          creative boundaries
                        </span>
                      </p>
                      
                      {/* Animated quote decoration */}
                      <motion.div
                        className="flex justify-center"
                        animate={{ 
                          scale: [1, 1.1, 1],
                          opacity: [0.5, 1, 0.5]
                        }}
                        transition={{ 
                          duration: 3, 
                          repeat: Infinity, 
                          ease: "easeInOut" 
                        }}
                      >
                        <div className="h-1 w-24 bg-gradient-to-r from-orange-400 via-pink-400 to-purple-400 rounded-full"></div>
                      </motion.div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Ultra-Modern Skills Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          className="relative overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Modern background with mesh gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-white via-slate-50 to-blue-50 rounded-[3rem] shadow-2xl border border-white/50"></div>
          <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-orange-300/10 to-pink-300/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-to-tl from-blue-300/10 to-purple-300/10 rounded-full blur-3xl"></div>
          
          <div className="relative z-10 p-8 lg:p-16">
            {/* Section Header */}
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center justify-center p-4 bg-gradient-to-r from-orange-400 to-pink-400 rounded-2xl shadow-lg mb-6">
                <CommandLineIcon className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                Technical{' '}
                <span className="bg-gradient-to-r from-orange-500 via-pink-500 to-purple-500 bg-clip-text text-transparent">
                  Expertise
                </span>
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                A comprehensive toolkit of modern technologies and frameworks for building exceptional digital experiences
              </p>
            </motion.div>

            {/* Skills Grid - 3x2 Layout */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {skillsData.map((skill, index) => (
                <motion.div
                  key={index}
                  className="group relative"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                >
                  <motion.div
                    className={`relative bg-gradient-to-br ${skill.bgColor} rounded-3xl p-8 border border-white/50 shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden group-hover:scale-105`}
                    whileHover={{ y: -10 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    {/* Background decoration */}
                    <div className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl ${skill.color} opacity-10 rounded-full -mr-12 -mt-12 group-hover:scale-150 transition-transform duration-500`}></div>
                    <div className={`absolute bottom-0 left-0 w-20 h-20 bg-gradient-to-tr ${skill.color} opacity-5 rounded-full -ml-10 -mb-10 group-hover:scale-150 transition-transform duration-500`}></div>
                    
                    {/* Content */}
                    <div className="relative z-10">
                      {/* Icon and Level */}
                      <div className="flex items-center justify-between mb-6">
                        <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${skill.color} text-white shadow-lg group-hover:shadow-xl transition-shadow duration-300`}>
                          {skill.icon}
                        </div>
                        <div className="text-right">
                          <div className={`text-3xl font-bold bg-gradient-to-r ${skill.color} bg-clip-text text-transparent`}>
                            {skill.level}%
                          </div>
                          <div className="text-xs text-gray-500 uppercase tracking-wider">Proficiency</div>
                        </div>
                      </div>

                      {/* Skill Name */}
                      <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-gray-700 transition-colors">
                        {skill.name}
                      </h3>

                      {/* Description */}
                      <p className="text-gray-600 text-sm mb-6 leading-relaxed group-hover:text-gray-700 transition-colors">
                        {skill.description}
                      </p>

                      {/* Modern Progress Bar */}
                      <div className="space-y-2">
                        <div className="flex justify-between text-xs text-gray-500">
                          <span>Skill Level</span>
                          <span>{skill.level}%</span>
                        </div>
                        <div className="h-2 bg-white/50 rounded-full overflow-hidden backdrop-blur-sm">
                          <motion.div
                            className={`h-full bg-gradient-to-r ${skill.color} rounded-full relative`}
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 1.5, delay: 0.2, ease: "easeOut" }}
                          >
                            {/* Animated highlight */}
                            <motion.div
                              className="absolute inset-0 bg-white/20 rounded-full"
                              animate={{ x: ["-100%", "100%"] }}
                              transition={{ 
                                duration: 2, 
                                repeat: Infinity, 
                                ease: "easeInOut",
                                delay: index * 0.5
                              }}
                            />
                          </motion.div>
                        </div>
                      </div>
                    </div>

                    {/* Hover effect overlay */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${skill.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-3xl`}></div>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      {/* Ultra-Modern Hackathon Experience */}
      <motion.div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center justify-center p-4 bg-gradient-to-r from-amber-400 to-orange-400 rounded-2xl shadow-lg mb-6">
            <TrophyIcon className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Competition{' '}
            <span className="bg-gradient-to-r from-amber-500 via-orange-500 to-red-500 bg-clip-text text-transparent">
              Achievements
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Proven track record in competitive programming and innovation challenges
          </p>
        </motion.div>

        {/* Hackathon Timeline */}
        <div className="relative">
          {/* Modern timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-orange-400 via-pink-400 to-purple-400 rounded-full hidden lg:block"></div>
          
          <div className="space-y-16">
            {hackathonExperience.map((hackathon, index) => (
              <motion.div
                key={index}
                className={`relative flex items-center ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
              >
                {/* Timeline node */}
                <div className="absolute left-1/2 transform -translate-x-1/2 z-20 hidden lg:block">
                  <motion.div
                    className="w-16 h-16 bg-gradient-to-r from-orange-400 to-pink-400 rounded-full flex items-center justify-center shadow-xl"
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <TrophyIcon className="w-8 h-8 text-white" />
                  </motion.div>
                </div>

                {/* Content card */}
                <motion.div 
                  className={`w-full lg:w-5/12 ${index % 2 === 0 ? 'lg:mr-8' : 'lg:ml-8'}`}
                  whileHover={{ y: -8 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="relative bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100 group hover:shadow-3xl transition-all duration-500">
                    {/* Modern gradient header */}
                    <div className="relative h-32 bg-gradient-to-r from-gray-900 via-gray-800 to-black overflow-hidden">
                      {/* Animated background pattern */}
                      <div className="absolute inset-0 opacity-20">
                        <div className="absolute top-0 left-0 w-40 h-40 bg-gradient-to-br from-orange-400 to-pink-400 rounded-full blur-2xl -mt-20 -ml-20"></div>
                        <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-blue-400 to-purple-400 rounded-full blur-2xl -mb-16 -mr-16"></div>
                      </div>
                      
                      {/* Header content */}
                      <div className="relative z-10 p-6 flex items-center justify-between">
                        <div>
                          <h3 className="text-2xl font-bold text-white mb-2">{hackathon.title}</h3>
                          <p className="text-gray-300 text-sm">{hackathon.organizer}</p>
                        </div>
                        <div className="text-right">
                          <div className="bg-white/20 backdrop-blur-sm rounded-full px-4 py-2">
                            <span className="text-white font-semibold">{hackathon.period}</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Card body */}
                    <div className="p-8">
                      <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                        {hackathon.description}
                      </p>

                      {/* Achievements */}
                      <div className="mb-8">
                        <h4 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
                          <div className="w-2 h-2 bg-gradient-to-r from-orange-400 to-pink-400 rounded-full mr-3"></div>
                          Key Achievements
                        </h4>
                        <ul className="space-y-3">
                          {hackathon.achievements.map((achievement, i) => (
                            <motion.li 
                              key={i} 
                              className="flex items-start group/item"
                              initial={{ opacity: 0, x: -20 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              viewport={{ once: true }}
                              transition={{ delay: i * 0.1 }}
                            >
                              <div className="flex-shrink-0 w-6 h-6 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full flex items-center justify-center mr-3 mt-0.5">
                                <div className="w-2 h-2 bg-white rounded-full"></div>
                              </div>
                              <span className="text-gray-600 group-hover/item:text-gray-800 transition-colors">
                                {achievement}
                              </span>
                            </motion.li>
                          ))}
                        </ul>
                      </div>

                      {/* Tech stack */}
                      <div>
                        <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3">Technologies Used</h4>
                        <div className="flex flex-wrap gap-2">
                          {hackathon.techStack.map((tech, i) => (
                            <motion.span
                              key={i}
                              className="px-4 py-2 bg-gradient-to-r from-gray-100 to-gray-200 text-gray-700 rounded-full text-sm font-medium hover:from-orange-100 hover:to-pink-100 hover:text-orange-700 transition-all duration-300 cursor-default"
                              whileHover={{ scale: 1.05 }}
                              transition={{ type: "spring", stiffness: 300 }}
                            >
                              {tech}
                            </motion.span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Hover effect overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-orange-500/0 to-pink-500/0 group-hover:from-orange-500/5 group-hover:to-pink-500/5 transition-all duration-500 rounded-3xl pointer-events-none"></div>
                  </div>
                </motion.div>

                {/* Spacer for opposite side */}
                <div className="w-full lg:w-5/12 hidden lg:block"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Ultra-Modern Education & Publications Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Education Column */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Section Header */}
            <motion.div 
              className="mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center justify-center p-4 bg-gradient-to-r from-blue-400 to-purple-400 rounded-2xl shadow-lg mb-6">
                <AcademicCapIcon className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Educational{' '}
                <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
                  Journey
                </span>
              </h2>
              <p className="text-lg text-gray-600">
                Academic foundation and continuous learning path
              </p>
            </motion.div>
            
            {/* Education Timeline */}
            <div className="relative space-y-12">
              {/* Timeline line */}
              <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-400 via-purple-400 to-pink-400 rounded-full"></div>
              
              {educationData.map((edu, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.3 }}
                  className="relative pl-20"
                >
                  {/* Timeline node */}
                  <div className="absolute left-6 top-8 z-10">
                    <motion.div 
                      className="w-6 h-6 rounded-full border-4 border-white bg-gradient-to-r from-blue-400 to-purple-400 shadow-lg"
                      whileHover={{ scale: 1.2 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    />
                    <div className="absolute w-16 h-0.5 bg-gradient-to-r from-blue-200 to-purple-200 top-3 left-6"></div>
                  </div>
                  
                  {/* Content Card */}
                  <motion.div
                    className="relative bg-white rounded-3xl shadow-xl p-8 overflow-hidden border border-gray-100 group"
                    whileHover={{ y: -5, scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    {/* Background decoration */}
                    <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-blue-100/50 to-purple-100/50 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-500"></div>
                    
                    {/* Period badge */}
                    <div className="inline-block px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-700 rounded-full text-sm font-bold mb-4 border border-blue-200">
                      {edu.period}
                    </div>
                    
                    <h3 className="text-2xl font-bold text-gray-900 mb-3 relative group-hover:text-blue-700 transition-colors">
                      {edu.degree}
                      <div className="absolute -bottom-2 left-0 w-0 group-hover:w-16 h-1 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full transition-all duration-500"></div>
                    </h3>
                    
                    <p className="text-lg text-blue-600 font-semibold mb-4 flex items-center">
                      <AcademicCapIcon className="w-5 h-5 mr-2 text-blue-500" />
                      {edu.school}
                    </p>
                    
                    <p className="text-gray-600 leading-relaxed bg-gradient-to-r from-blue-50/80 to-purple-50/80 p-4 rounded-xl italic border border-blue-100">
                      {edu.details}
                    </p>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Publications Column */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Section Header */}
            <motion.div 
              className="mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center justify-center p-4 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-2xl shadow-lg mb-6">
                <NewspaperIcon className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Featured{' '}
                <span className="bg-gradient-to-r from-emerald-500 to-teal-500 bg-clip-text text-transparent">
                  Projects
                </span>
              </h2>
              <p className="text-lg text-gray-600">
                Showcasing innovative solutions and contributions
              </p>
            </motion.div>

            {publications.map((pub, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="group"
              >
                <motion.div
                  className="relative bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100"
                  whileHover={{ 
                    y: -10,
                    scale: 1.02,
                    boxShadow: '0 25px 50px -12px rgba(16, 185, 129, 0.25)'
                  }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {/* Modern header with geometric design */}
                  <div className="relative h-40 bg-gradient-to-br from-gray-900 via-gray-800 to-black overflow-hidden">
                    {/* Geometric background pattern */}
                    <div className="absolute inset-0 opacity-20">
                      <div className="absolute top-0 left-0 w-40 h-40 bg-gradient-to-br from-emerald-400 to-teal-400 rounded-full blur-2xl -mt-20 -ml-20"></div>
                      <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-cyan-400 to-blue-400 rounded-full blur-2xl -mb-16 -mr-16"></div>
                      
                      {/* Geometric shapes */}
                      <div className="absolute top-4 right-4 w-8 h-8 border-2 border-white/20 rotate-45"></div>
                      <div className="absolute bottom-4 left-4 w-6 h-6 bg-white/10 rounded-full"></div>
                      <div className="absolute top-1/2 left-8 w-4 h-4 border border-white/20 transform -translate-y-1/2"></div>
                    </div>
                    
                    {/* Header content */}
                    <div className="relative z-10 p-8 flex items-center justify-between">
                      <div className="flex items-center">
                        <div className="p-3 bg-white/20 backdrop-blur-sm rounded-2xl mr-4">
                          <NewspaperIcon className="w-8 h-8 text-white" />
                        </div>
                        <div>
                          <div className="text-white/80 text-sm font-medium mb-1">Project Showcase</div>
                          <div className="text-white font-bold">{pub.year}</div>
                        </div>
                      </div>
                      
                      <motion.div 
                        className="p-2 bg-white/10 backdrop-blur-sm rounded-xl"
                        whileHover={{ scale: 1.1, backgroundColor: "rgba(255, 255, 255, 0.2)" }}
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </motion.div>
                    </div>
                  </div>

                  {/* Card content */}
                  <div className="p-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-emerald-600 transition-colors duration-300">
                      {pub.title}
                      <div className="w-0 group-hover:w-full h-1 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-full mt-2 transition-all duration-500"></div>
                    </h3>
                    
                    <p className="text-gray-600 mb-6 flex items-center">
                      <span className="w-2 h-2 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-full mr-3"></span>
                      {pub.publisher}
                    </p>
                    
                    {/* Project highlights */}
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="text-center p-3 bg-gradient-to-br from-emerald-50 to-teal-50 rounded-xl border border-emerald-100">
                        <div className="text-2xl font-bold text-emerald-600">Web</div>
                        <div className="text-xs text-gray-600">Platform</div>
                      </div>
                      <div className="text-center p-3 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl border border-blue-100">
                        <div className="text-2xl font-bold text-blue-600">App</div>
                        <div className="text-xs text-gray-600">Type</div>
                      </div>
                    </div>
                    
                    {/* Action button */}
                    <motion.button 
                      className="w-full py-3 bg-gradient-to-r from-emerald-500 to-teal-500 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      View Project Details
                    </motion.button>
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