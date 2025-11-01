// ========================================
// USER CONFIGURATION FILE
// ========================================
// Update this file with your personal information
// All data here will be displayed on your portfolio

export const userData = {
  // ========== BASIC INFORMATION ==========
  name: "John Doe",
  title: "Full Stack Developer",
  tagline: "Building innovative web solutions that make a difference",
  email: "john.doe@example.com",
  phone: "+1 (555) 123-4567",
  location: "San Francisco, CA",
  
  // ========== SOCIAL LINKS ==========
  social: {
    github: "https://github.com/johndoe",
    linkedin: "https://linkedin.com/in/johndoe",
    twitter: "https://twitter.com/johndoe",
    instagram: "https://instagram.com/johndoe",
    youtube: "https://youtube.com/@johndoe",
    website: "https://johndoe.com",
  },

  // ========== ABOUT SECTION ==========
  about: {
    description: [
      "I'm a passionate Full Stack Developer with 5+ years of experience building scalable web applications. I love turning complex problems into simple, beautiful, and intuitive solutions.",
      "When I'm not coding, you'll find me exploring new technologies, contributing to open source, or sharing knowledge through blog posts and tech talks.",
      "I believe in writing clean, maintainable code and creating exceptional user experiences that delight users."
    ],
    image: "/images/profile.jpg", // Add your image to public/images/profile.jpg
    resume: "/resume.pdf", // Add your resume to public/resume.pdf
    highlights: [
      { label: "Years Experience", value: "5+" },
      { label: "Projects Completed", value: "50+" },
      { label: "Happy Clients", value: "30+" },
      { label: "Awards Won", value: "8" },
    ]
  },

  // ========== SKILLS ==========
  skills: [
    // Frontend
    { name: "React.js", level: 95, category: "Frontend" },
    { name: "Next.js", level: 90, category: "Frontend" },
    { name: "TypeScript", level: 88, category: "Frontend" },
    { name: "Tailwind CSS", level: 92, category: "Frontend" },
    { name: "JavaScript", level: 95, category: "Frontend" },
    { name: "HTML/CSS", level: 98, category: "Frontend" },
    
    // Backend
    { name: "Node.js", level: 90, category: "Backend" },
    { name: "Express.js", level: 88, category: "Backend" },
    { name: "Python", level: 85, category: "Backend" },
    { name: "Django", level: 80, category: "Backend" },
    { name: "RESTful APIs", level: 92, category: "Backend" },
    { name: "GraphQL", level: 78, category: "Backend" },
    
    // Database
    { name: "MongoDB", level: 88, category: "Database" },
    { name: "PostgreSQL", level: 85, category: "Database" },
    { name: "MySQL", level: 82, category: "Database" },
    { name: "Redis", level: 75, category: "Database" },
    
    // DevOps & Tools
    { name: "Git", level: 95, category: "Tools" },
    { name: "Docker", level: 82, category: "Tools" },
    { name: "AWS", level: 78, category: "Tools" },
    { name: "CI/CD", level: 80, category: "Tools" },
  ],

  // ========== PROJECTS ==========
  projects: [
    {
      title: "E-Commerce Platform",
      description: "A full-featured e-commerce platform with real-time inventory management, payment processing, and admin dashboard. Built with modern technologies for optimal performance.",
      image: "/images/project1.jpg",
      tags: ["Next.js", "Node.js", "MongoDB", "Stripe", "Tailwind"],
      github: "https://github.com/johndoe/ecommerce-platform",
      demo: "https://ecommerce-demo.vercel.app",
      featured: true,
    },
    {
      title: "AI Task Manager",
      description: "An intelligent task management application that uses AI to prioritize tasks, suggest optimal schedules, and provide productivity insights.",
      image: "/images/project2.jpg",
      tags: ["React", "Python", "TensorFlow", "FastAPI", "PostgreSQL"],
      github: "https://github.com/johndoe/ai-task-manager",
      demo: "https://ai-tasks.vercel.app",
      featured: true,
    },
    {
      title: "Social Media Dashboard",
      description: "A comprehensive analytics dashboard for social media managers to track performance across multiple platforms with beautiful visualizations.",
      image: "/images/project3.jpg",
      tags: ["React", "D3.js", "Express", "MongoDB", "Chart.js"],
      github: "https://github.com/johndoe/social-dashboard",
      demo: "https://social-dash.vercel.app",
      featured: false,
    },
    {
      title: "Real-Time Chat Application",
      description: "A modern chat application with real-time messaging, file sharing, and video calls. Supports group chats and end-to-end encryption.",
      image: "/images/project4.jpg",
      tags: ["React", "Socket.io", "Node.js", "WebRTC", "Redis"],
      github: "https://github.com/johndoe/realtime-chat",
      demo: "https://chat-app-demo.vercel.app",
      featured: false,
    },
    {
      title: "Fitness Tracking App",
      description: "A mobile-responsive fitness app that helps users track workouts, nutrition, and progress with personalized recommendations.",
      image: "/images/project5.jpg",
      tags: ["React Native", "Firebase", "Redux", "Expo"],
      github: "https://github.com/johndoe/fitness-tracker",
      demo: "https://fitness-app-demo.vercel.app",
      featured: false,
    },
    {
      title: "Portfolio Generator",
      description: "An AI-powered portfolio generator that creates beautiful, responsive portfolios based on user data. Highly customizable and easy to deploy.",
      image: "/images/project6.jpg",
      tags: ["Next.js", "Tailwind", "Framer Motion", "TypeScript"],
      github: "https://github.com/johndoe/portfolio-generator",
      demo: "https://portfolio-gen.vercel.app",
      featured: true,
    },
  ],

  // ========== EXPERIENCE ==========
  experience: [
    {
      company: "Tech Innovations Inc.",
      position: "Senior Full Stack Developer",
      duration: "Jan 2022 - Present",
      location: "San Francisco, CA",
      description: "Leading development of enterprise-scale web applications, mentoring junior developers, and architecting scalable solutions. Reduced application load time by 60% and improved user engagement by 45%.",
      technologies: ["React", "Node.js", "AWS", "Docker", "PostgreSQL"],
      achievements: [
        "Led migration to microservices architecture, improving system reliability by 99.9%",
        "Implemented CI/CD pipeline, reducing deployment time from hours to minutes",
        "Mentored team of 5 junior developers"
      ]
    },
    {
      company: "Digital Solutions Ltd.",
      position: "Full Stack Developer",
      duration: "Jun 2020 - Dec 2021",
      location: "Remote",
      description: "Developed and maintained multiple client projects, focusing on performance optimization and user experience. Collaborated with cross-functional teams to deliver high-quality solutions.",
      technologies: ["React", "Express", "MongoDB", "Tailwind"],
      achievements: [
        "Built 15+ client projects with 100% on-time delivery",
        "Increased client satisfaction scores by 40%",
        "Optimized database queries, reducing response time by 70%"
      ]
    },
    {
      company: "StartupXYZ",
      position: "Frontend Developer",
      duration: "Jan 2019 - May 2020",
      location: "Austin, TX",
      description: "Developed responsive web applications and implemented new features for the company's main product. Worked closely with designers to create pixel-perfect implementations.",
      technologies: ["JavaScript", "React", "Redux", "SASS"],
      achievements: [
        "Redesigned main product UI, increasing user retention by 35%",
        "Implemented accessibility features, achieving WCAG 2.1 AA compliance",
        "Reduced bundle size by 45% through code optimization"
      ]
    },
  ],

  // ========== EDUCATION ==========
  education: [
    {
      institution: "University of California",
      degree: "Bachelor of Science in Computer Science",
      duration: "2015 - 2019",
      location: "Berkeley, CA",
      description: "Focused on software engineering, algorithms, and web development. Graduated with honors.",
      gpa: "3.8/4.0"
    },
  ],

  // ========== CERTIFICATIONS ==========
  certifications: [
    {
      name: "AWS Certified Solutions Architect",
      issuer: "Amazon Web Services",
      date: "2023",
      link: "https://aws.amazon.com/certification/"
    },
    {
      name: "Google Cloud Professional Developer",
      issuer: "Google Cloud",
      date: "2022",
      link: "https://cloud.google.com/certification"
    },
    {
      name: "Meta React Advanced Certification",
      issuer: "Meta",
      date: "2021",
      link: "https://www.coursera.org/"
    },
  ],

  // ========== TESTIMONIALS ==========
  testimonials: [
    {
      name: "Sarah Johnson",
      position: "CEO at Tech Innovations",
      company: "Tech Innovations Inc.",
      text: "John is an exceptional developer who consistently delivers high-quality work. His technical skills and problem-solving abilities are outstanding.",
      image: "/images/testimonial1.jpg",
      rating: 5
    },
    {
      name: "Michael Chen",
      position: "Product Manager",
      company: "Digital Solutions Ltd.",
      text: "Working with John was a pleasure. He's not only technically proficient but also great at communication and understanding business needs.",
      image: "/images/testimonial2.jpg",
      rating: 5
    },
    {
      name: "Emily Rodriguez",
      position: "Lead Designer",
      company: "StartupXYZ",
      text: "John brings designs to life with pixel-perfect precision. His attention to detail and commitment to excellence is remarkable.",
      image: "/images/testimonial3.jpg",
      rating: 5
    },
  ],

  // ========== SEO & META ==========
  seo: {
    title: "John Doe - Full Stack Developer Portfolio",
    description: "Full Stack Developer specializing in React, Node.js, and modern web technologies. View my projects and get in touch!",
    keywords: ["Full Stack Developer", "React", "Node.js", "Web Development", "JavaScript", "Portfolio"],
    ogImage: "/images/og-image.jpg", // Open Graph image for social sharing
  },

  // ========== ADDITIONAL SETTINGS ==========
  settings: {
    // Enable/disable sections
    showAbout: true,
    showSkills: true,
    showProjects: true,
    showExperience: true,
    showEducation: true,
    showCertifications: true,
    showTestimonials: true,
    showContact: true,
    
    // Theme colors (can be customized)
    theme: {
      primary: "#3b82f6",
      secondary: "#8b5cf6",
      accent: "#f59e0b",
    },
    
    // Contact form settings
    contactForm: {
      enabled: true,
      emailService: "formspree", // Options: 'formspree', 'emailjs', 'custom'
      formspreeEndpoint: "https://formspree.io/f/your-form-id", // Update with your Formspree ID
    },
  },
};

export default userData;