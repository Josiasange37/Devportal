'use client';

import { useState } from 'react';
import { AnimateOnScroll, staggerDelay } from '@/hooks/useScrollAnimation';

export default function Pricing() {
    const [annual, setAnnual] = useState(false);

    const plans = [
        {
            name: 'Starter',
            monthly: 'Free',
            annually: 'Free',
            period: '/forever',
            description: 'Perfect for new freelancers.',
            features: ['3 Active Clients', 'Basic Invoicing', '1 Contract Template', 'Community Support'],
            cta: 'Get Started',
            accent: false
        },
        {
            name: 'Professional',
            monthly: '$29',
            annually: '$24',
            period: '/month',
            description: 'For full-time freelancers growing fast.',
            features: ['Unlimited Clients', 'Advanced Invoicing', 'Custom Contracts', 'Client Portal Access', 'Priority Support'],
            cta: 'Start Free Trial',
            accent: true
        },
        {
            name: 'Agency',
            monthly: '$99',
            annually: '$79',
            period: '/month',
            description: 'For teams managing multiple freelancers.',
            features: ['Everything in Pro', 'Team Members', 'White Labeling', 'API Access', 'Dedicated Account Manager'],
            cta: 'Contact Sales',
            accent: false
        }
    ];

    return (
        <section id="pricing" className="py-24 sm:py-32 bg-secondary/20 dark:bg-white/[0.02] transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">

                {/* Header — RIGHT aligned (4th section) */}
                <AnimateOnScroll animation="fade-left" className="max-w-2xl mb-12 sm:mb-16 ml-auto text-right">
                    <p className="text-xs font-bold text-primary tracking-[0.25em] uppercase mb-4">Pricing</p>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground leading-tight tracking-tight mb-6">
                        Start small,{' '}
                        <span className="font-script text-primary capitalize text-4xl sm:text-5xl md:text-6xl">scale</span>{' '}
                        big
                    </h2>
                    <p className="text-muted-foreground text-base sm:text-lg ml-auto max-w-lg">
                        Transparent pricing for every stage. No hidden fees, cancel anytime.
                    </p>
                </AnimateOnScroll>

                {/* Billing toggle */}
                <AnimateOnScroll animation="fade-up" delay="100ms" className="flex items-center justify-end gap-4 mb-12">
                    <span className={`text-sm font-semibold transition-colors ${!annual ? 'text-foreground' : 'text-muted-foreground'}`}>Monthly</span>
                    <button
                        onClick={() => setAnnual(!annual)}
                        className={`relative w-12 h-6 rounded-full transition-colors duration-300 ${annual ? 'bg-primary' : 'bg-border'}`}
                    >
                        <div className={`absolute top-0.5 w-5 h-5 rounded-full bg-white shadow-sm transition-transform duration-300 ${annual ? 'translate-x-6' : 'translate-x-0.5'}`} />
                    </button>
                    <span className={`text-sm font-semibold transition-colors ${annual ? 'text-foreground' : 'text-muted-foreground'}`}>
                        Annual
                        <span className="ml-1.5 text-[10px] font-bold text-primary bg-primary/10 px-2 py-0.5 rounded-full">Save 20%</span>
                    </span>
                </AnimateOnScroll>

                {/* Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-5xl ml-auto">
                    {plans.map((plan, index) => (
                        <AnimateOnScroll key={index} animation="fade-up" delay={staggerDelay(index, 120)}>
                            <div
                                className={`relative rounded-3xl p-7 sm:p-8 flex flex-col transition-all duration-500 h-full hover:-translate-y-1
                                    ${plan.accent
                                        ? 'bg-card border-2 border-primary shadow-xl shadow-primary/10 md:-translate-y-3 md:hover:-translate-y-4'
                                        : 'bg-card border border-border hover:border-primary/20'
                                    }`}
                            >
                                {plan.accent && (
                                    <div className="absolute -top-3 left-6 bg-primary text-primary-foreground text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                                        Popular
                                    </div>
                                )}

                                <div className="mb-6">
                                    <span className="text-xs font-bold text-muted-foreground uppercase tracking-widest">{plan.name}</span>
                                    <div className="mt-3 flex items-baseline gap-1">
                                        <span className="text-4xl sm:text-5xl font-bold text-foreground tracking-tight transition-all duration-300">
                                            {annual ? plan.annually : plan.monthly}
                                        </span>
                                        <span className="text-muted-foreground text-sm">{plan.period}</span>
                                    </div>
                                    <p className="mt-3 text-muted-foreground text-sm">{plan.description}</p>
                                </div>

                                <ul className="space-y-3 mb-8 flex-1">
                                    {plan.features.map((feature) => (
                                        <li key={feature} className="flex items-center gap-2.5 text-sm text-muted-foreground">
                                            <svg className="w-4 h-4 text-primary shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>
                                            {feature}
                                        </li>
                                    ))}
                                </ul>

                                <button
                                    className={`w-full py-3.5 rounded-xl text-sm font-bold transition-all duration-300
                                        ${plan.accent
                                            ? 'bg-primary text-primary-foreground hover:bg-primary/90 shadow-md shadow-primary/20 hover:shadow-lg hover:shadow-primary/30'
                                            : 'border border-border text-foreground hover:bg-secondary hover:border-primary/20'
                                        }`}
                                >
                                    {plan.cta}
                                </button>
                            </div>
                        </AnimateOnScroll>
                    ))}
                </div>
            </div>
        </section>
    );
}
