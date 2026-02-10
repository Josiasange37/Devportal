'use client';

import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import Image from 'next/image';
import LoginForm from '@/components/LoginForm';
import GravityMascot from '@/components/GravityMascot';

export default function LoginPage() {
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
        // Reset login state if we are moving through steps (registration)
        if (newStep > 1) setIsLogin(false);
    };

    const getMascotMessage = () => {
        if (isLogin) return "Welcome back! Let's get you signed in.";
        switch (step) {
            case 1: return "Hi! I'm Gravity. What should we call you?";
            case 2: return `Nice to meet you, ${name}! Let's secure your account now.`;
            case 3: return "Final step: tell me the name of your awesome brand!";
            default: return "Welcome to Dev Portal!";
        }
    };

    return (
        <main className="min-h-screen bg-background relative flex items-center justify-center p-6 overflow-hidden transition-colors duration-300">
            {/* Background Blobs */}
            <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] animate-pulse-slow"></div>
            <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[120px] animate-pulse-slow"></div>

            {/* Mascot - Positioned in the middle for large screens */}
            <div className="hidden lg:block absolute left-[45%] top-1/2 -translate-x-1/2 -translate-y-[80px] z-20">
                <GravityMascot message={getMascotMessage()} />
            </div>

            {/* Mobile Mascot - Positioned above form */}
            <div className="lg:hidden absolute top-24 left-[40%] -translate-x-1/2 z-20 scale-75">
                <GravityMascot message={getMascotMessage()} />
            </div>

            <div className="relative z-10 w-full max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
                {/* Left Side: Illustration / Text */}
                <div className="hidden lg:flex flex-col">
                    <h1 className="text-7xl font-sans font-bold text-foreground leading-tight tracking-tighter mb-8 uppercase">
                        Start your <br />
                        <span className="text-primary">Journey</span> <br />
                        with us.
                    </h1>
                    <div className="flex items-center gap-6 mt-4">
                        <div className="flex -space-x-3">
                            <div className="w-10 h-10 rounded-full border-2 border-background bg-gray-300 overflow-hidden relative">
                                <Image src="https://i.pravatar.cc/100?img=1" alt="User" width={40} height={40} />
                            </div>
                            <div className="w-10 h-10 rounded-full border-2 border-background bg-gray-400 overflow-hidden relative">
                                <Image src="https://i.pravatar.cc/100?img=2" alt="User" width={40} height={40} />
                            </div>
                        </div>
                        <p className="text-sm text-muted-foreground max-w-[200px] font-medium leading-snug">
                            Join 10K+ freelancers managing their business with complete confidence.
                        </p>
                    </div>
                </div>

                {/* Right Side: The Form */}
                <div className="flex justify-center lg:justify-end mt-16 lg:mt-0">
                    <LoginForm
                        onStepChange={handleStepChange}
                        onModeToggle={(login) => setIsLogin(login)}
                        isLogin={isLogin}
                    />
                </div>
            </div>
        </main>
    );
}
