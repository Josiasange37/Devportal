'use client';

export default function StackCarousel() {
    const logos = [
        {
            name: 'TypeScript',
            svg: (
                <svg viewBox="0 0 128 128" className="h-6 w-auto">
                    <path fill="currentColor" d="M22.67 47h99.67v73.67H22.67z" opacity=".01" />
                    <path fill="currentColor" d="M1.5 63.91v62.5h125v-125H1.5zm100.73-5a15.56 15.56 0 017.82 4.5 20.58 20.58 0 013 4c0 .16-5.4 3.81-8.69 5.85-.12.08-.6-.44-1.13-1.23a7.09 7.09 0 00-5.87-3.53c-3.79-.26-6.23 1.73-6.21 5a4.58 4.58 0 00.54 2.34c.83 1.73 2.38 2.76 7.24 4.86 8.95 3.85 12.78 6.39 15.16 10 2.66 4 3.25 10.46 1.45 15.24-2 5.2-6.9 8.73-13.83 9.9a38.32 38.32 0 01-9.52-.1 23.64 23.64 0 01-12.72-6.57 25.86 25.86 0 01-3.63-5.71l3-.87c4.31-1.25 4.09-1.17 4.73-.08a15.65 15.65 0 005.36 5.1c5.18 3.06 12.27 2.64 15.63-.93a7.09 7.09 0 00.85-7.43c-1-2.06-3-3.27-9-5.57-6.85-2.64-11.67-5.48-14.64-9.48a20.64 20.64 0 01-2.6-7.32 29.42 29.42 0 01.07-8.07c1.73-6.58 7-11.16 14.37-12.47a33.07 33.07 0 018.59.18zM68.11 55.87H57.56v39.2h11.45v6.58H39.51v-6.58H50.4v-39.2H39.51V49.3h28.6z" />
                </svg>
            )
        },
        {
            name: 'React',
            svg: (
                <svg viewBox="-11.5 -10.23174 23 20.46348" className="h-5 w-auto">
                    <circle cx="0" cy="0" r="2.05" fill="currentColor" />
                    <g stroke="currentColor" strokeWidth="1" fill="none">
                        <ellipse rx="11" ry="4.2" />
                        <ellipse rx="11" ry="4.2" transform="rotate(60)" />
                        <ellipse rx="11" ry="4.2" transform="rotate(120)" />
                    </g>
                </svg>
            )
        },
        {
            name: 'Next.js',
            svg: (
                <svg viewBox="0 0 180 180" className="h-6 w-auto">
                    <mask id="mask0_408_134" style={{ maskType: 'alpha' }} maskUnits="userSpaceOnUse" x="0" y="0" width="180" height="180">
                        <circle cx="90" cy="90" r="90" fill="currentColor" />
                    </mask>
                    <g mask="url(#mask0_408_134)">
                        <circle cx="90" cy="90" r="90" fill="currentColor" fillOpacity="0.08" />
                        <path d="M149.508 157.52L69.142 54H54V125.97H66.1136V69.3836L139.999 164.845C143.333 162.614 146.509 160.165 149.508 157.52Z" fill="currentColor" />
                        <rect x="115" y="54" width="12" height="72" fill="currentColor" />
                    </g>
                </svg>
            )
        },
        {
            name: 'Node.js',
            svg: (
                <svg viewBox="0 0 128 128" className="h-6 w-auto">
                    <path fill="currentColor" d="M112.771 30.334L68.674 4.729c-2.781-1.584-6.402-1.584-9.205 0L14.901 30.334C12.031 31.985 10 35.088 10 38.407v51.142c0 3.319 2.084 6.423 4.954 8.083l11.775 6.688c5.628 2.772 7.617 2.772 10.178 2.772 8.333 0 13.093-5.039 13.093-13.828v-50.49c0-.713-.371-1.774-1.071-1.774h-5.623C42.594 41 41 42.061 41 42.773v50.49c0 3.896-3.524 7.773-10.11 4.48L18.723 90.73c-.424-.23-.723-.693-.723-1.181V38.407c0-.482.555-.966.98-1.197l44.424-25.561c.415-.235 1.025-.235 1.439 0l43.882 25.555c.42.253.272.722.272 1.203v51.142c0 .488.183.963-.232 1.198l-44.086 25.576c-.378.227-.847.227-1.261 0l-11.307-6.749c-.341-.198-.746-.269-1.073-.086-3.146 1.783-3.726 2.02-6.677 3.043-.726.253-1.797.692.41 1.929l14.798 8.754a9.294 9.294 0 004.647 1.246c1.642 0 3.25-.426 4.667-1.246l43.885-25.582c2.87-1.672 4.23-4.764 4.23-8.083V38.407c0-3.319-1.36-6.414-4.229-8.073z" />
                </svg>
            )
        },
        {
            name: 'Tailwind CSS',
            svg: (
                <svg viewBox="0 0 54 33" className="h-4 w-auto">
                    <path fill="currentColor" d="M27 0c-7.2 0-11.7 3.6-13.5 10.8 2.7-3.6 5.85-4.95 9.45-4.05 2.054.513 3.522 2.004 5.147 3.653C30.744 13.09 33.808 16.2 40.5 16.2c7.2 0 11.7-3.6 13.5-10.8-2.7 3.6-5.85 4.95-9.45 4.05-2.054-.513-3.522-2.004-5.147-3.653C36.756 3.11 33.692 0 27 0zM13.5 16.2C6.3 16.2 1.8 19.8 0 27c2.7-3.6 5.85-4.95 9.45-4.05 2.054.514 3.522 2.004 5.147 3.653C17.244 29.29 20.308 32.4 27 32.4c7.2 0 11.7-3.6 13.5-10.8-2.7 3.6-5.85 4.95-9.45 4.05-2.054-.513-3.522-2.004-5.147-3.653C23.256 19.31 20.192 16.2 13.5 16.2z" />
                </svg>
            )
        },
        {
            name: 'Figma',
            svg: (
                <svg viewBox="0 0 38 57" className="h-5 w-auto">
                    <path fill="currentColor" d="M19 28.5a9.5 9.5 0 1 1 19 0 9.5 9.5 0 0 1-19 0z" />
                    <path fill="currentColor" d="M0 47.5A9.5 9.5 0 0 1 9.5 38H19v9.5a9.5 9.5 0 1 1-19 0z" opacity=".85" />
                    <path fill="currentColor" d="M19 0v19h9.5a9.5 9.5 0 1 0 0-19H19z" opacity=".55" />
                    <path fill="currentColor" d="M0 9.5A9.5 9.5 0 0 0 9.5 19H19V0H9.5A9.5 9.5 0 0 0 0 9.5z" opacity=".7" />
                    <path fill="currentColor" d="M0 28.5A9.5 9.5 0 0 0 9.5 38H19V19H9.5A9.5 9.5 0 0 0 0 28.5z" opacity=".85" />
                </svg>
            )
        },
        {
            name: 'GitHub',
            svg: (
                <svg viewBox="0 0 98 96" className="h-6 w-auto">
                    <path fillRule="evenodd" clipRule="evenodd" fill="currentColor" d="M48.854 0C21.839 0 0 22 0 49.217c0 21.756 13.993 40.172 33.405 46.69 2.427.49 3.316-1.059 3.316-2.362 0-1.141-.08-5.052-.08-9.127-13.59 2.934-16.42-5.867-16.42-5.867-2.184-5.704-5.42-7.17-5.42-7.17-4.448-3.015.324-3.015.324-3.015 4.934.326 7.523 5.052 7.523 5.052 4.367 7.496 11.404 5.378 14.235 4.074.404-3.178 1.699-5.378 3.074-6.6-10.839-1.141-22.243-5.378-22.243-24.283 0-5.378 1.94-9.778 5.014-13.2-.485-1.222-2.184-6.275.486-13.038 0 0 4.125-1.304 13.426 5.052a46.97 46.97 0 0 1 12.214-1.63c4.125 0 8.33.571 12.213 1.63 9.302-6.356 13.427-5.052 13.427-5.052 2.67 6.763.97 11.816.485 13.038 3.155 3.422 5.015 7.822 5.015 13.2 0 18.905-11.404 23.06-22.324 24.283 1.78 1.548 3.316 4.481 3.316 9.126 0 6.6-.08 11.897-.08 13.526 0 1.304.89 2.853 3.316 2.364 19.412-6.52 33.405-24.935 33.405-46.691C97.707 22 75.788 0 48.854 0z" />
                </svg>
            )
        },
        {
            name: 'Firebase',
            svg: (
                <svg viewBox="0 0 256 351" className="h-5 w-auto">
                    <path fill="currentColor" d="M0 282.998l2.123-2.972L102.527 89.512l.212-2.017L58.48 4.358C54.77-2.606 44.33-.845 43.114 6.951L0 282.998z" opacity=".7" />
                    <path fill="currentColor" d="M135.005 150.38l32.955-33.75-32.965-62.93c-3.129-5.957-11.866-5.975-14.962 0L102.42 87.287v2.86l32.584 60.233z" opacity=".85" />
                    <path fill="currentColor" d="M139.121 347.551l116.275-64.847-33.204-204.495c-1.039-6.398-8.888-8.927-13.468-4.34L0 282.998l115.608 64.548a24.126 24.126 0 0023.513.005z" />
                </svg>
            )
        },
        {
            name: 'Vercel',
            svg: (
                <svg viewBox="0 0 76 65" className="h-4 w-auto">
                    <path fill="currentColor" d="M37.5274 0L75.0548 65H0L37.5274 0Z" />
                </svg>
            )
        },
        {
            name: 'Stripe',
            svg: (
                <svg viewBox="0 0 60 25" className="h-5 w-auto">
                    <path fill="currentColor" d="M59.64 14.28h-8.06c.19 1.93 1.6 2.55 3.2 2.55 1.64 0 2.96-.37 4.05-.95v3.32a13.23 13.23 0 0 1-4.56.83c-4.14 0-6.6-2.62-6.6-7.04 0-3.9 2.27-7.04 6.12-7.04 3.65 0 5.93 2.8 5.93 6.85v1.48h-.08zM53.79 11.6c0-1.4.67-3.07 2.35-3.07 1.73 0 2.27 1.73 2.27 3.07h-4.62zM41.57 19.82c-1.48 0-2.3-.67-2.3-.67V6.5l-3.85.8v13.12s1.65 1.6 4.87 1.6c.72 0 1.53-.1 2.24-.28v-3.42c-.42.15-1.07.3-1.55.3l.59-0.8zM32.83 5.98c1.18 0 2.13-.95 2.13-2.13a2.13 2.13 0 1 0-4.26 0c0 1.18.96 2.13 2.13 2.13zM30.9 19.72h3.86V6.45H30.9v13.27zM27.53 6.97v-.52l-3.83.8v.52c0 .82.02 2.04.02 2.93h-2.13v3.38h2.13v4.32c0 3.17 2.3 4.6 4.48 4.6 1.27 0 2.2-.26 2.2-.26v-3.48c-.38.1-.82.18-1.32.18-.97 0-1.68-.72-1.68-2v-3.37h3.04V10.7h-3.04V6.97h.13zM17.84 9.78c-.72-.32-1.48-.48-2.35-.48-2.24 0-3.83 1.06-3.83 2.93 0 2.62 3.57 2.2 3.57 3.32 0 .52-.53.72-1.27.72a7.32 7.32 0 0 1-3.06-.82v3.37c1 .48 2.16.72 3.27.72 2.35 0 4.1-1.13 4.1-2.97 0-2.85-3.57-2.4-3.57-3.37 0-.42.42-.67 1.15-.67.72 0 1.72.23 2.56.62V10.1l-.57-.32zM5.67 19.72H0V0l5.67-1.17v20.89z" />
                </svg>
            )
        },
    ];

    // Duplicate for seamless loop
    const allLogos = [...logos, ...logos];

    return (
        <section className="py-14 sm:py-16 overflow-hidden border-y border-border/50 transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 mb-8 sm:mb-10 text-center">
                <p className="text-[10px] sm:text-xs font-semibold text-muted-foreground uppercase tracking-[0.25em]">
                    Trusted by teams using
                </p>
            </div>

            <div className="relative">
                {/* Fade masks */}
                <div className="absolute inset-y-0 left-0 w-24 sm:w-44 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
                <div className="absolute inset-y-0 right-0 w-24 sm:w-44 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

                {/* Single row marquee — pure CSS, no JS */}
                <div className="flex overflow-hidden">
                    <div className="animate-marquee flex items-center shrink-0">
                        {allLogos.map((logo, i) => (
                            <div
                                key={i}
                                className="flex items-center gap-2.5 mx-6 sm:mx-10 text-muted-foreground/40 hover:text-foreground transition-all duration-500 cursor-default group shrink-0"
                            >
                                <span className="opacity-60 group-hover:opacity-100 transition-opacity duration-500 grayscale group-hover:grayscale-0">
                                    {logo.svg}
                                </span>
                                <span className="text-sm sm:text-base font-semibold tracking-tight whitespace-nowrap">
                                    {logo.name}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
