import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight } from 'lucide-react';

const slides = [
  {
    image: "/main-slider/image-1.jpg", 
    // title: "Premium Glass Powder",
    subtitle: "High Purity & Consistency for all Industrial Applications"
  },
  {
    image: "/main-slider/image-2.jpg", 
    // title: "Reliable Quality",
    subtitle: "Manufacturing Excellence in Glass Products"
  },
  {
    image: "/main-slider/image-3.jpg", 
    // title: "Saira Vitro Industries",
    subtitle: "Your Trusted Partner in Material Supply"
  },
  {
    image: "/main-slider/image-4.jpg", 
    // title: "Saira Vitro Industries",
    subtitle: "Your Trusted Partner in Material Supply"
  },
  {
    image: "/main-slider/image-5.jpg", 
    // title: "Saira Vitro Industries",
    subtitle: "Your Trusted Partner in Material Supply"
  }
];

export function Hero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full aspect-[1200/460] min-h-[520px] md:min-h-0 overflow-hidden bg-slate-900 mt-[72px] lg:mt-[100px]">
      <AnimatePresence mode='wait'>
        <motion.div
          key={current}
          initial={{ opacity: 0, scale: 1.02 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.8 } }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="absolute inset-0"
        >
          {/* Left-to-right gradient protection for text legibility without darkening the main product image */}
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/85 via-slate-900/50 to-transparent z-10" />
          <img 
            src={slides[current].image} 
            alt={slides[current].title} 
            className="w-full h-full object-cover object-center"
          />
        </motion.div>
      </AnimatePresence>

      <div className="relative z-20 h-full max-w-[95%] 2xl:max-w-[1600px] w-full mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16">
        <AnimatePresence mode='wait'>
          <motion.div
            key={current}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15, transition: { duration: 0.3 } }}
            transition={{ delay: 0.2, duration: 0.6, ease: "easeOut" }}
            className="h-full flex flex-col justify-between max-w-xl lg:max-w-2xl"
          >
            {/* Top Section: Title aligned with upper arrows */}
            <div className="mt-4 md:mt-2">
              {/* <div className="inline-block px-3 py-1 rounded-full bg-cyan-500/20 border border-cyan-400/30 backdrop-blur-sm mb-4">
                <h2 className="text-cyan-300 font-bold tracking-widest uppercase text-[10px] sm:text-xs">
                  Welcome to Saira Vitro
                </h2>
              </div> */}
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-[1.15] tracking-tight">
                {slides[current].title}
              </h1>
            </div>

            {/* Bottom Section: Subtitle & Buttons aligned with lower arrows */}
            <div className="mb-8 md:mb-4">
              <p className="text-sm sm:text-base text-slate-300 mb-6 font-light leading-relaxed border-l-2 border-cyan-500 pl-4">
                {slides[current].subtitle}
              </p>
              <div className="flex flex-wrap gap-3">
                <a href="#products" className="px-6 py-3 text-sm sm:text-base bg-cyan-600 hover:bg-cyan-500 text-white rounded-lg font-bold transition-all shadow-lg shadow-cyan-600/30 flex items-center group">
                  Our Products <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </a>
                <a href="#contact" className="px-6 py-3 text-sm sm:text-base bg-white/10 hover:bg-white/20 text-white border border-white/20 rounded-lg font-bold transition-all backdrop-blur-md">
                  Contact Us
                </a>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Responsive Navigation dots */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-30 flex gap-2.5">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrent(idx)}
            className={`h-2 rounded-full transition-all duration-300 ${
              idx === current ? 'bg-cyan-500 w-8' : 'bg-white/40 hover:bg-white/70 w-2'
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
}