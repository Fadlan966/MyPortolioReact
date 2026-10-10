import React, { useState, useEffect } from 'react';
import { 
  Terminal, 
  Code, 
  ShieldCheck, 
  Mail, 
  Github, 
  Linkedin, 
  ExternalLink,
  ChevronRight,
  MonitorSmartphone,
  Activity,
  Layers,
  Zap,
  Briefcase,
  GraduationCap,
  FileText
} from 'lucide-react';
import fotoFadlan from './images/foto-fadlan.jpg';

const CustomStyles = () => (
  <style dangerouslySetInnerHTML={{__html: `
    @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;600;700&family=Share+Tech+Mono&display=swap');

    :root {
      --neon-cyan: #00f3ff;
      --neon-purple: #bc13fe;
      --dark-bg: #030712;
    }

    body {
      background-color: var(--dark-bg);
      color: #e5e7eb;
      font-family: 'Space Grotesk', sans-serif;
      overflow-x: hidden;
    }

    .font-mono {
      font-family: 'Share Tech Mono', monospace;
    }

    .bg-grid {
      background-size: 40px 40px;
      background-image: 
        linear-gradient(to right, rgba(0, 243, 255, 0.05) 1px, transparent 1px),
        linear-gradient(to bottom, rgba(0, 243, 255, 0.05) 1px, transparent 1px);
      mask-image: radial-gradient(ellipse at center, black 40%, transparent 80%);
      -webkit-mask-image: radial-gradient(ellipse at center, black 40%, transparent 80%);
    }

    .glitch-text {
      position: relative;
      color: white;
    }
    
    .glitch-text::before, .glitch-text::after {
      content: attr(data-text);
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      opacity: 0.8;
    }
    
    .glitch-text::before {
      color: var(--neon-cyan);
      z-index: -1;
      transform: translate(-2px, 2px);
      animation: glitch-anim 2s infinite alternate-reverse;
    }
    
    .glitch-text::after {
      color: var(--neon-purple);
      z-index: -2;
      transform: translate(2px, -2px);
      animation: glitch-anim 3s infinite alternate;
    }

    @keyframes glitch-anim {
      0% { clip-path: inset(20% 0 80% 0); transform: translate(-2px, 1px); }
      20% { clip-path: inset(60% 0 10% 0); transform: translate(2px, -1px); }
      40% { clip-path: inset(40% 0 50% 0); transform: translate(-2px, 2px); }
      60% { clip-path: inset(80% 0 5% 0); transform: translate(2px, -2px); }
      80% { clip-path: inset(10% 0 70% 0); transform: translate(-1px, 1px); }
      100% { clip-path: inset(30% 0 50% 0); transform: translate(1px, -1px); }
    }

    .glowing-border {
      position: relative;
    }
    
    .glowing-border::before {
      content: '';
      position: absolute;
      top: -1px; left: -1px; right: -1px; bottom: -1px;
      background: linear-gradient(45deg, var(--neon-cyan), var(--neon-purple), transparent);
      z-index: -1;
      border-radius: inherit;
      opacity: 0;
      transition: opacity 0.3s ease;
    }
    
    .glowing-border:hover::before {
      opacity: 1;
      animation: spin-bg 3s linear infinite;
    }

    .neon-glow {
      box-shadow: 0 0 10px rgba(0, 243, 255, 0.2), 
                  0 0 20px rgba(0, 243, 255, 0.1), 
                  inset 0 0 15px rgba(0, 243, 255, 0.05);
    }
    
    .neon-text {
      text-shadow: 0 0 5px rgba(0, 243, 255, 0.5), 0 0 10px rgba(0, 243, 255, 0.3);
    }

    .scanline {
      width: 100%;
      height: 100px;
      z-index: 9999;
      position: fixed;
      pointer-events: none;
      background: linear-gradient(0deg, rgba(0,0,0,0) 0%, rgba(0,243,255,0.1) 50%, rgba(0,0,0,0) 100%);
      opacity: 0.1;
      animation: scanline 8s linear infinite;
    }

    @keyframes scanline {
      0% { top: -100px; }
      100% { top: 100%; }
    }
  `}} />
);

const experiences = [
  {
    role: "QA Intern",
    company: "Qbit",
    type: "Internship",
    description: "Tested the Qbook, AirQ, Wals, GripReserve, and AIDO systems through manual and automated test scenarios, from planning to bug verification.",
    icon: <Briefcase className="text-cyan-400 w-5 h-5" />
  },
  {
    role: "QA Intern",
    company: "IMP (IT Solution)",
    type: "PKL Program",
    description: "Joined the PKL program as a QA intern at an IT solution company, testing the HIPA ITS, Sibertren, and Pusaka Kemenag applications and documenting results in Google Sheets and Microsoft Word.",
    icon: <Briefcase className="text-purple-400 w-5 h-5" />
  }
];

