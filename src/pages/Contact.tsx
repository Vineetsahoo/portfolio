import React, { useState, useRef } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Instagram, ArrowRight, Check, AlertCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Replace these with your actual EmailJS credentials
      const result = await emailjs.send(
        'YOUR_SERVICE_ID',  // Your EmailJS service ID
        'YOUR_TEMPLATE_ID', // Your EmailJS template ID
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
          to_email: 'vineetsahoo3@gmail.com', // Your email address
        },
        'YOUR_PUBLIC_KEY' // Your EmailJS public key
      );

      if (result.text === 'OK') {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setSubmitStatus('error');
      }
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
      icon: <Mail className="w-6 h-6" />,
      title: 'Email',
      content: 'vineetsahoo3@gmail.com',
      link: 'mailto:vineetsahoo3@gmail.com',
      color: 'from-blue-500 to-cyan-400'
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: 'Phone',
      content: '+91 85956 43778',
      link: 'tel:+918595643778',
      color: 'from-green-500 to-emerald-400'
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: 'Location',
      content: 'Delhi, India',
      link: 'https://goo.gl/maps/your-location',
      color: 'from-[#ff6700] to-[#ffb38a]'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: { 
        staggerChildren: 0.15,
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
        stiffness: 100,
        damping: 12
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
      {/* Enhanced Hero Section with modern design elements */}
      <div className="relative overflow-hidden pt-20">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        
        {/* Abstract shapes for visual interest */}
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-[#ff6700]/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-[#ff6700]/5 rounded-full blur-[120px]" />
        
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1596524430615-b46475ddff6e?ixlib=rb-4.0.3")',
            filter: 'brightness(4.5)',
          }}
        ></div>
        
        {/* Enhanced overlay with depth */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/80 via-white/90 to-white/95 backdrop-blur-[2px]"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-24">
          <motion.div 
            className="text-center relative z-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            {/* Enhanced headline badge */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-6"
            >
             
            </motion.div>
            
            <motion.h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 tracking-tight leading-none">
              {["Let's", "Connect", "Together"].map((word, i) => (
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
                        word === "Connect" || word === "Together" 
                          ? "bg-gradient-to-r from-[#ff6700] via-[#ff8533] to-[#ffb38a] text-transparent bg-clip-text" 
                          : ""
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

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.8 }}
              className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed"
            >
              <span className="text-[#ff6700] font-medium">Have a project</span> in mind? Let's create something{' '}
              <span className="text-[#ff6700] font-medium">amazing</span> together.
            </motion.p>
          </motion.div>
        </div>
      </div>

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
            className="lg:col-span-2 space-y-6"
            variants={itemVariants}
          >
            <div className="mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Contact Information</h2>
              <div className="h-1 w-20 bg-gradient-to-r from-[#ff6700] to-[#ffb38a] rounded-full"></div>
            </div>

            {/* Enhanced Contact Cards */}
            {contactInfo.map((item, index) => (
              <motion.a
                key={index}
                href={item.link}
                variants={itemVariants}
                className="group block p-6 bg-white shadow-lg hover:shadow-xl transition-all duration-500 rounded-2xl border border-gray-100 overflow-hidden relative"
                whileHover={{ y: -5 }}
              >
                {/* Background gradient on hover */}
                <motion.div 
                  className={`absolute inset-0 bg-gradient-to-r ${item.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 0.1 }}
                />
                
                {/* Card accent line */}
                <motion.div
                  className={`absolute left-0 top-0 h-full w-1 bg-gradient-to-b ${item.color} transform origin-left scale-y-0 group-hover:scale-y-100 transition-transform duration-300`}
                />
                
                <div className="flex items-start space-x-6">
                  {/* Enhanced icon design */}
                  <div className={`p-4 rounded-2xl bg-gradient-to-br ${item.color} text-white shadow-lg transform group-hover:scale-110 transition-transform duration-300`}>
                    {item.icon}
                  </div>
                  <div className="pt-2">
                    <h3 className="text-xl font-bold text-gray-900 mb-1">{item.title}</h3>
                    <p className="text-gray-600">{item.content}</p>
                    
                    {/* Card link indicator */}
                    <div className="flex items-center mt-3 text-[#ff6700] font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <span className="mr-2">Contact</span>
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </motion.a>
            ))}

            {/* Enhanced Social Links Section */}
            <motion.div 
              variants={itemVariants}
              className="bg-white p-6 rounded-2xl shadow-lg"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-6">Let's Connect</h3>
              <div className="flex justify-center space-x-5">
                {[
                  { 
                    icon: <Github className="w-6 h-6" />, 
                    url: 'https://github.com/Vineetsahoo',
                    name: 'GitHub',
                    color: 'bg-gray-900 hover:bg-gray-800'
                  },
                  { 
                    icon: <Linkedin className="w-6 h-6" />, 
                    url: 'https://www.linkedin.com/in/vineet-sahoo-81b022311/',
                    name: 'LinkedIn',
                    color: 'bg-[#0A66C2] hover:bg-[#0A50C2]'
                  },
                  { 
                    icon: <Instagram className="w-6 h-6" />, 
                    url: 'https://www.instagram.com/sahoo_era/',
                    name: 'Instagram',
                    color: 'bg-gradient-to-br from-[#F56040] to-[#C837AB] hover:from-[#E15039] hover:to-[#B836A6]'
                  }
                ].map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-4 rounded-xl ${social.color} text-white shadow-md hover:shadow-lg transition-all duration-300 flex items-center justify-center`}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.95 }}
                    title={social.name}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Enhanced Contact Form Column */}
          <motion.div 
            className="lg:col-span-3"
            variants={itemVariants}
          >
            <motion.div
              variants={itemVariants}
              className="bg-white p-10 rounded-2xl shadow-xl border border-gray-100 relative overflow-hidden"
            >
              {/* Background decoration */}
              <div className="absolute -top-24 -right-24 w-48 h-48 bg-[#ff6700]/5 rounded-full blur-xl"></div>
              <div className="absolute -bottom-32 -left-32 w-64 h-64 bg-[#ff6700]/5 rounded-full blur-xl"></div>
              
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Send a Message</h2>
              
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                  {[
                    { id: "name", label: "Name", type: "text", placeholder: "Your name" },
                    { id: "email", label: "Email", type: "email", placeholder: "your@email.com" }
                  ].map((field) => (
                    <motion.div
                      key={field.id}
                      whileHover={{ scale: 1.01 }}
                      className="group relative"
                    >
                      <label 
                        htmlFor={field.id} 
                        className={`absolute left-4 transition-all duration-300 ${
                          focusedField === field.id || formData[field.id as keyof typeof formData]
                            ? '-top-2.5 text-xs bg-white px-2 text-[#ff6700] font-bold z-10'
                            : 'top-4 text-gray-500'
                        }`}
                      >
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
                        className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl bg-white/70 backdrop-blur-sm focus:border-[#ff6700] focus:ring focus:ring-[#ff6700]/20 transition-all duration-300"
                        onFocus={() => setFocusedField(field.id)}
                        onBlur={() => setFocusedField(null)}
                      />
                      {/* Animated border gradient on focus */}
                      <motion.div 
                        className={`absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#ff6700] to-[#ffb38a] origin-left scale-x-0 ${
                          focusedField === field.id ? 'scale-x-100' : ''
                        } transition-transform duration-300`}
                      />
                    </motion.div>
                  ))}
                </div>

                <motion.div whileHover={{ scale: 1.01 }} className="relative">
                  <label 
                    htmlFor="subject" 
                    className={`absolute left-4 transition-all duration-300 ${
                      focusedField === 'subject' || formData.subject
                        ? '-top-2.5 text-xs bg-white px-2 text-[#ff6700] font-bold z-10'
                        : 'top-4 text-gray-500'
                    }`}
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    placeholder="What's this about?"
                    className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl bg-white/70 backdrop-blur-sm focus:border-[#ff6700] focus:ring focus:ring-[#ff6700]/20 transition-all duration-300"
                    onFocus={() => setFocusedField('subject')}
                    onBlur={() => setFocusedField(null)}
                  />
                </motion.div>

                <motion.div whileHover={{ scale: 1.01 }} className="relative">
                  <label 
                    htmlFor="message" 
                    className={`absolute left-4 transition-all duration-300 ${
                      focusedField === 'message' || formData.message
                        ? '-top-2.5 text-xs bg-white px-2 text-[#ff6700] font-bold z-10'
                        : 'top-4 text-gray-500'
                    }`}
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    placeholder="Your message..."
                    className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl bg-white/70 backdrop-blur-sm focus:border-[#ff6700] focus:ring focus:ring-[#ff6700]/20 transition-all duration-300"
                    onFocus={() => setFocusedField('message')}
                    onBlur={() => setFocusedField(null)}
                  />
                </motion.div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full flex items-center justify-center px-8 py-4 rounded-xl text-white shadow-lg transition-all duration-500 ${
                    isSubmitting 
                      ? 'bg-gray-400 cursor-not-allowed' 
                      : 'bg-gradient-to-r from-[#ff6700] to-[#ffb38a] hover:shadow-xl hover:shadow-[#ff6700]/20'
                  }`}
                  whileHover={!isSubmitting ? { scale: 1.02, y: -2 } : {}}
                  whileTap={!isSubmitting ? { scale: 0.98 } : {}}
                >
                  {isSubmitting ? (
                    <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  ) : (
                    <>
                      <span className="mr-2 font-medium">Send Message</span>
                      <Send className="w-5 h-5" />
                    </>
                  )}
                </motion.button>

                {/* Status Messages with enhanced visual feedback */}
                <AnimatePresence>
                  {submitStatus !== 'idle' && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      className={`flex items-center p-4 rounded-xl ${
                        submitStatus === 'success' 
                          ? 'bg-green-50 border border-green-100 text-green-600' 
                          : 'bg-red-50 border border-red-100 text-red-600'
                      }`}
                    >
                      {submitStatus === 'success' ? (
                        <>
                          <Check className="w-5 h-5 mr-2 text-green-500" />
                          <span>Message sent successfully!</span>
                        </>
                      ) : (
                        <>
                          <AlertCircle className="w-5 h-5 mr-2 text-red-500" />
                          <span>Failed to send message. Please try again.</span>
                        </>
                      )}
                    </motion.div>
                  )}
                </AnimatePresence>
              </form>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Modern Contact Map or Additional Decoration */}
      <div className="relative bg-gradient-to-t from-white to-transparent h-64 mt-10">
        <div className="absolute inset-0 bg-[#ff6700]/5 opacity-50"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col items-center justify-center">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-2xl text-gray-800 font-bold text-center"
          >
            Thanks for reaching out!
          </motion.h3>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-gray-600 text-center mt-2"
          >
            I'll get back to you as soon as possible.
          </motion.p>
        </div>
      </div>
    </div>
  );
};

export default Contact;