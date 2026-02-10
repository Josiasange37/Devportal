'use client';

import {
    Plus,
    Search,
    Filter,
    MoreVertical,
    Mail,
    Phone,
    Github,
    Twitter,
    CheckCircle2,
    Clock,
    Calendar,
    UserCircle,
    MapPin,
    MessageCircle,
    Bell
} from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';
import ThemeToggle from '@/components/ThemeToggle';
import Image from 'next/image';

const team = [
    { id: 1, name: 'Alex Rivera', role: 'Full Stack Engineer', status: 'Online', loc: 'San Francisco, CA', availability: 'Available', projects: 4, email: 'alex@devportal.pro', avatar: 'AR' },
    { id: 2, name: 'Sarah Chen', role: 'UI/UX Designer', status: 'In Meeting', loc: 'Vancouver, BC', availability: 'Busy', projects: 2, email: 'sarah@devportal.pro', avatar: 'SC' },
    { id: 3, name: 'Marcus Thorne', role: 'Cloud Architect', status: 'Offline', loc: 'London, UK', availability: 'On Leave', projects: 0, email: 'marcus@devportal.pro', avatar: 'MT' },
    { id: 4, name: 'Elena Petrova', role: 'Product Manager', status: 'Online', loc: 'Berlin, DE', availability: 'Available', projects: 6, email: 'elena@devportal.pro', avatar: 'EP' },
    { id: 5, name: 'James Wilson', role: 'QA Lead', status: 'Online', loc: 'Austin, TX', availability: 'Available', projects: 3, email: 'james@devportal.pro', avatar: 'JW' },
];

export default function TeamPage() {
    return (
        <div className="animate-in fade-in duration-700">
            {/* Page Header */}
            <header className="glass-premium squircle-md h-16 lg:h-20 px-4 lg:px-8 flex items-center justify-between mb-6 lg:mb-8 animate-in fade-in slide-in-from-top-6 duration-1000 ease-out">
                <div className="flex flex-col">
                    <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-primary rounded-full"></div>
                        <h1 className="text-lg lg:text-xl font-black tracking-tight">Crew</h1>
                    </div>
                    <p className="hidden xs:block text-[8px] lg:text-[10px] text-muted-foreground uppercase tracking-[0.2em] font-bold opacity-60">
                        Managing 5 Team Members
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
                        <span className="hidden lg:inline">Invite Member</span>
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
                            placeholder="Find a teammate..."
                            className="w-full pl-11 pr-4 py-3 bg-foreground/5 dark:bg-white/5 border border-border dark:border-white/5 rounded-2xl outline-none focus:ring-2 focus:ring-primary/20 transition-all text-sm font-medium"
                        />
                    </div>
                    <button className="p-3 bg-foreground/5 dark:bg-white/5 border border-border dark:border-white/5 rounded-2xl hover:bg-foreground/10 transition-all">
                        <Filter size={20} className="text-muted-foreground" />
                    </button>
                </div>
            </div>

            {/* Team Directory Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 pb-24 lg:pb-12">
                {team.map((member, i) => (
                    <div
                        key={member.id}
                        className="glass-premium squircle-md p-6 lg:p-8 group hover:scale-[1.02] transition-all duration-500 border-border animate-in fade-in slide-in-from-bottom-8 relative overflow-hidden"
                        style={{ animationDelay: `${i * 0.1 + 0.3}s` }}
                    >
                        {/* Background Decoration */}
                        <div className="absolute -top-10 -right-10 w-32 h-32 bg-primary/5 rounded-full blur-[50px] pointer-events-none group-hover:bg-primary/10 transition-colors"></div>

                        <div className="flex items-start justify-between relative z-10 mb-8">
                            <div className="relative group/avatar">
                                <div className="w-16 h-16 lg:w-20 lg:h-20 rounded-[2rem] bg-gradient-to-tr from-foreground/10 to-foreground/5 dark:from-white/10 dark:to-white/5 border border-border dark:border-white/20 flex items-center justify-center text-xl lg:text-2xl font-black text-primary shadow-inner transition-transform duration-500 group-hover:scale-110">
                                    {member.avatar}
                                </div>
                                <div className={`absolute bottom-0 right-0 w-5 h-5 lg:w-6 lg:h-6 rounded-full border-4 border-background dark:border-slate-900 ${member.status === 'Online' ? 'bg-green-500' :
                                        member.status === 'In Meeting' ? 'bg-orange-500' :
                                            'bg-slate-500'
                                    }`}></div>
                            </div>
                            <button className="p-2 text-muted-foreground hover:text-foreground">
                                <MoreVertical size={20} />
                            </button>
                        </div>

                        <div className="relative z-10 mb-8">
                            <h3 className="text-xl lg:text-2xl font-black tracking-tight group-hover:text-primary transition-colors">{member.name}</h3>
                            <p className="text-xs lg:text-sm text-muted-foreground font-bold opacity-70 mb-4">{member.role}</p>

                            <div className="flex flex-wrap gap-2">
                                <span className={`px-2.5 py-1 rounded-full text-[9px] font-black uppercase tracking-widest border ${member.availability === 'Available' ? 'bg-green-500/10 text-green-500 border-green-500/20' :
                                        member.availability === 'Busy' ? 'bg-orange-500/10 text-orange-500 border-orange-500/20' :
                                            'bg-slate-500/10 text-slate-500 border-slate-500/20'
                                    }`}>
                                    {member.availability}
                                </span>
                                <span className="px-2.5 py-1 rounded-full text-[9px] font-black uppercase tracking-widest bg-foreground/5 dark:bg-white/5 border border-border dark:border-white/10 text-muted-foreground">
                                    {member.projects} Projects
                                </span>
                            </div>
                        </div>

                        <div className="flex items-center gap-3 relative z-10 pt-6 border-t border-border dark:border-white/5">
                            <button className="p-3 bg-foreground/5 dark:bg-white/5 rounded-2xl hover:bg-primary/20 hover:text-primary transition-all flex-1 flex items-center justify-center">
                                <Mail size={18} />
                            </button>
                            <button className="p-3 bg-foreground/5 dark:bg-white/5 rounded-2xl hover:bg-primary/20 hover:text-primary transition-all flex-1 flex items-center justify-center">
                                <MessageCircle size={18} />
                            </button>
                            <button className="p-3 bg-foreground/5 dark:bg-white/5 rounded-2xl hover:bg-primary/20 hover:text-primary transition-all flex-1 flex items-center justify-center">
                                <Phone size={18} />
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
