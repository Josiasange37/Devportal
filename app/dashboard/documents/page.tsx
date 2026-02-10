'use client';

import { FileText, Search, Plus, Folder, Download, ExternalLink, HardDrive, Shield } from 'lucide-react';

export default function DocumentsPage() {
    const documents = [
        { name: 'Mission_Briefing_Alpha.pdf', size: '2.4 MB', type: 'PDF', date: 'Feb 10, 2026' },
        { name: 'Security_Protocols_v4.docx', size: '1.1 MB', type: 'DOCX', date: 'Feb 08, 2026' },
        { name: 'System_Architecture_Final.fig', size: '12.8 MB', type: 'FIG', date: 'Feb 05, 2026' },
        { name: 'Squad_Onboarding_Manual.pdf', size: '4.2 MB', type: 'PDF', date: 'Feb 01, 2026' },
    ];

    return (
        <div className="animate-in fade-in duration-1000">
            {/* Page Title Section */}
            <div className="mb-6 lg:mb-10">
                <div className="flex items-center gap-3 mb-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse shadow-[0_0_10px_rgba(79,70,229,0.5)]"></div>
                    <span className="text-[9px] lg:text-[10px] font-bold text-primary uppercase tracking-[0.2em]">Operational Status: Archives Accessible</span>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div>
                        <h1 className="text-2xl lg:text-3xl font-bold text-white tracking-tight mb-1 lg:mb-2">Documents</h1>
                        <p className="text-[#94A3B8] text-xs lg:text-sm">Managing tactical data and operational documentation.</p>
                    </div>
                    <button className="flex items-center justify-center gap-2 px-5 py-3 bg-primary text-primary-foreground rounded-2xl font-bold text-xs lg:text-sm shadow-xl shadow-primary/20 hover:shadow-primary/40 sm:hover:-translate-y-1 transition-all w-full sm:w-auto">
                        <Plus size={16} className="lg:size-[18px]" />
                        Upload Archive
                    </button>
                </div>
            </div>

            {/* Storage Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6 mb-8 lg:mb-10">
                {[
                    { label: 'Tactical Storage', value: '1.2 GB', total: '10 GB', icon: <HardDrive size={20} />, color: 'text-primary' },
                    { label: 'Vault Protection', value: 'High Level', total: 'AES-256', icon: <Shield size={20} />, color: 'text-green-400' },
                    { label: 'Active Relays', value: '14 Files', total: 'Shared', icon: <Folder size={20} />, color: 'text-blue-400' },
                ].map((stat, i) => (
                    <div key={i} className="bg-[#1A1A24] border border-white/5 p-6 rounded-2xl">
                        <div className="flex items-center gap-4 mb-4">
                            <div className={`p-2.5 bg-white/5 rounded-xl ${stat.color}`}>
                                {stat.icon}
                            </div>
                            <div>
                                <p className="text-[10px] font-bold text-[#64748B] uppercase tracking-widest">{stat.label}</p>
                                <p className="text-lg font-bold text-white tracking-tight">{stat.value}</p>
                            </div>
                        </div>
                        <div className="w-full bg-white/5 h-1.5 rounded-full overflow-hidden">
                            <div className="bg-primary h-full w-[12%] transition-all duration-1000"></div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Document List */}
            <div className="bg-[#1A1A24] border border-white/5 rounded-3xl overflow-hidden">
                <div className="p-6 border-b border-white/5">
                    <div className="relative group max-w-md">
                        <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-[#64748B]" />
                        <input
                            type="text"
                            placeholder="Interrogate archives..."
                            className="w-full bg-white/5 border border-white/5 rounded-xl pl-10 pr-4 py-2.5 text-xs text-white outline-none focus:border-primary/50 transition-all font-medium"
                        />
                    </div>
                </div>
                <div className="overflow-x-auto">
                    <table className="w-full border-collapse">
                        <thead>
                            <tr className="border-b border-white/5 text-left bg-white/[0.02]">
                                <th className="px-8 py-4 text-[10px] font-bold text-[#64748B] uppercase tracking-widest">Name</th>
                                <th className="px-8 py-4 text-[10px] font-bold text-[#64748B] uppercase tracking-widest">Type</th>
                                <th className="px-8 py-4 text-[10px] font-bold text-[#64748B] uppercase tracking-widest">Size</th>
                                <th className="px-8 py-4 text-[10px] font-bold text-[#64748B] uppercase tracking-widest">Timestamp</th>
                                <th className="px-8 py-4 text-[10px] font-bold text-[#64748B] uppercase tracking-widest text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-white/5">
                            {documents.map((doc, i) => (
                                <tr key={i} className="group hover:bg-white/[0.02] transition-colors">
                                    <td className="px-8 py-5">
                                        <div className="flex items-center gap-4">
                                            <div className="p-2.5 bg-white/5 rounded-xl text-primary group-hover:scale-110 transition-transform">
                                                <FileText size={18} />
                                            </div>
                                            <span className="font-bold text-white text-sm tracking-tight">{doc.name}</span>
                                        </div>
                                    </td>
                                    <td className="px-8 py-5">
                                        <span className="text-[10px] font-bold text-[#94A3B8] uppercase px-2 py-1 bg-white/5 rounded-lg">{doc.type}</span>
                                    </td>
                                    <td className="px-8 py-5 text-[10px] font-bold text-[#64748B]">{doc.size}</td>
                                    <td className="px-8 py-5 text-[10px] font-bold text-[#64748B]">{doc.date}</td>
                                    <td className="px-8 py-5 text-right">
                                        <div className="flex items-center justify-end gap-2">
                                            <button className="p-2 text-[#64748B] hover:text-white transition-colors">
                                                <Download size={16} />
                                            </button>
                                            <button className="p-2 text-[#64748B] hover:text-primary transition-colors">
                                                <ExternalLink size={16} />
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
