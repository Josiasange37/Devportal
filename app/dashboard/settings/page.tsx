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
    Palette
} from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';
import ThemeToggle from '@/components/ThemeToggle';
import { useState } from 'react';
import { Bell as BellIcon } from 'lucide-react';

export default function SettingsPage() {
    const { user } = useAuth();
    const [activeTab, setActiveTab] = useState('profile');

    const tabs = [
        { id: 'profile', label: 'Profile', icon: <User size={18} /> },
        { id: 'security', label: 'Security', icon: <Shield size={18} /> },
        { id: 'notifications', label: 'Notifications', icon: <Bell size={18} /> },
        { id: 'appearance', label: 'Appearance', icon: <Palette size={18} /> },
    ];

    return (
        <div className="animate-in fade-in duration-700">
            {/* Page Header */}
            <header className="glass-premium squircle-md h-16 lg:h-20 px-4 lg:px-8 flex items-center justify-between mb-6 lg:mb-8 animate-in fade-in slide-in-from-top-6 duration-1000 ease-out">
                <div className="flex flex-col">
                    <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-primary rounded-full"></div>
                        <h1 className="text-lg lg:text-xl font-black tracking-tight">Settings</h1>
                    </div>
                    <p className="hidden xs:block text-[8px] lg:text-[10px] text-muted-foreground uppercase tracking-[0.2em] font-bold opacity-60">
                        System & Preference Control
                    </p>
                </div>

                <div className="flex items-center gap-2 lg:gap-3">
                    <ThemeToggle />
                    <button className="p-2.5 lg:p-3 glass-premium hover:bg-foreground/5 dark:hover:bg-white/10 rounded-2xl transition-all relative group shadow-none">
                        <BellIcon size={18} className="text-muted-foreground group-hover:text-primary lg:size-5" />
                        <span className="absolute top-2.5 right-2.5 lg:top-3 lg:right-3 w-2 h-2 bg-primary rounded-full ring-4 ring-background"></span>
                    </button>
                    <div className="hidden lg:block w-[1px] h-8 bg-border dark:bg-white/10 mx-2"></div>
                    <button className="flex items-center gap-2 px-4 lg:px-6 py-2.5 lg:py-3 bg-primary text-primary-foreground rounded-xl lg:rounded-2xl font-black text-xs lg:text-sm shadow-xl shadow-primary/20 hover:shadow-primary/40 hover:-translate-y-1 transition-all">
                        <Save size={18} />
                        <span className="hidden lg:inline">Save Changes</span>
                    </button>
                </div>
            </header>

            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 pb-24 lg:pb-12">
                {/* Tabs Sidebar */}
                <div className="lg:col-span-1 space-y-2">
                    {tabs.map((tab) => (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            className={`w-full flex items-center gap-4 p-4 rounded-2xl transition-all duration-300 font-bold text-sm ${activeTab === tab.id
                                    ? 'bg-primary text-primary-foreground shadow-lg shadow-primary/20 scale-105'
                                    : 'text-muted-foreground hover:bg-foreground/5 hover:text-foreground'
                                }`}
                        >
                            {tab.icon}
                            {tab.label}
                        </button>
                    ))}
                </div>

                {/* Settings Content Area */}
                <div className="lg:col-span-3 space-y-6">
                    {activeTab === 'profile' && (
                        <div className="glass-premium squircle-md p-6 lg:p-10 space-y-8 animate-in fade-in slide-in-from-right-4 duration-500">
                            <div>
                                <h3 className="text-xl font-black tracking-tight mb-1">Profile Information</h3>
                                <p className="text-xs text-muted-foreground font-bold opacity-70">Update your account details and public identity.</p>
                            </div>

                            <div className="flex flex-col sm:flex-row items-center gap-8 py-4">
                                <div className="relative group">
                                    <div className="w-24 h-24 lg:w-32 lg:h-32 rounded-[2.5rem] bg-gradient-to-tr from-primary to-blue-400 flex items-center justify-center text-white text-3xl font-black shadow-2xl ring-4 ring-background">
                                        {user?.displayName?.charAt(0) || 'U'}
                                    </div>
                                    <button className="absolute bottom-0 right-0 p-2 bg-background border border-border shadow-lg rounded-xl text-primary hover:scale-110 transition-transform">
                                        <Palette size={16} />
                                    </button>
                                </div>
                                <div className="space-y-4 flex-1 w-full">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div className="space-y-2">
                                            <label className="text-[10px] font-black uppercase tracking-widest text-muted-foreground opacity-60">Full Name</label>
                                            <input
                                                type="text"
                                                defaultValue={user?.displayName || ''}
                                                className="w-full px-4 py-3 bg-foreground/5 dark:bg-white/5 border border-border dark:border-white/5 rounded-xl outline-none focus:ring-2 focus:ring-primary/20 transition-all font-bold"
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-[10px] font-black uppercase tracking-widest text-muted-foreground opacity-60">Email Address</label>
                                            <input
                                                type="email"
                                                defaultValue={user?.email || ''}
                                                disabled
                                                className="w-full px-4 py-3 bg-foreground/5 dark:bg-white/5 border border-border dark:border-white/5 rounded-xl outline-none opacity-50 cursor-not-allowed font-bold"
                                            />
                                        </div>
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-[10px] font-black uppercase tracking-widest text-muted-foreground opacity-60">Professional Title</label>
                                        <input
                                            type="text"
                                            placeholder="e.g. Senior Product Designer"
                                            className="w-full px-4 py-3 bg-foreground/5 dark:bg-white/5 border border-border dark:border-white/5 rounded-xl outline-none focus:ring-2 focus:ring-primary/20 transition-all font-bold"
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="pt-8 border-t border-border dark:border-white/5 space-y-6">
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-4">
                                        <div className="p-3 bg-foreground/5 dark:bg-white/5 rounded-2xl text-primary">
                                            <Globe size={20} />
                                        </div>
                                        <div>
                                            <p className="font-bold text-sm">Public Profile</p>
                                            <p className="text-[10px] text-muted-foreground opacity-60">Make your profile visible to clients.</p>
                                        </div>
                                    </div>
                                    <div className="w-12 h-6 bg-primary rounded-full relative p-1 cursor-pointer">
                                        <div className="w-4 h-4 bg-white rounded-full absolute right-1"></div>
                                    </div>
                                </div>
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-4">
                                        <div className="p-3 bg-foreground/5 dark:bg-white/5 rounded-2xl text-primary">
                                            <Database size={20} />
                                        </div>
                                        <div>
                                            <p className="font-bold text-sm">Data Export</p>
                                            <p className="text-[10px] text-muted-foreground opacity-60">Download all your mission data.</p>
                                        </div>
                                    </div>
                                    <button className="text-[10px] font-black uppercase tracking-widest text-primary hover:underline transition-all">Export JSON</button>
                                </div>
                            </div>
                        </div>
                    )}

                    {activeTab === 'security' && (
                        <div className="glass-premium squircle-md p-6 lg:p-10 space-y-8 animate-in fade-in slide-in-from-right-4 duration-500">
                            <div>
                                <h3 className="text-xl font-black tracking-tight mb-1">Security & Shielding</h3>
                                <p className="text-xs text-muted-foreground font-bold opacity-70">Protect your account with advanced measures.</p>
                            </div>

                            <div className="space-y-4">
                                <div className="p-5 bg-foreground/5 dark:bg-white/5 border border-border dark:border-white/5 rounded-3xl flex items-center justify-between group cursor-pointer hover:bg-foreground/10 transition-all">
                                    <div className="flex items-center gap-4">
                                        <div className="p-3 bg-background rounded-2xl text-primary shadow-sm border border-border">
                                            <Lock size={20} />
                                        </div>
                                        <div>
                                            <p className="font-bold text-sm">Two-Factor Authentication</p>
                                            <p className="text-[10px] text-muted-foreground opacity-60">Highly recommended for core security.</p>
                                        </div>
                                    </div>
                                    <span className="text-[10px] font-black uppercase tracking-widest text-red-500 px-2 py-1 bg-red-500/10 rounded-lg">Disabled</span>
                                </div>

                                <div className="p-5 bg-foreground/5 dark:bg-white/5 border border-border dark:border-white/5 rounded-3xl flex items-center justify-between group cursor-pointer hover:bg-foreground/10 transition-all">
                                    <div className="flex items-center gap-4">
                                        <div className="p-3 bg-background rounded-2xl text-primary shadow-sm border border-border">
                                            <Monitor size={20} />
                                        </div>
                                        <div>
                                            <p className="font-bold text-sm">Active Sessions</p>
                                            <p className="text-[10px] text-muted-foreground opacity-60">Review where you are currently logged in.</p>
                                        </div>
                                    </div>
                                    <ChevronRight size={18} className="text-muted-foreground" />
                                </div>
                            </div>

                            <div className="pt-8 border-t border-border dark:border-white/5">
                                <button className="flex items-center gap-3 text-red-500 font-black text-xs uppercase tracking-[0.2em] px-6 py-4 bg-red-500/5 hover:bg-red-500/10 rounded-2xl transition-all border border-red-500/10">
                                    <Trash2 size={16} /> Danger Zone: Deactivate Crew Account
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
