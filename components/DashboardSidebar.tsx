'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
    LayoutDashboard,
    Briefcase,
    FileText,
    Users,
    Settings,
    LogOut,
    User,
    Search,
    Bell,
    TrendingUp,
    MessageSquare,
    CreditCard
} from 'lucide-react';
import Logo from './Logo';
import { useAuth } from '@/contexts/AuthContext';
import Image from 'next/image';

export default function DashboardSidebar() {
    const pathname = usePathname();
    const { logout, user } = useAuth();

    const menuItems = [
        { icon: <LayoutDashboard size={20} />, label: 'Dashboard', href: '/dashboard' },
        { icon: <Briefcase size={20} />, label: 'Projects', href: '/dashboard/projects', badge: '5' },
        { icon: <TrendingUp size={20} />, label: 'Analytics', href: '/dashboard/analytics' },
        { icon: <MessageSquare size={20} />, label: 'Messages', href: '/dashboard/messages', unread: true },
        { icon: <FileText size={20} />, label: 'Documents', href: '/dashboard/documents' },
        { icon: <CreditCard size={20} />, label: 'Invoices', href: '/dashboard/invoices', pending: true },
    ];

    const systemItems = [
        { icon: <Settings size={20} />, label: 'Settings', href: '/dashboard/settings' },
        { icon: <User size={20} />, label: 'Profile', href: '/dashboard/profile' },
    ];

    return (
        <>
            {/* Desktop Sidebar */}
            <aside className="fixed left-0 top-0 h-full w-[240px] bg-[#1A1A24] border-r border-white/5 z-50 hidden lg:flex flex-col">
                {/* Logo Section */}
                <div className="h-16 flex items-center px-6 border-b border-white/5">
                    <Link href="/dashboard" className="flex items-center gap-3 group">
                        <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center shadow-[0_0_15px_rgba(79,70,229,0.3)] group-hover:scale-110 transition-transform">
                            <Logo showText={false} className="scale-75" />
                        </div>
                        <span className="font-bold text-sm tracking-tight text-white group-hover:text-primary transition-colors">DevPortal Pro</span>
                    </Link>
                </div>

                {/* Main Navigation */}
                <nav className="flex-1 px-3 py-6 space-y-1">
                    {menuItems.map((item, index) => {
                        const isActive = pathname === item.href;
                        return (
                            <Link
                                key={index}
                                href={item.href}
                                className={`flex items-center justify-between px-4 py-2.5 rounded-lg transition-all duration-200 group ${isActive
                                    ? 'bg-[#4F46E5] text-white font-bold'
                                    : 'text-[#94A3B8] hover:bg-white/5 hover:text-white'
                                    }`}
                            >
                                <div className="flex items-center gap-3">
                                    <span className={`${isActive ? 'text-white' : 'group-hover:text-white'} transition-colors`}>
                                        {item.icon}
                                    </span>
                                    <span className="text-sm">{item.label}</span>
                                </div>
                                {item.badge && (
                                    <span className={`text-[10px] px-1.5 py-0.5 rounded-full ${isActive ? 'bg-white/20' : 'bg-white/10'}`}>
                                        {item.badge}
                                    </span>
                                )}
                                {item.unread && (
                                    <div className="w-2 h-2 bg-red-500 rounded-full shadow-[0_0_8px_rgba(239,68,68,0.5)]"></div>
                                )}
                                {item.pending && (
                                    <div className="w-2 h-2 bg-yellow-500 rounded-full shadow-[0_0_8px_rgba(234,179,8,0.5)]"></div>
                                )}
                            </Link>
                        );
                    })}
                    <div className="h-[1px] bg-white/5 my-4 mx-4"></div>
                    {systemItems.map((item, index) => {
                        const isActive = pathname === item.href;
                        return (
                            <Link
                                key={index}
                                href={item.href}
                                className={`flex items-center gap-3 px-4 py-2.5 rounded-lg transition-all duration-200 group ${isActive
                                    ? 'bg-[#4F46E5] text-white font-bold'
                                    : 'text-[#94A3B8] hover:bg-white/5 hover:text-white'
                                    }`}
                            >
                                <span className={`${isActive ? 'text-white' : 'group-hover:text-white'} transition-colors`}>{item.icon}</span>
                                <span className="text-sm">{item.label}</span>
                            </Link>
                        );
                    })}
                </nav>

                {/* Mascot Companion Section */}
                <div className="px-4 py-4 mt-auto">
                    <div className="relative group bg-[#1A1A24]/40 border border-white/5 rounded-2xl p-4 transition-all hover:bg-[#1A1A24]/80 hover:border-primary/20">
                        <div className="absolute -top-12 left-1/2 -translate-x-1/2 w-48 opacity-0 group-hover:opacity-100 transition-all duration-500 pointer-events-none mb-2">
                            <div className="bg-white dark:bg-slate-800 p-3 rounded-2xl shadow-2xl border border-primary/20 relative">
                                <p className="text-[10px] font-bold text-slate-700 dark:text-slate-200 leading-tight text-center">
                                    Need help with your mission, {user?.displayName?.split(' ')[0] || 'Agent'}?
                                </p>
                                <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-white dark:bg-slate-800 border-r border-b border-primary/20 rotate-45"></div>
                            </div>
                        </div>

                        <div className="flex items-center gap-4">
                            <div className="relative w-12 h-12 flex-shrink-0 animate-float">
                                <div className="absolute inset-0 bg-primary/20 rounded-full blur-xl animate-pulse"></div>
                                <Image
                                    src="/mascot.png"
                                    alt="Gravity"
                                    width={48}
                                    height={48}
                                    className="w-full h-full object-contain relative z-10"
                                />
                            </div>
                            <div className="flex-1 min-w-0">
                                <p className="text-[10px] font-black text-primary uppercase tracking-widest mb-0.5">Gravity AI</p>
                                <p className="text-[9px] text-[#94A3B8] font-bold uppercase truncate">Systems Online</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* User Profile Footer */}
                <div className="h-[72px] px-4 border-t border-white/5 flex items-center gap-3 hover:bg-white/5 transition-colors cursor-pointer group">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#4F46E5] to-[#818CF8] flex items-center justify-center text-white font-bold text-sm ring-2 ring-white/5 shadow-lg group-hover:scale-105 transition-transform">
                        {user?.displayName?.charAt(0) || 'U'}
                    </div>
                    <div className="flex-1 min-w-0">
                        <p className="text-xs font-bold text-white truncate">{user?.displayName || 'John Doe'}</p>
                        <p className="text-[10px] text-[#94A3B8] font-medium uppercase tracking-wider">Pro Plan</p>
                    </div>
                    <button onClick={() => logout()} className="text-[#94A3B8] hover:text-red-400 transition-colors">
                        <LogOut size={16} />
                    </button>
                </div>
            </aside>

            {/* Mobile Bottom Navigation Bar */}
            <div className="fixed bottom-0 left-0 right-0 z-50 lg:hidden bg-[#1A1A24]/95 backdrop-blur-xl border-t border-white/5">
                <nav className="flex items-center justify-around h-16 px-4">
                    {menuItems.slice(0, 5).map((item, index) => {
                        const isActive = pathname === item.href;
                        return (
                            <Link
                                key={index}
                                href={item.href}
                                className={`flex flex-col items-center justify-center gap-1 transition-all duration-300 ${isActive ? 'text-primary' : 'text-[#94A3B8]'
                                    }`}
                            >
                                <div className={`${isActive ? 'scale-110 -translate-y-1' : ''} transition-all`}>
                                    {item.icon}
                                </div>
                                <span className="text-[9px] font-bold uppercase tracking-tighter">{item.label}</span>
                            </Link>
                        );
                    })}
                </nav>
            </div>
        </>
    );
}