const projects = [
  {
    title: "Qbook",
    company: "Qbit",
    category: "Software System",
    description: "Ensured high-quality delivery of the Qbook software system through rigorous manual and automated testing scenarios.",
    icon: <Terminal className="text-cyan-400 w-6 h-6" />,
    color: "from-cyan-500/20 to-blue-500/5"
  },
  {
    title: "AirQ",
    company: "Qbit",
    category: "Queuing System",
    description: "Tested and validated the AirQ queuing system, focusing on real-time data sync, load handling, and user experience.",
    icon: <Layers className="text-purple-400 w-6 h-6" />,
    color: "from-purple-500/20 to-pink-500/5"
  },
  {
    title: "Wals",
    company: "Qbit",
    category: "Loyalty System",
    description: "Performed comprehensive quality assurance for Wals loyalty platform, securing point calculations and reward distributions.",
    icon: <Zap className="text-yellow-400 w-6 h-6" />,
    color: "from-yellow-500/20 to-orange-500/5"
  },
  {
    title: "GripReserve",
    company: "Qbit",
    category: "System Integration",
    description: "Verified seamless API integrations and data consistency for the GripReserve booking and reservation platform.",
    icon: <Activity className="text-green-400 w-6 h-6" />,
    color: "from-green-500/20 to-emerald-500/5"
  },
  {
    title: "AIDO",
    company: "Qbit",
    category: "Health-Tech Integration",
    description: "Conducted critical testing for AIDO health-tech systems, ensuring HIPAA compliance, secure data flow, and system reliability.",
    icon: <MonitorSmartphone className="text-rose-400 w-6 h-6" />,
    color: "from-rose-500/20 to-red-500/5"
  },
  {
    title: "HIPA ITS",
    company: "IMP",
    category: "Web Application",
    description: "Tested the HIPA ITS application for one month, documenting test results and findings in Google Sheets.",
    icon: <Code className="text-blue-400 w-6 h-6" />,
    color: "from-blue-500/20 to-indigo-500/5"
  },
  {
    title: "Sibertren",
    company: "IMP",
    category: "Web Application",
    description: "Tested the Sibertren application for two months, documenting test results and findings in Google Sheets.",
    icon: <ShieldCheck className="text-teal-400 w-6 h-6" />,
    color: "from-teal-500/20 to-cyan-500/5"
  },
  {
    title: "Pusaka Kemenag",
    company: "IMP",
    category: "Web Application",
    description: "Tested the Pusaka Kemenag application for 10 days, documenting test results and findings in Microsoft Word.",
    icon: <FileText className="text-amber-400 w-6 h-6" />,
    color: "from-amber-500/20 to-yellow-500/5"
  }
];

const skills = [
  { name: "QA Engineering", level: 95 },
  { name: "Test Scenarios", level: 90 },
  { name: "API Testing", level: 85 },
  { name: "GitHub / Vercel", level: 80 },
  { name: "Trello / Agile", level: 90 }
];

const Navbar = () => (
  <nav className="fixed top-0 left-0 w-full z-50 p-6 flex justify-between items-center bg-gray-950/80 backdrop-blur-md border-b border-white/5">
    <div className="flex items-center gap-2">
      <ShieldCheck className="text-cyan-400 w-8 h-8" />
      <span className="font-bold text-xl tracking-wider text-white">MF<span className="text-cyan-400">.</span></span>
    </div>
    <div className="hidden md:flex gap-8 text-sm font-mono tracking-widest text-gray-400">
      <a href="#home" className="hover:text-cyan-400 transition-colors">01. HOME</a>
      <a href="#about" className="hover:text-cyan-400 transition-colors">02. ABOUT</a>
      <a href="#experience" className="hover:text-cyan-400 transition-colors">03. EXPERIENCE</a>
      <a href="#projects" className="hover:text-cyan-400 transition-colors">04. PROJECTS</a>
      <a href="#contact" className="hover:text-cyan-400 transition-colors">05. CONTACT</a>
    </div>
  </nav>
);

