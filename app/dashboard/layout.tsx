'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/contexts/AuthContext';
import DashboardSidebar from '@/components/DashboardSidebar';
import TopBar from '@/components/TopBar';
import GravityMascot from '@/components/GravityMascot';
import Image from 'next/image';

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const { user, loading } = useAuth();
    const router = useRouter();
    const [showContent, setShowContent] = useState(false);
    const [mousePos, setMousePos] = useState({ x: 50, y: 50 });

    useEffect(() => {
        if (!loading && user) {
            const timer = setTimeout(() => setShowContent(true), 300);
            return () => clearTimeout(timer);
        }
    }, [user, loading]);

    useEffect(() => {
        if (!loading && !user) {
            router.push('/login');
        }
    }, [user, loading, router]);

    const handleMouseMove = (e: React.MouseEvent) => {
        const x = (e.clientX / window.innerWidth) * 100;
        const y = (e.clientY / window.innerHeight) * 100;
        setMousePos({ x, y });
    };

    if (loading || !user || !showContent) {
        return (
            <div className="min-h-screen bg-background flex flex-col items-center justify-center relative overflow-hidden">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[150px] pointer-events-none animate-pulse-slow"></div>
                <div className="relative z-10 flex flex-col items-center scale-90 animate-in fade-in zoom-in duration-1000">
                    <div className="w-24 h-24 relative mb-12">
                        <div className="absolute inset-0 rounded-[3rem] bg-primary/20 animate-ping duration-[3000ms]"></div>
                        <div className="absolute inset-0 rounded-[3rem] bg-primary/10 animate-pulse duration-[2000ms]"></div>
                        <Image
                            src="/logo.png"
                            alt="DevPortal Pro"
                            width={96}
                            height={96}
                            className="relative z-10 w-full h-full object-contain drop-shadow-[0_0_20px_rgba(0,102,255,0.3)]"
                        />
                    </div>
                    <div className="space-y-4 text-center">
                        <div className="flex justify-center gap-2">
                            {[0, 1, 2, 3].map((i) => (
                                <div
                                    key={i}
                                    className="w-1.5 h-6 bg-primary rounded-full animate-bounce"
                                    style={{ animationDelay: `${i * 0.1}s`, opacity: 0.2 + (i * 0.25) }}
                                ></div>
                            ))}
                        </div>
                        <p className="text-[10px] font-black text-primary uppercase tracking-[0.5em] opacity-80 animate-pulse">
                            Initiating Secure Session
                        </p>
                    </div>
                </div>
            </div>
        );
    }

    const displayName = user.displayName || user.email?.split('@')[0] || 'Member';

    return (
        <div
            onMouseMove={handleMouseMove}
            className="min-h-screen bg-[#0A0A0F] text-foreground relative flex overflow-hidden selection:bg-primary/30"
        >
            {/* Ambient Background Energy */}
            <div
                className="fixed inset-0 pointer-events-none opacity-20 dark:opacity-40 transition-all duration-1000 ease-out"
                style={{
                    background: `radial-gradient(600px circle at ${mousePos.x}% ${mousePos.y}%, rgba(0, 102, 255, 0.05), transparent), radial-gradient(400px circle at ${100 - mousePos.x}% ${100 - mousePos.y}%, rgba(59, 130, 246, 0.03), transparent)`
                }}
            />

            <DashboardSidebar />

            <div className="flex-1 flex flex-col min-w-0 h-screen overflow-hidden pl-0 lg:pl-[240px] transition-all duration-300">
                <TopBar />
                <main className="flex-1 overflow-y-auto relative z-10 scrollbar-hide pb-24 lg:pb-8">
                    <div className="max-w-[1200px] mx-auto px-4 sm:px-8 py-6 lg:py-8">
                        {children}
                    </div>

                    {/* iPhone 17 Fixed Contact Mascot */}
                    <div className="fixed bottom-10 right-10 z-40 group animate-in fade-in zoom-in duration-1000 delay-1000">
                        <div className="hidden sm:block opacity-0 group-hover:opacity-100 transition-all duration-500 absolute bottom-[120%] right-0 translate-y-2 group-hover:translate-y-0 pointer-events-none w-64">
                            <GravityMascot message={`Welcome back, ${displayName}! Any missions for today?`} />
                        </div>
                        <button className="w-16 h-16 lg:w-20 lg:h-20 rounded-[2.5rem] bg-[#1A1A24]/50 backdrop-blur-xl border border-white/5 flex items-center justify-center hover:scale-110 active:scale-95 transition-all duration-500 shadow-2xl relative overflow-hidden group">
                            <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                            <Image
                                src="/mascot.png"
                                alt="Gravity"
                                width={56}
                                height={56}
                                className="w-10 h-10 lg:w-14 lg:h-14 object-contain relative z-10"
                            />
                        </button>
                    </div>
                </main>
            </div>
        </div>
    );
}
