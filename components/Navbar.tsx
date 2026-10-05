"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Phone, Menu, X, ChevronDown } from "lucide-react";

const cyberLinks = [
  { label: "Services", href: "/services" },
  { label: "Cyber Security", href: "/cyber-security" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [cyberAccordionOpen, setCyberAccordionOpen] = useState(false);
  const [pendingHref, setPendingHref] = useState<string | null>(null);
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

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDropdownOpen(false);
      }
    };
    if (dropdownOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [dropdownOpen]);

  // Clear pending state and close mobile overlay when navigation completes
  useEffect(() => {
    setPendingHref(null);
    setIsOpen(false);
    setCyberAccordionOpen(false);
  }, [pathname]);

  // Safety fallback: reset pending state after 3.5s if route didn't change
  useEffect(() => {
    if (!pendingHref) return;
    const timer = setTimeout(() => {
      setPendingHref(null);
    }, 3500);
    return () => clearTimeout(timer);
  }, [pendingHref]);

  const closeMobileMenu = () => {
    setIsOpen(false);
    setCyberAccordionOpen(false);
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    // If clicking current route, scroll smoothly to top
    if (pathname === href) {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
      closeMobileMenu();
      return;
    }

    // Optimistic immediate visual response on first click
    setPendingHref(href);
    closeMobileMenu();
  };

  const isCyberActive =
    (pendingHref
      ? pendingHref === "/services" || pendingHref === "/cyber-security"
      : false) ||
    pathname === "/services" ||
    pathname === "/cyber-security";

  const isLinkActive = (href: string) => {
    if (pendingHref) {
      if (href === "/") return pendingHref === "/";
      return pendingHref.startsWith(href);
    }
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <>
      {/* ── Floating Island Header ── */}
      <header className="fixed top-0 sm:top-3.5 inset-x-0 z-50 px-2.5 sm:px-6 lg:px-8 max-w-7xl mx-auto transition-all duration-300">
        <div
          className="relative rounded-2xl sm:rounded-full transition-all duration-300"
          style={{
            background:
              "linear-gradient(135deg, rgba(238, 253, 255, 0.96) 0%, rgba(198, 247, 253, 0.90) 45%, rgba(218, 250, 255, 0.96) 100%)",
            backdropFilter: "blur(24px) saturate(190%)",
            WebkitBackdropFilter: "blur(24px) saturate(190%)",
            border: "1px solid rgba(255, 255, 255, 0.85)",
            boxShadow: "none",
          }}
        >
          {/* Specular top rim light */}
          <div
            className="absolute inset-x-6 top-0 h-[1px] bg-gradient-to-r from-transparent via-white to-transparent opacity-95 pointer-events-none"
            aria-hidden="true"
          />

          {/* Ambient light diffusion */}
          <div
            className="absolute inset-0 bg-gradient-to-b from-white/30 via-transparent to-cyan-500/5 rounded-2xl sm:rounded-full pointer-events-none"
            aria-hidden="true"
          />

          <nav className="px-4 sm:px-6 flex items-center justify-between h-16 sm:h-[70px] relative z-10">
            {/* ── Left: Logo ── */}
            <Link
              href="/"
              prefetch={true}
              className="flex items-center gap-2.5 flex-shrink-0 group cursor-pointer select-none"
              onClick={(e) => handleNavClick(e, "/")}
              aria-label="Aguna Solutions – Home"
            >
              <div className="relative flex items-center">
                <div className="absolute inset-0 bg-cyan-400/30 blur-xl rounded-full pointer-events-none group-hover:scale-125 transition-transform duration-300" />
                <Image
                  src="/aguna-logo.png"
                  alt="Aguna Solutions"
                  width={52}
                  height={56}
                  priority
                  unoptimized
                  className="relative h-9 sm:h-10 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-col justify-center -space-y-0.5 select-none">
                <span className="font-comfortaa font-bold text-[19px] sm:text-[21px] text-slate-950 tracking-tight leading-none group-hover:text-blue-900 transition-colors">
                  Aguna
                </span>
                <span className="font-outfit font-bold text-[9px] sm:text-[9.5px] text-cyan-800 tracking-[0.24em] uppercase leading-tight">
                  Solutions
                </span>
              </div>
            </Link>

            {/* ── Center: Desktop Nav Pills ── */}
            <div className="hidden md:flex items-center gap-1 bg-white/45 hover:bg-white/55 backdrop-blur-md border border-white/70 rounded-full p-1 shadow-inner shadow-cyan-950/5 transition-all duration-200">
              {/* Home */}
              <Link
                href="/"
                prefetch={true}
                onClick={(e) => handleNavClick(e, "/")}
                className={`px-4 py-1.5 rounded-full text-sm font-semibold select-none cursor-pointer active:scale-95 transition-all duration-150 ${
                  isLinkActive("/")
                    ? "bg-white text-blue-950 shadow-[0_2px_8px_rgba(0,35,70,0.08)]"
                    : "text-slate-800 hover:text-blue-950 hover:bg-white/50"
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
                  type="button"
                  onClick={() => setDropdownOpen((prev) => !prev)}
                  className={`flex items-center gap-1.5 px-4 py-1.5 rounded-full text-sm font-semibold select-none cursor-pointer active:scale-95 transition-all duration-150 ${
                    isCyberActive
                      ? "bg-white text-blue-950 shadow-[0_2px_8px_rgba(0,35,70,0.08)]"
                      : "text-slate-800 hover:text-blue-950 hover:bg-white/50"
                  }`}
                  aria-haspopup="true"
                  aria-expanded={dropdownOpen}
                >
                  <span>Cybersecurity</span>
                  <ChevronDown
                    size={13}
                    className={`transition-transform duration-200 ${
                      dropdownOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {/* Invisible bridge to prevent mouseLeave gap */}
                <div
                  className={`absolute top-full left-0 right-0 h-2 ${
                    dropdownOpen ? "pointer-events-auto" : "pointer-events-none"
                  }`}
                />

                {/* Dropdown panel */}
                <div
                  className={`absolute top-[calc(100%+8px)] left-1/2 -translate-x-1/2 w-52 rounded-2xl bg-[rgba(240,253,255,0.98)] backdrop-blur-2xl shadow-xl shadow-cyan-950/15 border border-white p-1.5 transition-all duration-200 ${
                    dropdownOpen
                      ? "opacity-100 translate-y-0 pointer-events-auto"
                      : "opacity-0 -translate-y-2 pointer-events-none"
                  }`}
                  role="menu"
                >
                  {cyberLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      prefetch={true}
                      role="menuitem"
                      className={`block px-3.5 py-2.5 rounded-xl text-sm font-medium select-none cursor-pointer active:scale-95 transition-all duration-150 ${
                        pathname === link.href || pendingHref === link.href
                          ? "text-blue-950 font-bold bg-white shadow-sm"
                          : "text-slate-700 hover:text-blue-950 hover:bg-white/80"
                      }`}
                      onClick={(e) => {
                        handleNavClick(e, link.href);
                        setDropdownOpen(false);
                      }}
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Products */}
              <Link
                href="/products"
                prefetch={true}
                onClick={(e) => handleNavClick(e, "/products")}
                className={`px-4 py-1.5 rounded-full text-sm font-semibold select-none cursor-pointer active:scale-95 transition-all duration-150 ${
                  isLinkActive("/products")
                    ? "bg-white text-blue-950 shadow-[0_2px_8px_rgba(0,35,70,0.08)]"
                    : "text-slate-800 hover:text-blue-950 hover:bg-white/50"
                }`}
              >
                Products
              </Link>

              {/* About */}
              <Link
                href="/about"
                prefetch={true}
                onClick={(e) => handleNavClick(e, "/about")}
                className={`px-4 py-1.5 rounded-full text-sm font-semibold select-none cursor-pointer active:scale-95 transition-all duration-150 ${
                  isLinkActive("/about")
                    ? "bg-white text-blue-950 shadow-[0_2px_8px_rgba(0,35,70,0.08)]"
                    : "text-slate-800 hover:text-blue-950 hover:bg-white/50"
                }`}
              >
                About
              </Link>
            </div>

            {/* ── Right: Contact button + Hamburger ── */}
            <div className="flex items-center gap-3">
              {/* Contact button (visible on desktop) */}
              <Link
                href="/contact"
                prefetch={true}
                onClick={(e) => handleNavClick(e, "/contact")}
                className={`hidden md:flex items-center gap-2 px-5 py-2 rounded-full text-sm font-semibold shadow-md shadow-slate-950/20 border transition-all duration-200 transform active:scale-95 group select-none cursor-pointer ${
                  isLinkActive("/contact")
                    ? "bg-cyan-500 text-slate-950 border-cyan-300 shadow-[0_0_20px_rgba(34,211,238,0.5)] font-bold"
                    : "bg-slate-950 hover:bg-slate-900 text-white hover:shadow-[0_0_20px_rgba(198,247,253,0.5)] border-cyan-400/30 hover:border-cyan-300 hover:-translate-y-0.5"
                }`}
              >
                <Phone
                  size={13}
                  className={`transition-transform duration-200 group-hover:rotate-12 ${
                    isLinkActive("/contact") ? "text-slate-950" : "text-cyan-300"
                  }`}
                />
                <span>Contact</span>
              </Link>

              {/* Hamburger (mobile only) */}
              <button
                type="button"
                className="md:hidden flex items-center justify-center w-9 h-9 rounded-full text-slate-900 bg-white/70 hover:bg-white shadow-sm border border-white/80 active:scale-90 transition-all duration-150 cursor-pointer select-none"
                onClick={() => setIsOpen((prev) => !prev)}
                aria-expanded={isOpen}
                aria-controls="mobile-menu"
                aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
              >
                {isOpen ? <X size={18} /> : <Menu size={18} />}
              </button>
            </div>
          </nav>
        </div>
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
            prefetch={true}
            onClick={(e) => handleNavClick(e, "/")}
            aria-label="Aguna Solutions – Home"
            className="flex items-center gap-2.5 cursor-pointer select-none"
          >
            <Image
              src="/aguna-logo.png"
              alt="Aguna Solutions"
              width={36}
              height={40}
              className="h-8 w-auto"
            />
            <div className="flex flex-col justify-center -space-y-0.5">
              <span className="font-comfortaa font-bold text-base text-white tracking-tight leading-none">
                Aguna
              </span>
              <span className="font-outfit text-[8.5px] font-bold text-cyan-400/90 tracking-[0.22em] uppercase leading-tight">
                Solutions
              </span>
            </div>
          </Link>
          <button
            type="button"
            className="flex items-center justify-center w-9 h-9 rounded-lg text-white bg-white/10 hover:bg-white/20 active:scale-90 transition-all duration-150 cursor-pointer"
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
            prefetch={true}
            onClick={(e) => handleNavClick(e, "/")}
            className={`block px-4 py-3.5 rounded-xl text-base font-medium select-none cursor-pointer active:scale-98 transition-colors duration-150 ${
              isLinkActive("/")
                ? "text-blue-400 font-bold bg-white/10"
                : "text-white hover:text-blue-400 hover:bg-white/5"
            }`}
          >
            Home
          </Link>

          {/* Cybersecurity Services accordion */}
          <div>
            <button
              type="button"
              className={`flex items-center justify-between w-full px-4 py-3.5 rounded-xl text-base font-medium select-none cursor-pointer active:scale-98 transition-colors duration-150 ${
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
                    prefetch={true}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className={`block px-4 py-3 rounded-xl text-sm font-medium select-none cursor-pointer active:scale-98 transition-colors duration-150 ${
                      pathname === link.href || pendingHref === link.href
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
            prefetch={true}
            onClick={(e) => handleNavClick(e, "/products")}
            className={`block px-4 py-3.5 rounded-xl text-base font-medium select-none cursor-pointer active:scale-98 transition-colors duration-150 ${
              isLinkActive("/products")
                ? "text-blue-400 font-bold bg-white/10"
                : "text-white hover:text-blue-400 hover:bg-white/5"
            }`}
          >
            Products
          </Link>

          {/* About */}
          <Link
            href="/about"
            prefetch={true}
            onClick={(e) => handleNavClick(e, "/about")}
            className={`block px-4 py-3.5 rounded-xl text-base font-medium select-none cursor-pointer active:scale-98 transition-colors duration-150 ${
              isLinkActive("/about")
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
            prefetch={true}
            onClick={(e) => handleNavClick(e, "/contact")}
            className="flex items-center justify-center gap-2 w-full px-5 py-3.5 rounded-xl bg-white text-slate-900 text-base font-semibold hover:bg-blue-50 hover:text-blue-900 active:scale-95 transition-all duration-200 cursor-pointer select-none"
          >
            <Phone size={16} />
            Contact Us
          </Link>
        </div>
      </div>
    </>
  );
}
