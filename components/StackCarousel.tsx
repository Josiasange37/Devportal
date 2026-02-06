'use client';

export default function StackCarousel() {
    const stack = [
        {
            name: 'TypeScript',
            color: '#3178C6',
            icon: (
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-white">
                    <path d="M1.125 0C0.502 0 0 0.502 0 1.125v21.75C0 23.498 0.502 24 1.125 24h21.75c0.623 0 1.125-0.502 1.125-1.125V1.125C24 0.502 23.498 0 22.875 0H1.125zM17.842 16.645c1.196 0 2.228-0.575 2.228-2.262 0-2.316-3.213-2.396-3.213-3.6 0-0.493 0.491-0.81 1.257-0.81 0.772 0 1.83.245 1.83.245l0.347-1.92s-1.026-0.347-2.352-0.347c-1.97 0-2.905 1.125-2.905 2.652 0 2.24 3.23 2.373 3.233 3.655 0 0.605-0.563 0.96-1.393 0.96-1.114 0-2.185-0.354-2.185-0.354l-0.395 1.988s1.602 0.397 3.548 0.397v-0.005zm-7.733 0h2.46V7.48H15.6V5.37H7.132v2.11h3.003v9.16z" />
                </svg>
            )
        },
        {
            name: 'Tailwind CSS',
            color: '#06B6D4',
            icon: (
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-white">
                    <path d="M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C16.337,6.182,14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C7.666,17.818,9.027,19.2,12.001,19.2c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C10.337,13.382,8.976,12,6.001,12z" />
                </svg>
            )
        },
        {
            name: 'Node.js',
            color: '#339933',
            icon: (
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-white">
                    <path d="M12 1L4.2 5.5v9L12 19l7.8-4.5v-9L12 1zm0 2.5l5.5 3.2v6.4l-5.5 3.2-5.5-3.2v-6.4l5.5-3.2z" />
                </svg>
            )
        },
        {
            name: 'Vercel',
            color: '#000000',
            icon: (
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-white">
                    <path d="M24 22.525H0l12-21.05 12 21.05z" />
                </svg>
            )
        },
        {
            name: 'Figma',
            color: '#F24E1E',
            icon: (
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-white">
                    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 0c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zM8 12c0 2.21-1.79 4-4 4s-4-1.79-4-4 1.79-4 4-4 4 1.79 4 4zM8 6c0 2.21-1.79 4-4 4S0 8.21 0 6s1.79-4 4-4 4 1.79 4 4zM16 6c0 2.21 1.79 4 4 4s4-1.79 4-4-1.79-4-4-4-4 1.79-4 4z" />
                </svg>
            )
        },
        {
            name: 'GitHub',
            color: '#181717',
            icon: (
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-white">
                    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.372.79 1.102.79 2.222 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                </svg>
            )
        },
        {
            name: 'Next.js',
            color: '#000000',
            icon: (
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-white">
                    <path d="M24 12c0 6.627-5.373 12-12 12S0 18.627 0 12 5.373 0 12 0s12 5.373 12 12zM8.345 8.824v6.352h1.906v-3.79l5.06 6.138A8.823 8.823 0 0 0 16.545 7.824l-6.29 7.63v-6.63H8.345zM20.985 12c0-4.963-4.022-8.985-8.985-8.985a8.95 8.95 0 0 0-5.748 2.096l8.847 10.733c2.406-1.503 3.886-4.137 3.886-6.95z" fillRule="evenodd" />
                </svg>
            )
        },
        {
            name: 'React',
            color: '#61DAFB',
            icon: (
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-white">
                    <path d="M23.32 10.16c.31.55.31 1.13 0 1.68-1.54 2.74-4.8 4.77-8.62 5.51a1.1 1.1 0 0 1-.22.02c-1.85 0-3.34-1.12-3.34-2.5s1.49-2.5 3.34-2.5a3.13 3.13 0 0 1 .15 0c3.27.13 6.1-1.09 7.42-3.41.31-.55.31-1.13 0-1.68-1.54-2.74-4.8-4.77-8.62-5.51a1.1 1.1 0 0 1-.22-.02c-1.85 0-3.34 1.12-3.34 2.5s1.49 2.5 3.34 2.5a3.14 3.14 0 0 1 .15 0c3.27.13 6.1-1.09 7.42-3.41.31-.55.31-1.13 0-1.68-1.54-2.74-4.8-4.77-8.62-5.51a1.1 1.1 0 0 1-.22-.02c-1.85 0-3.34 1.12-3.34 2.5s1.49 2.5 3.34 2.5c.05 0 .1 0 .15 0 3.27.13 6.1-1.09 7.42-3.41z" />
                    <circle cx="12" cy="12" r="2.5" />
                </svg>
            )
        }
    ];

    return (
        <section className="py-16 bg-background border-y border-border transition-colors duration-300 overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 mb-12 text-center">
                <p className="text-xs font-bold text-muted-foreground uppercase tracking-[0.3em] font-sans">Powering Top Engineering Teams</p>
            </div>

            <div className="relative flex overflow-x-hidden group">
                {/* Gradient Masks for smooth fading */}
                <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-background to-transparent z-10"></div>
                <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-background to-transparent z-10"></div>

                <div className="animate-marquee whitespace-nowrap flex items-center gap-16 pl-10">
                    {/* First set */}
                    {stack.map((tech, index) => (
                        <div key={index} className="flex items-center gap-4 opacity-50 hover:opacity-100 transition-all duration-300 cursor-pointer group/item">
                            {/* Icon Container with specific brand color */}
                            <div
                                className="w-10 h-10 rounded-xl flex items-center justify-center shadow-lg shadow-black/5 group-hover/item:scale-110 transition-transform duration-300"
                                style={{ backgroundColor: tech.color }}
                            >
                                {tech.icon}
                            </div>
                            <span className="text-xl font-bold text-muted-foreground group-hover/item:text-foreground transition-colors font-sans">{tech.name}</span>
                        </div>
                    ))}

                    {/* Duplicate set for infinite scroll */}
                    {stack.map((tech, index) => (
                        <div key={`dup-${index}`} className="flex items-center gap-4 opacity-50 hover:opacity-100 transition-all duration-300 cursor-pointer group/item">
                            <div
                                className="w-10 h-10 rounded-xl flex items-center justify-center shadow-lg shadow-black/5 group-hover/item:scale-110 transition-transform duration-300"
                                style={{ backgroundColor: tech.color }}
                            >
                                {tech.icon}
                            </div>
                            <span className="text-xl font-bold text-muted-foreground group-hover/item:text-foreground transition-colors font-sans">{tech.name}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
