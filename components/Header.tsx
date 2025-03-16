"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Menu,
  X,
  ChevronDown,
  Building2,
  HomeIcon,
  Hotel,
  Store,
} from "lucide-react";
import Image from "next/image";
import logo from "../public/assets/Chavadi_Estates_Logo.png";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [projectsDropdownOpen, setProjectsDropdownOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const projectsButtonRef = useRef<HTMLButtonElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setProjectsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      // Scroll to top of mobile menu when opened
      setTimeout(() => {
        const mobileMenu = document.getElementById("mobile-menu");
        if (mobileMenu) {
          mobileMenu.scrollTop = 0;
        }
      }, 10);
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
    setProjectsDropdownOpen(false);
  }, [pathname]);

  // Check if the current path matches the given path
  const isActive = (path: string) => {
    if (path === "/") {
      return pathname === path;
    }
    return pathname.startsWith(path);
  };

  const toggleProjectsDropdown = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setProjectsDropdownOpen(!projectsDropdownOpen);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-sm shadow-sm rounded-[0] mx-0"
          : "bg-white/60 backdrop-blur-sm"
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="relative z-50">
            <h1 className="text-xl sm:text-2xl font-bold font-serif text-emerald-800">
              <span className="display flex items-center space-x-2">
                <Image
                  src={logo}
                  alt={"Chavadi Estates Logo"}
                  width={70}
                  height={70}
                  // className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />{" "}
                <span className="text-emerald-600 px-1">Chavadi</span> Estates
              </span>
            </h1>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8" ref={menuRef}>
            <Link
              href="/"
              className={`font-medium transition-colors hover:text-emerald-600 ${
                isActive("/")
                  ? "text-emerald-600 font-semibold"
                  : "text-emerald-950"
              }`}
            >
              Home
            </Link>
            <Link
              href="/about"
              className={`font-medium transition-colors hover:text-emerald-600 ${
                isActive("/about")
                  ? "text-emerald-600 font-semibold"
                  : "text-emerald-950"
              }`}
            >
              About
            </Link>
            <div className="relative">
              <button
                ref={projectsButtonRef}
                onClick={toggleProjectsDropdown}
                className={`font-medium transition-colors hover:text-emerald-600 flex items-center ${
                  isActive("/projects")
                    ? "text-emerald-600 font-semibold"
                    : "text-emerald-950"
                }`}
              >
                Projects{" "}
                <ChevronDown
                  className={`h-4 w-4 ml-1 transition-transform ${
                    projectsDropdownOpen ? "rotate-180" : ""
                  }`}
                />
              </button>
              {projectsDropdownOpen && (
                <div
                  className="absolute top-full mt-2 w-[650px] max-w-[calc(100vw-2rem)] bg-white shadow-xl rounded-md overflow-hidden animate-fade-in z-50"
                  style={{
                    left: "50%",
                    transform: "translateX(-50%)",
                  }}
                >
                  <div className="p-4 sm:p-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                      <div>
                        <h3 className="text-emerald-800 font-medium mb-4">
                          Residential Projects
                        </h3>
                        <div className="space-y-4">
                          <Link
                            href="/projects/Chavadi-Lotus-Enclave"
                            className="flex items-center space-x-3 hover:text-emerald-600 transition-colors p-2 rounded-md hover:bg-emerald-50 group"
                          >
                            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-emerald-100 rounded-md flex items-center justify-center text-emerald-600 group-hover:bg-emerald-200 transition-colors">
                              <HomeIcon className="h-5 w-5 sm:h-6 sm:w-6" />
                            </div>
                            <div>
                              <span className="font-medium block">
                                Chavadi Lotus Enclave
                              </span>
                              <span className="text-xs sm:text-sm text-slate-500">
                                Premium residential layouts
                              </span>
                            </div>
                          </Link>
                          <Link
                            href="/projects/premium-apartments"
                            className="flex items-center space-x-3 hover:text-emerald-600 transition-colors p-2 rounded-md hover:bg-emerald-50 group"
                          >
                            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-emerald-100 rounded-md flex items-center justify-center text-emerald-600 group-hover:bg-emerald-200 transition-colors">
                              <Building2 className="h-5 w-5 sm:h-6 sm:w-6" />
                            </div>
                            <div>
                              <span className="font-medium block">
                                Chavadi Aura Appartments
                              </span>
                              <span className="text-xs sm:text-sm text-slate-500">
                                Premium Appartments
                              </span>
                            </div>
                          </Link>
                        </div>
                      </div>
                      <div>
                        <h3 className="text-emerald-800 font-medium mb-4">
                          Commercial Projects
                        </h3>
                        <div className="space-y-4">
                          <Link
                            href="/projects/commercial-spaces"
                            className="flex items-center space-x-3 hover:text-emerald-600 transition-colors p-2 rounded-md hover:bg-emerald-50 group"
                          >
                            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-emerald-100 rounded-md flex items-center justify-center text-emerald-600 group-hover:bg-emerald-200 transition-colors">
                              <Store className="h-5 w-5 sm:h-6 sm:w-6" />
                            </div>
                            <div>
                              <span className="font-medium block">
                                Chavadi Wedding Retreat
                              </span>
                              <span className="text-xs sm:text-sm text-slate-500">
                                Exclusive Garden Wedding & Luxury Retreat
                              </span>
                            </div>
                          </Link>
                          {/* <Link
                            href="/projects/hospitality"
                            className="flex items-center space-x-3 hover:text-emerald-600 transition-colors p-2 rounded-md hover:bg-emerald-50 group"
                          >
                            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-emerald-100 rounded-md flex items-center justify-center text-emerald-600 group-hover:bg-emerald-200 transition-colors">
                              <Hotel className="h-5 w-5 sm:h-6 sm:w-6" />
                            </div>
                            <div>
                              <span className="font-medium block">
                                Hospitality
                              </span>
                              <span className="text-xs sm:text-sm text-slate-500">
                                Hotels and resorts
                              </span>
                            </div>
                          </Link> */}
                        </div>
                      </div>
                    </div>
                    <div className="mt-4 sm:mt-6 pt-4 sm:pt-6 border-t">
                      <Link
                        href="/projects"
                        className="text-emerald-600 font-medium hover:text-emerald-800 transition-colors"
                      >
                        View All Projects
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>
            <Link
              href="/blog"
              className={`font-medium transition-colors hover:text-emerald-600 ${
                isActive("/blog")
                  ? "text-emerald-600 font-semibold"
                  : "text-emerald-950"
              }`}
            >
              News & Insights
            </Link>
            <Link
              href="/faq"
              className={`font-medium transition-colors hover:text-emerald-600 ${
                isActive("/faq")
                  ? "text-emerald-600 font-semibold"
                  : "text-emerald-950"
              }`}
            >
              FAQ
            </Link>
            <Link
              href="/contact"
              className={`font-medium transition-colors hover:text-emerald-600 ${
                isActive("/contact")
                  ? "text-emerald-600 font-semibold"
                  : "text-emerald-950"
              }`}
            >
              Contact
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden relative z-50"
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? (
              <X className="h-6 w-6 text-emerald-800" />
            ) : (
              <Menu className="h-6 w-6 text-emerald-800" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        id="mobile-menu"
        className={`fixed inset-0 bg-white/90 backdrop-blur-md z-40 transition-transform duration-300 transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } lg:hidden overflow-y-auto flex flex-col`}
        style={{ top: "0", height: "100vh" }}
      >
        <div className="flex-grow container py-24 px-6">
          <nav className="flex flex-col space-y-6">
            <Link
              href="/"
              className={`text-xl sm:text-2xl font-serif ${
                isActive("/") ? "text-emerald-600" : "text-emerald-950"
              }`}
            >
              Home
            </Link>
            <Link
              href="/about"
              className={`text-xl sm:text-2xl font-serif ${
                isActive("/about") ? "text-emerald-600" : "text-emerald-950"
              }`}
            >
              About
            </Link>
            <Link
              href="/projects"
              className={`text-xl sm:text-2xl font-serif ${
                isActive("/projects") ? "text-emerald-600" : "text-emerald-950"
              }`}
            >
              Projects
            </Link>
            {/* <div>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  setProjectsDropdownOpen(!projectsDropdownOpen);
                }}
                className={`text-xl sm:text-2xl font-serif flex items-center ${
                  isActive("/projects")
                    ? "text-emerald-600"
                    : "text-emerald-950"
                }`}
              >
                Projects{" "}
                <ChevronDown
                  className={`h-5 w-5 ml-2 transition-transform ${
                    projectsDropdownOpen ? "rotate-180" : ""
                  }`}
                />
              </button>
              <div
                className={`pl-4 space-y-4 mt-4 ${
                  projectsDropdownOpen ? "block" : "hidden"
                }`}
              >
                <Link
                  href="/projects/luxury-villas"
                  className="block text-md sm:text-lg hover:text-emerald-600 text-emerald-800"
                >
                  Luxury Villas
                </Link>
                <Link
                  href="/projects/premium-apartments"
                  className="block text-md sm:text-lg hover:text-emerald-600 text-emerald-800"
                >
                  Premium Apartments
                </Link>
                <Link
                  href="/projects/commercial-spaces"
                  className="block text-md sm:text-lg hover:text-emerald-600 text-emerald-800"
                >
                  Commercial Spaces
                </Link>
                <Link
                  href="/projects/hospitality"
                  className="block text-md sm:text-lg hover:text-emerald-600 text-emerald-800"
                >
                  Hospitality
                </Link>
              </div>
            </div> */}
            <Link
              href="/blog"
              className={`text-xl sm:text-2xl font-serif ${
                isActive("/blog") ? "text-emerald-600" : "text-emerald-950"
              }`}
            >
              News & Insights
            </Link>
            <Link
              href="/faq"
              className={`text-xl sm:text-2xl font-serif ${
                isActive("/faq") ? "text-emerald-600" : "text-emerald-950"
              }`}
            >
              FAQ
            </Link>
            <Link
              href="/contact"
              className={`text-xl sm:text-2xl font-serif ${
                isActive("/contact") ? "text-emerald-600" : "text-emerald-950"
              }`}
            >
              Contact
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
