import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Instagram } from 'lucide-react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

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
      setTimeout(() => setSubmitStatus('idle'), 3000);
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
      content: 'contact: vineetsahoo3@gmail.com',
      link: 'mailto:vineetsahoo3@gmail.com'
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: 'Phone',
      content: '+91 85956 43778',
      link: 'tel:+918595643778'
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: 'Location',
      content: 'Delhi, India',
      link: 'https://goo.gl/maps/your-location'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
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
      {/* Hero Section */}
      <div className="relative overflow-hidden pt-20">
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1596524430615-b46475ddff6e?ixlib=rb-4.0.3")',
            filter: 'brightness(4.5)',
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-b from-white/80 to-white/95 backdrop-blur-[2px]"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <motion.div 
            className="text-center relative z-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <motion.h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
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
              className="text-lg md:text-xl text-gray-800 max-w-2xl mx-auto leading-relaxed"
            >
              <span className="text-[#ff6700] font-medium">Have a project</span> in mind? Let's create something{' '}
              <span className="text-[#ff6700] font-medium">amazing</span> together.
            </motion.p>
          </motion.div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-12 px-4 sm:px-6"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Contact Information */}
          <div className="lg:col-span-1 space-y-4 sm:space-y-6">
            {contactInfo.map((item, index) => (
              <motion.a
                key={index}
                href={item.link}
                variants={itemVariants}
                className="block p-8 bg-white/90 backdrop-blur-[2px] rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
                whileHover={{ y: -5, scale: 1.02 }}
              >
                <div className="flex items-center space-x-4">
                  <div className="p-3 rounded-xl bg-[#fff1e6] text-[#ff6700]">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">{item.title}</h3>
                    <p className="text-gray-600 mt-1">{item.content}</p>
                  </div>
                </div>
              </motion.a>
            ))}

            {/* Social Links */}
            <motion.div 
              variants={itemVariants}
              className="flex justify-center space-x-8 mt-12"
            >
              {[
                { icon: <Github className="w-7 h-7" />, url: 'https://github.com/Vineetsahoo' },
                { icon: <Linkedin className="w-7 h-7" />, url: 'https://www.linkedin.com/in/vineet-sahoo-81b022311/' },
                { icon: <Instagram className="w-7 h-7" />, url: 'https://www.instagram.com/sahoo_era/' }
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-white/80 text-gray-600 hover:text-[#ff6700] shadow-lg hover:shadow-xl transition-all duration-300"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {social.icon}
                </motion.a>
              ))}
            </motion.div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2 p-4 sm:p-6 lg:p-8">
            <motion.div
              variants={itemVariants}
              className="bg-white/90 backdrop-blur-[2px] p-10 rounded-2xl shadow-xl"
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Send a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                  {["name", "email"].map((field) => (
                    <motion.div
                      key={field}
                      whileHover={{ scale: 1.02 }}
                      className="group"
                    >
                      <label htmlFor={field} className="block text-sm font-medium text-gray-700 mb-2">
                        {field.charAt(0).toUpperCase() + field.slice(1)}
                      </label>
                      <input
                        type={field === "email" ? "email" : "text"}
                        id={field}
                        name={field}
                        value={formData[field as keyof typeof formData]}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-[#ff6700] focus:border-transparent transition-all duration-300 bg-white/50"
                      />
                    </motion.div>
                  ))}
                </div>

                <motion.div whileHover={{ scale: 1.01 }} className="group">
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-[#ff6700] focus:border-transparent transition-all duration-300 bg-white/50"
                  />
                </motion.div>

                <motion.div whileHover={{ scale: 1.01 }} className="group">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-[#ff6700] focus:border-transparent transition-all duration-300 bg-white/50"
                  />
                </motion.div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full flex items-center justify-center px-8 py-4 rounded-xl text-white shadow-lg transition-all duration-300 ${
                    isSubmitting ? 'bg-gray-400' : 'bg-[#ff6700] hover:bg-[#ff8533] hover:shadow-xl'
                  }`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {isSubmitting ? (
                    <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  ) : (
                    <>
                      Send Message
                      <Send className="w-5 h-5 ml-2" />
                    </>
                  )}
                </motion.button>

                {/* Status Messages */}
                <AnimatePresence>
                  {submitStatus !== 'idle' && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      className={`text-center p-4 rounded-xl ${
                        submitStatus === 'success' ? 'bg-green-50 text-green-600' : 'bg-red-50 text-red-600'
                      }`}
                    >
                      {submitStatus === 'success' ? 'Message sent successfully!' : 'Failed to send message. Please try again.'}
                    </motion.div>
                  )}
                </AnimatePresence>
              </form>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;