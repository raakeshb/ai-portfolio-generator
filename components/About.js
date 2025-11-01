'use client';

import { useInView } from 'react-intersection-observer';
import { FiDownload } from 'react-icons/fi';
import { userData } from '../config/userData';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="about" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <div ref={ref} className={`transition-all duration-1000 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Section Title */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">About Me</h2>
            <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <div className="relative">
              <div className="relative w-full max-w-md mx-auto">
                <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-lg blur-2xl opacity-30 animate-pulse-slow"></div>
                <img
                  src={userData.about.image || 'https://via.placeholder.com/400x400'}
                  alt={userData.name}
                  className="relative rounded-lg shadow-2xl w-full h-auto"
                />
              </div>
            </div>

            {/* Content */}
            <div>
              <h3 className="text-3xl font-bold mb-6">
                I'm <span className="gradient-text">{userData.name}</span>
              </h3>
              
              {userData.about.description.map((paragraph, index) => (
                <p key={index} className="text-gray-400 mb-4 leading-relaxed">
                  {paragraph}
                </p>
              ))}

              {/* Highlights */}
              <div className="grid grid-cols-2 gap-6 my-8">
                {userData.about.highlights.map((item, index) => (
                  <div key={index} className="glass p-4 rounded-lg text-center">
                    <h4 className="text-3xl font-bold text-primary mb-2">{item.value}</h4>
                    <p className="text-gray-400 text-sm">{item.label}</p>
                  </div>
                ))}
              </div>

              {/* Download Resume Button */}
              <a
                href={userData.about.resume}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center btn-primary"
              >
                <FiDownload className="mr-2" />
                Download Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;