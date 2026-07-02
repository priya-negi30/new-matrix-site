import React from 'react';
import { 
  FileText, ShieldCheck, RefreshCw, AlertTriangle, 
  CreditCard, Tag, Landmark, HelpCircle, ArrowRight 
} from 'lucide-react';
import Header from '../Components/MainHeader';
import Footer from '../Components/Footer';

export const TermsAndConditionsPage: React.FC = () => {
  return (
    <>
      <Header />
      
      <div className="w-full bg-[#f8f9fa] text-[#272b41] font-sans antialiased min-h-screen">

        {/* 1. INTEGRATED BREADCRUMB BAR */}
        <div className="breadcrumb-bar relative text-slate-900 py-16 overflow-hidden">
          <div className="container mx-auto px-4 max-w-[1150px]">
            <div className="row align-items-center inner-banner">
              <div className="col-md-12 col-12 text-center relative z-10">
                <nav aria-label="breadcrumb" className="page-breadcrumb flex flex-col items-center">
                  <ol className="breadcrumb flex items-center justify-center gap-2.5 text-xs font-bold uppercase tracking-wider mb-3 text-blue-500">
                    <li className="breadcrumb-item">
                      <a href="index.html" aria-label="home" className="hover:text-emerald-400 transition-colors">
                        <i className="isax isax-home-15 text-sm"></i> Home
                      </a>
                    </li>
                    <li className="text-blue-300/40 select-none">/</li>
                    <li className="breadcrumb-item active text-slate-500" aria-current="page">Legal</li>
                  </ol>
                  <h2 className="breadcrumb-title text-2xl md:text-4xl font-black">
                    Terms & Conditions
                  </h2>
                </nav>
              </div>
            </div>
          </div>
          
          {/* Decorative Background Assets */}
          <div className="breadcrumb-bg pointer-events-none select-none">
            <img src="assets/img/breadcrumb-bg-01.png" alt="img" className="breadcrumb-bg-01 absolute top-0 left-0 h-50" />
            <img src="assets/img/breadcrumb-bg-02.png" alt="img" className="breadcrumb-bg-02 absolute bottom-0 right-0 h-50" />
            <img src="assets/img/breadcrumb-icon.png" alt="img" className="breadcrumb-bg-03 absolute top-6 right-1/4 w-8 animate-pulse" />
            <img src="assets/img/breadcrumb-icon.png" alt="img" className="breadcrumb-bg-04 absolute bottom-6 left-1/4 w-6 animate-bounce duration-[8000ms]" />
          </div>
        </div>

        {/* MAIN BODY LAYOUT */}
        <div className="max-w-[1000px] mx-auto px-4 py-12">
          
          {/* WELCOME / INTRO BLOCK */}
          <div className="bg-white border border-[#f0f0f0] rounded-xl p-6 md:p-8 shadow-sm mb-8 flex flex-col md:flex-row items-start gap-5">
            <div className="p-3.5 bg-blue-50 rounded-xl text-[#15558d] shrink-0">
              <ShieldCheck className="w-8 h-8" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-[#272b41] mb-2">Commercial & Operational Guidelines</h3>
              <p className="text-sm text-[#555a6d] leading-relaxed font-medium">
                Welcome to Matrix Lifesciences Pvt. Ltd. (MIPL). Please review the official corporate legal clauses governing all instrument procurement orders, reagent fulfillment pipelines, payment settlements, and jurisdictional liabilities outlined below.
              </p>
            </div>
          </div>

          {/* SYSTEM CLAUSES SECTION */}
          <div className="space-y-6">

            {/* 1. Instrument Order Policy */}
            <div className="bg-white border border-[#f0f0f0] rounded-xl shadow-sm overflow-hidden hover:border-slate-300 transition-colors">
              <div className="p-5 border-b border-[#f0f0f0] bg-slate-50/50 flex items-center gap-3">
                <span className="flex items-center justify-center w-7 h-7 bg-[#15558d] text-white text-xs font-bold rounded-md">01</span>
                <h4 className="text-base font-bold text-[#272b41] flex items-center gap-2">
                  <RefreshCw className="w-4 h-4 text-[#15558d]" /> Instrument Order Cancellation
                </h4>
              </div>
              <div className="p-6 text-sm text-[#555a6d] leading-relaxed font-medium space-y-3">
                <p>
                  Instrument orders, once placed, cannot be cancelled under normal circumstances.
                </p>
                <div className="bg-amber-50/60 border border-amber-200 rounded-lg p-4 text-amber-900 text-xs font-semibold leading-normal">
                  In the event that a cancellation request is formally accepted by management, a minimum cancellation charge of <span className="text-rose-600 font-bold">10% of the total order value</span> along with any secondary charges incurred by MIPL towards statutory taxes, cess, levies, or shipping bill handling files will be strictly deducted from the advance received.
                </div>
                <p>
                  Where the total recovery charges calculated exceed the initial advance configuration received, the buyer shall remain legally liable to pay the difference to **Matrix Lifesciences Pvt. Ltd.**
                </p>
              </div>
            </div>

            {/* 2. Reagent Policy */}
            <div className="bg-white border border-[#f0f0f0] rounded-xl shadow-sm overflow-hidden hover:border-slate-300 transition-colors">
              <div className="p-5 border-b border-[#f0f0f0] bg-slate-50/50 flex items-center gap-3">
                <span className="flex items-center justify-center w-7 h-7 bg-[#15558d] text-white text-xs font-bold rounded-md">02</span>
                <h4 className="text-base font-bold text-[#272b41] flex items-center gap-2">
                  <AlertTriangle className="w-4 h-4 text-rose-500" /> Reagent Sales & Return Window
                </h4>
              </div>
              <div className="p-6 text-sm text-[#555a6d] leading-relaxed font-medium space-y-4">
                <p>
                  Reagents once sold and transferred from our fulfillment repository <span className="font-bold text-[#272b41]">will not be taken back</span> under any standard inventory return paradigm.
                </p>
                <div className="border-l-4 border-[#09e5ab] bg-slate-50 p-3 text-xs font-semibold">
                  <span className="text-[#15558d] font-bold block mb-1">Strict 24-Hour Reporting window:</span>
                  Any operational logistics issues such as incorrect items, batch leakages, structural breakage, or shipment volume shortages must be explicitly reported **within 24 hours** for correction resolution. Claims logged after this period will not be addressed or acknowledged.
                </div>
              </div>
            </div>

            {/* 3. Payment & Pricing Metrics */}
            <div className="bg-white border border-[#f0f0f0] rounded-xl shadow-sm overflow-hidden hover:border-slate-300 transition-colors">
              <div className="p-5 border-b border-[#f0f0f0] bg-slate-50/50 flex items-center gap-3">
                <span className="flex items-center justify-center w-7 h-7 bg-[#15558d] text-white text-xs font-bold rounded-md">03</span>
                <h4 className="text-base font-bold text-[#272b41] flex items-center gap-2">
                  <CreditCard className="w-4 h-4 text-[#15558d]" /> Financial Terms & Pricing Controls
                </h4>
              </div>
              <div className="p-6 text-sm text-[#555a6d] font-medium">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 bg-slate-50 border border-slate-200 rounded-lg">
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-1">Credit Limits</span>
                    <p className="text-xs text-[#272b41] font-semibold">
                      Payment terms will be processed in accordance with your assigned corporate credit period authorization matrix.
                    </p>
                  </div>
                  <div className="p-4 bg-slate-50 border border-slate-200 rounded-lg">
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-1">Price Adjustments</span>
                    <p className="text-xs text-[#272b41] font-semibold">
                      All goods will be invoiced at the prices actively ruling at the specific time of logistics dispatch.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* 4. Jurisdiction & Force Majeure */}
            <div className="bg-white border border-[#f0f0f0] rounded-xl shadow-sm overflow-hidden hover:border-slate-300 transition-colors">
              <div className="p-5 border-b border-[#f0f0f0] bg-slate-50/50 flex items-center gap-3">
                <span className="flex items-center justify-center w-7 h-7 bg-[#15558d] text-white text-xs font-bold rounded-md">04</span>
                <h4 className="text-base font-bold text-[#272b41] flex items-center gap-2">
                  <Landmark className="w-4 h-4 text-[#15558d]" /> Jurisdiction & Force Majeure Exclusions
                </h4>
              </div>
              <div className="p-6 text-sm text-[#555a6d] leading-relaxed font-medium space-y-4">
                <div>
                  <h5 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Legal Jurisdiction</h5>
                  <p>Any legal disputes, compliance friction, or claim arbitrations will be strictly governed by and subject to the exclusive jurisdiction of courts located in **Raipur**.</p>
                </div>
                
                <hr className="border-slate-100" />

                <div>
                  <h5 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Force Majeure Protocol</h5>
                  <p>
                    Matrix Lifesciences is not responsible or legally accountable for any failure or delayed metrics to deliver inventory goods due to standard force majeure events, including but not limited to: war, regional floods, catastrophic earthquakes, industrial labor strikes, epidemics, localized riots, or supply-chain blocks.
                  </p>
                </div>
              </div>
            </div>

            {/* 5. Product Specifications Changes */}
            <div className="bg-white border border-[#f0f0f0] rounded-xl shadow-sm overflow-hidden hover:border-slate-300 transition-colors">
              <div className="p-5 border-b border-[#f0f0f0] bg-slate-50/50 flex items-center gap-3">
                <span className="flex items-center justify-center w-7 h-7 bg-[#15558d] text-white text-xs font-bold rounded-md">05</span>
                <h4 className="text-base font-bold text-[#272b41] flex items-center gap-2">
                  <Tag className="w-4 h-4 text-[#15558d]" /> Technical Specification Revisions
                </h4>
              </div>
              <div className="p-6 text-sm text-[#555a6d] leading-relaxed font-medium">
                <p>
                  The company reserves the absolute right to change or adjust any structural configuration or technical specification of the products listed within this product platform catalog at any time, entirely without prior notification or liability adjustments.
                </p>
              </div>
            </div>

          </div>

          {/* CUSTOMER SUPPORT CALLOUT CARD */}
          <div className="mt-10 bg-slate-900 text-white rounded-2xl p-6 md:p-8 relative overflow-hidden shadow-md">
            <div className="relative z-10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div>
                <h4 className="text-lg font-bold flex items-center gap-2 text-white">
                  <HelpCircle className="w-5 h-5 text-[#09e5ab]" /> Need Commercial Clarification?
                </h4>
                <p className="text-xs text-slate-400 mt-1 max-w-xl">
                  If you have queries regarding your assigned credit period setup, instrument handling parameters, or specific procurement profiles, connect directly with our compliance helpdesk.
                </p>
              </div>
              <a 
                href="/contactus"
                className="inline-flex items-center gap-1.5 px-4 py-2.5 bg-[#09e5ab] hover:bg-[#08d29d] text-[#15558d] text-xs font-bold rounded-lg shrink-0 self-start sm:self-auto shadow-sm transition-colors decoration-0"
              >
                <span>Contact Corporate Desk</span> <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
            {/* Background Shape Accent */}
            <div className="absolute right-0 top-0 bottom-0 w-1/3 bg-white/5 skew-x-12 translate-x-10 pointer-events-none" />
          </div>

        </div>
      </div>

      <Footer />
    </>
  );
};

export default TermsAndConditionsPage;