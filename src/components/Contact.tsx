import { useState } from 'react';
import { motion } from 'motion/react';
import { Home, Phone, Mail, Send, MapPin, Clock } from 'lucide-react';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const phoneNumber = "918817729866";
    const text = `New Inquiry from Website:\n\n*Name:* ${formData.name}\n*Email:* ${formData.email}\n*Phone:* ${formData.phone}\n*Message:* ${formData.message}`;
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(text)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Background with abstract overlay */}
      <div className="absolute inset-0 bg-slate-900">
         <img 
          src="https://images.unsplash.com/photo-1507208773393-40d9fc670acf?q=80&w=2668&auto=format&fit=crop" 
          alt="Contact background" 
          className="w-full h-full object-cover opacity-10 mix-blend-overlay"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-900/95 to-slate-800/90"></div>
      </div>

      <div className="relative z-10 max-w-[95%] 2xl:max-w-[1600px] w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <p className="text-cyan-400 font-bold tracking-widest uppercase text-sm mb-3">Contact Us</p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6 tracking-tight">Request a <span className="text-cyan-400">Free Quote</span></h2>
          <div className="w-24 h-1.5 bg-cyan-500 mx-auto rounded-full opacity-80"></div>
          <p className="mt-6 text-slate-300 text-lg leading-relaxed font-light">Get in touch with us for premium glass powder supplies. We usually respond within 24 hours.</p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-8 xl:gap-16">
           <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full lg:w-[60%] bg-white p-8 md:p-12 rounded-3xl shadow-2xl relative"
          >
            {/* Decorative element */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-cyan-50 rounded-full -z-10 blur-xl"></div>
            
            <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">Full Name *</label>
                  <input type="text" name="name" value={formData.name} onChange={handleChange} className="w-full px-5 py-3.5 rounded-xl bg-slate-50 border-2 border-slate-100 focus:border-cyan-500 focus:ring-4 focus:ring-cyan-500/10 transition-all outline-none font-medium text-slate-700" placeholder="John Doe" required />
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">Email Address *</label>
                  <input type="email" name="email" value={formData.email} onChange={handleChange} className="w-full px-5 py-3.5 rounded-xl bg-slate-50 border-2 border-slate-100 focus:border-cyan-500 focus:ring-4 focus:ring-cyan-500/10 transition-all outline-none font-medium text-slate-700" placeholder="john@example.com" required />
                </div>
              </div>
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">Phone Number *</label>
                <input type="tel" name="phone" value={formData.phone} onChange={handleChange} className="w-full px-5 py-3.5 rounded-xl bg-slate-50 border-2 border-slate-100 focus:border-cyan-500 focus:ring-4 focus:ring-cyan-500/10 transition-all outline-none font-medium text-slate-700" placeholder="+91 12345 67890" required />
              </div>
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">Your Message *</label>
                <textarea name="message" value={formData.message} onChange={handleChange} rows={5} className="w-full px-5 py-3.5 rounded-xl bg-slate-50 border-2 border-slate-100 focus:border-cyan-500 focus:ring-4 focus:ring-cyan-500/10 transition-all outline-none font-medium text-slate-700 resize-none" placeholder="Tell us about your requirements..." required></textarea>
              </div>
              <button type="submit" className="bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white px-8 py-4 rounded-xl font-bold w-full transition-all flex items-center justify-center group shadow-lg shadow-cyan-600/30 hover:shadow-cyan-600/50 hover:-translate-y-0.5">
                Send Message <Send size={18} className="ml-3 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </form>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-full lg:w-[40%] flex flex-col justify-center"
          >
            <div className="bg-slate-800/60 backdrop-blur-xl p-8 md:p-12 rounded-3xl border border-white/10 shadow-2xl h-full relative overflow-hidden">
              {/* Background glow inside the card */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/20 rounded-full filter blur-[50px]"></div>
              
              <h3 className="text-3xl font-extrabold text-white mb-10 pb-6 border-b border-white/10 relative z-10">Get In Touch</h3>
              
              <ul className="space-y-10 relative z-10">
                <li className="flex items-start group">
                  <div className="w-14 h-14 bg-cyan-900/40 rounded-2xl flex items-center justify-center text-cyan-400 shrink-0 mr-5 border border-cyan-500/20 group-hover:bg-cyan-500 group-hover:text-white transition-colors duration-300">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <span className="block text-white font-bold mb-2 text-lg">Office Address</span>
                    <span className="text-slate-300 text-base leading-relaxed block font-medium">
                      Word no. 02, Gramm / Po Vijay Tahshil Ramnujganj<br/>VTC Vijaynagar, Sugyja<br/>Chhattisgarh 497220
                    </span>
                  </div>
                </li>
                <li className="flex items-start group">
                  <div className="w-14 h-14 bg-cyan-900/40 rounded-2xl flex items-center justify-center text-cyan-400 shrink-0 mr-5 border border-cyan-500/20 group-hover:bg-cyan-500 group-hover:text-white transition-colors duration-300">
                    <Phone size={24} />
                  </div>
                  <div>
                    <span className="block text-white font-bold mb-2 text-lg">Phone Number</span>
                    <a href="tel:+91-8817729866" className="text-slate-300 text-base hover:text-cyan-400 transition-colors font-medium block">+91 - 88177 29866</a>
                  </div>
                </li>
                <li className="flex items-start group">
                  <div className="w-14 h-14 bg-cyan-900/40 rounded-2xl flex items-center justify-center text-cyan-400 shrink-0 mr-5 border border-cyan-500/20 group-hover:bg-cyan-500 group-hover:text-white transition-colors duration-300">
                    <Mail size={24} />
                  </div>
                  <div>
                    <span className="block text-white font-bold mb-2 text-lg">Email Address</span>
                    <a href="mailto:info@sairavitroindustries.in" className="text-slate-300 text-base hover:text-cyan-400 transition-colors font-medium break-all block">info@sairavitroindustries.in</a>
                  </div>
                </li>
                <li className="flex items-start group">
                  <div className="w-14 h-14 bg-cyan-900/40 rounded-2xl flex items-center justify-center text-cyan-400 shrink-0 mr-5 border border-cyan-500/20 group-hover:bg-cyan-500 group-hover:text-white transition-colors duration-300">
                    <Clock size={24} />
                  </div>
                  <div>
                    <span className="block text-white font-bold mb-2 text-lg">Working Hours</span>
                    <span className="text-slate-300 text-base font-medium block">Monday - Saturday<br/>10:00 AM to 7:00 PM</span>
                  </div>
                </li>
              </ul>
            </div>
          </motion.div>

         
        </div>
      </div>
    </section>
  );
}
