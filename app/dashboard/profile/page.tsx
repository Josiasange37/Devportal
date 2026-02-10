'use client';

import { useAuth } from '@/contexts/AuthContext';
import { User, Mail, Shield, MapPin, Globe, Github, Twitter, Linkedin, ExternalLink, Calendar, Zap, MessageCircle } from 'lucide-react';

export default function ProfilePage() {
    const { user } = useAuth();

    return (
        <div className="animate-in fade-in duration-1000">
            {/* Profile Hero Section */}
            <div className="relative mb-8 lg:mb-10 min-h-[280px] md:h-48 bg-gradient-to-tr from-primary/20 via-primary/5 to-transparent rounded-[2rem] border border-white/5 overflow-hidden">
                <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:20px_20px]"></div>
                <div className="absolute inset-0 p-6 sm:p-10 flex flex-col md:flex-row items-center md:items-end gap-6 sm:gap-10">
                    <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-3xl bg-[#1A1A24] border-4 border-[#0A0A0F] flex items-center justify-center text-white text-4xl sm:text-5xl font-bold shadow-2xl relative z-10 md:-mb-16 mt-4 md:mt-0">
                        {user?.displayName?.charAt(0) || 'U'}
                        <div className="absolute -bottom-1 -right-1 w-6 h-6 sm:w-8 sm:h-8 bg-green-400 rounded-full border-4 border-[#1A1A24] shadow-lg animate-pulse"></div>
                    </div>
                    <div className="flex-1 text-center md:text-left pb-2">
                        <div className="flex flex-col md:flex-row items-center gap-2 sm:gap-3 mb-1">
                            <h1 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">{user?.displayName || 'Elite Operative'}</h1>
                            <span className="text-[9px] lg:text-[10px] font-bold text-primary uppercase tracking-widest px-2 py-0.5 bg-primary/10 rounded-lg border border-primary/20">Pro Member</span>
                        </div>
                        <p className="text-[#94A3B8] text-xs sm:text-sm font-medium">Lead Mission Architect & Infrastructure Designer</p>
                    </div>
                    <div className="flex gap-3 sm:gap-4 pb-2 w-full sm:w-auto">
                        <button className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-4 sm:px-6 py-2.5 sm:py-3 bg-white/5 border border-white/5 rounded-2xl font-bold text-xs sm:text-sm text-white hover:bg-white/10 transition-all">
                            <Zap size={16} className="text-primary" />
                            Operations
                        </button>
                        <button className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-4 sm:px-6 py-2.5 sm:py-3 bg-primary text-white rounded-2xl font-bold text-xs sm:text-sm shadow-xl shadow-primary/20 hover:shadow-primary/40 transition-all">
                            <MessageCircle size={16} />
                            Signal
                        </button>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 pt-16">
                {/* Left Column: Stats & Info */}
                <div className="space-y-10">
                    <div className="bg-[#1A1A24] border border-white/5 rounded-2xl p-8 space-y-6">
                        <h3 className="text-sm font-bold text-white uppercase tracking-widest opacity-60">Intelligence Dossier</h3>
                        <div className="space-y-4">
                            <div className="flex items-center gap-4 text-[#94A3B8]">
                                <Mail size={18} className="text-primary" />
                                <span className="text-sm font-medium">{user?.email || 'unassigned@devportal.pro'}</span>
                            </div>
                            <div className="flex items-center gap-4 text-[#94A3B8]">
                                <MapPin size={18} className="text-primary" />
                                <span className="text-sm font-medium">Remote Operative (EST)</span>
                            </div>
                            <div className="flex items-center gap-4 text-[#94A3B8]">
                                <Calendar size={18} className="text-primary" />
                                <span className="text-sm font-medium">Joined: Feb 2026</span>
                            </div>
                            <div className="flex items-center gap-4 text-[#94A3B8]">
                                <Globe size={18} className="text-primary" />
                                <span className="text-sm font-medium">devportal.pro/operatives/elite</span>
                            </div>
                        </div>
                    </div>

                    <div className="bg-[#1A1A24] border border-white/5 rounded-2xl p-8 space-y-6">
                        <h3 className="text-sm font-bold text-white uppercase tracking-widest opacity-60">Digital Signature</h3>
                        <div className="grid grid-cols-3 gap-4">
                            {[<Github key="gh" />, <Twitter key="tw" />, <Linkedin key="li" />].map((icon, i) => (
                                <button key={i} className="flex items-center justify-center p-4 bg-white/5 rounded-xl text-[#94A3B8] hover:bg-primary/10 hover:text-primary transition-all border border-white/5">
                                    {icon}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Right Column: Mission Feed */}
                <div className="lg:col-span-2 space-y-10">
                    <div className="bg-[#1A1A24] border border-white/5 rounded-3xl p-10">
                        <div className="flex items-center justify-between mb-10">
                            <div>
                                <h3 className="text-xl font-bold text-white mb-1">Operational History</h3>
                                <p className="text-xs text-[#94A3B8] font-bold opacity-70 uppercase tracking-widest">Recent mission logs and deployments</p>
                            </div>
                            <button className="text-[10px] font-bold text-primary uppercase tracking-widest hover:text-white transition-colors">Download .LOG</button>
                        </div>

                        <div className="space-y-8">
                            {[
                                { title: 'Xyber Infrastructure Refactor', project: 'Orbit Core', time: '2 hours ago', status: 'Deployed' },
                                { title: 'Security Protocol Hardening', project: 'Defense-A', time: '5 hours ago', status: 'Finalized' },
                                { title: 'Database Relational Mapping', project: 'DataNode', time: 'Yesterday', status: 'Deployed' },
                                { title: 'Front-end Aesthetic Migration', project: 'Portal-v2', time: '2 days ago', status: 'Deployed' },
                            ].map((mission, i) => (
                                <div key={i} className="flex items-center justify-between group">
                                    <div className="flex items-center gap-6">
                                        <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                                            <Zap size={20} />
                                        </div>
                                        <div>
                                            <p className="font-bold text-white text-base tracking-tight mb-0.5">{mission.title}</p>
                                            <p className="text-[10px] text-[#64748B] font-bold uppercase tracking-widest">Mission: {mission.project} • {mission.time}</p>
                                        </div>
                                    </div>
                                    <span className="text-[9px] font-bold uppercase tracking-widest px-3 py-1 bg-green-400/10 text-green-400 rounded-lg border border-green-400/20">{mission.status}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
