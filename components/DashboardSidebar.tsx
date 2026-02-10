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
    LogOut
} from 'lucide-react';
import Logo from './Logo';
import { useAuth } from '@/contexts/AuthContext';

export default function DashboardSidebar() {
    const [isHovered, setIsHovered] = useState(false);
    const pathname = usePathname();
    const { logout, user } = useAuth();

    const menuItems = [
        { icon: <LayoutDashboard size={22} />, label: 'Overview', href: '/dashboard' },
        { icon: <Briefcase size={22} />, label: 'Projects', href: '/dashboard/projects' },
        { icon: <FileText size={22} />, label: 'Invoices', href: '/dashboard/invoices' },
        { icon: <Users size={22} />, label: 'Team', href: '/dashboard/team' },
    ];

    const bottomItems = [
        { icon: <Settings size={22} />, label: 'Settings', href: '/dashboard/settings' },
        { icon: <HelpCircle size={22} />, label: 'Support', href: '/dashboard/support' },
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
                    {/* Top Logo */}
                    <div className={`px-6 mb-10 transition-all duration-500 ${isHovered ? 'opacity-100' : 'opacity-100 flex justify-center'}`}>
                        <Logo showText={isHovered} />
                    </div>

                    {/* Main Nav */}
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

                    {/* Bottom Actions */}
                    <div className="px-4 space-y-4">
                        {bottomItems.map((item, index) => (
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

                        {/* Profile Toggle/Button */}
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
            <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 lg:hidden w-[90%] max-w-md">
                <div className="glass-premium rounded-[2.5rem] h-20 px-4 flex items-center justify-around relative shadow-2xl overflow-hidden">
                    {/* Active Indicator Background */}
                    <div
                        className="absolute h-14 bg-primary rounded-3xl transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] z-0"
                        style={{
                            width: 'calc(25% - 16px)',
                            left: `calc(12.5% + ${(menuItems.findIndex(i => pathname === i.href) || 0) * 25}% - (25% - 16px)/2)`
                        }}
                    ></div>

                    {menuItems.slice(0, 4).map((item, index) => {
                        const isActive = pathname === item.href;
                        return (
                            <Link
                                key={index}
                                href={item.href}
                                className={`relative z-10 flex flex-col items-center justify-center w-16 h-16 rounded-3xl transition-all duration-500 ${isActive ? 'text-primary-foreground' : 'text-muted-foreground hover:text-foreground'
                                    }`}
                            >
                                <div className={`${isActive ? 'scale-110' : 'scale-100'} transition-transform duration-500`}>
                                    {item.icon}
                                </div>
                                {isActive && (
                                    <span className="text-[10px] font-black uppercase tracking-widest mt-1 animate-in fade-in slide-in-from-bottom-2">
                                        {item.label}
                                    </span>
                                )}
                            </Link>
                        );
                    })}
                </div>
            </div>
        </>
    );
}
