import React, { useState } from 'react';
// Lucide React icons are imported via a custom script tag in index.html to work without a build step.
// We must manually define the icons here because we are using simple script tags for deployment.
const { Briefcase, Award, GraduationCap, MapPin, Mail, Instagram, Phone, BookOpen, ChevronRight, ExternalLink } = lucide;

const App = () => {
  const [activeTab, setActiveTab] = useState('experience');
  
  // --- Education Data ---
  const educationData = [
    {
      level: "International AS & A Level (XII)",
      subjects: "Media Studies, Global Perspectives & Research, Maths",
      school: "Shikha Academy",
      details: "Expected Graduation: June 2026"
    },
    {
      level: "International GCSE (X)",
      subjects: "Grades: 3 A*, 1 A, 1 B",
      school: "Shikha Academy",
      details: "GPA: 3.94/4.0 (unweighted, U.S. scale)"
    }
  ];

  // --- Experience Data ---
  const experienceData = [
    {
      role: "Head Designer",
      company: "TUMO",
      period: "Jan 2025 - Mar 2025",
      link: "projects/tumo.html", // Placeholder: Will link to a dedicated project page
      visual: "TUMO (Marketing Design)" 
    },
    {
      role: "Content Creator Intern",
      company: "Plaksha University",
      period: "Sep 2025 - Oct 2025",
      link: "projects/plaksha.html", // Placeholder
      visual: "Plaksha (Content Creation)"
    },
    {
      role: "Social Media Content Creator",
      company: "Edtech Society",
      period: "Oct 2024 - Mar 2025",
      link: "projects/edtech.html", // Placeholder
      visual: "Edtech (Social Media Growth)"
    },
    {
      role: "Curriculum Development Intern",
      company: "Shikha Institute of Education",
      period: "Oct 2024 - Nov 2024",
      link: "projects/shikha.html", // Placeholder
      visual: "Curriculum (Design & Lesson Plans)"
    }
  ];

  // --- Achievement Data ---
  const achievementData = [
    {
      role: "Community Outreach Lead",
      company: "Municipal Public School",
      period: "Sep 2025 - Present",
      link: "achievements/outreach.html", // Placeholder
      visual: "Community Outreach"
    },
    {
      role: "Documentary Production (T4E)",
      company: "Intl. Conference",
      period: "Nov 2024 - Mar 2025",
      link: "achievements/docu.html", // Placeholder
      visual: "Documentary Production"
    },
    {
      role: "Film Opening Director",
      company: "AS Level Coursework",
      period: "Nov 2024 - Jan 2025",
      link: "achievements/film.html", // Placeholder
      visual: "Filmmaking"
    },
    {
      role: "Academic Research Analyst",
      company: "IIT Bombay Mentorship",
      period: "June 2024 - Jan 2025",
      link: "achievements/research.html", // Placeholder
      visual: "Academic Research"
    }
  ];

  // Component to render a clickable project card
  const ProjectCard = ({ role, company, period, link, visual }) => (
    <a 
      href={link} 
      className="group p-2 bg-[#222] hover:bg-[#2a2a2a] border border-[#333] hover:border-lavender/30 rounded-[2rem] transition-all duration-300 hover:-translate-y-1 block"
      onClick={(e) => {
        // We prevent the default navigation for demonstration,
        // but in the actual GitHub site, it will navigate to the linked page (e.g., projects/tumo.html)
        e.preventDefault(); 
        
        const messageBox = document.createElement('div');
        messageBox.className = 'fixed inset-0 flex items-center justify-center bg-black/70 z-50 animate-in fade-in duration-200';
        messageBox.innerHTML = `
          <div class="bg-charcoal p-6 rounded-2xl shadow-xl border border-lavender max-w-sm text-center transform scale-100">
            <h4 class="text-xl text-white font-bold mb-3">Project Link Clicked!</h4>
            <p class="text-gray-300 mb-4">Simulating navigation to <strong>${link}</strong> (the project details page).</p>
            <p class="text-gray-400 text-sm">You need to create the file <strong>${link}</strong> in your GitHub repository to make this link functional.</p>
            <button onclick="this.parentNode.parentNode.remove()" class="mt-4 px-6 py-2 bg-lavender text-charcoal rounded-full font-semibold hover:bg-white transition-colors">Close</button>
          </div>
        `;
        document.body.appendChild(messageBox);
      }}
    >
      <div className="relative w-full aspect-video rounded-3xl overflow-hidden mb-4 border border-[#3a3a3a]">
        {/* Placeholder for Project Visual */}
        <img 
          src={`https://placehold.co/400x200/2a2a2a/d4b9ff?text=${visual.replace(/\s/g, '+')}`} 
          alt={`Visual for ${role}`} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
        />
        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors flex items-end p-4">
          <span className="text-xs font-medium text-gray-300 bg-black/50 px-3 py-1 rounded-full border border-white/10 backdrop-blur-sm">{period}</span>
          <div className="ml-auto p-2 bg-white/10 rounded-full backdrop-blur-md opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0">
             <ExternalLink size={16} className="text-white" />
          </div>
        </div>
      </div>
      
      <div className="text-center p-2">
        <h3 className="text-xl font-serif text-white mb-1 group-hover:text-lavender transition-colors">{role}</h3>
        <p className="text-xs text-gray-500 uppercase tracking-wider">{company}</p>
      </div>
    </a>
  );

  return (
    <div className="min-h-screen bg-charcoal text-[#e0e0e0] font-sans selection:bg-lavender selection:text-charcoal pb-20">
      
      {/* Navbar / Header */}
      <nav className="w-full max-w-5xl mx-auto p-6 flex justify-between items-center z-50 relative">
        <div className="text-2xl font-serif font-bold tracking-tighter text-lavender">AM.</div>
        <div className="hidden md:flex gap-8 text-sm font-medium text-gray-400">
          <a href="#" className="hover:text-white transition-colors">Work</a>
          <a href="#" className="hover:text-white transition-colors">About</a>
          <a href="#contact" className="hover:text-white transition-colors">Contact</a>
        </div>
      </nav>

      <main className="max-w-4xl mx-auto px-6 mt-10">
        
        {/* Hero Section - About Me */}
        <section className="flex flex-col md:flex-row gap-12 items-center mb-24">
          <div className="w-full md:w-1/2 space-y-6 order-2 md:order-1">
            <div className="inline-block px-4 py-1.5 rounded-full bg-[#2a2a2a] border border-[#3a3a3a] text-xs font-medium text-lavender tracking-wide mb-2">
              BASED IN MUMBAI, INDIA
            </div>
            <h1 className="text-5xl md:text-6xl font-serif font-medium leading-tight text-white">
              Hi, I'm <span className="text-lavender italic">Aditya.</span> <br/>
              Graphic Designer & Storyteller.
            </h1>
            <p className="text-gray-400 text-lg leading-relaxed max-w-md">
              I blend visual aesthetics with meaningful narratives. From crafting brand identities to teaching design in underserved communities, I believe in the power of creativity to create impact.
            </p>
            
            <div className="flex gap-4 pt-4">
              <button className="px-8 py-3 bg-lavender text-charcoal rounded-full font-semibold hover:bg-white transition-all transform hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(212,185,255,0.3)]">
                Download Resume
              </button>
              
              {/* Quick Contact Icons */}
              <a href="mailto:adi.maur7@gmail.com" className="p-3 rounded-full bg-[#2a2a2a] text-white hover:bg-[#333] transition-colors border border-[#333]" title="Email Me">
                <Mail size={20} />
              </a>
              <a href="tel:+917977031905" className="p-3 rounded-full bg-[#2a2a2a] text-white hover:bg-[#333] transition-colors border border-[#333]" title="Call Me">
                <Phone size={20} />
              </a>
            </div>
          </div>

          {/* Profile Image Area */}
          <div className="w-full md:w-1/2 relative order-1 md:order-2">
            <div className="relative aspect-[4/5] rounded-[3rem] overflow-hidden bg-[#222] border border-[#333] shadow-2xl shadow-lavender/10 group">
               <img 
                 src="Untitled design.jpg" 
                 alt="Aditya Maurya Profile" 
                 className="absolute inset-0 w-full h-full object-cover opacity-90 transition-transform duration-700 group-hover:scale-105" 
               />
               <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-transparent to-transparent opacity-60"></div>
            </div>
          </div>
        </section>

        {/* --- Education Section --- */}
        <section className="mb-24">
          <div className="flex items-center gap-4 mb-10 border-b border-[#333] pb-4">
            <div className="p-2 bg-[#2a2a2a] rounded-lg text-lavender">
                <BookOpen size={24}/>
            </div>
            <h2 className="text-3xl font-serif font-medium text-white">Education & Credentials</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {educationData.map((item, index) => (
              <div key={index} className="p-8 bg-dark-secondary border border-[#333] rounded-[2rem] hover:border-lavender/30 transition-colors">
                <p className="text-xs font-bold text-lavender uppercase tracking-wider mb-2">{item.school}</p>
                <h3 className="text-xl font-serif text-white mb-4">{item.level}</h3>
                <div className="space-y-3 text-gray-400 text-sm">
                    <div className="flex gap-3 items-start">
                        <span className="w-1.5 h-1.5 mt-1.5 rounded-full bg-gray-600 flex-shrink-0"></span>
                        <p><span className="text-gray-300 font-medium">Subjects:</span> {item.subjects}</p>
                    </div>
                    <div className="flex gap-3 items-start">
                        <span className="w-1.5 h-1.5 mt-1.5 rounded-full bg-gray-600 flex-shrink-0"></span>
                         <p>{item.details}</p>
                    </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Interactive Experience/Achievements Section */}
        <section className="mb-32">
          <div className="flex justify-center mb-12">
            <div className="p-1.5 bg-[#252525] rounded-full inline-flex border border-[#333] shadow-lg">
              <button 
                onClick={() => setActiveTab('experience')}
                className={`px-8 py-3 rounded-full text-sm font-semibold transition-all duration-300 ${
                  activeTab === 'experience' 
                    ? 'bg-lavender text-charcoal shadow-md' 
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                Past Experience
              </button>
              <button 
                onClick={() => setActiveTab('achievements')}
                className={`px-8 py-3 rounded-full text-sm font-semibold transition-all duration-300 ${
                  activeTab === 'achievements' 
                    ? 'bg-lavender text-charcoal shadow-md' 
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                Achievements
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {activeTab === 'experience' ? (
              experienceData.map((item, index) => (
                <ProjectCard key={index} {...item} />
              ))
            ) : (
              achievementData.map((item, index) => (
                <ProjectCard key={index} {...item} />
              ))
            )}
          </div>
        </section>

        {/* Footer with Contact Actions */}
        <footer id="contact" className="py-16 border-t border-[#333] relative">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-4xl font-serif text-white mb-6">Let's create something beautiful.</h2>
            <p className="text-gray-400 mb-10 leading-relaxed">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center items-center gap-6 mb-12">
               {/* Call Action */}
               <a 
                 href="tel:+917977031905" 
                 className="flex items-center gap-4 px-8 py-4 bg-dark-secondary border border-[#333] rounded-2xl hover:bg-[#2a2a2a] hover:border-lavender transition-all group w-full sm:w-auto"
               >
                 <div className="p-3 bg-charcoal rounded-full text-lavender group-hover:bg-lavender group-hover:text-charcoal transition-colors">
                   <Phone size={20} />
                 </div>
                 <div className="text-left">
                   <p className="text-xs text-gray-500 uppercase tracking-wider">Call Me</p>
                   <p className="text-white font-medium">+91 7977031905</p>
                 </div>
               </a>

               {/* Email Action */}
               <a 
                 href="mailto:adi.maur7@gmail.com" 
                 className="flex items-center gap-4 px-8 py-4 bg-dark-secondary border border-[#333] rounded-2xl hover:bg-[#2a2a2a] hover:border-lavender transition-all group w-full sm:w-auto"
               >
                 <div className="p-3 bg-charcoal rounded-full text-lavender group-hover:bg-lavender group-hover:text-charcoal transition-colors">
                   <Mail size={20} />
                 </div>
                 <div className="text-left">
                   <p className="text-xs text-gray-500 uppercase tracking-wider">Email Me</p>
                   <p className="text-white font-medium">adi.maur7@gmail.com</p>
                 </div>
               </a>
            </div>

            <div className="flex justify-center gap-8 mb-8">
                <a href="#" className="text-gray-500 hover:text-lavender transition-colors text-sm">LinkedIn</a>
                <a href="#" className="text-gray-500 hover:text-lavender transition-colors text-sm">Instagram</a>
                <a href="#" className="text-gray-500 hover:text-lavender transition-colors text-sm">Behance</a>
            </div>
            
            <div className="text-gray-600 text-xs tracking-wide">
              © 2025 Aditya Maurya. All Rights Reserved.
            </div>
          </div>
        </footer>

      </main>
    </div>
  );
};

// ReactDOM.render() replacement for React 18
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);