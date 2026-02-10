'use client';

import {
    HelpCircle,
    MessageCircle,
    BookOpen,
    Terminal,
    ExternalLink,
    LifeBuoy,
    Search,
    ChevronRight,
    Zap,
    MessageSquare,
    Clock,
    FileCode
} from 'lucide-react';
import DashboardPage from '@/components/DashboardPage';

export default function SupportPage() {
    return (
        <DashboardPage>
            {/* Header */}
            <div className="mb-6 lg:mb-10 text-center max-w-2xl mx-auto">
                <div className="inline-flex items-center gap-3 mb-4 px-4 py-1.5 bg-primary/10 border border-primary/20 rounded-full">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse shadow-[0_0_10px_rgba(79,70,229,0.5)]"></div>
                    <span className="text-[9px] lg:text-[10px] font-bold text-primary uppercase tracking-[0.2em]">Support Line: Online & Active</span>
                </div>
                <h1 className="text-3xl lg:text-4xl font-black text-white tracking-tight mb-4 uppercase">Mission Intelligence</h1>
                <p className="text-[#94A3B8] text-sm lg:text-base">Elite technical support for your critical deployments. Access our neural knowledge base or engage a specialist.</p>
            </div>

            {/* Quick Support Links */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 mb-12">
                {[
                    { label: 'Live Intel', desc: 'Secure terminal chat', icon: <MessageSquare className="text-primary" />, color: 'primary' },
                    { label: 'Protocol DB', desc: 'Detailed documentation', icon: <BookOpen className="text-blue-400" />, color: 'blue' },
                    { label: 'Technical Manual', desc: 'Dev tools & APIs', icon: <FileCode className="text-purple-400" />, color: 'purple' },
                    { label: 'Quick Start', desc: 'Deployment guides', icon: <Zap className="text-orange-400" />, color: 'orange' },
                ].map((item, i) => (
                    <button key={i} className="bg-[#1A1A24] border border-white/5 p-6 rounded-2xl text-left group hover:border-primary/40 transition-all hover:scale-105">
                        <div className="p-3 bg-white/5 rounded-xl w-fit mb-4 group-hover:bg-white/10 transition-colors">
                            {item.icon}
                        </div>
                        <h3 className="text-xs font-black text-white uppercase tracking-widest mb-1">{item.label}</h3>
                        <p className="text-[10px] text-[#64748B] font-bold uppercase tracking-tight">{item.desc}</p>
                    </button>
                ))}
            </div>

            {/* Support Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-24 lg:mb-12">
                {/* Knowledge Base */}
                <div className="lg:col-span-2 space-y-6">
                    <div className="flex items-center justify-between mb-2">
                        <h2 className="text-xs font-black text-[#64748B] uppercase tracking-[0.2em]">Top Intel Articles</h2>
                        <button className="text-[10px] font-black text-primary uppercase tracking-widest hover:underline">View Repository</button>
                    </div>

                    <div className="space-y-4">
                        {[
                            { title: 'Optimizing Node Transmission Speed', category: 'Backend', time: '10m read' },
                            { title: 'Securing Multi-Tenant Workspaces', category: 'Security', time: '15m read' },
                            { title: 'Advanced GraphQL Querying Protocols', category: 'API', time: '8m read' },
                            { title: 'Integrating External Mission Control', category: 'DevOps', time: '12m read' },
                        ].map((article, i) => (
                            <button key={i} className="w-full flex items-center justify-between p-5 bg-[#1A1A24] border border-white/5 rounded-2xl group hover:border-primary/20 transition-all">
                                <div className="flex items-center gap-5">
                                    <div className="p-2.5 bg-white/5 rounded-xl text-[#64748B] group-hover:text-primary transition-colors">
                                        <BookOpen size={20} />
                                    </div>
                                    <div className="text-left">
                                        <h4 className="text-sm font-bold text-white group-hover:text-primary transition-colors mb-1">{article.title}</h4>
                                        <div className="flex items-center gap-4">
                                            <span className="text-[9px] font-black uppercase text-primary tracking-widest">{article.category}</span>
                                            <div className="flex items-center gap-1.5">
                                                <Clock size={12} className="text-[#64748B]" />
                                                <span className="text-[9px] font-bold text-[#64748B] uppercase">{article.time}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <ChevronRight size={18} className="text-[#64748B] group-hover:text-white transition-all transform group-hover:translate-x-1" />
                            </button>
                        ))}
                    </div>
                </div>

                {/* Direct Command Section */}
                <div className="space-y-6">
                    <div className="bg-primary/5 border border-primary/20 rounded-2xl p-6 lg:p-8">
                        <Terminal size={32} className="text-primary mb-6" />
                        <h3 className="text-lg font-black text-white uppercase tracking-tight mb-2">Direct Command</h3>
                        <p className="text-xs text-[#94A3B8] leading-relaxed mb-8">Can't find what you need in the intel? Open a direct secure line with a senior field operative.</p>

                        <div className="space-y-4">
                            <button className="w-full py-4 bg-primary text-white rounded-xl text-xs font-black uppercase tracking-widest shadow-xl shadow-primary/20 transition-all hover:scale-105 active:scale-95">
                                Secure Live Chat
                            </button>
                            <button className="w-full py-4 bg-white/5 hover:bg-white/10 border border-white/5 text-white rounded-xl text-xs font-black uppercase tracking-widest transition-all">
                                Open Tactical Ticket
                            </button>
                        </div>
                    </div>

                    <div className="bg-[#1A1A24] border border-white/5 rounded-2xl p-6 lg:p-8 text-center">
                        <LifeBuoy size={24} className="text-[#64748B] mx-auto mb-4" />
                        <h4 className="text-xs font-black text-white uppercase tracking-widest mb-1">Status Relay</h4>
                        <p className="text-[10px] text-green-500 font-black uppercase tracking-[0.2em] mb-4">All Systems Nominal</p>
                        <button className="text-[10px] font-black text-[#64748B] hover:text-white uppercase tracking-widest flex items-center justify-center gap-2 mx-auto">
                            View Dashboard
                            <ExternalLink size={12} />
                        </button>
                    </div>
                </div>
            </div>
        </DashboardPage>
    );
}
