'use client';

import Image from 'next/image';

interface GravityMascotProps {
    message: string;
}

export default function GravityMascot({ message }: GravityMascotProps) {
    return (
        <div className="flex flex-col items-center animate-float relative z-20">
            <div className="relative group">
                {/* Speech Bubble */}
                <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-6 w-56 bg-white dark:bg-slate-800 p-4 rounded-[2rem] shadow-2xl border border-primary/20 animate-in fade-in slide-in-from-bottom-4 duration-500">
                    <p className="text-sm font-bold text-slate-700 dark:text-slate-200 leading-relaxed text-center">
                        {message}
                    </p>
                    {/* Bubble Tail */}
                    <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-white dark:bg-slate-800 border-r border-b border-primary/20 rotate-45"></div>
                </div>

                {/* Mascot Image */}
                <div className="w-32 h-32 relative">
                    <div className="absolute inset-0 bg-primary/20 rounded-full blur-2xl animate-pulse"></div>
                    <Image
                        src="/mascot.png"
                        alt="Gravity Mascot"
                        width={128}
                        height={128}
                        className="w-full h-full object-contain relative z-10 drop-shadow-2xl"
                    />
                </div>
            </div>
        </div>
    );
}
