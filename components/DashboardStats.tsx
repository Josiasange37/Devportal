'use client';

import { TrendingUp, TrendingDown, DollarSign, Briefcase, FileText, Wallet } from 'lucide-react';

const stats = [
    {
        label: 'Active Projects',
        value: '12',
        change: '+2 this week',
        isUp: true,
        icon: <Briefcase size={22} />,
        color: 'from-[#4F46E5] to-[#818CF8]',
        glow: 'bg-[#4F46E5]/20'
    },
    {
        label: 'Weekly Commits',
        value: '148',
        change: '+24%',
        isUp: true,
        icon: <TrendingUp size={22} />,
        color: 'from-green-400 to-green-600',
        glow: 'bg-green-500/20'
    },
    {
        label: 'Pending Invoices',
        value: '$12,405',
        change: '3 overdue',
        isUp: false,
        icon: <FileText size={22} />,
        color: 'from-orange-400 to-orange-600',
        glow: 'bg-orange-500/20'
    },
    {
        label: 'Upcoming Meetings',
        value: '4',
        change: 'Next in 2h',
        isUp: true,
        icon: <Wallet size={22} />,
        color: 'from-blue-400 to-blue-600',
        glow: 'bg-blue-500/20'
    },
];

export default function DashboardStats() {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 lg:gap-6">
            {stats.map((stat, i) => (
                <div
                    key={i}
                    className="p-6 relative overflow-hidden bg-[#1A1A24] border border-white/5 rounded-2xl group hover:border-primary/50 transition-all duration-300"
                >
                    {/* Ambient Glow */}
                    <div className={`absolute -top-12 -right-12 w-24 h-24 rounded-full blur-[40px] opacity-0 group-hover:opacity-20 transition-opacity duration-700 ${stat.glow}`}></div>

                    <div className="flex flex-col h-full relative z-10">
                        <div className="flex justify-between items-start mb-4">
                            <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${stat.color} flex items-center justify-center text-white shadow-lg transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3`}>
                                {stat.icon}
                            </div>
                            <div className={`flex items-center gap-1 text-[10px] font-bold px-2 py-1 rounded-md border ${stat.isUp
                                ? 'bg-green-500/10 text-green-500 border-green-500/20'
                                : 'bg-red-500/10 text-red-500 border-red-500/20'
                                }`}>
                                {stat.isUp ? <TrendingUp size={10} /> : <TrendingDown size={10} />}
                                {stat.change}
                            </div>
                        </div>

                        <div>
                            <p className="text-[11px] font-medium text-[#94A3B8] uppercase tracking-wider mb-1">{stat.label}</p>
                            <h2 className="text-2xl font-bold tracking-tight text-white group-hover:translate-x-1 transition-transform duration-500">
                                {stat.value}
                            </h2>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}
