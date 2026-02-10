'use client';

import React from 'react';

interface DashboardPageProps {
    children: React.ReactNode;
    fluid?: boolean;
    className?: string;
}

export default function DashboardPage({ children, fluid = false, className = '' }: DashboardPageProps) {
    if (fluid) {
        return (
            <div className={`flex-1 flex flex-col min-h-0 h-full w-full animate-in fade-in duration-700 ${className}`}>
                {children}
            </div>
        );
    }

    return (
        <div className={`flex-1 overflow-y-auto scrollbar-hide pb-24 lg:pb-8 animate-in fade-in duration-700 ${className}`}>
            <div className="max-w-[1200px] mx-auto px-4 sm:px-8 py-6 lg:py-8">
                {children}
            </div>
        </div>
    );
}
