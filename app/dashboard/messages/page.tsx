'use client';

import { MessageSquare, Search, Plus, MoreHorizontal, Send, Paperclip, Smile, ChevronDown } from 'lucide-react';
import { useState } from 'react';

export default function MessagesPage() {
    const [activeChat, setActiveChat] = useState(0);
    const [showChat, setShowChat] = useState(false);

    const contacts = [
        { name: 'Sarah Connor', msg: 'System updates are finalized.', time: '2m', unread: true },
        { name: 'Alex Murphy', msg: 'Tactical deployment successful.', time: '1h', unread: false },
        { name: 'Leo DaVinci', msg: 'New mission architectural designs uploaded.', time: '4h', unread: false },
        { name: 'Rick Deckard', msg: 'Replicant status report pending.', time: 'Yesterday', unread: false },
    ];

    return (
        <div className="h-[calc(100vh-140px)] lg:h-[calc(100vh-160px)] flex animate-in fade-in duration-1000 bg-[#1A1A24] border border-white/5 rounded-3xl overflow-hidden mb-24 lg:mb-12">
            {/* Sidebar List */}
            <div className={`${showChat ? 'hidden' : 'flex'} w-full md:w-80 md:flex border-r border-white/5 flex-col bg-[#1A1A24]`}>
                <div className="p-4 lg:p-6">
                    <div className="flex items-center justify-between mb-4 lg:mb-6">
                        <h2 className="text-xl font-bold text-white tracking-tight">Messages</h2>
                        <button className="p-2 bg-primary/10 text-primary rounded-xl hover:bg-primary/20 transition-all">
                            <Plus size={18} />
                        </button>
                    </div>
                    <div className="relative group">
                        <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-[#64748B]" />
                        <input
                            type="text"
                            placeholder="Find transmissions..."
                            className="w-full bg-[#0A0A0F]/60 border border-white/5 rounded-xl pl-10 pr-4 py-2.5 text-xs text-white outline-none focus:border-primary/50 transition-all"
                        />
                    </div>
                </div>

                <div className="flex-1 overflow-y-auto space-y-1 px-2 lg:px-3 pb-6">
                    {contacts.map((contact, i) => (
                        <button
                            key={i}
                            onClick={() => {
                                setActiveChat(i);
                                setShowChat(true);
                            }}
                            className={`w-full flex items-center gap-4 p-3 lg:p-4 rounded-2xl transition-all ${activeChat === i ? 'bg-white/5 border border-white/5' : 'hover:bg-white/5'}`}
                        >
                            <div className="w-10 h-10 lg:w-12 lg:h-12 flex-shrink-0 rounded-xl bg-gradient-to-tr from-primary to-blue-400 flex items-center justify-center text-white font-bold shadow-lg">
                                {contact.name.charAt(0)}
                            </div>
                            <div className="flex-1 text-left min-w-0">
                                <div className="flex items-center justify-between mb-0.5">
                                    <p className="text-sm font-bold text-white truncate">{contact.name}</p>
                                    <span className="text-[9px] text-[#64748B] font-bold uppercase">{contact.time}</span>
                                </div>
                                <p className="text-xs text-[#94A3B8] truncate">{contact.msg}</p>
                            </div>
                            {contact.unread && <div className="w-2 h-2 bg-primary rounded-full shadow-[0_0_8px_rgba(79,70,229,0.5)]"></div>}
                        </button>
                    ))}
                </div>
            </div>

            {/* Chat Content */}
            <div className={`${showChat ? 'flex' : 'hidden'} md:flex flex-1 flex-col bg-[#0A0A0F]`}>
                {/* Chat Header */}
                <div className="p-4 lg:p-6 border-b border-white/5 flex items-center justify-between">
                    <div className="flex items-center gap-3 lg:gap-4">
                        <button
                            onClick={() => setShowChat(false)}
                            className="md:hidden p-2 -ml-2 text-[#94A3B8] hover:text-white transition-colors"
                        >
                            <ChevronDown className="rotate-90" size={20} />
                        </button>
                        <div className="w-9 h-9 lg:w-10 lg:h-10 rounded-xl bg-[#1A1A24] flex items-center justify-center text-white font-bold border border-white/5 shadow-xl">
                            {contacts[activeChat].name.charAt(0)}
                        </div>
                        <div>
                            <p className="text-sm lg:text-base font-bold text-white tracking-tight">{contacts[activeChat].name}</p>
                            <p className="text-[9px] lg:text-[10px] text-primary font-bold uppercase tracking-widest">Active Signal</p>
                        </div>
                    </div>
                    <button className="text-[#64748B] hover:text-white transition-colors">
                        <MoreHorizontal size={20} />
                    </button>
                </div>

                {/* Messages Area */}
                <div className="flex-1 p-4 lg:p-8 overflow-y-auto space-y-6 lg:space-y-8 no-scrollbar">
                    <div className="max-w-[85%] lg:max-w-md bg-[#1A1A24] border border-white/5 p-4 rounded-2xl rounded-tl-none">
                        <p className="text-xs lg:text-sm text-[#E2E8F0] leading-relaxed">System updates are finalized. Tactical deployment scheduled for 0400 hours.</p>
                        <p className="text-[9px] text-[#64748B] font-bold mt-2 text-right">08:42 AM</p>
                    </div>
                    <div className="max-w-[85%] lg:max-w-md ml-auto bg-primary text-white p-4 rounded-2xl rounded-tr-none shadow-lg shadow-primary/20">
                        <p className="text-xs lg:text-sm leading-relaxed">Understood. Relays are operational. Awaiting sequence confirmation.</p>
                        <p className="text-[9px] text-white/60 font-bold mt-2 text-right">08:45 AM</p>
                    </div>
                </div>

                {/* Input Area */}
                <div className="p-4 lg:p-6 bg-[#1A1A24] border-t border-white/5">
                    <div className="flex items-center gap-3 lg:gap-4">
                        <button className="hidden sm:block text-[#64748B] hover:text-white transition-colors">
                            <Paperclip size={20} />
                        </button>
                        <div className="flex-1 relative">
                            <input
                                type="text"
                                placeholder="Broadcast..."
                                className="w-full bg-white/5 border border-white/5 rounded-2xl pl-5 pr-12 lg:pr-12 py-3 lg:py-3.5 text-xs lg:text-sm text-white outline-none focus:border-primary/50 transition-all font-medium"
                            />
                            <button className="absolute right-4 top-1/2 -translate-y-1/2 text-[#64748B] hover:text-white transition-colors">
                                <Smile size={20} />
                            </button>
                        </div>
                        <button className="p-3 lg:p-4 bg-primary text-white rounded-2xl shadow-xl shadow-primary/20 hover:shadow-primary/40 active:scale-95 transition-all">
                            <Send size={18} className="lg:size-5" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
