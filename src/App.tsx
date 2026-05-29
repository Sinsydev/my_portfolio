import { useEffect, useState } from 'react';

function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('fade-in-visible');
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    document.querySelectorAll('.fade-in-section').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#F9FAFB] text-[#1F2937] font-sans">
      <header className={`sticky top-0 z-50 border-b transition-all duration-500 backdrop-blur-md ${isScrolled ? 'bg-white/90 border-gray-200 shadow-sm' : 'bg-white/70 border-gray-200/60'}`}>
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="flex items-center justify-between py-5">
            <div className="text-3xl font-black tracking-tight">IAS</div>

            <nav className="hidden md:flex items-center gap-10 text-sm font-semibold uppercase tracking-[0.25em] text-[#334155]" aria-label="Primary navigation">
              <a href="#about" className="hover:underline hover:decoration-[#3B82F6] hover:underline-offset-4 transition-all duration-500">About</a>
              <a href="#projects" className="hover:underline hover:decoration-[#3B82F6] hover:underline-offset-4 transition-all duration-500">Projects</a>
              <a href="#case-studies" className="hover:underline hover:decoration-[#3B82F6] hover:underline-offset-4 transition-all duration-500">Case Studies</a>
              <a href="#experience" className="hover:underline hover:decoration-[#3B82F6] hover:underline-offset-4 transition-all duration-500">Experience</a>
              <a href="https://drive.google.com/file/d/13bZvGrQFDuZ4rnvOw3xlcxC_mQWaRv4i/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-5 py-2 border border-[#3B82F6] text-[#1F2937] rounded-md text-sm font-semibold hover:bg-[#EFF6FF] transition-all duration-500">
                Resume
              </a>
            </nav>

            <button
              type="button"
              aria-controls="mobile-navigation"
              aria-expanded={menuOpen}
              aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              onClick={() => setMenuOpen((prev) => !prev)}
              className="md:hidden inline-flex items-center justify-center rounded-full border border-gray-200 px-4 py-2 text-sm font-semibold bg-white/90 shadow-sm hover:bg-[#F8FAFC] transition-all duration-200"
            >
              {menuOpen ? 'Close' : 'Menu'}
            </button>
          </div>

          <nav
            id="mobile-navigation"
            className={`md:hidden overflow-hidden transition-[max-height] duration-300 ${menuOpen ? 'max-h-96 pb-5' : 'max-h-0'}`}
            aria-label="Mobile navigation"
          >
            <div className="flex flex-col gap-4 text-sm font-semibold uppercase tracking-[0.25em] text-[#334155] overflow-hidden">
              <a href="#about" onClick={() => setMenuOpen(false)} className="block hover:underline hover:decoration-[#3B82F6] hover:underline-offset-4 transition-all duration-500">About</a>
              <a href="#projects" onClick={() => setMenuOpen(false)} className="block hover:underline hover:decoration-[#3B82F6] hover:underline-offset-4 transition-all duration-500">Projects</a>
              <a href="#case-studies" onClick={() => setMenuOpen(false)} className="block hover:underline hover:decoration-[#3B82F6] hover:underline-offset-4 transition-all duration-500">Case Studies</a>
              <a href="#experience" onClick={() => setMenuOpen(false)} className="block hover:underline hover:decoration-[#3B82F6] hover:underline-offset-4 transition-all duration-500">Experience</a>
              <a href="https://drive.google.com/file/d/13bZvGrQFDuZ4rnvOw3xlcxC_mQWaRv4i/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-5 py-2 border border-[#3B82F6] text-[#1F2937] rounded-md text-sm font-semibold hover:bg-[#EFF6FF] transition-all duration-500">
                Resume
              </a>
            </div>
          </nav>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 md:px-12">
        <section className="fade-in-section py-24 md:py-40 opacity-0">
          <div className="max-w-5xl space-y-8 md:space-y-10">
            <div className="space-y-5">
              <h1 className="text-5xl md:text-7xl font-black leading-tight tracking-tight">
                Ismail<br />Aminu Said
              </h1>
              <div className="w-20 h-1 rounded-full bg-[#3B82F6]/20"></div>
            </div>

            <p className="text-lg md:text-xl font-light leading-relaxed text-[#475569] max-w-3xl">
              Frontend Software Engineer building accessible, performant, and refined experiences with React and TypeScript.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-8">
              <a href="#projects" className="inline-flex items-center justify-center px-8 py-4 border border-[#1F2937] text-[#1F2937] font-semibold rounded-xl hover:border-[#3B82F6] hover:bg-[#EFF6FF] transition-all duration-500 ease-out">
                View My Work
              </a>
              <a href="mailto:ismail@example.com" className="inline-flex items-center justify-center px-8 py-4 bg-[#1F2937] text-white font-semibold rounded-xl hover:bg-[#111827] transition-all duration-500 ease-out">
                Get In Touch
              </a>
            </div>
          </div>
        </section>

        <section id="about" className="fade-in-section py-24 md:py-40 border-t border-gray-200 opacity-0">
          <div className="space-y-14">
            <div className="space-y-5 max-w-4xl">
              <h2 className="text-5xl md:text-6xl font-black tracking-tight">About Me</h2>
              <div className="w-16 h-1 rounded-full bg-[#3B82F6]/20"></div>
            </div>

            <div className="space-y-8 max-w-4xl text-[#475569]">
              <p className="text-lg md:text-xl font-light leading-relaxed">
                I'm a Frontend Software Engineer based in Nigeria, focused on building accessible, scalable, and user-friendly web applications with React, TypeScript, and modern frontend technologies.
              </p>
              <p className="text-lg md:text-xl font-light leading-relaxed">
                I enjoy turning ideas into reliable digital products that balance performance, usability, and clean engineering. My experience includes platforms for real estate, education, transportation, and operational systems.
              </p>
              <p className="text-lg md:text-xl font-light leading-relaxed">
                I work comfortably in remote and collaborative environments, where I value clear communication, ownership, documentation, and continuous learning.
              </p>
              <p className="text-lg md:text-xl font-light leading-relaxed">
                I'm currently focused on growing as a frontend engineer while building modern web applications that are scalable, accessible, and production-ready.
              </p>
            </div>
          </div>
        </section>

        <section id="experience" className="fade-in-section py-24 md:py-40 border-t border-gray-200 opacity-0">
          <div className="mb-16 md:mb-24">
            <h2 className="text-5xl md:text-6xl font-black tracking-tight">Experience</h2>
            <div className="w-16 h-1 rounded-full bg-[#3B82F6]/20 mt-4"></div>
          </div>

          <div className="space-y-20">
            <div className="space-y-6 pb-12 border-b border-gray-200">
              <div className="grid md:grid-cols-3 gap-8 md:gap-16 items-start">
                <div className="md:col-span-2">
                  <h3 className="text-2xl md:text-3xl font-bold">Frontend Software Engineer</h3>
                  <p className="text-lg font-light text-[#475569]">Agile Engineering & Technical Services ltd.</p>
                </div>
                <p className="text-sm font-semibold tracking-wide text-[#64748B] md:text-right">2023 - 2024</p>
              </div>
              <ul className="space-y-4 text-lg font-light leading-relaxed text-[#475569] md:col-span-2">
                <li className="flex gap-4">
                  <span className="text-[#1F2937] font-bold shrink-0">-&gt;</span>
                  <span>Built scalable and responsive frontend applications using React, TypeScript, and modern web technologies..</span>
                </li>
                <li className="flex gap-4">
                  <span className="text-[#1F2937] font-bold shrink-0">-&gt;</span>
                  <span>Focused on frontend performance optimization, reusable component architecture, and accessible user experiences.</span>
                </li>
                <li className="flex gap-4">
                  <span className="text-[#1F2937] font-bold shrink-0">-&gt;</span>
                  <span>Collaborated within cross-functional teams to improve development workflows, maintain UI consistency, and deliver reliable production-ready features.</span>
                </li>
              </ul>
            </div>

            <div className="space-y-6 pb-12 border-b border-gray-200">
              <div className="grid md:grid-cols-3 gap-8 md:gap-16 items-start">
                <div className="md:col-span-2">
                  <h3 className="text-2xl md:text-3xl font-bold"> Software Engineer</h3>
                  <p className="text-lg font-light text-[#475569]"> Kt Almadina Motors International ltd.</p>
                </div>
                <p className="text-sm font-semibold tracking-wide text-[#64748B] md:text-right">2022 - 2023</p>
              </div>
              <ul className="space-y-4 text-lg font-light leading-relaxed text-[#475569] md:col-span-2">
                <li className="flex gap-4">
                  <span className="text-[#1F2937] font-bold shrink-0">-&gt;</span>
                  <span> Developed a responsive frontend platform for showcasing vehicle listings and improving customer interaction with the business online.</span>
                </li>
                <li className="flex gap-4">
                  <span className="text-[#1F2937] font-bold shrink-0">-&gt;</span>
                  <span> Built search and filtering functionality to enhance vehicle discovery, navigation flow, and mobile user experience across devices.</span>
                </li>
                <li className="flex gap-4">
                  <span className="text-[#1F2937] font-bold shrink-0">-&gt;</span>
                  <span> Optimized frontend performance and implemented reusable UI components using React, TypeScript, Tailwind CSS, and REST APIs.</span>
                </li>
              </ul>
            </div>

            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-8 md:gap-16 items-start">
                <div className="md:col-span-2">
                  <h3 className="text-2xl md:text-3xl font-bold">Frontend Developer</h3>
                  <p className="text-lg font-light text-[#475569]"> BB Luxury Apartment & Housing Estate</p>
                </div>
                <p className="text-sm font-semibold tracking-wide text-[#64748B] md:text-right">2020 - 2021</p>
              </div>
              <ul className="space-y-4 text-lg font-light leading-relaxed text-[#475569] md:col-span-2">
                <li className="flex gap-4">
                  <span className="text-[#1F2937] font-bold shrink-0">-&gt;</span>
                  <span>Delivered polished client websites using clean HTML, CSS, and JavaScript.</span>
                </li>
                <li className="flex gap-4">
                  <span className="text-[#1F2937] font-bold shrink-0">-&gt;</span>
                  <span>Advanced into React by contributing to a shared component library.</span>
                </li>
                <li className="flex gap-4">
                  <span className="text-[#1F2937] font-bold shrink-0">-&gt;</span>
                  <span>Maintained code quality through reviews and rapid bug resolution.</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section id="projects" className="fade-in-section py-24 md:py-40 border-t border-gray-200 opacity-0">
          <div className="mb-16 md:mb-24">
            <h2 className="text-5xl md:text-6xl font-black tracking-tight">Featured Projects</h2>
            <div className="w-16 h-1 rounded-full bg-[#3B82F6]/20 mt-4"></div>
          </div>

          <article className="mb-24 md:mb-32">
            <div className="mb-8 max-w-3xl">
              <h3 className="text-3xl md:text-4xl font-bold mb-4">Live Client Projects</h3>
              <p className="text-sm text-[#64748B] leading-relaxed">
                Each live project includes a working demo plus a GitHub code link so visitors can explore the implementation and case study details.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 md:gap-12">
              <div className="group p-8 border border-gray-200 rounded-3xl bg-white shadow-sm hover:-translate-y-2 hover:shadow-lg transition-all duration-500 ease-out">
                <div className="space-y-5">
                  <p className="text-sm uppercase tracking-[0.3em] text-[#64748B]">Live</p>
                  <h4 className="text-2xl md:text-3xl font-bold">Agile Engineering</h4>
                  <p className="text-lg font-light leading-relaxed text-[#475569]">
                    Modern web platform delivering innovative solutions with seamless user experience and robust backend integration.
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <a href="https://agileengineeringandtechnicalservices.netlify.app" target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-6 py-3 border border-gray-200 font-semibold text-sm rounded-xl hover:border-[#3B82F6] hover:bg-[#EFF6FF] transition-all duration-500 ease-out">
                      Live Demo
                    </a>
                    <a href="https://github.com/Sinsydev/agile-engineering-and-technical-services" target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-6 py-3 border border-gray-200 font-semibold text-sm rounded-xl hover:border-[#3B82F6] hover:bg-[#EFF6FF] transition-all duration-500 ease-out">
                      View Code
                    </a>
                  </div>
                </div>
              </div>
              <div className="group p-8 border border-gray-200 rounded-3xl bg-white shadow-sm hover:-translate-y-2 hover:shadow-lg transition-all duration-500 ease-out">
                <div className="space-y-5">
                  <p className="text-sm uppercase tracking-[0.3em] text-[#64748B]">Live</p>
                  <h4 className="text-2xl md:text-3xl font-bold">KT Almadina Motors</h4>
                  <p className="text-lg font-light leading-relaxed text-[#475569]">
                    Automotive e-commerce platform showcasing vehicle inventory with advanced filtering and purchasing capabilities.
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <a href="https://kt-almadina-international-ltd.netlify.app" target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-6 py-3 border border-gray-200 font-semibold text-sm rounded-xl hover:border-[#3B82F6] hover:bg-[#EFF6FF] transition-all duration-500 ease-out">
                      Live Demo
                    </a>
                    <a href=" https://github.com/Sinsydev/Kt-almadina-motors-internation-limited" target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-6 py-3 border border-gray-200 font-semibold text-sm rounded-xl hover:border-[#3B82F6] hover:bg-[#EFF6FF] transition-all duration-500 ease-out">
                      View Code
                    </a>
                  </div>
                </div>
              </div>
              <div className="group p-8 border border-gray-200 rounded-3xl bg-white shadow-sm hover:-translate-y-2 hover:shadow-lg transition-all duration-500 ease-out">
                <div className="space-y-5">
                  <p className="text-sm uppercase tracking-[0.3em] text-[#64748B]">Live</p>
                  <h4 className="text-2xl md:text-3xl font-bold">BB Luxury</h4>
                  <p className="text-lg font-light leading-relaxed text-[#475569]">
                    Premium brand experience with elegant design, luxury product showcase, and personalized customer journey.
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <a href="https://bbluxuryapartment.netlify.app/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-6 py-3 border border-gray-200 font-semibold text-sm rounded-xl hover:border-[#3B82F6] hover:bg-[#EFF6FF] transition-all duration-500 ease-out">
                      Live Demo
                    </a>
                    <a href=" https://github.com/Sinsydev/bb-luxury-apartment-and-housing-estates" target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-6 py-3 border border-gray-200 font-semibold text-sm rounded-xl hover:border-[#3B82F6] hover:bg-[#EFF6FF] transition-all duration-500 ease-out">
                      View Code
                    </a>
                  </div>
                </div>
              </div>
              <div className="group p-8 border border-gray-200 rounded-3xl bg-white shadow-sm hover:-translate-y-2 hover:shadow-lg transition-all duration-500 ease-out">
                <div className="space-y-5">
                  <p className="text-sm uppercase tracking-[0.3em] text-[#64748B]">Live</p>
                  <h4 className="text-2xl md:text-3xl font-bold">Global Dine</h4>
                  <p className="text-lg font-light leading-relaxed text-[#475569]">
                    Restaurant discovery and reservation platform connecting diners with exceptional dining experiences worldwide.
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <a href="https://globaldine.netlify.app/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-6 py-3 border border-gray-200 font-semibold text-sm rounded-xl hover:border-[#3B82F6] hover:bg-[#EFF6FF] transition-all duration-500 ease-out">
                      Live Demo
                    </a>
                    <a href=" https://github.com/Sinsydev/Global-Dine" target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-6 py-3 border border-gray-200 font-semibold text-sm rounded-xl hover:border-[#3B82F6] hover:bg-[#EFF6FF] transition-all duration-500 ease-out">
                      View Code
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </article>

          <article id="case-studies">
            <h3 className="text-3xl md:text-4xl font-bold mb-12 md:mb-16">Technical Case Studies</h3>
            <div className="grid md:grid-cols-2 gap-8 md:gap-12">
              <div className="group p-8 border border-gray-200 rounded-3xl bg-[#F8FAFC] shadow-sm hover:-translate-y-2 hover:shadow-lg transition-all duration-500 ease-out">
                <div className="space-y-5">
                  <p className="text-sm uppercase tracking-[0.3em] text-[#64748B]">Case Study</p>
                  <h4 className="text-2xl md:text-3xl font-bold"> PropertyPulse AI</h4>
                  <p className="text-lg font-light leading-relaxed text-[#475569]">
                    The project was built to improve how businesses manage customer inquiries, appointment requests, and communication workflows through an AI-powered conversational interface.
                  </p>
                  <p className="text-sm font-semibold tracking-[0.22em] text-[#64748B]">REACT - TYPESCRIPT - WEBSOCKETS - AI</p>
                  <a href=" https://github.com/Sinsydev/Propertypulse-ai-Case-Study" target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-6 py-3 border border-gray-200 font-semibold text-sm rounded-xl hover:border-[#3B82F6] hover:bg-[#EFF6FF] transition-all duration-500 ease-out">
                    View Code
                  </a>
                </div>
              </div>
              <div className="group p-8 border border-gray-200 rounded-3xl bg-[#F8FAFC] shadow-sm hover:-translate-y-2 hover:shadow-lg transition-all duration-500 ease-out">
                <div className="space-y-5">
                  <p className="text-sm uppercase tracking-[0.3em] text-[#64748B]">Case Study</p>
                  <h4 className="text-2xl md:text-3xl font-bold">KS Security & Incident Reporting System Dashboard</h4>
                  <p className="text-lg font-light leading-relaxed text-[#475569]">
                     A real-time incident reporting and monitoring platform designed to support faster communication, incident tracking, and response coordination for security operations.
                  </p>
                  <p className="text-sm font-semibold tracking-[0.22em] text-[#64748B]">REACT - FIREBASE - FIRESTORE - REAL-TIME</p>
                  <a href="https://github.com/Sinsydev/AI-KSCSIRS" target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-6 py-3 border border-gray-200 font-semibold text-sm rounded-xl hover:border-[#3B82F6] hover:bg-[#EFF6FF] transition-all duration-500 ease-out">
                    View Code
                  </a>
                </div>
              </div>
              <div className="group p-8 border border-gray-200 rounded-3xl bg-[#F8FAFC] shadow-sm hover:-translate-y-2 hover:shadow-lg transition-all duration-500 ease-out">
                <div className="space-y-5">
                  <p className="text-sm uppercase tracking-[0.3em] text-[#64748B]">Case Study</p>
                  <h4 className="text-2xl md:text-3xl font-bold">E-Commerce Platform</h4>
                  <p className="text-lg font-light leading-relaxed text-[#475569]">
                    Full-stack solution with product catalog and checkout flow. Architectural challenge: implementing scalable state management and payment integration.
                  </p>
                  <p className="text-sm font-semibold tracking-[0.22em] text-[#64748B]">REACT - NODE.JS - MONGODB - STRIPE</p>
                  <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-6 py-3 border border-gray-200 font-semibold text-sm rounded-xl hover:border-[#3B82F6] hover:bg-[#EFF6FF] transition-all duration-500 ease-out">
                    View Code
                  </a>
                </div>
              </div>
            </div>
          </article>
        </section>

        <section className="fade-in-section py-24 md:py-40 border-t border-gray-200 opacity-0">
          <div className="space-y-8">
            <div className="space-y-5 max-w-4xl">
              <h2 className="text-5xl md:text-6xl font-black tracking-tight">Let's Work Together</h2>
              <div className="w-16 h-1 rounded-full bg-[#3B82F6]/20"></div>
            </div>
            <p className="text-xl md:text-2xl font-light leading-relaxed text-[#475569] max-w-3xl">
              I'm always interested in hearing about new opportunities and collaborating on exciting, impactful projects.
            </p>
          </div>

          <div className="space-y-12 mt-16">
            <a href="mailto:ismailaminusaid1234@gmail.com" className="inline-flex items-center justify-center px-8 py-4 bg-[#1F2937] text-white font-semibold rounded-xl hover:bg-[#111827] transition-all duration-500 ease-out">
              Email Me
            </a>

            <div className="flex flex-col sm:flex-row gap-8 sm:gap-12 pt-8 text-[#334155]">
              <a href="https://www.linkedin.com/in/sinsy-dev" target="_blank" rel="noopener noreferrer" className="text-lg font-semibold hover:text-[#1F2937] transition-all duration-500">LinkedIn</a>
              <a href="https://github.com/Sinsydev" target="_blank" rel="noopener noreferrer" className="text-lg font-semibold hover:text-[#1F2937] transition-all duration-500">GitHub</a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-lg font-semibold hover:text-[#1F2937] transition-all duration-500">Twitter</a>
            </div>
          </div>
        </section>

        <footer className="py-12 border-t border-gray-200 mt-12 md:mt-20 text-center text-sm font-light text-[#64748B]">
          <p>(c) 2024 Ismail Aminu Said. Crafted with precision.</p>
        </footer>
      </main>

      <style>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(24px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .fade-in-section {
          opacity: 0;
          transform: translateY(24px);
          transition: all 0.5s ease-out;
        }

        .fade-in-visible {
          animation: fade-in-up 0.8s ease-out forwards;
        }

        html {
          scroll-behavior: smooth;
        }

        * {
          transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
        }
      `}</style>
    </div>
  );
}

export default App;
