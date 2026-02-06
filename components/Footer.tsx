'use client';

import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="bg-background border-t border-border pt-20 pb-12 transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-10 mb-16">

                    {/* Brand Column */}
                    <div className="col-span-2 lg:col-span-2">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center text-primary-foreground font-bold text-xl shadow-lg shadow-primary/20">
                                F
                            </div>
                            <span className="text-2xl font-bold text-foreground tracking-tight font-sans">FreelanceOS</span>
                        </div>
                        <p className="text-muted-foreground text-sm max-w-sm mb-8 leading-relaxed font-medium">
                            Empowering independent professionals to run their business with confidence, clarity, and speed. The operating system for the modern freelancer.
                        </p>
                        <div className="flex gap-4">
                            {/* Social Icons */}
                            {['twitter', 'github', 'linkedin'].map((social, i) => (
                                <a key={i} href="#" className="w-10 h-10 rounded-full bg-secondary border border-border flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300">
                                    <span className="sr-only">{social}</span>
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.477 2 2 6.477 2 12c0 5.523 4.477 10 10 10s10-4.477 10-10c0-5.523-4.477-10-10-10z" /></svg>
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Links Columns */}
                    <div className="lg:col-span-1"></div>

                    <div>
                        <h4 className="font-bold text-foreground mb-6 font-sans">Product</h4>
                        <ul className="space-y-4">
                            {['Features', 'Pricing', 'Testimonials', 'Integrations', 'Changelog'].map((item) => (
                                <li key={item}><Link href="#" className="text-muted-foreground hover:text-primary text-sm transition-colors font-medium">{item}</Link></li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold text-foreground mb-6 font-sans">Company</h4>
                        <ul className="space-y-4">
                            {['About Us', 'Careers', 'Blog', 'Contact', 'Press'].map((item) => (
                                <li key={item}><Link href="#" className="text-muted-foreground hover:text-primary text-sm transition-colors font-medium">{item}</Link></li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold text-foreground mb-6 font-sans">Legal</h4>
                        <ul className="space-y-4">
                            {['Privacy Policy', 'Terms of Service', 'Cookie Policy', 'GDPR', 'Security'].map((item) => (
                                <li key={item}><Link href="#" className="text-muted-foreground hover:text-primary text-sm transition-colors font-medium">{item}</Link></li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
                    <p className="text-muted-foreground text-sm font-medium">© 2026 FreelanceOS Inc. All rights reserved.</p>
                    <div className="flex items-center gap-6">
                        <span className="flex items-center gap-2 text-muted-foreground text-sm font-medium">
                            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                            System Status: Operational
                        </span>
                        <p className="text-muted-foreground text-sm font-medium">Made with ❤️ for Freelancers</p>
                    </div>
                </div>
            </div>
        </footer>
    );
}
