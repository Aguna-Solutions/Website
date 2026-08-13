"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Phone, Menu, X, ChevronDown } from "lucide-react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Products", href: "/products" },
  { label: "About", href: "/about" },
];

const cyberLinks = [
  { label: "Services", href: "/services" },
  { label: "Cyber Security", href: "/cyber-security" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [cyberAccordionOpen, setCyberAccordionOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const dropdownTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Close mobile overlay on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        setIsOpen(false);
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  // Prevent body scroll when mobile overlay is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const closeMobileMenu = () => {
    setIsOpen(false);
    setCyberAccordionOpen(false);
  };

  const isCyberActive =
    pathname === "/services" || pathname === "/cyber-security";

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <>
      {/* ── Fixed top bar ── */}
      <header
        className="fixed w-full z-50 top-0 start-0"
        style={{
          background:
            "linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(225,247,255,0.95) 40%, rgba(5,10,20,0.8) 100%)",
          borderBottom:
            "1px solid",
          borderImage:
            "linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,0.8) 50%, rgba(255,255,255,0) 100%) 1",
        }}
      >
        <nav className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-20">
          {/* ── Left: Logo ── */}
          <Link
            href="/"
            className="flex items-center flex-shrink-0 group"
            onClick={closeMobileMenu}
            aria-label="Aguna Solutions – Home"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-white/40 blur-2xl rounded-full pointer-events-none" />
              <Image
                src="/aguna-logo.png"
                alt="Aguna Solutions"
                width={64}
                height={70}
                priority
                unoptimized
                className="relative transition-transform duration-200 group-hover:scale-105"
              />
            </div>
          </Link>

          {/* ── Center: Desktop pill nav ── */}
          <div className="hidden md:flex items-center">
            <div className="flex items-center gap-2 bg-white/30 backdrop-blur-sm border border-white/40 rounded-full px-4 py-2 shadow-sm">

              {/* Home */}
              <Link
                href="/"
                className={`px-5 py-2 rounded-full text-sm font-medium transition-colors duration-150 ${
                  isActive("/")
                    ? "text-blue-900 font-bold bg-white/60"
                    : "text-slate-900 hover:text-blue-900 hover:bg-white/40"
                }`}
              >
                Home
              </Link>

              {/* Cybersecurity Services dropdown */}
              <div
                ref={dropdownRef}
                className="relative"
                onMouseEnter={() => {
                  if (dropdownTimerRef.current) clearTimeout(dropdownTimerRef.current);
                  setDropdownOpen(true);
                }}
                onMouseLeave={() => {
                  dropdownTimerRef.current = setTimeout(() => setDropdownOpen(false), 150);
                }}
              >
                <button
                  className={`flex items-center gap-1 px-5 py-2 rounded-full text-sm font-medium transition-colors duration-150 cursor-pointer ${
                    isCyberActive
                      ? "text-blue-900 font-bold bg-white/60"
                      : "text-slate-900 hover:text-blue-900 hover:bg-white/40"
                  }`}
                  aria-haspopup="true"
                  aria-expanded={dropdownOpen}
                >
                  Cybersecurity Services
                  <ChevronDown
                    size={14}
                    className={`transition-transform duration-200 ${
                      dropdownOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {/* Invisible bridge to prevent mouseLeave gap */}
                <div className="absolute top-full left-0 right-0 h-2" />

                {/* Dropdown panel */}
                <div
                  className={`absolute top-[calc(100%+4px)] left-1/2 -translate-x-1/2 w-48 rounded-xl bg-white shadow-lg border border-gray-100 overflow-hidden transition-all duration-150 ${
                    dropdownOpen
                      ? "opacity-100 translate-y-0 pointer-events-auto"
                      : "opacity-0 -translate-y-1 pointer-events-none"
                  }`}
                  role="menu"
                >
                  {cyberLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      role="menuitem"
                      className={`block px-4 py-3 text-sm transition-colors duration-150 ${
                        pathname === link.href
                          ? "text-blue-900 font-bold bg-blue-50"
                          : "text-slate-700 hover:text-blue-900 hover:bg-blue-50"
                      }`}
                      onClick={() => setDropdownOpen(false)}
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Products */}
              <Link
                href="/products"
                className={`px-5 py-2 rounded-full text-sm font-medium transition-colors duration-150 ${
                  isActive("/products")
                    ? "text-blue-900 font-bold bg-white/60"
                    : "text-slate-900 hover:text-blue-900 hover:bg-white/40"
                }`}
              >
                Products
              </Link>

              {/* About */}
              <Link
                href="/about"
                className={`px-5 py-2 rounded-full text-sm font-medium transition-colors duration-150 ${
                  isActive("/about")
                    ? "text-blue-900 font-bold bg-white/60"
                    : "text-slate-900 hover:text-blue-900 hover:bg-white/40"
                }`}
              >
                About
              </Link>
            </div>
          </div>

          {/* ── Right: Contact button + Hamburger ── */}
          <div className="flex items-center gap-3">
            {/* Contact button (visible on desktop) */}
            <Link
              href="/contact"
              className="hidden md:flex items-center gap-2 px-5 py-2 rounded-full bg-white text-slate-900 text-sm font-semibold shadow-sm hover:bg-blue-50 hover:text-blue-900 transition-colors duration-200 border border-white/60"
            >
              <Phone size={14} />
              Contact
            </Link>

            {/* Hamburger (mobile only) */}
            <button
              className="md:hidden flex items-center justify-center w-9 h-9 rounded-lg text-slate-900 bg-white/70 hover:bg-white transition-colors duration-150"
              onClick={() => setIsOpen((prev) => !prev)}
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
              aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </nav>
      </header>

      {/* ── Mobile full-screen overlay ── */}
      <div
        id="mobile-menu"
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
        className={`md:hidden fixed inset-0 z-50 bg-slate-900/95 backdrop-blur-xl flex flex-col transition-all duration-300 ${
          isOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        {/* Close button row */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/10">
          <Link
            href="/"
            onClick={closeMobileMenu}
            aria-label="Aguna Solutions – Home"
          >
            <span className="text-white font-semibold text-lg tracking-tight font-montserrat">
              Aguna Solutions
            </span>
          </Link>
          <button
            className="flex items-center justify-center w-9 h-9 rounded-lg text-white bg-white/10 hover:bg-white/20 transition-colors duration-150"
            onClick={closeMobileMenu}
            aria-label="Close navigation menu"
          >
            <X size={20} />
          </button>
        </div>

        {/* Nav links */}
        <nav className="flex-1 overflow-y-auto px-6 py-6 flex flex-col gap-1">

          {/* Home */}
          <Link
            href="/"
            onClick={closeMobileMenu}
            className={`block px-4 py-3.5 rounded-xl text-base font-medium transition-colors duration-150 ${
              pathname === "/"
                ? "text-blue-400 font-bold bg-white/10"
                : "text-white hover:text-blue-400 hover:bg-white/5"
            }`}
          >
            Home
          </Link>

          {/* Cybersecurity Services accordion */}
          <div>
            <button
              className={`flex items-center justify-between w-full px-4 py-3.5 rounded-xl text-base font-medium transition-colors duration-150 ${
                isCyberActive
                  ? "text-blue-400 font-bold bg-white/10"
                  : "text-white hover:text-blue-400 hover:bg-white/5"
              }`}
              onClick={() => setCyberAccordionOpen((prev) => !prev)}
              aria-expanded={cyberAccordionOpen}
              aria-controls="cyber-accordion"
            >
              Cybersecurity Services
              <ChevronDown
                size={18}
                className={`transition-transform duration-300 ${
                  cyberAccordionOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {/* Accordion body */}
            <div
              id="cyber-accordion"
              className={`overflow-hidden transition-all duration-300 ${
                cyberAccordionOpen ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
              }`}
            >
              <div className="pl-4 mt-1 flex flex-col gap-1">
                {cyberLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={closeMobileMenu}
                    className={`block px-4 py-3 rounded-xl text-sm font-medium transition-colors duration-150 ${
                      pathname === link.href
                        ? "text-blue-400 font-bold bg-white/10"
                        : "text-slate-300 hover:text-blue-400 hover:bg-white/5"
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Products */}
          <Link
            href="/products"
            onClick={closeMobileMenu}
            className={`block px-4 py-3.5 rounded-xl text-base font-medium transition-colors duration-150 ${
              isActive("/products")
                ? "text-blue-400 font-bold bg-white/10"
                : "text-white hover:text-blue-400 hover:bg-white/5"
            }`}
          >
            Products
          </Link>

          {/* About */}
          <Link
            href="/about"
            onClick={closeMobileMenu}
            className={`block px-4 py-3.5 rounded-xl text-base font-medium transition-colors duration-150 ${
              isActive("/about")
                ? "text-blue-400 font-bold bg-white/10"
                : "text-white hover:text-blue-400 hover:bg-white/5"
            }`}
          >
            About
          </Link>
        </nav>

        {/* Contact button at bottom of overlay */}
        <div className="px-6 py-6 border-t border-white/10">
          <Link
            href="/contact"
            onClick={closeMobileMenu}
            className="flex items-center justify-center gap-2 w-full px-5 py-3.5 rounded-xl bg-white text-slate-900 text-base font-semibold hover:bg-blue-50 hover:text-blue-900 transition-colors duration-200"
          >
            <Phone size={16} />
            Contact Us
          </Link>
        </div>
      </div>
    </>
  );
}
