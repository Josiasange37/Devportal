'use client';

export default function Benefits() {
    return (
        <section id="benefits" className="py-24 bg-background transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-20">
                    <h2 className="text-sm font-bold text-primary tracking-widest uppercase mb-3">Why FreelanceOS?</h2>
                    <h3 className="text-4xl md:text-5xl font-bold text-foreground mb-6 font-sans">
                        Everything You Need to <br />
                        <span className="text-primary">Scale Your Business</span>
                    </h3>
                    <p className="text-muted-foreground text-xl max-w-2xl mx-auto">
                        Stop juggling multiple tools. Get paid faster, manage clients better, and focus on the work you love.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Fast Payments */}
                    <div className="col-span-1 p-8 rounded-3xl bg-card border border-border hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 group">
                        <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform">
                            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                        </div>
                        <h4 className="text-2xl font-bold text-foreground mb-4">Instant Payments</h4>
                        <p className="text-muted-foreground leading-relaxed">
                            Get paid instantly via Stripe, PayPal, or Crypto. No more chasing clients for invoices. Automated reminders included.
                        </p>
                    </div>

                    {/* Client Management */}
                    <div className="col-span-1 p-8 rounded-3xl bg-card border border-border hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 group">
                        <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform">
                            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
                        </div>
                        <h4 className="text-2xl font-bold text-foreground mb-4">CRM & Leads</h4>
                        <p className="text-muted-foreground leading-relaxed">
                            Organize all your client communications in one place. Track leads, meaningful conversations, and project requirements.
                        </p>
                    </div>

                    {/* Legal & Contracts */}
                    <div className="col-span-1 p-8 rounded-3xl bg-card border border-border hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 group">
                        <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform">
                            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
                        </div>
                        <h4 className="text-2xl font-bold text-foreground mb-4">Smart Contracts</h4>
                        <p className="text-muted-foreground leading-relaxed">
                            Use attorney-vetted contract templates. E-signatures built-in so you can start working faster and safer.
                        </p>
                    </div>

                </div>
            </div>
        </section>
    );
}
