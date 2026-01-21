import React from 'react';
import aboutBg from "/assets/img/about-bg.webp";
import workBg from "/assets/img/work-bg.webp";
import workBg01 from "/assets/img/work-bg-01.webp";
import about01 from "/assets/img/about-01.webp";

const steps = [
  {
    title: "Search Doctor",
    description: "Search for a doctor based on specialization, location, or availability.",
    icon: (
      <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    ),
  },
  {
    title: "Check Profile",
    description: "Explore detailed doctor profiles on our platform to make informed healthcare.",
    icon: (
      <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
    ),
  },
  {
    title: "Schedule Booking",
    description: "After choosing your preferred doctor, select a convenient time slot, & confirm.",
    icon: (
      <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: "Get Your Solution",
    description: "Receive your medical consultation and start your journey towards recovery.",
    icon: (
      <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  }
];

const WorkSection: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-blue-100 to-green-100">
      {/* Background Decorative Images */}
      <img src={aboutBg} alt="bg" className="absolute top-0 left-0 opacity-50 pointer-events-none animate-spin duration-800" />
      <img src={workBg} alt="bg" className="absolute bottom-10 right-0 opacity-30 pointer-events-none" />
      <img src={workBg01} alt="bg" className="absolute top-1/2 left-20 -translate-y-1/2 opacity-60 pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col xl:flex-row items-center gap-12">
          
          {/* Left Column: Image */}
          <div className="w-full xl:w-5/12">
            <div className="relative group">
              <div className="absolute -inset-4"></div>
              <img
                src={about01}
                alt="work"
                className="relative z-10 w-full h-auto"
              />
            </div>
          </div>

          {/* Right Column: Content */}
          <div className="w-full xl:w-7/12">
            <div className="mb-10 text-left">
              <div className="inline-block text-white bg-gradient-to-r from-blue-500 to-purple-500 px-6 py-2 rounded-full font-bold tracking-wider uppercase text-xs mb-4 shadow-lg shadow-blue-200">
                How it Works
              </div>
              <h2 className="text-4xl md:text-4xl font-bold text-gray-900 leading-tight">
                4 Easy Steps to <span className="text-blue-600">Get Your Solution</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {steps.map((step, index) => (
                <div 
                  key={index} 
                  className="group flex gap-5 p-6 bg-slate-50 rounded-[0.5rem] border border-transparent hover:border-blue-100 hover:bg-white hover:shadow-xl hover:shadow-blue-20 transition-all duration-300"
                >
                  <div className="shrink-0 w-16 h-16 rounded-full bg-white shadow-sm flex items-center justify-center group-hover:bg-blue-100 group-hover:text-white transition-colors duration-300">
                    {step.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
                      {step.title}
                    </h3>
                    <p className="text-slate-500 text-sm leading-relaxed">
                      {step.description}
                    </p>
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

export default WorkSection;