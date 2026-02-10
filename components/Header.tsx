'use client';

import Link from 'next/link';
import Logo from './Logo';
import ThemeToggle from './ThemeToggle';

import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    // Detect scroll for header style change
    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close menu on resize to desktop
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 1024) setIsMenuOpen(false);
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // Prevent scroll when menu is open
    useEffect(() => {
        document.body.style.overflow = isMenuOpen ? 'hidden' : 'unset';
    }, [isMenuOpen]);

    const navItems = [
        {
            name: 'Features',
            href: '#features',
            desc: 'What we offer',
            icon: (
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zm10 0a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zm10 0a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" /></svg>
            )
        },
        {
            name: 'How It Works',
            href: '#how-it-works',
            desc: 'Our process',
            icon: (
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" /></svg>
            )
        },
        {
            name: 'Benefits',
            href: '#benefits',
            desc: 'Why choose us',
            icon: (
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
            )
        },
        {
            name: 'Pricing',
            href: '#pricing',
            desc: 'Plans & billing',
            icon: (
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            )
        },
    ];

    return (
        <header className={`fixed top-0 left-0 right-0 z-[1000] transition-all duration-500
            ${isMenuOpen
                ? 'bg-background'
                : scrolled
                    ? 'bg-background/70 backdrop-blur-2xl border-b border-border/50 shadow-sm shadow-black/[0.03]'
                    : 'bg-transparent'
            }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 sm:h-20 flex items-center justify-between relative z-[1002]">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-2 group shrink-0">
                    <Logo className="scale-75 md:scale-90 lg:scale-95 origin-left" />
                </Link>

                {/* Desktop Navigation — floating pill */}
                <nav className="hidden lg:flex items-center gap-0.5 bg-card/60 backdrop-blur-xl p-1 rounded-full border border-border/50 shadow-sm">
                    {navItems.map((item) => (
                        <Link
                            key={item.name}
                            href={item.href}
                            className="px-4 py-2 text-[13px] font-medium text-muted-foreground hover:text-foreground hover:bg-background/80 rounded-full transition-all duration-200"
                        >
                            {item.name}
                        </Link>
                    ))}
                </nav>

                {/* Right side actions */}
                <div className="flex items-center gap-2 sm:gap-3">
                    <ThemeToggle />
                    <div className="hidden lg:flex items-center gap-2">
                        <Link href="/login?mode=login" className="px-4 py-2 text-[13px] font-semibold text-muted-foreground hover:text-foreground transition-colors">
                            Sign In
                        </Link>
                        <Link
                            href="/login?mode=register"
                            className="px-5 py-2.5 rounded-full text-[13px] font-bold text-primary-foreground bg-primary hover:bg-primary/90 transition-all duration-300 shadow-md shadow-primary/20 hover:shadow-lg hover:shadow-primary/30 hover:-translate-y-0.5 active:translate-y-0"
                        >
                            Get Started
                        </Link>
                    </div>

                    {/* Mobile menu button */}
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="lg:hidden w-10 h-10 rounded-full bg-secondary/80 border border-border flex items-center justify-center text-muted-foreground hover:text-foreground transition-all"
                        aria-expanded={isMenuOpen}
                    >
                        <span className="sr-only">Toggle Menu</span>
                        <div className="relative w-5 h-5">
                            <Menu className={`w-5 h-5 absolute inset-0 transition-all duration-300 ${isMenuOpen ? 'rotate-90 scale-0 opacity-0' : 'rotate-0 scale-100 opacity-100'}`} />
                            <X className={`w-5 h-5 absolute inset-0 transition-all duration-300 ${isMenuOpen ? 'rotate-0 scale-100 opacity-100' : '-rotate-90 scale-0 opacity-0'}`} />
                        </div>
                    </button>
                </div>
            </div>

            <div
                className={`fixed inset-0 z-[1001] bg-background transition-all duration-400 lg:hidden overflow-hidden ${isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
            >
                {/* Decorative gradient blob */}
                <div className={`absolute top-20 right-[-40px] w-64 h-64 bg-primary/8 rounded-full blur-[80px] transition-all duration-700 ${isMenuOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-75'}`} />
                <div className={`absolute bottom-32 left-[-30px] w-48 h-48 bg-blue-500/6 rounded-full blur-[60px] transition-all duration-700 ${isMenuOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-75'}`} style={{ transitionDelay: '200ms' }} />

                <div className="flex flex-col h-full pt-22 px-5 pb-8 overflow-y-auto relative z-10">
                    {/* Navigation section label */}
                    <div className={`mb-3 mt-4 transition-all duration-400 ${isMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-4 opacity-0'}`}
                        style={{ transitionDelay: '80ms' }}>
                        <span className="text-[10px] font-bold text-muted-foreground/60 uppercase tracking-[0.2em] px-1">Navigate</span>
                    </div>

                    {/* Nav items as cards */}
                    <nav className="flex flex-col gap-2">
                        {navItems.map((item, index) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                onClick={() => setIsMenuOpen(false)}
                                className={`flex items-center gap-4 p-4 rounded-2xl bg-card/60 border border-border/40 hover:border-primary/30 hover:bg-card active:scale-[0.98] transition-all duration-300
                                    ${isMenuOpen ? 'translate-x-0 opacity-100' : '-translate-x-6 opacity-0'}`}
                                style={{ transitionDelay: `${index * 70 + 120}ms` }}
                            >
                                <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
                                    {item.icon}
                                </div>
                                <div className="flex-1 min-w-0">
                                    <div className="text-[15px] font-bold text-foreground tracking-tight">{item.name}</div>
                                    <div className="text-[12px] text-muted-foreground mt-0.5">{item.desc}</div>
                                </div>
                                <svg className="w-4 h-4 text-muted-foreground/40 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                            </Link>
                        ))}
                    </nav>

                    {/* CTA section */}
                    <div className={`mt-auto transition-all duration-500
                        ${isMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'}`}
                        style={{ transitionDelay: '420ms' }}
                    >
                        {/* Promo card */}
                        <div className="mb-5 p-5 rounded-2xl bg-gradient-to-br from-primary/10 via-primary/5 to-transparent border border-primary/15">
                            <div className="flex items-center gap-2 mb-2">
                                <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                                <span className="text-[10px] font-bold text-primary uppercase tracking-widest">Limited Offer</span>
                            </div>
                            <p className="text-sm font-semibold text-foreground mb-1">Start your 14-day free trial</p>
                            <p className="text-[12px] text-muted-foreground">No credit card required. Cancel anytime.</p>
                        </div>

                        <div className="flex flex-col gap-2.5">
                            <Link
                                href="/login?mode=register"
                                onClick={() => setIsMenuOpen(false)}
                                className="w-full py-4 rounded-2xl text-center font-bold text-[15px] bg-primary text-primary-foreground shadow-xl shadow-primary/20 hover:shadow-2xl hover:shadow-primary/30 active:scale-[0.98] transition-all"
                            >
                                Get Started Free
                            </Link>
                            <Link
                                href="/login?mode=login"
                                onClick={() => setIsMenuOpen(false)}
                                className="w-full py-3.5 rounded-2xl text-center font-semibold text-[15px] text-muted-foreground hover:text-foreground border border-border/50 hover:border-border hover:bg-card/60 active:scale-[0.98] transition-all"
                            >
                                Sign In
                            </Link>
                        </div>
                    </div>

                    {/* Bottom footer */}
                    <div className={`mt-6 pt-5 border-t border-border/20 flex items-center justify-between transition-all duration-500
                        ${isMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}
                        style={{ transitionDelay: '500ms' }}
                    >
                        <p className="text-muted-foreground/50 text-[11px]">© 2026 DevPortal Pro</p>
                        <div className="flex items-center gap-3">
                            <a href="#" className="text-muted-foreground/40 hover:text-foreground transition-colors">
                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>
                            </a>
                            <a href="#" className="text-muted-foreground/40 hover:text-foreground transition-colors">
                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.05-.015-2.07-3.345.72-4.05-1.605-4.05-1.605-.54-1.38-1.335-1.755-1.335-1.755-1.095-.75.09-.735.09-.735 1.2.09 1.83 1.23 1.83 1.23 1.08 1.86 2.805 1.32 3.495 1.005.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405 1.02 0 2.04.135 3 .405 2.28-1.545 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.285 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" /></svg>
                            </a>
                            <a href="#" className="text-muted-foreground/40 hover:text-foreground transition-colors">
                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}
