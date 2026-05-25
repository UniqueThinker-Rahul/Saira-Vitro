import { motion } from 'motion/react';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    name: "Deepak",
    designation: "Happy Client",
    text: "Saira Vitro Industries consistently delivers high-quality glass powder. Their product quality and timely delivery make them a reliable partner."
  },
  {
    name: "Nitin",
    designation: "Happy Client",
    text: "We have been sourcing Brown and Green Glass Powder from Saira Vitro Industries, and the quality has always met our expectations."
  },
  {
    name: "Deepanshu",
    designation: "Happy Client",
    text: "Excellent service, competitive pricing, and superior product quality. Working with Saira Vitro Industries has been a smooth experience."
  },
  {
    name: "Rahul",
    designation: "Happy Client",
    text: "Saira Vitro Industries is a trusted manufacturer and exporter of glass powder. Their commitment to quality truly stands out."
  },
  {
    name: "Vivek",
    designation: "Happy Client",
    text: "They understand customer requirements well and always provide reliable, quality-driven solutions without compromise."
  }
];

export function Testimonials() {
  return (
    <section className="py-24 bg-slate-50 overflow-hidden relative">
      {/* Decorative patterns */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-50 translate-x-1/2 -translate-y-1/2"></div>
      
      <div className="max-w-[95%] 2xl:max-w-[1600px] w-full mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <p className="text-cyan-600 font-bold tracking-widest uppercase text-sm mb-3">Testimonials</p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight">What Our Clients <br/><span className="text-cyan-600">Are Saying</span></h2>
          <div className="w-24 h-1.5 bg-cyan-500 mx-auto rounded-full opacity-80"></div>
        </div>

        <div className="flex flex-wrap justify-center gap-8">
          {testimonials.slice(0, 3).map((testimonial, index) => (
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              key={index} 
              className="bg-white p-8 md:p-10 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 relative border border-slate-100 w-full md:w-[calc(50%-16px)] lg:w-[calc(33.333%-22px)] group flex flex-col"
            >
              <Quote className="absolute right-8 top-8 text-cyan-50 group-hover:text-cyan-100 transition-colors duration-300" size={80} strokeWidth={0.5} />
              
              <div className="relative z-10 flex-grow">
                {/* 5 Stars fixed rating for happy clients */}
                <div className="flex gap-1 mb-6">
                  {[1,2,3,4,5].map(star => (
                     <svg key={star} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                       <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                     </svg>
                  ))}
                </div>

                <p className="text-slate-600 font-medium leading-relaxed mb-8 text-lg">
                  {testimonial.text}
                </p>
                
                <div className="flex items-center pt-6 border-t border-slate-100 mt-auto">
                  <div className="w-14 h-14 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xl mr-5 shrink-0 shadow-md">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-extrabold text-slate-900 text-lg">{testimonial.name}</h4>
                    <p className="text-cyan-600 text-sm font-semibold tracking-wide uppercase mt-1">{testimonial.designation}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
