'use client';

import { TrendingUp, BarChart3, PieChart, Activity, ArrowUpRight, ArrowDownRight, Zap } from 'lucide-react';
import DashboardPage from '@/components/DashboardPage';

export default function AnalyticsPage() {
    return (
        <DashboardPage>
            {/* Page Title Section */}
            <div className="mb-6 lg:mb-10">
                <div className="flex items-center gap-3 mb-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse shadow-[0_0_10px_rgba(79,70,229,0.5)]"></div>
                    <span className="text-[9px] lg:text-[10px] font-bold text-primary uppercase tracking-[0.2em]">Operational Status: Analytics Online</span>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div>
                        <h1 className="text-2xl lg:text-3xl font-bold text-white tracking-tight mb-1 lg:mb-2">Analytics</h1>
                        <p className="text-[#94A3B8] text-xs lg:text-sm">Monitoring system throughput and performance telemetry.</p>
                    </div>
                    <div className="flex gap-3">
                        <select className="bg-[#1A1A24] border border-white/5 rounded-xl px-4 py-2 text-[10px] sm:text-xs font-bold text-white outline-none focus:border-primary/50 w-full sm:w-auto">
                            <option>Last 30 Days</option>
                            <option>Last 7 Days</option>
                            <option>Last 24 Hours</option>
                        </select>
                    </div>
                </div>
            </div>

            {/* Metrics Grid */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 mb-8 lg:mb-10">
                {[
                    { label: 'Throughput', value: '84.2 GHz', trend: '+12.5%', icon: <Activity size={20} />, color: 'text-primary' },
                    { label: 'Network Load', value: '42.1%', trend: '-4.2%', icon: <TrendingUp size={20} />, color: 'text-green-400' },
                    { label: 'System Uptime', value: '99.99%', trend: 'Stable', icon: <Zap size={20} />, color: 'text-orange-400' },
                    { label: 'Active Relays', value: '1,284', trend: '+86', icon: <PieChart size={20} />, color: 'text-blue-400' },
                ].map((stat, i) => (
                    <div key={i} className="bg-[#1A1A24] border border-white/5 p-6 rounded-2xl group hover:border-primary/30 transition-all">
                        <div className="flex items-center justify-between mb-4">
                            <div className={`p-2.5 bg-white/5 rounded-xl ${stat.color} group-hover:scale-110 transition-transform`}>
                                {stat.icon}
                            </div>
                            <span className={`text-[10px] font-bold ${stat.trend.startsWith('+') ? 'text-green-400' : stat.trend === 'Stable' ? 'text-primary' : 'text-red-400'}`}>
                                {stat.trend}
                            </span>
                        </div>
                        <p className="text-[10px] font-bold text-[#64748B] uppercase tracking-widest mb-1">{stat.label}</p>
                        <p className="text-2xl font-bold text-white">{stat.value}</p>
                    </div>
                ))}
            </div>

            {/* Main Chart Area */}
            <div className="bg-[#1A1A24] border border-white/5 rounded-3xl p-5 lg:p-8 mb-24 lg:mb-10 min-h-[320px] lg:min-h-[400px] flex flex-col">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 lg:mb-10">
                    <div>
                        <h3 className="text-lg lg:text-xl font-bold text-white mb-0.5 lg:mb-1">Performance Spectrum</h3>
                        <p className="text-[10px] text-[#94A3B8] font-bold opacity-70 uppercase tracking-widest">Real-time system telemetry</p>
                    </div>
                    <div className="flex gap-4">
                        <div className="flex items-center gap-2">
                            <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-primary"></div>
                            <span className="text-[9px] sm:text-[10px] font-bold text-white uppercase opacity-60">Primary</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-blue-400"></div>
                            <span className="text-[9px] sm:text-[10px] font-bold text-white uppercase opacity-60">Secondary</span>
                        </div>
                    </div>
                </div>

                {/* Visual Placeholder for Chart */}
                <div className="flex-1 w-full relative">
                    <div className="absolute inset-0 flex items-center justify-center">
                        <BarChart3 size={48} className="lg:size-64 text-primary/10 animate-pulse" />
                    </div>
                    {/* Simulated Chart Bars */}
                    <div className="absolute bottom-0 left-0 right-0 h-40 lg:h-48 flex items-end justify-around px-2 lg:px-10 gap-1 lg:gap-4 opacity-40">
                        {[40, 70, 50, 90, 60, 80, 45, 75, 55, 95, 65, 85].map((h, i) => (
                            <div key={i} className={`flex-1 bg-gradient-to-t from-primary/40 to-primary rounded-t-sm lg:rounded-t-lg transition-all hover:opacity-100 ${i > 6 ? 'hidden sm:block' : ''}`} style={{ height: `${h}%` }}></div>
                        ))}
                    </div>
                </div>
            </div>
        </DashboardPage>
    );
}
