import React, { useState, useEffect } from "react";
import { Menu, X, FileText, Sparkles } from "lucide-react";
import { portfolioData } from "../data/portfolioData";

const Navbar = ({ onOpenResume }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState("Home");
    const { personal } = portfolioData;

    const navItems = [
        { href: "#Home", label: "Home" },
        { href: "#About", label: "About" },
        { href: "#Timeline", label: "Timeline" },
        { href: "#Skills", label: "Skills" },
        { href: "#Portofolio", label: "Projects" },
        { href: "#Github", label: "GitHub" },
        { href: "#Contact", label: "Contact" },
    ];

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
            const sections = navItems.map(item => {
                const section = document.querySelector(item.href);
                if (section) {
                    return {
                        id: item.href.replace("#", ""),
                        offset: section.offsetTop - 350,
                        height: section.offsetHeight
                    };
                }
                return null;
            }).filter(Boolean);

            const currentPosition = window.scrollY;
            const active = sections.find(section => 
                currentPosition >= section.offset && 
                currentPosition < section.offset + section.height
            );

            if (active) {
                setActiveSection(active.id);
            }
        };

        window.addEventListener("scroll", handleScroll);
        handleScroll();
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    }, [isOpen]);

    const scrollToSection = (e, href) => {
        e.preventDefault();
        const section = document.querySelector(href);
        if (section) {
            const top = section.offsetTop - 80;
            window.scrollTo({
                top: top,
                behavior: "smooth"
            });
        }
        setIsOpen(false);
    };

    return (
        <nav
            className={`fixed w-full top-0 z-50 transition-all duration-500 ${
                isOpen
                    ? "bg-[#030014]"
                    : scrolled
                    ? "bg-[#030014]/80 backdrop-blur-xl border-b border-white/5"
                    : "bg-transparent"
            }`}
        >
            <div className="mx-auto px-[5%] sm:px-[5%] lg:px-[10%]">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <div className="flex-shrink-0">
                        <a
                            href="#Home"
                            onClick={(e) => scrollToSection(e, "#Home")}
                            className="flex items-center gap-2 group"
                        >
                            <span className="w-8 h-8 rounded-lg bg-gradient-to-tr from-cyan-500 via-indigo-600 to-purple-600 flex items-center justify-center text-white font-black text-sm shadow-[0_0_15px_rgba(34,211,238,0.4)] group-hover:scale-105 transition-transform">
                                SS
                            </span>
                            <span className="text-lg font-bold bg-gradient-to-r from-cyan-400 via-indigo-200 to-purple-300 bg-clip-text text-transparent">
                                {personal.name}
                            </span>
                        </a>
                    </div>
        
                    {/* Desktop Navigation */}
                    <div className="hidden lg:flex items-center space-x-6">
                        {navItems.map((item) => (
                            <a
                                key={item.label}
                                href={item.href}
                                onClick={(e) => scrollToSection(e, item.href)}
                                className="group relative px-1 py-2 text-xs xl:text-sm font-medium"
                            >
                                <span
                                    className={`relative z-10 transition-colors duration-300 ${
                                        activeSection === item.href.substring(1)
                                            ? "bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent font-semibold"
                                            : "text-gray-300 group-hover:text-white"
                                    }`}
                                >
                                    {item.label}
                                </span>
                                <span
                                    className={`absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-cyan-400 to-purple-500 transform origin-left transition-transform duration-300 ${
                                        activeSection === item.href.substring(1)
                                            ? "scale-x-100"
                                            : "scale-x-0 group-hover:scale-x-100"
                                    }`}
                                />
                            </a>
                        ))}

                        {/* Resume Button */}
                        <button
                            onClick={onOpenResume}
                            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-gradient-to-r from-cyan-500/20 to-purple-600/20 border border-cyan-500/40 text-cyan-300 text-xs font-semibold hover:border-cyan-400 hover:text-white hover:scale-105 active:scale-95 transition-all shadow-[0_0_12px_rgba(34,211,238,0.2)]"
                        >
                            <FileText className="w-3.5 h-3.5" /> Resume
                        </button>
                    </div>
        
                    {/* Mobile Menu Button */}
                    <div className="lg:hidden flex items-center gap-2">
                        <button
                            onClick={onOpenResume}
                            className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-cyan-500/20 border border-cyan-500/40 text-cyan-300 text-xs font-medium"
                        >
                            <FileText className="w-3.5 h-3.5" /> Resume
                        </button>
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className={`p-2 text-gray-300 hover:text-white transition-transform duration-300 ease-in-out transform ${
                                isOpen ? "rotate-90 scale-110" : "rotate-0 scale-100"
                            }`}
                        >
                            {isOpen ? (
                                <X className="w-6 h-6" />
                            ) : (
                                <Menu className="w-6 h-6" />
                            )}
                        </button>
                    </div>
                </div>
            </div>
        
            {/* Mobile Menu */}
            <div
                className={`lg:hidden transition-all duration-300 ease-in-out ${
                    isOpen
                        ? "max-h-screen opacity-100 bg-[#030014]/95 backdrop-blur-2xl border-b border-white/10"
                        : "max-h-0 opacity-0 overflow-hidden"
                }`}
            >
                <div className="px-6 py-6 space-y-3">
                    {navItems.map((item, index) => (
                        <a
                            key={item.label}
                            href={item.href}
                            onClick={(e) => scrollToSection(e, item.href)}
                            className={`block px-3 py-2 text-base font-medium transition-all duration-300 ${
                                activeSection === item.href.substring(1)
                                    ? "bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent font-bold"
                                    : "text-gray-300 hover:text-white"
                            }`}
                        >
                            {item.label}
                        </a>
                    ))}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;