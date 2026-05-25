import { useState, useEffect } from 'react';
import { Phone, Mail, Clock, Menu, X, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [logoError, setLogoError] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header>
      {/* Top Bar */}
      <div className="bg-slate-900 text-slate-300 py-2 hidden lg:block">
        <div className="max-w-[95%] 2xl:max-w-[1600px] w-full mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center text-sm">
          <div className="flex items-center space-x-6">
            <span className="flex items-center"><Clock size={16} className="mr-2 text-cyan-500" /> Opening Hours: Monday - Saturday 10 am to 7 pm</span>
            <span className="flex items-center"><Mail size={16} className="mr-2 text-cyan-500" /> info@sairavitroindustries.in</span>
          </div>
          <div className="flex items-center space-x-4">
            <a href="https://www.facebook.com/profile.php?id=61577655785415" target="_blank" aria-label="Saira Vitro Facebook" className="hover:text-cyan-500 transition-colors"><Facebook size={16} /></a>
            <a href="#" aria-label="Saira Vitro Twitter" className="hover:text-cyan-500 transition-colors"><Twitter size={16} /></a>
            <a href="https://www.instagram.com/sairavitro8817?utm_source=qr&igsh=MXFnNnF3ZzR5dnpzbQ==" aria-label="Saira Vitro Instagram" target="_blank" className="hover:text-cyan-500 transition-colors"><Instagram size={16} /></a>
            <a href="#" aria-label="Saira Vitro LinkedIn" className="hover:text-cyan-500 transition-colors"><Linkedin size={16} /></a>
          </div>
        </div>
      </div>

      {/* Main Navbar - Reduced padding to keep the header slim */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-1.5 top-0' : 'bg-white/95 backdrop-blur-sm py-2 lg:py-3 top-0 lg:top-[36px]'}`}>
        <div className="max-w-[95%] 2xl:max-w-[1600px] w-full mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center">
              <a href="#" className="flex items-center">
                {!logoError ? (
                  <img 
                    src="/logo/logo.png" 
                    alt="Saira Vitro" 
                    // Changed to h-[size] w-auto to maintain aspect ratio without massive square footprint
                    className={`object-contain transition-all duration-300 ${
                      isScrolled 
                        ? 'h-[40px] md:h-[50px] w-auto' 
                        : 'h-[55px] md:h-[85px] w-auto max-w-[180px]'
                    }`}
                    onError={() => setLogoError(true)}
                  />
                ) : (
                  <span className="text-3xl font-black tracking-tight text-slate-900">SAIRA <span className="text-cyan-600">VITRO</span></span>
                )}
              </a>
            </div>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center space-x-8">
              <a href="#" className="text-cyan-600 font-semibold transition-colors">Home</a>
              <a href="#about" className="text-slate-600 hover:text-cyan-600 font-medium transition-colors">About</a>
              <a href="#products" className="text-slate-600 hover:text-cyan-600 font-medium transition-colors">Glass Powder</a>
              <a href="#gallery" className="text-slate-600 hover:text-cyan-600 font-medium transition-colors">Gallery</a>
              <a href="#contact" className="text-slate-600 hover:text-cyan-600 font-medium transition-colors">Contact Us</a>
              
              <div className="flex items-center ml-4 pl-4 border-l border-slate-200">
                <div className="w-10 h-10 rounded-full bg-cyan-50 flex items-center justify-center text-cyan-600 mr-3">
                  <Phone size={18} fill="currentColor" />
                </div>
                <div>
                  <p className="text-xs text-slate-500 font-medium uppercase tracking-wider">Call Us Now</p>
                  <a href="tel:+91-8817729866" className="text-sm font-bold text-slate-800 hover:text-cyan-600">+91-8817729866</a>
                </div>
              </div>
              
              <a href="#contact" className="bg-cyan-600 hover:bg-cyan-700 text-white px-6 py-2.5 rounded-full font-medium transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5">
                Get A Quote
              </a>
            </div>

            {/* Mobile menu button */}
            <div className="lg:hidden flex items-center">
              <button aria-label="Toggle mobile menu" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-slate-600 hover:text-cyan-600 focus:outline-none bg-slate-100 p-2 rounded-md">
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="lg:hidden absolute top-full left-0 w-full bg-white shadow-xl border-t border-slate-100 overflow-hidden"
            >
              <div className="px-4 pt-2 pb-6 space-y-1 flex flex-col shadow-inner">
                <a href="#" onClick={() => setIsMobileMenuOpen(false)} className="px-4 py-3 text-base font-semibold text-cyan-600 border-b border-slate-100 bg-cyan-50 rounded-t-lg">Home</a>
                <a href="#about" onClick={() => setIsMobileMenuOpen(false)} className="px-4 py-3 text-base font-medium text-slate-700 border-b border-slate-100 hover:bg-slate-50 hover:text-cyan-600 transition-colors">About</a>
                <a href="#products" onClick={() => setIsMobileMenuOpen(false)} className="px-4 py-3 text-base font-medium text-slate-700 border-b border-slate-100 hover:bg-slate-50 hover:text-cyan-600 transition-colors">Glass Powder</a>
                <a href="#gallery" onClick={() => setIsMobileMenuOpen(false)} className="px-4 py-3 text-base font-medium text-slate-700 border-b border-slate-100 hover:bg-slate-50 hover:text-cyan-600 transition-colors">Gallery</a>
                <a href="#contact" onClick={() => setIsMobileMenuOpen(false)} className="px-4 py-3 text-base font-medium text-slate-700 border-b border-slate-100 hover:bg-slate-50 hover:text-cyan-600 transition-colors">Contact Us</a>
                <div className="pt-4 px-3 flex flex-col gap-4">
                  <a href="#contact" onClick={() => setIsMobileMenuOpen(false)} className="bg-cyan-600 text-white text-center px-6 py-3 rounded-lg font-medium shadow-md">Get A Quote</a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}