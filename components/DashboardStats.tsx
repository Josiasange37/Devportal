'use client';

import { TrendingUp, TrendingDown, DollarSign, Briefcase, FileText, Wallet } from 'lucide-react';

const stats = [
    {
        label: 'Total Revenue',
        value: '$45,231.89',
        change: '+20.1%',
        isUp: true,
        icon: <DollarSign className="text-primary" size={20} />,
        bg: 'bg-primary/10'
    },
    {
        label: 'Active Projects',
        value: '12',
        change: '+2 newer',
        isUp: true,
        icon: <Briefcase className="text-green-500" size={20} />,
        bg: 'bg-green-500/10'
    },
    {
        label: 'Invoices Sent',
        value: '254',
        change: '+12%',
        isUp: true,
        icon: <FileText className="text-blue-500" size={20} />,
        bg: 'bg-blue-500/10'
    },
    {
        label: 'Pending Payout',
        value: '$2,405.00',
        change: '-2% slow',
        isUp: false,
        icon: <Wallet className="text-orange-500" size={20} />,
        bg: 'bg-orange-500/10'
    },
];

export default function DashboardStats() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, i) => (
                <div key={i} className="bg-card p-6 rounded-3xl border border-border shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all group relative overflow-hidden">
                    {/* Subtle Gradient Background on Hover */}
                    <div className={`absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity ${stat.bg}`}></div>

                    <div className="flex justify-between items-start mb-4 relative z-10">
                        <div className={`p-3 rounded-2xl ${stat.bg} transition-transform group-hover:scale-110`}>
                            {stat.icon}
                        </div>
                        <div className={`flex items-center gap-1 text-[10px] font-bold px-2 py-1 rounded-full ${stat.isUp ? 'bg-green-500/10 text-green-600' : 'bg-red-500/10 text-red-600'
                            }`}>
                            {stat.isUp ? <TrendingUp size={12} /> : <TrendingDown size={12} />}
                            {stat.change}
                        </div>
                    </div>

                    <div className="relative z-10">
                        <p className="text-xs font-bold text-muted-foreground uppercase tracking-wider mb-1">{stat.label}</p>
                        <h2 className="text-3xl font-bold group-hover:text-primary transition-colors tracking-tight">{stat.value}</h2>
                    </div>
                </div>
            ))}
        </div>
    );
}
