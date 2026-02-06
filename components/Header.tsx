'use client';

import Link from 'next/link';
import ThemeToggle from './ThemeToggle';

export default function Header() {
    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border transition-all duration-300">
            <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
                <Link href="/" className="flex items-center gap-3 group">
                    <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center text-primary-foreground font-bold text-xl transition-transform group-hover:scale-110 shadow-lg shadow-primary/20">
                        D
                    </div>
                    <span className="text-xl font-bold font-sans text-foreground tracking-tight">
                        Dev Portal
                    </span>
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center gap-1 bg-secondary/50 p-1.5 rounded-full border border-border">
                    {['Features', 'How It Works', 'Benefits', 'Pricing'].map((item) => (
                        <Link
                            key={item}
                            href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
                            className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-background rounded-full transition-all"
                        >
                            {item}
                        </Link>
                    ))}
                </nav>

                <div className="flex items-center gap-4">
                    <ThemeToggle />
                    <div className="hidden md:flex items-center gap-3">
                        <Link href="/login" className="px-4 py-2 text-sm font-bold text-muted-foreground hover:text-primary transition-colors font-sans">
                            Sign In
                        </Link>
                        <Link
                            href="/signup"
                            className="px-5 py-2.5 rounded-full text-sm font-bold text-primary-foreground bg-primary hover:bg-primary/90 transition-all shadow-lg shadow-primary/20 hover:shadow-primary/40 hover:-translate-y-0.5 font-sans"
                        >
                            Get Started
                        </Link>
                    </div>

                    {/* Mobile menu button */}
                    <button className="md:hidden p-2 text-muted-foreground hover:text-primary">
                        <span className="sr-only">Menu</span>
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>
                </div>
            </div>
        </header>
    );
}
