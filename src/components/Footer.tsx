import { Mail, Facebook, Twitter, Instagram, Linkedin, ArrowRight } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-slate-950 pt-32 pb-6 border-t-[8px] border-cyan-600 relative mt-24">
      {/* Newsletter Section overlapping the footer top border */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[95%] 2xl:max-w-[1600px] px-4 sm:px-6 lg:px-8">
         <div className="bg-gradient-to-r from-cyan-600 to-blue-700 rounded-3xl shadow-2xl p-8 md:p-12 flex flex-col lg:flex-row items-center justify-between border border-cyan-400/30 overflow-hidden relative">
           {/* Abstract shapes in the background of the newsletter */}
           <div className="absolute -right-20 -top-20 w-64 h-64 bg-white/10 rounded-full blur-2xl pointer-events-none"></div>
           <div className="absolute -left-20 -bottom-20 w-64 h-64 bg-cyan-400/20 rounded-full blur-2xl pointer-events-none"></div>
           
           <div className="flex items-center mb-8 lg:mb-0 w-full lg:w-5/12 z-10">
             <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center text-white shrink-0 mr-6 shadow-inner border border-white/20">
                <Mail size={32} />
             </div>
             <div>
                <h4 className="text-white text-2xl font-extrabold mb-1">Newsletter Setup</h4>
                <p className="text-cyan-100 text-sm font-medium">Get latest news & updates daily.</p>
             </div>
           </div>
           
           <div className="w-full lg:w-7/12 z-10">
             <form className="flex flex-col sm:flex-row gap-3">
                <input 
                  type="email" 
                  placeholder="Enter your email address..." 
                  className="w-full px-6 py-4 rounded-xl bg-white/10 outline-none text-white placeholder-cyan-100/70 border border-white/20 focus:border-white/60 focus:bg-white/20 transition-all font-medium backdrop-blur-sm"
                  required
                />
                <button type="submit" className="bg-white hover:bg-slate-100 text-slate-900 px-8 py-4 rounded-xl font-bold transition-colors whitespace-nowrap flex items-center justify-center group shadow-lg">
                  Subscribe Now <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </button>
             </form>
           </div>
         </div>
      </div>

      <div className="max-w-[95%] 2xl:max-w-[1600px] w-full mx-auto px-4 sm:px-6 lg:px-8 mt-12 md:mt-16 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 xl:gap-16">
          
          <div className="lg:col-span-4">
             <span className="text-4xl font-black text-white mb-6 block tracking-tight">SAIRA <span className="text-cyan-500">VITRO</span></span>
             <p className="text-slate-400 text-base leading-relaxed mb-8 font-medium">
              Established in the year 2025, Saira Vitro is among the leading and trustworthy organizations of this domain, engaged in Manufacturer, Exporter, Supplier of a wide range of Glass Powder.
             </p>
             <div className="flex space-x-4">
                <a href="https://www.facebook.com/profile.php?id=61577655785415" target="_blank" className="w-12 h-12 rounded-xl bg-slate-800/80 border border-slate-700 flex items-center justify-center text-slate-300 hover:bg-cyan-600 hover:text-white hover:-translate-y-1 transition-all"><Facebook size={20} fill="currentColor" className="stroke-none" /></a>
                <a href="#" className="w-12 h-12 rounded-xl bg-slate-800/80 border border-slate-700 flex items-center justify-center text-slate-300 hover:bg-cyan-600 hover:text-white hover:-translate-y-1 transition-all"><Twitter size={20} fill="currentColor" className="stroke-none" /></a>
                <a href="https://www.instagram.com/sairavitro8817?utm_source=qr&igsh=MXFnNnF3ZzR5dnpzbQ==" target="_blank" className="w-12 h-12 rounded-xl bg-slate-800/80 border border-slate-700 flex items-center justify-center text-slate-300 hover:bg-cyan-600 hover:text-white hover:-translate-y-1 transition-all"><Instagram size={20} /></a>
                <a href="#" className="w-12 h-12 rounded-xl bg-slate-800/80 border border-slate-700 flex items-center justify-center text-slate-300 hover:bg-cyan-600 hover:text-white hover:-translate-y-1 transition-all"><Linkedin size={20} fill="currentColor" className="stroke-none" /></a>
             </div>
          </div>

          <div className="lg:col-span-3 lg:col-start-6">
             <h4 className="text-white text-xl font-bold mb-8 relative inline-block">
                 Quick Links
                 <span className="absolute -bottom-3 left-0 w-1/2 h-1 bg-cyan-600 rounded-sm"></span>
             </h4>
             <ul className="space-y-4">
               <li><a href="#" className="text-slate-400 hover:text-cyan-400 transition-colors text-base font-medium flex items-center group"><ArrowRight size={16} className="mr-3 text-cyan-600 group-hover:translate-x-2 transition-transform" /> Home</a></li>
               <li><a href="#about" className="text-slate-400 hover:text-cyan-400 transition-colors text-base font-medium flex items-center group"><ArrowRight size={16} className="mr-3 text-cyan-600 group-hover:translate-x-2 transition-transform" /> About Us</a></li>
               <li><a href="#products" className="text-slate-400 hover:text-cyan-400 transition-colors text-base font-medium flex items-center group"><ArrowRight size={16} className="mr-3 text-cyan-600 group-hover:translate-x-2 transition-transform" /> Glass Powder</a></li>
               <li><a href="#gallery" className="text-slate-400 hover:text-cyan-400 transition-colors text-base font-medium flex items-center group"><ArrowRight size={16} className="mr-3 text-cyan-600 group-hover:translate-x-2 transition-transform" /> Gallery</a></li>
               <li><a href="#contact" className="text-slate-400 hover:text-cyan-400 transition-colors text-base font-medium flex items-center group"><ArrowRight size={16} className="mr-3 text-cyan-600 group-hover:translate-x-2 transition-transform" /> Contact Us</a></li>
             </ul>
          </div>

          <div className="lg:col-span-4">
             <h4 className="text-white text-xl font-bold mb-8 relative inline-block">
                Contact Info
                <span className="absolute -bottom-3 left-0 w-1/2 h-1 bg-cyan-600 rounded-sm"></span>
             </h4>
             <ul className="space-y-6">
               <li className="flex text-slate-400 text-base leading-relaxed font-medium">
                 <span className="font-bold text-white min-w-[80px]">Address:</span>
                 <span>Word no. 02, Gramm / Po Vijay Tahshil Ramnujganj Vtc Vijaynagar Sugyja Chhattisgarh 497220</span>
               </li>
               <li className="flex text-slate-400 text-base font-medium">
                 <span className="font-bold text-white min-w-[80px]">Email:</span>
                 <a href="mailto:info@sairavitroindustries.in" className="hover:text-cyan-400 transition-colors">info@sairavitroindustries.in</a>
               </li>
               <li className="flex text-slate-400 text-base font-medium">
                 <span className="font-bold text-white min-w-[80px]">Phone:</span>
                 <a href="tel:+91-8817729866" className="hover:text-cyan-400 transition-colors">+91 - 88177 29866</a>
               </li>
             </ul>
          </div>

        </div>
      </div>

      <div className="bg-slate-900 border-t border-slate-800">
         <div className="max-w-[95%] 2xl:max-w-[1600px] w-full mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col md:flex-row items-center justify-between">
            <p className="text-slate-500 text-base font-medium">
               Copyright © {new Date().getFullYear()} <span className="text-cyan-500 font-bold">Saira Vitro</span>. All Rights Reserved.
            </p>
            <div className="mt-4 md:mt-0 space-x-6 text-sm font-medium text-slate-500">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            </div>
         </div>
      </div>
      
    </footer>
  );
}
