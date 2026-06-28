"use client";

import React, { useState, useEffect } from "react";
import { 
  Menu, X, Phone, Mail, MapPin, CheckCircle2, ArrowRight, 
  MessageSquare, ChevronRight, MessageCircle, HelpCircle, Star 
} from "lucide-react";

// --- DATA STRUCTS ---
const NAV_ITEMS = [
  { id: "home", label: "Home" },
  { id: "corporate", label: "Corporate & Office Spaces" },
  { id: "hotels", label: "Hotels & Real Estate" },
  { id: "hospitals", label: "Hospitals & Banks" },
  { id: "edu", label: "Educational Institutes" },
  { id: "residential", label: "Residential Villas & Flats" },
  { id: "contact", label: "Contact" }
];

const SERVICES_DATA = {
  corporate: {
    title: "Corporate, Office & Coworking Design",
    tagline: "Boosting productivity, wellness, and clean aesthetics with engineered biophilic layouts.",
    items: ["Reception Area", "Workstations", "Executive Cabins", "Conference Rooms", "Meeting Rooms", "Corridors", "Breakout Zones", "Cafeteria Areas", "Waiting Lounges", "Terrace Gardens", "Indoor Plant Walls", "Biophilic Design Solutions"]
  },
  hotels: {
    title: "Hotels & Real Estate Offices",
    tagline: "Crafting memorable, ultra-luxury first impressions for premium hospitality guest experiences.",
    items: ["Main Entrance Landscaping", "Hotel Lobby Design", "Reception Area", "Restaurant & Dining Area", "Banquet Hall Decoration", "Corridors", "Poolside Landscaping", "Outdoor Gardens", "Outdoor Landscaping", "Rooftop Gardens", "Real Estate Sales Office Decoration", "Luxury Green Installations"]
  },
  hospitals: {
    title: "Hospitals & Healthcare Facilities",
    tagline: "Calm, hygienic, and stress-reducing botanical interventions designed for medical healing acceleration.",
    items: ["Hospital Entrance", "Reception Area", "Waiting Area", "OPD Areas", "Patient Rooms", "Corridors", "Healing Gardens", "Courtyard Landscaping", "Cafeteria Green Spaces", "Terrace Gardens"]
  },
  edu: {
    title: "Educational Institutes & Campuses",
    tagline: "Inspiring outdoor learning environments and natural spaces to foster concentration and mental focus.",
    items: ["School Entrance", "College Campus Landscaping", "University Green Zones", "Library Areas", "Classroom Corridors", "Amphitheatre Landscaping", "Outdoor Learning Spaces", "Botanical Gardens", "Playground Landscaping", "Campus Beautification"]
  },
  residential: {
    title: "Residential Villas, Flats & Penthouses",
    tagline: "Personalized private sanctuaries curated to reflect modern architectural harmony.",
    items: ["Villa Landscaping", "Apartment Balcony Gardens", "Terrace Gardens", "Indoor Plant Styling", "Living Room Plant Design", "Dining Area Green Decor", "Courtyard Gardens", "Vertical Gardens", "Luxury Outdoor Gardens", "Swimming Pool Landscaping"]
  }
};

const HERO_IMAGES = [
  "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1600&q=80", // Office Plants Luxury
  "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1600&q=80", // Luxury Hotel Entrance
  "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80"  // Premium Villa Landscape
];

