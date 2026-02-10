'use client';

import { AnimateOnScroll, staggerDelay } from '@/hooks/useScrollAnimation';

export default function Features() {
    return (
        <section id="features" className="py-24 sm:py-32 bg-background transition-colors duration-300 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">

                {/* Section Header — LEFT aligned (1st section) */}
                <AnimateOnScroll animation="fade-right" className="max-w-2xl mb-16 sm:mb-20">
                    <p className="text-xs font-bold text-primary tracking-[0.25em] uppercase mb-4">Capabilities</p>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground leading-tight tracking-tight mb-6">
                        Powerful tools for{' '}
                        <span className="font-script text-primary capitalize text-4xl sm:text-5xl md:text-6xl">modern</span>{' '}
                        work
                    </h2>
                    <p className="text-muted-foreground text-base sm:text-lg max-w-lg">
                        A centralized operating system designed exclusively for the freelance economy.
                    </p>
                </AnimateOnScroll>

                {/* Bento Grid */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-4 sm:gap-5">

                    {/* Card 1: Hero card — 7 cols */}
                    <AnimateOnScroll animation="fade-up" delay="0ms" className="md:col-span-7">
                        <div className="group relative overflow-hidden rounded-3xl sm:rounded-4xl bg-card border border-border p-8 sm:p-10 min-h-[320px] flex flex-col justify-between hover:border-primary/20 transition-all duration-500 h-full">
                            <div>
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-500">
                                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16l3.5-2 3.5 2 3.5-2 3.5 2z" /></svg>
                                    </div>
                                    <span className="text-xs font-bold text-muted-foreground tracking-wider uppercase">Client Portal</span>
                                </div>
                                <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-3 tracking-tight leading-tight">
                                    White-label dashboard<br />under your brand
                                </h3>
                                <p className="text-muted-foreground text-sm sm:text-base max-w-md leading-relaxed">
                                    Give clients a professional portal to track progress, share files, and manage feedback — all under your own branding.
                                </p>
                            </div>
                            <div className="mt-8 bg-background/60 border border-border/50 rounded-2xl p-4 sm:p-5">
                                <div className="flex items-center gap-3 mb-4 pb-3 border-b border-border/40">
                                    <div className="w-7 h-7 rounded-full bg-primary/10" />
                                    <div className="h-2 w-20 bg-muted rounded-full" />
                                    <div className="ml-auto h-2 w-12 bg-primary/20 rounded-full" />
                                </div>
                                <div className="grid grid-cols-3 gap-3">
                                    <div className="h-14 bg-muted/40 rounded-xl" />
                                    <div className="h-14 bg-muted/40 rounded-xl" />
                                    <div className="h-14 bg-primary/10 rounded-xl" />
                                </div>
                            </div>
                        </div>
                    </AnimateOnScroll>

                    {/* Card 2: Accent — 5 cols */}
                    <AnimateOnScroll animation="fade-up" delay="120ms" className="md:col-span-5">
                        <div className="group relative overflow-hidden rounded-3xl sm:rounded-4xl bg-primary p-8 sm:p-10 text-white shadow-xl shadow-primary/15 hover:shadow-primary/25 transition-all duration-500 flex flex-col justify-between min-h-[320px] h-full">
                            <div>
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="w-10 h-10 rounded-xl bg-white/15 backdrop-blur-sm flex items-center justify-center text-white">
                                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" /></svg>
                                    </div>
                                    <span className="text-xs font-bold text-white/70 tracking-wider uppercase">AI Meetings</span>
                                </div>
                                <h3 className="text-2xl sm:text-3xl font-bold mb-3 tracking-tight leading-tight">
                                    Transcription &amp; action items, automatically
                                </h3>
                                <p className="text-white/70 text-sm sm:text-base leading-relaxed">
                                    Every client call generates a summary with next steps. No more &quot;what did we decide?&quot;
                                </p>
                            </div>
                            <div className="mt-8 flex -space-x-2">
                                {[1, 2, 3, 4].map(i => (
                                    <div key={i} className="w-8 h-8 rounded-full border-2 border-primary bg-white/15 backdrop-blur-sm" />
                                ))}
                                <div className="w-8 h-8 rounded-full border-2 border-primary bg-white/25 backdrop-blur-sm flex items-center justify-center text-[10px] font-bold">+5</div>
                            </div>
                            <div className="absolute -bottom-16 -right-16 w-48 h-48 bg-white/5 rounded-full blur-3xl" />
                        </div>
                    </AnimateOnScroll>

                    {/* Bottom row: 3 × 4cols */}
                    {[
                        {
                            icon: <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.05-.015-2.07-3.345.72-4.05-1.605-4.05-1.605-.54-1.38-1.335-1.755-1.335-1.755-1.095-.75.09-.735.09-.735 1.2.09 1.83 1.23 1.83 1.23 1.08 1.86 2.805 1.32 3.495 1.005.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405 1.02 0 2.04.135 3 .405 2.28-1.545 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.285 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" /></svg>,
                            iconBg: 'bg-gray-100 dark:bg-white/5',
                            iconColor: 'text-foreground',
                            title: 'Smart Repo Sync',
                            desc: 'Translates commits into clear progress updates your clients actually understand.'
                        },
                        {
                            icon: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>,
                            iconBg: 'bg-purple-500/10',
                            iconColor: 'text-purple-500',
                            title: 'AI Legal Shield',
                            desc: 'Instant analysis of contracts to detect risky clauses, missing info, and red flags.'
                        },
                        {
                            icon: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" /></svg>,
                            iconBg: 'bg-emerald-500/10',
                            iconColor: 'text-emerald-500',
                            title: 'Automated Invoicing',
                            desc: 'Smart reminders and automated payment releases linked to project milestones.'
                        }
                    ].map((card, i) => (
                        <AnimateOnScroll key={i} animation="fade-up" delay={staggerDelay(i, 100)} className="md:col-span-4">
                            <div className="group relative overflow-hidden rounded-3xl bg-card border border-border p-7 sm:p-8 hover:border-primary/20 transition-all duration-500 h-full">
                                <div className={`w-10 h-10 rounded-xl ${card.iconBg} flex items-center justify-center ${card.iconColor} mb-5`}>
                                    {card.icon}
                                </div>
                                <h3 className="text-lg font-bold text-foreground mb-2 tracking-tight">{card.title}</h3>
                                <p className="text-muted-foreground text-sm leading-relaxed">{card.desc}</p>
                            </div>
                        </AnimateOnScroll>
                    ))}

                    {/* Full-width dark card */}
                    <AnimateOnScroll animation="scale-in" delay="100ms" className="md:col-span-12">
                        <div className="group relative overflow-hidden rounded-4xl sm:rounded-5xl bg-slate-900 dark:bg-[#0d1117] p-8 sm:p-12 md:p-16 text-white transition-all duration-500">
                            <div className="grid md:grid-cols-2 gap-8 sm:gap-12 items-center">
                                <div>
                                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-[10px] font-bold uppercase tracking-[0.2em] mb-6">
                                        <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
                                        Global scale
                                    </div>
                                    <h3 className="text-3xl sm:text-4xl font-bold mb-5 tracking-tight leading-tight">
                                        Manage your entire business{' '}
                                        <span className="font-script text-blue-400 capitalize text-4xl sm:text-5xl">anywhere</span>
                                    </h3>
                                    <p className="text-white/50 text-sm sm:text-base max-w-lg mb-8 leading-relaxed">
                                        Accept payments in 135+ currencies, handle international tax compliance, and scale your freelance business globally.
                                    </p>
                                    <div className="flex flex-wrap gap-2">
                                        {['USD', 'EUR', 'GBP', 'XAF', 'BTC'].map(cur => (
                                            <div key={cur} className="px-3 py-1.5 bg-white/5 border border-white/10 rounded-lg text-[11px] font-mono text-white/60">{cur}</div>
                                        ))}
                                    </div>
                                </div>
                                <div className="relative">
                                    <div className="aspect-[4/3] bg-gradient-to-br from-blue-600/80 to-indigo-900/80 rounded-3xl p-6 sm:p-8 relative overflow-hidden border border-white/5">
                                        <div className="relative z-10 flex flex-col justify-between h-full">
                                            <div className="flex justify-between items-start">
                                                <div className="w-10 h-10 bg-white/10 rounded-full" />
                                                <div className="px-3 h-7 bg-emerald-400/15 text-emerald-400 border border-emerald-400/20 rounded-full flex items-center justify-center text-[10px] font-bold tracking-widest">LIVE</div>
                                            </div>
                                            <div>
                                                <div className="text-5xl sm:text-6xl font-bold tracking-tighter mb-1">$2.4M+</div>
                                                <div className="text-[11px] text-white/40 uppercase tracking-[0.2em] font-semibold">Volume processed</div>
                                            </div>
                                        </div>
                                        <div className="absolute -bottom-20 -right-20 w-48 h-48 bg-blue-400/10 rounded-full blur-3xl" />
                                    </div>
                                    <div className="absolute -top-3 -left-3 sm:-top-5 sm:-left-5 bg-card text-foreground p-3 sm:p-4 rounded-xl sm:rounded-2xl shadow-xl text-[11px] font-semibold flex items-center gap-2 border border-border z-20">
                                        <span className="w-2 h-2 rounded-full bg-emerald-500" />
                                        New Payment Received
                                    </div>
                                </div>
                            </div>
                        </div>
                    </AnimateOnScroll>
                </div>
            </div>
        </section>
    );
}
