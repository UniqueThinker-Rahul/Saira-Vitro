import { motion, useInView } from 'motion/react';
import { useRef, useEffect, useState } from 'react';

const stats = [
  { label: 'Orders Pending', value: 402 },
  { label: 'Projects Delivered', value: 543 },
  { label: 'Trusted Clients', value: 926 },
];

function Counter({ value }: { value: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const duration = 2500;
      const startTime = performance.now();
      
      const updateCounter = (currentTime: number) => {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        
        // easeOutExpo
        const ease = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
        
        setCount(Math.floor(ease * value));
        
        if (progress < 1) {
          requestAnimationFrame(updateCounter);
        }
      };
      
      requestAnimationFrame(updateCounter);
    }
  }, [isInView, value]);

  return <span ref={ref}>{count}</span>;
}

export function Stats() {
  return (
    <section className="relative py-32 bg-slate-900 border-y-8 border-cyan-500 overflow-hidden">
      {/* Background Graphic */}
      <div className="absolute inset-0">
        <img 
          src="https://images.unsplash.com/photo-1587293852726-70cdb56c2866?q=80&w=2672&auto=format&fit=crop" 
          alt="Factory background" 
          className="w-full h-full object-cover opacity-10 mix-blend-overlay"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/95 to-slate-900/90"></div>
      </div>
      
      <div className="relative z-10 max-w-[95%] 2xl:max-w-[1600px] w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-5/12 bg-white/5 p-8 rounded-2xl backdrop-blur-sm border border-white/10"
          >
            <div className="flex items-start">
              <span className="text-7xl md:text-8xl lg:text-9xl font-black text-transparent bg-clip-text bg-gradient-to-br from-cyan-400 to-blue-600 tabular-nums leading-none tracking-tighter mr-8 drop-shadow-sm">01</span>
              <div>
                <h3 className="text-white text-2xl md:text-3xl font-light leading-snug mt-2 pt-2">
                  <span className="font-bold text-cyan-400 block mb-2 text-xl tracking-widest uppercase">Years Of Experience</span> 
                  Providing our best services with meticulous planning.
                </h3>
              </div>
            </div>
          </motion.div>
          
          <div className="w-full lg:w-7/12">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
               <motion.div 
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="text-center p-6 rounded-2xl hover:bg-slate-800/50 transition-colors border border-transparent hover:border-slate-700"
                >
                  <div className="text-5xl md:text-6xl font-black text-white mb-3 tabular-nums drop-shadow-md">
                    <Counter value={254} />
                    <span className="text-cyan-500 text-3xl ml-1">+</span>
                  </div>
                  <div className="text-cyan-400 font-bold uppercase tracking-widest text-sm">Expert Team</div>
                </motion.div>
              {stats.map((stat, idx) => (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 + (idx * 0.1) }}
                  key={idx} 
                  className="text-center p-6 rounded-2xl hover:bg-slate-800/50 transition-colors border border-transparent hover:border-slate-700"
                >
                  <div className="text-5xl md:text-6xl font-black text-white mb-3 tabular-nums drop-shadow-md">
                    <Counter value={stat.value} />
                    <span className="text-cyan-500 text-3xl ml-1">+</span>
                  </div>
                  <div className="text-cyan-400 font-bold uppercase tracking-widest text-sm">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
