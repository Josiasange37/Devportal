'use client';

import DashboardStats from '@/components/DashboardStats';
import ProjectList from '@/components/ProjectList';
import { Bell, Activity, Search } from 'lucide-react';
import ThemeToggle from '@/components/ThemeToggle';
import { useAuth } from '@/contexts/AuthContext';

export default function DashboardOverviewPage() {
    const { user } = useAuth();
    const displayName = user?.displayName || user?.email?.split('@')[0] || 'Member';

    return (
        <div className="animate-in fade-in duration-700">
            {/* Floating Navigation Island / Header */}
            <header className="glass-premium squircle-md h-16 lg:h-20 px-4 lg:px-8 flex items-center justify-between mb-6 lg:mb-8 animate-in fade-in slide-in-from-top-6 duration-1000 ease-out">
                <div className="flex flex-col">
                    <div className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                        <h1 className="text-lg lg:text-xl font-black tracking-tight">Main Hub</h1>
                    </div>
                    <p className="hidden xs:block text-[8px] lg:text-[10px] text-muted-foreground uppercase tracking-[0.2em] font-bold opacity-60">
                        Hi, {displayName}
                    </p>
                </div>

                {/* Search Pill (Desktop Only) */}
                <div className="hidden lg:flex items-center gap-3 px-6 py-2.5 bg-foreground/5 dark:bg-white/5 border border-border/50 dark:border-white/5 rounded-full hover:bg-foreground/10 dark:hover:bg-white/10 transition-all group focus-within:w-64 duration-500">
                    <Search size={16} className="text-muted-foreground group-focus-within:text-primary" />
                    <input
                        type="text"
                        placeholder="Type to search..."
                        className="bg-transparent text-sm outline-none w-32 group-focus-within:w-48 transition-all placeholder:text-muted-foreground/50"
                    />
                    <span className="text-[10px] font-bold opacity-30">⌘K</span>
                </div>

                <div className="flex items-center gap-2 lg:gap-3">
                    <ThemeToggle />
                    <button className="p-2.5 lg:p-3 glass-premium hover:bg-foreground/5 dark:hover:bg-white/10 rounded-2xl transition-all relative group shadow-none">
                        <Bell size={18} className="text-muted-foreground group-hover:text-primary lg:size-5" />
                        <span className="absolute top-2.5 right-2.5 lg:top-3 lg:right-3 w-2 h-2 bg-primary rounded-full ring-4 ring-background"></span>
                    </button>
                    <div className="hidden lg:block w-[1px] h-8 bg-border dark:bg-white/10 mx-2"></div>
                    <button className="px-4 lg:px-6 py-2.5 lg:py-3 bg-primary text-primary-foreground rounded-xl lg:rounded-2xl font-black text-xs lg:text-sm shadow-xl shadow-primary/20 hover:shadow-primary/40 hover:-translate-y-1 transition-all">
                        <span className="lg:hidden">+</span>
                        <span className="hidden lg:inline">Create New</span>
                    </button>
                </div>
            </header>

            {/* Grid Content */}
            <div className="space-y-6 lg:space-y-8 pb-24 lg:pb-12">
                {/* Stats Section */}
                <div className="animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-300">
                    <DashboardStats />
                </div>

                {/* Secondary Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
                    {/* Project Focus */}
                    <div className="lg:col-span-2 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-500 order-2 lg:order-1">
                        <ProjectList />
                    </div>

                    {/* Recent Activity Island */}
                    <div className="glass-premium squircle-md p-6 lg:p-8 animate-in fade-in slide-in-from-right-8 duration-1000 delay-700 relative overflow-hidden group order-1 lg:order-2">
                        <div className="absolute -top-12 -right-12 w-32 h-32 bg-primary/10 rounded-full blur-3xl opacity-50"></div>

                        <div className="flex items-center justify-between mb-6 lg:mb-8 relative z-10">
                            <div className="flex items-center gap-3">
                                <div className="p-2 bg-primary/10 rounded-xl text-primary">
                                    <Activity size={20} />
                                </div>
                                <h3 className="text-lg lg:text-xl font-bold font-sans">Live Signal</h3>
                            </div>
                            <span className="w-2 h-2 bg-primary rounded-full animate-ping"></span>
                        </div>

                        <div className="space-y-5 lg:space-y-6 relative z-10">
                            {[
                                { text: 'Deployment Success: Alpha-2', time: '10m ago', color: 'bg-green-500' },
                                { text: 'Invoice Generated: #882', time: '4h ago', color: 'bg-primary' },
                                { text: 'Resource Spike: DB-Main', time: 'Yesterday', color: 'bg-red-500' },
                                { text: 'New Team Request', time: 'Feb 9', color: 'bg-orange-500' },
                            ].map((a, i) => (
                                <div key={i} className="flex gap-4 group/item cursor-default">
                                    <div className="flex flex-col items-center">
                                        <div className="w-3.5 h-3.5 lg:w-4 lg:h-4 rounded-full border-2 border-border/50 dark:border-white/10 flex items-center justify-center group-hover/item:border-primary transition-colors">
                                            <div className={`w-1.5 h-1.5 ${a.color} rounded-full`}></div>
                                        </div>
                                        {i !== 3 && <div className="w-[1px] h-8 lg:h-10 bg-border/30 dark:bg-white/5 mt-1"></div>}
                                    </div>
                                    <div className="flex-1">
                                        <p className="text-xs lg:text-sm font-bold opacity-80 group-hover/item:opacity-100 transition-opacity truncate max-w-[200px] lg:max-w-none">{a.text}</p>
                                        <p className="text-[8px] lg:text-[10px] text-muted-foreground font-black uppercase tracking-wider mt-1 opacity-50">{a.time}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <button className="w-full mt-6 lg:mt-8 py-3.5 lg:py-4 bg-foreground/5 dark:bg-white/5 hover:bg-foreground/10 dark:hover:bg-white/10 rounded-2xl text-[9px] lg:text-[10px] font-black uppercase tracking-[0.2em] lg:tracking-[0.3em] transition-all border border-border/50 dark:border-white/5">
                            Audit All Events
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
