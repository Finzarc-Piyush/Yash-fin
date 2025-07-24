import { Link } from "react-router-dom";
import { Zap, Menu, X, Globe, Cpu } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";
import React, { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
} from "./ui/dropdown-menu";

export function Navbar() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const navLinks = [
    { name: "Services", href: "/services" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Contact", href: "/contact" }
  ];
  const services = [
    {
      name: "AI Automation",
      icon: <Zap className="h-8 w-8 mb-3 text-white bg-black/60 rounded-full p-1 mx-auto" />,
      summary: "Intelligent automation solutions that streamline operations, reduce costs, and improve efficiency across your business.",
      link: "/services#ai-automation",
      color: "bg-black"
    },
    {
      name: "AI-APPS WebCraft",
      icon: <Globe className="h-8 w-8 mb-3 text-white bg-black/60 rounded-full p-1 mx-auto" />,
      summary: "Modern web development for scalable, high-performance digital experiences.",
      link: "/services#webcraft",
      color: "bg-black"
    },
    {
      name: "AI-APPS Data Science",
      icon: <Cpu className="h-8 w-8 mb-3 text-white bg-black/60 rounded-full p-1 mx-auto" />,
      summary: "Data analytics and machine learning to unlock actionable business insights.",
      link: "/services#data-science",
      color: "bg-black"
    },
  ];

  return (
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 w-[95%] max-w-7xl z-50 backdrop-blur-lg bg-white/10 border border-white/20 px-8 py-3 transition-all duration-300 rounded-full shadow-lg">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2">
          <Zap className="h-6 w-6 text-black" />
          <span className="font-manrope text-sm text-black uppercase tracking-widest font-bold">
            AI-APPS
          </span>
        </Link>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center space-x-8">
          {/* Services Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button className="font-manrope text-black hover:text-gray-600 transition-colors duration-300 text-sm font-bold flex items-center gap-1 focus:outline-none">
                Services
                <svg width="16" height="16" fill="none" viewBox="0 0 24 24"><path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="p-4 bg-black/95 border-none rounded-2xl shadow-2xl min-w-[340px] flex gap-4">
              {services.map((service) => (
                <div
                  key={service.name}
                  className="flex flex-col items-center justify-between w-56 h-64 rounded-xl bg-black hover:bg-[#18181b] transition group p-4 cursor-pointer"
                >
                  {service.icon}
                  <div className="font-manrope text-lg font-bold text-white text-center mb-2 mt-2">
                    {service.name}
                  </div>
                  <div className="text-white/80 text-sm text-center mb-4 group-hover:text-white transition-all duration-200">
                    {service.summary}
                  </div>
                  <Link
                    to={service.link}
                    className="text-[#00bfa6] font-semibold text-sm mt-auto group-hover:underline flex items-center gap-1"
                  >
                    Learn more <span className="ml-1">→</span>
                  </Link>
                </div>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
          {/* Other nav links */}
          {navLinks.slice(1).map((link) => (
            <Link
              key={link.name}
              to={link.href}
              className="font-manrope text-black hover:text-gray-600 transition-colors duration-300 text-sm font-bold"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Right Controls: Theme Toggle & Sidebar Toggle */}
        <div className="flex items-center gap-x-2">
          {/* Theme Toggle */}
          <ThemeToggle />
          {/* Mobile Sidebar Toggle */}
          <button
            className="md:hidden flex items-center justify-center h-8 w-8 p-0 text-black"
            onClick={() => setSidebarOpen(true)}
            aria-label="Open navigation menu"
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </div>

      {/* Mobile Sidebar */}
      {sidebarOpen && (
        <>
          {/* Overlay */}
          <div
            className="fixed inset-0 bg-black/40 z-50"
            onClick={() => setSidebarOpen(false)}
          />
          {/* Sidebar Drawer */}
          <div className="fixed top-4 right-4 bg-white dark:bg-gray-900 shadow-2xl border border-gray-200 dark:border-gray-800 z-50 flex flex-col p-6 rounded-2xl transition-transform duration-300 animate-in slide-in-from-right w-auto h-auto min-w-[200px]">
            <button
              className="self-end mb-8 text-black dark:text-white"
              onClick={() => setSidebarOpen(false)}
              aria-label="Close navigation menu"
            >
              <X className="h-7 w-7" />
            </button>
            <nav className="flex flex-col gap-6 mt-4">
              {/* Services Accordion */}
              <div>
                <button
                  className="w-full flex items-center justify-between font-manrope text-lg font-bold text-black dark:text-white focus:outline-none mb-2"
                  onClick={() => setServicesOpen((open) => !open)}
                  aria-expanded={servicesOpen}
                >
                  Services
                  <svg width="16" height="16" fill="none" viewBox="0 0 24 24" className={`transition-transform ${servicesOpen ? 'rotate-180' : ''}`}><path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </button>
                {servicesOpen && (
                  <div className="flex flex-col gap-4 mb-4">
                    {services.map((service) => (
                      <div
                        key={service.name}
                        className="flex flex-col items-center justify-between w-full rounded-xl bg-black dark:bg-gray-800 hover:bg-[#18181b] transition group p-4 cursor-pointer"
                      >
                        {service.icon}
                        <div className="font-manrope text-base font-bold text-white text-center mb-2 mt-2">
                          {service.name}
                        </div>
                        <div className="text-white/80 text-xs text-center mb-2 group-hover:text-white transition-all duration-200">
                          {service.summary}
                        </div>
                        <Link
                          to={service.link}
                          className="text-[#00bfa6] font-semibold text-xs mt-auto group-hover:underline flex items-center gap-1"
                          onClick={() => setSidebarOpen(false)}
                        >
                          Learn more <span className="ml-1">→</span>
                        </Link>
                      </div>
                    ))}
                  </div>
                )}
              </div>
              {/* Other nav links */}
              {navLinks.slice(1).map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className="font-manrope text-lg font-bold text-black dark:text-white hover:text-[#5078f2] dark:hover:text-[#00bfa6] transition"
                  onClick={() => setSidebarOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>
        </>
      )}
    </nav>
  );
}