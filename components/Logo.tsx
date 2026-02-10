'use client';

import React from 'react';
import Image from 'next/image';

interface LogoProps {
    showText?: boolean;
    className?: string;
    iconOnly?: boolean;
}

export default function Logo({ showText = true, className = "", iconOnly = false }: LogoProps) {
    return (
        <div className={`flex items-center gap-2 ${className}`}>
            <div className="relative w-16 h-16 transition-transform hover:scale-110">
                <Image
                    src="/logo.png"
                    alt="DevPortal Logo"
                    fill
                    className="object-contain"
                />
            </div>

            {showText && !iconOnly && (
                <span className="text-2xl font-bold tracking-tight font-sans whitespace-nowrap">
                    <span className="text-foreground">DevPortal</span>
                    <span className="text-primary ml-1">Pro</span>
                </span>
            )}
        </div>
    );
}
