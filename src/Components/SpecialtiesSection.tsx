import { type Variants, motion } from "motion/react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import {
  PiHeartbeatDuotone, PiBoneDuotone, PiBrainDuotone,
  PiBabyDuotone, PiHandsPrayingDuotone, PiFirstAidKitDuotone,
  PiCaretLeftBold, PiCaretRightBold
} from "react-icons/pi";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import eyecareImg from "/assets/service/eyecare.png";
import maternityCareImg from "/assets/service/maternitycare.jpg";
import pediatricCareImg from "/assets/service/pediatriccare.jpg";
import diagnosticServiceImg from "/assets/service/diagnosticservice.jpg";
import criticalCareImg from "/assets/service/criticalcare.jpg";
import surgicalExcellenceImg from "/assets/service/surgicalexcellence.jpg";
import generalMedicineImg from "/assets/service/generalmedicine.jpg";

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.6, ease: "easeOut" } 
  }
};

const SpecialtiesSection: React.FC = () => {
  const specialties = [
    {
        name: 'Ophthalmic Care',
        doctors: 254,
        color: 'text-red-600',
        bg: 'bg-red-50',
        icon: <PiHeartbeatDuotone size={48} />,
        image: eyecareImg
    },
    {
        name: 'Maternity Care',
        doctors: 151,
        color: 'text-blue-600',
        bg: 'bg-blue-50',
        icon: <PiBoneDuotone size={48} />,
        image: maternityCareImg
    },
    {
        name: 'Pediatric Care',
        doctors: 124,
        color: 'text-pink-600',
        bg: 'bg-pink-50',
        icon: <PiBabyDuotone size={48} />,
        image: pediatricCareImg
    },
    {
        name: 'Diagnostic Service',
        doctors: 104,
        color: 'text-emerald-600',
        bg: 'bg-emerald-50',
        icon: <PiFirstAidKitDuotone size={48} />,
        image: diagnosticServiceImg
    },
    {
        name: 'Critical Care',
        doctors: 112,
        color: 'text-indigo-600',
        bg: 'bg-indigo-50',
        icon: <PiHandsPrayingDuotone size={48} />,
        image: criticalCareImg
    },
    {
        name: 'Surgical Excellence',
        doctors: 104,
        color: 'text-emerald-600',
        bg: 'bg-emerald-50',
        icon: <PiFirstAidKitDuotone size={48} />,
        image: surgicalExcellenceImg
    },
    {
        name: 'General Medicine',
        doctors: 104,
        color: 'text-emerald-600',
        bg: 'bg-emerald-50',
        icon: <PiFirstAidKitDuotone size={48} />,
        image: generalMedicineImg
    },

  ];

  return (
    <section className="py-18 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Fixed & Centered Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="text-center mb-8"
        >
          <span className="inline-block text-white bg-gradient-to-r from-blue-500 to-purple-500 px-6 py-2 rounded-full font-bold tracking-wider uppercase text-xs mb-4 shadow-lg shadow-blue-200">
            Top Specialties
          </span>
          <h2 className="text-4xl md:text-4xl font-bold text-gray-900 leading-tight font-hanken">
            Highlighting the  <span className="text-blue-600">Care & Support</span>
          </h2>
        </motion.div>

        {/* Slider Container with Custom Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative group"
        >
          {/* Custom Navigation Buttons */}
          <button className="nav-prev absolute -left-4 md:-left-12 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-xl text-gray-700 hover:bg-blue-600 hover:text-white transition-all duration-300 opacity-0 group-hover:opacity-100 cursor-pointer border border-gray-100">
            <PiCaretLeftBold size={24} />
          </button>
          
          <button className="nav-next absolute -right-4 md:-right-12 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-xl text-gray-700 hover:bg-blue-600 hover:text-white transition-all duration-300 opacity-0 group-hover:opacity-100 cursor-pointer border border-gray-100">
            <PiCaretRightBold size={24} />
          </button>

          <Swiper
            modules={[Pagination, Navigation]}
            spaceBetween={30}
            slidesPerView={1}
            navigation={{
              prevEl: ".nav-prev",
              nextEl: ".nav-next",
            }}
            pagination={{ clickable: true, dynamicBullets: true }}
            autoplay={{ delay: 3500, disableOnInteraction: false }}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
              1280: { slidesPerView: 4 },
            }}
            className="pb-16! px-2! pt-6!"
          >
            {specialties.map((item, index) => (
              <SwiperSlide key={index} className="h-full">
                <div className="group relative h-60 rounded-[2.5rem] overflow-hidden transition-all duration-500 hover:shadow-2xl hover:-translate-y-2  bg-gray-700">
                  
                  {/* Background Image with Overlay */}
                  <div className="absolute inset-0 z-0">
                    <img 
                      src={item.image} 
                      alt={item.name}
                      className="w-full h-full object-cover opacity-60 hover:scale-110 transition-transform duration-700" 
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-gray-950 via-gray-900/40 to-transparent" />
                  </div>

                  {/* Card Content */}
                  <div className="relative z-10 p-8 h-full flex flex-col justify-end">
                    <motion.div 
                      className={`w-12 h-12 ${item.bg} ${item.color} rounded-2xl flex items-center justify-center mb-6 hover:scale-110 transition-all duration-500`}
                    >
                      {item.icon}
                    </motion.div>

                    <div className="transform translate-y-4 hover:translate-y-0 transition-transform duration-500">
                      <h3 className="text-2xl font-bold text-white mb-2">{item.name}</h3>
                      <p className="text-gray-300 font-medium mb-6">{item.doctors}+ Professional Doctors</p>
                      
                      {/* <button className="flex items-center text-sm font-bold text-blue-400 hover:text-blue-300 transition-all">
                        EXPLORE MORE 
                        <span className="ml-2 hover:ml-4 transition-all text-xl">→</span>
                      </button> */}
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </div>

      <style>{`
        .swiper-pagination-bullet {
          background: #cbd5e1;
          opacity: 1;
        }
        .swiper-pagination-bullet-active {
          background: #2563eb !important;
          width: 28px !important;
          border-radius: 4px !important;
        }
        /* Hide default swiper navigation if any */
        .swiper-button-next, .swiper-button-prev {
          display: none !important;
        }
      `}</style>
    </section>
  );
};

export default SpecialtiesSection;