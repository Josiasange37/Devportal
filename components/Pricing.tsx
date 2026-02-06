export default function Pricing() {
    const plans = [
        {
            name: "Starter",
            price: "$19",
            period: "/month",
            description: "Perfect for individual freelancers starting out",
            features: [
                "Up to 5 active projects",
                "Real-time commit tracking",
                "Basic analytics dashboard",
                "Contract management",
                "Email support",
                "2 GB file storage"
            ],
            popular: false
        },
        {
            name: "Professional",
            price: "$49",
            period: "/month",
            description: "Best for established freelancers and small agencies",
            features: [
                "Unlimited projects",
                "AI-powered meetings (10 hours/month)",
                "Advanced analytics & insights",
                "Priority email & chat support",
                "Document credibility analysis",
                "50 GB file storage",
                "Custom branding",
                "API access"
            ],
            popular: true
        },
        {
            name: "Enterprise",
            price: "Custom",
            period: "",
            description: "For agencies and teams managing multiple clients",
            features: [
                "Everything in Professional",
                "Unlimited AI meeting hours",
                "On-premise deployment option"
            ],
            popular: false
        }
    ];

    return (
        <section id="pricing" className="py-24 bg-background transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-20">
                    <h2 className="text-sm font-bold text-primary tracking-widest uppercase mb-3">Pricing Plans</h2>
                    <h3 className="text-4xl md:text-5xl font-bold text-foreground mb-6 font-sans">
                        Start Small, <span className="text-primary">Scale Big</span>
                    </h3>
                    <p className="text-muted-foreground text-xl max-w-2xl mx-auto">
                        Transparent pricing for every stage of your freelance journey. No hidden fees.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">

                    {/* Starter Plan */}
                    <div className="bg-card border border-border rounded-[2rem] p-10 flex flex-col hover:border-primary/30 transition-all duration-300">
                        <div className="mb-8">
                            <span className="bg-secondary text-secondary-foreground text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">Starter</span>
                            <div className="mt-6 flex items-baseline">
                                <span className="text-5xl font-bold text-foreground font-sans">Free</span>
                                <span className="ml-2 text-muted-foreground">/forever</span>
                            </div>
                            <p className="mt-4 text-muted-foreground font-medium">Perfect for new freelancers just getting started.</p>
                        </div>
                        <ul className="space-y-4 mb-10 flex-1">
                            {['3 Active Clients', 'Basic Invoicing', '1 Contract Template', 'Community Support'].map((feature) => (
                                <li key={feature} className="flex items-center gap-3 text-muted-foreground">
                                    <svg className="w-5 h-5 text-green-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                                    {feature}
                                </li>
                            ))}
                        </ul>
                        <button className="w-full py-4 rounded-xl border border-input text-foreground font-bold hover:bg-secondary transition-colors">
                            Get Started
                        </button>
                    </div>

                    {/* Professional Plan */}
                    <div className="bg-primary rounded-[2rem] p-10 flex flex-col relative overflow-hidden transform md:-translate-y-4 shadow-2xl shadow-primary/20">
                        <div className="absolute top-0 right-0 p-4">
                            <div className="bg-white/20 backdrop-blur-sm text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">Popular</div>
                        </div>
                        <div className="mb-8 relative z-10 text-white">
                            <span className="bg-white/20 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">Professional</span>
                            <div className="mt-6 flex items-baseline">
                                <span className="text-5xl font-bold font-sans">$29</span>
                                <span className="ml-2 opacity-80">/month</span>
                            </div>
                            <p className="mt-4 opacity-90 font-medium">For full-time freelancers growing their business.</p>
                        </div>
                        <ul className="space-y-4 mb-10 flex-1 relative z-10">
                            {['Unlimited Clients', 'Advanced Invoicing', 'Custom Contracts', 'Client Portal Access', 'Priority Support'].map((feature) => (
                                <li key={feature} className="flex items-center gap-3 text-white">
                                    <svg className="w-5 h-5 text-white flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                                    {feature}
                                </li>
                            ))}
                        </ul>
                        <button className="w-full py-4 rounded-xl bg-white text-primary font-bold hover:bg-gray-50 transition-colors relative z-10 shadow-lg">
                            Start Free Trial
                        </button>

                        {/* Background Decoration */}
                        <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
                        <div className="absolute -top-20 -left-20 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
                    </div>

                    {/* Agency Plan */}
                    <div className="bg-card border border-border rounded-[2rem] p-10 flex flex-col hover:border-primary/30 transition-all duration-300">
                        <div className="mb-8">
                            <span className="bg-secondary text-secondary-foreground text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">Agency</span>
                            <div className="mt-6 flex items-baseline">
                                <span className="text-5xl font-bold text-foreground font-sans">$99</span>
                                <span className="ml-2 text-muted-foreground">/month</span>
                            </div>
                            <p className="mt-4 text-muted-foreground font-medium">For teams and agencies managing multiple freelancers.</p>
                        </div>
                        <ul className="space-y-4 mb-10 flex-1">
                            {['Everything in Pro', 'Team Members', 'White Labeling', 'API Access', 'Dedicated Account Manager'].map((feature) => (
                                <li key={feature} className="flex items-center gap-3 text-muted-foreground">
                                    <svg className="w-5 h-5 text-green-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                                    {feature}
                                </li>
                            ))}
                        </ul>
                        <button className="w-full py-4 rounded-xl border border-input text-foreground font-bold hover:bg-secondary transition-colors">
                            Contact Sales
                        </button>
                    </div>

                </div>
            </div>
        </section >
    );
}
