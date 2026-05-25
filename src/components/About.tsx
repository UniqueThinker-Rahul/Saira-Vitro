import { motion } from 'motion/react';
import { CheckCircle2 } from 'lucide-react';

export function About() {
  const features = [
    "Established in 2025",
    "Leading & Trustworthy",
    "Types of Glass Powder",
    "Wide Range of Products",
    "Quality-Oriented",
    "Global Reach",
    "Manufacturer",
    "Exporter & Supplier",
  ];

  return (
    <section id="about" className="py-24 bg-white relative overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-cyan-50 rounded-full mix-blend-multiply filter blur-3xl opacity-70 -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-50 rounded-full mix-blend-multiply filter blur-3xl opacity-70 translate-x-1/3 translate-y-1/3"></div>

      <div className="max-w-[95%] 2xl:max-w-[1600px] w-full mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-full lg:w-1/2 relative"
          >
            <div className="relative z-20 rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
              <img 
                src="/background/image.png" 
                alt="Industrial Factory" 
                className="w-full h-[500px] object-cover hover:scale-105 transition-transform duration-1000"
              />
            </div>
            
            {/* Offset decorative block - FIXED (removed conflicting translates) */}
            <div className="absolute top-0 left-0 w-full h-[500px] bg-cyan-600 rounded-2xl -z-10 translate-x-4 translate-y-4 sm:translate-x-6 sm:translate-y-6"></div>
            
            {/* Overlay stats box - ADJUSTED for mobile responsiveness */}
            <div className="absolute -bottom-4 left-4 sm:-bottom-6 sm:-left-6 bg-white p-6 rounded-xl shadow-xl border border-slate-100 z-30 animate-[bounce_4s_infinite]">
              <div className="text-cyan-600 font-extrabold text-4xl mb-1">100%</div>
              <div className="text-slate-600 font-semibold text-sm">Quality Guaranteed</div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="w-full lg:w-1/2 lg:pl-8"
          >
            <div className="inline-block px-4 py-1.5 rounded-full bg-cyan-50 border border-cyan-100 mb-6">
              <span className="text-cyan-600 font-bold tracking-widest uppercase text-xs">About Us</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight leading-tight">Welcome to Our <span className="text-cyan-600">Website</span></h2>
            <div className="w-20 h-1.5 bg-cyan-500 rounded-full opacity-80 mb-8"></div>
            
            <p className="text-slate-600 text-lg leading-relaxed mb-8 font-medium">
              Established in the year 2025, Saira Vitro is among the leading and trustworthy organizations of this domain, engaged in manufacturing, exporting, and supplying a wide range of Glass Powder. 
            </p>
            <p className="text-slate-500 text-base leading-relaxed mb-10">
              Our offered assortment of products comprises of Brown Glass Powder, Green Glass Powder, and many more. We focus on providing highly reliable and pure materials for various industrial applications globally.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8">
              {features.map((feature, idx) => (
                <div key={idx} className="flex items-center space-x-3 group">
                  <div className="w-6 h-6 rounded-full bg-cyan-100 flex items-center justify-center group-hover:bg-cyan-500 transition-colors shrink-0">
                    <CheckCircle2 className="text-cyan-600 group-hover:text-white transition-colors" size={14} strokeWidth={3} />
                  </div>
                  <span className="text-slate-700 font-bold text-sm tracking-wide bg-gradient-to-r hover:from-cyan-600 hover:to-blue-600 hover:text-transparent hover:bg-clip-text transition-all cursor-default">{feature}</span>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}