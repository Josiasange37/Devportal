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
        <div className="animate-in fade-in duration-1000">
            {/* Page Title Section */}
            <div className="mb-10">
                <div className="flex items-center gap-3 mb-2">
                    <div className="w-2 h-2 bg-primary rounded-full animate-pulse shadow-[0_0_10px_rgba(79,70,229,0.5)]"></div>
                    <span className="text-[10px] font-bold text-primary uppercase tracking-[0.2em]">Operational Status: Mission Control Online</span>
                </div>
                <div className="flex items-center justify-between">
                    <div>
                        <h1 className="text-3xl font-bold text-white tracking-tight mb-2">Intelligence</h1>
                        <p className="text-[#94A3B8] text-sm">Accessing documentation, resources, and tactical support.</p>
                    </div>
                    <button className="flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-2xl font-bold text-sm shadow-xl shadow-primary/20 hover:shadow-primary/40 hover:-translate-y-1 transition-all">
                        <MessageCircle size={18} />
                        Open Comms
                    </button>
                </div>
            </div>

            <div className="space-y-12 pb-24 lg:pb-12">
                {/* Search & Intro */}
                <div className="bg-[#1A1A24] border border-white/5 rounded-3xl p-10 lg:p-16 text-center relative overflow-hidden group">
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary/0 via-primary to-primary/0 opacity-50"></div>
                    <h2 className="text-2xl lg:text-3xl font-bold text-white tracking-tight mb-8">Intelligence Retrieval System</h2>
                    <div className="max-w-2xl mx-auto relative">
                        <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-[#64748B] group-focus-within:text-primary transition-colors" />
                        <input
                            type="text"
                            placeholder="Interrogate documentation or community archives..."
                            className="w-full pl-16 pr-8 py-5 bg-white/5 border border-white/5 rounded-2xl outline-none focus:border-primary/50 transition-all text-lg font-medium text-white placeholder:text-[#64748B]"
                        />
                    </div>
                </div>

                {/* Support Categories */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {[
                        { title: 'Archives', desc: 'Detailed tactical guides on every system.', icon: <Book className="text-blue-400" />, count: '45 Datasheets' },
                        { title: 'Nexus Community', desc: 'Connect with fellow adventurers.', icon: <Zap className="text-orange-400" />, count: '12k Members' },
                        { title: 'System Vitals', desc: 'Live monitoring of portal core.', icon: <Cpu className="text-green-400" />, count: 'All Systems Nominal' },
                    ].map((card, i) => (
                        <div key={i} className="bg-[#1A1A24] border border-white/5 rounded-2xl p-8 group hover:border-primary/30 transition-all duration-500 cursor-pointer">
                            <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center mb-6 group-hover:scale-105 transition-transform duration-500">
                                {card.icon}
                            </div>
                            <h3 className="text-xl font-bold text-white mb-2">{card.title}</h3>
                            <p className="text-[10px] text-[#64748B] font-bold uppercase tracking-widest mb-8 leading-relaxed">{card.desc}</p>
                            <div className="flex items-center justify-between pt-6 border-t border-white/5 text-[10px] font-bold uppercase tracking-widest text-primary">
                                <span>{card.count}</span>
                                <ExternalLink size={14} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                            </div>
                        </div>
                    ))}
                </div>

                {/* Intelligence Feed (FAQ) */}
                <div className="bg-[#1A1A24] border border-white/5 rounded-2xl overflow-hidden">
                    <div className="p-8 border-b border-white/5 bg-white/[0.02]">
                        <h3 className="text-xl font-bold text-white tracking-tight">Recent Intelligence</h3>
                    </div>
                    <div className="divide-y divide-white/5">
                        {[
                            'Tactical maneuvers for invoice synchronization',
                            'Crew role re-assignment protocols',
                            'Infrastructure mission capacity limits',
                            'Portal aesthetic customization override'
                        ].map((q, i) => (
                            <div key={i} className="p-6 flex items-center justify-between hover:bg-white/[0.02] transition-colors cursor-pointer group">
                                <span className="font-medium text-white group-hover:text-primary transition-colors text-sm lg:text-base">{q}</span>
                                <div className="p-2 bg-white/5 rounded-lg text-[#64748B] group-hover:text-white transition-colors">
                                    <ChevronRight size={18} />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Transmission Uplink */}
                <div className="flex flex-col md:flex-row items-center justify-between gap-8 p-10 bg-primary/5 border border-primary/20 rounded-3xl relative overflow-hidden group">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-[80px] -mr-32 -mt-32"></div>
                    <div className="flex items-center gap-6 relative z-10">
                        <div className="w-16 h-16 bg-primary rounded-2xl text-white flex items-center justify-center shadow-2xl shadow-primary/40 animate-pulse">
                            <LifeBuoy size={32} />
                        </div>
                        <div>
                            <h4 className="text-xl font-bold text-white tracking-tight mb-1">Signal Lost?</h4>
                            <p className="text-[10px] text-primary font-bold uppercase tracking-[0.2em]">Deployment crew on standby 24/7</p>
                        </div>
                    </div>
                    <div className="relative z-10 w-full md:w-auto">
                        <button className="w-full md:w-auto flex items-center justify-center gap-3 px-10 py-4 bg-primary text-white rounded-2xl font-bold text-[10px] uppercase tracking-[0.2em] shadow-xl shadow-primary/20 hover:shadow-primary/40 hover:-translate-y-1 transition-all">
                            <Mail size={16} /> Establish Uplink
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
