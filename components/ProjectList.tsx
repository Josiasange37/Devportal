'use client';

import { MoreVertical, ExternalLink, Clock } from 'lucide-react';

const projects = [
    { id: 1, name: 'E-commerce Redesign', client: 'Aventis Tech', progress: 75, status: 'On Track', date: '2h ago' },
    { id: 2, name: 'Mobile App API', client: 'HealthSync', progress: 40, status: 'At Risk', date: '5h ago' },
    { id: 3, name: 'Brand Identity', client: 'Solaris systems', progress: 100, status: 'Completed', date: '1d ago' },
];

export default function ProjectList() {
    return (
        <div className="bg-card rounded-[2.5rem] border border-border p-8 shadow-sm h-full">
            <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-3">
                    <h3 className="text-xl font-bold">Active Projects</h3>
                    <span className="px-2 py-0.5 bg-primary/10 text-primary text-[10px] font-bold rounded-md">12 TOTAL</span>
                </div>
                <button className="text-sm font-bold text-primary hover:underline underline-offset-4 flex items-center gap-1">
                    Manage All <ExternalLink size={14} />
                </button>
            </div>

            <div className="space-y-6">
                {projects.map((project) => (
                    <div key={project.id} className="flex flex-col gap-4 p-5 rounded-2xl hover:bg-secondary/50 transition-all border border-transparent hover:border-border group cursor-pointer">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-primary/10 to-blue-500/10 flex items-center justify-center text-primary border border-primary/5">
                                    <span className="font-bold text-lg">{project.name.charAt(0)}</span>
                                </div>
                                <div>
                                    <h4 className="font-bold text-foreground group-hover:text-primary transition-colors">{project.name}</h4>
                                    <p className="text-xs text-muted-foreground font-medium">{project.client}</p>
                                </div>
                            </div>
                            <button className="p-2 rounded-lg hover:bg-background transition-colors text-muted-foreground">
                                <MoreVertical size={16} />
                            </button>
                        </div>

                        <div className="space-y-2">
                            <div className="flex justify-between text-[10px] uppercase font-bold tracking-widest text-muted-foreground">
                                <span>Progress</span>
                                <span>{project.progress}%</span>
                            </div>
                            <div className="h-1.5 w-full bg-secondary rounded-full overflow-hidden">
                                <div
                                    className={`h-full transition-all duration-1000 ease-out rounded-full ${project.progress === 100 ? 'bg-green-500' : 'bg-primary'
                                        }`}
                                    style={{ width: `${project.progress}%` }}
                                ></div>
                            </div>
                        </div>

                        <div className="flex items-center justify-between pt-2">
                            <div className="flex items-center gap-2 text-[10px] font-bold text-muted-foreground uppercase">
                                <Clock size={12} />
                                {project.date}
                            </div>
                            <span className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${project.status === 'Completed' ? 'bg-green-500/10 text-green-500' :
                                    project.status === 'At Risk' ? 'bg-red-500/10 text-red-500' :
                                        'bg-primary/10 text-primary'
                                }`}>
                                {project.status}
                            </span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
