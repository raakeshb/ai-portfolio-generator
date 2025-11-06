'use client';

import { useInView } from 'react-intersection-observer';
import { useState } from 'react';
import { FiMail, FiPhone, FiMapPin, FiSend, FiGithub, FiLinkedin, FiTwitter, FiInstagram, FiYoutube, FiGlobe } from 'react-icons/fi';
import { userData } from '../config/userData';

const Contact = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');

    try {
      if (userData.settings.contactForm.emailService === 'formspree') {
        const response = await fetch(userData.settings.contactForm.formspreeEndpoint, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });

        if (response.ok) {
          setStatus('success');
          setFormData({ name: '', email: '', subject: '', message: '' });
        } else {
          setStatus('error');
        }
      } else {
        // For other services or custom handling
        setStatus('success');
        console.log('Form data:', formData);
        setFormData({ name: '', email: '', subject: '', message: '' });
      }
    } catch (error) {
      setStatus('error');
      console.error('Error submitting form:', error);
    }

    setTimeout(() => setStatus(''), 5000);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const socialIcons = {
    github: FiGithub,
    linkedin: FiLinkedin,
    twitter: FiTwitter,
    instagram: FiInstagram,
    youtube: FiYoutube,
    website: FiGlobe,
  };

  return (
    <section id="contact" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <div ref={ref} className={`transition-all duration-1000 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Section Title */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">Get In Touch</h2>
            <div className="w-24 h-1 bg-primary mx-auto rounded-full mb-4"></div>
            <p className="text-gray-400 max-w-2xl mx-auto">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              <p className="text-gray-400 mb-8">
                Feel free to reach out if you have any questions or want to collaborate!
              </p>

              {/* Contact Details */}
              <div className="space-y-6 mb-8">
                <div className="flex items-start gap-4">
                  <div className="glass p-3 rounded-lg">
                    <FiMail className="text-primary text-xl" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Email</h4>
                    <a href={`mailto:${userData.email}`} className="text-gray-400 hover:text-primary transition-colors">
                      {userData.email}
                    </a>
                  </div>
                </div>

                {userData.phone && (
                  <div className="flex items-start gap-4">
                    <div className="glass p-3 rounded-lg">
                      <FiPhone className="text-primary text-xl" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Phone</h4>
                      <a href={`tel:${userData.phone}`} className="text-gray-400 hover:text-primary transition-colors">
                        {userData.phone}
                      </a>
                    </div>
                  </div>
                )}

                {userData.location && (
                  <div className="flex items-start gap-4">
                    <div className="glass p-3 rounded-lg">
                      <FiMapPin className="text-primary text-xl" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Location</h4>
                      <p className="text-gray-400">{userData.location}</p>
                    </div>
                  </div>
                )}
              </div>

              {/* Social Links */}
              <div>
                <h4 className="font-semibold mb-4">Follow Me</h4>
                <div className="flex gap-4">
                  {Object.entries(userData.social).map(([platform, url]) => {
                    const Icon = socialIcons[platform];
                    if (!Icon || !url) return null;
                    return (
                      <a
                        key={platform}
                        href={url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="glass p-3 rounded-lg text-gray-400 hover:text-primary hover:shadow-lg hover:shadow-primary/20 transition-all duration-300"
                        aria-label={platform}
                      >
                        <Icon className="text-xl" />
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Contact Form */}
            {userData.settings.contactForm.enabled && (
              <div>
                <h3 className="text-2xl font-bold mb-6">Send a Message</h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your Name"
                      required
                      className="w-full glass px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-white placeholder-gray-500"
                    />
                  </div>

                  <div>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Your Email"
                      required
                      className="w-full glass px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-white placeholder-gray-500"
                    />
                  </div>

                  <div>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="Subject"
                      required
                      className="w-full glass px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-white placeholder-gray-500"
                    />
                  </div>

                  <div>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Your Message"
                      rows="5"
                      required
                      className="w-full glass px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-white placeholder-gray-500 resize-none"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={status === 'sending'}
                    className="btn-primary w-full flex items-center justify-center gap-2"
                  >
                    {status === 'sending' ? (
                      <>Sending...</>
                    ) : status === 'success' ? (
                      <>Message Sent! ✓</>
                    ) : status === 'error' ? (
                      <>Error. Please try again.</>
                    ) : (
                      <>
                        <FiSend />
                        Send Message
                      </>
                    )}
                  </button>

                  {status === 'success' && (
                    <p className="text-green-400 text-sm text-center">
                      Thank you! I'll get back to you soon.
                    </p>
                  )}
                  {status === 'error' && (
                    <p className="text-red-400 text-sm text-center">
                      Something went wrong. Please try again later.
                    </p>
                  )}
                </form>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
