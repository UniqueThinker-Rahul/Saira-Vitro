import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

const products = [
  {
    name: "100 Mesh Color Glass Powder",
    desc: "100 Mesh Color Glass Powder is a fine, uniform material with vibrant colors, excellent dispersion, durability, and purity, ideal for ceramics, coatings, construction, decorative, and industrial applications.",
    img: "/products/one.jpg" // colorful abstract
  },
  {
    name: "100 Mesh White Glass Powder",
    desc: "100 Mesh White Glass Powder is a fine, high purity material with smooth texture and bright appearance, offering excellent dispersion, durability, and consistency for ceramics.",
    img: "/products/two.jpg" // white powder
  },
  {
    name: "200 Mesh White Glass Powder",
    desc: "200 Mesh White Glass Powder is an ultra fine, high purity material with excellent whiteness, smooth texture, and superior dispersion for ceramics, coatings, construction, and industrial uses.",
    img: "/products/three.jpg" // white fine powder
  },
  {
    name: "200 Mesh",
    desc: "200 Mesh Glass Powder is an ultra fine material with uniform particle size, smooth texture, and excellent dispersion, suitable for ceramics, coatings, construction, and industrial applications.",
    img: "/products/four.jpg" // grey/glass powder
  },
  {
    name: "300 Mesh",
    desc: "300 Mesh Glass Powder is an ultra fine, high purity material with smooth texture, uniform particles, and excellent dispersion for industrial applications.",
    img: "/products/five.jpg" // abstract fine material
  },
  {
    name: "400 Mesh",
    desc: "400 Mesh Glass Powder is ultra-fine, high-purity, with smooth texture and uniform particles, ideal for ceramics, coatings, and industrial applications.",
    img: "/products/six.jpg" // super fine
  },
  {
    name: "Glass Beads",
    desc: "Glass Beads are smooth, durable, and high-quality spherical particles used for reflective coatings, blasting, polishing, and decorative applications.",
    img: "/products/seven.jpg" // beads
  },
  {
    name: "Glass Flakes",
    desc: "Glass Flakes are thin, flat, high-strength particles used to enhance coatings, paints, composites, and corrosion-resistant industrial applications.",
    img: "/products/eight.jpg" // flakes / crystals
  }
];

export function Products() {
  return (
    <section id="products" className="py-24 bg-slate-50">
      <div className="max-w-[95%] 2xl:max-w-[1600px] w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <p className="text-cyan-600 font-bold tracking-widest uppercase text-sm mb-3">Saira Vitro</p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight">Our Premium <br/><span className="text-cyan-600">Glass Powder</span></h2>
          <div className="w-24 h-1.5 bg-cyan-500 mx-auto rounded-full opacity-80"></div>
          <p className="mt-6 text-slate-600 text-lg leading-relaxed">Explore our comprehensive range of high-quality glass powders tailored for all your industrial requirements.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 xl:gap-12">
          {products.map((product, index) => (
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: (index % 3) * 0.1, duration: 0.6 }}
              key={index} 
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 group flex flex-col border border-slate-100"
            >
              {/* Changed h-80 to aspect-square to perfectly fit 300x300 images */}
              <div className="relative aspect-square overflow-hidden bg-slate-100">
                <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-slate-900/40 transition-colors z-10 duration-300"></div>
                {/* Changed object-cover to object-contain */}
                <img 
                  src={product.img} 
                  alt={product.name} 
                  className="w-full h-full object-contain transform group-hover:scale-110 transition-transform duration-700 ease-out"
                />
                {/* Decorative fade at bottom of image */}
                <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-white to-transparent z-20"></div>
              </div>
              <div className="p-8 pt-4 flex-grow flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold text-slate-800 mb-3 group-hover:text-cyan-600 transition-colors leading-snug">
                    {product.name}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed mb-6 line-clamp-4 font-medium">
                    {product.desc}
                  </p>
                </div>
                <a href="#contact" className="inline-flex items-center text-sm font-bold text-cyan-600 hover:text-cyan-800 transition-colors group/link mt-auto w-max px-4 py-2 bg-cyan-50 rounded-lg hover:bg-cyan-100">
                  Enquire Now 
                  <ArrowRight size={16} className="ml-2 transform group-hover/link:translate-x-1 transition-transform" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}