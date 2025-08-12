import React, { useState } from 'react';
import { Mail, Github, Linkedin, MapPin, Send, Download, CheckCircle } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormData({ name: '', email: '', message: '' });
    
    // Reset success message after 3 seconds
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  const handleDownloadResume = () => {
    const link = document.createElement('a');
    link.href = '/resume.pdf';
    link.download = 'John_Doe_Resume.pdf';
    link.click();
  };

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      label: "Email",
      value: "aryaofficialaas14@gmail.com",
      href: "mailto:aryaofficialaas14@gmail.com",
      color: "from-red-500 to-pink-600"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      label: "Location",
      value: "Pune, India",
      href: "#",
      color: "from-blue-500 to-cyan-600"
    }
  ];

  const socialLinks = [
    {
      icon: <Mail className="w-8 h-8" />,
      name: "Gmail",
      href: "mailto:aryaofficialaas14@gmail.com",
      color: "from-red-500 to-pink-600",
      hoverColor: "hover:from-red-600 hover:to-pink-700"
    },
    {
      icon: <Github className="w-8 h-8" />,
      name: "GitHub",
      href: "https://github.com/Arya-S14",
      color: "from-gray-700 to-gray-900",
      hoverColor: "hover:from-gray-800 hover:to-black"
    },
    {
      icon: <Linkedin className="w-8 h-8" />,
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/aryasabale/",
      color: "from-blue-600 to-blue-800",
      hoverColor: "hover:from-blue-700 hover:to-blue-900"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4">
            Get In <span className="bg-gradient-to-r from-cyan-500 to-purple-600 bg-clip-text text-transparent">Touch</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Ready to start your next project? Let's discuss how we can work together
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h3 className="text-2xl font-bold text-slate-900 mb-6">Send me a message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-200 bg-gray-50 focus:bg-white"
                  placeholder="Arya Sabale"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-200 bg-gray-50 focus:bg-white"
                  placeholder="aryaofficialaas14@gmail.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-200 bg-gray-50 focus:bg-white resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting || isSubmitted}
                className={`w-full flex items-center justify-center px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 ${
                  isSubmitted
                    ? 'bg-green-500 text-white'
                    : 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white hover:from-cyan-600 hover:to-purple-700 hover:scale-[1.02] hover:shadow-lg'
                } ${isSubmitting ? 'opacity-75 cursor-not-allowed' : ''}`}
              >
                {isSubmitted ? (
                  <>
                    <CheckCircle className="w-5 h-5 mr-2" />
                    Message Sent!
                  </>
                ) : isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5 mr-2" />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Contact Info Cards */}
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <a
                  key={index}
                  href={info.href}
                  className="flex items-center p-4 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group"
                >
                  <div className={`p-3 bg-gradient-to-r ${info.color} rounded-lg mr-4 group-hover:scale-110 transition-transform duration-300`}>
                    <div className="text-white">{info.icon}</div>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 font-medium">{info.label}</p>
                    <p className="text-lg font-semibold text-gray-900">{info.value}</p>
                  </div>
                </a>
              ))}
            </div>

            {/* Social Links */}
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h3 className="text-xl font-bold text-slate-900 mb-6 text-center">Connect with me</h3>
              <div className="flex justify-center space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-4 bg-gradient-to-r ${social.color} ${social.hoverColor} rounded-xl text-white transition-all duration-300 hover:scale-110 hover:shadow-lg group`}
                    title={social.name}
                  >
                    <div className="group-hover:animate-pulse">{social.icon}</div>
                  </a>
                ))}
              </div>
            </div>

            {/* Download Resume */}
            <div className="bg-gradient-to-r from-slate-900 to-slate-800 rounded-2xl p-8 text-center">
              <h3 className="text-xl font-bold text-white mb-4">
                Like what you see?
              </h3>
              <p className="text-gray-300 mb-6">
                Download my resume to learn more about my experience and qualifications
              </p>
              <button
                onClick={handleDownloadResume}
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 hover:scale-105 hover:shadow-lg font-semibold"
              >
                <Download className="w-5 h-5 mr-2" />
                Download Resume
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;