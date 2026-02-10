'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

export default function ThemeToggle() {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return <div className="w-10 h-10" />;
    }

    const cycleTheme = () => {
        if (theme === 'light') setTheme('dark');
        else if (theme === 'dark') setTheme('system');
        else setTheme('light');
    };

    return (
        <button
            onClick={cycleTheme}
            className="relative w-10 h-10 rounded-full flex items-center justify-center
                       bg-secondary/80 border border-border hover:border-primary/30
                       transition-all duration-300 hover:scale-105 active:scale-95
                       group overflow-hidden"
            aria-label="Toggle theme"
            title={`Current theme: ${theme === 'system' ? 'System' : theme === 'dark' ? 'Dark' : 'Light'}`}
        >
            {/* Sun icon (Light) */}
            <svg
                className={`absolute w-[18px] h-[18px] text-amber-500 transition-all duration-500 ease-out
                    ${theme === 'light' ? 'rotate-0 scale-100 opacity-100' : 'rotate-90 scale-0 opacity-0'}`}
                fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
            >
                <circle cx="12" cy="12" r="4" />
                <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
            </svg>

            {/* Moon icon (Dark) */}
            <svg
                className={`absolute w-[18px] h-[18px] text-blue-400 transition-all duration-500 ease-out
                    ${theme === 'dark' ? 'rotate-0 scale-100 opacity-100' : '-rotate-90 scale-0 opacity-0'}`}
                fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
            >
                <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
            </svg>

            {/* System icon (Monitor) */}
            <svg
                className={`absolute w-[18px] h-[18px] text-purple-500 transition-all duration-500 ease-out
                    ${theme === 'system' ? 'rotate-0 scale-100 opacity-100' : 'rotate-180 scale-0 opacity-0'}`}
                fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
            >
                <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
                <line x1="8" y1="21" x2="16" y2="21" />
                <line x1="12" y1="17" x2="12" y2="21" />
            </svg>
        </button>
    );
}
