'use client';

import React, { useState, useEffect } from "react";
import { motion } from 'framer-motion';
import Image from 'next/image';
import AnimatedBackground from './components/AnimatedBackground';
import ScrollProgress from './components/ScrollProgress';
import Footer from './components/Footer';
import {
  Settings,
  BrainCircuit,
  GraduationCap,
  Cpu,
  Building2,
  ShoppingBag,
  Banknote,
  Briefcase,
  Rocket,
  Wrench,
  BarChart3,
  Menu,
  X,
  ChevronDown,
  Car,
} from 'lucide-react';

const navLinks = [
  { href: '#services', label: 'Services' },
  { href: '#who-we-help', label: 'Who We Help' },
  { href: '#why-dse', label: 'Why DSE Group' },
  { href: '#contact', label: 'Contact' },
];

function MobileNav({ open, setOpen }: { open: boolean; setOpen: (v: boolean) => void }) {
  return (
    <div className="md:hidden relative z-50">
      <button
        onClick={() => setOpen(!open)}
        className="p-2 text-white focus:outline-none"
        aria-label="Toggle menu"
      >
        {open ? <X size={32} /> : <Menu size={32} />}
      </button>
      {open && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="absolute right-0 mt-2 w-56 bg-black rounded-xl shadow-lg border-2 border-gold py-6"
        >
          <nav>
            <ul className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="block px-8 py-3 text-white font-semibold hover:text-gold text-lg transition-colors"
                    onClick={() => setOpen(false)}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="#contact"
                  className="block px-8 py-3 mt-2 bg-gold text-black font-bold rounded-xl text-center hover:shadow-gold/40 hover:shadow-lg text-lg transition"
                  onClick={() => setOpen(false)}
                >
                  Get Proposal
                </a>
              </li>
            </ul>
          </nav>
        </motion.div>
      )}
    </div>
  );
}

