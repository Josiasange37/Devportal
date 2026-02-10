'use client';

import {
    Plus,
    Search,
    Filter,
    MoreVertical,
    Mail,
    Phone,
    Github,
    Twitter,
    CheckCircle2,
    Clock,
    Calendar,
    UserCircle,
    MapPin,
    MessageCircle,
    Bell
} from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';
import ThemeToggle from '@/components/ThemeToggle';
import Image from 'next/image';

const team = [
    { id: 1, name: 'Alex Rivera', role: 'Full Stack Engineer', status: 'Online', loc: 'San Francisco, CA', availability: 'Available', projects: 4, email: 'alex@devportal.pro', avatar: 'AR' },
    { id: 2, name: 'Sarah Chen', role: 'UI/UX Designer', status: 'In Meeting', loc: 'Vancouver, BC', availability: 'Busy', projects: 2, email: 'sarah@devportal.pro', avatar: 'SC' },
    { id: 3, name: 'Marcus Thorne', role: 'Cloud Architect', status: 'Offline', loc: 'London, UK', availability: 'On Leave', projects: 0, email: 'marcus@devportal.pro', avatar: 'MT' },
    { id: 4, name: 'Elena Petrova', role: 'Product Manager', status: 'Online', loc: 'Berlin, DE', availability: 'Available', projects: 6, email: 'elena@devportal.pro', avatar: 'EP' },
    { id: 5, name: 'James Wilson', role: 'QA Lead', status: 'Online', loc: 'Austin, TX', availability: 'Available', projects: 3, email: 'james@devportal.pro', avatar: 'JW' },
];

export default function TeamPage() {
    return (
        <div className="animate-in fade-in duration-1000">
            {/* Page Title Section */}
            <div className="mb-10">
                <div className="flex items-center gap-3 mb-2">
                    <div className="w-2 h-2 bg-primary rounded-full animate-pulse shadow-[0_0_10px_rgba(79,70,229,0.5)]"></div>
                    <span className="text-[10px] font-bold text-primary uppercase tracking-[0.2em]">Operational Status: All Units Nominal</span>
                </div>
                <div className="flex items-center justify-between">
                    <div>
                        <h1 className="text-3xl font-bold text-white tracking-tight mb-2">Crew</h1>
                        <p className="text-[#94A3B8] text-sm">Managing 5 elite specialists across your infrastructure.</p>
                    </div>
                    <button className="flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-2xl font-bold text-sm shadow-xl shadow-primary/20 hover:shadow-primary/40 hover:-translate-y-1 transition-all">
                        <Plus size={18} />
                        Invite Specialist
                    </button>
                </div>
            </div>

            {/* Content Control Bar */}
            <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-8 bg-[#1A1A24] border border-white/5 p-4 rounded-2xl">
                <div className="flex items-center gap-3 w-full md:w-auto">
                    <div className="flex-1 md:w-80 relative group">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-[#64748B] size-4 group-focus-within:text-primary transition-colors" />
                        <input
                            type="text"
                            placeholder="Find a specialist..."
                            className="w-full pl-11 pr-4 py-2.5 bg-white/5 border border-white/5 rounded-xl outline-none focus:border-primary/50 transition-all text-sm font-medium text-white placeholder:text-[#64748B]"
                        />
                    </div>
                    <button className="p-2.5 bg-white/5 border border-white/5 rounded-xl hover:bg-white/10 transition-all group">
                        <Filter size={18} className="text-[#94A3B8] group-hover:text-white" />
                    </button>
                </div>
            </div>

            {/* Team Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pb-24 lg:pb-12">
                {team.map((member, i) => (
                    <div
                        key={member.id}
                        className="bg-[#1A1A24] border border-white/5 rounded-2xl p-6 group hover:border-primary/30 transition-all duration-500 animate-in fade-in slide-in-from-bottom-8 relative overflow-hidden"
                        style={{ animationDelay: `${i * 0.1}s` }}
                    >
                        <div className="flex items-start justify-between mb-8">
                            <div className="relative">
                                <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/5 flex items-center justify-center text-2xl font-bold text-primary shadow-inner group-hover:scale-105 transition-transform duration-500">
                                    {member.avatar}
                                </div>
                                <div className={`absolute -bottom-1 -right-1 w-4 h-4 rounded-full border-4 border-[#1A1A24] ${member.status === 'Online' ? 'bg-green-500' :
                                    member.status === 'In Meeting' ? 'bg-orange-500' :
                                        'bg-[#64748B]'
                                    }`}></div>
                            </div>
                            <div className="flex items-center gap-2">
                                <span className={`px-2.5 py-1 rounded-full text-[9px] font-bold border ${member.availability === 'Available' ? 'bg-green-500/10 text-green-400 border-green-500/20' :
                                    member.availability === 'Busy' ? 'bg-orange-500/10 text-orange-400 border-orange-500/20' :
                                        'bg-white/5 text-[#94A3B8] border-white/10'
                                    }`}>
                                    {member.availability}
                                </span>
                                <button className="p-1.5 text-[#64748B] hover:text-white transition-colors">
                                    <MoreVertical size={18} />
                                </button>
                            </div>
                        </div>

                        <div className="mb-8">
                            <h3 className="text-xl font-bold text-white mb-1 group-hover:text-primary transition-colors">{member.name}</h3>
                            <p className="text-xs text-[#94A3B8] font-bold opacity-70 flex items-center gap-2">
                                {member.role}
                            </p>
                        </div>

                        <div className="space-y-6">
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-2 text-[#94A3B8]">
                                    <MapPin size={12} />
                                    <span className="text-[10px] font-bold uppercase tracking-widest">{member.loc}</span>
                                </div>
                                <div className="flex items-center gap-2 text-white">
                                    <span className="text-[10px] font-bold uppercase tracking-widest bg-white/5 px-2 py-1 rounded-lg border border-white/5">
                                        {member.projects} Missions
                                    </span>
                                </div>
                            </div>

                            <div className="flex items-center gap-2 pt-6 border-t border-white/5">
                                <button className="flex-1 py-2.5 bg-white/5 hover:bg-white/10 text-[#94A3B8] hover:text-white rounded-xl text-[10px] font-bold uppercase tracking-widest transition-all border border-white/5 flex items-center justify-center gap-2 group/btn">
                                    <Mail size={14} className="group-hover/btn:scale-110 transition-transform" />
                                    Email
                                </button>
                                <button className="p-2.5 bg-white/5 hover:bg-primary/20 text-[#94A3B8] hover:text-primary rounded-xl transition-all border border-white/5">
                                    <MessageCircle size={14} />
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
