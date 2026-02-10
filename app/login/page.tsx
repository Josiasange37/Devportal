'use client';

import { Suspense, useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import Image from 'next/image';
import LoginForm from '@/components/LoginForm';
import { AnimateOnScroll } from '@/hooks/useScrollAnimation';

function LoginContent() {
    const searchParams = useSearchParams();
    const [step, setStep] = useState(1);
    const [name, setName] = useState('');
    const [isLogin, setIsLogin] = useState(false);

    useEffect(() => {
        const mode = searchParams.get('mode');
        if (mode === 'login') {
            setIsLogin(true);
        } else {
            setIsLogin(false);
        }
    }, [searchParams]);

    const handleStepChange = (newStep: number, newName: string) => {
        setStep(newStep);
        if (newName) setName(newName);
        if (newStep > 1) setIsLogin(false);
    };

    return (
        <main className="min-h-screen grid lg:grid-cols-2 bg-background overflow-hidden relative">

            {/* LEFT SIDE: Editorial Visual (Desktop) */}
            <div className="hidden lg:flex flex-col justify-between p-12 lg:p-16 xl:p-20 bg-[#0A0A0A] relative overflow-hidden">
                {/* Background Texture */}
                {/* Background Image */}
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/login-bg.png"
                        alt="Background"
                        fill
                        className="object-cover opacity-60 mix-blend-overlay"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
                </div>

                {/* Gradient Accents */}
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2" />
                <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/2" />

                <div className="relative z-10">
                    <AnimateOnScroll animation="fade-down" duration="800ms">
                        <div className="flex items-center gap-2 mb-12">
                            <div className="w-8 h-8 bg-white text-black rounded-lg flex items-center justify-center font-bold font-sans">D</div>
                            <span className="text-white font-bold tracking-tight">DevPortal Pro</span>
                        </div>
                    </AnimateOnScroll>

                    <AnimateOnScroll animation="fade-right" duration="1000ms" delay="200ms">
                        <h1 className="text-5xl xl:text-7xl font-bold text-white leading-tight tracking-tight mb-8">
                            Start your <br />
                            <span className="font-script text-primary capitalize">Journey</span> <br />
                            with us.
                        </h1>
                        <p className="text-white/60 text-lg max-w-md leading-relaxed">
                            Join 10,000+ top-tier freelancers managing their business with less stress and more profit.
                        </p>
                    </AnimateOnScroll>
                </div>

                <div className="relative z-10 mt-auto">
                    <AnimateOnScroll animation="fade-up" duration="1000ms" delay="400ms">
                        <div className="flex items-center gap-4 mb-4">
                            {['/avatars/user1.png', '/avatars/user2.png', '/avatars/user3.png', '/avatars/user4.png'].map((src, i) => (
                                <div key={i} className="w-10 h-10 rounded-full border-2 border-[#0A0A0A] bg-white/10 overflow-hidden relative">
                                    <Image src={src} alt={`User ${i + 1}`} fill className="object-cover" />
                                </div>
                            ))}
                        </div>
                        <div className="flex items-center gap-2 text-white/40 text-sm font-medium uppercase tracking-widest">
                            <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                            Trusted by industry leaders
                        </div>
                    </AnimateOnScroll>
                </div>
            </div>

            {/* RIGHT SIDE: Form */}
            <div className="flex items-center justify-center p-6 sm:p-12 lg:p-16 relative">
                {/* Mobile Background Blob (only visible on small screens) */}
                <div className="lg:hidden absolute top-[-10%] right-[-10%] w-[300px] h-[300px] bg-primary/10 rounded-full blur-[80px]" />

                <div className="w-full max-w-md relative z-10">
                    <AnimateOnScroll animation="fade-in" duration="800ms" delay="100ms">
                        <LoginForm
                            onStepChange={handleStepChange}
                            onModeToggle={(login) => setIsLogin(login)}
                            isLogin={isLogin}
                        />
                    </AnimateOnScroll>

                    {/* Footer links */}
                    <AnimateOnScroll animation="fade-up" duration="800ms" delay="300ms">
                        <div className="mt-8 text-center flex items-center justify-center gap-6 text-xs text-muted-foreground">
                            <a href="#" className="hover:text-foreground transition-colors">Privacy Policy</a>
                            <span className="w-1 h-1 rounded-full bg-border" />
                            <a href="#" className="hover:text-foreground transition-colors">Terms of Service</a>
                        </div>
                    </AnimateOnScroll>
                </div>
            </div>

        </main>
    );
}

export default function LoginPage() {
    return (
        <Suspense fallback={<div className="min-h-screen flex items-center justify-center bg-background text-foreground uppercase font-bold tracking-widest animate-pulse">Loading...</div>}>
            <LoginContent />
        </Suspense>
    );
}