export default function Home() {
  const [navOpen, setNavOpen] = useState(false);
  const [formStatus, setFormStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [loading, setLoading] = useState(false);
  const [showIntro, setShowIntro] = useState(true);

  // Duration constants (sync with hero animation delays)
  const INTRO_DURATION = 3400; // ms, matches the delay before hero text animates in

  useEffect(() => {
    const timer = setTimeout(() => setShowIntro(false), INTRO_DURATION);
    return () => clearTimeout(timer);
  }, []);

  // HERO ANIMATION VARIANTS
  const heroVariants = {
    hidden: { opacity: 0, y: -80 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.9, ease: 'easeOut' } },
  };
  const heroSubVariants = {
    hidden: { opacity: 0, y: 80 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.9, ease: 'easeOut', delay: 0.2 } },
  };

  // SERVICES ANIMATION
  const serviceVariants = {
    hidden: (i: number) => ({ opacity: 0, x: i % 2 === 0 ? -60 : 60 }),
    visible: (i: number) => ({ opacity: 1, x: 0, transition: { delay: i * 0.15, duration: 0.7, ease: 'easeOut' } }),
  };

  // WHO WE HELP ANIMATION
  const whoVariants = {
    hidden: { opacity: 0, scale: 0.92 },
    visible: (i: number) => ({ opacity: 1, scale: 1, transition: { delay: i * 0.12, duration: 0.6, ease: 'easeOut' } }),
  };

  // WHY DSE ANIMATION
  const whyVariants = {
    hidden: { opacity: 0, y: 60 },
    visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.18, duration: 0.7, ease: 'easeOut' } }),
  };

  // CONTACT ANIMATION
  const contactVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
  };

  return (
    <>
      <ScrollProgress />
      {/* HEADER */}
      <header className="fixed top-0 left-0 w-full z-50 bg-black border-b-2 border-gold">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          <a href="#home" className="flex items-center">
            <Image src="/dse-logo.png" alt="DSE Group Logo" width={110} height={70} className="h-14 w-auto" />
          </a>
          <div className="flex items-center gap-4">
            <motion.a
              href="#contact"
              className="hidden md:inline-flex items-center gap-2 bg-black text-white font-extrabold rounded-lg px-5 py-2 text-base shadow-md border-2 border-gold hover:bg-white hover:text-black hover:shadow-gold/40 hover:scale-105 transition-all focus:outline-none focus:ring-2 focus:ring-gold/60"
              style={{ borderColor: '#D4AF37', boxShadow: '0 0 24px 0 #D4AF37, 0 0 0 2px #D4AF37' }}
              initial={{ x: 80, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.7, ease: 'easeOut', delay: 0.2 }}
            >
              Get In Touch
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5" className="ml-1"><path strokeLinecap="round" strokeLinejoin="round" d="M7 17l8-8m0 0H7m8 0v8"/></svg>
            </motion.a>
            <MobileNav open={navOpen} setOpen={setNavOpen} />
          </div>
        </div>
      </header>

      {/* HERO SECTION */}
      <section id="home" className="relative min-h-screen flex flex-col justify-center items-center text-center bg-white pt-32 pb-16 overflow-hidden mt-10 md:mt-0">
        {/* Cinematic Logo Intro Overlay (only over hero, not header) */}
        {showIntro && (
          <motion.div
            initial={{ opacity: 1, backgroundColor: '#000' }}
            animate={{ opacity: 1, backgroundColor: '#000' }}
            exit={{ opacity: 0, backgroundColor: '#fff' }}
            transition={{ duration: 0 }}
            className="absolute inset-0 w-full h-full flex items-center justify-center z-20"
            style={{ backgroundColor: '#000', top: 0, left: 0, right: 0, bottom: 0, marginTop: 0, marginLeft: 0 }}
          >
            <motion.img
              src="/dse-logo.png"
              alt="DSE Group Logo Intro"
              initial={{ opacity: 1, scale: 1 }}
              animate={{ opacity: 0, scale: 2.2 }}
              transition={{ delay: 1.6, duration: 1.6, ease: 'easeInOut' }}
              className="w-[340px] md:w-[480px] h-auto"
              style={{ filter: 'drop-shadow(0 4px 32px rgba(0,0,0,0.18))' }}
            />
            {/* White fade overlay for smooth transition to white */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2.8, duration: 0.6, ease: 'easeInOut' }}
              className="absolute inset-0 w-full h-full bg-white"
              style={{ pointerEvents: 'none' }}
            />
          </motion.div>
        )}
        {/* Hero Content Animation */}
        {!showIntro && (
          <div className="relative z-10 w-full flex flex-col items-center">
            <div className="flex flex-col items-center w-full">
              <div className="flex flex-col md:flex-row justify-center items-center w-full mb-8 max-w-xs sm:max-w-sm md:max-w-full mx-auto">
                <motion.span
                  className="font-satoshi text-4xl sm:text-5xl md:text-[8vw] font-extrabold tracking-tight uppercase md:mr-8 mb-2 md:mb-0 relative premium-hero-text leading-tight"
                  initial={{ x: '-100vw', opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.1, duration: 2.2, ease: 'easeOut' }}
                >
                  <span className="premium-text-gradient">AI</span>
                  <span className="premium-text-glass" />
                </motion.span>
                <motion.span
                  className="font-satoshi text-4xl sm:text-5xl md:text-[8vw] font-extrabold tracking-tight uppercase md:ml-8 relative premium-hero-text leading-tight"
                  initial={{ x: '100vw', opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.1, duration: 2.2, ease: 'easeOut' }}
                >
                  <span className="premium-text-gradient">AUTOMATION</span>
                  <span className="premium-text-glass" />
                </motion.span>
              </div>
              <motion.h2
                className="font-satoshi text-xl sm:text-2xl md:text-6xl font-bold mb-10 tracking-tight uppercase relative premium-hero-text"
                initial={{ y: 200, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 2.4, duration: 1.2, ease: 'easeOut' }}
              >
                <span className="premium-text-gradient">FOR FAST-MOVING BUSINESSES</span>
                <span className="premium-text-glass" />
              </motion.h2>
              <motion.p
                className="text-2xl md:text-3xl text-gray-800 max-w-4xl mx-auto font-medium mt-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 3.6, duration: 0.8, ease: 'easeOut' }}
              >
                We build custom AI-powered systems that grow revenue, reduce costs, and scale your business with precision.
              </motion.p>
              {/* Animated Down Arrow */}
              <motion.a
                href="#services"
                className="block mt-12"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 4.6, duration: 1, ease: 'easeOut' }}
                aria-label="Scroll to Services"
              >
                <ChevronDown className="w-12 h-12 text-gold animate-bounce drop-shadow-lg mx-auto cursor-pointer" />
              </motion.a>
            </div>
          </div>
        )}
      </section>

      {/* SERVICES SECTION */}
      <section id="services" className="py-28 bg-black border-t-2 border-gold">
        <div className="container mx-auto px-4">
          <div className="flex justify-center mb-12">
            <motion.h2 className="flex gap-3 items-end text-center"
              style={{ minHeight: '2.5em' }}
            >
              <motion.span
                className="font-satoshi text-3xl md:text-5xl font-extrabold text-white"
                initial={{ x: -60, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.7, ease: 'easeOut' }}
                viewport={{ once: true }}
              >What</motion.span>
              <motion.span
                className="font-satoshi text-3xl md:text-5xl font-extrabold text-white"
                initial={{ y: -60, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.7, delay: 0.15, ease: 'easeOut' }}
                viewport={{ once: true }}
              >We</motion.span>
              <motion.span
                className="font-satoshi text-3xl md:text-5xl font-extrabold text-white"
                initial={{ x: 60, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.7, delay: 0.3, ease: 'easeOut' }}
                viewport={{ once: true }}
              >Offer</motion.span>
            </motion.h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {[
              {
                icon: <Settings className="w-12 h-12 text-gold" strokeWidth={2.5} />, title: "Workflow Automation", desc: "Streamline your operations with intelligent automation solutions tailored to your business." },
              {
                icon: <BrainCircuit className="w-12 h-12 text-gold" strokeWidth={2.5} />, title: "AI Strategy & Consulting", desc: "Expert guidance to implement AI effectively and drive measurable business outcomes." },
              {
                icon: <GraduationCap className="w-12 h-12 text-gold" strokeWidth={2.5} />, title: "AI Education & Training", desc: "Empower your team with the knowledge and skills to leverage AI tools confidently." },
              {
                icon: <Cpu className="w-12 h-12 text-gold" strokeWidth={2.5} />, title: "Custom AI Tool Development", desc: "Bespoke AI solutions and automations built for your unique workflows and needs." },
            ].map((s, i) => (
              <motion.div
                key={s.title}
                className="bg-[#111111] rounded-2xl p-6 border-4 border-gold flex flex-col items-center"
                style={{ borderColor: '#D4AF37', boxShadow: '0 0 24px 0 #D4AF37, 0 0 0 2px #D4AF37' }}
                whileHover={{ y: -8 }}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={serviceVariants}
                custom={i}
              >
                {React.cloneElement(s.icon, {
                  className: 'h-8 w-8 text-gold mb-4',
                  style: { color: '#D4AF37' },
                  stroke: 'currentColor',
                })}
                <h3 className="font-satoshi text-lg font-bold text-white text-center">{s.title}</h3>
                <p className="font-inter text-sm text-gray-300 text-center">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* WHO WE HELP */}
      <section id="who-we-help" className="py-28 bg-white border-t-2 border-gold">
        <div className="container mx-auto px-4">
          <div className="flex justify-center mb-12">
            <motion.h2 className="flex gap-3 items-end text-center"
              style={{ minHeight: '2.5em' }}
            >
              <motion.span
                className="font-satoshi text-3xl md:text-5xl font-extrabold text-black"
                initial={{ x: -60, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.7, ease: 'easeOut' }}
                viewport={{ once: true }}
              >Who</motion.span>
              <motion.span
                className="font-satoshi text-3xl md:text-5xl font-extrabold text-black"
                initial={{ y: -60, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.7, delay: 0.15, ease: 'easeOut' }}
                viewport={{ once: true }}
              >We</motion.span>
              <motion.span
                className="font-satoshi text-3xl md:text-5xl font-extrabold text-black"
                initial={{ x: 60, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.7, delay: 0.3, ease: 'easeOut' }}
                viewport={{ once: true }}
              >Help</motion.span>
            </motion.h2>
          </div>
          <p className="text-lg md:text-2xl text-gray-700 text-center max-w-3xl mx-auto mb-16 font-medium">
            We partner with fast-moving businesses of all sizes — from lean teams to scaling enterprises — who are ready to win the next decade with AI.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 max-w-4xl mx-auto">
            {[
              { icon: <Building2 className="h-12 w-12 text-gold hover:scale-105 transition-transform duration-300" />, label: "Real Estate" },
              { icon: <ShoppingBag className="h-12 w-12 text-gold hover:scale-105 transition-transform duration-300" />, label: "E-commerce" },
              { icon: <Banknote className="h-12 w-12 text-gold hover:scale-105 transition-transform duration-300" />, label: "Finance" },
              { icon: <Car className="h-12 w-12 text-gold hover:scale-105 transition-transform duration-300" />, label: "Automotive" },
            ].map((ind, i) => (
              <motion.div
                key={ind.label}
                className="flex flex-col items-center cursor-pointer"
                whileHover={{ y: -8 }}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={whoVariants}
                custom={i}
              >
                {ind.icon}
                <span className="font-satoshi text-lg md:text-xl font-bold text-black mt-2 tracking-tight text-center">{ind.label}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY DSE GROUP */}
      <section id="why-dse" className="py-28 bg-black border-t-2 border-gold">
        <div className="container mx-auto px-4">
          <div className="flex justify-center mb-12">
            <motion.h2 className="flex gap-3 items-end text-center"
              style={{ minHeight: '2.5em' }}
            >
              <motion.span
                className="font-satoshi text-3xl md:text-5xl font-extrabold text-white"
                initial={{ x: -60, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.7, ease: 'easeOut' }}
                viewport={{ once: true }}
              >Why</motion.span>
              <motion.span
                className="font-satoshi text-3xl md:text-5xl font-extrabold text-white"
                initial={{ y: -60, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.7, delay: 0.15, ease: 'easeOut' }}
                viewport={{ once: true }}
              >DSE</motion.span>
              <motion.span
                className="font-satoshi text-3xl md:text-5xl font-extrabold text-white"
                initial={{ x: 60, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.7, delay: 0.3, ease: 'easeOut' }}
                viewport={{ once: true }}
              >Group</motion.span>
            </motion.h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              { icon: <Rocket className="w-10 h-10 text-gold" strokeWidth={2.5} />, title: "Built by Entrepreneurs", desc: "Our solutions are crafted by founders who understand the challenges of scaling a business." },
              { icon: <Wrench className="w-10 h-10 text-gold" strokeWidth={2.5} />, title: "Hands-on Implementation", desc: "We don't just consult — we roll up our sleeves and build alongside your team." },
              { icon: <BarChart3 className="w-10 h-10 text-gold" strokeWidth={2.5} />, title: "Results Over Noise", desc: "Focus on what matters: measurable outcomes that drive your business forward." },
            ].map((w, i) => (
              <motion.div
                key={w.title}
                className="bg-[#111111] rounded-2xl p-6 border-4 border-gold flex flex-col items-center shadow-[0_0_24px_0_#D4AF37,0_0_0_2px_#D4AF37] transition-transform duration-300 group"
                style={{ borderColor: '#D4AF37', boxShadow: '0 0 24px 0 #D4AF37, 0 0 0 2px #D4AF37' }}
                whileHover={{ y: -8 }}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={whyVariants}
                custom={i}
              >
                {React.cloneElement(w.icon, {
                  className: 'h-8 w-8 text-gold mb-4',
                  style: { color: '#D4AF37' },
                  stroke: 'currentColor',
                })}
                <h3 className="font-satoshi text-lg font-bold text-white text-center">{w.title}</h3>
                <p className="font-inter text-sm text-gray-300 text-center">{w.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section id="contact" className="py-20 bg-white border-t-2 border-gold">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-4xl font-extrabold text-center mb-8 text-black tracking-tight">Let's Talk</h2>
          <motion.div
            className="max-w-xl mx-auto bg-white p-8 rounded-xl shadow-xl border-2 border-gold"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={contactVariants}
          >
            {formStatus === 'success' ? (
              <div className="text-center py-10">
                <h3 className="text-xl font-bold text-gold mb-4">Thank You!</h3>
                <p className="text-gray-700 text-base mb-6">We've received your message and will get back to you shortly.</p>
                <a
                  href="#services"
                  className="inline-block bg-gold text-black font-extrabold py-3 px-8 rounded-xl text-lg hover:shadow-gold/40 hover:scale-105 transition-all border-2 border-gold"
                >
                  See What We Offer
                </a>
              </div>
            ) : formStatus === 'error' ? (
              <div className="text-center py-10">
                <h3 className="text-xl font-bold text-red-600 mb-4">Something went wrong.</h3>
                <p className="text-gray-700 text-base">Please try again or email us directly at dan@dsegroupae.com.</p>
              </div>
            ) : (
              <form
                className="space-y-6"
                onSubmit={async (e) => {
                  e.preventDefault();
                  setLoading(true);
                  setFormStatus('idle');
                  const form = e.currentTarget;
                  const formData = new FormData(form);
                  const data = {
                    name: formData.get('name'),
                    email: formData.get('email'),
                    companyName: formData.get('companyName'),
                    companyWebsite: formData.get('companyWebsite'),
                    service: formData.get('service'),
                    message: formData.get('message'),
                  };
                  try {
                    const res = await fetch('/api/contact', {
                      method: 'POST',
                      headers: { 'Content-Type': 'application/json' },
                      body: JSON.stringify(data),
                    });
                    if (res.ok) {
                      setFormStatus('success');
                      form.reset();
                    } else {
                      setFormStatus('error');
                    }
                  } catch {
                    setFormStatus('error');
                  } finally {
                    setLoading(false);
                  }
                }}
              >
                <div className="flex flex-col md:flex-row gap-4">
                  <div className="flex-1">
                    <label htmlFor="name" className="block text-base font-bold text-black mb-2">What is your name?</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full px-4 py-3 rounded-xl border-2 border-neutral-300 focus:border-gold focus:ring-2 focus:ring-gold font-medium text-base transition-all"
                    />
                  </div>
                  <div className="flex-1">
                    <label htmlFor="email" className="block text-base font-bold text-black mb-2">What is your email?</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full px-4 py-3 rounded-xl border-2 border-neutral-300 focus:border-gold focus:ring-2 focus:ring-gold font-medium text-base transition-all"
                    />
                  </div>
                </div>
                <div className="flex flex-col md:flex-row gap-4">
                  <div className="flex-1">
                    <label htmlFor="companyName" className="block text-base font-bold text-black mb-2">Company Name</label>
                    <input
                      type="text"
                      id="companyName"
                      name="companyName"
                      required
                      className="w-full px-4 py-3 rounded-xl border-2 border-neutral-300 focus:border-gold focus:ring-2 focus:ring-gold font-medium text-base transition-all"
                    />
                  </div>
                  <div className="flex-1">
                    <label htmlFor="companyWebsite" className="block text-base font-bold text-black mb-2">Company Website</label>
                    <input
                      type="text"
                      id="companyWebsite"
                      name="companyWebsite"
                      required
                      className="w-full px-4 py-3 rounded-xl border-2 border-neutral-300 focus:border-gold focus:ring-2 focus:ring-gold font-medium text-base transition-all"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="service" className="block text-base font-bold text-black mb-2">What services are you interested in?</label>
                  <select
                    id="service"
                    name="service"
                    required
                    defaultValue=""
                    className="w-full px-4 py-3 rounded-xl border-2 border-neutral-300 focus:border-gold focus:ring-2 focus:ring-gold font-medium text-base transition-all"
                  >
                    <option value="" disabled>Select service</option>
                    <option value="Identifying AI Opportunities">Identifying AI Opportunities</option>
                    <option value="Educating Your Team On AI">Educating Your Team On AI</option>
                    <option value="AI Automation Solutions For Your Business">AI Automation Solutions For Your Business</option>
                    <option value="Developing Custom AI Solutions">Developing Custom AI Solutions</option>
                    <option value="AI Consultation Services">AI Consultation Services</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="block text-base font-bold text-black mb-2">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    className="w-full px-4 py-3 rounded-xl border-2 border-neutral-300 focus:border-gold focus:ring-2 focus:ring-gold font-medium text-base transition-all"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-gold text-black font-extrabold py-4 rounded-xl text-lg hover:shadow-gold/40 hover:scale-105 transition-all border-2 border-gold disabled:opacity-50 disabled:cursor-not-allowed"
                  disabled={loading}
                >
                  {loading ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </section>
    </>
  );
}
