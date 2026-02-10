import { MoreVertical, ExternalLink, Clock, CheckCircle2, AlertCircle } from 'lucide-react';

const projects = [
    { id: 1, name: 'E-commerce Redesign', client: 'Aventis Tech', progress: 75, status: 'In Progress', statusColor: 'text-blue-400 bg-blue-500/10 border-blue-500/20', deadline: 'Mar 12, 2024', icon: 'E' },
    { id: 2, name: 'Mobile App API', client: 'HealthSync', progress: 40, status: 'Review', statusColor: 'text-orange-400 bg-orange-500/10 border-orange-500/20', deadline: 'Mar 15, 2024', icon: 'M' },
    { id: 3, name: 'Brand Identity', client: 'Solaris systems', progress: 100, status: 'Complete', statusColor: 'text-green-400 bg-green-500/10 border-green-500/20', deadline: 'Feb 28, 2024', icon: 'B' },
    { id: 4, name: 'Social Dashboard', client: 'Nexus Corp', progress: 20, status: 'Planning', statusColor: 'text-purple-400 bg-purple-500/10 border-purple-500/20', deadline: 'Apr 05, 2024', icon: 'S' },
];

export default function ProjectList() {
    return (
        <div className="bg-[#1A1A24] border border-white/5 rounded-2xl overflow-hidden">
            <div className="p-4 sm:p-6 border-b border-white/5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                    <h3 className="text-base sm:text-lg font-bold text-white leading-tight">Active Projects</h3>
                    <p className="text-[10px] sm:text-xs text-[#94A3B8] mt-0.5">Manage your ongoing missions and deadlines.</p>
                </div>
                <div className="flex items-center gap-2">
                    <button className="flex-1 sm:flex-none px-3 py-2 text-[10px] sm:text-xs font-bold text-[#94A3B8] hover:text-white transition-colors">All Projects</button>
                    <button className="flex-1 sm:flex-none px-3 py-2 bg-white/5 hover:bg-white/10 text-white rounded-xl text-[10px] sm:text-xs font-bold transition-all border border-white/5 flex items-center justify-center gap-2">
                        Add New <ExternalLink size={12} className="sm:size-3.5" />
                    </button>
                </div>
            </div>

            <div className="overflow-x-auto">
                <table className="w-full text-left">
                    <thead>
                        <tr className="bg-white/20 text-[#64748B] text-[10px] font-bold uppercase tracking-widest border-b border-white/5">
                            <th className="px-6 py-4">Project</th>
                            <th className="px-6 py-4">Progress</th>
                            <th className="px-6 py-4">Status</th>
                            <th className="px-6 py-4">Timeline</th>
                            <th className="px-6 py-4"></th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-white/5">
                        {projects.map((project) => (
                            <tr key={project.id} className="group hover:bg-white/[0.02] transition-colors cursor-pointer">
                                <td className="px-6 py-4">
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center text-primary font-bold text-lg border border-white/5 group-hover:scale-110 transition-transform">
                                            {project.icon}
                                        </div>
                                        <div>
                                            <p className="text-sm font-bold text-white group-hover:text-primary transition-colors">{project.name}</p>
                                            <p className="text-[11px] text-[#94A3B8]">{project.client}</p>
                                        </div>
                                    </div>
                                </td>
                                <td className="px-6 py-4">
                                    <div className="w-32">
                                        <div className="flex justify-between items-center mb-1.5">
                                            <span className="text-[10px] font-bold text-[#94A3B8]">{project.progress}%</span>
                                        </div>
                                        <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                                            <div
                                                className="h-full bg-primary rounded-full transition-all duration-1000"
                                                style={{ width: `${project.progress}%` }}
                                            />
                                        </div>
                                    </div>
                                </td>
                                <td className="px-6 py-4">
                                    <span className={`px-2.5 py-1 rounded-full text-[10px] font-bold border ${project.statusColor}`}>
                                        {project.status}
                                    </span>
                                </td>
                                <td className="px-6 py-4">
                                    <div className="flex items-center gap-2 text-[#94A3B8]">
                                        <Clock size={14} />
                                        <span className="text-xs font-medium">{project.deadline}</span>
                                    </div>
                                </td>
                                <td className="px-6 py-4 text-right">
                                    <button className="p-2 text-[#64748B] hover:text-white transition-colors">
                                        <MoreVertical size={18} />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
