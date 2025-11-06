'use client';

import { useInView } from 'react-intersection-observer';
import { FiBriefcase, FiCalendar, FiMapPin, FiCheck } from 'react-icons/fi';
import { userData } from '../config/userData';

const Experience = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="experience" className="section-padding bg-dark-light/50">
      <div className="max-w-7xl mx-auto">
        <div ref={ref} className={`transition-all duration-1000 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Section Title */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">Work Experience</h2>
            <div className="w-24 h-1 bg-primary mx-auto rounded-full mb-4"></div>
            <p className="text-gray-400 max-w-2xl mx-auto">
              My professional journey and career milestones
            </p>
          </div>

          {/* Experience Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-primary transform md:-translate-x-1/2"></div>

            {/* Experience Items */}
            <div className="space-y-12">
              {userData.experience.map((exp, index) => (
                <div
                  key={index}
                  className={`relative flex flex-col md:flex-row ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  } items-center gap-8`}
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-primary rounded-full border-4 border-dark z-10 transform md:-translate-x-1/2"></div>

                  {/* Content Card */}
                  <div className={`w-full md:w-5/12 glass rounded-lg p-6 ml-16 md:ml-0 ${
                    index % 2 === 0 ? 'md:mr-auto md:text-right' : 'md:ml-auto md:text-left'
                  }`}>
                    {/* Company & Position */}
                    <div className="flex items-center gap-2 mb-2 md:justify-start">
                      <FiBriefcase className="text-primary" />
                      <h3 className="text-2xl font-bold text-white">{exp.position}</h3>
                    </div>
                    <h4 className="text-xl text-primary mb-4">{exp.company}</h4>

                    {/* Duration & Location */}
                    <div className={`flex flex-wrap gap-4 mb-4 text-gray-400 text-sm ${
                      index % 2 === 0 ? 'md:justify-start' : 'md:justify-start'
                    }`}>
                      <div className="flex items-center gap-2">
                        <FiCalendar />
                        <span>{exp.duration}</span>
                      </div>
                      {exp.location && (
                        <div className="flex items-center gap-2">
                          <FiMapPin />
                          <span>{exp.location}</span>
                        </div>
                      )}
                    </div>

                    {/* Description */}
                    <p className="text-gray-400 mb-4 leading-relaxed">{exp.description}</p>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {exp.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 bg-secondary/20 text-secondary rounded-full text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Achievements */}
                    {exp.achievements && exp.achievements.length > 0 && (
                      <ul className="space-y-2">
                        {exp.achievements.map((achievement, achIndex) => (
                          <li key={achIndex} className="flex items-start gap-2 text-gray-400 text-sm">
                            <FiCheck className="text-primary mt-1 flex-shrink-0" />
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
