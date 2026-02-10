'use client';

import Link from 'next/link';

export default function CTA() {
    return (
        <section className="py-20 sm:py-24 bg-background transition-colors duration-300">
            <div className="max-w-6xl mx-auto px-4 sm:px-6">
                <div className="bg-gradient-to-r from-primary to-primary/80 rounded-[2.5rem] sm:rounded-[3rem] p-8 sm:p-12 md:p-24 text-center relative overflow-hidden shadow-2xl shadow-primary/30">

                    {/* Background Elements */}
                    <div className="absolute top-0 left-0 w-full h-full opacity-10">
                        <div className="absolute top-[-50%] left-[-20%] w-[100%] h-[200%] bg-white/20 rotate-12 blur-3xl"></div>
                    </div>

                    <div className="relative z-10">
                        <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold text-primary-foreground mb-6 sm:mb-8 font-sans tracking-tight leading-tight text-balance">
                            Ready to Professionalize <br className="hidden sm:block" /> Your Freelance Business?
                        </h2>
                        <p className="text-primary-foreground/80 text-lg sm:text-xl max-w-2xl mx-auto mb-10 sm:mb-12 font-medium">
                            Join 10,000+ top-tier freelancers who are managing their business with less stress and more profit.
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <Link
                                href="/login"
                                className="w-full sm:w-auto px-8 py-4 bg-background text-primary rounded-full font-bold text-base sm:text-lg hover:bg-secondary transition-all shadow-lg hover:shadow-xl hover:-translate-y-1"
                            >
                                Start Free Trial
                            </Link>
                            <Link
                                href="/demo"
                                className="w-full sm:w-auto px-8 py-4 bg-transparent border-2 border-primary-foreground text-primary-foreground rounded-full font-bold text-base sm:text-lg hover:bg-primary-foreground/10 transition-all"
                            >
                                Schedule Demo
                            </Link>
                        </div>
                        <p className="mt-8 text-primary-foreground/60 text-[10px] sm:text-xs">No credit card required • 14-day free trial • Cancel anytime</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
