'use client';

import Link from 'next/link';
import Logo from './Logo';

export default function Footer() {
    return (
        <footer className="bg-background border-t border-border pt-16 sm:pt-20 pb-8 sm:pb-12 transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-x-6 gap-y-12 mb-16">

                    {/* Brand Column */}
                    <div className="col-span-2 lg:col-span-2 flex flex-col items-center md:items-start text-center md:text-left">
                        <Logo className="mb-6 scale-90 sm:scale-100" />
                        <p className="text-muted-foreground text-xs sm:text-sm max-w-sm mb-8 leading-relaxed font-medium">
                            Empowering independent professionals to run their business with confidence, clarity, and speed. The operating system for the modern freelancer.
                        </p>
                        <div className="flex gap-4">
                            {['twitter', 'github', 'linkedin'].map((social, i) => (
                                <a key={i} href="#" className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-secondary border border-border flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300">
                                    <span className="sr-only">{social}</span>
                                    <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.477 2 2 6.477 2 12c0 5.523 4.477 10 10 10s10-4.477 10-10c0-5.523-4.477-10-10-10z" /></svg>
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Links Columns */}
                    <div className="hidden lg:col-span-1"></div>

                    <div className="col-span-1 sm:col-span-1 text-center sm:text-left">
                        <h4 className="font-bold text-foreground mb-6 font-sans text-sm sm:text-base">Product</h4>
                        <ul className="space-y-4">
                            {['Features', 'Pricing', 'Testimonials', 'Integrations', 'Changelog'].map((item) => (
                                <li key={item}><Link href="#" className="text-muted-foreground hover:text-primary text-xs sm:text-sm transition-colors font-medium">{item}</Link></li>
                            ))}
                        </ul>
                    </div>

                    <div className="col-span-1 sm:col-span-1 text-center sm:text-left">
                        <h4 className="font-bold text-foreground mb-6 font-sans text-sm sm:text-base">Company</h4>
                        <ul className="space-y-4">
                            {['About Us', 'Careers', 'Blog', 'Contact', 'Press'].map((item) => (
                                <li key={item}><Link href="#" className="text-muted-foreground hover:text-primary text-xs sm:text-sm transition-colors font-medium">{item}</Link></li>
                            ))}
                        </ul>
                    </div>

                    <div className="col-span-2 sm:col-span-1 text-center sm:text-left">
                        <h4 className="font-bold text-foreground mb-6 font-sans text-sm sm:text-base">Legal</h4>
                        <ul className="space-y-4">
                            {['Privacy Policy', 'Terms of Service', 'Cookie Policy', 'GDPR', 'Security'].map((item) => (
                                <li key={item}><Link href="#" className="text-muted-foreground hover:text-primary text-xs sm:text-sm transition-colors font-medium">{item}</Link></li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
                    <p className="text-muted-foreground text-[10px] sm:text-xs font-medium text-center md:text-left">© 2026 DevPortal Pro. All rights reserved.</p>
                    <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
                        <span className="flex items-center gap-2 text-muted-foreground text-[10px] sm:text-xs font-medium">
                            <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-green-500 animate-pulse"></span>
                            System Status: Operational
                        </span>
                        <p className="text-muted-foreground text-[10px] sm:text-xs font-medium">
                            A premium solution by <a href="https://xyber-clan.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline transition-all">Xyber Clan</a>
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}
