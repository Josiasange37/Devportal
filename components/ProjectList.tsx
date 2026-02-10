'use client';

import { MoreVertical, ExternalLink, Clock, CheckCircle2, AlertCircle } from 'lucide-react';

const projects = [
    { id: 1, name: 'E-commerce Redesign', client: 'Aventis Tech', progress: 75, status: 'On Track', date: '2h ago', icon: 'E' },
    { id: 2, name: 'Mobile App API', client: 'HealthSync', progress: 40, status: 'At Risk', date: '5h ago', icon: 'M' },
    { id: 3, name: 'Brand Identity', client: 'Solaris systems', progress: 100, status: 'Completed', date: '1d ago', icon: 'B' },
];

export default function ProjectList() {
    return (
        <div className="glass-premium squircle-md p-6 lg:p-8 h-full relative overflow-hidden">
            {/* Background Accent */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-[100px] pointer-events-none"></div>

            <div className="flex items-center justify-between mb-8 lg:mb-10 relative z-10">
                <div className="space-y-1">
                    <h3 className="text-xl lg:text-2xl font-black tracking-tight">Active Projects</h3>
                    <p className="text-[8px] lg:text-[10px] text-muted-foreground font-bold uppercase tracking-[0.2em] opacity-60">12 Projects in orbit</p>
                </div>
                <button className="flex items-center gap-2 px-3 lg:px-4 py-2 bg-foreground/5 dark:bg-white/5 hover:bg-foreground/10 dark:hover:bg-white/10 rounded-full text-[10px] lg:text-xs font-bold transition-all border border-border dark:border-white/5">
                    View <span className="hidden sm:inline">All</span> <ExternalLink size={12} />
                </button>
            </div>

            <div className="space-y-4">
                {projects.map((project) => (
                    <div
                        key={project.id}
                        className="group p-4 lg:p-5 bg-foreground/5 hover:bg-foreground/10 dark:bg-white/5 dark:hover:bg-white/10 border border-border/50 dark:border-white/5 hover:border-border dark:hover:border-white/10 rounded-2xl lg:rounded-[2rem] transition-all duration-500 hover:scale-[1.01] hover:shadow-2xl hover:shadow-black/10 dark:hover:shadow-black/20 cursor-pointer relative overflow-hidden"
                    >
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4 lg:mb-5">
                            <div className="flex items-center gap-3 lg:gap-4">
                                <div className="w-12 h-12 lg:w-14 lg:h-14 rounded-xl lg:rounded-2xl bg-gradient-to-br from-foreground/10 to-foreground/5 dark:from-white/10 dark:to-white/5 flex items-center justify-center text-primary font-black text-lg lg:text-xl shadow-inner border border-border dark:border-white/10 group-hover:scale-110 transition-transform duration-500">
                                    {project.icon}
                                </div>
                                <div className="min-w-0">
                                    <h4 className="font-bold text-base lg:text-lg leading-tight group-hover:text-primary transition-colors truncate">{project.name}</h4>
                                    <p className="text-[10px] lg:text-xs text-muted-foreground font-medium opacity-70 truncate">{project.client}</p>
                                </div>
                            </div>
                            <div className="flex items-center justify-between sm:justify-end gap-2">
                                <span className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-full text-[9px] lg:text-[10px] font-bold uppercase tracking-widest backdrop-blur-md border ${project.status === 'Completed' ? 'bg-green-500/10 text-green-500 border-green-500/20' :
                                        project.status === 'At Risk' ? 'bg-red-500/10 text-red-500 border-red-500/20' :
                                            'bg-primary/10 text-primary border-primary/20'
                                    }`}>
                                    {project.status === 'Completed' ? <CheckCircle2 size={10} className="lg:size-3" /> : project.status === 'At Risk' ? <AlertCircle size={10} className="lg:size-3" /> : <Clock size={10} className="lg:size-3" />}
                                    {project.status}
                                </span>
                                <button className="p-2 text-muted-foreground hover:text-foreground transition-colors">
                                    <MoreVertical size={16} />
                                </button>
                            </div>
                        </div>

                        <div className="space-y-3">
                            <div className="flex justify-between items-end">
                                <span className="text-[9px] lg:text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground">Progression</span>
                                <span className="text-xs lg:text-sm font-black tracking-tighter">{project.progress}%</span>
                            </div>
                            <div className="h-1.5 lg:h-2 w-full bg-foreground/10 dark:bg-black/20 rounded-full overflow-hidden p-[1px] lg:p-[2px] border border-border/50 dark:border-white/5">
                                <div
                                    className={`h-full transition-all duration-1000 ease-[cubic-bezier(0.23,1,0.32,1)] rounded-full ${project.progress === 100
                                            ? 'bg-gradient-to-r from-green-400 to-green-600'
                                            : 'bg-gradient-to-r from-blue-400 to-primary'
                                        }`}
                                    style={{ width: `${project.progress}%` }}
                                >
                                    <div className="w-full h-full relative overflow-hidden">
                                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full animate-[shimmer_2s_infinite]"></div>
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
