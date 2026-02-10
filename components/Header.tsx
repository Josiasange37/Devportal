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
        { name: 'Features', href: '#features' },
        { name: 'How It Works', href: '#how-it-works' },
        { name: 'Benefits', href: '#benefits' },
        { name: 'Pricing', href: '#pricing' },
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

            {/* Mobile Navigation Overlay */}
            <div
                className={`fixed inset-0 z-[1001] bg-background transition-all duration-300 lg:hidden ${isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
            >
                <div className="flex flex-col h-full pt-24 px-6 pb-10 overflow-y-auto">
                    <nav className="flex flex-col gap-1">
                        {navItems.map((item, index) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                onClick={() => setIsMenuOpen(false)}
                                className={`text-2xl font-bold py-5 border-b border-border/30 hover:text-primary transition-all duration-300
                                    ${isMenuOpen ? 'translate-x-0 opacity-100' : '-translate-x-8 opacity-0'}`}
                                style={{ transitionDelay: `${index * 60 + 100}ms` }}
                            >
                                {item.name}
                            </Link>
                        ))}
                    </nav>

                    <div className={`mt-auto pt-10 flex flex-col gap-3 transition-all duration-500
                        ${isMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}
                        style={{ transitionDelay: '350ms' }}
                    >
                        <Link
                            href="/login?mode=login"
                            onClick={() => setIsMenuOpen(false)}
                            className="w-full py-4 rounded-2xl text-center font-bold text-lg bg-secondary text-foreground hover:bg-secondary/80 transition-all"
                        >
                            Sign In
                        </Link>
                        <Link
                            href="/login?mode=register"
                            onClick={() => setIsMenuOpen(false)}
                            className="w-full py-4 rounded-2xl text-center font-bold text-lg bg-primary text-primary-foreground shadow-xl shadow-primary/20 hover:scale-[1.02] active:scale-95 transition-all"
                        >
                            Get Started Free
                        </Link>
                    </div>

                    <div className="mt-8 pt-8 border-t border-border/30 text-center">
                        <p className="text-muted-foreground text-xs">© 2026 DevPortal Pro</p>
                        <p className="text-muted-foreground text-[10px] mt-1">
                            By <a href="https://xyber-clan.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-primary">Xyber Clan</a>
                        </p>
                    </div>
                </div>
            </div>
        </header>
    );
}
