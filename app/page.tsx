'use client';

import React from "react";
import { useState } from 'react';
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
  Building,
  ShoppingBag,
  Banknote,
  Briefcase,
  Rocket,
  Wrench,
  BarChart3,
  Menu,
  X,
  ChevronDown,
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
  const [formSubmitted, setFormSubmitted] = useState(false);

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
          <MobileNav open={navOpen} setOpen={setNavOpen} />
        </div>
      </header>

      {/* HERO SECTION */}
      <section id="home" className="relative min-h-screen flex flex-col justify-center items-center text-center bg-white pt-44 pb-20 overflow-hidden">
        <AnimatedBackground />
        <div className="relative z-10 w-full flex flex-col items-center">
          <motion.h1
            className="font-satoshi text-6xl md:text-7xl tracking-tight text-gold drop-shadow-lg mb-2"
            initial="hidden"
            animate="visible"
            variants={heroVariants}
          >
            AI Automation
          </motion.h1>
          <motion.h2
            className="font-satoshi text-2xl md:text-3xl font-bold mb-6 text-black/90 tracking-tight"
            initial="hidden"
            animate="visible"
            variants={heroSubVariants}
          >
            for Fast-Moving Businesses
          </motion.h2>
          <motion.p
            className="text-base md:text-lg text-gray-700 max-w-2xl mx-auto mb-8 font-medium"
            initial="hidden"
            animate="visible"
            variants={heroSubVariants}
            transition={{ delay: 0.4, duration: 0.7, ease: "easeOut" }}
          >
            We build custom AI-powered systems that help you grow revenue, reduce costs, and unlock operational scale.
          </motion.p>
          <motion.a
            href="#contact"
            className="inline-block bg-gold text-black font-extrabold rounded-xl px-8 py-4 text-lg md:text-xl shadow-xl hover:shadow-gold/40 hover:scale-105 transition-all focus:outline-none focus:ring-4 focus:ring-gold/60 mb-10 border-2 border-gold"
            initial="hidden"
            animate="visible"
            variants={heroSubVariants}
            transition={{ delay: 0.6, duration: 0.7, ease: "easeOut" }}
          >
            Get in Touch
          </motion.a>
          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.8, repeat: Infinity, repeatType: 'reverse' }}
          >
            <ChevronDown className="w-10 h-10 text-gold animate-pulse drop-shadow-lg" />
          </motion.div>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section id="services" className="py-28 bg-black border-t-2 border-gold">
        <div className="container mx-auto px-4">
          <h2 className="font-satoshi text-2xl md:text-4xl font-extrabold text-gold text-center mb-2 tracking-tight">What We Offer</h2>
          <div className="w-16 h-1 bg-gold mx-auto mb-10 rounded-full" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-14 max-w-5xl mx-auto">
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
                className="bg-black border-2 border-gold rounded-2xl p-10 flex flex-col items-center shadow-2xl hover:scale-105 hover:shadow-gold/30 transition-all group"
                style={{ borderColor: '#D4AF37' }}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={serviceVariants}
                custom={i}
              >
                {React.cloneElement(s.icon, { className: 'w-14 h-14 text-gold' })}
                <h3 className="font-satoshi text-2xl md:text-3xl font-bold text-white mb-3 tracking-tight group-hover:text-gold transition-colors text-center">{s.title}</h3>
                <p className="text-white/80 text-lg md:text-xl font-medium text-center group-hover:text-gold/90 transition-colors">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* WHO WE HELP */}
      <section id="who-we-help" className="py-28 bg-white border-t-2 border-gold">
        <div className="container mx-auto px-4">
          <h2 className="font-satoshi text-2xl md:text-4xl font-extrabold text-gold text-center mb-2 tracking-tight">Who We Help</h2>
          <div className="w-16 h-1 bg-gold mx-auto mb-10 rounded-full" />
          <p className="text-lg md:text-2xl text-gray-700 text-center max-w-3xl mx-auto mb-16 font-medium">
            We partner with fast-moving businesses of all sizes — from lean teams to scaling enterprises — who are ready to win the next decade with AI.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 max-w-4xl mx-auto">
            {[
              { icon: <Building className="w-10 h-10 text-gold" strokeWidth={2.5} />, label: "Real Estate" },
              { icon: <ShoppingBag className="w-10 h-10 text-gold" strokeWidth={2.5} />, label: "E-commerce" },
              { icon: <Banknote className="w-10 h-10 text-gold" strokeWidth={2.5} />, label: "Finance" },
              { icon: <Briefcase className="w-10 h-10 text-gold" strokeWidth={2.5} />, label: "Agencies" },
            ].map((ind, i) => (
              <motion.div
                key={ind.label}
                className="flex flex-col items-center"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={whoVariants}
                custom={i}
              >
                <div className="w-14 h-14 flex items-center justify-center rounded-full border-2 border-gold bg-gold/10 mb-4 group-hover:bg-gold/20 transition-all" style={{ borderColor: '#D4AF37' }}>
                  {React.cloneElement(ind.icon, { className: 'w-14 h-14 text-gold' })}
                </div>
                <span className="font-satoshi text-lg md:text-xl font-bold text-black mt-2 tracking-tight text-center">{ind.label}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY DSE GROUP */}
      <section id="why-dse" className="py-28 bg-black border-t-2 border-gold">
        <div className="container mx-auto px-4">
          <h2 className="font-satoshi text-2xl md:text-4xl font-extrabold text-gold text-center mb-2 tracking-tight">Why DSE Group</h2>
          <div className="w-16 h-1 bg-gold mx-auto mb-10 rounded-full" />
          <div className="flex flex-col md:flex-row gap-6 max-w-6xl mx-auto justify-center">
            {[
              { icon: <Rocket className="w-10 h-10 text-gold" strokeWidth={2.5} />, title: "Built by Entrepreneurs", desc: "Our solutions are crafted by founders who understand the challenges of scaling a business." },
              { icon: <Wrench className="w-10 h-10 text-gold" strokeWidth={2.5} />, title: "Hands-on Implementation", desc: "We don't just consult — we roll up our sleeves and build alongside your team." },
              { icon: <BarChart3 className="w-10 h-10 text-gold" strokeWidth={2.5} />, title: "Results Over Noise", desc: "Focus on what matters: measurable outcomes that drive your business forward." },
            ].map((w, i) => (
              <motion.div
                key={w.title}
                className="flex-1 bg-black border-2 border-gold rounded-2xl px-8 py-10 flex flex-col items-center shadow-2xl hover:scale-105 hover:shadow-gold/40 transition-all"
                style={{ borderColor: '#D4AF37' }}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={whyVariants}
                custom={i}
              >
                {React.cloneElement(w.icon, { className: 'w-14 h-14 text-gold' })}
                <h3 className="font-satoshi text-2xl md:text-3xl font-bold text-white mb-3 tracking-tight text-center">{w.title}</h3>
                <p className="text-white/80 text-lg md:text-xl font-medium text-center">{w.desc}</p>
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
            {formSubmitted ? (
              <div className="text-center py-10">
                <h3 className="text-xl font-bold text-gold mb-4">Thank You!</h3>
                <p className="text-gray-700 text-base">We've received your message and will get back to you shortly.</p>
              </div>
            ) : (
              <form
                className="space-y-6"
                onSubmit={e => {
                  e.preventDefault();
                  setFormSubmitted(true);
                }}
              >
                <div>
                  <label htmlFor="name" className="block text-base font-bold text-black mb-2">Name</label>
                  <input
                    type="text"
                    id="name"
                    required
                    className="w-full px-4 py-3 rounded-xl border-2 border-neutral-300 focus:border-gold focus:ring-2 focus:ring-gold font-medium text-base transition-all"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-base font-bold text-black mb-2">Email</label>
                  <input
                    type="email"
                    id="email"
                    required
                    className="w-full px-4 py-3 rounded-xl border-2 border-neutral-300 focus:border-gold focus:ring-2 focus:ring-gold font-medium text-base transition-all"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-base font-bold text-black mb-2">Message</label>
                  <textarea
                    id="message"
                    required
                    rows={4}
                    className="w-full px-4 py-3 rounded-xl border-2 border-neutral-300 focus:border-gold focus:ring-2 focus:ring-gold font-medium text-base transition-all"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-gold text-black font-extrabold py-4 rounded-xl text-lg hover:shadow-gold/40 hover:scale-105 transition-all border-2 border-gold"
                >
                  Send Message
                </button>
              </form>
            )}
          </motion.div>
          <div className="flex justify-center mt-8">
            <a
              href="#contact"
              className="inline-block bg-gold text-black font-extrabold rounded-xl px-8 py-4 text-lg md:text-xl shadow-xl hover:shadow-gold/40 hover:scale-105 transition-all focus:outline-none focus:ring-4 focus:ring-gold/60 border-2 border-gold"
            >
              Get Proposal
            </a>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
