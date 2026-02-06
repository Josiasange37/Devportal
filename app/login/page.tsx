'use client';

import LoginForm from '@/components/LoginForm';

export default function LoginPage() {
    return (
        <main className="min-h-screen bg-background relative flex items-center justify-center p-6 overflow-hidden transition-colors duration-300">
            {/* Background Blobs (Hero Style) */}
            <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] animate-pulse-slow"></div>
            <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[120px] animate-pulse-slow"></div>

            <div className="relative z-10 w-full max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                {/* Left Side: Illustration / Text */}
                <div className="hidden lg:flex flex-col">
                    <h1 className="text-7xl font-sans font-bold text-foreground leading-tight tracking-tighter mb-8 uppercase">
                        Start your <br />
                        <span className="text-primary">Journey</span> <br />
                        with us.
                    </h1>
                    <div className="flex items-center gap-6 mt-4">
                        <div className="flex -space-x-3">
                            <div className="w-10 h-10 rounded-full border-2 border-background bg-gray-300 overflow-hidden">
                                <img src="https://i.pravatar.cc/100?img=1" alt="User" />
                            </div>
                            <div className="w-10 h-10 rounded-full border-2 border-background bg-gray-400 overflow-hidden">
                                <img src="https://i.pravatar.cc/100?img=2" alt="User" />
                            </div>
                        </div>
                        <p className="text-sm text-muted-foreground max-w-[200px] font-medium leading-snug">
                            Join 10K+ freelancers managing their business with complete confidence.
                        </p>
                    </div>
                </div>

                {/* Right Side: The Form */}
                <div className="flex justify-center">
                    <LoginForm />
                </div>
            </div>
        </main>
    );
}
