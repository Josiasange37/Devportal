'use client';

import { TrendingUp, TrendingDown, DollarSign, Briefcase, FileText, Wallet } from 'lucide-react';

const stats = [
    {
        label: 'Total Revenue',
        value: '$45,231.89',
        change: '+20.1%',
        isUp: true,
        icon: <DollarSign size={24} />,
        color: 'from-blue-500 to-primary',
        glow: 'bg-primary/20'
    },
    {
        label: 'Active Projects',
        value: '12',
        change: '+2 new',
        isUp: true,
        icon: <Briefcase size={24} />,
        color: 'from-green-400 to-green-600',
        glow: 'bg-green-500/20'
    },
    {
        label: 'Invoices Sent',
        value: '254',
        change: '+12%',
        isUp: true,
        icon: <FileText size={24} />,
        color: 'from-indigo-400 to-indigo-600',
        glow: 'bg-indigo-500/20'
    },
    {
        label: 'Pending Payout',
        value: '$2,405.00',
        change: '-2% slow',
        isUp: false,
        icon: <Wallet size={24} />,
        color: 'from-orange-400 to-orange-600',
        glow: 'bg-orange-500/20'
    },
];

export default function DashboardStats() {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 lg:gap-6">
            {stats.map((stat, i) => (
                <div
                    key={i}
                    className="bento-card p-5 lg:p-7 group relative overflow-hidden bg-foreground/[0.02] dark:bg-white/[0.02] border border-border/50 dark:border-white/5 rounded-3xl lg:rounded-[2.5rem]"
                >
                    {/* Ambient Glow */}
                    <div className={`absolute -top-24 -right-24 w-48 h-48 rounded-full blur-[80px] opacity-0 group-hover:opacity-40 transition-opacity duration-700 ${stat.glow}`}></div>

                    <div className="flex flex-col h-full relative z-10">
                        <div className="flex justify-between items-start mb-4 lg:mb-6">
                            <div className={`w-12 h-12 lg:w-14 lg:h-14 rounded-2xl bg-gradient-to-br ${stat.color} flex items-center justify-center text-white shadow-lg shadow-black/10 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3`}>
                                <div className="scale-90 lg:scale-100">
                                    {stat.icon}
                                </div>
                            </div>
                            <div className={`flex items-center gap-1 text-[9px] lg:text-[10px] font-bold px-2 lg:px-2.5 py-1 rounded-full backdrop-blur-md border ${stat.isUp
                                    ? 'bg-green-500/10 text-green-500 border-green-500/20'
                                    : 'bg-red-500/10 text-red-500 border-red-500/20'
                                }`}>
                                {stat.isUp ? <TrendingUp size={10} className="lg:size-3" /> : <TrendingDown size={10} className="lg:size-3" />}
                                {stat.change}
                            </div>
                        </div>

                        <div className="mt-auto">
                            <p className="text-[10px] lg:text-xs font-bold text-muted-foreground uppercase tracking-[0.15em] lg:tracking-[0.2em] mb-1 lg:mb-2 opacity-60 group-hover:opacity-100 transition-opacity">{stat.label}</p>
                            <h2 className="text-2xl lg:text-3xl font-extrabold tracking-tight group-hover:translate-x-1 transition-transform duration-500">
                                {stat.value}
                            </h2>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}
