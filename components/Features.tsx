'use client';

export default function Features() {
    return (
        <section id="features" className="py-24 bg-background transition-colors duration-300 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">

                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <h2 className="text-sm font-bold text-primary tracking-widest uppercase mb-3">Capabilities</h2>
                    <h3 className="text-4xl md:text-5xl font-bold text-foreground mb-6 font-sans">
                        Powerful Tools for <span className="text-primary">Modern Work</span>
                    </h3>
                    <p className="text-muted-foreground text-xl">
                        A centralized operating system designed exclusively for the freelance economy.
                    </p>
                </div>

                {/* Bento Grid Container */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6">

                    {/* Card 1: Client Portal (Wide) */}
                    <div className="md:col-span-8 group relative overflow-hidden rounded-[2.5rem] bg-card border border-border p-10 hover:shadow-2xl hover:shadow-primary/5 transition-all duration-500">
                        <div className="flex flex-col h-full justify-between">
                            <div>
                                <div className="w-12 h-12 bg-blue-50 dark:bg-blue-900/20 rounded-xl flex items-center justify-center text-blue-600 dark:text-blue-400 mb-6">
                                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16l3.5-2 3.5 2 3.5-2 3.5 2z" /></svg>
                                </div>
                                <h3 className="text-2xl font-bold text-foreground mb-4 font-sans">White-Label Client Portal</h3>
                                <p className="text-muted-foreground max-w-md mb-8">
                                    Give your clients a professional dashboard under your own brand. Track progress, share files, and manage feedback in one place.
                                </p>
                            </div>
                            <div className="bg-background/50 border border-border rounded-2xl p-4 shadow-sm">
                                <div className="flex items-center gap-3 mb-3 pb-3 border-b border-border/50">
                                    <div className="w-8 h-8 rounded-full bg-primary/10"></div>
                                    <div className="h-3 w-24 bg-muted rounded-full"></div>
                                </div>
                                <div className="space-y-2">
                                    <div className="h-2 w-full bg-muted rounded-full opacity-50"></div>
                                    <div className="h-2 w-3/4 bg-muted rounded-full opacity-50"></div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Card 2: AI Meetings */}
                    <div className="md:col-span-4 group relative overflow-hidden rounded-[2.5rem] bg-primary p-10 text-white shadow-xl shadow-primary/20 hover:scale-[1.02] transition-all duration-500">
                        <div className="relative z-10 flex flex-col h-full justify-between">
                            <div>
                                <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center text-white mb-6">
                                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 00-2 2z" /></svg>
                                </div>
                                <h3 className="text-2xl font-bold mb-4 font-sans">AI-Powered Meetings</h3>
                                <p className="opacity-80">Automatic transcription and action-item generation for every client call.</p>
                            </div>
                            <div className="mt-8 flex -space-x-2">
                                {[1, 2, 3].map(i => (
                                    <div key={i} className="w-8 h-8 rounded-full border-2 border-primary bg-white/20"></div>
                                ))}
                            </div>
                        </div>
                        <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-white/10 rounded-full blur-3xl"></div>
                    </div>

                    {/* Card 3: GitHub Sync */}
                    <div className="md:col-span-4 group relative overflow-hidden rounded-[2.5rem] bg-card border border-border p-10 hover:shadow-2xl transition-all duration-500">
                        <div className="w-12 h-12 bg-gray-100 dark:bg-secondary/50 rounded-xl flex items-center justify-center text-foreground mb-6">
                            <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.05-.015-2.07-3.345.72-4.05-1.605-4.05-1.605-.54-1.38-1.335-1.755-1.335-1.755-1.095-.75.09-.735.09-.735 1.2.09 1.83 1.23 1.83 1.23 1.08 1.86 2.805 1.32 3.495 1.005.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405 1.02 0 2.04.135 3 .405 2.28-1.545 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.285 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" /></svg>
                        </div>
                        <h3 className="text-xl font-bold text-foreground mb-2 font-sans">Smart Repo Sync</h3>
                        <p className="text-muted-foreground text-sm">Translates commits into non-technical progress updates for clients.</p>
                    </div>

                    {/* Card 4: AI Contract Review */}
                    <div className="md:col-span-4 group relative overflow-hidden rounded-[2.5rem] bg-card border border-border p-10 hover:shadow-2xl transition-all duration-500">
                        <div className="w-12 h-12 bg-purple-50 dark:bg-purple-900/20 rounded-xl flex items-center justify-center text-purple-600 dark:text-purple-400 mb-6">
                            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
                        </div>
                        <h3 className="text-xl font-bold text-foreground mb-2 font-sans">AI Legal Shield</h3>
                        <p className="text-muted-foreground text-sm">Instant analysis of contracts to detect risky clauses and missing info.</p>
                    </div>

                    {/* Card 5: Invoices */}
                    <div className="md:col-span-4 group relative overflow-hidden rounded-[2.5rem] bg-card border border-border p-10 hover:shadow-2xl transition-all duration-500">
                        <div className="w-12 h-12 bg-green-50 dark:bg-green-900/20 rounded-xl flex items-center justify-center text-green-600 dark:text-green-400 mb-6">
                            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" /></svg>
                        </div>
                        <h3 className="text-xl font-bold text-foreground mb-2 font-sans">Automated Invoicing</h3>
                        <p className="text-muted-foreground text-sm">Smart reminders and automated payment releases linked to milestones.</p>
                    </div>

                    {/* Card 6: Large Global Card (Wide at bottom) */}
                    <div className="md:col-span-12 group relative overflow-hidden rounded-[3rem] bg-slate-900 p-12 text-white shadow-2xl hover:scale-[1.01] transition-all duration-500">
                        <div className="grid md:grid-cols-2 gap-12 items-center">
                            <div>
                                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 text-blue-400 text-xs font-bold uppercase tracking-widest mb-6 border border-blue-500/30">
                                    Global Scale
                                </div>
                                <h3 className="text-4xl font-bold mb-6 font-sans">Manage Your Entire Business <span className="text-blue-400">From Anywhere.</span></h3>
                                <p className="text-white/60 text-lg max-w-lg mb-8">
                                    Accept payments in 135+ currencies, handle international tax compliance, and scale your freelance empire globally without the paperwork.
                                </p>
                                <div className="flex gap-4">
                                    {['USD', 'EUR', 'GBP', 'BTC', 'ETH'].map(cur => (
                                        <div key={cur} className="px-4 py-2 bg-white/5 border border-white/10 rounded-xl text-xs font-mono">{cur}</div>
                                    ))}
                                </div>
                            </div>
                            <div className="relative">
                                {/* Visual representation of global reach */}
                                <div className="aspect-video bg-gradient-to-br from-blue-600 to-indigo-900 rounded-3xl p-8 relative overflow-hidden">
                                    <div className="absolute inset-0 opacity-20 pointer-events-none">
                                        {/* Abstract network dots/lines */}
                                        <div className="w-full h-full border border-dashed border-white/50 rounded-full animate-spin-slow"></div>
                                    </div>
                                    <div className="relative z-10 flex flex-col justify-between h-full">
                                        <div className="flex justify-between items-start">
                                            <div className="w-12 h-12 bg-white/20 rounded-full"></div>
                                            <div className="w-24 h-8 bg-green-400/20 text-green-400 border border-green-400/30 rounded-full flex items-center justify-center text-[10px] font-bold">LIVE STATUS</div>
                                        </div>
                                        <div className="text-6xl font-bold tracking-tighter">$2.4M+</div>
                                        <div className="text-sm opacity-60">Total volume processed this month</div>
                                    </div>
                                </div>
                                {/* Floating elements */}
                                <div className="absolute -top-6 -left-6 bg-white dark:bg-card p-4 rounded-2xl shadow-xl text-foreground text-xs font-bold flex items-center gap-2 border border-border">
                                    <span className="w-2 h-2 rounded-full bg-green-500"></span>
                                    New Payment from Tokyo, JP
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}

