'use client';

import {
    HelpCircle,
    MessageCircle,
    Book,
    ExternalLink,
    ChevronRight,
    Search,
    LifeBuoy,
    Github,
    Twitter,
    Mail,
    FileQuestion,
    Cpu,
    Zap,
    Bell
} from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';
import ThemeToggle from '@/components/ThemeToggle';

export default function SupportPage() {
    return (
        <div className="animate-in fade-in duration-700">
            {/* Page Header */}
            <header className="glass-premium squircle-md h-16 lg:h-20 px-4 lg:px-8 flex items-center justify-between mb-6 lg:mb-8 animate-in fade-in slide-in-from-top-6 duration-1000 ease-out">
                <div className="flex flex-col">
                    <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-primary rounded-full"></div>
                        <h1 className="text-lg lg:text-xl font-black tracking-tight">Mission Control</h1>
                    </div>
                    <p className="hidden xs:block text-[8px] lg:text-[10px] text-muted-foreground uppercase tracking-[0.2em] font-bold opacity-60">
                        Help, Documentation & Community
                    </p>
                </div>

                <div className="flex items-center gap-2 lg:gap-3">
                    <ThemeToggle />
                    <button className="p-2.5 lg:p-3 glass-premium hover:bg-foreground/5 dark:hover:bg-white/10 rounded-2xl transition-all relative group shadow-none">
                        <Bell size={18} className="text-muted-foreground group-hover:text-primary lg:size-5" />
                        <span className="absolute top-2.5 right-2.5 lg:top-3 lg:right-3 w-2 h-2 bg-primary rounded-full ring-4 ring-background"></span>
                    </button>
                    <div className="hidden lg:block w-[1px] h-8 bg-border dark:bg-white/10 mx-2"></div>
                    <button className="flex items-center gap-2 px-4 lg:px-6 py-2.5 lg:py-3 bg-primary text-primary-foreground rounded-xl lg:rounded-2xl font-black text-xs lg:text-sm shadow-xl shadow-primary/20 hover:shadow-primary/40 hover:-translate-y-1 transition-all">
                        <MessageCircle size={18} />
                        <span className="hidden lg:inline">Live Chat</span>
                    </button>
                </div>
            </header>

            <div className="space-y-8 pb-24 lg:pb-12">
                {/* Search & Intro */}
                <div className="glass-premium squircle-md p-8 lg:p-12 text-center relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary/0 via-primary to-primary/0"></div>
                    <h2 className="text-2xl lg:text-3xl font-black tracking-tight mb-4">How can we assist your mission?</h2>
                    <div className="max-w-2xl mx-auto relative group">
                        <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-muted-foreground group-focus-within:text-primary transition-colors" />
                        <input
                            type="text"
                            placeholder="Find answers in documentation, FAQs, or community..."
                            className="w-full pl-14 pr-6 py-5 bg-foreground/5 dark:bg-white/5 border border-border dark:border-white/10 rounded-[2rem] outline-none focus:ring-4 focus:ring-primary/10 transition-all text-lg font-bold"
                        />
                    </div>
                </div>

                {/* Support Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {[
                        { title: 'Documentation', desc: 'Detailed guides on every feature.', icon: <Book className="text-blue-500" />, count: '45 Articles' },
                        { title: 'Community Guild', desc: 'Connect with fellow adventurers.', icon: <Zap className="text-orange-500" />, count: '12k Members' },
                        { title: 'Status Center', desc: 'Live monitoring of portal core.', icon: <Cpu className="text-green-500" />, count: 'All Systems Go' },
                    ].map((card, i) => (
                        <div key={i} className="glass-premium squircle-md p-8 group hover:scale-[1.03] transition-all duration-500 border-border/50 cursor-pointer">
                            <div className="w-14 h-14 rounded-2xl bg-foreground/5 dark:bg-white/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                {card.icon}
                            </div>
                            <h3 className="text-xl font-black mb-1">{card.title}</h3>
                            <p className="text-[10px] text-muted-foreground font-bold uppercase tracking-widest opacity-60 mb-6">{card.desc}</p>
                            <div className="flex items-center justify-between text-[10px] font-black uppercase tracking-widest text-primary">
                                <span>{card.count}</span>
                                <ExternalLink size={14} />
                            </div>
                        </div>
                    ))}
                </div>

                {/* FAQ Style List */}
                <div className="glass-premium squircle-md overflow-hidden">
                    <div className="p-8 border-b border-border dark:border-white/5">
                        <h3 className="text-xl font-black tracking-tight">Frequent Transmissions</h3>
                    </div>
                    <div className="divide-y divide-border dark:divide-white/5">
                        {[
                            'How do I sync my invoices to local storage?',
                            'Can I change my crew role after onboarding?',
                            'What is the maximum project capacity in Orbit?',
                            'How do I customize my portal theme colors?'
                        ].map((q, i) => (
                            <div key={i} className="p-6 flex items-center justify-between hover:bg-foreground/5 transition-colors cursor-pointer group">
                                <span className="font-bold text-sm lg:text-base group-hover:text-primary transition-colors">{q}</span>
                                <ChevronRight size={18} className="text-muted-foreground" />
                            </div>
                        ))}
                    </div>
                </div>

                {/* Contact Footer */}
                <div className="flex flex-col md:flex-row items-center justify-between gap-6 p-8 glass-premium squircle-md bg-primary/5 border-primary/20">
                    <div className="flex items-center gap-4 text-center md:text-left">
                        <div className="p-4 bg-primary rounded-2xl text-white shadow-xl shadow-primary/20">
                            <LifeBuoy size={24} />
                        </div>
                        <div>
                            <h4 className="text-lg font-black tracking-tight">Still stranded?</h4>
                            <p className="text-xs text-muted-foreground font-bold opacity-70 uppercase tracking-widest">Our crew is on standby 24/7</p>
                        </div>
                    </div>
                    <div className="flex gap-4">
                        <button className="flex items-center gap-2 px-6 py-3 bg-foreground p-1 text-background rounded-2xl font-black text-xs uppercase tracking-widest hover:scale-105 transition-all">
                            <Mail size={16} /> Contact Support
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
