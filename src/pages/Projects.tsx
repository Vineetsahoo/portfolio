import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Github,
  ExternalLink, Loader2
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

  // Simulate loading delay
  setTimeout(() => setIsLoading(false), 1000);

  const projects: Project[] = [
    {
      id: 1,
      title: "Blue Tech Revolution",
      description: "A comprehensive tech innovation platform showcasing cutting-edge solutions and digital transformations.",
      image: "https://images.unsplash.com/photo-1600779469403-9bf0f2dc3522?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Different underwater scene with beautiful blue coral reef
      category: "web",
      technologies: ["React", "Node.js", "Tailwind CSS", ],
      liveUrl: "https://blue-tech-revolution-three.vercel.app/",
      githubUrl: "https://github.com/Vineetsahoo/Blue-Tech-Revolution",
      featured: true
    },
    {
      id: 2,
      title: "CollabTask",
      description: "A collaborative task management platform for teams with real-time updates and project tracking features.",
      image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=500&h=300&fit=crop", // Collaboration/teamwork themed image
      category: "web",
      technologies: ["React", "Firebase", "Tailwind CSS", ],
      liveUrl: "https://blue-tech-revolution-three.vercel.app/",
      githubUrl: "https://github.com",
      featured: true
    }
  ];

  const filterProjects = () => {
    return projects;
  };

  const filteredProjects = filterProjects();

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
      <div className="relative overflow-hidden pt-16">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-[#ff6700]/10 to-[#ffb38a]/10"></div>
          <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
          {/* Add background image with blur */}
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-15"
            style={{
              backgroundImage: "url('https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=1470&h=800&fit=crop')",
            }}
          ></div>
        </div>
        <motion.div 
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-center relative z-20">
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 relative"
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

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
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
              <Loader2 className="w-8 h-8 animate-spin text-[#ff6700]" />
            </motion.div>
          ) : (
            <motion.div 
              key="projects"
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 px-4 sm:px-6"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
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
                    className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
                  >
                    {/* Enhanced Project Card Content */}
                    <div className="relative overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="absolute bottom-4 left-4 right-4 flex justify-end gap-2">
                          {project.liveUrl && (
                            <motion.a
                              href={project.liveUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="p-2 bg-white rounded-full hover:bg-[#ff6700] text-gray-900 hover:text-white transition-colors"
                              whileHover={{ scale: 1.1 }}
                              whileTap={{ scale: 0.9 }}
                            >
                              <ExternalLink className="w-5 h-5" />
                            </motion.a>
                          )}
                          {project.githubUrl && (
                            <motion.a
                              href={project.githubUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="p-2 bg-white rounded-full hover:bg-[#ff6700] text-gray-900 hover:text-white transition-colors"
                              whileHover={{ scale: 1.1 }}
                              whileTap={{ scale: 0.9 }}
                            >
                              <Github className="w-5 h-5" />
                            </motion.a>
                          )}
                        </div>
                      </div>
                      {project.featured && (
                        <div className="absolute top-4 left-4 bg-[#ff6700] text-white px-3 py-1 rounded-full text-sm font-medium">
                          Featured
                        </div>
                      )}
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-[#ff6700] transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-gray-600 mb-4 line-clamp-2">{project.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, index) => (
                          <span
                            key={index}
                            className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm hover:bg-[#ff6700] hover:text-white transition-colors cursor-default"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
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