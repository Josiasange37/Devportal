'use client';

import Link from 'next/link';

export default function Hero() {
    return (
        <section className="relative pt-32 pb-20 min-h-screen flex items-center bg-background overflow-hidden transition-colors duration-300">
            <div className="max-w-[1400px] mx-auto px-6 grid grid-cols-12 gap-8 w-full relative z-10">

                {/* LEFT COLUMN - Typography & Action */}
                <div className="col-span-12 lg:col-span-4 flex flex-col justify-center relative z-20">
                    <h1 className="text-5xl md:text-8xl font-sans font-bold text-foreground leading-[0.9] tracking-tighter mb-4 uppercase">
                        Invest in <br />
                        your <span className="font-script text-primary font-normal block mt-2 text-7xl md:text-9xl capitalize">Growth</span>
                    </h1>

                    <div className="mt-20 flex items-center gap-6">
                        <Link href="/login" className="w-16 h-16 rounded-full bg-primary flex items-center justify-center text-primary-foreground shadow-lg shadow-primary/30 hover:scale-110 transition-transform group">
                            <svg className="w-6 h-6 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                        </Link>
                        <p className="text-sm text-muted-foreground max-w-[150px] font-medium leading-snug">
                            Manage Your Freelance Business With Complete Confidence.
                        </p>
                    </div>
                </div>

                {/* CENTER COLUMN - Image & Card */}
                <div className="col-span-12 lg:col-span-5 relative flex items-end justify-center">
                    {/* Background blob */}
                    <div className="absolute top-10 left-10 w-[400px] h-[400px] bg-primary/20 rounded-full blur-3xl opacity-50 -z-10 animate-pulse-slow"></div>

                    {/* Student Image */}
                    <div className="relative z-10">
                        {/* We use a container to mask the bottom if needed, but styling broadly similar to ref */}
                        <img
                            src="/student-portrait.png"
                            alt="Freelancer Portrait"
                            className="w-full max-w-[450px] h-auto object-cover relative z-10 drop-shadow-2xl mask-image-b"
                        />
                    </div>

                    {/* Floating Card */}
                    <div className="absolute top-[20%] -right-20 z-20 bg-card p-6 rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.1)] dark:shadow-none dark:border dark:border-border max-w-[280px] hidden xl:block animate-float">
                        <div className="flex items-center gap-2 mb-4">
                            <span className="w-2 h-2 rounded-full bg-primary"></span>
                            <span className="text-[10px] uppercase tracking-wider text-primary font-bold bg-primary/10 px-2 py-1 rounded-full">New Platform</span>
                        </div>
                        <h3 className="text-2xl font-bold text-card-foreground leading-tight mb-8">
                            THE FUTURE OF FREELANCE WORK
                        </h3>
                        <div className="bg-primary rounded-2xl p-6 text-primary-foreground relative overflow-hidden">
                            <div className="relative z-10">
                                <div className="text-4xl font-bold mb-1">120+</div>
                                <div className="text-sm opacity-80">Tools<br />Integrated</div>
                            </div>
                            {/* Decorative circles in card */}
                            <div className="absolute bottom-[-20px] right-[-20px] w-20 h-20 border border-white/20 rounded-full"></div>
                            <div className="absolute bottom-[-10px] right-[-10px] w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                            </div>
                        </div>
                    </div>
                </div>

                {/* RIGHT COLUMN - Stats & Community */}
                <div className="col-span-12 lg:col-span-3 flex flex-col justify-between py-10 pl-10 relative">

                    {/* Top Stats */}
                    <div className="relative">
                        <div className="text-4xl font-bold text-foreground mb-1">10K+</div>
                        <p className="text-sm text-muted-foreground max-w-[120px]">Active Freelancers Trusting Our Platform</p>

                        {/* Vertical Line */}
                        <div className="absolute top-20 left-2 w-[2px] h-[200px] bg-gradient-to-b from-primary to-transparent opacity-30">
                            <div className="w-2 h-2 bg-primary rounded-full absolute -left-[3px] top-0"></div>
                        </div>
                    </div>

                    {/* Bottom Avatars */}
                    <div className="mt-auto">
                        <div className="flex -space-x-3 mb-3">
                            <div className="w-10 h-10 rounded-full border-2 border-background bg-gray-300 overflow-hidden">
                                <img src="https://i.pravatar.cc/100?img=1" alt="User" />
                            </div>
                            <div className="w-10 h-10 rounded-full border-2 border-background bg-gray-400 overflow-hidden">
                                <img src="https://i.pravatar.cc/100?img=2" alt="User" />
                            </div>
                            <div className="w-10 h-10 rounded-full border-2 border-background bg-primary flex items-center justify-center text-primary-foreground text-xs font-bold font-sans">+</div>
                        </div>
                        <p className="text-sm text-muted-foreground">Join The Top 1% of Talent.</p>
                    </div>
                </div>

            </div>
        </section>
    );
}