export default function App() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="relative min-h-screen selection:bg-cyan-500/30 selection:text-cyan-200">
      <CustomStyles />
      <div className="scanline"></div>
      
      {/* Dynamic Background Spotlight */}
      <div 
        className="fixed inset-0 z-0 pointer-events-none opacity-30 transition-opacity duration-300"
        style={{
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(0, 243, 255, 0.05), transparent 40%)`
        }}
      />
      
      <Navbar />

      <main className="relative z-10 container mx-auto px-6 pt-32 pb-20 max-w-6xl">
        
        <section id="home" className="min-h-[80vh] flex flex-col justify-center relative">
          <div className="absolute inset-0 bg-grid z-[-1] opacity-40"></div>
          
          <div className="space-y-4">
            <p className="font-mono text-cyan-400 tracking-widest uppercase text-sm md:text-base">
              &gt; Initializing protocol: User_Profile
            </p>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter">
              <span className="block text-gray-400">HELLO, I'M</span>
              <span className="block glitch-text mt-2" data-text="MUHAMMAD FADLAN">MUHAMMAD FADLAN</span>
            </h1>
            <div className="flex items-center gap-4 mt-6">
              <div className="h-px bg-cyan-500/50 flex-grow max-w-[100px]"></div>
              <h2 className="text-xl md:text-3xl text-gray-300 font-light tracking-wide">
                Quality Assurance Student <span className="text-cyan-400">@ Universitas Bina Sarana Informatika</span>
              </h2>
            </div>
            <p className="max-w-2xl text-gray-400 mt-8 text-lg leading-relaxed">
              Securing digital frontiers through rigorous testing. I ensure software systems operate flawlessly, bridging the gap between development and perfect user experience.
            </p>
            
            <div className="pt-8 flex gap-4">
              <a href="#projects" className="group relative px-8 py-3 bg-cyan-500/10 text-cyan-400 font-mono text-sm border border-cyan-500/50 hover:bg-cyan-500/20 transition-all uppercase tracking-widest overflow-hidden">
                <span className="relative z-10 flex items-center gap-2">
                  View Systems <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-cyan-400/20 translate-y-[100%] group-hover:translate-y-0 transition-transform"></div>
              </a>
            </div>
          </div>
        </section>

        <section id="about" className="py-32">
          <div className="flex items-center gap-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-mono neon-text text-white">02. SYSTEM_INFO</h2>
            <div className="h-px bg-white/10 flex-grow"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-[320px_1fr] gap-12 md:gap-16 items-center mb-24">
            <div className="relative mx-auto w-full max-w-[320px] group">
              <div className="absolute -inset-1 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-2xl blur opacity-40 group-hover:opacity-70 transition-opacity duration-300"></div>
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden border border-cyan-500/40 bg-[#0a0f1a]">
                <img src={fotoFadlan} alt="Foto Muhammad Fadlan" className="w-full h-full object-cover object-top" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#030712]/80 via-transparent to-transparent"></div>
                <div className="absolute bottom-3 left-4 right-4 flex justify-between font-mono text-xs text-cyan-400">
                  <span>ID: M_FADLAN</span>
                  <span>● ONLINE</span>
                </div>
              </div>
              <div className="absolute -top-2 -left-2 w-6 h-6 border-t-2 border-l-2 border-cyan-400"></div>
              <div className="absolute -bottom-2 -right-2 w-6 h-6 border-b-2 border-r-2 border-purple-400"></div>
            </div>

            <div className="space-y-6">
              <p className="font-mono text-cyan-400 tracking-widest text-sm">&gt; whoami</p>
              <p className="text-gray-300 leading-relaxed text-lg">
                I am a Software Engineering graduate with a strong interest in Quality Assurance and software testing. Through my academic background and internship experiences, I have developed skills in manual testing, bug reporting, test case execution, and quality control. I am detail-oriented, analytical, and committed to ensuring software products meet high-quality standards and provide the best user experience.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div className="space-y-6 text-gray-400 leading-relaxed text-lg">
              <div className="grid grid-cols-2 gap-4 pt-6">
                <div className="flex items-center gap-3 p-3 bg-white/[0.02] border border-white/5 rounded-lg">
                  <Github className="w-6 h-6 text-gray-300" />
                  <span className="font-mono text-sm">GitHub</span>
                </div>
                <div className="flex items-center gap-3 p-3 bg-white/[0.02] border border-white/5 rounded-lg">
                  <MonitorSmartphone className="w-6 h-6 text-gray-300" />
                  <span className="font-mono text-sm">Vercel</span>
                </div>
                <div className="flex items-center gap-3 p-3 bg-white/[0.02] border border-white/5 rounded-lg">
                  <Layers className="w-6 h-6 text-gray-300" />
                  <span className="font-mono text-sm">Trello</span>
                </div>
                <div className="flex items-center gap-3 p-3 bg-white/[0.02] border border-white/5 rounded-lg">
                  <Code className="w-6 h-6 text-gray-300" />
                  <span className="font-mono text-sm">Agile/Scrum</span>
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              {skills.map((skill, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between font-mono text-sm">
                    <span className="text-gray-300">{skill.name}</span>
                    <span className="text-cyan-400">{skill.level}%</span>
                  </div>
                  <div className="h-1.5 w-full bg-gray-900 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-gradient-to-r from-cyan-500 to-purple-500"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="experience" className="py-32">
          <div className="flex items-center gap-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-mono neon-text text-white">03. EXPERIENCE_LOG</h2>
            <div className="h-px bg-white/10 flex-grow"></div>
          </div>

          <div className="relative border-l border-cyan-500/30 ml-3 space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className="relative pl-10">
                <div className="absolute -left-[13px] top-1 w-6 h-6 rounded-full bg-[#0a0f1a] border border-cyan-500/50 flex items-center justify-center neon-glow">
                  {exp.icon}
                </div>
                <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
                  <h3 className="text-2xl font-bold text-white">{exp.role}</h3>
                  <span className="text-cyan-400 text-lg">@ {exp.company}</span>
                </div>
                <p className="font-mono text-xs text-purple-400 tracking-wider uppercase mt-2">{exp.type}</p>
                <p className="text-gray-400 leading-relaxed mt-4 max-w-2xl">{exp.description}</p>
              </div>
            ))}

            <div className="relative pl-10">
              <div className="absolute -left-[13px] top-1 w-6 h-6 rounded-full bg-[#0a0f1a] border border-cyan-500/50 flex items-center justify-center neon-glow">
                <GraduationCap className="text-green-400 w-5 h-5" />
              </div>
              <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
                <h3 className="text-2xl font-bold text-white">Student</h3>
                <span className="text-cyan-400 text-lg">@ Universitas Bina Sarana Informatika</span>
              </div>
              <p className="font-mono text-xs text-green-400 tracking-wider uppercase mt-2">Currently studying</p>
            </div>
          </div>
        </section>

        <section id="projects" className="py-32">
          <div className="flex items-center gap-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-mono neon-text text-white">04. SECURED_PROJECTS</h2>
            <div className="h-px bg-white/10 flex-grow"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <div 
                key={index} 
                className="glowing-border group bg-[#0a0f1a] rounded-xl p-8 border border-white/5 flex flex-col h-full hover:-translate-y-2 transition-transform duration-300"
              >
                <div className="flex justify-between items-start mb-6">
                  <div className={`p-3 rounded-lg bg-gradient-to-br ${project.color} border border-white/5`}>
                    {project.icon}
                  </div>
                  <ExternalLink className="w-5 h-5 text-gray-600 group-hover:text-cyan-400 transition-colors cursor-pointer" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
                <p className="font-mono text-xs text-cyan-500/80 mb-4 tracking-wider uppercase">{project.category}</p>
                <p className="text-gray-400 text-sm leading-relaxed flex-grow">
                  {project.description}
                </p>
                <div className="mt-6 pt-4 border-t border-white/5 flex justify-between items-center text-xs font-mono text-gray-500">
                  <span>Status: <span className="text-green-400">Verified</span></span>
                  <span>{project.company}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="contact" className="py-32 max-w-2xl mx-auto text-center">
          <p className="font-mono text-cyan-400 tracking-widest uppercase text-sm mb-4">
            05. ESTABLISH_CONNECTION
          </p>
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white">Ready to Secure Your System?</h2>
          <p className="text-gray-400 mb-12 text-lg">
            Currently open for new opportunities and collaborations. Whether you have a question about my QA process or just want to say hi, my inbox is always open.
          </p>
          
          <a 
            href="mailto:contact@example.com" 
            className="inline-flex items-center gap-3 px-8 py-4 bg-transparent border-2 border-cyan-500/50 text-cyan-400 font-mono hover:bg-cyan-500/10 hover:border-cyan-400 transition-all neon-glow rounded-sm"
          >
            <Mail className="w-5 h-5" />
            INITIATE_CONTACT
          </a>
        </section>

      </main>

      {/* Footer */}
      <footer className="border-t border-white/5 py-8 text-center text-sm font-mono text-gray-600 relative z-10">
        <p>Designed & Built by Muhammad Fadlan</p>
        <p className="mt-2 text-xs opacity-50">© {new Date().getFullYear()} - SYSTEM V1.0</p>
      </footer>
    </div>
  );
}