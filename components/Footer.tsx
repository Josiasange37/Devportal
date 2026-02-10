'use client';

import Link from 'next/link';
import Logo from './Logo';
import { AnimateOnScroll } from '@/hooks/useScrollAnimation';

export default function Footer() {
    return (
        <footer className="bg-background border-t border-border transition-colors duration-300">
            {/* Newsletter row */}
            <AnimateOnScroll animation="fade-up">
                <div className="border-b border-border">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10 sm:py-14 flex flex-col md:flex-row items-center justify-between gap-6">
                        <div className="text-center md:text-left">
                            <h4 className="text-lg font-bold text-foreground tracking-tight mb-1">Stay in the loop</h4>
                            <p className="text-muted-foreground text-sm">Product updates, tips, and freelance insights. No spam.</p>
                        </div>
                        <div className="flex w-full md:w-auto max-w-md gap-2">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="flex-1 md:w-64 px-4 py-2.5 rounded-xl bg-secondary border border-border text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary/30 transition-all"
                            />
                            <button className="px-5 py-2.5 bg-primary text-primary-foreground rounded-xl text-sm font-bold hover:bg-primary/90 transition-all shrink-0">
                                Subscribe
                            </button>
                        </div>
                    </div>
                </div>
            </AnimateOnScroll>

            {/* Main footer */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-12 sm:pt-16 pb-8 sm:pb-10">
                <AnimateOnScroll animation="fade-up" delay="100ms">
                    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-x-6 gap-y-10 mb-12">

                        {/* Brand */}
                        <div className="col-span-2 flex flex-col items-center md:items-start text-center md:text-left">
                            <Logo className="mb-5 scale-90" />
                            <p className="text-muted-foreground text-sm max-w-xs mb-6 leading-relaxed">
                                The operating system for the modern freelancer. Manage projects, clients, and payments in one place.
                            </p>
                            <div className="flex gap-3">
                                <a href="#" className="w-9 h-9 rounded-lg bg-secondary border border-border flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300">
                                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>
                                </a>
                                <a href="#" className="w-9 h-9 rounded-lg bg-secondary border border-border flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300">
                                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.05-.015-2.07-3.345.72-4.05-1.605-4.05-1.605-.54-1.38-1.335-1.755-1.335-1.755-1.095-.75.09-.735.09-.735 1.2.09 1.83 1.23 1.83 1.23 1.08 1.86 2.805 1.32 3.495 1.005.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405 1.02 0 2.04.135 3 .405 2.28-1.545 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.285 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" /></svg>
                                </a>
                                <a href="#" className="w-9 h-9 rounded-lg bg-secondary border border-border flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300">
                                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
                                </a>
                            </div>
                        </div>

                        <div className="hidden lg:block" />

                        {[
                            { title: 'Product', items: ['Features', 'Pricing', 'Integrations', 'Changelog'] },
                            { title: 'Company', items: ['About Us', 'Blog', 'Careers', 'Contact'] },
                            { title: 'Legal', items: ['Privacy', 'Terms', 'Cookies', 'Security'] }
                        ].map((col) => (
                            <div key={col.title} className="text-center sm:text-left">
                                <h4 className="font-bold text-foreground mb-4 text-sm">{col.title}</h4>
                                <ul className="space-y-2.5">
                                    {col.items.map((item) => (
                                        <li key={item}>
                                            <Link href="#" className="text-muted-foreground hover:text-primary text-sm transition-colors">{item}</Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </AnimateOnScroll>

                <div className="border-t border-border pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-muted-foreground text-xs">© 2026 DevPortal Pro. All rights reserved.</p>
                    <div className="flex items-center gap-5">
                        <span className="flex items-center gap-1.5 text-muted-foreground text-xs">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                            All systems operational
                        </span>
                        <p className="text-muted-foreground text-xs">
                            By <a href="https://xyber-clan.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Xyber Clan</a>
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}
