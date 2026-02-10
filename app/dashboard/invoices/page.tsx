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
        <div className="animate-in fade-in duration-700">
            {/* Page Header */}
            <header className="glass-premium squircle-md h-16 lg:h-20 px-4 lg:px-8 flex items-center justify-between mb-6 lg:mb-8 animate-in fade-in slide-in-from-top-6 duration-1000 ease-out">
                <div className="flex flex-col">
                    <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-primary rounded-full"></div>
                        <h1 className="text-lg lg:text-xl font-black tracking-tight">Financials</h1>
                    </div>
                    <p className="hidden xs:block text-[8px] lg:text-[10px] text-muted-foreground uppercase tracking-[0.2em] font-bold opacity-60">
                        Invoices & Revenue Tracking
                    </p>
                </div>

                <div className="flex items-center gap-2 lg:gap-3">
                    <ThemeToggle />
                    <button className="p-2.5 lg:p-3 glass-premium hover:bg-foreground/5 dark:hover:bg-white/10 rounded-2xl transition-all relative group shadow-none">
                        <Bell size={18} className="text-muted-foreground group-hover:text-primary lg:size-5" />
                        <span className="absolute top-2.5 right-2.5 lg:top-3 lg:right-3 w-2 h-2 bg-primary rounded-full ring-4 ring-background"></span>
                    </button>
                    <div className="hidden lg:block w-[1px] h-8 bg-border dark:bg-white/10 mx-2"></div>
                    <button className="flex items-center gap-2 px-4 lg:px-6 py-2.5 lg:py-3 bg-primary text-primary-foreground rounded-xl lg:rounded-2xl font-black text-xs lg:text-sm shadow-xl shadow-primary/20 hover:shadow-primary/40 hover:-translate-y-1 transition-all">
                        <Plus size={18} />
                        <span className="hidden lg:inline">Create Invoice</span>
                    </button>
                </div>
            </header>

            {/* Quick Stats Summary */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                {[
                    { label: 'Unpaid Balance', value: '$7,250.00', icon: <ArrowUpRight className="text-red-500" /> },
                    { label: 'Total Revenue (M)', value: '$45,231.89', icon: <DollarSign className="text-primary" /> },
                    { label: 'Paid This Month', value: '$12,400.00', icon: <ArrowDownLeft className="text-green-500" /> },
                ].map((stat, i) => (
                    <div key={i} className="glass-premium squircle-md p-6 flex items-center justify-between group">
                        <div>
                            <p className="text-[10px] text-muted-foreground font-black uppercase tracking-[0.2em] opacity-60 mb-1">{stat.label}</p>
                            <h2 className="text-2xl font-black group-hover:translate-x-1 transition-transform">{stat.value}</h2>
                        </div>
                        <div className="w-12 h-12 rounded-2xl bg-foreground/5 dark:bg-white/5 flex items-center justify-center">
                            {stat.icon}
                        </div>
                    </div>
                ))}
            </div>

            {/* Content Control Bar */}
            <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-8">
                <div className="flex items-center gap-2 w-full md:w-auto">
                    <div className="flex-1 md:w-72 relative group">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground size-4 group-focus-within:text-primary transition-colors" />
                        <input
                            type="text"
                            placeholder="Find invoices..."
                            className="w-full pl-11 pr-4 py-3 bg-foreground/5 dark:bg-white/5 border border-border dark:border-white/5 rounded-2xl outline-none focus:ring-2 focus:ring-primary/20 transition-all text-sm font-medium"
                        />
                    </div>
                    <button className="p-3 bg-foreground/5 dark:bg-white/5 border border-border dark:border-white/5 rounded-2xl hover:bg-foreground/10 transition-all">
                        <Filter size={20} className="text-muted-foreground" />
                    </button>
                </div>
            </div>

            {/* Invoice List (Desktop) / Cards (Mobile) */}
            <div className="space-y-4 pb-24 lg:pb-12">
                {/* Desktop Header */}
                <div className="hidden lg:grid grid-cols-6 gap-4 px-8 py-4 text-[10px] font-black text-muted-foreground uppercase tracking-[0.2em] opacity-40">
                    <div className="col-span-1">Invoice ID</div>
                    <div className="col-span-2">Client</div>
                    <div className="col-span-1">Amount</div>
                    <div className="col-span-1">Status</div>
                    <div className="col-span-1 text-right">Actions</div>
                </div>

                {invoices.map((inv, i) => (
                    <div
                        key={inv.id}
                        className="glass-premium squircle-md p-6 lg:px-8 lg:py-4 grid grid-cols-1 lg:grid-cols-6 gap-4 lg:items-center group hover:scale-[1.01] transition-all duration-500 animate-in fade-in slide-in-from-bottom-4"
                        style={{ animationDelay: `${i * 0.05 + 0.3}s` }}
                    >
                        <div className="col-span-1 flex items-center justify-between lg:block">
                            <span className="lg:hidden text-[10px] font-black text-muted-foreground uppercase opacity-40">Invoice ID</span>
                            <span className="font-bold text-sm lg:text-base text-primary">{inv.id}</span>
                        </div>

                        <div className="col-span-2 flex items-center justify-between lg:block">
                            <span className="lg:hidden text-[10px] font-black text-muted-foreground uppercase opacity-40">Client</span>
                            <div className="lg:flex lg:flex-col text-right lg:text-left">
                                <span className="font-bold text-sm lg:text-base">{inv.client}</span>
                                <span className="hidden lg:block text-[10px] text-muted-foreground font-bold opacity-60">Created {inv.date}</span>
                            </div>
                        </div>

                        <div className="col-span-1 flex items-center justify-between lg:block">
                            <span className="lg:hidden text-[10px] font-black text-muted-foreground uppercase opacity-40">Amount</span>
                            <span className="font-bold text-sm lg:text-base">{inv.amount}</span>
                        </div>

                        <div className="col-span-1 flex items-center justify-between lg:block">
                            <span className="lg:hidden text-[10px] font-black text-muted-foreground uppercase opacity-40">Status</span>
                            <span className={`px-3 py-1.5 rounded-full text-[9px] font-black uppercase tracking-widest border ${inv.status === 'Paid' ? 'bg-green-500/10 text-green-500 border-green-500/20' :
                                    inv.status === 'Overdue' ? 'bg-red-500/10 text-red-500 border-red-500/20' :
                                        inv.status === 'Pending' ? 'bg-orange-500/10 text-orange-500 border-orange-500/20' :
                                            'bg-foreground/5 text-muted-foreground border-border/50'
                                }`}>
                                {inv.status}
                            </span>
                        </div>

                        <div className="col-span-1 flex items-center justify-end gap-2 lg:gap-3 pt-4 lg:pt-0 border-t lg:border-none border-border/50">
                            <button className="p-2.5 bg-foreground/5 dark:bg-white/5 rounded-xl hover:bg-foreground/10 transition-colors">
                                <Download size={16} className="text-muted-foreground" />
                            </button>
                            <button className="p-2.5 bg-foreground/5 dark:bg-white/5 rounded-xl hover:bg-foreground/10 transition-colors">
                                <Send size={16} className="text-muted-foreground" />
                            </button>
                            <button className="p-2.5 text-muted-foreground hover:text-foreground">
                                <MoreVertical size={18} />
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
