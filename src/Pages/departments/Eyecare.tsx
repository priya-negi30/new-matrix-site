import Header from '../../Components/Header'
import Breadcrumbs from '../../Components/Breadcrumbs'
import Footer from '../../Components/Footer'
import React from 'react';
import { 
  FaEye, FaMicroscope, FaLaptopMedical, FaUserDoctor, 
  FaBaby, FaArrowsToDot, FaDroplet, FaStethoscope,
  FaPlaneCircleCheck, FaCalendarCheck 
} from 'react-icons/fa6';
import AboutBg from "/assets/banner-bg.jpg";

const Eyecare: React.FC = () => {
  const equipment = [
    { name: "Perimetry", brand: "Zeiss" },
    { name: "IOL Master", brand: "Zeiss" },
    { name: "FFA (Fundus Fluorescein Angiography)", brand: "Zeiss" },
    { name: "OCT (Optical Coherence Tomography)", brand: "Caregroup" },
    { name: "Corneal Topography", brand: "Caregroup" },
    { name: "B-Scan", brand: "Appasamy" },
    { name: "A-Scan", brand: "Biomedix" },
    { name: "VEP (Visual Evoked Potential)", brand: "RMS" },
    { name: "Retinal Laser", brand: "Biomedix" },
    { name: "YAG Laser", brand: "Appasamy" },
  ];

  return (
    <>
    <Header/>
      <Breadcrumbs 
        items={[
          { label: "SBH Eye Hospital", 
            bg: AboutBg
          }
        ]}
        />
        <div className="bg-whit">
          {/* 1. HERO SECTION */}
          <section className="relative h-[500px] flex items-center bg-slate-900 overflow-hidden">
            <div className="absolute inset-0 opacity-40">
              <img 
                src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80" 
                className="w-full h-full object-cover" 
                alt="Ophthalmology" 
              />
            </div>
            <div className="container mx-auto px-6 relative z-10">
              <div className="max-w-3xl">
                <span className="bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-bold uppercase tracking-widest">
                  Department of Ophthalmology
                </span>
                <h1 className="text-5xl md:text-6xl font-black text-white mt-4 mb-6 leading-tight">
                  Comprehensive <span className="text-blue-400">Eye Care</span> & Surgery
                </h1>
                <p className="text-xl text-slate-200 leading-relaxed">
                  From routine vision correction to advanced retinal and corneal treatments, SBH Hospital delivers safe, precise outcomes using evidence-based techniques.
                </p>
              </div>
            </div>
          </section>

          {/* 2. DIAGNOSTICS TABLE SECTION */}
          <section className="py-20 bg-slate-50">
            <div className="container mx-auto px-6">
              <div className="flex flex-col lg:flex-row gap-12 items-center">
                <div className="lg:w-1/2">
                  <h2 className="text-3xl font-black text-slate-900 mb-6">Advanced Eye Diagnostics</h2>
                  <p className="text-slate-600 mb-8">
                    Accurate diagnosis is the foundation of effective treatment. Our facility is equipped with the latest Zeiss and Caregroup imaging systems for early detection.
                  </p>
                  <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-xl">
                    <table className="w-full text-left border-collapse">
                      <thead>
                        <tr className="bg-blue-600 text-white">
                          <th className="p-4 font-bold">Equipment</th>
                          <th className="p-4 font-bold">Technology Partner</th>
                        </tr>
                      </thead>
                      <tbody>
                        {equipment.map((item, idx) => (
                          <tr key={idx} className="border-b border-slate-100 hover:bg-blue-50/50 transition-colors">
                            <td className="p-4 text-slate-700 font-medium">{item.name}</td>
                            <td className="p-4 text-blue-600 font-bold">{item.brand}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
                <div className="lg:w-1/2 grid grid-cols-2 gap-4">
                  <div className="bg-blue-600 p-8 rounded-[3rem] text-white flex flex-col justify-center">
                      <FaMicroscope size={40} className="mb-4" />
                      <h3 className="text-2xl font-bold">Precise Planning</h3>
                      <p className="text-blue-100 text-sm mt-2">Guided by high-resolution imaging for custom lens selection.</p>
                  </div>
                  <img src="https://images.unsplash.com/photo-1581056771107-24ca5f033842?auto=format&fit=crop&q=80" className="rounded-[3rem] h-64 object-cover" alt="Diagnostic" />
                </div>
              </div>
            </div>
          </section>

          {/* 3. REFRACTIVE & LASIK SECTION */}
          <section className="py-20">
            <div className="container mx-auto px-6">
              <div className="text-center max-w-3xl mx-auto mb-16">
                <h2 className="text-4xl font-black text-slate-900 mb-4">Vision Correction (LASIK)</h2>
                <p className="text-slate-500">SBH Hospital brings touchless, robotic laser vision correction to your city with latest-generation technology.</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  { title: "Contoura Vision", desc: "Topography-guided mapping for customized, sharp visual quality.", icon: <FaLaptopMedical /> },
                  { title: "SMILE PRO", desc: "Advanced, upgraded laser technology for a smoother experience.", icon: <FaPlaneCircleCheck /> },
                  { title: "Touchless Robotic", desc: "Greater precision and comfort with guided post-operative care.", icon: <FaArrowsToDot /> }
                ].map((feature, i) => (
                  <div key={i} className="p-8 rounded-[2.5rem] bg-white border border-slate-100 shadow-sm hover:shadow-xl transition-all">
                    <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center text-2xl mb-6">
                      {feature.icon}
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
                    <p className="text-slate-500 text-sm leading-relaxed">{feature.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* 4. CLINICAL SPECIALTIES GRID */}
          <section className="py-20 bg-slate-900 text-white rounded-[4rem] mx-4">
            <div className="container mx-auto px-8">
              <h2 className="text-4xl font-black mb-16">Clinical <span className="text-blue-400">Specialties</span></h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                <div>
                  <h4 className="flex items-center gap-2 text-blue-400 font-bold mb-4"><FaEye /> Cornea & Keratoconus</h4>
                  <ul className="space-y-3 text-slate-300 text-sm">
                    <li>Cornea Transplantation</li>
                    <li>Management of Keratoconus</li>
                    <li>Microbial Keratitis Treatment</li>
                    <li>Dry Eye Medical Therapy</li>
                  </ul>
                </div>
                <div>
                  <h4 className="flex items-center gap-2 text-rose-400 font-bold mb-4"><FaBaby /> Pediatric Ophthalmology</h4>
                  <ul className="space-y-3 text-slate-300 text-sm">
                    <li>Childhood Cataracts</li>
                    <li>Lazy Eye (Amblyopia) Therapy</li>
                    <li>Squint Surgery</li>
                    <li>Myopia Control Clinic</li>
                  </ul>
                </div>
                <div>
                  <h4 className="flex items-center gap-2 text-amber-400 font-bold mb-4"><FaStethoscope /> Retina Care</h4>
                  <ul className="space-y-3 text-slate-300 text-sm">
                    <li>Diabetic Retinopathy</li>
                    <li>Retinal Detachment Emergency</li>
                    <li>Macular Hole & Edema Surgery</li>
                    <li>Retinopathy of Prematurity</li>
                  </ul>
                </div>
                <div>
                  <h4 className="flex items-center gap-2 text-teal-400 font-bold mb-4"><FaUserDoctor /> General & Glaucoma</h4>
                  <ul className="space-y-3 text-slate-300 text-sm">
                    <li>Advanced Cataract (IOL)</li>
                    <li>Glaucoma Laser & Surgery</li>
                    <li>Oculoplasty & Aesthetics</li>
                    <li>Optic Nerve Diagnostics</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* 5. CALL TO ACTION */}
          <section className="pt-20">
            <div className="container mx-auto px-6">
              <div className="bg-blue-600 rounded-[3rem] p-12 text-center text-white relative overflow-hidden">
                <div className="relative z-10">
                  <h2 className="text-3xl md:text-5xl font-black mb-6">Ready to see the world clearly?</h2>
                  <p className="text-blue-100 mb-8 max-w-xl mx-auto">Schedule your comprehensive eye check-up today with our expert ophthalmology team.</p>
                  <button className="bg-white text-blue-600 px-10 py-4 rounded-2xl font-black flex items-center gap-3 mx-auto hover:bg-slate-900 hover:text-white transition-all group">
                    Book An Appointment <FaCalendarCheck className="group-hover:rotate-12 transition-transform" />
                  </button>
                </div>
                {/* Background Decoration */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
              </div>
            </div>
          </section>
        </div>
    <Footer/>
    </>
  );
};

export default Eyecare;