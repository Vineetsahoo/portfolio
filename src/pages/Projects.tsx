import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Github,
  Loader2,
  ArrowUpRight
} from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  category: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
}

const Projects = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [activeFilter, setActiveFilter] = useState('all');
  const [showProjects, setShowProjects] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
      // Small delay before showing projects for smoother animation
      setTimeout(() => setShowProjects(true), 200);
    }, 1000);
    
    return () => clearTimeout(timer);
  }, []);

  const projects: Project[] = [
    {
      id: 1,
      title: "Blue Tech Revolution",
      description: "A comprehensive tech innovation platform showcasing cutting-edge solutions and digital transformations.",
      image: "https://images.unsplash.com/photo-1600779469403-9bf0f2dc3522?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", 
      category: "web",
      technologies: ["React", "Node.js", "Tailwind CSS"],
      liveUrl: "https://blue-tech-revolution-three.vercel.app/",
      githubUrl: "https://github.com/Vineetsahoo/Blue-Tech-Revolution",
      featured: true
    },
    {
      id: 2,
      title: "CollabTask",
      description: "A collaborative task management platform for teams with real-time updates and project tracking features.",
      image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=800&auto=format&fit=crop",
      category: "app",
      technologies: ["React", "Firebase", "Tailwind CSS"],
      liveUrl: "https://collab-task-two.vercel.app/",
      githubUrl: "https://github.com/Vineetsahoo/CollabTask",
      featured: true
    },
    {
      id: 3,
      title: "DataViz Dashboard",
      description: "Interactive data visualization platform with customizable charts and real-time analytics for business intelligence.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop",
      category: "web",
      technologies: ["D3.js", "React", "GraphQL"],
      liveUrl: "https://github.com/Vineetsahoo/To_do_List_Application",
      githubUrl: "https://github.com",
      featured: false
    },
    {
      id: 4,
      title: "EcoTrack Mobile",
      description: "Environmental monitoring app that helps users track their carbon footprint with personalized recommendations.",
      image: "https://images.unsplash.com/photo-1623282033815-40b05d96c903?q=80&w=800&auto=format&fit=crop",
      category: "app",
      technologies: ["React Native", "Node.js", "MongoDB"],
      liveUrl: "https://example.com/ecotrack",
      githubUrl: "https://github.com",
      featured: false
    }
  ];

  const filterProjects = () => {
    if (activeFilter === 'all') return projects;
    if (activeFilter === 'featured') return projects.filter(project => project.featured);
    return projects.filter(project => project.category === activeFilter);
  };

  const filteredProjects = filterProjects();
  const categories = ['all', 'featured', ...new Set(projects.map(project => project.category))];

  // Enhanced animations
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
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100
      }
    }
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
    <div className="min-h-screen bg-gradient-to-br from-white via-gray-50 to-[#fff1e6]">
      {/* Enhanced Hero Section */}
      <div className="relative overflow-hidden pt-20 pb-12">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-[#ff6700]/10 to-[#ffb38a]/10"></div>
          <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
          {/* Enhanced background with parallax effect */}
          <motion.div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-15"
            style={{
              backgroundImage: "url('https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=1470&h=800&fit=crop')",
            }}
            animate={{ 
              scale: [1, 1.05, 1],
              opacity: [0.1, 0.15, 0.1] 
            }}
            transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          ></motion.div>
        </div>
        <motion.div 
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-center relative z-20">
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-3"
            >
            </motion.div>
            
            <motion.h1 
              className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 relative tracking-tight"
            >
              {["My", "Creative", "Portfolio"].map((word, i) => (
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
                        word === "Portfolio" ? "text-[#ff6700]" : ""
                      }`}
                    >
                      {letter}
                    </motion.span>
                  ))}
                </motion.span>
              ))}
            </motion.h1>

            {/* Enhanced Decorative Line */}
            <div className="relative w-32 mx-auto mb-8">
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 0.8, duration: 0.8 }}
                className="h-2 bg-gradient-to-r from-[#ff6700] to-[#ffb38a] rounded-full"
              />
              <motion.div
                animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute -inset-4 bg-[#ff6700]/20 blur-xl rounded-full"
              />
            </div>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.8 }}
              className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed"
            >
              <span className="text-[#ff6700] font-medium">Exploring</span> creativity through{' '}
              <span className="text-[#ff6700] font-medium">code</span> and design
            </motion.p>
          </div>
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 mb-12">
        {/* Category Filter */}
        <motion.div 
          className="flex flex-wrap justify-center mb-8 gap-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.2 }}
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeFilter === category
                  ? 'bg-[#ff6700] text-white shadow-md shadow-[#ff6700]/20'
                  : 'bg-white text-gray-600 hover:bg-gray-100'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </motion.button>
          ))}
        </motion.div>

        {/* Enhanced Projects Grid */}
        <AnimatePresence mode="wait">
          {isLoading ? (
            <motion.div
              key="loader"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex justify-center items-center py-20"
            >
              <div className="relative">
                <Loader2 className="w-10 h-10 animate-spin text-[#ff6700]" />
                <div className="absolute inset-0 blur-xl bg-[#ff6700]/20 rounded-full animate-pulse"></div>
              </div>
            </motion.div>
          ) : (
            <motion.div 
              key="projects"
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10"
              variants={containerVariants}
              initial="hidden"
              animate={showProjects ? "visible" : "hidden"}
            >
              {filteredProjects.length === 0 ? (
                <motion.div
                  className="col-span-full text-center py-20"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                >
                  <p className="text-gray-500 text-lg">No projects found matching your criteria</p>
                </motion.div>
              ) : (
                filteredProjects.map((project) => (
                  <motion.div
                    key={project.id}
                    layout
                    variants={itemVariants}
                    className="group relative bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500"
                    whileHover={{ y: -5 }}
                  >
                    {/* Enhanced Project Card Design */}
                    <div className="relative overflow-hidden aspect-video">
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-60 z-10"
                        initial={{ opacity: 0.3 }}
                        whileHover={{ opacity: 0.7 }}
                        transition={{ duration: 0.3 }}
                      />
                      <motion.img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover"
                        initial={{ scale: 1 }}
                        whileHover={{ scale: 1.08 }}
                        transition={{ duration: 0.6 }}
                      />
                      
                      {/* Project links overlay */}
                      <div className="absolute inset-0 z-20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="flex gap-3">
                          {project.liveUrl && (
                            <motion.a
                              href={project.liveUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="p-3 bg-white rounded-lg hover:bg-[#ff6700] text-gray-900 hover:text-white transition-colors flex gap-2 items-center shadow-lg"
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                            >
                              <span className="font-medium">Live Demo</span>
                              <ArrowUpRight className="w-4 h-4" />
                            </motion.a>
                          )}
                          {project.githubUrl && (
                            <motion.a
                              href={project.githubUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="p-3 bg-white/80 backdrop-blur-sm rounded-lg hover:bg-[#ff6700] text-gray-900 hover:text-white transition-colors flex gap-2 items-center shadow-lg"
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                            >
                              <span className="font-medium">Code</span>
                              <Github className="w-4 h-4" />
                            </motion.a>
                          )}
                        </div>
                      </div>
                      
                      {/* Category badge */}
                      <div className="absolute top-4 right-4 z-10 bg-white/80 backdrop-blur-sm text-gray-900 px-3 py-1 rounded-full text-xs font-medium capitalize shadow-md">
                        {project.category}
                      </div>
                      
                      {project.featured && (
                        <div className="absolute top-4 left-4 z-10 bg-[#ff6700] text-white px-3 py-1 rounded-full text-sm font-medium shadow-lg shadow-[#ff6700]/30">
                          Featured
                        </div>
                      )}
                    </div>
                    
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-[#ff6700] transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-gray-600 mb-5 line-clamp-2 text-sm md:text-base">{project.description}</p>
                      
                      <div className="flex flex-wrap gap-2 mt-auto">
                        {project.technologies.map((tech, index) => (
                          <span
                            key={index}
                            className="px-3 py-1 bg-gray-100/70 text-gray-700 rounded-full text-xs font-medium hover:bg-[#ff6700]/10 hover:text-[#ff6700] transition-colors cursor-default"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    {/* Bottom color bar - subtle design element */}
                    <motion.div 
                      className="h-1 w-0 bg-gradient-to-r from-[#ff6700] to-[#ffb38a] group-hover:w-full transition-all duration-300"
                      initial={{ width: "0%" }}
                      whileHover={{ width: "100%" }}
                    />
                  </motion.div>
                ))
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Projects;