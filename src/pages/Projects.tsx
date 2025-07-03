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
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 relative overflow-hidden">
      {/* Ultra-Modern Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-r from-orange-300/10 to-pink-300/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/3 right-0 w-80 h-80 bg-gradient-to-l from-blue-300/10 to-purple-300/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-0 left-1/3 w-72 h-72 bg-gradient-to-t from-green-300/10 to-emerald-300/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>
      
      {/* Grid Pattern Background */}
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.02]"></div>
      {/* Ultra-Modern Hero Section */}
      <div className="relative overflow-hidden pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            className="text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            {/* Ultra-modern title */}
            <motion.h1 
              className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
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
                        word === "Portfolio" ? "bg-gradient-to-r from-orange-500 via-pink-500 to-purple-500 bg-clip-text text-transparent" : ""
                      }`}
                    >
                      {letter}
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

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.8 }}
              className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-0"
            >
              <span className="bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent font-medium">Exploring</span> creativity through{' '}
              <span className="bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent font-medium">innovative code</span> and design
            </motion.p>
          </motion.div>
        </div>
      </div>

      {/* Modern Projects Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
        {/* Ultra-Modern Category Filter */}
        <motion.div 
          className="flex flex-wrap justify-center mb-16 gap-3"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`relative px-6 py-3 rounded-2xl text-sm font-medium transition-all duration-300 overflow-hidden ${
                activeFilter === category
                  ? 'text-white shadow-lg shadow-orange-500/25'
                  : 'bg-white/80 backdrop-blur-sm text-gray-600 hover:bg-white border border-gray-200 hover:shadow-lg'
              }`}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              {/* Active gradient background */}
              {activeFilter === category && (
                <motion.div
                  layoutId="activeCategory"
                  className="absolute inset-0 bg-gradient-to-r from-orange-500 to-pink-500"
                  transition={{ type: "spring", stiffness: 500, damping: 30 }}
                />
              )}
              <span className="relative z-10">
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </span>
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
                    className="group relative bg-white/80 backdrop-blur-lg rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100"
                    whileHover={{ y: -8 }}
                  >
                    {/* Ultra-modern Project Card Design */}
                    <div className="relative overflow-hidden aspect-video">
                      {/* Gradient overlay */}
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10"
                        initial={{ opacity: 0.4 }}
                        whileHover={{ opacity: 0.8 }}
                        transition={{ duration: 0.3 }}
                      />
                      
                      {/* Image with enhanced hover effect */}
                      <motion.img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover"
                        initial={{ scale: 1 }}
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.8 }}
                      />
                      
                      {/* Modern project links overlay */}
                      <div className="absolute inset-0 z-20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
                        <div className="flex gap-4">
                          {project.liveUrl && (
                            <motion.a
                              href={project.liveUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="px-6 py-3 bg-white/90 backdrop-blur-md rounded-2xl hover:bg-gradient-to-r hover:from-orange-500 hover:to-pink-500 text-gray-900 hover:text-white transition-all duration-300 flex gap-2 items-center shadow-lg font-medium"
                              whileHover={{ scale: 1.05, y: -2 }}
                              whileTap={{ scale: 0.95 }}
                            >
                              <span>Live Demo</span>
                              <ArrowUpRight className="w-4 h-4" />
                            </motion.a>
                          )}
                          {project.githubUrl && (
                            <motion.a
                              href={project.githubUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="px-6 py-3 bg-white/70 backdrop-blur-md rounded-2xl hover:bg-gray-900 text-gray-900 hover:text-white transition-all duration-300 flex gap-2 items-center shadow-lg font-medium"
                              whileHover={{ scale: 1.05, y: -2 }}
                              whileTap={{ scale: 0.95 }}
                            >
                              <span>Code</span>
                              <Github className="w-4 h-4" />
                            </motion.a>
                          )}
                        </div>
                      </div>
                      
                      {/* Enhanced category badge */}
                      <div className="absolute top-4 right-4 z-10 bg-white/90 backdrop-blur-md text-gray-800 px-4 py-2 rounded-full text-xs font-semibold capitalize shadow-lg border border-gray-200">
                        {project.category}
                      </div>
                      
                      {/* Featured badge with glow effect */}
                      {project.featured && (
                        <motion.div 
                          className="absolute top-4 left-4 z-10 bg-gradient-to-r from-orange-500 to-pink-500 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg"
                          animate={{ 
                            boxShadow: [
                              '0 0 0 rgba(255, 103, 0, 0.5)', 
                              '0 0 20px rgba(255, 103, 0, 0.8)', 
                              '0 0 0 rgba(255, 103, 0, 0.5)'
                            ]
                          }}
                          transition={{ duration: 2, repeat: Infinity }}
                        >
                          ✨ New
                        </motion.div>
                      )}
                    </div>
                    
                    {/* Enhanced content section */}
                    <div className="p-8">
                      <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-orange-500 group-hover:to-pink-500 group-hover:bg-clip-text transition-all duration-300">
                        {project.title}
                      </h3>
                      <p className="text-gray-600 mb-6 line-clamp-2 text-base leading-relaxed">{project.description}</p>
                      
                      {/* Enhanced tech stack */}
                      <div className="flex flex-wrap gap-2 mt-auto">
                        {project.technologies.map((tech, index) => (
                          <motion.span
                            key={index}
                            className="px-3 py-1.5 bg-gray-100/80 backdrop-blur-sm text-gray-700 rounded-full text-xs font-medium hover:bg-gradient-to-r hover:from-orange-100 hover:to-pink-100 hover:text-orange-600 transition-all duration-300 cursor-default border border-gray-200"
                            whileHover={{ scale: 1.05 }}
                          >
                            {tech}
                          </motion.span>
                        ))}
                      </div>
                    </div>
                    
                    {/* Modern bottom gradient bar */}
                    <motion.div 
                      className="h-1 w-0 bg-gradient-to-r from-orange-500 to-pink-500 group-hover:w-full transition-all duration-500"
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