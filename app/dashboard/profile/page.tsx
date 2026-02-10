'use client';

import { useAuth } from '@/contexts/AuthContext';
import {
    User,
    Mail,
    Shield,
    Globe,
    Github,
    Twitter,
    Linkedin,
    Camera,
    Lock,
    Settings,
    MapPin,
    Briefcase,
    Calendar,
    Award
} from 'lucide-react';
import DashboardPage from '@/components/DashboardPage';

export default function ProfilePage() {
    const { user } = useAuth();
    const displayName = user?.displayName || user?.email?.split('@')[0] || 'User';

    return (
        <DashboardPage>
            {/* Mission Profile Header */}
            <div className="relative mb-8 lg:mb-12">
                <div className="h-40 lg:h-64 rounded-3xl bg-gradient-to-tr from-[#1A1A24] to-[#2A2A35] border border-white/5 overflow-hidden relative">
                    <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, #4F46E5 1px, transparent 0)', backgroundSize: '24px 24px' }}></div>
                    <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-10 bg-gradient-to-t from-[#0A0A0F] to-transparent">
                        <div className="flex items-center gap-3 mb-2">
                            <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></div>
                            <span className="text-[9px] lg:text-[10px] font-black text-green-500 uppercase tracking-[0.2em]">Signal Active: Authenticated</span>
                        </div>
                    </div>
                </div>

                <div className="absolute -bottom-10 left-6 lg:left-10 flex items-end gap-6">
                    <div className="relative group">
                        <div className="w-24 h-24 lg:w-32 lg:h-32 rounded-3xl bg-primary flex items-center justify-center text-white text-3xl lg:text-4xl font-black shadow-2xl ring-8 ring-[#0A0A0F] overflow-hidden">
                            {user?.photoURL ? (
                                <img src={user.photoURL} alt={displayName} className="w-full h-full object-cover" />
                            ) : (
                                displayName.charAt(0).toUpperCase()
                            )}
                        </div>
                        <button className="absolute bottom-2 right-2 p-2 bg-white text-black rounded-xl shadow-xl hover:scale-110 transition-transform active:scale-95">
                            <Camera size={16} />
                        </button>
                    </div>
                    <div className="mb-2 pb-2">
                        <h1 className="text-2xl lg:text-3xl font-black text-white tracking-tighter uppercase">{displayName}</h1>
                        <p className="text-primary text-[10px] font-black uppercase tracking-[0.3em] font-mono">Mission Specialist // ID: {user?.uid?.slice(0, 8).toUpperCase()}</p>
                    </div>
                </div>
            </div>

            {/* Profile Grid */}
            <div className="mt-16 lg:mt-24 grid grid-cols-1 lg:grid-cols-3 gap-8 mb-24 lg:mb-12">
                {/* Left Column: Mission Details */}
                <div className="lg:col-span-2 space-y-8">
                    <section className="bg-[#1A1A24] border border-white/5 rounded-2xl p-6 lg:p-8">
                        <h2 className="text-xs font-black text-[#64748B] uppercase tracking-[0.2em] mb-6 flex items-center gap-3">
                            <User size={16} className="text-primary" />
                            Tactical Dossier
                        </h2>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                            {[
                                { label: 'Full Designation', value: displayName, icon: <User size={14} /> },
                                { label: 'Primary Comms', value: user?.email, icon: <Mail size={14} /> },
                                { label: 'Deployment Area', value: 'Global / Remote', icon: <Globe size={14} /> },
                                { label: 'Specialization', value: 'Full-Stack Operative', icon: <Briefcase size={14} /> },
                                { label: 'Mission Focus', value: 'High-Impact Delivery', icon: <Award size={14} /> },
                                { label: 'Service Record', value: 'Est. Feb 2024', icon: <Calendar size={14} /> },
                            ].map((item, i) => (
                                <div key={i} className="space-y-2 group">
                                    <p className="text-[10px] font-bold text-[#64748B] uppercase tracking-widest flex items-center gap-2 group-hover:text-primary transition-colors">
                                        {item.icon}
                                        {item.label}
                                    </p>
                                    <p className="text-sm font-bold text-white uppercase tracking-tight truncate">{item.value || 'N/A'}</p>
                                </div>
                            ))}
                        </div>
                    </section>

                    <section className="bg-[#1A1A24] border border-white/5 rounded-2xl p-6 lg:p-8">
                        <h2 className="text-xs font-black text-[#64748B] uppercase tracking-[0.2em] mb-6 flex items-center gap-3">
                            <Lock size={16} className="text-primary" />
                            Digital Signatures
                        </h2>
                        <div className="flex flex-wrap gap-4">
                            {[
                                { label: 'GitHub', icon: <Github size={18} />, connected: true },
                                { label: 'Twitter', icon: <Twitter size={18} />, connected: false },
                                { label: 'LinkedIn', icon: <Linkedin size={18} />, connected: true },
                            ].map((social, i) => (
                                <button key={i} className={`flex items-center gap-3 px-4 py-3 rounded-xl border transition-all ${social.connected ? 'bg-primary/10 border-primary/20 text-white' : 'bg-white/5 border-white/5 text-[#64748B] hover:text-white'}`}>
                                    {social.icon}
                                    <span className="text-[10px] font-black uppercase tracking-widest">{social.label}</span>
                                    <div className={`w-1.5 h-1.5 rounded-full ${social.connected ? 'bg-primary' : 'bg-white/10'}`}></div>
                                </button>
                            ))}
                        </div>
                    </section>
                </div>

                {/* Right Column: Systems & Preferences */}
                <div className="space-y-8">
                    <section className="bg-[#1A1A24] border border-white/5 rounded-2xl p-6 lg:p-8">
                        <h2 className="text-xs font-black text-[#64748B] uppercase tracking-[0.2em] mb-6">Security Protocol</h2>
                        <div className="space-y-4">
                            <div className="flex items-center justify-between p-3 bg-green-500/10 border border-green-500/20 rounded-xl">
                                <div className="flex items-center gap-3">
                                    <Shield size={16} className="text-green-500" />
                                    <span className="text-[10px] font-black text-white uppercase">MFA Status</span>
                                </div>
                                <span className="text-[8px] font-black text-green-500 uppercase bg-green-500/10 px-2 py-1 rounded-md">Verified</span>
                            </div>
                            <button className="w-full py-3 bg-white/5 hover:bg-white/10 border border-white/5 rounded-xl text-[10px] font-black text-white uppercase tracking-widest transition-all">
                                Update Pass-Key
                            </button>
                        </div>
                    </section>

                    <section className="bg-gradient-to-br from-[#4F46E5] to-[#818CF8] rounded-2xl p-6 lg:p-8 text-white shadow-xl shadow-primary/20">
                        <Settings className="mb-4 opacity-60" size={24} />
                        <h3 className="font-black uppercase tracking-tight mb-1">Operational Tier</h3>
                        <p className="text-xs text-white/80 mb-6 font-medium">Enterprise operative with full administrative clearance.</p>
                        <button className="w-full py-2.5 bg-white text-primary rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-white/90 transition-all">
                            Manage Workspace
                        </button>
                    </section>
                </div>
            </div>
        </DashboardPage>
    );
}
