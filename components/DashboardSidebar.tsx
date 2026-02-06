'use client';

import { useState } from 'react';
import Link from 'next/link';
import {
    LayoutDashboard,
    Briefcase,
    FileText,
    Users,
    Settings,
    HelpCircle,
    ChevronLeft,
    ChevronRight,
    Search,
    Bell
} from 'lucide-react';

export default function DashboardSidebar() {
    const [isCollapsed, setIsCollapsed] = useState(false);

    const menuItems = [
        { icon: <LayoutDashboard size={20} />, label: 'Overview', href: '/dashboard', active: true },
        { icon: <Briefcase size={20} />, label: 'Projects', href: '/dashboard/projects' },
        { icon: <FileText size={20} />, label: 'Invoices', href: '/dashboard/invoices' },
        { icon: <Users size={20} />, label: 'Team', href: '/dashboard/team' },
    ];

    const bottomItems = [
        { icon: <Settings size={20} />, label: 'Settings', href: '/dashboard/settings' },
        { icon: <HelpCircle size={20} />, label: 'Support', href: '/dashboard/support' },
    ];

    return (
        <aside className={`h-screen bg-card border-r border-border flex flex-col transition-all duration-300 ${isCollapsed ? 'w-20' : 'w-64'} relative z-30`}>
            {/* Logo Section */}
            <div className="p-6 flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center shrink-0">
                    <span className="text-white font-bold text-xl">D</span>
                </div>
                {!isCollapsed && (
                    <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/70 tracking-tight">
                        DevPortal
                    </span>
                )}
            </div>

            {/* Collapse Toggle */}
            <button
                onClick={() => setIsCollapsed(!isCollapsed)}
                className="absolute -right-3 top-20 w-6 h-6 rounded-full bg-background border border-border flex items-center justify-center text-muted-foreground hover:text-primary transition-colors shadow-sm"
            >
                {isCollapsed ? <ChevronRight size={14} /> : <ChevronLeft size={14} />}
            </button>

            {/* Search Bar - Hidden on collapse */}
            {!isCollapsed && (
                <div className="px-4 mb-6">
                    <div className="relative group">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground group-focus-within:text-primary transition-colors" size={16} />
                        <input
                            type="text"
                            placeholder="Search..."
                            className="w-full bg-secondary/50 border border-transparent focus:border-primary/20 rounded-xl py-2 pl-10 pr-4 text-sm outline-none transition-all"
                        />
                    </div>
                </div>
            )}

            {/* Main Navigation */}
            <nav className="flex-1 px-4 space-y-2">
                {menuItems.map((item, index) => (
                    <Link
                        key={index}
                        href={item.href}
                        className={`flex items-center gap-3 px-3 py-2.5 rounded-xl transition-all group ${item.active
                                ? 'bg-primary/10 text-primary'
                                : 'text-muted-foreground hover:bg-secondary hover:text-foreground'
                            }`}
                    >
                        <span className={`${item.active ? 'text-primary' : 'group-hover:text-primary'} transition-colors`}>
                            {item.icon}
                        </span>
                        {!isCollapsed && <span className="font-medium text-sm">{item.label}</span>}
                        {item.active && !isCollapsed && <div className="ml-auto w-1 h-4 bg-primary rounded-full"></div>}
                    </Link>
                ))}
            </nav>

            {/* Bottom Section */}
            <div className="p-4 border-t border-border space-y-2">
                {bottomItems.map((item, index) => (
                    <Link
                        key={index}
                        href={item.href}
                        className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-muted-foreground hover:bg-secondary hover:text-foreground transition-all group"
                    >
                        <span className="group-hover:text-primary transition-colors">
                            {item.icon}
                        </span>
                        {!isCollapsed && <span className="font-medium text-sm">{item.label}</span>}
                    </Link>
                ))}

                {/* Account Section */}
                <div className={`mt-4 pt-4 border-t border-border flex items-center gap-3 ${isCollapsed ? 'justify-center' : ''}`}>
                    <div className="relative">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-blue-600 flex items-center justify-center text-white font-bold ring-2 ring-background">
                            JD
                        </div>
                        <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-green-500 rounded-full border-2 border-card"></div>
                    </div>
                    {!isCollapsed && (
                        <div className="flex flex-col min-w-0">
                            <span className="text-sm font-bold truncate">John Doe</span>
                            <span className="text-xs text-muted-foreground truncate italic">Premium Plan</span>
                        </div>
                    )}
                </div>
            </div>
        </aside>
    );
}
