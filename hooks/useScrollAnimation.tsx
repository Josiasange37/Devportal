'use client';

import { useEffect, useRef, useState, useCallback } from 'react';

interface UseScrollAnimationOptions {
    threshold?: number;
    rootMargin?: string;
    triggerOnce?: boolean;
}

export function useScrollAnimation(options: UseScrollAnimationOptions = {}) {
    const { threshold = 0.15, rootMargin = '0px 0px -60px 0px', triggerOnce = true } = options;
    const ref = useRef<HTMLDivElement>(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const element = ref.current;
        if (!element) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    if (triggerOnce) {
                        observer.unobserve(element);
                    }
                } else if (!triggerOnce) {
                    setIsVisible(false);
                }
            },
            { threshold, rootMargin }
        );

        observer.observe(element);
        return () => observer.disconnect();
    }, [threshold, rootMargin, triggerOnce]);

    return { ref, isVisible };
}

// Stagger delay helper for lists
export function staggerDelay(index: number, base: number = 80): string {
    return `${index * base}ms`;
}

// Reusable animated wrapper component
export function AnimateOnScroll({
    children,
    animation = 'fade-up',
    delay = '0ms',
    duration = '700ms',
    className = '',
    threshold = 0.15,
}: {
    children: React.ReactNode;
    animation?: 'fade-up' | 'fade-down' | 'fade-left' | 'fade-right' | 'fade-in' | 'scale-in' | 'blur-in';
    delay?: string;
    duration?: string;
    className?: string;
    threshold?: number;
}) {
    const { ref, isVisible } = useScrollAnimation({ threshold });

    const baseStyles: React.CSSProperties = {
        transitionProperty: 'opacity, transform, filter',
        transitionDuration: duration,
        transitionTimingFunction: 'cubic-bezier(0.22, 1, 0.36, 1)',
        transitionDelay: isVisible ? delay : '0ms',
    };

    const animationMap: Record<string, { hidden: React.CSSProperties; visible: React.CSSProperties }> = {
        'fade-up': {
            hidden: { opacity: 0, transform: 'translateY(30px)' },
            visible: { opacity: 1, transform: 'translateY(0)' },
        },
        'fade-down': {
            hidden: { opacity: 0, transform: 'translateY(-30px)' },
            visible: { opacity: 1, transform: 'translateY(0)' },
        },
        'fade-left': {
            hidden: { opacity: 0, transform: 'translateX(-40px)' },
            visible: { opacity: 1, transform: 'translateX(0)' },
        },
        'fade-right': {
            hidden: { opacity: 0, transform: 'translateX(40px)' },
            visible: { opacity: 1, transform: 'translateX(0)' },
        },
        'fade-in': {
            hidden: { opacity: 0 },
            visible: { opacity: 1 },
        },
        'scale-in': {
            hidden: { opacity: 0, transform: 'scale(0.92)' },
            visible: { opacity: 1, transform: 'scale(1)' },
        },
        'blur-in': {
            hidden: { opacity: 0, filter: 'blur(10px)', transform: 'translateY(10px)' },
            visible: { opacity: 1, filter: 'blur(0px)', transform: 'translateY(0)' },
        },
    };

    const anim = animationMap[animation] || animationMap['fade-up'];
    const currentStyles = isVisible ? anim.visible : anim.hidden;

    return (
        <div
            ref={ref}
            className={className}
            style={{ ...baseStyles, ...currentStyles, willChange: 'opacity, transform' }}
        >
            {children}
        </div>
    );
}
