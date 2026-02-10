'use client';

import Link from 'next/link';
import Logo from './Logo';
import ThemeToggle from './ThemeToggle';

import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // Close menu on resize to desktop
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 1024) { // Changed to LG breakpoint
                setIsMenuOpen(false);
            }
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // Prevent scroll when menu is open
    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    }, [isMenuOpen]);

    const navItems = [
        { name: 'Features', href: '#features' },
        { name: 'How It Works', href: '#how-it-works' },
        { name: 'Benefits', href: '#benefits' },
        { name: 'Pricing', href: '#pricing' },
    ];

    return (
        <header className="fixed top-0 left-0 right-0 z-[100] bg-background/80 backdrop-blur-xl border-b border-border transition-all duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 h-20 flex items-center justify-between">
                <Link href="/" className="flex items-center gap-2 group shrink-0">
                    <Logo className="scale-75 md:scale-90 lg:scale-95 origin-left" />
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden lg:flex items-center gap-1 bg-secondary/50 p-1.5 rounded-full border border-border">
                    {navItems.map((item) => (
                        <Link
                            key={item.name}
                            href={item.href}
                            className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-background rounded-full transition-all"
                        >
                            {item.name}
                        </Link>
                    ))}
                </nav>

                <div className="flex items-center gap-2 sm:gap-4">
                    <ThemeToggle />
                    <div className="hidden lg:flex items-center gap-3">
                        <Link href="/login?mode=login" className="px-4 py-2 text-sm font-bold text-muted-foreground hover:text-primary transition-colors font-sans">
                            Sign In
                        </Link>
                        <Link
                            href="/login?mode=register"
                            className="px-5 py-2.5 rounded-full text-sm font-bold text-primary-foreground bg-primary hover:bg-primary/90 transition-all shadow-lg shadow-primary/20 hover:shadow-primary/40 hover:-translate-y-0.5 font-sans"
                        >
                            Get Started
                        </Link>
                    </div>

                    {/* Mobile menu button */}
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="lg:hidden p-2 text-muted-foreground hover:text-primary transition-colors z-[110]"
                        aria-expanded={isMenuOpen}
                    >
                        <span className="sr-only">Toggle Menu</span>
                        {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>
            </div>

            {/* Mobile Navigation Overlay */}
            <div
                className={`fixed inset-0 z-[105] bg-background backdrop-blur-2xl transition-all duration-500 lg:hidden ${isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
                    }`}
            >
                <div className="flex flex-col h-full pt-28 px-6 pb-10">
                    <nav className="flex flex-col gap-2">
                        {navItems.map((item, index) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                onClick={() => setIsMenuOpen(false)}
                                className={`text-2xl font-bold py-4 border-b border-border/50 hover:text-primary transition-all delay-[${index * 50}ms] ${isMenuOpen ? 'translate-x-0 opacity-100' : '-translate-x-8 opacity-0'
                                    }`}
                            >
                                {item.name}
                            </Link>
                        ))}
                    </nav>

                    <div className={`mt-auto flex flex-col gap-4 transition-all delay-300 ${isMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                        }`}>
                        <Link
                            href="/login?mode=login"
                            onClick={() => setIsMenuOpen(false)}
                            className="w-full py-4 rounded-2xl text-center font-bold text-xl bg-secondary text-foreground hover:bg-secondary/80 transition-all"
                        >
                            Sign In
                        </Link>
                        <Link
                            href="/login?mode=register"
                            onClick={() => setIsMenuOpen(false)}
                            className="w-full py-4 rounded-2xl text-center font-bold text-xl bg-primary text-primary-foreground shadow-xl shadow-primary/20 hover:scale-[1.02] active:scale-95 transition-all"
                        >
                            Get Started Free
                        </Link>
                    </div>
                </div>
            </div>
        </header>
    );
}
