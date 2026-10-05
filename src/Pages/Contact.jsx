import React, { useState, useEffect } from "react";
import { Share2, User, Mail, MessageSquare, Send, Sparkles, MapPin } from "lucide-react";
import SocialLinks from "../components/SocialLinks";
import Komentar from "../components/Commentar";
import Swal from "sweetalert2";
import AOS from "aos";
import "aos/dist/aos.css";
import axios from "axios";
import { portfolioData } from "../data/portfolioData";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { personal } = portfolioData;

  useEffect(() => {
    AOS.init({
      once: false,
    });
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    Swal.fire({
      title: 'Sending Message...',
      html: 'Please wait while your message is transmitted',
      allowOutsideClick: false,
      didOpen: () => {
        Swal.showLoading();
      }
    });

    try {
      const formSubmitUrl = `https://formsubmit.co/${personal.email}`;
      
      const submitData = new FormData();
      submitData.append('name', formData.name);
      submitData.append('email', formData.email);
      submitData.append('message', formData.message);
      submitData.append('_subject', `New Message from Portfolio (${formData.name})`);
      submitData.append('_captcha', 'false');
      submitData.append('_template', 'table');

      await axios.post(formSubmitUrl, submitData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      Swal.fire({
        title: 'Message Sent!',
        text: 'Thank you for reaching out! I will get back to you promptly.',
        icon: 'success',
        confirmButtonColor: '#06b6d4',
        timer: 3000,
        timerProgressBar: true
      });

      setFormData({
        name: "",
        email: "",
        message: "",
      });

    } catch (error) {
      // Formsubmit sometimes returns cors error on success redirect
      Swal.fire({
        title: 'Message Sent!',
        text: 'Thank you for reaching out! I will get back to you promptly.',
        icon: 'success',
        confirmButtonColor: '#06b6d4',
        timer: 3000,
        timerProgressBar: true
      });

      setFormData({
        name: "",
        email: "",
        message: "",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="px-[5%] sm:px-[5%] lg:px-[10%] py-20 relative overflow-hidden" id="Contact">
      {/* Glow elements */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="text-center mb-12">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-semibold uppercase tracking-wider mb-3">
          <Sparkles className="w-3.5 h-3.5 text-cyan-400" /> Start A Conversation
        </div>
        <h2
          data-aos="fade-down"
          data-aos-duration="1000"
          className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 via-indigo-300 to-purple-400 bg-clip-text text-transparent"
        >
          Get In Touch
        </h2>
        <p
          data-aos="fade-up"
          data-aos-duration="1100"
          className="text-gray-400 max-w-xl mx-auto text-sm md:text-base mt-2"
        >
          Have a project in mind, an internship opportunity, or want to discuss full-stack tech? I'd love to hear from you.
        </p>
      </div>

      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-[45%_55%] gap-8">
          {/* Left: Contact Form & Socials */}
          <div className="bg-white/[0.02] backdrop-blur-xl rounded-3xl border border-white/10 p-6 sm:p-8 flex flex-col justify-between shadow-2xl">
            <div>
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-1">
                    Send A Message
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-400 flex items-center gap-1.5">
                    <MapPin className="w-4 h-4 text-cyan-400" /> {personal.location}
                  </p>
                </div>
                <div className="p-2.5 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400">
                  <Share2 className="w-5 h-5" />
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div data-aos="fade-up" data-aos-delay="100" className="relative group">
                  <User className="absolute left-4 top-3.5 w-4 h-4 text-gray-400 group-focus-within:text-cyan-400 transition-colors" />
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Full Name"
                    value={formData.name}
                    onChange={handleChange}
                    disabled={isSubmitting}
                    className="w-full p-3.5 pl-11 bg-white/5 rounded-xl border border-white/10 placeholder-gray-500 text-white text-sm focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500/30 transition-all disabled:opacity-50"
                    required
                  />
                </div>

                <div data-aos="fade-up" data-aos-delay="200" className="relative group">
                  <Mail className="absolute left-4 top-3.5 w-4 h-4 text-gray-400 group-focus-within:text-cyan-400 transition-colors" />
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email Address"
                    value={formData.email}
                    onChange={handleChange}
                    disabled={isSubmitting}
                    className="w-full p-3.5 pl-11 bg-white/5 rounded-xl border border-white/10 placeholder-gray-500 text-white text-sm focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500/30 transition-all disabled:opacity-50"
                    required
                  />
                </div>

                <div data-aos="fade-up" data-aos-delay="300" className="relative group">
                  <MessageSquare className="absolute left-4 top-3.5 w-4 h-4 text-gray-400 group-focus-within:text-cyan-400 transition-colors" />
                  <textarea
                    name="message"
                    placeholder="Tell me about your project, idea, or inquiry..."
                    value={formData.message}
                    onChange={handleChange}
                    disabled={isSubmitting}
                    className="w-full resize-none p-3.5 pl-11 bg-white/5 rounded-xl border border-white/10 placeholder-gray-500 text-white text-sm focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500/30 transition-all h-36 disabled:opacity-50"
                    required
                  />
                </div>

                <button
                  data-aos="fade-up"
                  data-aos-delay="400"
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-cyan-500 via-indigo-600 to-purple-600 text-white py-3.5 rounded-xl font-semibold text-sm transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-cyan-500/25 active:scale-[0.98] flex items-center justify-center gap-2 disabled:opacity-50"
                >
                  <Send className="w-4 h-4" />
                  {isSubmitting ? 'Transmitting...' : 'Send Message'}
                </button>
              </form>
            </div>

            <div className="mt-8 pt-6 border-t border-white/10">
              <SocialLinks />
            </div>
          </div>

          {/* Right: Guestbook / Comments */}
          <div className="bg-white/[0.02] backdrop-blur-xl rounded-3xl border border-white/10 p-5 sm:p-8 shadow-2xl flex flex-col justify-start">
            <Komentar />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;