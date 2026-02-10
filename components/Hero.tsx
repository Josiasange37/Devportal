'use client';

import Link from 'next/link';
import Image from 'next/image';
import { AnimateOnScroll } from '@/hooks/useScrollAnimation';

export default function Hero() {
    return (
        <section className="relative pt-24 sm:pt-32 pb-16 sm:pb-20 min-h-screen flex items-center bg-background overflow-hidden transition-colors duration-300">
            <div className="max-w-[1400px] mx-auto px-4 sm:px-6 grid grid-cols-12 gap-y-12 lg:gap-8 w-full relative z-10">

                {/* LEFT COLUMN - Typography & Action */}
                <div className="col-span-12 lg:col-span-4 flex flex-col justify-center text-center lg:text-left relative z-20">
                    <AnimateOnScroll animation="fade-right" duration="900ms">
                        <h1 className="text-5xl sm:text-6xl md:text-8xl font-sans font-bold text-foreground leading-[0.9] tracking-tighter mb-6 uppercase text-balance">
                            Invest in <br className="hidden sm:block" />
                            your <span className="font-script text-primary font-normal block sm:inline lg:block mt-2 sm:mt-0 lg:mt-2 text-6xl sm:text-7xl md:text-9xl capitalize">Growth</span>
                        </h1>
                    </AnimateOnScroll>

                    <AnimateOnScroll animation="fade-up" delay="300ms" duration="800ms">
                        <div className="mt-8 sm:mt-12 lg:mt-20 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6">
                            <Link href="/login" className="w-16 h-16 rounded-full bg-primary flex items-center justify-center text-primary-foreground shadow-lg shadow-primary/30 hover:scale-110 active:scale-95 transition-all group shrink-0">
                                <svg className="w-6 h-6 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                            </Link>
                            <p className="text-sm sm:text-base text-muted-foreground max-w-[280px] lg:max-w-[150px] font-medium leading-relaxed sm:leading-snug">
                                Manage Your Freelance Business With Complete Confidence.
                            </p>
                        </div>
                    </AnimateOnScroll>
                </div>

                {/* CENTER COLUMN - Image & Card */}
                <div className="col-span-12 lg:col-span-5 relative flex items-end justify-center px-4 sm:px-0 order-first lg:order-none">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[300px] sm:max-w-[400px] aspect-square bg-primary/20 rounded-full blur-3xl opacity-50 -z-10 animate-pulse-slow"></div>

                    <AnimateOnScroll animation="fade-up" duration="1000ms">
                        <div className="relative z-10 w-full flex justify-center">
                            <Image
                                src="/student-portrait.png"
                                alt="Freelancer Portrait"
                                width={450}
                                height={600}
                                priority
                                className="w-full max-w-[300px] sm:max-w-[450px] h-auto object-cover relative z-10 drop-shadow-2xl mask-image-b"
                            />
                        </div>
                    </AnimateOnScroll>

                    <AnimateOnScroll animation="fade-left" delay="500ms" duration="800ms" className="absolute top-[20%] -right-20 z-20 hidden xl:block">
                        <div className="bg-card p-6 rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.1)] dark:shadow-none dark:border dark:border-border max-w-[280px] animate-float">
                            <div className="flex items-center gap-2 mb-4">
                                <span className="w-2 h-2 rounded-full bg-primary"></span>
                                <span className="text-[10px] uppercase tracking-wider text-primary font-bold bg-primary/10 px-2 py-1 rounded-full">New Platform</span>
                            </div>
                            <h3 className="text-2xl font-bold text-card-foreground leading-tight mb-8 text-balance">
                                THE FUTURE OF FREELANCE WORK
                            </h3>
                            <div className="bg-primary rounded-2xl p-6 text-primary-foreground relative overflow-hidden">
                                <div className="relative z-10">
                                    <div className="text-4xl font-bold mb-1">120+</div>
                                    <div className="text-sm opacity-80">Tools<br />Integrated</div>
                                </div>
                                <div className="absolute bottom-[-20px] right-[-20px] w-20 h-20 border border-white/20 rounded-full"></div>
                                <div className="absolute bottom-[-10px] right-[-10px] w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                                </div>
                            </div>
                        </div>
                    </AnimateOnScroll>
                </div>

                {/* RIGHT COLUMN - Stats & Community */}
                <div className="col-span-12 lg:col-span-3 flex flex-row lg:flex-col justify-around lg:justify-between items-center lg:items-start py-6 sm:py-10 border-t lg:border-t-0 lg:pl-10 relative">
                    <AnimateOnScroll animation="fade-left" delay="200ms">
                        <div className="relative text-center lg:text-left">
                            <div className="text-3xl sm:text-4xl font-bold text-foreground mb-1">10K+</div>
                            <p className="text-xs sm:text-sm text-muted-foreground max-w-[120px]">Active Freelancers Trusting Our Platform</p>
                            <div className="absolute top-20 left-2 w-[2px] h-[200px] bg-gradient-to-b from-primary to-transparent opacity-30 hidden lg:block">
                                <div className="w-2 h-2 bg-primary rounded-full absolute -left-[3px] top-0"></div>
                            </div>
                        </div>
                    </AnimateOnScroll>

                    <AnimateOnScroll animation="fade-left" delay="400ms">
                        <div className="flex flex-col items-center lg:items-start">
                            <div className="flex -space-x-2 sm:-space-x-3 mb-3">
                                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border-2 border-background bg-gray-300 overflow-hidden relative">
                                    <Image src="https://i.pravatar.cc/100?img=1" alt="User" width={40} height={40} />
                                </div>
                                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border-2 border-background bg-gray-400 overflow-hidden relative">
                                    <Image src="https://i.pravatar.cc/100?img=2" alt="User" width={40} height={40} />
                                </div>
                                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border-2 border-background bg-primary flex items-center justify-center text-primary-foreground text-[10px] sm:text-xs font-bold font-sans">+</div>
                            </div>
                            <p className="text-xs sm:text-sm text-muted-foreground">Join The Top 1%.</p>
                        </div>
                    </AnimateOnScroll>
                </div>

            </div>
        </section>
    );
}
