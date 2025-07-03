import React, { useState, useRef } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { 
  Mail, Phone, MapPin, Send, 
  ArrowRight, Check, AlertCircle, MessageCircle, Calendar
} from 'lucide-react';

const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [focusedField, setFocusedField] = useState<string | null>(null);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Simulate API call - replace with actual EmailJS implementation
      await new Promise(resolve => setTimeout(resolve, 2000));
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      console.error('Email error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus('idle'), 5000);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const contactInfo = [
    {
      icon: <Mail className="w-7 h-7" />,
      title: 'Email',
      content: 'vineetsahoo3@gmail.com',
      link: 'mailto:vineetsahoo3@gmail.com',
      gradient: 'from-blue-500 to-cyan-400',
      bgGradient: 'from-blue-50 to-cyan-50',
      description: 'Drop me a line anytime'
    },
    {
      icon: <Phone className="w-7 h-7" />,
      title: 'Phone',
      content: '+91 85956 43778',
      link: 'tel:+918595643778',
      gradient: 'from-emerald-500 to-teal-400',
      bgGradient: 'from-emerald-50 to-teal-50',
      description: 'Call for urgent matters'
    },
    {
      icon: <MapPin className="w-7 h-7" />,
      title: 'Location',
      content: 'Delhi, India',
      link: 'https://goo.gl/maps/your-location',
      gradient: 'from-orange-500 to-pink-400',
      bgGradient: 'from-orange-50 to-pink-50',
      description: 'Open to remote work'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 relative overflow-hidden">
      {/* Modern Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-r from-orange-300/10 to-pink-300/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/3 right-0 w-80 h-80 bg-gradient-to-l from-blue-300/10 to-purple-300/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-0 left-1/3 w-72 h-72 bg-gradient-to-t from-green-300/10 to-emerald-300/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      {/* Ultra-Modern Hero Section */}
      <section className="relative pt-20 pb-16">
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
              Let's Create{' '}
              <span className="relative inline-block">
                <span className="bg-gradient-to-r from-orange-500 via-pink-500 to-purple-500 bg-clip-text text-transparent">
                  Together
                </span>
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
              </span>
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
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-12"
            >
              Ready to turn your ideas into reality? Let's discuss your next project 
              and create something amazing that makes a difference.
            </motion.p>

            {/* Modern CTA buttons */}
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <motion.a
                href="#contact-form"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-orange-500 to-pink-500 text-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <MessageCircle className="h-5 w-5 group-hover:rotate-12 transition-transform" />
                Start Conversation
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </motion.a>

              <motion.a
                href="#contact-info"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group inline-flex items-center gap-3 px-8 py-4 bg-white/80 backdrop-blur-sm text-gray-700 rounded-2xl shadow-lg hover:shadow-xl border border-gray-200 transition-all duration-300"
              >
                <Calendar className="h-5 w-5 group-hover:rotate-12 transition-transform" />
                Schedule Call
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Modern Contact Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Contact Information Column */}
          <motion.div 
            className="lg:col-span-2 space-y-8"
            variants={itemVariants}
          >
            {/* Enhanced Header with Glass Morphism */}
            <div className="relative mb-12">
              <motion.div 
                className="relative bg-white/20 backdrop-blur-xl rounded-3xl p-8 border border-white/30 shadow-2xl overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                {/* Background decoration */}
                <div className="absolute -top-10 -right-10 w-32 h-32 bg-gradient-to-br from-orange-400/20 to-pink-400/20 rounded-full blur-2xl"></div>
                <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-gradient-to-tr from-blue-400/20 to-purple-400/20 rounded-full blur-2xl"></div>
                
                <div className="relative z-10">
                  <motion.div
                    className="inline-flex items-center justify-center p-4 bg-gradient-to-r from-orange-500 to-pink-500 rounded-2xl shadow-lg mb-6"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Mail className="w-8 h-8 text-white" />
                  </motion.div>
                  
                  <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent mb-4">
                    Contact Information
                  </h2>
                  
                  <p className="text-lg text-gray-600 leading-relaxed">
                    Ready to start a conversation? Choose your preferred way to connect.
                  </p>
                  
                  {/* Animated underline */}
                  <motion.div 
                    className="mt-6 h-1 bg-gradient-to-r from-orange-500 via-pink-500 to-purple-500 rounded-full"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                  />
                </div>
              </motion.div>
            </div>

            {/* Enhanced Contact Cards with Hover Effects */}
            <div className="space-y-6">
              {contactInfo.map((item, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="group relative"
                  whileHover={{ y: -8 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <motion.a
                    href={item.link}
                    className="block relative bg-white/80 backdrop-blur-xl p-8 rounded-3xl border border-white/50 shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden"
                  >
                    {/* Gradient background on hover */}
                    <motion.div 
                      className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-3xl`}
                    />
                    
                    {/* Animated border */}
                    <motion.div
                      className={`absolute inset-0 rounded-3xl border-2 border-transparent bg-gradient-to-r ${item.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                      style={{ 
                        background: `linear-gradient(white, white) padding-box, linear-gradient(45deg, ${item.gradient.replace('from-', '').replace('to-', '')}) border-box`,
                        backgroundSize: '300% 300%'
                      }}
                    />
                    
                    <div className="relative z-10 flex items-start space-x-6">
                      {/* Enhanced icon with 3D effect */}
                      <motion.div 
                        className={`p-5 rounded-2xl bg-gradient-to-br ${item.gradient} text-white shadow-xl relative overflow-hidden`}
                        whileHover={{ scale: 1.1, rotateY: 15 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        {/* Icon shine effect */}
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                          animate={{ x: ["-100%", "100%"] }}
                          transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                        />
                        <div className="relative z-10">
                          {item.icon}
                        </div>
                      </motion.div>
                      
                      <div className="flex-1 pt-2">
                        <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text transition-all duration-300" style={{ backgroundImage: `linear-gradient(45deg, ${item.gradient.replace('from-', '').replace('to-', '')})` }}>
                          {item.title}
                        </h3>
                        
                        <p className="text-lg text-gray-700 font-medium mb-2">
                          {item.content}
                        </p>
                        
                        <p className="text-sm text-gray-500 mb-4">
                          {item.description}
                        </p>
                        
                        {/* Enhanced call-to-action */}
                        <motion.div 
                          className="flex items-center text-gray-600 group-hover:text-gray-900 transition-colors duration-300"
                          whileHover={{ x: 5 }}
                        >
                          <span className="mr-2 font-semibold">Get in touch</span>
                          <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
                        </motion.div>
                      </div>
                    </div>
                    
                    {/* Floating particles on hover */}
                    <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      {Array.from({ length: 6 }).map((_, i) => (
                        <motion.div
                          key={i}
                          className={`absolute w-2 h-2 bg-gradient-to-r ${item.gradient} rounded-full`}
                          style={{
                            left: `${20 + i * 12}%`,
                            top: `${30 + (i % 2) * 40}%`,
                          }}
                          animate={{
                            y: [0, -10, 0],
                            opacity: [0, 1, 0],
                            scale: [0, 1, 0],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            delay: i * 0.2,
                          }}
                        />
                      ))}
                    </div>
                  </motion.a>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Enhanced Contact Form Column */}
          <motion.div 
            className="lg:col-span-3"
            variants={itemVariants}
          >
            <motion.div
              variants={itemVariants}
              className="relative bg-gradient-to-br from-white/95 to-white/80 backdrop-blur-2xl p-12 rounded-3xl shadow-2xl border border-white/50 overflow-hidden"
            >
              {/* Enhanced background decorations */}
              <div className="absolute -top-32 -right-32 w-64 h-64 bg-gradient-to-br from-orange-400/10 to-pink-400/10 rounded-full blur-3xl"></div>
              <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-blue-400/10 to-purple-400/10 rounded-full blur-3xl"></div>
              <div className="absolute top-1/4 right-1/4 w-32 h-32 bg-gradient-to-r from-green-400/5 to-emerald-400/5 rounded-full blur-2xl"></div>
              
              {/* Floating geometric shapes */}
              <div className="absolute top-8 right-8 w-4 h-4 border-2 border-orange-300/30 rotate-45"></div>
              <div className="absolute bottom-12 left-12 w-3 h-3 bg-pink-300/30 rounded-full"></div>
              <div className="absolute top-1/3 left-8 w-2 h-2 bg-blue-300/30 rounded-full"></div>
              
              {/* Enhanced header section */}
              <div className="relative z-10 mb-10">
                <motion.div
                  className="inline-flex items-center justify-center p-4 bg-gradient-to-r from-orange-500 to-pink-500 rounded-2xl shadow-lg mb-6"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Send className="w-8 h-8 text-white" />
                </motion.div>
                
                <h2 className="text-4xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent mb-4">
                  Send a Message
                </h2>
                
                <p className="text-lg text-gray-600 leading-relaxed">
                  Let's discuss your project and bring your ideas to life together.
                </p>
                
                {/* Animated progress indicator */}
                <motion.div 
                  className="mt-6 h-1 bg-gradient-to-r from-orange-500 via-pink-500 to-purple-500 rounded-full"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                />
              </div>
              
              <form ref={formRef} onSubmit={handleSubmit} className="relative z-10 space-y-8">
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                  {[
                    { id: "name", label: "Full Name", type: "text", placeholder: "Enter your name", icon: "👤" },
                    { id: "email", label: "Email Address", type: "email", placeholder: "your@email.com", icon: "✉️" }
                  ].map((field) => (
                    <motion.div
                      key={field.id}
                      whileHover={{ scale: 1.02 }}
                      className="group relative"
                    >
                      <div className="relative">
                        {/* Floating label with icon */}
                        <label 
                          htmlFor={field.id} 
                          className={`absolute left-4 transition-all duration-300 flex items-center gap-2 ${
                            focusedField === field.id || formData[field.id as keyof typeof formData]
                              ? '-top-3 text-sm bg-white px-3 text-orange-600 font-bold z-10 shadow-sm rounded-full'
                              : 'top-4 text-gray-500'
                          }`}
                        >
                          <span className="text-lg">{field.icon}</span>
                          {field.label}
                        </label>
                        
                        <input
                          type={field.type}
                          id={field.id}
                          name={field.id}
                          value={formData[field.id as keyof typeof formData]}
                          onChange={handleChange}
                          required
                          placeholder={field.placeholder}
                          className="w-full px-6 py-5 border-2 border-gray-200 rounded-2xl bg-white/70 backdrop-blur-sm focus:border-orange-500 focus:ring-4 focus:ring-orange-500/10 transition-all duration-300 text-lg placeholder-gray-400"
                          onFocus={() => setFocusedField(field.id)}
                          onBlur={() => setFocusedField(null)}
                        />
                        
                        {/* Animated border gradient */}
                        <motion.div 
                          className={`absolute inset-0 rounded-2xl bg-gradient-to-r from-orange-500 to-pink-500 opacity-0 pointer-events-none ${
                            focusedField === field.id ? 'opacity-100' : ''
                          } transition-opacity duration-300`}
                          style={{ padding: '2px' }}
                        >
                          <div className="w-full h-full bg-white rounded-2xl"></div>
                        </motion.div>
                        
                        {/* Success indicator */}
                        {formData[field.id as keyof typeof formData] && (
                          <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            className="absolute right-4 top-1/2 transform -translate-y-1/2 w-6 h-6 bg-green-500 text-white rounded-full flex items-center justify-center"
                          >
                            <Check className="w-4 h-4" />
                          </motion.div>
                        )}
                      </div>
                    </motion.div>
                  ))}
                </div>

                <motion.div whileHover={{ scale: 1.02 }} className="relative group">
                  <label 
                    htmlFor="subject" 
                    className={`absolute left-4 transition-all duration-300 flex items-center gap-2 ${
                      focusedField === 'subject' || formData.subject
                        ? '-top-3 text-sm bg-white px-3 text-orange-600 font-bold z-10 shadow-sm rounded-full'
                        : 'top-4 text-gray-500'
                    }`}
                  >
                    <span className="text-lg">💡</span>
                    Subject
                  </label>
                  
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    placeholder="What would you like to discuss?"
                    className="w-full px-6 py-5 border-2 border-gray-200 rounded-2xl bg-white/70 backdrop-blur-sm focus:border-orange-500 focus:ring-4 focus:ring-orange-500/10 transition-all duration-300 text-lg placeholder-gray-400"
                    onFocus={() => setFocusedField('subject')}
                    onBlur={() => setFocusedField(null)}
                  />
                  
                  {formData.subject && (
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className="absolute right-4 top-1/2 transform -translate-y-1/2 w-6 h-6 bg-green-500 text-white rounded-full flex items-center justify-center"
                    >
                      <Check className="w-4 h-4" />
                    </motion.div>
                  )}
                </motion.div>

                <motion.div whileHover={{ scale: 1.02 }} className="relative group">
                  <label 
                    htmlFor="message" 
                    className={`absolute left-4 transition-all duration-300 flex items-center gap-2 ${
                      focusedField === 'message' || formData.message
                        ? '-top-3 text-sm bg-white px-3 text-orange-600 font-bold z-10 shadow-sm rounded-full'
                        : 'top-4 text-gray-500'
                    }`}
                  >
                    <span className="text-lg">💬</span>
                    Your Message
                  </label>
                  
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    placeholder="Tell me about your project, goals, and how I can help..."
                    className="w-full px-6 py-5 border-2 border-gray-200 rounded-2xl bg-white/70 backdrop-blur-sm focus:border-orange-500 focus:ring-4 focus:ring-orange-500/10 transition-all duration-300 text-lg placeholder-gray-400 resize-none"
                    onFocus={() => setFocusedField('message')}
                    onBlur={() => setFocusedField(null)}
                  />
                  
                  {formData.message && (
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className="absolute right-4 top-6 w-6 h-6 bg-green-500 text-white rounded-full flex items-center justify-center"
                    >
                      <Check className="w-4 h-4" />
                    </motion.div>
                  )}
                </motion.div>

                {/* Enhanced submit button */}
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  className={`relative w-full flex items-center justify-center px-8 py-6 rounded-2xl text-white text-lg font-semibold shadow-xl transition-all duration-500 overflow-hidden ${
                    isSubmitting 
                      ? 'bg-gray-400 cursor-not-allowed' 
                      : 'bg-gradient-to-r from-orange-500 via-pink-500 to-purple-500 hover:shadow-2xl hover:shadow-orange-500/25'
                  }`}
                  whileHover={!isSubmitting ? { scale: 1.02, y: -2 } : {}}
                  whileTap={!isSubmitting ? { scale: 0.98 } : {}}
                >
                  {/* Button background animation */}
                  {!isSubmitting && (
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-orange-600 via-pink-600 to-purple-600 opacity-0 hover:opacity-100 transition-opacity duration-300"
                      animate={{ x: ["-100%", "100%"] }}
                      transition={{ duration: 3, repeat: Infinity, repeatDelay: 2 }}
                    />
                  )}
                  
                  <div className="relative z-10 flex items-center">
                    {isSubmitting ? (
                      <>
                        <motion.div 
                          className="w-6 h-6 border-2 border-white border-t-transparent rounded-full mr-3"
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                        />
                        Sending message...
                      </>
                    ) : (
                      <>
                        <span className="mr-3">Send Message</span>
                        <motion.div
                          whileHover={{ x: 5, rotate: 15 }}
                          transition={{ type: "spring", stiffness: 300 }}
                        >
                          <Send className="w-6 h-6" />
                        </motion.div>
                      </>
                    )}
                  </div>
                </motion.button>

                {/* Enhanced Status Messages */}
                <AnimatePresence>
                  {submitStatus !== 'idle' && (
                    <motion.div
                      initial={{ opacity: 0, y: 20, scale: 0.9 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: -20, scale: 0.9 }}
                      className={`relative flex items-center p-6 rounded-2xl border-2 ${
                        submitStatus === 'success' 
                          ? 'bg-gradient-to-r from-green-50 to-emerald-50 border-green-200 text-green-700' 
                          : 'bg-gradient-to-r from-red-50 to-pink-50 border-red-200 text-red-700'
                      } shadow-lg`}
                    >
                      {/* Background decoration */}
                      <div className={`absolute -top-2 -right-2 w-12 h-12 ${
                        submitStatus === 'success' ? 'bg-green-200/30' : 'bg-red-200/30'
                      } rounded-full blur-xl`}></div>
                      
                      <div className="relative z-10 flex items-center">
                        {submitStatus === 'success' ? (
                          <>
                            <motion.div
                              initial={{ scale: 0 }}
                              animate={{ scale: 1 }}
                              transition={{ type: "spring", stiffness: 300, delay: 0.2 }}
                              className="w-10 h-10 bg-green-500 text-white rounded-full flex items-center justify-center mr-4"
                            >
                              <Check className="w-6 h-6" />
                            </motion.div>
                            <div>
                              <h4 className="font-bold text-lg">Message sent successfully!</h4>
                              <p className="text-sm">I'll get back to you within 24 hours.</p>
                            </div>
                          </>
                        ) : (
                          <>
                            <motion.div
                              initial={{ scale: 0 }}
                              animate={{ scale: 1 }}
                              transition={{ type: "spring", stiffness: 300, delay: 0.2 }}
                              className="w-10 h-10 bg-red-500 text-white rounded-full flex items-center justify-center mr-4"
                            >
                              <AlertCircle className="w-6 h-6" />
                            </motion.div>
                            <div>
                              <h4 className="font-bold text-lg">Failed to send message</h4>
                              <p className="text-sm">Please try again or contact me directly.</p>
                            </div>
                          </>
                        )}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </form>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Ultra-Modern Closing Section */}
      <section className="relative py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-black overflow-hidden">
        {/* Modern background effects */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-orange-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-l from-blue-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        {/* Animated grid pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="grid grid-cols-12 h-full">
            {Array.from({ length: 144 }).map((_, i) => (
              <motion.div
                key={i}
                className="border border-white/10"
                initial={{ opacity: 0 }}
                animate={{ opacity: [0, 0.3, 0] }}
                transition={{ 
                  duration: 4, 
                  repeat: Infinity, 
                  delay: (i % 12) * 0.2 + Math.floor(i / 12) * 0.1 
                }}
              />
            ))}
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {/* Modern icon badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative inline-block mb-8"
            >
              <div className="absolute -inset-4 bg-gradient-to-r from-orange-400/30 via-pink-400/30 to-purple-400/30 rounded-2xl blur-xl animate-pulse"></div>
              <div className="relative inline-flex items-center justify-center p-6 bg-white/10 backdrop-blur-xl rounded-2xl border border-white/20 shadow-2xl">
                <MessageCircle className="w-10 h-10 text-white" />
              </div>
            </motion.div>

            {/* Enhanced title with gradient text */}
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold mb-6"
            >
              <span className="bg-gradient-to-r from-orange-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
                Thanks for reaching out!
              </span>
            </motion.h3>

            {/* Modern subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed mb-8"
            >
              Your message has been received. I'll get back to you within 24 hours 
              with a thoughtful response.
            </motion.p>

            {/* Animated decorative line */}
            <motion.div
              className="relative w-32 mx-auto mb-8"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              viewport={{ once: true }}
            >
              <motion.div
                className="h-1 bg-gradient-to-r from-orange-400 via-pink-400 to-purple-400 rounded-full"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ duration: 1, delay: 0.6 }}
                viewport={{ once: true }}
              />
              <motion.div
                className="absolute -inset-2 bg-gradient-to-r from-orange-400/30 via-pink-400/30 to-purple-400/30 rounded-full blur-md"
                animate={{ 
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.6, 0.3]
                }}
                transition={{ duration: 3, repeat: Infinity }}
              />
            </motion.div>

            {/* Floating particles effect */}
            <div className="absolute inset-0 pointer-events-none">
              {Array.from({ length: 20 }).map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-1 h-1 bg-white/20 rounded-full"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                  }}
                  animate={{
                    y: [0, -20, 0],
                    opacity: [0, 1, 0],
                  }}
                  transition={{
                    duration: 3 + Math.random() * 2,
                    repeat: Infinity,
                    delay: Math.random() * 2,
                  }}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Contact;