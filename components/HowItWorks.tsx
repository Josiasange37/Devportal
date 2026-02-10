export default function HowItWorks() {
    const steps = [
        {
            number: "01",
            title: "Create Your Project",
            description: "Set up a new project in minutes. Invite your client with a simple link—no technical setup required.",
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
            )
        },
        {
            number: "02",
            title: "Connect Your Repository",
            description: "Link your GitHub, GitLab, or Bitbucket repository. We automatically track commits and translate them for clients.",
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                </svg>
            )
        },
        {
            number: "03",
            title: "Collaborate in Real-Time",
            description: "Share updates, documents, and contracts. Host AI-powered meetings with automatic summaries and action items.",
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
            )
        },
        {
            number: "04",
            title: "Deliver with Confidence",
            description: "Clients monitor progress transparently. Get paid faster with built-in invoicing and contract management.",
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138z" />
                </svg>
            )
        }
    ];

    return (
        <section id="how-it-works" className="py-20 sm:py-24 bg-secondary/30 transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
                <div className="text-center mb-16 sm:mb-20">
                    <h2 className="text-xs sm:text-sm font-bold text-primary tracking-widest uppercase mb-3">Workflow</h2>
                    <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6 font-sans text-balance">
                        From Proposal to <span className="text-primary">Payment</span>
                    </h3>
                    <p className="text-muted-foreground text-lg sm:text-xl max-w-2xl mx-auto">
                        A seamless process designed to keep projects moving forward without the administrative headaches.
                    </p>
                </div>

                <div className="relative">
                    {/* Connector Line (Desktop) */}
                    <div className="hidden md:block absolute top-[60px] left-0 w-full h-1 bg-border rounded-full -z-10"></div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
                        {[
                            { step: '01', title: 'Connect', desc: 'Sync your calendar and payment methods to get started.', icon: 'M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1' },
                            { step: '02', title: 'Proposal', desc: 'Send a beautiful, interactive proposal that clients can sign instantly.', icon: 'M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z' },
                            { step: '03', title: 'Collaborate', desc: 'Manage tasks, chats, and files in a dedicated client portal.', icon: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z' },
                            { step: '04', title: 'Get Paid', desc: 'Automated invoicing releases funds as soon as milestones are met.', icon: 'M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z' }
                        ].map((item, index) => (
                            <div key={index} className="bg-card p-6 sm:p-8 rounded-[1.5rem] sm:rounded-[2rem] border border-border flex flex-col items-center text-center relative hover:-translate-y-2 transition-transform duration-300 shadow-sm hover:shadow-xl hover:shadow-primary/5">
                                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl bg-primary flex items-center justify-center text-primary-foreground mb-6 shadow-lg shadow-primary/30 relative z-10">
                                    <svg className="w-6 h-6 sm:w-8 sm:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={item.icon} /></svg>
                                    <div className="absolute -top-2 -right-2 sm:-top-3 sm:-right-3 w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-background border-2 border-primary flex items-center justify-center text-[10px] sm:text-xs font-bold text-primary">
                                        {item.step}
                                    </div>
                                </div>
                                <h4 className="text-lg sm:text-xl font-bold text-foreground mb-3">{item.title}</h4>
                                <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed">
                                    {item.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section >
    );
}
