'use client';

import Link from 'next/link';
import { AnimateOnScroll } from '@/hooks/useScrollAnimation';

export default function CTA() {
    return (
        <section className="py-24 sm:py-32 bg-background transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
                <AnimateOnScroll animation="scale-in" duration="900ms">
                    <div className="relative rounded-4xl sm:rounded-5xl bg-slate-900 dark:bg-[#0d1017] overflow-hidden">
                        {/* Grain texture */}
                        <div className="absolute inset-0 opacity-[0.04]"
                            style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 256 256\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noise\'%3E%3CfeTurbulence baseFrequency=\'0.65\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noise)\'/%3E%3C/svg%3E")' }} />

                        <div className="relative z-10 grid md:grid-cols-2 gap-12 p-8 sm:p-12 md:p-16 lg:p-20 items-center">
                            <AnimateOnScroll animation="fade-right" delay="200ms">
                                <div>
                                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight tracking-tight mb-6">
                                        Ready to professionalize your{' '}
                                        <span className="font-script text-blue-400 capitalize text-4xl sm:text-5xl md:text-6xl">business</span>?
                                    </h2>
                                    <p className="text-white/50 text-base sm:text-lg max-w-md mb-10 leading-relaxed">
                                        Join 10,000+ top-tier freelancers managing their business with less stress and more profit.
                                    </p>
                                    <div className="flex flex-col sm:flex-row gap-3">
                                        <Link
                                            href="/login?mode=register"
                                            className="px-7 py-3.5 bg-primary text-primary-foreground rounded-xl font-bold text-sm hover:bg-primary/90 transition-all shadow-lg shadow-primary/20 hover:-translate-y-0.5 text-center"
                                        >
                                            Start Free Trial
                                        </Link>
                                        <Link
                                            href="/demo"
                                            className="px-7 py-3.5 bg-white/5 border border-white/10 text-white rounded-xl font-bold text-sm hover:bg-white/10 transition-all text-center"
                                        >
                                            Schedule Demo
                                        </Link>
                                    </div>
                                    <p className="mt-6 text-white/30 text-[11px] font-medium">No credit card required • 14-day free trial • Cancel anytime</p>
                                </div>
                            </AnimateOnScroll>

                            <AnimateOnScroll animation="fade-left" delay="400ms">
                                <div className="grid grid-cols-2 gap-4">
                                    {[
                                        { value: '10K+', label: 'Active Freelancers' },
                                        { value: '99.9%', label: 'Uptime SLA' },
                                        { value: '$2.4M+', label: 'Payments Processed' },
                                        { value: '4.9/5', label: 'User Rating' },
                                    ].map((stat, i) => (
                                        <div key={i} className="bg-white/5 border border-white/5 rounded-2xl p-5 sm:p-6 text-center hover:bg-white/[0.08] transition-colors duration-300">
                                            <div className="text-2xl sm:text-3xl font-bold text-white tracking-tight mb-1">{stat.value}</div>
                                            <div className="text-[11px] text-white/40 font-semibold uppercase tracking-widest">{stat.label}</div>
                                        </div>
                                    ))}
                                </div>
                            </AnimateOnScroll>
                        </div>

                        <div className="absolute top-0 right-0 w-80 h-80 bg-primary/10 rounded-full blur-[120px]" />
                        <div className="absolute bottom-0 left-0 w-60 h-60 bg-blue-600/10 rounded-full blur-[100px]" />
                    </div>
                </AnimateOnScroll>
            </div>
        </section>
    );
}
