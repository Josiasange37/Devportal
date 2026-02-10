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
        <div className="animate-in fade-in duration-700">
            {/* Page Header */}
            <header className="glass-premium squircle-md h-16 lg:h-20 px-4 lg:px-8 flex items-center justify-between mb-6 lg:mb-8 animate-in fade-in slide-in-from-top-6 duration-1000 ease-out">
                <div className="flex flex-col">
                    <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-primary rounded-full"></div>
                        <h1 className="text-lg lg:text-xl font-black tracking-tight">Projects</h1>
                    </div>
                    <p className="hidden xs:block text-[8px] lg:text-[10px] text-muted-foreground uppercase tracking-[0.2em] font-bold opacity-60">
                        Managing 12 Active Missions
                    </p>
                </div>

                <div className="flex items-center gap-2 lg:gap-3">
                    <ThemeToggle />
                    <button className="p-2.5 lg:p-3 glass-premium hover:bg-foreground/5 dark:hover:bg-white/10 rounded-2xl transition-all relative group shadow-none">
                        <Bell size={18} className="text-muted-foreground group-hover:text-primary lg:size-5" />
                        <span className="absolute top-2.5 right-2.5 lg:top-3 lg:right-3 w-2 h-2 bg-primary rounded-full ring-4 ring-background"></span>
                    </button>
                    <div className="hidden lg:block w-[1px] h-8 bg-border dark:bg-white/10 mx-2"></div>
                    <button className="flex items-center gap-2 px-4 lg:px-6 py-2.5 lg:py-3 bg-primary text-primary-foreground rounded-xl lg:rounded-2xl font-black text-xs lg:text-sm shadow-xl shadow-primary/20 hover:shadow-primary/40 hover:-translate-y-1 transition-all">
                        <Plus size={18} />
                        <span className="hidden lg:inline">New Project</span>
                    </button>
                </div>
            </header>

            {/* Content Control Bar */}
            <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-8">
                <div className="flex items-center gap-2 w-full md:w-auto">
                    <div className="flex-1 md:w-72 relative group">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground size-4 group-focus-within:text-primary transition-colors" />
                        <input
                            type="text"
                            placeholder="Filter projects..."
                            className="w-full pl-11 pr-4 py-3 bg-foreground/5 dark:bg-white/5 border border-border dark:border-white/5 rounded-2xl outline-none focus:ring-2 focus:ring-primary/20 transition-all text-sm font-medium"
                        />
                    </div>
                    <button className="p-3 bg-foreground/5 dark:bg-white/5 border border-border dark:border-white/5 rounded-2xl hover:bg-foreground/10 transition-all">
                        <Filter size={20} className="text-muted-foreground" />
                    </button>
                </div>

                <div className="flex items-center gap-2 bg-foreground/5 dark:bg-white/5 p-1.5 rounded-2xl border border-border dark:border-white/5">
                    <button className="p-2 bg-background shadow-sm rounded-xl text-primary">
                        <LayoutGrid size={18} />
                    </button>
                    <button className="p-2 text-muted-foreground hover:text-foreground">
                        <ListIcon size={18} />
                    </button>
                </div>
            </div>

            {/* Project Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 pb-24 lg:pb-12">
                {projects.map((project, i) => (
                    <div
                        key={project.id}
                        className="glass-premium squircle-md p-6 group hover:scale-[1.02] transition-all duration-500 border-border animate-in fade-in slide-in-from-bottom-8"
                        style={{ animationDelay: `${i * 0.1 + 0.3}s` }}
                    >
                        <div className="flex items-start justify-between mb-6">
                            <div className={`w-14 h-14 rounded-2xl ${project.color}/10 border border-${project.color.split('-')[1]}-500/20 flex items-center justify-center text-2xl font-black text-${project.color.split('-')[1]}-500 shadow-inner group-hover:scale-110 transition-transform duration-500`}>
                                {project.icon}
                            </div>
                            <div className="flex items-center gap-2">
                                <span className={`px-3 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest border ${project.status === 'Completed' ? 'bg-green-500/10 text-green-500 border-green-500/20' :
                                        project.status === 'At Risk' ? 'bg-red-500/10 text-red-500 border-red-500/20' :
                                            'bg-primary/10 text-primary border-primary/20'
                                    }`}>
                                    {project.status}
                                </span>
                                <button className="p-2 text-muted-foreground hover:text-foreground">
                                    <MoreVertical size={18} />
                                </button>
                            </div>
                        </div>

                        <div className="mb-8">
                            <h3 className="text-xl font-black tracking-tight mb-1 group-hover:text-primary transition-colors">{project.name}</h3>
                            <div className="flex items-center gap-2 text-xs text-muted-foreground font-bold">
                                <UserIcon size={12} className="opacity-50" />
                                {project.client}
                            </div>
                        </div>

                        <div className="space-y-4">
                            <div className="flex justify-between items-end">
                                <div className="space-y-1">
                                    <p className="text-[10px] text-muted-foreground font-black uppercase tracking-widest opacity-50">Budget</p>
                                    <p className="text-sm font-black">{project.budget}</p>
                                </div>
                                <div className="text-right space-y-1">
                                    <p className="text-[10px] text-muted-foreground font-black uppercase tracking-widest opacity-50">Progress</p>
                                    <p className="text-sm font-black">{project.progress}%</p>
                                </div>
                            </div>

                            <div className="h-2 w-full bg-foreground/5 dark:bg-black/20 rounded-full overflow-hidden p-[2px] border border-border/50 dark:border-white/5">
                                <div
                                    className={`h-full transition-all duration-1000 ease-[cubic-bezier(0.23,1,0.32,1)] rounded-full ${project.progress === 100
                                            ? 'bg-gradient-to-r from-green-400 to-green-600'
                                            : 'bg-gradient-to-r from-blue-400 to-primary'
                                        }`}
                                    style={{ width: `${project.progress}%` }}
                                ></div>
                            </div>

                            <div className="pt-4 flex items-center justify-between border-t border-border dark:border-white/5">
                                <div className="flex items-center gap-2 text-[10px] font-black text-muted-foreground uppercase tracking-widest opacity-60">
                                    <Calendar size={12} />
                                    {project.date}
                                </div>
                                <div className="flex -space-x-2">
                                    {[1, 2, 3].map((_, i) => (
                                        <div key={i} className={`w-7 h-7 rounded-full border-2 border-background dark:border-slate-900 bg-foreground/10 dark:bg-white/10 flex items-center justify-center text-[10px] font-bold`}>
                                            <UserIcon size={12} />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
