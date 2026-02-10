'use client';

import {
    Plus,
    Search,
    Filter,
    MoreVertical,
    Download,
    Send,
    Clock,
    CheckCircle2,
    AlertCircle,
    Calendar,
    ChevronDown,
    FileText,
    DollarSign,
    ArrowUpRight,
    ArrowDownLeft
} from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';
import ThemeToggle from '@/components/ThemeToggle';
import { Bell } from 'lucide-react';

const invoices = [
    { id: 'INV-001', client: 'Aventis Tech', amount: '$4,250.00', status: 'Paid', date: 'Feb 10, 2026', due: 'Feb 24, 2026' },
    { id: 'INV-002', client: 'HealthSync', amount: '$1,800.00', status: 'Pending', date: 'Feb 8, 2026', due: 'Feb 22, 2026' },
    { id: 'INV-003', client: 'Solaris Systems', amount: '$5,000.00', status: 'Overdue', date: 'Jan 25, 2026', due: 'Feb 5, 2026' },
    { id: 'INV-004', client: 'Vortex Data', amount: '$2,100.00', status: 'Draft', date: 'Feb 12, 2026', due: 'Feb 26, 2026' },
    { id: 'INV-005', client: 'Nexus AI', amount: '$3,400.00', status: 'Paid', date: 'Feb 5, 2026', due: 'Feb 19, 2026' },
];

export default function InvoicesPage() {
    return (
        <div className="animate-in fade-in duration-1000">
            {/* Page Title Section */}
            <div className="mb-6 lg:mb-10">
                <div className="flex items-center gap-3 mb-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse shadow-[0_0_10px_rgba(79,70,229,0.5)]"></div>
                    <span className="text-[9px] lg:text-[10px] font-bold text-primary uppercase tracking-[0.2em]">Operational Status: Operational</span>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div>
                        <h1 className="text-2xl lg:text-3xl font-bold text-white tracking-tight mb-1 lg:mb-2">Financials</h1>
                        <p className="text-[#94A3B8] text-xs lg:text-sm">Managing revenue tracking and client billing.</p>
                    </div>
                    <button className="flex items-center justify-center gap-2 px-5 py-3 bg-primary text-primary-foreground rounded-2xl font-bold text-xs lg:text-sm shadow-xl shadow-primary/20 hover:shadow-primary/40 sm:hover:-translate-y-1 transition-all w-full sm:w-auto">
                        <Plus size={16} className="lg:size-[18px]" />
                        Create Invoice
                    </button>
                </div>
            </div>

            {/* Quick Metrics */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
                {[
                    { label: 'Unpaid Balance', value: '$7,250.00', icon: <ArrowUpRight size={20} className="text-red-400" />, trend: '+12% from last month' },
                    { label: 'Total Revenue', value: '$45,231.89', icon: <DollarSign size={20} className="text-primary" />, trend: 'Healthy growth' },
                    { label: 'Paid This Month', value: '$12,400.00', icon: <ArrowDownLeft size={20} className="text-green-400" />, trend: '+5% vs average' },
                ].map((stat, i) => (
                    <div key={i} className="bg-[#1A1A24] border border-white/5 p-6 rounded-2xl group hover:border-primary/20 transition-all">
                        <div className="flex items-center justify-between mb-4">
                            <span className="text-[10px] text-[#64748B] font-bold uppercase tracking-[0.2em]">{stat.label}</span>
                            <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center">
                                {stat.icon}
                            </div>
                        </div>
                        <h2 className="text-2xl font-bold text-white mb-1">{stat.value}</h2>
                        <p className="text-[10px] text-[#94A3B8] font-medium">{stat.trend}</p>
                    </div>
                ))}
            </div>

            {/* Sub Header & Filters */}
            <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-8 bg-[#1A1A24] border border-white/5 p-4 rounded-2xl">
                <div className="flex items-center gap-3 w-full md:w-auto">
                    <div className="flex-1 md:w-80 relative group">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-[#64748B] size-4 group-focus-within:text-primary transition-colors" />
                        <input
                            type="text"
                            placeholder="Find an invoice..."
                            className="w-full pl-11 pr-4 py-2.5 bg-white/5 border border-white/5 rounded-xl outline-none focus:border-primary/50 transition-all text-sm font-medium text-white placeholder:text-[#64748B]"
                        />
                    </div>
                    <button className="p-2.5 bg-white/5 border border-white/5 rounded-xl hover:bg-white/10 transition-all group">
                        <Filter size={18} className="text-[#94A3B8] group-hover:text-white" />
                    </button>
                </div>
            </div>

            {/* Invoices List */}
            <div className="bg-[#1A1A24] border border-white/5 rounded-2xl overflow-hidden mb-24 lg:mb-12">
                <div className="overflow-x-auto">
                    <table className="w-full text-left">
                        <thead>
                            <tr className="bg-white/20 text-[#64748B] text-[10px] font-bold uppercase tracking-widest border-b border-white/5">
                                <th className="px-6 py-4">Invoice ID</th>
                                <th className="px-6 py-4">Client</th>
                                <th className="px-6 py-4">Amount</th>
                                <th className="px-6 py-4">Status</th>
                                <th className="px-6 py-4">Due Date</th>
                                <th className="px-6 py-4"></th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-white/5">
                            {invoices.map((inv) => (
                                <tr key={inv.id} className="group hover:bg-white/[0.02] transition-colors cursor-pointer">
                                    <td className="px-6 py-4">
                                        <span className="text-sm font-bold text-primary">{inv.id}</span>
                                    </td>
                                    <td className="px-6 py-4">
                                        <div>
                                            <p className="text-sm font-bold text-white">{inv.client}</p>
                                            <p className="text-[10px] text-[#94A3B8]">Created {inv.date}</p>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4">
                                        <span className="text-sm font-bold text-white">{inv.amount}</span>
                                    </td>
                                    <td className="px-6 py-4">
                                        <span className={`px-2.5 py-1 rounded-full text-[10px] font-bold border ${inv.status === 'Paid' ? 'bg-green-500/10 text-green-400 border-green-500/20' :
                                            inv.status === 'Overdue' ? 'bg-red-500/10 text-red-400 border-red-500/20' :
                                                inv.status === 'Pending' ? 'bg-orange-500/10 text-orange-400 border-orange-500/20' :
                                                    'bg-white/5 text-[#94A3B8] border-white/10'
                                            }`}>
                                            {inv.status}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4">
                                        <div className="flex items-center gap-2 text-[#94A3B8]">
                                            <Calendar size={14} />
                                            <span className="text-xs font-medium">{inv.due}</span>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 text-right">
                                        <div className="flex items-center justify-end gap-2">
                                            <button className="p-2 text-[#64748B] hover:text-white transition-colors">
                                                <Download size={16} />
                                            </button>
                                            <button className="p-2 text-[#64748B] hover:text-white transition-colors">
                                                <Send size={16} />
                                            </button>
                                            <button className="p-2 text-[#64748B] hover:text-white transition-colors">
                                                <MoreVertical size={18} />
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
