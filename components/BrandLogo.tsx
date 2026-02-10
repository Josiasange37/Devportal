'use client';

import React from 'react';
import Image from 'next/image';

export default function BrandLogo({ className = "w-16 h-16" }: { className?: string }) {
    return (
        <div className={`relative ${className}`}>
            <Image
                src="/logo.png"
                alt="DevPortal Pro Icon"
                fill
                className="object-contain"
                priority
            />
        </div>
    );
}
