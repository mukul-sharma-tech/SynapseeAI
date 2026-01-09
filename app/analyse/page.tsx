// "use client";
// import React, { useState } from 'react';
// // import Transition from '../components/transition';
// import Transition from '@/components/transition';
// import { Download, RefreshCcw, CheckCircle, ArrowRight, AlertCircle } from 'lucide-react';

// export default function Home() {
//   const [step, setStep] = useState('input'); 
//   const [statusText, setStatusText] = useState("Initializing...");
  
//   const [formData, setFormData] = useState({
//     product: '', 
//     region: '', 
//     price: '', 
//     age: 'All', 
//     description: ''
//   });

//   // const handleInput = (e) => setFormData({...formData, [e.target.name]: e.target.value});
  
//   const handleInput = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => setFormData({...formData, [e.target.name]: e.target.value});
//   const isFormValid = 
//     formData.product.trim().length > 0 && 
//     formData.region.trim().length > 0 && 
//     formData.price.toString().trim().length > 0 && 
//     formData.description.trim().length > 0;

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (!isFormValid) {
//         alert("Please fill in all required fields.");
//         return;
//     }

//     setStep('processing');

//     const sequence = [
//       { text: "Agent 1: Scouting Competitors...", delay: 2000 },
//       { text: "Agent 2: Analyzing Global Trends...", delay: 2500 },
//       { text: "Agent 3: Checking Manufacturing Feasibility...", delay: 2000 },
//       { text: "Master Agent: Synthesizing Final Report...", delay: 1500 }
//     ];

//     let totalDelay = 0;
//     sequence.forEach(({ text, delay }) => {
//       setTimeout(() => setStatusText(text), totalDelay);
//       totalDelay += delay;
//     });

//     setTimeout(() => {
//       setStep('result');
//     }, totalDelay);
//   };

//   // --- MOCK REPORT ---
//   const reportHtml = `
//     <div class="space-y-8 max-w-5xl mx-auto">
//       <div class="p-8 bg-blue-50 border-l-8 border-blue-600 rounded-r-lg shadow-sm">
//         <h3 class="text-3xl font-bold text-blue-900 mb-4">Executive Summary</h3>
//         <p class="text-blue-800 text-lg leading-relaxed">
//           The market opportunity for <strong>${formData.product}</strong> in <strong>${formData.region}</strong> is favorable. 
//           Targeting a price of <strong>$${formData.price}</strong> positions you well against competitors.
//         </p>
//       </div>

//       <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
//         <div class="p-8 border rounded-2xl bg-white shadow-lg hover:shadow-xl transition-shadow">
//            <h4 class="font-bold text-slate-500 uppercase tracking-widest text-sm mb-4">🚀 Best Time to Market</h4>
//            <p class="text-2xl font-semibold text-slate-800">Late Q3 2024</p>
//            <p class="text-slate-500 mt-2">Aligned with pre-holiday seasonal demand spikes.</p>
//         </div>
//         <div class="p-8 border rounded-2xl bg-white shadow-lg hover:shadow-xl transition-shadow">
//            <h4 class="font-bold text-slate-500 uppercase tracking-widest text-sm mb-4">🏭 Safe Manufacturing Batch</h4>
//            <p class="text-2xl font-semibold text-slate-800">500 - 1,200 Units</p>
//            <p class="text-green-600 mt-2 font-medium">Low Risk Assessment</p>
//         </div>
//       </div>

//       <div class="p-8 border rounded-2xl bg-white shadow-lg">
//         <h3 class="text-2xl font-bold text-slate-800 border-b pb-4 mb-6">Competitor Landscape</h3>
//         <ul class="space-y-4 text-slate-600 text-lg">
//           <li class="flex items-start gap-3"><span class="text-red-500 mt-1.5">●</span> <strong>Competitor A:</strong> Higher price, lower quality.</li>
//           <li class="flex items-start gap-3"><span class="text-red-500 mt-1.5">●</span> <strong>Competitor B:</strong> Good distribution, bad reviews.</li>
//         </ul>
//       </div>

//       <div class="p-8 border rounded-2xl bg-white shadow-lg">
//          <h3 class="text-2xl font-bold text-slate-800 border-b pb-4 mb-6">Strategic Recommendations</h3>
//          <p class="text-slate-700 text-lg leading-relaxed">
//             Focus marketing on the <strong>${formData.age}</strong> age group using social proof. Secure raw materials from Tier-2 suppliers to maintain margins.
//          </p>
//       </div>
//     </div>
//   `;

//   if (step === 'processing') return <Transition status={statusText} />;

//   if (step === 'result') return (
//     <div className="min-h-screen w-screen bg-slate-50 flex flex-col">
//       <div className="bg-slate-900 text-white px-8 py-5 shadow-xl flex justify-between items-center sticky top-0 z-40">
//         <div>
//           <h1 className="text-2xl font-bold tracking-tight">Intelligence Report</h1>
//           <p className="text-slate-400 text-sm mt-0.5">{formData.product} • {formData.region}</p>
//         </div>
        
//         <div className="flex items-center gap-4">
//            <div className="flex items-center gap-2 bg-green-500/10 border border-green-500/30 text-green-400 px-4 py-2 rounded-full uppercase text-xs font-bold tracking-wider">
//               <CheckCircle size={16} /> Verified
//            </div>
           
//            <button className="flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white px-5 py-2.5 rounded-lg font-bold transition-all shadow-lg hover:shadow-blue-500/25">
//              <Download size={18} /> Download PDF
//            </button>

//            <button 
//              onClick={() => setStep('input')}
//              className="flex items-center gap-2 bg-slate-800 hover:bg-slate-700 text-slate-300 border border-slate-700 px-5 py-2.5 rounded-lg font-semibold transition-colors"
//            >
//              <RefreshCcw size={18} /> New
//            </button>
//         </div>
//       </div>

//       <div className="flex-1 overflow-y-auto p-8">
//         <div 
//            className="prose max-w-none text-slate-800"
//            dangerouslySetInnerHTML={{ __html: reportHtml }} 
//         />
//       </div>
//     </div>
//   );

//   return (
//     <div className="flex h-screen w-screen bg-white overflow-hidden">
        
//         <div className="hidden lg:flex w-1/3 relative flex-col justify-between p-12 text-white">
          
//           <div 
//              className="absolute inset-0 bg-cover bg-center z-0" 
//              style={{ backgroundImage: "url('/logo.png')" }}
//           ></div>
          
//           <div className="absolute inset-0 bg-slate-900/80 z-0"></div>

//           <div className="relative z-10">
//             <h1 className="text-5xl font-extrabold mb-4 tracking-tight">Synapsee-AI</h1>
//             <p className="text-blue-200 text-xl font-light">Agentic Market Intelligence & Feasibility Engine</p>
//           </div>
          
//           <div className="relative z-10 space-y-6">
//             <div className="flex items-center gap-4 p-4 bg-white/10 rounded-xl border border-white/10 backdrop-blur-sm">
//               <CheckCircle className="text-green-400 w-8 h-8"/> 
//               <div>
//                 <h3 className="font-bold text-lg">Competitor Recon</h3>
//                 <p className="text-blue-100 text-sm">Deep scan of local market players</p>
//               </div>
//             </div>
//             <div className="flex items-center gap-4 p-4 bg-white/10 rounded-xl border border-white/10 backdrop-blur-sm">
//               <CheckCircle className="text-green-400 w-8 h-8"/> 
//               <div>
//                 <h3 className="font-bold text-lg">Trend Analysis</h3>
//                 <p className="text-blue-100 text-sm">Real-time demand forecasting</p>
//               </div>
//             </div>
//             <div className="flex items-center gap-4 p-4 bg-white/10 rounded-xl border border-white/10 backdrop-blur-sm">
//               <CheckCircle className="text-green-400 w-8 h-8"/> 
//               <div>
//                 <h3 className="font-bold text-lg">Risk Calculation</h3>
//                 <p className="text-blue-100 text-sm">Safe manufacturing batch sizes</p>
//               </div>
//             </div>
//           </div>
          
//           <div className="relative z-10 text-sm text-slate-400">
//             © 2026 Synapsee AI Inc.
//           </div>
//         </div>

//         <div className="w-full lg:w-2/3 h-full overflow-y-auto bg-slate-50 flex items-center justify-center p-8 md:p-16">
//           <div className="w-full max-w-2xl">
//             <div className="mb-10">
//                <h2 className="text-4xl font-bold text-slate-900 mb-3">New Analysis</h2>
//                <p className="text-slate-500 text-lg">Enter product details to launch the agent swarm.</p>
//             </div>
          
//             <form onSubmit={handleSubmit} className="space-y-8">
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//                 <div>
//                   <label className="block text-sm font-bold text-slate-500 uppercase tracking-wider mb-2">Product Name <span className="text-red-500">*</span></label>
//                   <input 
//                     name="product" 
//                     onChange={handleInput} 
//                     className="w-full p-4 bg-white border border-slate-200 rounded-xl text-slate-900 text-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition placeholder:text-slate-300" 
//                     placeholder="e.g. Ergonomic Chair" 
//                   />
//                 </div>
//                 <div>
//                   <label className="block text-sm font-bold text-slate-500 uppercase tracking-wider mb-2">Target Region <span className="text-red-500">*</span></label>
//                   <input 
//                     name="region" 
//                     onChange={handleInput} 
//                     className="w-full p-4 bg-white border border-slate-200 rounded-xl text-slate-900 text-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition placeholder:text-slate-300" 
//                     placeholder="e.g. Toronto, Canada" 
//                   />
//                 </div>
//               </div>

//               <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//                 <div>
//                   <label className="block text-sm font-bold text-slate-500 uppercase tracking-wider mb-2">Max Price ($) <span className="text-red-500">*</span></label>
//                   <div className="relative">
//                     <span className="absolute left-4 top-4 text-slate-400">$</span>
//                     <input 
//                       name="price" 
//                       type="number" 
//                       onChange={handleInput} 
//                       className="w-full p-4 pl-8 bg-white border border-slate-200 rounded-xl text-slate-900 text-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition placeholder:text-slate-300" 
//                       placeholder="150" 
//                     />
//                   </div>
//                 </div>
//                 <div>
//                   <label className="block text-sm font-bold text-slate-500 uppercase tracking-wider mb-2">Target Age</label>
//                   <div className="relative">
//                     <select 
//                       name="age" 
//                       onChange={handleInput} 
//                       className="w-full p-4 bg-white border border-slate-200 rounded-xl text-slate-900 text-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none appearance-none cursor-pointer"
//                     >
//                       <option value="All">All Demographics</option>
//                       <option value="18-25">Gen Z (18-25)</option>
//                       <option value="26-40">Millennials (26-40)</option>
//                       <option value="40+">Gen X & Boomers (40+)</option>
//                     </select>
//                     <div className="absolute right-4 top-5 pointer-events-none text-slate-400">▼</div>
//                   </div>
//                 </div>
//               </div>

//               <div>
//                 <label className="block text-sm font-bold text-slate-500 uppercase tracking-wider mb-2">Product Description <span className="text-red-500">*</span></label>
//                 <textarea 
//                   name="description" 
//                   rows="4" 
//                   onChange={handleInput} 
//                   className="w-full p-4 bg-white border border-slate-200 rounded-xl text-slate-900 text-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition placeholder:text-slate-300 resize-none" 
//                   placeholder="Describe unique selling points, materials, and key features..."
//                 ></textarea>
//               </div>

//               <button 
//                 type="submit" 
//                 disabled={!isFormValid}
//                 className={`w-full py-5 rounded-xl font-bold text-xl flex items-center justify-center gap-3 transition-all transform duration-200
//                   ${isFormValid 
//                     ? 'bg-blue-600 text-white shadow-xl hover:shadow-2xl hover:bg-blue-700 hover:-translate-y-1 cursor-pointer' 
//                     : 'bg-slate-200 text-slate-400 cursor-not-allowed opacity-70'
//                   }`}
//               >
//                 {isFormValid ? (
//                     <>Start Analysis <ArrowRight size={24} /></>
//                 ) : (
//                     <>Fill all fields to start <AlertCircle size={20} /></>
//                 )}
//               </button>
//             </form>
//           </div>
//         </div>
//     </div>
//   );
// }

"use client";

import React, { useState } from 'react';
import Transition from '@/components/transition';
import { Download, RefreshCcw, CheckCircle, ArrowRight, AlertCircle } from 'lucide-react';

export default function Home() {
  const [step, setStep] = useState('input');
  const [statusText, setStatusText] = useState("Initializing...");
  const [formData, setFormData] = useState({
    product: '',
    region: '',
    price: '',
    age: 'All',
    description: ''
  });

  const handleInput = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => 
    setFormData({...formData, [e.target.name]: e.target.value});

  const isFormValid = 
    formData.product.trim().length > 0 &&
    formData.region.trim().length > 0 &&
    formData.price.toString().trim().length > 0 &&
    formData.description.trim().length > 0;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!isFormValid) {
      alert("Please fill in all required fields.");
      return;
    }

    setStep('processing');

    const sequence = [
      { text: "Agent 1: Scouting Competitors...", delay: 2000 },
      { text: "Agent 2: Analyzing Global Trends...", delay: 2500 },
      { text: "Agent 3: Checking Manufacturing Feasibility...", delay: 2000 },
      { text: "Master Agent: Synthesizing Final Report...", delay: 1500 }
    ];

    let totalDelay = 0;
    sequence.forEach(({ text, delay }) => {
      setTimeout(() => setStatusText(text), totalDelay);
      totalDelay += delay;
    });

    setTimeout(() => {
      setStep('result');
    }, totalDelay);
  };

  // --- MOCK REPORT ---
  const reportHtml = `
    <div style="font-family: system-ui, -apple-system, sans-serif; color: #1e293b; line-height: 1.6;">
      <h2 style="color: #0f172a; border-bottom: 3px solid #3b82f6; padding-bottom: 8px; margin-bottom: 16px;">Executive Summary</h2>
      <p style="margin-bottom: 24px;">
        The market opportunity for <strong>${formData.product}</strong> in <strong>${formData.region}</strong> is favorable. 
        Targeting a price of <strong>$${formData.price}</strong> positions you well against competitors.
      </p>

      <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 20px; border-radius: 12px; margin: 24px 0;">
        <h3 style="margin: 0 0 8px 0; font-size: 14px; opacity: 0.9;">🚀 Best Time to Market</h3>
        <div style="font-size: 24px; font-weight: bold;">Late Q3 2024</div>
        <p style="margin: 8px 0 0 0; font-size: 14px; opacity: 0.9;">Aligned with pre-holiday seasonal demand spikes.</p>
      </div>

      <div style="background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%); color: white; padding: 20px; border-radius: 12px; margin: 24px 0;">
        <h3 style="margin: 0 0 8px 0; font-size: 14px; opacity: 0.9;">🏭 Safe Manufacturing Batch</h3>
        <div style="font-size: 24px; font-weight: bold;">500 - 1,200 Units</div>
        <p style="margin: 8px 0 0 0; font-size: 14px; opacity: 0.9;">Low Risk Assessment</p>
      </div>

      <h2 style="color: #0f172a; border-bottom: 3px solid #3b82f6; padding-bottom: 8px; margin: 32px 0 16px 0;">Competitor Landscape</h2>
      <ul style="list-style: none; padding: 0;">
        <li style="padding: 12px; background: #f1f5f9; margin: 8px 0; border-radius: 8px; border-left: 4px solid #3b82f6;">
          ● <strong>Competitor A:</strong> Higher price, lower quality.
        </li>
        <li style="padding: 12px; background: #f1f5f9; margin: 8px 0; border-radius: 8px; border-left: 4px solid #3b82f6;">
          ● <strong>Competitor B:</strong> Good distribution, bad reviews.
        </li>
      </ul>

      <h2 style="color: #0f172a; border-bottom: 3px solid #3b82f6; padding-bottom: 8px; margin: 32px 0 16px 0;">Strategic Recommendations</h2>
      <p>
        Focus marketing on the <strong>${formData.age}</strong> age group using social proof. 
        Secure raw materials from Tier-2 suppliers to maintain margins.
      </p>
    </div>
  `;

  if (step === 'processing')
    return <Transition status={statusText} />;

  if (step === 'result')
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 p-6 flex items-center justify-center">
        <div className="w-full max-w-4xl bg-white rounded-2xl shadow-2xl overflow-hidden">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-6 text-white">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-3xl font-bold mb-2">Intelligence Report</h1>
                <p className="text-blue-100 flex items-center gap-2">
                  {formData.product} • {formData.region}
                </p>
              </div>
              <CheckCircle className="w-12 h-12 text-green-300" />
            </div>
          </div>

          <div className="p-8">
            <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6 flex items-center gap-3">
              <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
              <span className="text-green-800 font-medium">Analysis Complete — Verified</span>
            </div>

            <div dangerouslySetInnerHTML={{ __html: reportHtml }} />

            <div className="flex gap-4 mt-8 pt-6 border-t border-slate-200">
              <button className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors shadow-lg">
                <Download className="w-5 h-5" />
                Download PDF
              </button>
              <button
                onClick={() => setStep('input')}
                className="flex items-center gap-2 bg-slate-800 hover:bg-slate-700 text-slate-300 border border-slate-700 px-5 py-2.5 rounded-lg font-semibold transition-colors"
              >
                <RefreshCcw className="w-5 h-5" />
                New Analysis
              </button>
            </div>
          </div>
        </div>
      </div>
    );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Synapsee-AI
          </h1>
          <p className="text-xl text-slate-300">Agentic Market Intelligence & Feasibility Engine</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="bg-slate-800/50 backdrop-blur border border-slate-700 rounded-xl p-6 hover:border-purple-500 transition-colors">
            <div className="text-3xl mb-3">🔍</div>
            <h3 className="font-bold text-lg mb-2">Competitor Recon</h3>
            <p className="text-slate-400 text-sm">Deep scan of local market players</p>
          </div>
          <div className="bg-slate-800/50 backdrop-blur border border-slate-700 rounded-xl p-6 hover:border-purple-500 transition-colors">
            <div className="text-3xl mb-3">📊</div>
            <h3 className="font-bold text-lg mb-2">Trend Analysis</h3>
            <p className="text-slate-400 text-sm">Real-time demand forecasting</p>
          </div>
          <div className="bg-slate-800/50 backdrop-blur border border-slate-700 rounded-xl p-6 hover:border-purple-500 transition-colors">
            <div className="text-3xl mb-3">⚙️</div>
            <h3 className="font-bold text-lg mb-2">Risk Calculation</h3>
            <p className="text-slate-400 text-sm">Safe manufacturing batch sizes</p>
          </div>
        </div>

        <div className="bg-slate-800/70 backdrop-blur rounded-2xl border border-slate-700 p-8 shadow-2xl">
          <div className="flex items-center gap-3 mb-6">
            <AlertCircle className="w-6 h-6 text-blue-400" />
            <h2 className="text-2xl font-bold">New Analysis</h2>
          </div>
          <p className="text-slate-400 mb-6">Enter product details to launch the agent swarm.</p>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-sm font-semibold mb-2">Product Name *</label>
              <input
                type="text"
                name="product"
                value={formData.product}
                onChange={handleInput}
                placeholder="e.g., Smart Water Bottle"
                className="w-full bg-slate-900 border border-slate-600 rounded-lg px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-purple-500 transition-colors"
              />
            </div>

            <div className="grid md:grid-cols-2 gap-5">
              <div>
                <label className="block text-sm font-semibold mb-2">Target Region *</label>
                <input
                  type="text"
                  name="region"
                  value={formData.region}
                  onChange={handleInput}
                  placeholder="e.g., North America"
                  className="w-full bg-slate-900 border border-slate-600 rounded-lg px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-purple-500 transition-colors"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2">Max Price ($) *</label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">$</span>
                  <input
                    type="number"
                    name="price"
                    value={formData.price}
                    onChange={handleInput}
                    placeholder="0"
                    className="w-full bg-slate-900 border border-slate-600 rounded-lg pl-8 pr-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-purple-500 transition-colors"
                  />
                </div>
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold mb-2">Target Age</label>
              <select
                name="age"
                value={formData.age}
                onChange={handleInput}
                className="w-full bg-slate-900 border border-slate-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-purple-500 transition-colors appearance-none cursor-pointer"
              >
                <option>All Demographics</option>
                <option>Gen Z (18-25)</option>
                <option>Millennials (26-40)</option>
                <option>Gen X & Boomers (40+)</option>
              </select>
              <div className="text-slate-500 text-xs mt-1">▼</div>
            </div>

            <div>
              <label className="block text-sm font-semibold mb-2">Product Description *</label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleInput}
                rows={4}
                placeholder="Describe your product idea, key features, and unique selling points..."
                className="w-full bg-slate-900 border border-slate-600 rounded-lg px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-purple-500 transition-colors resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={!isFormValid}
              className={`w-full py-4 rounded-lg font-bold text-lg flex items-center justify-center gap-3 transition-all ${
                isFormValid
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg hover:shadow-xl'
                  : 'bg-slate-700 text-slate-500 cursor-not-allowed'
              }`}
            >
              {isFormValid ? (
                <>
                  <ArrowRight className="w-6 h-6" />
                  Start Analysis
                </>
              ) : (
                <>
                  <AlertCircle className="w-6 h-6" />
                  Fill all fields to start
                </>
              )}
            </button>
          </form>
        </div>

        <div className="text-center mt-12 text-slate-500 text-sm">
          <p>© 2026 Synapsee AI Inc.</p>
        </div>
      </div>
    </div>
  );
}