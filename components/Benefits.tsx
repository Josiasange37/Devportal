'use client';

import { AnimateOnScroll, staggerDelay } from '@/hooks/useScrollAnimation';

export default function Benefits() {
    const benefits = [
        {
            stat: '3x',
            statLabel: 'Faster Payments',
            title: 'Instant Payments',
            description: 'Get paid instantly via Stripe, PayPal, mobile money, or crypto. Automated reminders chase invoices so you don\'t have to.',
            icon: 'M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
        },
        {
            stat: '100%',
            statLabel: 'Visibility',
            title: 'CRM & Leads',
            description: 'Organize all client communications in one place. Track leads, conversations, proposals, and project requirements effortlessly.',
            icon: 'M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z'
        },
        {
            stat: '10min',
            statLabel: 'Setup',
            title: 'Smart Contracts',
            description: 'Use attorney-vetted contract templates with built-in e-signatures. Start working faster and safer with legal protection from day one.',
            icon: 'M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z'
        }
    ];

    return (
        <section id="benefits" className="py-24 sm:py-32 bg-background transition-colors duration-300 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">

                {/* Header — LEFT aligned (3rd section) */}
                <AnimateOnScroll animation="fade-right" className="max-w-2xl mb-16 sm:mb-20">
                    <p className="text-xs font-bold text-primary tracking-[0.25em] uppercase mb-4">Why DevPortal Pro?</p>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground leading-tight tracking-tight mb-6">
                        Everything you need to{' '}
                        <span className="font-script text-primary capitalize text-4xl sm:text-5xl md:text-6xl">scale</span>
                    </h2>
                    <p className="text-muted-foreground text-base sm:text-lg max-w-lg">
                        Stop juggling multiple tools. Get paid faster, manage clients better, and focus on the work you love.
                    </p>
                </AnimateOnScroll>

                {/* Stat cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                    {benefits.map((benefit, index) => (
                        <AnimateOnScroll key={index} animation="fade-up" delay={staggerDelay(index, 120)}>
                            <div className="group relative rounded-3xl bg-card border border-border p-7 sm:p-8 hover:border-primary/20 transition-all duration-500 flex flex-col h-full hover:-translate-y-1">
                                <div className="mb-6 pb-6 border-b border-border/50">
                                    <div className="text-4xl sm:text-5xl font-bold text-primary tracking-tighter leading-none mb-1">
                                        {benefit.stat}
                                    </div>
                                    <span className="text-[11px] font-semibold text-muted-foreground uppercase tracking-widest">
                                        {benefit.statLabel}
                                    </span>
                                </div>
                                <div className="flex items-start gap-4 flex-1">
                                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={benefit.icon} />
                                        </svg>
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-bold text-foreground mb-2 tracking-tight">{benefit.title}</h4>
                                        <p className="text-muted-foreground text-sm leading-relaxed">{benefit.description}</p>
                                    </div>
                                </div>
                            </div>
                        </AnimateOnScroll>
                    ))}
                </div>
            </div>
        </section>
    );
}
