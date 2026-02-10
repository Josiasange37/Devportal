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
    HelpCircle,
    LogOut,
    MoreHorizontal,
    X,
    User,
    ChevronRight,
    Search,
    Bell
} from 'lucide-react';
import Logo from './Logo';
import { useAuth } from '@/contexts/AuthContext';

export default function DashboardSidebar() {
    const [isHovered, setIsHovered] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const pathname = usePathname();
    const { logout, user } = useAuth();

    const menuItems = [
        { icon: <LayoutDashboard size={22} />, label: 'Overview', href: '/dashboard' },
        { icon: <Briefcase size={22} />, label: 'Projects', href: '/dashboard/projects' },
        { icon: <FileText size={22} />, label: 'Invoices', href: '/dashboard/invoices' },
        { icon: <Users size={22} />, label: 'Team', href: '/dashboard/team' },
    ];

    const systemItems = [
        { icon: <Settings size={20} />, label: 'Settings', href: '/dashboard/settings', desc: 'Manage your workspace & preferences' },
        { icon: <HelpCircle size={20} />, label: 'Support', href: '/dashboard/support', desc: 'Get help or contact our crew' },
    ];

    return (
        <>
            {/* Desktop Sidebar */}
            <aside
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                className={`fixed left-6 top-1/2 -translate-y-1/2 z-50 hidden lg:block transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] ${isHovered ? 'w-64' : 'w-20'}`}
            >
                <div className="glass-premium squircle-md h-[85vh] flex flex-col py-8 overflow-hidden relative group">
                    <div className={`px-6 mb-10 transition-all duration-500 ${isHovered ? 'opacity-100' : 'opacity-100 flex justify-center'}`}>
                        <Logo showText={isHovered} />
                    </div>

                    <nav className="flex-1 px-4 space-y-4">
                        {menuItems.map((item, index) => {
                            const isActive = pathname === item.href;
                            return (
                                <Link
                                    key={index}
                                    href={item.href}
                                    className={`flex items-center gap-4 p-3.5 rounded-2xl transition-all duration-300 relative group/item ${isActive
                                        ? 'bg-primary text-primary-foreground shadow-lg shadow-primary/20 scale-105'
                                        : 'text-muted-foreground hover:bg-foreground/10 hover:text-foreground'
                                        }`}
                                >
                                    <span className="relative z-10 flex-shrink-0">
                                        {item.icon}
                                    </span>
                                    {isHovered && (
                                        <span className="font-bold text-sm tracking-tight whitespace-nowrap animate-in fade-in slide-in-from-left-2 duration-300">
                                            {item.label}
                                        </span>
                                    )}
                                    {isActive && !isHovered && (
                                        <div className="absolute -left-1 w-1.5 h-6 bg-primary rounded-full"></div>
                                    )}
                                </Link>
                            );
                        })}
                    </nav>

                    <div className="px-4 space-y-4">
                        {systemItems.map((item, index) => (
                            <Link
                                key={index}
                                href={item.href}
                                className="flex items-center gap-4 p-3.5 rounded-2xl text-muted-foreground hover:bg-foreground/10 hover:text-foreground transition-all duration-300 group/item"
                            >
                                <span className="flex-shrink-0">{item.icon}</span>
                                {isHovered && (
                                    <span className="font-bold text-sm tracking-tight animate-in fade-in slide-in-from-left-2 duration-300">
                                        {item.label}
                                    </span>
                                )}
                            </Link>
                        ))}

                        <div className="h-[1px] bg-border my-4 mx-2"></div>

                        <div className={`flex items-center gap-4 p-2 rounded-2xl transition-all duration-500 ${isHovered ? 'bg-foreground/5' : ''}`}>
                            <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-primary to-blue-400 flex items-center justify-center text-white font-bold text-sm shadow-inner flex-shrink-0 ring-2 ring-background">
                                {user?.displayName?.charAt(0) || 'U'}
                            </div>
                            {isHovered && (
                                <div className="flex flex-col min-w-0 flex-1 animate-in fade-in slide-in-from-left-2 duration-300">
                                    <span className="text-sm font-bold truncate leading-none mb-1 text-foreground">{user?.displayName || 'User'}</span>
                                    <button
                                        onClick={() => logout()}
                                        className="text-[10px] text-muted-foreground font-bold uppercase tracking-widest hover:text-red-400 text-left transition-colors flex items-center gap-1"
                                    >
                                        Sign Out <LogOut size={10} />
                                    </button>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </aside>

            {/* Mobile Bottom Dock */}
            <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 lg:hidden w-[95%] max-w-md">
                <div className="glass-premium rounded-[2.5rem] h-20 px-4 flex items-center justify-between relative shadow-2xl overflow-hidden border-white/20 dark:border-white/10">
                    {/* Active Indicator Background */}
                    <div
                        className="absolute h-14 bg-primary rounded-3xl transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] z-0"
                        style={{
                            width: 'calc(20% - 12px)',
                            display: menuItems.findIndex(i => pathname === i.href) === -1 ? 'none' : 'block',
                            left: `calc(10% + ${(menuItems.findIndex(i => pathname === i.href) || 0) * 20}% - (20% - 12px)/2)`
                        }}
                    ></div>

                    {menuItems.map((item, index) => {
                        const isActive = pathname === item.href;
                        return (
                            <Link
                                key={index}
                                href={item.href}
                                className={`relative z-10 flex flex-col items-center justify-center w-14 h-14 rounded-2xl transition-all duration-500 ${isActive ? 'text-primary-foreground' : 'text-muted-foreground hover:text-foreground'
                                    }`}
                            >
                                <div className={`${isActive ? 'scale-110 -translate-y-1' : 'scale-100'} transition-all duration-500`}>
                                    {item.icon}
                                </div>
                                {isActive && (
                                    <div className="w-1 h-1 bg-current rounded-full absolute bottom-2 animate-in fade-in zoom-in"></div>
                                )}
                            </Link>
                        );
                    })}

                    {/* More Trigger */}
                    <button
                        onClick={() => setIsMobileMenuOpen(true)}
                        className={`relative z-10 flex items-center justify-center w-14 h-14 rounded-2xl transition-all duration-500 ${isMobileMenuOpen ? 'text-primary bg-primary/10' : 'text-muted-foreground hover:text-foreground'}`}
                    >
                        <MoreHorizontal size={24} />
                    </button>
                </div>
            </div>

            {/* Mobile Action Center Overlay */}
            {isMobileMenuOpen && (
                <div className="fixed inset-0 z-[100] lg:hidden animate-in fade-in duration-300">
                    <div
                        className="absolute inset-0 bg-background/60 backdrop-blur-md"
                        onClick={() => setIsMobileMenuOpen(false)}
                    ></div>

                    <div className="absolute bottom-4 left-4 right-4 animate-in slide-in-from-bottom-8 duration-500">
                        <div className="glass-premium rounded-[3rem] p-8 border-white/20 dark:border-white/10 shadow-3xl">
                            <div className="flex items-center justify-between mb-8">
                                <div className="flex items-center gap-4">
                                    <div className="w-16 h-16 rounded-[1.5rem] bg-gradient-to-tr from-primary to-blue-400 flex items-center justify-center text-white font-black text-2xl shadow-xl ring-4 ring-background">
                                        {user?.displayName?.charAt(0) || 'U'}
                                    </div>
                                    <div>
                                        <h2 className="text-xl font-black tracking-tight">{user?.displayName || 'User Account'}</h2>
                                        <p className="text-xs text-muted-foreground font-bold opacity-60">System & Preferences</p>
                                    </div>
                                </div>
                                <button
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="p-3 bg-foreground/5 rounded-2xl hover:bg-foreground/10 transition-colors"
                                >
                                    <X size={20} />
                                </button>
                            </div>

                            <div className="grid grid-cols-1 gap-4 mb-8">
                                {systemItems.map((item, index) => (
                                    <Link
                                        key={index}
                                        href={item.href}
                                        onClick={() => setIsMobileMenuOpen(false)}
                                        className="flex items-center justify-between p-5 bg-foreground/5 hover:bg-foreground/10 rounded-3xl transition-all group"
                                    >
                                        <div className="flex items-center gap-4">
                                            <div className="w-12 h-12 rounded-2xl bg-background flex items-center justify-center text-primary shadow-sm border border-border group-hover:scale-110 transition-transform">
                                                {item.icon}
                                            </div>
                                            <div>
                                                <p className="font-bold text-sm tracking-tight">{item.label}</p>
                                                <p className="text-[10px] text-muted-foreground opacity-70">{item.desc}</p>
                                            </div>
                                        </div>
                                        <ChevronRight size={16} className="text-muted-foreground" />
                                    </Link>
                                ))}
                            </div>

                            <div className="space-y-4">
                                <button
                                    onClick={() => {
                                        setIsMobileMenuOpen(false);
                                        logout();
                                    }}
                                    className="w-full py-5 bg-red-500/10 hover:bg-red-500/20 text-red-500 rounded-3xl font-black text-xs uppercase tracking-[0.3em] flex items-center justify-center gap-3 transition-all border border-red-500/10"
                                >
                                    <LogOut size={16} /> Sign Out
                                </button>

                                <p className="text-[10px] text-center text-muted-foreground font-bold uppercase tracking-widest opacity-30 mt-4">
                                    DevPortal Pro v1.0.2 • Powered by Xyber Clan
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