export default function GardenGiriApp() {
  const [activeTab, setActiveTab] = useState("home");
  const [currentHeroIdx, setCurrentHeroIdx] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    if (activeTab !== "home") return;
    const interval = setInterval(() => {
      setCurrentHeroIdx((prev) => (prev + 1) % HERO_IMAGES.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [activeTab]);

  const scrollToSection = (id: string) => {
    setActiveTab(id);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen flex flex-col justify-between">
      {/* --- HEADER --- */}
      <header className="w-full sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-stone-200/80 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center cursor-pointer" onClick={() => scrollToSection("home")}>
              <span className="font-serif text-2xl font-bold tracking-wide text-emerald-800">
                Garden<span className="text-stone-600 font-light">Giri</span>
              </span>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden xl:flex space-x-1">
              {NAV_ITEMS.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`px-3 py-2 rounded-md text-xs font-medium uppercase tracking-wider transition-colors ${
                    activeTab === item.id 
                      ? "text-emerald-700 bg-emerald-50/60 font-semibold" 
                      : "text-stone-600 hover:text-emerald-700 hover:bg-stone-50"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </nav>

            {/* Mobile Menu Button */}
            <div className="xl:hidden">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-stone-600 hover:text-emerald-800 focus:outline-none p-2"
              >
                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="xl:hidden bg-white border-b border-stone-200 transition-all duration-300">
            <div className="px-2 pt-2 pb-4 space-y-1 sm:px-3">
              {NAV_ITEMS.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`block w-full text-left px-4 py-3 rounded-md text-sm font-medium tracking-wide ${
                    activeTab === item.id 
                      ? "text-emerald-700 bg-emerald-50" 
                      : "text-stone-600 hover:bg-stone-50"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </header>

      {/* --- MAIN CORE RENDER --- */}
      <main className="flex-grow">
        
        {/* PAGE 1: HOME SUB-VIEW */}
        {activeTab === "home" && (
          <div className="animate-fadeIn">
            {/* Hero Section */}
            <section className="relative h-[85vh] w-full overflow-hidden bg-stone-900">
              <div 
                className="absolute inset-0 bg-cover bg-center transition-all duration-1000 transform scale-105 filter brightness-75"
                style={{ backgroundImage: `url(${HERO_IMAGES[currentHeroIdx]})` }}
              />
              <div className="absolute inset-0 bg-gradient-to-r from-stone-950/70 via-stone-900/40 to-transparent" />
              
              <div className="relative max-w-7xl mx-auto h-full px-4 sm:px-6 lg:px-8 flex flex-col justify-center items-start text-white">
                <span className="text-emerald-400 font-semibold tracking-widest text-xs uppercase mb-3 block">
                  Premium Space Architecture
                </span>
                <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight max-w-3xl leading-tight">
                  Transforming <br />Spaces with Nature
                </h1>
                <p className="mt-4 text-stone-200 max-w-lg text-sm sm:text-base font-light tracking-wide">
                  Luxury indoor living installations, corporate biophilic designs, and breathtaking landscaping tailor-made for institutional environments.
                </p>
                <div className="mt-8 flex flex-wrap gap-4">
                  <button 
                    onClick={() => document.getElementById("booking-form-sec")?.scrollIntoView({ behavior: "smooth" })}
                    className="bg-emerald-700 hover:bg-emerald-600 text-white font-medium px-6 py-3 rounded text-sm transition-all transform hover:-translate-y-0.5 shadow-lg shadow-emerald-900/20"
                  >
                    Book Free Consultation
                  </button>
                  <button 
                    onClick={() => { setActiveTab("corporate"); window.scrollTo(0, 0); }}
                    className="border border-white/80 hover:bg-white hover:text-stone-900 text-white font-medium px-6 py-3 rounded text-sm transition-all"
                  >
                    View Commercial Projects
                  </button>
                </div>
              </div>

              {/* Slider Dots Indicator */}
              <div className="absolute bottom-6 right-6 flex space-x-2">
                {HERO_IMAGES.map((_, idx) => (
                  <button 
                    key={idx}
                    onClick={() => setCurrentHeroIdx(idx)}
                    className={`w-2.5 h-2.5 rounded-full transition-all ${currentHeroIdx === idx ? "bg-emerald-500 w-6" : "bg-white/50"}`}
                  />
                ))}
              </div>
            </section>

            {/* Why Choose Us Section */}
            <section className="py-20 bg-white border-b border-stone-100">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto mb-16">
                  <h2 className="font-serif text-3xl sm:text-4xl font-bold text-stone-900">Why Modern Architecture Demands GardenGiri</h2>
                  <p className="text-stone-500 mt-3 text-sm">Where execution expertise meets biological intelligence.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-5 gap-8 text-center">
                  {[
                    { title: "Expert Plant Designers", desc: "Botanists & structural landscapers co-designing elegant structures." },
                    { title: "Sustainable Solutions", desc: "Self-sustaining micro-environments lowering environmental impact." },
                    { title: "Low Maintenance Designs", desc: "Automated micro-irrigation systems built into high-end framework." },
                    { title: "Customized Green Spaces", desc: "Bespoke scales tailored cleanly around existing acoustics & illumination." },
                    { title: "Nationwide Service", desc: "Flawless deployment across tier-1 real estate, offices, and projects." }
                  ].map((feat, index) => (
                    <div key={index} className="p-6 bg-stone-50 rounded-lg hover:shadow-md transition-shadow">
                      <div className="w-10 h-10 bg-emerald-100 text-emerald-800 rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-sm">
                        0{index + 1}
                      </div>
                      <h3 className="font-semibold text-stone-900 text-sm tracking-wide mb-2">{feat.title}</h3>
                      <p className="text-stone-500 text-xs leading-relaxed">{feat.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Project Gallery Grid */}
            <section className="py-20 bg-stone-50">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
                  <div>
                    <h2 className="font-serif text-3xl font-bold text-stone-900">Featured Installations Portfolio</h2>
                    <p className="text-stone-500 text-sm mt-1">Explore our pristine commercial landscape execution across segments.</p>
                  </div>
                  <div className="mt-4 md:mt-0 flex gap-2">
                    {["corporate", "hotels", "residential"].map((cat) => (
                      <button 
                        key={cat} 
                        onClick={() => scrollToSection(cat)}
                        className="text-xs bg-white border border-stone-200 px-3 py-1.5 rounded text-stone-600 hover:text-emerald-700 capitalize font-medium transition-colors"
                      >
                        Browse {cat}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  {[
                    { title: "Biophilic Executive Workspace", cat: "Office Projects", img: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=600&q=80" },
                    { title: "Grand Atrium Vertical Living Wall", cat: "Hotel Projects", img: "https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=600&q=80" },
                    { title: "Minimalist Infinity Pool Garden", cat: "Residential Projects", img: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=600&q=80" },
                    { title: "Sustainable Academic Quadrangle", cat: "Campus Landscaping", img: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=600&q=80" }
                  ].map((proj, idx) => (
                    <div key={idx} className="group relative overflow-hidden rounded-lg aspect-[4/5] bg-stone-200 cursor-pointer">
                      <div 
                        className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-500"
                        style={{ backgroundImage: `url(${proj.img})` }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-stone-900/20 to-transparent opacity-90" />
                      <div className="absolute bottom-0 left-0 right-0 p-5 text-white">
                        <span className="text-[10px] bg-emerald-700/80 text-emerald-100 uppercase font-semibold px-2 py-0.5 rounded tracking-wider">
                          {proj.cat}
                        </span>
                        <h4 className="font-serif text-base font-semibold mt-2 group-hover:text-emerald-300 transition-colors">
                          {proj.title}
                        </h4>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Booking Form Component */}
            <section id="booking-form-sec" className="py-20 bg-white border-t border-stone-200">
              <div className="max-w-4xl mx-auto px-4 sm:px-6">
                <div className="bg-stone-50 border border-stone-200 p-8 sm:p-12 rounded-xl shadow-sm">
                  <div className="text-center max-w-xl mx-auto mb-10">
                    <span className="text-xs uppercase tracking-widest text-emerald-800 font-semibold">Consultation Request</span>
                    <h2 className="font-serif text-2xl sm:text-3xl font-bold mt-1 text-stone-900">Schedule a Free Site Inspection</h2>
                    <p className="text-stone-500 text-xs mt-2">Let our premium layout design engineers analyze lighting, structural metrics, and acoustics for a customized conceptual design.</p>
                  </div>
                  <BookingForm defaultService="Corporate Office" />
                </div>
              </div>
            </section>

            {/* Testimonials Section */}
            <section className="py-20 bg-stone-50 border-y border-stone-200">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                  <h2 className="font-serif text-3xl font-bold text-stone-900">Praised by Leading Architects</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {[
                    { quote: "GardenGiri transformed our 4-story corporate office courtyard into an award-winning biophilic marvel. The maintenance automation works flawlessly.", author: "Rajiv Mehta", role: "VP Operations, Nexus Tech Corp" },
                    { quote: "The indoor plant walls inside our hotel lobby completely elevated the premium aesthetic. Guests comment on it daily.", author: "Elena Rostova", role: "Design Director, Grand Aura Hotels" },
                    { quote: "Professional, prompt, and exceptionally skilled. Their mastery over spatial greenery layout sets them miles ahead.", author: "Vikram Malhotra", role: "Principal Architect, VM Studios" }
                  ].map((t, idx) => (
                    <div key={idx} className="bg-white p-6 rounded-lg shadow-sm border border-stone-100">
                      <div className="flex text-amber-500 mb-3">
                        {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
                      </div>
                      <p className="text-stone-600 text-xs italic leading-relaxed">"{t.quote}"</p>
                      <div className="mt-4 pt-4 border-t border-stone-100">
                        <h4 className="text-xs font-bold text-stone-900">{t.author}</h4>
                        <p className="text-[11px] text-stone-400">{t.role}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* FAQ Section */}
            <section className="py-20 bg-white">
              <div className="max-w-4xl mx-auto px-4 sm:px-6">
                <h2 className="font-serif text-3xl font-bold text-center text-stone-900 mb-12">Frequently Asked Questions</h2>
                <div className="space-y-6">
                  {[
                    { q: "How does the maintenance contract work after the green setup?", a: "We provide dedicated premium upkeep plans where our specialized horticultural team visits weekly to check plant health, trim setup configurations, and optimize computerized drip settings." },
                    { q: "Can you implement plants in completely dark architectural corridors?", a: "Yes. We deploy scientifically optimized low-light botanical species combined with custom-engineered luxury full-spectrum plant growth grow lamps that elevate aesthetic ambiance." },
                    { q: "What is your typical project execution timeline?", a: "Depending on the scale, custom office spaces or vertical walls take anywhere between 7 to 21 working days from architectural signoff." }
                  ].map((faq, i) => (
                    <div key={i} className="bg-stone-50 p-5 rounded-lg border border-stone-200">
                      <h4 className="font-semibold text-stone-900 text-sm flex items-center gap-2">
                        <HelpCircle size={16} className="text-emerald-700 flex-shrink-0" />
                        {faq.q}
                      </h4>
                      <p className="text-stone-600 text-xs mt-2 pl-6 leading-relaxed">{faq.a}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          </div>
        )}

        {/* PAGES 2 to 6: INNER DYNAMIC PAGES SYSTEM */}
        {activeTab !== "home" && activeTab !== "contact" && (() => {
          const pageData = SERVICES_DATA[activeTab as keyof typeof SERVICES_DATA];
          if (!pageData) return null;
          return (
            <div className="animate-fadeIn py-16 bg-stone-50">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                
                {/* Section Header */}
                <div className="border-b border-stone-200 pb-8 mb-12">
                  <span className="text-xs font-bold text-emerald-800 uppercase tracking-widest block mb-2">Exclusive Services</span>
                  <h1 className="font-serif text-3xl sm:text-5xl font-bold text-stone-900">{pageData.title}</h1>
                  <p className="text-stone-500 mt-2 text-sm sm:text-base font-light max-w-2xl">{pageData.tagline}</p>
                </div>

                {/* Service Cards Grid Layout */}
                <h3 className="text-xs font-bold uppercase text-stone-400 tracking-wider mb-6">Our Custom Specializations</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mb-16">
                  {pageData.items.map((serviceName, idx) => (
                    <div key={idx} className="bg-white border border-stone-200 p-5 rounded-lg shadow-sm hover:border-emerald-600 transition-colors flex items-start gap-3 group">
                      <CheckCircle2 size={18} className="text-emerald-700 mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform" />
                      <div>
                        <h4 className="font-semibold text-stone-900 text-sm">{serviceName}</h4>
                        <p className="text-[11px] text-stone-400 mt-1">Premium curated configurations engineered specifically for these structural environments.</p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Segment Showcase Before/After Gallery */}
                <div className="bg-white border border-stone-200 rounded-xl p-8 mb-16">
                  <h3 className="font-serif text-xl font-bold text-stone-900 mb-2">Before & After Visual Metamorphosis</h3>
                  <p className="text-stone-500 text-xs mb-6">Real case execution showing raw architecture vs our biological luxury optimization.</p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="relative aspect-video rounded-lg overflow-hidden bg-stone-100">
                      <div className="absolute top-3 left-3 bg-stone-900/80 backdrop-blur-sm text-white px-2 py-0.5 text-[10px] rounded uppercase font-semibold z-10">Raw Architectural Space</div>
                      <img src="https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80" alt="Before" className="w-full h-full object-cover filter grayscale contrast-125" />
                    </div>
                    <div className="relative aspect-video rounded-lg overflow-hidden bg-stone-100">
                      <div className="absolute top-3 left-3 bg-emerald-800 text-emerald-50 px-2 py-0.5 text-[10px] rounded uppercase font-semibold z-10">GardenGiri Installation</div>
                      <img src="https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=800&q=80" alt="After" className="w-full h-full object-cover" />
                    </div>
                  </div>
                </div>

                {/* Inline Segment Inquiry */}
                <div className="max-w-xl mx-auto bg-stone-900 text-white rounded-xl p-8 shadow-xl">
                  <h3 className="font-serif text-xl font-bold text-center text-emerald-400">Request Custom Quote for this Service</h3>
                  <p className="text-center text-stone-300 text-xs mb-6 mt-1">Get precise execution timelines and plant profile layouts.</p>
                  <BookingForm defaultService={pageData.title.split(" ")[0]} darkVariant />
                </div>

              </div>
            </div>
          );
        })()}

        {/* PAGE 7: CONTACT SUB-VIEW */}
        {activeTab === "contact" && (
          <div className="animate-fadeIn py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center max-w-xl mx-auto mb-16">
                <h1 className="font-serif text-4xl font-bold text-stone-900">Let's Co-create Your Ecosystem</h1>
                <p className="text-stone-500 text-xs mt-2">Connect with our executive site planner offices directly.</p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                <div className="lg:col-span-5 space-y-8">
                  <div className="bg-stone-50 border border-stone-200 p-6 rounded-lg">
                    <h3 className="font-serif font-bold text-lg text-stone-900 mb-4">GardenGiri HQ</h3>
                    <div className="space-y-4 text-xs text-stone-600">
                      <div className="flex items-start gap-3">
                        <MapPin size={16} className="text-emerald-700 mt-0.5" />
                        <p>104-108, Greenhouse Enclave, Corporate District, New Delhi, India</p>
                      </div>
                      <div className="flex items-center gap-3">
                        <Phone size={16} className="text-emerald-700" />
                        <p>+91 98765 43210 / +91 11 2345 6789</p>
                      </div>
                      <div className="flex items-center gap-3">
                        <Mail size={16} className="text-emerald-700" />
                        <p>concierge@gardengiri.com</p>
                      </div>
                    </div>
                  </div>

                  {/* WhatsApp Quick Trigger Button */}
                  <a 
                    href="https://wa.me/919876543210?text=Hello%20GardenGiri,%20I%20want%20to%20consult%20for%20a%20green%20space."
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-center gap-2 w-full bg-emerald-600 hover:bg-emerald-700 text-white font-medium py-3 rounded-lg text-xs tracking-wider uppercase transition-all"
                  >
                    <MessageCircle size={18} /> Connect over WhatsApp Securely
                  </a>

                  {/* Dummy Interactive Google Maps Frame */}
                  <div className="w-full h-64 rounded-lg overflow-hidden bg-stone-100 border border-stone-200 relative grayscale">
                    <div className="absolute inset-0 flex items-center justify-center text-xs text-stone-400 bg-stone-200/50">
                      [Google Maps API Live Integration Node Placeholder]
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-7 bg-stone-50 border border-stone-200 p-8 rounded-lg">
                  <h3 className="font-serif font-bold text-lg text-stone-900 mb-6">Send Direct Architectural Specification Document</h3>
                  <BookingForm defaultService="Landscaping" />
                </div>
              </div>
            </div>
          </div>
        )}

      </main>

      {/* --- STANDALONE CONSULTATION BANNER IF NOT ON FORM --- */}
      {activeTab !== "contact" && (
        <div className="bg-emerald-900 text-emerald-50 py-8 px-4 border-t border-emerald-950 text-center">
          <p className="text-xs uppercase tracking-widest font-semibold text-emerald-300">Ready to transform your project layout?</p>
          <h3 className="font-serif text-xl sm:text-2xl font-bold mt-1">Get immediate expert plant curation layout schemas.</h3>
          <button 
            onClick={() => { setActiveTab("contact"); window.scrollTo(0,0); }}
            className="mt-4 bg-white text-emerald-900 hover:bg-stone-100 text-xs uppercase tracking-wider font-semibold px-5 py-2.5 rounded transition-all"
          >
            Claim Free Consultation Now
          </button>
        </div>
      )}

      {/* --- FLOATING WHATSAPP BUTTON --- */}
      <a 
        href="https://wa.me/919876543210?text=Hi%20GardenGiri"
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-emerald-600 hover:bg-emerald-500 text-white p-3.5 rounded-full shadow-xl transition-transform hover:scale-110 flex items-center justify-center"
        aria-label="Contact on WhatsApp"
      >
        <MessageCircle size={24} fill="currentColor" />
      </a>

      {/* --- FOOTER --- */}
      <footer className="w-full bg-stone-950 text-stone-400 py-12 border-t border-stone-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <span className="font-serif text-xl font-bold tracking-wide text-white block mb-3">
              Garden<span className="text-emerald-500">Giri</span>
            </span>
            <p className="text-[11px] leading-relaxed text-stone-500">
              Premium biological installations, luxury interior plant scapes, and structured exterior botanical management systems for tier-1 environments.
            </p>
          </div>
          <div>
            <h4 className="text-stone-200 text-xs font-bold uppercase tracking-wider mb-3">Quick Navigation</h4>
            <ul className="space-y-2 text-[11px]">
              {NAV_ITEMS.slice(0, 4).map(item => (
                <li key={item.id} onClick={() => scrollToSection(item.id)} className="hover:text-emerald-400 cursor-pointer transition-colors">{item.label}</li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-stone-200 text-xs font-bold uppercase tracking-wider mb-3">Core Sectors</h4>
            <ul className="space-y-2 text-[11px]">
              {NAV_ITEMS.slice(4).map(item => (
                <li key={item.id} onClick={() => scrollToSection(item.id)} className="hover:text-emerald-400 cursor-pointer transition-colors">{item.label}</li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-stone-200 text-xs font-bold uppercase tracking-wider mb-3">Reach Us Directly</h4>
            <p className="text-[11px] text-stone-500 mb-2">Have a blueprint or layout design ready to submit?</p>
            <p className="text-xs text-stone-300 font-medium">concierge@gardengiri.com</p>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-stone-900 pt-6 text-center text-[11px] text-stone-600 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} Gardengiri Ecosystems Private Limited. All rights reserved.</p>
          <div className="flex space-x-4">
            <span className="hover:text-stone-400 cursor-pointer">Privacy Policy</span>
            <span className="hover:text-stone-400 cursor-pointer">Terms of Architecture</span>
          </div>
        </div>
      </footer>
    </div>
  );
}

// --- UNIVERSAL HIGH-QUALITY FORM RESUABLE WITH DARK/LIGHT VARIANT CONTEXTS ---
function BookingForm({ defaultService, darkVariant = false }: { defaultService: string; darkVariant?: boolean }) {
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  if (formSubmitted) {
    return (
      <div className="text-center py-8 text-emerald-600 animate-fadeIn">
        <CheckCircle2 size={40} className="mx-auto mb-2 text-emerald-500" />
        <h4 className="font-bold text-sm">Request Submitted successfully!</h4>
        <p className={`text-xs mt-1 ${darkVariant ? "text-stone-300" : "text-stone-500"}`}>Our senior biophilic designer will call you within 2 hours.</p>
      </div>
    );
  }

  const labelClass = `block text-[11px] font-semibold uppercase tracking-wider mb-1 ${darkVariant ? "text-stone-300" : "text-stone-700"}`;
  const inputClass = `w-full text-xs rounded border p-2.5 transition-colors focus:outline-none focus:border-emerald-600 ${
    darkVariant 
      ? "bg-stone-800 border-stone-700 text-white placeholder-stone-500" 
      : "bg-white border-stone-300 text-stone-900 placeholder-stone-400"
  }`;

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className={labelClass}>Full Name *</label>
          <input type="text" placeholder="John Doe" required className={inputClass} />
        </div>
        <div>
          <label className={labelClass}>Email Address *</label>
          <input type="email" placeholder="john@company.com" required className={inputClass} />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className={labelClass}>Phone Number *</label>
          <input type="tel" placeholder="+91 XXXXX XXXXX" required className={inputClass} />
        </div>
        <div>
          <label className={labelClass}>City *</label>
          <input type="text" placeholder="Mumbai, Delhi, Bangalore" required className={inputClass} />
        </div>
      </div>

      <div>
        <label className={labelClass}>Service Required</label>
        <select defaultValue={defaultService} className={inputClass}>
          <option>Corporate Office</option>
          <option>Coworking Space</option>
          <option>Hotel</option>
          <option>Hospital</option>
          <option>Educational Campus</option>
          <option>Residential Villa</option>
          <option>Apartment</option>
          <option>Landscaping</option>
        </select>
      </div>

      <div>
        <label className={labelClass}>Message / Area Specifications</label>
        <textarea rows={3} placeholder="Tell us about dimensions, light exposure, or architectural theme..." className={inputClass} />
      </div>

      <button 
        type="submit" 
        className="w-full bg-emerald-700 hover:bg-emerald-600 text-white text-xs uppercase tracking-widest font-bold py-3 rounded transition-colors shadow-md"
      >
        Submit Consultation Request
      </button>
    </form>
  );
}