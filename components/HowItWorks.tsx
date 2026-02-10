'use client';

import { AnimateOnScroll, staggerDelay } from '@/hooks/useScrollAnimation';

export default function HowItWorks() {
    const steps = [
        {
            step: '01',
            title: 'Connect',
            description: 'Sync your calendar, payment methods, and repositories. Set up your brand portal in under 5 minutes.',
            icon: 'M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1'
        },
        {
            step: '02',
            title: 'Propose',
            description: 'Send interactive proposals that clients can review, comment on, and sign instantly — no back and forth emails.',
            icon: 'M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z'
        },
        {
            step: '03',
            title: 'Collaborate',
            description: 'Manage tasks, files, chats, and AI-powered meetings in a dedicated client workspace with full transparency.',
            icon: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z'
        },
        {
            step: '04',
            title: 'Get Paid',
            description: 'Automated invoicing releases funds when milestones are met. Support for Stripe, PayPal, mobile money, and crypto.',
            icon: 'M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
        }
    ];

    return (
        <section id="how-it-works" className="py-24 sm:py-32 bg-secondary/20 dark:bg-white/[0.02] transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">

                {/* Header — RIGHT aligned (2nd section) */}
                <AnimateOnScroll animation="fade-left" className="max-w-2xl mb-16 sm:mb-20 ml-auto text-right">
                    <p className="text-xs font-bold text-primary tracking-[0.25em] uppercase mb-4">Workflow</p>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground leading-tight tracking-tight mb-6">
                        From proposal to{' '}
                        <span className="font-script text-primary capitalize text-4xl sm:text-5xl md:text-6xl">payment</span>
                    </h2>
                    <p className="text-muted-foreground text-base sm:text-lg ml-auto max-w-lg">
                        A seamless process designed to keep projects moving forward without the headaches.
                    </p>
                </AnimateOnScroll>

                {/* Timeline */}
                <div className="relative">
                    <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-border -translate-x-1/2" />

                    <div className="space-y-6 md:space-y-0">
                        {steps.map((item, index) => {
                            const isLeft = index % 2 === 0;
                            return (
                                <AnimateOnScroll
                                    key={index}
                                    animation={isLeft ? 'fade-right' : 'fade-left'}
                                    delay={staggerDelay(index, 100)}
                                    className="relative md:grid md:grid-cols-2 md:gap-12 md:py-10 group"
                                >
                                    {/* Dot on timeline */}
                                    <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-primary text-primary-foreground items-center justify-center text-xs font-bold z-10 shadow-lg shadow-primary/20 group-hover:scale-110 transition-transform duration-300">
                                        {item.step}
                                    </div>

                                    <div className={`${isLeft ? 'md:col-start-1 md:text-right md:pr-16' : 'md:col-start-2 md:pl-16'}`}>
                                        <div className="bg-card border border-border rounded-2xl sm:rounded-3xl p-6 sm:p-8 hover:border-primary/20 transition-all duration-300 hover:-translate-y-1">
                                            <div className="md:hidden w-10 h-10 rounded-xl bg-primary text-primary-foreground flex items-center justify-center text-xs font-bold mb-4 shadow-md shadow-primary/20">
                                                {item.step}
                                            </div>
                                            <div className={`flex items-start gap-4 ${isLeft ? 'md:flex-row-reverse' : ''}`}>
                                                <div className="hidden md:flex w-11 h-11 rounded-xl bg-primary/10 items-center justify-center text-primary shrink-0">
                                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={item.icon} /></svg>
                                                </div>
                                                <div>
                                                    <h4 className="text-lg sm:text-xl font-bold text-foreground mb-2 tracking-tight">{item.title}</h4>
                                                    <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {isLeft && <div className="hidden md:block" />}
                                </AnimateOnScroll>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}
