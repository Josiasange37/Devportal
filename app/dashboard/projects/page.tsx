'use client';

import {
    Plus,
    Search,
    Filter,
    LayoutGrid,
    List as ListIcon,
    MoreVertical,
    ExternalLink,
    Clock,
    CheckCircle2,
    AlertCircle,
    Calendar,
    User as UserIcon,
    ChevronDown
} from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';
import ThemeToggle from '@/components/ThemeToggle';
import { Bell } from 'lucide-react';

const projects = [
    { id: 1, name: 'E-commerce Redesign', client: 'Aventis Tech', progress: 75, status: 'On Track', date: 'Feb 12, 2026', type: 'Design', budget: '$12,500', color: 'bg-blue-500', icon: 'E' },
    { id: 2, name: 'Mobile App API', client: 'HealthSync', progress: 40, status: 'At Risk', date: 'Feb 15, 2026', type: 'Backend', budget: '$8,200', color: 'bg-red-500', icon: 'M' },
    { id: 3, name: 'Brand Identity', client: 'Solaris Systems', progress: 100, status: 'Completed', date: 'Feb 8, 2026', type: 'Branding', budget: '$5,000', color: 'bg-green-500', icon: 'B' },
    { id: 4, name: 'Cloud Migration', client: 'Vortex Data', progress: 15, status: 'On Track', date: 'Mar 1, 2026', type: 'DevOps', budget: '$25,000', color: 'bg-indigo-500', icon: 'C' },
    { id: 5, name: 'AI Chatbot Integration', client: 'Nexus AI', progress: 60, status: 'On Track', date: 'Feb 20, 2026', type: 'AI', budget: '$15,000', color: 'bg-purple-500', icon: 'A' },
];

export default function ProjectsPage() {
    return (
        <div className="animate-in fade-in duration-1000">
            {/* Page Title Section */}
            <div className="mb-6 lg:mb-8">
                <div className="flex items-center gap-3 mb-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse shadow-[0_0_10px_rgba(79,70,229,0.5)]"></div>
                    <span className="text-[9px] lg:text-[10px] font-bold text-primary uppercase tracking-[0.2em]">Operational Status: Active</span>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div>
                        <h1 className="text-2xl lg:text-3xl font-bold text-white tracking-tight mb-1 lg:mb-2">Projects</h1>
                        <p className="text-[#94A3B8] text-xs lg:text-sm">Managing 12 Active Missions across 5 sectors.</p>
                    </div>
                    <button className="flex items-center justify-center gap-2 px-5 py-3 bg-primary text-primary-foreground rounded-2xl font-bold text-xs lg:text-sm shadow-xl shadow-primary/20 hover:shadow-primary/40 sm:hover:-translate-y-1 transition-all w-full sm:w-auto">
                        <Plus size={16} className="lg:size-[18px]" />
                        New Project
                    </button>
                </div>
            </div>

            {/* Content Control Bar */}
            <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-8 bg-[#1A1A24] border border-white/5 p-4 rounded-2xl">
                <div className="flex items-center gap-3 w-full md:w-auto">
                    <div className="flex-1 md:w-80 relative group">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-[#64748B] size-4 group-focus-within:text-primary transition-colors" />
                        <input
                            type="text"
                            placeholder="Find a mission..."
                            className="w-full pl-11 pr-4 py-2.5 bg-white/5 border border-white/5 rounded-xl outline-none focus:border-primary/50 transition-all text-sm font-medium text-white placeholder:text-[#64748B]"
                        />
                    </div>
                    <button className="p-2.5 bg-white/5 border border-white/5 rounded-xl hover:bg-white/10 transition-all group">
                        <Filter size={18} className="text-[#94A3B8] group-hover:text-white" />
                    </button>
                </div>

                <div className="flex items-center gap-2 bg-black/20 p-1 rounded-xl border border-white/5">
                    <button className="p-2 bg-primary text-white shadow-lg rounded-lg transition-all">
                        <LayoutGrid size={18} />
                    </button>
                    <button className="p-2 text-[#64748B] hover:text-white transition-all">
                        <ListIcon size={18} />
                    </button>
                </div>
            </div>

            {/* Project Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pb-24 lg:pb-12">
                {projects.map((project, i) => (
                    <div
                        key={project.id}
                        className="bg-[#1A1A24] border border-white/5 rounded-2xl p-6 group hover:border-primary/30 transition-all duration-500 animate-in fade-in slide-in-from-bottom-8 relative overflow-hidden"
                        style={{ animationDelay: `${i * 0.1}s` }}
                    >
                        <div className="flex items-start justify-between mb-6">
                            <div className={`w-12 h-12 rounded-xl bg-white/5 border border-white/5 flex items-center justify-center text-xl font-bold text-primary group-hover:scale-110 transition-transform duration-500`}>
                                {project.icon}
                            </div>
                            <div className="flex items-center gap-2">
                                <span className={`px-2.5 py-1 rounded-full text-[10px] font-bold border ${project.status === 'Completed' ? 'bg-green-500/10 text-green-400 border-green-500/20' :
                                    project.status === 'At Risk' ? 'bg-red-500/10 text-red-400 border-red-500/20' :
                                        'bg-blue-500/10 text-blue-400 border-blue-500/20'
                                    }`}>
                                    {project.status}
                                </span>
                                <button className="p-1.5 text-[#64748B] hover:text-white transition-colors">
                                    <MoreVertical size={16} />
                                </button>
                            </div>
                        </div>

                        <div className="mb-8">
                            <h3 className="text-lg font-bold text-white mb-1 group-hover:text-primary transition-colors">{project.name}</h3>
                            <div className="flex items-center gap-2 text-[11px] text-[#94A3B8] font-medium">
                                <UserIcon size={12} className="opacity-50" />
                                {project.client}
                            </div>
                        </div>

                        <div className="space-y-5">
                            <div className="flex justify-between items-end">
                                <div className="space-y-1">
                                    <p className="text-[10px] text-[#64748B] font-bold uppercase tracking-widest opacity-60">Revenue</p>
                                    <p className="text-sm font-bold text-white">{project.budget}</p>
                                </div>
                                <div className="text-right space-y-1">
                                    <p className="text-[10px] text-[#64748B] font-bold uppercase tracking-widest opacity-60">Completion</p>
                                    <p className="text-sm font-bold text-white">{project.progress}%</p>
                                </div>
                            </div>

                            <div className="h-1.5 w-full bg-black/20 rounded-full overflow-hidden p-[1px] border border-white/5">
                                <div
                                    className={`h-full transition-all duration-1000 ease-[cubic-bezier(0.23,1,0.32,1)] rounded-full ${project.progress === 100
                                        ? 'bg-green-500'
                                        : 'bg-primary'
                                        }`}
                                    style={{ width: `${project.progress}%` }}
                                ></div>
                            </div>

                            <div className="pt-4 flex items-center justify-between border-t border-white/5 mt-4">
                                <div className="flex items-center gap-2 text-[10px] font-bold text-[#64748B] uppercase tracking-widest">
                                    <Clock size={12} />
                                    {project.date}
                                </div>
                                <div className="flex -space-x-2">
                                    {[1, 2].map((_, i) => (
                                        <div key={i} className="w-6 h-6 rounded-full border-2 border-[#1A1A24] bg-white/10 flex items-center justify-center text-[10px] font-bold text-white">
                                            <UserIcon size={10} />
                                        </div>
                                    ))}
                                    <div className="w-6 h-6 rounded-full border-2 border-[#1A1A24] bg-primary flex items-center justify-center text-[8px] font-bold text-white">
                                        +2
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
