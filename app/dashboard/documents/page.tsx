'use client';

import { FileText, Search, Plus, Filter, Download, Trash2, Eye, Shield, HardDrive, Share2 } from 'lucide-react';
import DashboardPage from '@/components/DashboardPage';

export default function DocumentsPage() {
    return (
        <DashboardPage>
            {/* Header Section */}
            <div className="mb-6 lg:mb-10">
                <div className="flex items-center gap-3 mb-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse shadow-[0_0_10px_rgba(79,70,229,0.5)]"></div>
                    <span className="text-[9px] lg:text-[10px] font-bold text-primary uppercase tracking-[0.2em]">Operational Status: Archive Secure</span>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div>
                        <h1 className="text-2xl lg:text-3xl font-bold text-white tracking-tight mb-1 lg:mb-2">Documents</h1>
                        <p className="text-[#94A3B8] text-xs lg:text-sm">Manage your secure mission files and archives.</p>
                    </div>
                    <button className="flex items-center justify-center gap-2 px-6 py-3 bg-primary hover:bg-primary/90 text-white rounded-xl text-xs font-bold uppercase tracking-widest shadow-xl shadow-primary/20 transition-all active:scale-95 group">
                        <Plus size={18} className="group-hover:rotate-90 transition-transform" />
                        <span>Upload Intel</span>
                    </button>
                </div>
            </div>

            {/* Storage Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="bg-[#1A1A24] border border-white/5 p-6 rounded-2xl flex items-center gap-4">
                    <div className="p-3 bg-primary/10 text-primary rounded-xl">
                        <HardDrive size={24} />
                    </div>
                    <div>
                        <p className="text-[10px] font-bold text-[#64748B] uppercase tracking-widest">Storage Used</p>
                        <p className="text-xl font-bold text-white">4.2 / 10 GB</p>
                    </div>
                </div>
                <div className="bg-[#1A1A24] border border-white/5 p-6 rounded-2xl flex items-center gap-4">
                    <div className="p-3 bg-green-500/10 text-green-500 rounded-xl">
                        <Shield size={24} />
                    </div>
                    <div>
                        <p className="text-[10px] font-bold text-[#64748B] uppercase tracking-widest">Encrypted Files</p>
                        <p className="text-xl font-bold text-white">128 Items</p>
                    </div>
                </div>
                <div className="bg-[#1A1A24] border border-white/5 p-6 rounded-2xl flex items-center gap-4">
                    <div className="p-3 bg-orange-500/10 text-orange-500 rounded-xl">
                        <Share2 size={24} />
                    </div>
                    <div>
                        <p className="text-[10px] font-bold text-[#64748B] uppercase tracking-widest">Shared Access</p>
                        <p className="text-xl font-bold text-white">12 Portals</p>
                    </div>
                </div>
            </div>

            {/* Search & Filter Bar */}
            <div className="flex flex-col sm:flex-row gap-4 mb-6">
                <div className="flex-1 relative group">
                    <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-[#64748B] group-focus-within:text-primary transition-colors" />
                    <input
                        type="text"
                        placeholder="Interrogate archives..."
                        className="w-full bg-[#1A1A24]/60 border border-white/5 rounded-xl pl-12 pr-4 py-3 text-sm text-white outline-none focus:border-primary/50 transition-all"
                    />
                </div>
                <button className="flex items-center justify-center gap-2 px-6 py-3 bg-[#1A1A24] border border-white/5 text-[#94A3B8] hover:text-white rounded-xl text-xs font-bold uppercase tracking-widest transition-all">
                    <Filter size={18} />
                    <span>Filter</span>
                </button>
            </div>

            {/* Document Table */}
            <div className="bg-[#1A1A24] border border-white/5 rounded-2xl overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="border-b border-white/5">
                                <th className="px-6 py-4 text-[10px] font-bold text-[#64748B] uppercase tracking-[0.2em]">File Name</th>
                                <th className="px-6 py-4 text-[10px] font-bold text-[#64748B] uppercase tracking-[0.2em]">Status</th>
                                <th className="px-6 py-4 text-[10px] font-bold text-[#64748B] uppercase tracking-[0.2em]">Last Modified</th>
                                <th className="px-6 py-4 text-[10px] font-bold text-[#64748B] uppercase tracking-[0.2em]">Size</th>
                                <th className="px-6 py-4 text-[10px] font-bold text-[#64748B] uppercase tracking-[0.2em] text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-white/5">
                            {[
                                { name: 'Technical_Spec_A42.pdf', status: 'Secure', date: '2h ago', size: '2.4 MB' },
                                { name: 'Invoice_Jan_2024.pdf', status: 'Signed', date: '4h ago', size: '1.1 MB' },
                                { name: 'Contract_Main_Relay.docx', status: 'Pending', date: 'Yesterday', size: '840 KB' },
                                { name: 'User_Flow_Designs.fig', status: 'Archived', date: 'Feb 8', size: '12.5 MB' },
                                { name: 'DB_Migration_Log.txt', status: 'Public', date: 'Feb 5', size: '42 KB' },
                            ].map((doc, i) => (
                                <tr key={i} className="hover:bg-white/5 transition-colors group">
                                    <td className="px-6 py-4">
                                        <div className="flex items-center gap-3">
                                            <div className="p-2 bg-primary/10 text-primary rounded-lg group-hover:scale-110 transition-transform">
                                                <FileText size={16} />
                                            </div>
                                            <span className="text-xs font-bold text-white uppercase tracking-tight">{doc.name}</span>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4">
                                        <div className="flex items-center gap-1.5">
                                            <div className={`w-1.5 h-1.5 rounded-full ${doc.status === 'Secure' ? 'bg-green-500' : doc.status === 'Signed' ? 'bg-[#4F46E5]' : 'bg-orange-500'}`}></div>
                                            <span className="text-[10px] font-bold text-[#94A3B8] uppercase">{doc.status}</span>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 text-[10px] font-bold text-[#64748B] uppercase">{doc.date}</td>
                                    <td className="px-6 py-4 text-[10px] font-bold text-[#64748B] uppercase">{doc.size}</td>
                                    <td className="px-6 py-4 text-right">
                                        <div className="flex items-center justify-end gap-2">
                                            <button className="p-2 text-[#64748B] hover:text-white transition-colors" title="Download">
                                                <Download size={16} />
                                            </button>
                                            <button className="p-2 text-[#64748B] hover:text-white transition-colors" title="View">
                                                <Eye size={16} />
                                            </button>
                                            <button className="p-2 text-[#64748B] hover:text-red-400 transition-colors" title="Delete">
                                                <Trash2 size={16} />
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </DashboardPage>
    );
}
