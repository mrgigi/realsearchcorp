import React, { useState, useEffect } from "react";
import { Mail, TrendingUp, Users, Cpu, ArrowRight, Construction } from "lucide-react";
import { motion } from "framer-motion";

export default function Maintenance() {
  const [yearCount, setYearCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = 13;
    const duration = 2000;
    const increment = end / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setYearCount(end);
        clearInterval(timer);
      } else {
        setYearCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.1 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  return (
    <div className="min-h-screen bg-[#FAFAF9] relative overflow-hidden">
      {/* Neo-brutalist decorative elements - hidden on mobile */}
      <div className="hidden md:block absolute top-20 right-10 w-32 h-32 bg-yellow-400 border-4 border-black rotate-[12deg]" />
      <div className="hidden md:block absolute bottom-32 left-10 w-24 h-24 bg-cyan-400 border-4 border-black -rotate-[6deg]" />
      <div className="hidden md:block absolute top-1/3 left-1/4 w-16 h-16 bg-pink-400 border-4 border-black rotate-[45deg]" />

      {/* Main content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-12 md:py-20"
      >
        {/* Header badge */}
        <motion.div variants={itemVariants} className="flex justify-center mb-6 sm:mb-8">
          <div className="inline-flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 bg-yellow-400 border-[3px] sm:border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] sm:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] sm:hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1 transition-all">
            <Construction className="w-4 sm:w-5 h-4 sm:h-5" />
            <span className="text-xs sm:text-sm font-black uppercase tracking-wider">RealSearch and Partners LLC</span>
          </div>
        </motion.div>

        {/* Main heading */}
        <motion.div variants={itemVariants} className="text-center mb-8 sm:mb-12">
          <h1 className="text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-black mb-4 sm:mb-6 text-black leading-none uppercase tracking-tight px-2">
            Great companies<br />never stand still.
          </h1>
          <div className="max-w-4xl mx-auto bg-white border-[3px] sm:border-4 border-black p-4 sm:p-6 md:p-8 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] sm:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]">
            <p className="text-base sm:text-xl md:text-2xl font-bold text-black leading-relaxed">
              After <span className="bg-cyan-400 px-1 sm:px-2 border-2 border-black">{yearCount}+ years</span> of innovation and partnerships that shaped industries, we're redesigning our platform to reflect the scale of what's next.
            </p>
          </div>
        </motion.div>

        {/* Video section */}
        <motion.div variants={itemVariants} className="mb-12 sm:mb-16 max-w-5xl mx-auto">
          <div className="relative border-4 sm:border-[6px] md:border-8 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] sm:shadow-[16px_16px_0px_0px_rgba(0,0,0,1)] overflow-hidden">
            <video autoPlay loop muted playsInline className="w-full h-[200px] sm:h-[300px] md:h-[400px] object-cover">
              <source src="https://oprjperexnkidjndkjpx.supabase.co/storage/v1/object/sign/ejay%20real%20search/0_Meeting_Business_1280x720.mp4?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV81MTgzZTFmYS1iZDAyLTQ4ODQtOTE4NS03OTQ4NTkwMDE5NGMiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJlamF5IHJlYWwgc2VhcmNoLzBfTWVldGluZ19CdXNpbmVzc18xMjgweDcyMC5tcDQiLCJpYXQiOjE3NjEyMTgyMjUsImV4cCI6MTc5Mjc1NDIyNX0.sIkZ9zUxemhfXe3igxDrDQ8t4HsCvfn9p49ewF3PFjw" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <div className="absolute bottom-0 left-0 right-0 bg-yellow-400 border-t-4 sm:border-t-[6px] md:border-t-8 border-black p-2 sm:p-3 md:p-4">
              <p className="text-center font-black text-sm sm:text-lg md:text-xl uppercase">Building The Future</p>
            </div>
          </div>
        </motion.div>

        {/* Feature cards */}
        <motion.div variants={itemVariants} className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8 mb-12 sm:mb-16 max-w-6xl mx-auto">
          <div className="bg-blue-400 border-4 sm:border-[6px] border-black p-6 sm:p-8 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] sm:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] sm:hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1 transition-all">
            <div className="w-12 sm:w-16 h-12 sm:h-16 bg-black flex items-center justify-center mb-4 sm:mb-6 border-[3px] sm:border-4 border-black">
              <TrendingUp className="w-6 sm:w-8 h-6 sm:h-8 text-white" strokeWidth={3} />
            </div>
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-black text-black mb-2 uppercase">13+ years</h3>
            <p className="text-sm sm:text-base md:text-lg font-bold text-black uppercase">of continuous innovation</p>
          </div>

          <div className="bg-pink-400 border-4 sm:border-[6px] border-black p-6 sm:p-8 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] sm:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] sm:hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1 transition-all">
            <div className="w-12 sm:w-16 h-12 sm:h-16 bg-black flex items-center justify-center mb-4 sm:mb-6 border-[3px] sm:border-4 border-black">
              <Users className="w-6 sm:w-8 h-6 sm:h-8 text-white" strokeWidth={3} />
            </div>
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-black text-black mb-2 uppercase">Trusted</h3>
            <p className="text-sm sm:text-base md:text-lg font-bold text-black uppercase">by leading enterprises</p>
          </div>

          <div className="bg-cyan-400 border-4 sm:border-[6px] border-black p-6 sm:p-8 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] sm:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] sm:hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1 transition-all sm:col-span-2 md:col-span-1">
            <div className="w-12 sm:w-16 h-12 sm:h-16 bg-black flex items-center justify-center mb-4 sm:mb-6 border-[3px] sm:border-4 border-black">
              <Cpu className="w-6 sm:w-8 h-6 sm:h-8 text-white" strokeWidth={3} />
            </div>
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-black text-black mb-2 uppercase">Pioneering</h3>
            <p className="text-sm sm:text-base md:text-lg font-bold text-black uppercase">AI solutions & automation</p>
          </div>
        </motion.div>

        {/* Coming soon section */}
        <motion.div variants={itemVariants} className="text-center mb-12 sm:mb-16 max-w-4xl mx-auto">
          <div className="bg-yellow-400 border-4 sm:border-[6px] md:border-8 border-black p-6 sm:p-10 md:p-16 shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] sm:shadow-[20px_20px_0px_0px_rgba(0,0,0,1)] relative">
            <div className="hidden sm:block absolute -top-4 -right-4 w-12 h-12 bg-pink-400 border-4 border-black rotate-[45deg]" />
            <div className="hidden sm:block absolute -bottom-4 -left-4 w-12 h-12 bg-cyan-400 border-4 border-black rotate-[12deg]" />

            <div className="inline-block bg-black text-white px-4 sm:px-6 py-2 border-[3px] sm:border-4 border-black mb-4 sm:mb-6">
              <span className="font-black text-xs sm:text-sm uppercase tracking-wider">⚡ Coming Soon ⚡</span>
            </div>

            <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-black mb-3 sm:mb-4 uppercase leading-none">
              New Website<br />Launching Soon
            </h2>
            <p className="text-lg sm:text-xl md:text-2xl font-bold text-black uppercase">A fresh face for a trusted name.</p>
          </div>
        </motion.div>

        {/* Contact section */}
        <motion.div variants={itemVariants} className="text-center max-w-3xl mx-auto">
          <p className="text-lg sm:text-xl md:text-2xl font-black text-black mb-6 sm:mb-8 uppercase px-2">
            In the meantime, we're always open for business:
          </p>
          <a href="mailto:Business@realsearchcorp.com" className="group inline-block w-full">
            <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 p-6 sm:p-8 bg-white border-4 sm:border-[6px] md:border-8 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] sm:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] sm:hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1.5 hover:translate-y-1.5 transition-all">
              <div className="w-12 sm:w-16 h-12 sm:h-16 bg-black flex items-center justify-center flex-shrink-0">
                <Mail className="w-6 sm:w-8 h-6 sm:h-8 text-white" strokeWidth={3} />
              </div>
              <div className="text-center sm:text-left flex-1">
                <div className="text-xs sm:text-sm font-black uppercase mb-1 sm:mb-2 tracking-wider">Get in touch</div>
                <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-black text-black break-all">Business@realsearchcorp.com</div>
              </div>
              <ArrowRight className="w-6 sm:w-8 h-6 sm:h-8 text-black flex-shrink-0 group-hover:translate-x-2 transition-transform" strokeWidth={3} />
            </div>
          </a>
        </motion.div>

        {/* Footer note */}
        <motion.div variants={itemVariants} className="text-center mt-12 sm:mt-16 md:mt-20">
          <div className="inline-block bg-black text-white px-4 sm:px-6 py-2 sm:py-3 border-[3px] sm:border-4 border-black font-bold uppercase text-xs sm:text-sm">
            © {new Date().getFullYear()} REALSEARCHCORP. All rights reserved.
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}