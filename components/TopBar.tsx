'use client';

import { useState, useEffect } from 'react';
import { Search, Bell, Plus, Command, HelpCircle } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';
import Image from 'next/image';
import Link from 'next/link';

export default function TopBar() {
    const { user } = useAuth();
    const [scrolled, setScrolled] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };

        const handleKeyDown = (e: KeyboardEvent) => {
            if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
                e.preventDefault();
                const searchInput = document.getElementById('main-search');
                searchInput?.focus();
            }
        };

        window.addEventListener('scroll', handleScroll);
        window.addEventListener('keydown', handleKeyDown);
        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, []);

    return (
        <header className={`sticky top-0 z-40 w-full transition-all duration-300 ${scrolled ? 'bg-[#0A0A0F]/80 backdrop-blur-xl border-b border-white/5 py-2 lg:py-3' : 'bg-transparent py-4 lg:py-5'}`}>
            <div className="px-4 sm:px-8 flex items-center justify-between gap-3 sm:gap-8">
                {/* Search Bar */}
                <div className="flex-1 max-w-full sm:max-w-xl">
                    <div className="relative group">
                        <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#94A3B8] group-focus-within:text-primary transition-colors">
                            <Search size={16} className="sm:size-[18px]" />
                        </div>
                        <input
                            id="main-search"
                            type="text"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            placeholder="Interrogate..."
                            className="block w-full pl-10 sm:pl-12 pr-4 sm:pr-12 py-2.5 sm:py-3 bg-[#1A1A24]/40 border border-white/5 rounded-2xl text-xs sm:text-sm text-white placeholder-[#64748B] focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary/50 transition-all group-hover:bg-[#1A1A24]/80 font-medium"
                        />
                        <div className="hidden sm:flex absolute inset-y-0 right-4 items-center pointer-events-none">
                            <kbd className="flex items-center gap-1 px-2 py-1 rounded-lg border border-white/10 bg-white/5 text-[10px] font-bold text-[#64748B] tracking-tighter shadow-inner">
                                <Command size={10} />
                                <span>K</span>
                            </kbd>
                        </div>
                    </div>
                </div>

                {/* Right Side Actions */}
                <div className="flex items-center gap-2 sm:gap-6">
                    {/* Support Button */}
                    <Link href="/dashboard/support" className="hidden sm:flex items-center gap-2 group transition-all">
                        <div className="p-2 bg-white/5 rounded-xl group-hover:bg-primary/10 group-hover:text-primary transition-colors">
                            <HelpCircle size={18} />
                        </div>
                        <span className="text-xs font-bold text-[#94A3B8] uppercase tracking-widest group-hover:text-white transition-colors">Intelligence</span>
                    </Link>

                    <div className="h-4 w-[1px] bg-white/10 hidden sm:block"></div>

                    {/* Notifications */}
                    <button className="relative p-2 sm:p-2.5 bg-[#1A1A24]/50 border border-white/5 rounded-xl text-[#94A3B8] hover:bg-white/10 hover:text-white transition-all group">
                        <Bell size={18} className="sm:size-5 group-hover:rotate-12 transition-transform" />
                        <span className="absolute top-2 right-2 w-1.5 h-1.5 sm:w-2 sm:h-2 bg-primary rounded-full ring-2 ring-[#0A0A0F]"></span>
                    </button>

                    {/* Create New Dropdown */}
                    <button className="hidden md:flex items-center gap-2.5 px-6 py-3 bg-primary hover:bg-primary/90 text-white rounded-2xl text-xs font-bold uppercase tracking-widest shadow-xl shadow-primary/20 transition-all active:scale-95 group">
                        <Plus size={18} className="group-hover:rotate-90 transition-transform duration-300" />
                        <span>Mission Control</span>
                    </button>

                    {/* Mobile Create Button */}
                    <button className="md:hidden p-2.5 bg-primary text-white rounded-xl shadow-xl shadow-primary/20 active:scale-90 transition-transform">
                        <Plus size={18} />
                    </button>

                    {/* User Mini Profile (Mobile only) */}
                    <Link href="/dashboard/profile" className="lg:hidden w-10 h-10 rounded-2xl bg-gradient-to-tr from-primary to-blue-400 flex items-center justify-center text-white text-xs font-bold ring-2 ring-white/10 shadow-lg active:scale-95 transition-transform">
                        {user?.displayName?.charAt(0) || 'U'}
                    </Link>
                </div>
            </div>
        </header>
    );
}
