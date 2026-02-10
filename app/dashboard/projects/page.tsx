'use client';

import {
    LayoutGrid,
    List,
    Plus,
    Search,
    Filter,
    MoreVertical,
    Clock,
    CheckCircle2,
    AlertCircle,
    Users,
    MessageSquare,
    ArrowRight
} from 'lucide-react';
import DashboardPage from '@/components/DashboardPage';

export default function ProjectsPage() {
    return (
        <DashboardPage>
            {/* Header Section */}
            <div className="mb-6 lg:mb-10">
                <div className="flex items-center gap-3 mb-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse shadow-[0_0_10px_rgba(79,70,229,0.5)]"></div>
                    <span className="text-[9px] lg:text-[10px] font-bold text-primary uppercase tracking-[0.2em]">Operational Status: All Systems Go</span>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div>
                        <h1 className="text-2xl lg:text-3xl font-bold text-white tracking-tight mb-1 lg:mb-2">Active Missions</h1>
                        <p className="text-[#94A3B8] text-xs lg:text-sm">Orchestrate and monitor your ongoing tactical deployments.</p>
                    </div>
                    <button className="flex items-center justify-center gap-2 px-6 py-3 bg-primary hover:bg-primary/90 text-white rounded-xl text-xs font-bold uppercase tracking-widest shadow-xl shadow-primary/20 transition-all active:scale-95 group">
                        <Plus size={18} className="group-hover:rotate-90 transition-transform" />
                        <span>Initiate Project</span>
                    </button>
                </div>
            </div>

            {/* View Switching & Search */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <div className="flex items-center bg-[#1A1A24] border border-white/5 rounded-xl p-1">
                    <button className="p-2 bg-primary text-white rounded-lg transition-all shadow-lg">
                        <LayoutGrid size={18} />
                    </button>
                    <button className="p-2 text-[#64748B] hover:text-white transition-all">
                        <List size={18} />
                    </button>
                </div>
                <div className="flex-1 relative group">
                    <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-[#64748B] group-focus-within:text-primary transition-colors" />
                    <input
                        type="text"
                        placeholder="Search missions..."
                        className="w-full bg-[#1A1A24]/60 border border-white/5 rounded-xl pl-12 pr-4 py-3 text-sm text-white outline-none focus:border-primary/50 transition-all"
                    />
                </div>
                <button className="flex items-center justify-center gap-2 px-6 py-3 bg-[#1A1A24] border border-white/5 text-[#94A3B8] hover:text-white rounded-xl text-xs font-bold uppercase tracking-widest transition-all">
                    <Filter size={18} />
                    <span>Filter</span>
                </button>
            </div>

            {/* Project Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-24 lg:mb-12">
                {[
                    { name: 'Project Alpha-Sol', status: 'In Progress', progress: 65, team: 4, tasks: 24, priority: 'High', color: 'bg-primary' },
                    { name: 'Nebula Interface', status: 'In Review', progress: 92, team: 2, tasks: 12, priority: 'Medium', color: 'bg-green-500' },
                    { name: 'Core Relay Sigma', status: 'Planning', progress: 15, team: 6, tasks: 48, priority: 'Critical', color: 'bg-red-500' },
                    { name: 'Titan-X Deployment', status: 'In Progress', progress: 42, team: 12, tasks: 124, priority: 'High', color: 'bg-blue-500' },
                    { name: 'Quantum Ledger', status: 'Hold', progress: 5, team: 3, tasks: 32, priority: 'Low', color: 'bg-orange-500' },
                    { name: 'Oracle Database', status: 'In Progress', progress: 78, team: 5, tasks: 56, priority: 'Medium', color: 'bg-[#4F46E5]' },
                ].map((project, i) => (
                    <div key={i} className="bg-[#1A1A24] border border-white/5 rounded-2xl p-6 group hover:border-primary/30 transition-all hover:shadow-2xl hover:shadow-primary/5">
                        <div className="flex items-center justify-between mb-6">
                            <div className={`px-3 py-1 rounded-full text-[9px] font-black uppercase tracking-widest ${project.status === 'Planning' ? 'bg-white/5 text-[#64748B]' :
                                    project.status === 'In Review' ? 'bg-green-500/10 text-green-500 border border-green-500/10' :
                                        project.status === 'Hold' ? 'bg-orange-500/10 text-orange-500 border border-orange-500/10' :
                                            'bg-primary/10 text-primary border border-primary/10'
                                }`}>
                                {project.status}
                            </div>
                            <button className="text-[#64748B] hover:text-white transition-colors">
                                <MoreVertical size={18} />
                            </button>
                        </div>

                        <h3 className="text-base lg:text-lg font-black text-white uppercase tracking-tight mb-2 group-hover:text-primary transition-colors">{project.name}</h3>
                        <div className="flex items-center gap-4 mb-6">
                            <div className="flex items-center gap-1.5">
                                <Users size={14} className="text-[#64748B]" />
                                <span className="text-[10px] font-bold text-[#64748B] uppercase">{project.team} Operatives</span>
                            </div>
                            <div className="flex items-center gap-1.5">
                                <Clock size={14} className="text-[#64748B]" />
                                <span className="text-[10px] font-bold text-[#64748B] uppercase">{project.tasks} Tasks</span>
                            </div>
                        </div>

                        {/* Progress Bar */}
                        <div className="space-y-2 mb-6">
                            <div className="flex justify-between items-end">
                                <span className="text-[10px] font-black text-[#64748B] uppercase tracking-widest">Readiness</span>
                                <span className="text-[10px] font-black text-white">{project.progress}%</span>
                            </div>
                            <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
                                <div
                                    className={`h-full ${project.color} transition-all duration-1000 shadow-[0_0_10px_rgba(79,70,229,0.3)]`}
                                    style={{ width: `${project.progress}%` }}
                                ></div>
                            </div>
                        </div>

                        <button className="w-full flex items-center justify-center gap-2 py-3 bg-white/5 hover:bg-white/10 text-[#94A3B8] hover:text-white rounded-xl text-[10px] font-black uppercase tracking-widest transition-all border border-white/5 group/btn">
                            <span>Mission Control</span>
                            <ArrowRight size={14} className="group-hover/btn:translate-x-1 transition-transform" />
                        </button>
                    </div>
                ))}
            </div>
        </DashboardPage>
    );
}
