'use client';

import DashboardSidebar from '@/components/DashboardSidebar';
import DashboardStats from '@/components/DashboardStats';
import ProjectList from '@/components/ProjectList';
import { Bell, HelpCircle, Activity } from 'lucide-react';
import GravityMascot from '@/components/GravityMascot';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/contexts/AuthContext';
import { useEffect } from 'react';

export default function DashboardPage() {
    const { user, loading } = useAuth();
    const router = useRouter();

    useEffect(() => {
        if (!loading && !user) {
            router.push('/login');
        }
    }, [user, loading, router]);

    if (loading || !user) {
        return (
            <div className="min-h-screen bg-background flex flex-col items-center justify-center relative overflow-hidden">
                {/* iOS-style radial background glow */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] pointer-events-none"></div>

                <div className="relative z-10 flex flex-col items-center">
                    <div className="w-20 h-20 relative mb-8">
                        <div className="absolute inset-0 rounded-3xl bg-primary/20 animate-pulse"></div>
                        <Image
                            src="/logo.png"
                            alt="DevPortal Pro"
                            width={80}
                            height={80}
                            className="relative z-10 w-full h-full object-contain"
                        />
                    </div>

                    {/* Refined iOS Spinner */}
                    <div className="flex gap-1.5 mb-4">
                        {[0, 1, 2].map((i) => (
                            <div
                                key={i}
                                className="w-1.5 h-6 bg-primary rounded-full animate-bounce"
                                style={{ animationDelay: `${i * 0.1}s`, opacity: 0.3 + (i * 0.3) }}
                            ></div>
                        ))}
                    </div>

                    <p className="text-sm font-bold text-muted-foreground uppercase tracking-[0.2em] animate-pulse">
                        Securing Session
                    </p>
                </div>
            </div>
        );
    }

    const displayName = user.displayName || user.email?.split('@')[0] || 'Member';
    return (
        <div className="flex min-h-screen bg-background transition-colors duration-300 overflow-hidden">
            {/* Sidebar */}
            <DashboardSidebar />

            {/* Main Content Area */}
            <main className="flex-1 relative flex flex-col h-screen overflow-y-auto overflow-x-hidden">

                {/* Top Navbar */}
                <header className="h-16 border-b border-border bg-card/50 backdrop-blur-md flex items-center justify-between px-8 sticky top-0 z-20">
                    <div className="flex flex-col">
                        <h1 className="text-lg font-bold">Dashboard Overview</h1>
                        <p className="text-[10px] text-muted-foreground uppercase tracking-widest font-bold">Welcome back, John</p>
                    </div>

                    <div className="flex items-center gap-4">
                        <button className="p-2 rounded-full hover:bg-secondary transition-colors relative">
                            <Bell size={20} className="text-muted-foreground" />
                            <span className="absolute top-2 right-2 w-2 h-2 bg-primary rounded-full border-2 border-card"></span>
                        </button>
                        <button className="p-2 rounded-full hover:bg-secondary transition-colors">
                            <HelpCircle size={20} className="text-muted-foreground" />
                        </button>
                        <div className="h-8 w-[1px] bg-border mx-2"></div>
                        <button className="px-4 py-2 bg-primary text-primary-foreground rounded-xl text-sm font-bold shadow-lg shadow-primary/20 hover:shadow-primary/40 transition-all hover:-translate-y-0.5">
                            New Project
                        </button>
                    </div>
                </header>

                {/* Dashboard Content */}
                <div className="p-8 flex-1 space-y-8 max-w-7xl mx-auto w-full">

                    {/* Hero Stats */}
                    <DashboardStats />

                    {/* Main Grid: Projects & Activity */}
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {/* Projects Card */}
                        <div className="lg:col-span-2">
                            <ProjectList />
                        </div>

                        {/* Recent Activity Card */}
                        <div className="bg-card rounded-[2.5rem] border border-border p-8 shadow-sm">
                            <div className="flex items-center gap-3 mb-8">
                                <Activity className="text-primary" size={20} />
                                <h3 className="text-xl font-bold">Recent Activity</h3>
                            </div>
                            <div className="space-y-6">
                                {[
                                    { text: 'Invoice #124 paid by Aventis Tech', time: '10:24 AM', color: 'bg-green-500' },
                                    { text: 'New comment on E-commerce Redesign', time: '09:15 AM', color: 'bg-primary' },
                                    { text: 'Project Alpha 2 status changed to Active', time: 'Yesterday', color: 'bg-blue-500' },
                                    { text: 'Withdrawal of $1,200 processed', time: 'Yesterday', color: 'bg-orange-500' },
                                ].map((a, i) => (
                                    <div key={i} className="flex gap-4 group">
                                        <div className="relative">
                                            <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center relative z-10 transition-transform group-hover:scale-110">
                                                <div className={`w-2 h-2 ${a.color} rounded-full`}></div>
                                            </div>
                                            {i !== 3 && <div className="absolute top-8 left-1/2 -translate-x-1/2 w-0.5 h-full bg-border"></div>}
                                        </div>
                                        <div className="flex-1 pb-4">
                                            <p className="text-sm font-medium text-foreground group-hover:text-primary transition-colors cursor-default">{a.text}</p>
                                            <p className="text-[10px] text-muted-foreground uppercase font-bold mt-1 tracking-wider">{a.time}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <button className="w-full mt-6 py-3 border border-border rounded-xl text-xs font-bold uppercase tracking-widest text-muted-foreground hover:bg-secondary hover:text-foreground transition-all">
                                View Activity Log
                            </button>
                        </div>
                    </div>
                </div>

                {/* Persistent Mascot integration for Dashboard */}
                <div className="fixed bottom-8 right-8 z-40 scale-75 hover:scale-100 transition-transform origin-bottom-right group">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity absolute bottom-[120%] right-0">
                        <GravityMascot message={`Need any help navigating your new space, ${displayName}?`} />
                    </div>
                    <div className="w-20 h-20 rounded-full bg-card/80 backdrop-blur-xl border border-primary/20 flex items-center justify-center animate-bounce shadow-2xl cursor-pointer hover:border-primary/50 transition-colors relative overflow-hidden">
                        <Image
                            src="/mascot.png"
                            alt="Gravity"
                            width={56}
                            height={56}
                            className="w-14 h-14 object-contain"
                        />
                    </div>
                </div>
            </main>
        </div>
    );
}
