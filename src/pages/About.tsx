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

  // Remove stats array

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
            {/* Left Side - Enhanced Image with Creative Styling */}
            <motion.div
              className="relative w-72 h-72 mx-auto lg:w-[400px] lg:h-[400px]"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              whileHover={{ scale: 1.03 }}
            >
              {/* Animated Background Elements */}
              <div className="absolute inset-3 bg-gradient-to-r from-orange-500 to-orange-300 rounded-full blur-2xl opacity-20 animate-pulse"></div>
              
              {/* Rotating Border */}
              <motion.div
                className="absolute inset-0 rounded-full"
                style={{
                  background: 'linear-gradient(90deg, #f97316 0%, #fdba74 50%, #f97316 100%)',
                  padding: '2px' // Reduced from 3px
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
                <div className="absolute inset-0 bg-white rounded-full" />
              </motion.div>

              {/* Decorative Circles */}
              <motion.div
                className="absolute -inset-3 border-2 border-orange-200 rounded-full" // Reduced from -inset-4
                animate={{
                  scale: [1, 1.1, 1],
                  rotate: [0, -90, 0],
                }}
                transition={{
                  duration: 12,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              <motion.div
                className="absolute -inset-6 border-2 border-dashed border-orange-100 rounded-full" // Reduced from -inset-8
                animate={{
                  scale: [1.1, 1, 1.1],
                  rotate: [0, 90, 0],
                }}
                transition={{
                  duration: 12,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />

              {/* Main Image */}
              <motion.div
                className="relative h-full w-full rounded-full p-2 bg-white z-10" // Reduced padding from p-3
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <img
                  src="/portrait.jpg"
                  alt="Profile"
                  className="w-full h-full rounded-full object-cover shadow-2xl
                    ring-2 ring-orange-500 ring-opacity-50
                    transition-all duration-300 hover:ring-opacity-75"
                  style={{
                    boxShadow: '0 0 20px rgba(249, 115, 22, 0.15)' // Reduced shadow
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

                  {/* Enhanced Bottom Quote */}
                  <motion.div
                    className="relative py-8"
                    variants={{
                      hidden: { opacity: 0, y: 20 },
                      show: { opacity: 1, y: 0 }
                    }}
                  >
                    {/* Decorative Elements */}
                    <div className="absolute left-0 top-0 w-16 h-16 bg-gradient-to-r from-orange-200 to-transparent rounded-full blur-xl opacity-60" />
                    <div className="absolute right-0 bottom-0 w-16 h-16 bg-gradient-to-l from-orange-200 to-transparent rounded-full blur-xl opacity-60" />
                    
                    {/* Quote Container */}
                    <div className="relative bg-white/30 backdrop-blur-sm rounded-2xl p-8 border border-orange-100 shadow-xl">
                      {/* Quote marks */}
                      <span className="absolute -top-4 -left-2 text-6xl text-orange-200 font-serif">"</span>
                      <span className="absolute -bottom-12 -right-2 text-6xl text-orange-200 font-serif">"</span>
                      
                      {/* Quote Text */}
                      <p className="text-xl text-gray-700 text-center font-medium leading-relaxed">
                        Thriving on{' '}
                        <span className="text-orange-500 font-bold">innovation</span>,{' '}
                        <span className="text-orange-500 font-bold">collaboration</span>,{' '}
                        and pushing{' '}
                        <span className="text-orange-500 font-bold">creative boundaries</span>
                      </p>
                      
                      {/* Decorative Line */}
                      <div className="mt-4 flex justify-center">
                        <motion.div
                          className="h-1 w-24 bg-gradient-to-r from-orange-500 to-orange-300 rounded-full"
                          animate={{ width: ["0%", "100%"], opacity: [0, 1] }}
                          transition={{ duration: 1, delay: 0.5 }}
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

      {/* Enhanced Skills Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          className="bg-white rounded-3xl shadow-xl p-8 lg:p-12 overflow-hidden relative"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Decorative Background */}
          <div className="absolute top-0 right-0 -mt-20 -mr-20 w-96 h-96 bg-orange-100 rounded-full opacity-50 blur-3xl" />
          <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-96 h-96 bg-orange-50 rounded-full opacity-50 blur-3xl" />
          
          {/* Content */}
          <div className="relative z-10">
            <motion.div 
              className="max-w-2xl mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4 flex items-center">
                <CommandLineIcon className="w-8 h-8 mr-3 text-orange-500" />
                Core Skills
              </h2>
              <p className="text-gray-600 text-lg">
                Expertise in modern web technologies and development practices
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
              {skillsData.map((skill, index) => (
                <motion.div
                  key={index}
                  className="bg-gray-50 p-6 rounded-xl hover:shadow-lg transition-all duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center">
                      <div className="p-2 bg-orange-100 rounded-lg mr-4 text-orange-500">
                        {skill.icon}
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900">{skill.name}</h3>
                    </div>
                    <span className="text-lg font-bold text-orange-500">{skill.level}%</span>
                  </div>
                  <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-gradient-to-r from-orange-400 to-orange-500 rounded-full"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.2 }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      {/* Enhanced Hackathon Experience Timeline */}
      <motion.div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold text-gray-900 mb-12 flex items-center">
          <TrophyIcon className="w-8 h-8 mr-3 text-orange-500" />
          Hackathon Achievements
        </h2>
        <div className="space-y-6 sm:space-y-8 px-4 sm:px-6">
          {hackathonExperience.map((hackathon, index) => (
            <motion.div
              key={index}
              className="mb-12 ml-6"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
            >
              <div className="absolute w-4 h-4 bg-orange-500 rounded-full -left-[34px]" />
              <motion.div 
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden group"
                whileHover={{ y: -5 }}
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-orange-100 rounded-full -mr-16 -mt-16 transition-transform group-hover:scale-110" />
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-2xl font-bold text-gray-900">{hackathon.title}</h3>
                    <span className="text-orange-500 font-medium">{hackathon.period}</span>
                  </div>
                  <p className="text-lg text-orange-600 font-medium mb-4">{hackathon.organizer}</p>
                  <p className="text-gray-700 mb-4">{hackathon.description}</p>
                  <div className="mb-4">
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">Key Achievements:</h4>
                    <ul className="list-disc list-inside text-gray-600 space-y-1">
                      {hackathon.achievements.map((achievement, i) => (
                        <li key={i}>{achievement}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {hackathon.techStack.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-orange-50 text-orange-600 rounded-full text-sm font-medium"
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
          {/* Education Column */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="sticky top-8 space-y-8">
              <h2 className="text-3xl font-bold text-gray-900 flex items-center mb-12">
                <AcademicCapIcon className="w-8 h-8 mr-3 text-orange-500" />
                Educational Journey
              </h2>
              
              {/* Timeline Design */}
              <div className="relative space-y-16">
                <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-orange-500 via-orange-300 to-transparent" />
                
                {educationData.map((edu, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.2 }}
                    className="relative pl-16"
                  >
                    {/* Timeline Dot */}
                    <div className="absolute left-[29px] top-1.5 w-4 h-4 rounded-full border-2 border-orange-500 bg-white" />
                    
                    {/* Content Card */}
                    <motion.div
                      className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 relative overflow-hidden"
                      whileHover={{ y: -5, scale: 1.02 }}
                    >
                      {/* Decorative Circle */}
                      <div className="absolute -right-8 -top-8 w-32 h-32 bg-orange-50 rounded-full opacity-50" />
                      
                      {/* Period Badge */}
                      <div className="inline-block px-4 py-2 bg-orange-50 text-orange-600 rounded-full text-sm font-semibold mb-4">
                        {edu.period}
                      </div>
                      
                      <h3 className="text-2xl font-bold text-gray-900 mb-3">
                        {edu.degree}
                      </h3>
                      <p className="text-lg text-orange-600 font-medium mb-3">
                        {edu.school}
                      </p>
                      <p className="text-gray-600 leading-relaxed">
                        {edu.details}
                      </p>
                    </motion.div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Publications Column */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h2 className="text-3xl font-bold text-gray-900 flex items-center mb-12">
              <NewspaperIcon className="w-8 h-8 mr-3 text-orange-500" />
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
                  className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
                  whileHover={{ y: -5 }}
                >
                  {/* Card Header */}
                  <div className="bg-gradient-to-r from-orange-500 to-orange-400 p-6">
                    <div className="flex items-center justify-between">
                      <span className="text-white font-medium px-3 py-1 bg-white/20 rounded-full text-sm">
                        {pub.year}
                      </span>
                      <NewspaperIcon className="w-6 h-6 text-white" />
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-orange-500 transition-colors">
                      {pub.title}
                    </h3>
                    <p className="text-gray-600 mb-6">
                      {pub.publisher}
                    </p>
                    
                    {/* Interactive Elements */}
                    <div className="flex items-center">
                      <div className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-orange-500 rounded-full" />
                        <span className="text-sm text-gray-500">Web Development</span>
                      </div>
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