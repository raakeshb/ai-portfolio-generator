'use client';

import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Experience from '../components/Experience';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import { userData } from '../config/userData';

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Background Elements */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-dark via-dark-light to-dark" />
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }} />
      </div>

      <Navbar />
      <Hero />
      
      {userData.settings.showAbout && <About />}
      {userData.settings.showSkills && <Skills />}
      {userData.settings.showProjects && <Projects />}
      {userData.settings.showExperience && <Experience />}
      {userData.settings.showContact && <Contact />}
      
      <Footer />
    </main>
  );
}