'use client';

import { FiGithub, FiLinkedin, FiTwitter, FiMail, FiHeart } from 'react-icons/fi';
import { userData } from '../config/userData';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialIcons = [
    { Icon: FiGithub, href: userData.social.github, label: 'GitHub' },
    { Icon: FiLinkedin, href: userData.social.linkedin, label: 'LinkedIn' },
    { Icon: FiTwitter, href: userData.social.twitter, label: 'Twitter' },
    { Icon: FiMail, href: `mailto:${userData.email}`, label: 'Email' },
  ];

  return (
    <footer className="bg-dark-light border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* About */}
          <div>
            <h3 className="text-xl font-bold gradient-text mb-4">{userData.name}</h3>
            <p className="text-gray-400 mb-4">
              {userData.tagline}
            </p>
            <p className="text-gray-400">
              {userData.location}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {['About', 'Skills', 'Projects', 'Experience', 'Contact'].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="text-gray-400 hover:text-primary transition-colors duration-300"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Get In Touch</h3>
            <p className="text-gray-400 mb-2">
              <a href={`mailto:${userData.email}`} className="hover:text-primary transition-colors duration-300">
                {userData.email}
              </a>
            </p>
            <p className="text-gray-400 mb-4">
              {userData.phone}
            </p>
            <div className="flex space-x-4">
              {socialIcons.map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-2xl text-gray-400 hover:text-primary transition-all duration-300 hover:scale-125"
                  aria-label={label}
                >
                  <Icon />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/10 pt-8 text-center">
          <p className="text-gray-400 flex items-center justify-center">
            Made with <FiHeart className="text-red-500 mx-2" /> by {userData.name} © {currentYear}
          </p>
          <p className="text-gray-500 text-sm mt-2">
            Built with Next.js & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;