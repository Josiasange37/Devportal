'use client';

import {
    CreditCard,
    Download,
    Filter,
    Plus,
    Search,
    FileText,
    AlertCircle,
    Clock,
    CheckCircle2,
    DollarSign,
    Calendar,
    ArrowUpRight
} from 'lucide-react';
import DashboardPage from '@/components/DashboardPage';

export default function InvoicesPage() {
    return (
        <DashboardPage>
            {/* Page Header */}
            <div className="mb-6 lg:mb-10">
                <div className="flex items-center gap-3 mb-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse shadow-[0_0_10px_rgba(79,70,229,0.5)]"></div>
                    <span className="text-[9px] lg:text-[10px] font-bold text-primary uppercase tracking-[0.2em]">Operational Status: Financials Synchronized</span>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div>
                        <h1 className="text-2xl lg:text-3xl font-bold text-white tracking-tight mb-1 lg:mb-2">Invoices</h1>
                        <p className="text-[#94A3B8] text-xs lg:text-sm">Comprehensive ledger of all mission financial transactions.</p>
                    </div>
                    <button className="flex items-center justify-center gap-2 px-6 py-3 bg-primary hover:bg-primary/90 text-white rounded-xl text-xs font-bold uppercase tracking-widest shadow-xl shadow-primary/20 transition-all active:scale-95 group">
                        <Plus size={18} className="group-hover:rotate-90 transition-transform" />
                        <span>Issue Invoice</span>
                    </button>
                </div>
            </div>

            {/* Financial Stats Overivew */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 mb-8">
                {[
                    { label: 'Cumulative Revenue', value: '$42,500.00', icon: <DollarSign size={20} />, trend: '+14%', color: 'text-green-500' },
                    { label: 'Outstanding Dues', value: '$8,240.00', icon: <Clock size={20} />, trend: '3 Items', color: 'text-orange-500' },
                    { label: 'Total Invoices', value: '428', icon: <FileText size={20} />, trend: 'Stable', color: 'text-primary' },
                    { label: 'Projected Earnings', value: '$12,400.00', icon: <Calendar size={20} />, trend: 'Feb 2024', color: 'text-blue-500' },
                ].map((stat, i) => (
                    <div key={i} className="bg-[#1A1A24] border border-white/5 p-6 rounded-2xl group hover:border-primary/30 transition-all">
                        <div className="flex items-center justify-between mb-4">
                            <div className={`p-2.5 bg-white/5 rounded-xl ${stat.color}`}>
                                {stat.icon}
                            </div>
                            <span className="text-[10px] font-bold text-[#64748B] uppercase tracking-widest">{stat.trend}</span>
                        </div>
                        <p className="text-[10px] font-bold text-[#64748B] uppercase tracking-widest mb-1">{stat.label}</p>
                        <p className="text-xl lg:text-2xl font-bold text-white">{stat.value}</p>
                    </div>
                ))}
            </div>

            {/* Invoices List */}
            <div className="bg-[#1A1A24] border border-white/5 rounded-2xl overflow-hidden mb-24 lg:mb-10">
                <div className="p-5 border-b border-white/5 flex flex-col sm:flex-row justify-between items-center gap-4">
                    <h2 className="text-xs font-bold text-[#64748B] uppercase tracking-[0.2em] self-start sm:self-auto">Ledger Entries</h2>
                    <div className="flex w-full sm:w-auto gap-3">
                        <div className="relative flex-1 sm:w-64 group">
                            <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-[#64748B] group-focus-within:text-primary transition-colors" />
                            <input
                                type="text"
                                placeholder="Search ledger..."
                                className="w-full bg-white/5 border border-white/5 rounded-xl pl-10 pr-4 py-2 text-xs text-white outline-none focus:border-primary/50 transition-all"
                            />
                        </div>
                        <button className="p-2 bg-white/5 border border-white/5 rounded-xl text-[#94A3B8] hover:text-white transition-all">
                            <Filter size={18} />
                        </button>
                    </div>
                </div>

                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="border-b border-white/5 bg-white/5">
                                <th className="px-6 py-4 text-[10px] font-bold text-[#64748B] uppercase tracking-[0.2em]">Identifier</th>
                                <th className="px-6 py-4 text-[10px] font-bold text-[#64748B] uppercase tracking-[0.2em]">Client Entity</th>
                                <th className="px-6 py-4 text-[10px] font-bold text-[#64748B] uppercase tracking-[0.2em]">Quantity</th>
                                <th className="px-6 py-4 text-[10px] font-bold text-[#64748B] uppercase tracking-[0.2em]">Fulfillment</th>
                                <th className="px-6 py-4 text-[10px] font-bold text-[#64748B] uppercase tracking-[0.2em]">Issuance</th>
                                <th className="px-6 py-4 text-[10px] font-bold text-[#64748B] uppercase tracking-[0.2em] text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-white/5">
                            {[
                                { id: 'INV-4201', client: 'Cyberdyne Systems', amount: '$6,400.00', status: 'Paid', date: 'Feb 10, 2024' },
                                { id: 'INV-4202', client: 'Weyland-Yutani', amount: '$3,200.00', status: 'Pending', date: 'Feb 08, 2024' },
                                { id: 'INV-4198', client: 'Stark Industries', amount: '$12,500.00', status: 'Paid', date: 'Jan 28, 2024' },
                                { id: 'INV-4203', client: 'Tyrell Corp', amount: '$1,800.00', status: 'Overdue', date: 'Jan 15, 2024' },
                                { id: 'INV-4195', client: 'Oscorp', amount: '$4,500.00', status: 'Paid', date: 'Jan 10, 2024' },
                            ].map((inv, i) => (
                                <tr key={i} className="hover:bg-white/5 transition-colors group">
                                    <td className="px-6 py-4">
                                        <span className="text-[10px] font-black text-primary font-mono">{inv.id}</span>
                                    </td>
                                    <td className="px-6 py-4">
                                        <span className="text-xs font-bold text-white uppercase tracking-tight">{inv.client}</span>
                                    </td>
                                    <td className="px-6 py-4">
                                        <span className="text-xs font-bold text-white">{inv.amount}</span>
                                    </td>
                                    <td className="px-6 py-4">
                                        <div className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[9px] font-black uppercase tracking-widest ${inv.status === 'Paid' ? 'bg-green-500/10 text-green-500 border border-green-500/20' :
                                                inv.status === 'Overdue' ? 'bg-red-500/10 text-red-500 border border-red-500/20' :
                                                    'bg-orange-500/10 text-orange-500 border border-orange-500/20'
                                            }`}>
                                            {inv.status === 'Paid' ? <CheckCircle2 size={10} /> : inv.status === 'Overdue' ? <AlertCircle size={10} /> : <Clock size={10} />}
                                            {inv.status}
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 text-[10px] font-bold text-[#64748B] uppercase">{inv.date}</td>
                                    <td className="px-6 py-4 text-right">
                                        <button className="p-2 text-[#64748B] hover:text-white transition-colors group-hover:scale-110">
                                            <Download size={16} />
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </DashboardPage>
    );
}
