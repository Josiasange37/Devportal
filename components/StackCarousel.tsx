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
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-white">
                    <path d="M12,2L1.6,8L12,14L22.4,8L12,2M12,16.1L4.1,11.5L2,12.8L12,18.4L22,12.8L19.9,11.5L12,16.1Z" />
                    <path d="M12,18.8L3.2,13.8L3.2,12.7L2,13.4L2,14.7L12,20.4L22,14.7L22,13.4L20.8,12.7L20.8,13.8L12,18.8Z" />
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
                <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4 text-white">
                    <path fill="#F24E1E" d="M12 12V6H6C4.34315 6 3 7.34315 3 9C3 10.6569 4.34315 12 6 12H12Z" />
                    <path fill="#A259FF" d="M12 12V18H6C4.34315 18 3 16.6569 3 15C3 13.3431 4.34315 12 6 12H12Z" />
                    <path fill="#1ABCFE" d="M12 12H18C19.6569 12 21 10.6569 21 9C21 7.34315 19.6569 6 18 6H12V12Z" />
                    <path fill="#0ACF83" d="M12 12H18C19.6569 12 21 13.3431 21 15C21 16.6569 19.6569 18 18 18H12V12Z" />
                    <path fill="#1ABCFE" d="M12 12V18C12 19.6569 10.6569 21 9 21C7.34315 21 6 19.6569 6 18H12V12Z" />
                    {/* For the white icon version requested, we usually use the colored logo on white bg or white on colored bg.
              The reference shows specific bg colors with white icons inside.
              Figma usually is colored on white, or white on black. 
              The reference shows an Orange box for Figma. Let's use a white F shape or just the dots if simple. 
              Actually, the reference has a Figma 'F' in an orange box. I'll make a simplified white 'F' or the layout shape in white. 
              Let's allow the paths above to render naturally but if we need a silhouette we'd use a mask. 
              Given the 'backgroundColor: tech.color' wrapper, we likely want a WHITE icon inside.
              I will assume a white silhouette of the figma F shape for simplicity in a colored box.
          */}
                    <path fill="currentColor" d="M8 12h3v3H8zM8 6h3v3H8zM13 6h3v3h-3zM8 15c0 1.657 1.343 3 3 3s3-1.343 3-3v-3h-3v3z" fillOpacity="1" />
                </svg>
            )
        },
        {
            name: 'GitHub',
            color: '#181717',
            icon: (
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-white">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.05-.015-2.07-3.345.72-4.05-1.605-4.05-1.605-.54-1.38-1.335-1.755-1.335-1.755-1.095-.75.09-.735.09-.735 1.2.09 1.83 1.23 1.83 1.23 1.08 1.86 2.805 1.32 3.495 1.005.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405 1.02 0 2.04.135 3 .405 2.28-1.545 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.285 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
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
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-white">
                    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 2.22c2.15 0 4.19.86 5.75 2.25l-1.55 1.76c-1.12-.99-2.59-1.6-4.2-1.6-2.9 0-5.37 1.95-6.17 4.67l-2.12-.7c1.1-3.71 4.51-6.38 8.49-6.38zm0 19.56c-3.98 0-7.39-2.67-8.49-6.38l2.12-.7c.8 2.72 3.27 4.67 6.17 4.67 1.61 0 3.08-.61 4.2-1.6l1.55 1.76c-1.56 1.39-3.6 2.25-5.75 2.25z" fillRule="nonzero" />
                    <circle cx="12" cy="12" r="2.5" />
                </svg>
            )
        }
    ];

    return (
        <section className="py-12 bg-white border-y border-gray-100 overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 mb-8 text-center">
                <p className="text-sm font-bold text-slate-500 uppercase tracking-[0.2em] font-sans">Powering Top Engineering Teams</p>
            </div>

            <div className="relative flex overflow-x-hidden group">
                <div className="animate-marquee whitespace-nowrap flex items-center gap-16 pl-10">
                    {/* First set */}
                    {stack.map((tech, index) => (
                        <div key={index} className="flex items-center gap-4 opacity-75 hover:opacity-100 transition-opacity cursor-pointer group/item">
                            {/* Icon Container with specific brand color */}
                            <div className="w-10 h-10 rounded-lg flex items-center justify-center shadow-sm group-hover/item:scale-110 transition-transform duration-300" style={{ backgroundColor: tech.color }}>
                                {tech.icon}
                            </div>
                            <span className="text-xl font-bold text-gray-400 group-hover/item:text-gray-800 transition-colors font-sans">{tech.name}</span>
                        </div>
                    ))}

                    {/* Duplicate set for infinite scroll */}
                    {stack.map((tech, index) => (
                        <div key={`dup-${index}`} className="flex items-center gap-4 opacity-75 hover:opacity-100 transition-opacity cursor-pointer group/item">
                            <div className="w-10 h-10 rounded-lg flex items-center justify-center shadow-sm group-hover/item:scale-110 transition-transform duration-300" style={{ backgroundColor: tech.color }}>
                                {tech.icon}
                            </div>
                            <span className="text-xl font-bold text-gray-400 group-hover/item:text-gray-800 transition-colors font-sans">{tech.name}</span>
                        </div>
                    ))}
                    {/* Duplicate set 2 for safety on wide screens */}
                    {stack.map((tech, index) => (
                        <div key={`dup2-${index}`} className="flex items-center gap-4 opacity-75 hover:opacity-100 transition-opacity cursor-pointer group/item">
                            <div className="w-10 h-10 rounded-lg flex items-center justify-center shadow-sm group-hover/item:scale-110 transition-transform duration-300" style={{ backgroundColor: tech.color }}>
                                {tech.icon}
                            </div>
                            <span className="text-xl font-bold text-gray-400 group-hover/item:text-gray-800 transition-colors font-sans">{tech.name}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
