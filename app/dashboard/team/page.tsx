'use client';

import {
    Users,
    Plus,
    Mail,
    MoreVertical,
    Shield,
    CheckCircle2,
    Clock,
    XCircle,
    Search,
    Filter,
    ArrowUpRight,
    Briefcase
} from 'lucide-react';
import DashboardPage from '@/components/DashboardPage';

export default function TeamPage() {
    return (
        <DashboardPage>
            {/* Mission Team Header */}
            <div className="mb-6 lg:mb-10">
                <div className="flex items-center gap-3 mb-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse shadow-[0_0_10px_rgba(79,70,229,0.5)]"></div>
                    <span className="text-[9px] lg:text-[10px] font-bold text-primary uppercase tracking-[0.2em]">Operational Status: Force Multiplication Active</span>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div>
                        <h1 className="text-2xl lg:text-3xl font-bold text-white tracking-tight mb-1 lg:mb-2">Operational Team</h1>
                        <p className="text-[#94A3B8] text-xs lg:text-sm">Manage authorizations and roles for your elite mission operatives.</p>
                    </div>
                    <button className="flex items-center justify-center gap-2 px-6 py-3 bg-primary hover:bg-primary/90 text-white rounded-xl text-xs font-bold uppercase tracking-widest shadow-xl shadow-primary/20 transition-all active:scale-95 group">
                        <Plus size={18} className="group-hover:rotate-90 transition-transform" />
                        <span>Deploy Operative</span>
                    </button>
                </div>
            </div>

            {/* Team Metrics Overview */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 mb-8">
                {[
                    { label: 'Active Personnel', value: '18', icon: <Users size={20} />, color: 'text-primary' },
                    { label: 'Pending Access', value: '3', icon: <Clock size={20} />, color: 'text-orange-500' },
                    { label: 'Admin Cleared', value: '5', icon: <Shield size={20} />, color: 'text-green-500' },
                    { label: 'Resource Load', value: '82%', icon: <Briefcase size={20} />, color: 'text-blue-500' },
                ].map((stat, i) => (
                    <div key={i} className="bg-[#1A1A24] border border-white/5 p-6 rounded-2xl">
                        <div className="flex items-center gap-4 mb-3">
                            <div className={`p-2.5 bg-white/5 rounded-xl ${stat.color}`}>
                                {stat.icon}
                            </div>
                            <p className="text-[10px] font-bold text-[#64748B] uppercase tracking-widest">{stat.label}</p>
                        </div>
                        <p className="text-2xl font-black text-white">{stat.value}</p>
                    </div>
                ))}
            </div>

            {/* Search & Filter Bar */}
            <div className="flex flex-col sm:flex-row gap-4 mb-6">
                <div className="flex-1 relative group">
                    <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-[#64748B] group-focus-within:text-primary transition-colors" />
                    <input
                        type="text"
                        placeholder="Search personnel dossier..."
                        className="w-full bg-[#1A1A24]/60 border border-white/5 rounded-xl pl-12 pr-4 py-3 text-sm text-white outline-none focus:border-primary/50 transition-all"
                    />
                </div>
                <div className="flex gap-4">
                    <button className="flex items-center justify-center gap-2 px-6 py-3 bg-[#1A1A24] border border-white/5 text-[#94A3B8] hover:text-white rounded-xl text-xs font-bold uppercase tracking-widest transition-all">
                        <Filter size={18} />
                        <span>Filter</span>
                    </button>
                </div>
            </div>

            {/* Team Personnel Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-24 lg:mb-12">
                {[
                    { name: 'Sarah Connor', role: 'Strategic Director', email: 's.connor@cyber.net', status: 'Active', color: 'from-primary to-blue-600' },
                    { name: 'Marcus Wright', role: 'Security Architect', email: 'm.wright@cyber.net', status: 'Active', color: 'from-green-500 to-green-700' },
                    { name: 'Kyle Reese', role: 'Frontend Infiltrator', email: 'k.reese@cyber.net', status: 'On Mission', color: 'from-orange-500 to-red-600' },
                    { name: 'John Connor', role: 'System Architect', email: 'j.connor@cyber.net', status: 'Active', color: 'from-purple-500 to-pink-600' },
                    { name: 'Grace 01', role: 'Neural Engineer', email: 'g01@cyber.net', status: 'Pending', color: 'from-[#4F46E5] to-indigo-700' },
                    { name: 'T-800 Unit', role: 'Infrastructure', email: 't800@cyber.net', status: 'Cold Standby', color: 'from-slate-600 to-slate-800' },
                ].map((member, i) => (
                    <div key={i} className="bg-[#1A1A24] border border-white/5 rounded-2xl p-6 group hover:border-primary/30 transition-all hover:shadow-2xl hover:shadow-primary/5">
                        <div className="flex items-center justify-between mb-6">
                            <div className={`w-16 h-16 rounded-2xl bg-gradient-to-tr ${member.color} flex items-center justify-center text-white text-xl font-black shadow-xl ring-4 ring-white/5 group-hover:scale-110 transition-transform`}>
                                {member.name.charAt(0)}
                            </div>
                            <button className="text-[#64748B] hover:text-white transition-colors">
                                <MoreVertical size={18} />
                            </button>
                        </div>

                        <h3 className="text-base font-black text-white uppercase tracking-tight mb-1">{member.name}</h3>
                        <p className="text-[10px] font-black text-primary uppercase tracking-[0.2em] mb-4">{member.role}</p>

                        <div className="space-y-4 mb-6">
                            <div className="flex items-center gap-3">
                                <Mail size={14} className="text-[#64748B]" />
                                <span className="text-[10px] font-bold text-[#64748B] uppercase truncate">{member.email}</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <div className={`w-2 h-2 rounded-full ${member.status === 'Active' ? 'bg-green-500 animate-pulse' : 'bg-orange-500'}`}></div>
                                <span className="text-[10px] font-bold text-white uppercase tracking-widest">{member.status}</span>
                            </div>
                        </div>

                        <div className="flex gap-3">
                            <button className="flex-1 py-2.5 bg-white/5 hover:bg-white/10 text-[#94A3B8] hover:text-white border border-white/5 rounded-xl text-[9px] font-black uppercase tracking-widest transition-all">
                                Dossier
                            </button>
                            <button className="p-2.5 bg-primary/10 text-primary hover:bg-primary hover:text-white rounded-xl transition-all">
                                <ArrowUpRight size={16} />
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </DashboardPage>
    );
}
