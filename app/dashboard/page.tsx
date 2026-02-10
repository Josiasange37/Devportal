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
        <div className="animate-in fade-in duration-1000">
            {/* Welcome Section */}
            <div className="mb-6 lg:mb-10">
                <div className="flex items-center gap-3 mb-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse shadow-[0_0_10px_rgba(79,70,229,0.5)]"></div>
                    <span className="text-[9px] lg:text-[10px] font-bold text-primary uppercase tracking-[0.2em]">Operational Status: Active</span>
                </div>
                <h1 className="text-2xl lg:text-3xl font-bold text-white tracking-tight mb-1 lg:mb-2">Welcome back, {displayName}</h1>
                <p className="text-[#94A3B8] text-xs lg:text-sm max-w-2xl leading-relaxed">You have 4 missions requiring your attention today. Your current weekly efficiency is up 24%.</p>
            </div>

            {/* Core Sections */}
            <div className="space-y-8 lg:space-y-10">
                {/* Metrics */}
                <section>
                    <div className="flex items-center justify-between mb-4 lg:mb-6">
                        <h2 className="text-[10px] lg:text-xs font-bold text-[#64748B] uppercase tracking-[0.2em]">Core Metrics</h2>
                    </div>
                    <DashboardStats />
                </section>

                {/* Primary Work Area */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Projects Table */}
                    <div className="lg:col-span-2 space-y-6">
                        <div className="flex items-center justify-between">
                            <h2 className="text-xs font-bold text-[#64748B] uppercase tracking-[0.2em]">Active Missions</h2>
                        </div>
                        <ProjectList />
                    </div>

                    {/* Right Column: Activity & Quick Actions */}
                    <div className="space-y-8">
                        {/* Signal Feed */}
                        <section className="bg-[#1A1A24] border border-white/5 rounded-2xl p-6">
                            <div className="flex items-center justify-between mb-6">
                                <h2 className="text-xs font-bold text-[#64748B] uppercase tracking-[0.2em]">Signal Feed</h2>
                                <Activity size={16} className="text-primary" />
                            </div>

                            <div className="space-y-6">
                                {[
                                    { text: 'Deployment Success: Alpha-2', time: '10m ago', color: 'bg-green-500' },
                                    { text: 'Invoice Generated: #882', time: '4h ago', color: 'bg-[#4F46E5]' },
                                    { text: 'Resource Spike: DB-Main', time: 'Yesterday', color: 'bg-red-500' },
                                    { text: 'New Team Request', time: 'Feb 9', color: 'bg-orange-500' },
                                ].map((a, i) => (
                                    <div key={i} className="flex gap-4 group cursor-pointer">
                                        <div className="flex flex-col items-center">
                                            <div className="w-2.5 h-2.5 rounded-full border border-white/10 flex items-center justify-center group-hover:border-primary transition-colors">
                                                <div className={`w-1.5 h-1.5 ${a.color} rounded-full`}></div>
                                            </div>
                                            {i !== 3 && <div className="w-[1px] h-10 bg-white/5 mt-1"></div>}
                                        </div>
                                        <div>
                                            <p className="text-xs font-bold text-white group-hover:text-primary transition-colors">{a.text}</p>
                                            <p className="text-[10px] text-[#64748B] mt-1">{a.time}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <button className="w-full mt-8 py-3 bg-white/5 hover:bg-white/10 text-[#94A3B8] hover:text-white rounded-xl text-[10px] font-bold uppercase tracking-widest transition-all border border-white/5">
                                View Full Audit Log
                            </button>
                        </section>

                        {/* Quick Action Card (Placeholder for now) */}
                        <div className="bg-gradient-to-br from-[#4F46E5] to-[#818CF8] rounded-2xl p-6 text-white shadow-xl shadow-[#4F46E5]/20">
                            <h3 className="font-bold mb-1">DevPortal Pro</h3>
                            <p className="text-xs text-white/80 mb-4">Unlock advanced AI analysis for your meetings.</p>
                            <button className="w-full py-2.5 bg-white text-primary rounded-xl text-xs font-bold hover:bg-white/90 transition-all">
                                Upgrade Workspace
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
