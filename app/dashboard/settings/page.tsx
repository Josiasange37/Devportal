'use client';

import {
    User,
    Shield,
    Bell,
    Monitor,
    Globe,
    Database,
    ChevronRight,
    Check,
    Lock,
    Eye,
    EyeOff,
    Save,
    Trash2,
    Palette,
    Bell as BellIcon,
    Search
} from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';
import ThemeToggle from '@/components/ThemeToggle';
import { useState } from 'react';

export default function SettingsPage() {
    const { user } = useAuth();
    const [activeTab, setActiveTab] = useState('profile');

    const tabs = [
        { id: 'profile', label: 'Identity', icon: <User size={16} /> },
        { id: 'security', label: 'Protection', icon: <Shield size={16} /> },
        { id: 'notifications', label: 'Signal Feed', icon: <Bell size={16} /> },
        { id: 'appearance', label: 'Vibe Check', icon: <Palette size={16} /> },
    ];

    return (
        <div className="animate-in fade-in duration-1000">
            {/* Page Title Section */}
            <div className="mb-10">
                <div className="flex items-center gap-3 mb-2">
                    <div className="w-2 h-2 bg-primary rounded-full animate-pulse shadow-[0_0_10px_rgba(79,70,229,0.5)]"></div>
                    <span className="text-[10px] font-bold text-primary uppercase tracking-[0.2em]">Operational Status: Configuration Mode</span>
                </div>
                <div className="flex items-center justify-between">
                    <div>
                        <h1 className="text-3xl font-bold text-white tracking-tight mb-2">Settings</h1>
                        <p className="text-[#94A3B8] text-sm">Managing system preferences and security protocols.</p>
                    </div>
                    <button className="flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-2xl font-bold text-sm shadow-xl shadow-primary/20 hover:shadow-primary/40 hover:-translate-y-1 transition-all">
                        <Save size={18} />
                        Save Protocols
                    </button>
                </div>
            </div>

            <div className="flex flex-col lg:grid lg:grid-cols-4 gap-8 pb-24 lg:pb-12">
                {/* Tabs Sidebar / Mobile Header */}
                <div className="lg:col-span-1">
                    <div className="bg-[#1A1A24] border border-white/5 p-1.5 rounded-2xl flex lg:flex-col gap-1 overflow-x-auto lg:overflow-x-visible no-scrollbar">
                        {tabs.map((tab) => (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id)}
                                className={`flex-shrink-0 lg:w-full flex items-center gap-3 lg:gap-4 p-3 lg:p-4 rounded-xl transition-all duration-300 font-bold text-[9px] lg:text-[10px] uppercase tracking-widest ${activeTab === tab.id
                                    ? 'bg-primary text-white shadow-lg shadow-primary/20'
                                    : 'text-[#64748B] hover:bg-white/5 hover:text-white'
                                    }`}
                            >
                                {tab.icon}
                                {tab.label}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Settings Content Area */}
                <div className="lg:col-span-3 space-y-6">
                    {activeTab === 'profile' && (
                        <div className="bg-[#1A1A24] border border-white/5 rounded-2xl p-8 lg:p-10 space-y-10 animate-in fade-in slide-in-from-right-4 duration-500">
                            <div>
                                <h3 className="text-xl font-bold text-white mb-1">Identity Protocols</h3>
                                <p className="text-xs text-[#94A3B8] font-bold opacity-70">Update your account credentials and public signal.</p>
                            </div>

                            <div className="flex flex-col md:flex-row items-center gap-10">
                                <div className="relative group">
                                    <div className="w-28 h-28 rounded-3xl bg-white/5 border border-white/5 flex items-center justify-center text-white text-4xl font-bold shadow-2xl group-hover:scale-105 transition-transform duration-500">
                                        {user?.displayName?.charAt(0) || 'U'}
                                    </div>
                                    <button className="absolute -bottom-2 -right-2 p-3 bg-primary text-white rounded-xl shadow-xl hover:scale-110 transition-transform">
                                        <Palette size={16} />
                                    </button>
                                </div>
                                <div className="space-y-6 flex-1 w-full">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#64748B]">Full Name</label>
                                            <input
                                                type="text"
                                                defaultValue={user?.displayName || ''}
                                                className="w-full px-5 py-3.5 bg-white/5 border border-white/5 rounded-xl outline-none focus:border-primary/50 transition-all font-bold text-white text-sm"
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#64748B]">Signal Address</label>
                                            <input
                                                type="email"
                                                defaultValue={user?.email || ''}
                                                disabled
                                                className="w-full px-5 py-3.5 bg-white/5 border border-white/5 rounded-xl outline-none opacity-50 cursor-not-allowed font-bold text-white text-sm"
                                            />
                                        </div>
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#64748B]">Mission Title</label>
                                        <input
                                            type="text"
                                            placeholder="e.g. Lead Infrastructure Architect"
                                            className="w-full px-5 py-3.5 bg-white/5 border border-white/5 rounded-xl outline-none focus:border-primary/50 transition-all font-bold text-white text-sm"
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="pt-10 border-t border-white/5 space-y-6">
                                <div className="flex items-center justify-between p-4 bg-white/5 rounded-2xl border border-white/5 hover:border-primary/20 transition-all group">
                                    <div className="flex items-center gap-4">
                                        <div className="p-3 bg-white/5 rounded-xl text-primary group-hover:bg-primary/10 transition-colors">
                                            <Globe size={20} />
                                        </div>
                                        <div>
                                            <p className="font-bold text-white text-sm tracking-tight">Public Presence</p>
                                            <p className="text-[10px] text-[#94A3B8] font-medium">Broadcast your profile to the network.</p>
                                        </div>
                                    </div>
                                    <button className="w-12 h-6 bg-primary rounded-full relative p-1 group">
                                        <div className="w-4 h-4 bg-white rounded-full absolute right-1"></div>
                                    </button>
                                </div>

                                <div className="flex items-center justify-between p-4 bg-white/5 rounded-2xl border border-white/5 hover:border-primary/20 transition-all group">
                                    <div className="flex items-center gap-4">
                                        <div className="p-3 bg-white/5 rounded-xl text-primary group-hover:bg-primary/10 transition-colors">
                                            <Database size={20} />
                                        </div>
                                        <div>
                                            <p className="font-bold text-white text-sm tracking-tight">Mission Data Backup</p>
                                            <p className="text-[10px] text-[#94A3B8] font-medium">Download archive of all operational data.</p>
                                        </div>
                                    </div>
                                    <button className="text-[10px] font-bold uppercase tracking-widest text-primary hover:text-white transition-colors">Export .LOG</button>
                                </div>
                            </div>
                        </div>
                    )}

                    {activeTab === 'security' && (
                        <div className="bg-[#1A1A24] border border-white/5 rounded-2xl p-8 lg:p-10 space-y-8 animate-in fade-in slide-in-from-right-4 duration-500">
                            <div>
                                <h3 className="text-xl font-bold text-white mb-1">Defense Protocols</h3>
                                <p className="text-xs text-[#94A3B8] font-bold opacity-70">Hardening your account against unauthorized access.</p>
                            </div>

                            <div className="space-y-4">
                                <div className="p-6 bg-white/5 border border-white/5 rounded-2xl flex items-center justify-between group cursor-pointer hover:border-primary/30 transition-all">
                                    <div className="flex items-center gap-5">
                                        <div className="p-3 bg-white/5 rounded-xl text-primary transition-colors group-hover:bg-primary/20">
                                            <Lock size={20} />
                                        </div>
                                        <div>
                                            <p className="font-bold text-white text-sm tracking-tight">Multi-Factor Authentication</p>
                                            <p className="text-[10px] text-[#94A3B8] font-medium">Critical shielding for elite accounts.</p>
                                        </div>
                                    </div>
                                    <span className="text-[9px] font-bold uppercase tracking-widest text-red-400 px-3 py-1 bg-red-400/10 rounded-lg border border-red-400/20">Offline</span>
                                </div>

                                <div className="p-6 bg-white/5 border border-white/5 rounded-2xl flex items-center justify-between group cursor-pointer hover:border-primary/30 transition-all">
                                    <div className="flex items-center gap-5">
                                        <div className="p-3 bg-white/5 rounded-xl text-primary transition-colors group-hover:bg-primary/20">
                                            <Monitor size={20} />
                                        </div>
                                        <div>
                                            <p className="font-bold text-white text-sm tracking-tight">Active Transmissions</p>
                                            <p className="text-[10px] text-[#94A3B8] font-medium">Monitoring current login sessions.</p>
                                        </div>
                                    </div>
                                    <ChevronRight size={18} className="text-[#64748B] group-hover:text-white transition-colors" />
                                </div>
                            </div>

                            <div className="pt-8 border-t border-white/5">
                                <button className="flex items-center gap-3 text-red-400 font-bold text-[10px] uppercase tracking-[0.2em] px-8 py-4 bg-red-400/5 hover:bg-red-400/10 rounded-2xl transition-all border border-red-400/10 hover:border-red-400/30">
                                    <Trash2 size={16} /> Self-Destruct: Terminate Crew Account
                                </button>
                            </div>
                        </div>
                    )}

                    {activeTab === 'notifications' && (
                        <div className="bg-[#1A1A24] border border-white/5 rounded-2xl p-8 lg:p-10 space-y-8 animate-in fade-in slide-in-from-right-4 duration-500">
                            <div>
                                <h3 className="text-xl font-bold text-white mb-1">Signal Feed Configuration</h3>
                                <p className="text-xs text-[#94A3B8] font-bold opacity-70">Control how information is broadcasted to your console.</p>
                            </div>

                            <div className="space-y-4">
                                {[
                                    { label: 'Mission Updates', desc: 'Alerts for project status changes and deployments.', enabled: true },
                                    { label: 'Security Alerts', desc: 'Critical notifications about account access and defense.', enabled: true },
                                    { label: 'Team Transmissions', desc: 'Direct messages and project discussions.', enabled: false },
                                    { label: 'Financial Reports', desc: 'Invoicing and payment signal updates.', enabled: true },
                                ].map((notification, i) => (
                                    <div key={i} className="flex items-center justify-between p-4 bg-white/5 rounded-2xl border border-white/5 hover:border-primary/20 transition-all group">
                                        <div className="space-y-1">
                                            <p className="font-bold text-white text-sm tracking-tight">{notification.label}</p>
                                            <p className="text-[10px] text-[#94A3B8] font-medium">{notification.desc}</p>
                                        </div>
                                        <button className={`w-12 h-6 rounded-full relative p-1 transition-colors ${notification.enabled ? 'bg-primary' : 'bg-white/10'}`}>
                                            <div className={`w-4 h-4 bg-white rounded-full absolute top-1 ${notification.enabled ? 'right-1' : 'left-1'} transition-all`}></div>
                                        </button>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {activeTab === 'appearance' && (
                        <div className="bg-[#1A1A24] border border-white/5 rounded-2xl p-8 lg:p-10 space-y-10 animate-in fade-in slide-in-from-right-4 duration-500">
                            <div>
                                <h3 className="text-xl font-bold text-white mb-1">Visual Override</h3>
                                <p className="text-xs text-[#94A3B8] font-bold opacity-70">Customize the UI interface and tactical visual styles.</p>
                            </div>

                            <div className="space-y-8">
                                <div className="space-y-4">
                                    <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#64748B]">Interface Theme</label>
                                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                                        {[
                                            { id: 'dark', label: 'Tactical (Dark)', color: 'bg-[#0A0A0F]' },
                                            { id: 'light', label: 'Operational (Light)', color: 'bg-white' },
                                            { id: 'system', label: 'Network Default', color: 'bg-gradient-to-br from-gray-700 to-gray-300' },
                                        ].map((theme) => (
                                            <button
                                                key={theme.id}
                                                className="p-4 bg-white/5 border border-white/5 rounded-2xl group hover:border-primary/50 transition-all text-center"
                                            >
                                                <div className={`w-full h-12 rounded-xl ${theme.color} mb-3 border border-white/10`}></div>
                                                <p className="text-[10px] font-bold text-white uppercase tracking-wider">{theme.label}</p>
                                            </button>
                                        ))}
                                    </div>
                                </div>

                                <div className="space-y-4">
                                    <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#64748B]">Primary Signal Color</label>
                                    <div className="flex flex-wrap gap-4">
                                        {['#4F46E5', '#10B981', '#F59E0B', '#EF4444', '#EC4899', '#8B5CF6'].map((color) => (
                                            <button
                                                key={color}
                                                className="w-10 h-10 rounded-xl border-2 border-transparent hover:border-white transition-all shadow-lg"
                                                style={{ backgroundColor: color }}
                                            ></button>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
