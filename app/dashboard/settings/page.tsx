'use client';

import {
    Settings,
    Bell,
    Shield,
    User,
    Smartphone,
    Key,
    Moon,
    Eye,
    Globe,
    Link as LinkIcon,
    ChevronRight,
    Search
} from 'lucide-react';
import DashboardPage from '@/components/DashboardPage';

export default function SettingsPage() {
    return (
        <DashboardPage>
            {/* Header */}
            <div className="mb-6 lg:mb-10">
                <div className="flex items-center gap-3 mb-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse shadow-[0_0_10px_rgba(79,70,229,0.5)]"></div>
                    <span className="text-[9px] lg:text-[10px] font-bold text-primary uppercase tracking-[0.2em]">System Status: Configuration Locked</span>
                </div>
                <h1 className="text-2xl lg:text-3xl font-bold text-white tracking-tight mb-2">Workspace Settings</h1>
                <p className="text-[#94A3B8] text-xs lg:text-sm">Manage your operational environment and tactical preferences.</p>
            </div>

            {/* Settings Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-24 lg:mb-12">
                {/* Sidebar Navigation */}
                <div className="lg:col-span-1 space-y-2">
                    {[
                        { label: 'General Info', icon: <User size={18} />, active: true },
                        { label: 'Notifications', icon: <Bell size={18} />, active: false },
                        { label: 'Security & Keys', icon: <Shield size={18} />, active: false },
                        { label: 'Device Control', icon: <Smartphone size={18} />, active: false },
                        { label: 'Integrations', icon: <LinkIcon size={18} />, active: false },
                        { label: 'Appearance', icon: <Moon size={18} />, active: false },
                    ].map((item, i) => (
                        <button
                            key={i}
                            className={`w-full flex items-center justify-between px-5 py-4 rounded-xl transition-all group ${item.active
                                    ? 'bg-primary text-white shadow-xl shadow-primary/20'
                                    : 'text-[#64748B] hover:bg-white/5 hover:text-white'
                                }`}
                        >
                            <div className="flex items-center gap-4">
                                <span className={`${item.active ? 'text-white' : 'group-hover:text-primary'} transition-colors`}>{item.icon}</span>
                                <span className="text-[10px] font-black uppercase tracking-widest">{item.label}</span>
                            </div>
                            <ChevronRight size={14} className={item.active ? 'opacity-100' : 'opacity-0'} />
                        </button>
                    ))}
                </div>

                {/* Main Content Area */}
                <div className="lg:col-span-2 space-y-8">
                    {/* Security Section */}
                    <div className="bg-[#1A1A24] border border-white/5 rounded-2xl p-6 lg:p-8">
                        <h2 className="text-xs font-black text-[#64748B] uppercase tracking-[0.2em] mb-8">Base Configuration</h2>
                        <div className="space-y-8">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-[10px] font-bold text-[#64748B] uppercase tracking-widest">Display Handle</label>
                                    <input
                                        type="text"
                                        placeholder="Admin_01"
                                        className="w-full bg-[#0A0A0F] border border-white/5 rounded-xl px-4 py-3 text-sm text-white focus:border-primary/50 outline-none transition-all"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-[10px] font-bold text-[#64748B] uppercase tracking-widest">Mission ID Tag</label>
                                    <input
                                        type="text"
                                        placeholder="DEV-PORTAL-001"
                                        className="w-full bg-[#0A0A0F] border border-white/5 rounded-xl px-4 py-3 text-sm text-[#475569] cursor-not-allowed outline-none"
                                        disabled
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-[10px] font-bold text-[#64748B] uppercase tracking-widest">Base Intelligence Mode</label>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <button className="px-5 py-4 bg-[#0A0A0F] border-2 border-primary rounded-xl flex items-center justify-between group">
                                        <div className="flex items-center gap-3">
                                            <Shield size={18} className="text-primary" />
                                            <span className="text-[10px] font-black text-white uppercase">Paranoid Mode active</span>
                                        </div>
                                        <div className="w-4 h-4 rounded-full border-2 border-primary flex items-center justify-center">
                                            <div className="w-2 h-2 bg-primary rounded-full"></div>
                                        </div>
                                    </button>
                                    <button className="px-5 py-4 bg-[#0A0A0F] border border-white/5 rounded-xl flex items-center justify-between group hover:border-white/10 transition-all opacity-50">
                                        <div className="flex items-center gap-3">
                                            <Eye size={18} className="text-[#64748B]" />
                                            <span className="text-[10px] font-black text-[#64748B] uppercase">Standard Scan</span>
                                        </div>
                                        <div className="w-4 h-4 rounded-full border border-white/10"></div>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Data Control Section */}
                    <div className="bg-[#1A1A24] border border-white/5 rounded-2xl p-6 lg:p-8">
                        <h2 className="text-xs font-black text-[#64748B] uppercase tracking-[0.2em] mb-4">Transmission Logs</h2>
                        <p className="text-xs text-[#94A3B8] mb-6">History of all data relay and communication events across your mission nodes.</p>
                        <button className="flex items-center gap-2 px-6 py-3 bg-red-500/10 hover:bg-red-500/20 text-red-400 rounded-xl text-xs font-bold uppercase tracking-widest transition-all">
                            Purge Transmission Data
                        </button>
                    </div>

                    {/* Save Changes */}
                    <div className="flex flex-col sm:flex-row items-center justify-end gap-4 p-6 bg-primary/5 rounded-2xl border border-primary/10">
                        <span className="text-[10px] font-bold text-primary uppercase tracking-widest">Configuration unsaved</span>
                        <div className="flex gap-4">
                            <button className="px-6 py-3 text-[#94A3B8] hover:text-white text-xs font-bold uppercase tracking-widest transition-all">Reset</button>
                            <button className="px-10 py-3 bg-primary text-white rounded-xl text-xs font-black uppercase tracking-widest shadow-xl shadow-primary/20 hover:scale-105 active:scale-95 transition-all">Deploy Changes</button>
                        </div>
                    </div>
                </div>
            </div>
        </DashboardPage>
    );
}
