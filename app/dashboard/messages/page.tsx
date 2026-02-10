'use client';

import {
    MessageSquare,
    Search,
    Plus,
    MoreHorizontal,
    Send,
    Paperclip,
    Smile,
    ChevronLeft,
    Check,
    CheckCheck,
    Phone,
    Video,
    Mic,
    MoreVertical
} from 'lucide-react';
import { useState, useRef, useEffect } from 'react';
import DashboardPage from '@/components/DashboardPage';

export default function MessagesPage() {
    const [activeChat, setActiveChat] = useState(0);
    const [showChat, setShowChat] = useState(false);
    const [message, setMessage] = useState('');
    const scrollRef = useRef<HTMLDivElement>(null);

    const contacts = [
        {
            name: 'Sarah Connor',
            msg: 'System updates are finalized. Tactical deployment scheduled for 0400 hours.',
            time: '08:42 AM',
            unread: 1,
            online: true,
            status: 'Lead Operative'
        },
        {
            name: 'Alex Murphy',
            msg: 'Tactical deployment successful.',
            time: 'Yesterday',
            unread: 0,
            online: false,
            status: 'Security Expert'
        },
        {
            name: 'Leo DaVinci',
            msg: 'New mission architectural designs uploaded.',
            time: '24 Jan',
            unread: 0,
            online: true,
            status: 'Senior Architect'
        },
        {
            name: 'Rick Deckard',
            msg: 'Replicant status report pending.',
            time: '22 Jan',
            unread: 0,
            online: false,
            status: 'Bounty Hunter'
        },
    ];

    const chatHistory = [
        { id: 1, text: 'System updates are finalized. Tactical deployment scheduled for 0400 hours.', time: '08:42 AM', sender: 'them' },
        { id: 2, text: 'Understood. Relays are operational. Awaiting sequence confirmation.', time: '08:45 AM', sender: 'me', status: 'read' },
        { id: 3, text: 'Negative on the immediate relay. Wait for my signal.', time: '08:46 AM', sender: 'them' },
        { id: 4, text: 'Acknowledged. Standing by for the primary signal.', time: '08:47 AM', sender: 'me', status: 'sent' },
    ];

    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
        }
    }, [showChat, activeChat]);

    return (
        <DashboardPage fluid className="bg-[#0A0A0F]">
            <div className="flex-1 flex overflow-hidden lg:border-t border-white/5 shadow-2xl">

                {/* --- Sidebar (Contact List) --- */}
                <div className={`${showChat ? 'hidden' : 'flex'} w-full lg:w-[400px] lg:flex border-r border-white/5 flex-col bg-[#1A1A24] transition-all duration-300`}>
                    {/* Sidebar Header */}
                    <div className="p-5 lg:p-6 bg-[#1A1A24]/80 backdrop-blur-md sticky top-0 z-20">
                        <div className="flex items-center justify-between mb-6">
                            <h2 className="text-2xl font-bold text-white tracking-tight font-sans">Messages</h2>
                            <div className="flex items-center gap-2">
                                <button className="p-2.5 bg-primary/10 text-primary rounded-xl hover:bg-primary/20 transition-all active:scale-95">
                                    <Plus size={20} />
                                </button>
                                <button className="p-2.5 text-[#94A3B8] hover:text-white transition-all lg:hidden">
                                    <MoreVertical size={20} />
                                </button>
                            </div>
                        </div>

                        {/* Search Field */}
                        <div className="relative group">
                            <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-[#64748B] group-focus-within:text-primary transition-colors" />
                            <input
                                type="text"
                                placeholder="Find transmissions..."
                                className="w-full bg-[#0A0A0F]/60 border border-white/5 rounded-2xl pl-12 pr-4 py-3 text-sm text-white outline-none focus:border-primary/50 focus:ring-4 focus:ring-primary/10 transition-all placeholder-[#475569]"
                            />
                        </div>
                    </div>

                    {/* Contacts List */}
                    <div className="flex-1 overflow-y-auto custom-scrollbar pt-2 px-3 pb-6">
                        {contacts.map((contact, i) => (
                            <button
                                key={i}
                                onClick={() => {
                                    setActiveChat(i);
                                    setShowChat(true);
                                }}
                                className={`w-full flex items-center gap-4 p-4 rounded-2xl transition-all duration-300 mb-1 group ${activeChat === i
                                    ? 'bg-primary/10 border border-primary/20'
                                    : 'hover:bg-white/5 active:scale-[0.98]'
                                    }`}
                            >
                                <div className="relative flex-shrink-0">
                                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-[#4F46E5] to-[#818CF8] flex items-center justify-center text-white font-bold text-lg shadow-lg shadow-primary/20">
                                        {contact.name.charAt(0)}
                                    </div>
                                    {contact.online && (
                                        <div className="absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 bg-green-500 rounded-full border-[3px] border-[#1A1A24] shadow-sm"></div>
                                    )}
                                </div>

                                <div className="flex-1 text-left min-w-0">
                                    <div className="flex items-center justify-between mb-1">
                                        <p className={`text-sm font-bold truncate transition-colors ${activeChat === i ? 'text-primary' : 'text-white'}`}>
                                            {contact.name}
                                        </p>
                                        <span className="text-[10px] text-[#64748B] font-bold uppercase tracking-wider">
                                            {contact.time}
                                        </span>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <p className="text-xs text-[#94A3B8] truncate font-medium max-w-[180px]">
                                            {contact.msg}
                                        </p>
                                        {contact.unread > 0 && (
                                            <div className="min-w-[18px] h-[18px] bg-primary rounded-full flex items-center justify-center text-[9px] font-black text-white px-1 shadow-lg shadow-primary/30">
                                                {contact.unread}
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </button>
                        ))}
                    </div>
                </div>

                {/* --- Chat Window --- */}
                <div className={`${showChat ? 'flex' : 'hidden'} lg:flex flex-1 flex-col bg-[#0A0A0F] shadow-inner relative`}>

                    {/* Chat Header */}
                    <div className="px-5 py-4 lg:px-8 lg:py-4 border-b border-white/5 flex items-center justify-between bg-[#1A1A24]/40 backdrop-blur-xl z-20">
                        <div className="flex items-center gap-4">
                            <button
                                onClick={() => setShowChat(false)}
                                className="lg:hidden p-2 -ml-2 text-[#94A3B8] hover:text-white transition-colors"
                            >
                                <ChevronLeft size={24} />
                            </button>

                            <div className="relative">
                                <div className="w-11 h-11 rounded-2xl bg-[#1A1A24] flex items-center justify-center text-white font-bold border border-white/5 shadow-2xl overflow-hidden">
                                    {contacts[activeChat].name.charAt(0)}
                                </div>
                                {contacts[activeChat].online && (
                                    <div className="absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 bg-green-500 rounded-full border-[3px] border-[#0A0A0F]"></div>
                                )}
                            </div>

                            <div>
                                <p className="text-base font-bold text-white tracking-tight leading-tight">
                                    {contacts[activeChat].name}
                                </p>
                                <div className="flex items-center gap-1.5">
                                    <p className="text-[10px] text-green-400 font-bold uppercase tracking-widest animate-pulse">
                                        {contacts[activeChat].online ? 'Online' : 'Encrypted'}
                                    </p>
                                    <span className="w-0.5 h-0.5 rounded-full bg-white/20"></span>
                                    <p className="text-[10px] text-[#64748B] font-bold uppercase tracking-tighter">
                                        {contacts[activeChat].status}
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="flex items-center gap-1 sm:gap-4">
                            <button className="p-2.5 text-[#94A3B8] hover:text-primary hover:bg-white/5 rounded-xl transition-all hidden sm:flex">
                                <Video size={18} />
                            </button>
                            <button className="p-2.5 text-[#94A3B8] hover:text-primary hover:bg-white/5 rounded-xl transition-all hidden sm:flex">
                                <Phone size={18} />
                            </button>
                            <div className="h-6 w-[1px] bg-white/10 mx-1 hidden sm:block"></div>
                            <button className="p-2.5 text-[#94A3B8] hover:text-white hover:bg-white/5 rounded-xl transition-all">
                                <Search size={20} />
                            </button>
                            <button className="p-2.5 text-[#94A3B8] hover:text-white hover:bg-white/5 rounded-xl transition-all">
                                <MoreVertical size={20} />
                            </button>
                        </div>
                    </div>

                    {/* Messages Feed */}
                    <div
                        ref={scrollRef}
                        className="flex-1 p-5 lg:p-10 overflow-y-auto space-y-6 no-scrollbar scrolling-touch bg-[#0A0A0F]/50"
                    >
                        {/* Timestamp Separator */}
                        <div className="flex justify-center my-8">
                            <span className="px-4 py-1.5 bg-white/5 rounded-xl text-[10px] font-bold text-[#64748B] uppercase tracking-[0.2em] border border-white/5 backdrop-blur-sm">
                                Mission Log: Today
                            </span>
                        </div>

                        {chatHistory.map((msg) => (
                            <div
                                key={msg.id}
                                className={`flex flex-col ${msg.sender === 'me' ? 'items-end' : 'items-start'} animate-in fade-in slide-in-from-bottom-2 duration-500`}
                            >
                                <div
                                    className={`group relative max-w-[85%] lg:max-w-[70%] px-5 py-3.5 rounded-2xl shadow-xl transition-all hover:shadow-2xl ${msg.sender === 'me'
                                        ? 'bg-primary text-white rounded-tr-none border border-white/10'
                                        : 'bg-[#1A1A24] text-[#E2E8F0] rounded-tl-none border border-white/5'
                                        }`}
                                >
                                    <p className="text-sm lg:text-base leading-relaxed font-medium">
                                        {msg.text}
                                    </p>
                                    <div className={`flex items-center gap-1.5 mt-2 justify-end`}>
                                        <span className={`text-[10px] font-bold uppercase transition-opacity opacity-60`}>
                                            {msg.time}
                                        </span>
                                        {msg.sender === 'me' && (
                                            <div className="flex items-center">
                                                {msg.status === 'read' ? (
                                                    <CheckCheck size={14} className="text-white" />
                                                ) : (
                                                    <Check size={14} className="text-white/60" />
                                                )}
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        ))}

                        {/* Bottom Padding for input */}
                        <div className="h-4"></div>
                    </div>

                    {/* Interactive Input Area */}
                    <div className="p-4 lg:p-6 bg-[#1A1A24]/80 backdrop-blur-2xl border-t border-white/5 z-20">
                        <div className="flex items-center gap-3 lg:gap-5 max-w-6xl mx-auto">
                            <div className="flex items-center gap-1 sm:gap-3">
                                <button className="p-2.5 text-[#94A3B8] hover:text-primary transition-all active:scale-90">
                                    <Plus size={22} />
                                </button>
                                <button className="hidden sm:flex p-2.5 text-[#94A3B8] hover:text-primary transition-all active:scale-90">
                                    <Smile size={22} />
                                </button>
                            </div>

                            <div className="flex-1 relative group">
                                <input
                                    type="text"
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)}
                                    placeholder="Secure transmission..."
                                    className="w-full bg-[#0A0A0F]/60 border border-white/5 rounded-2xl px-6 py-4 text-sm lg:text-base text-white outline-none focus:border-primary/50 focus:ring-4 focus:ring-primary/10 transition-all font-medium placeholder-[#475569]"
                                />
                            </div>

                            <button className={`p-4 rounded-2xl shadow-2xl transition-all duration-300 active:scale-90 flex items-center justify-center ${message.trim()
                                ? 'bg-primary text-white shadow-primary/30 scale-105'
                                : 'bg-white/5 text-[#64748B] hover:text-[#94A3B8]'
                                }`}>
                                {message.trim() ? <Send size={22} className="animate-in fade-in zoom-in duration-300" /> : <Mic size={22} />}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </DashboardPage>
    );
}
