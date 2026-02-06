'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function LoginForm() {
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        businessName: ''
    });
    const [isLoading, setIsLoading] = useState(false);

    const nextStep = () => setStep(prev => prev + 1);
    const prevStep = () => setStep(prev => prev - 1);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (step < 3) {
            nextStep();
        } else {
            setIsLoading(true);
            // Simulate API call
            await new Promise(resolve => setTimeout(resolve, 1500));
            console.log('Form Submitted:', formData);
            setIsLoading(false);
            alert('Welcome to Dev Portal!');
        }
    };

    const updateFormData = (field: string, value: string) => {
        setFormData(prev => ({ ...prev, [field]: value }));
    };

    const getMascotMessage = () => {
        switch (step) {
            case 1: return "Hi! I'm Gravity. Let's start by getting to know you—what's your name?";
            case 2: return `Awesome to meet you, ${formData.name}! Now, let's set up those login keys.`;
            case 3: return "Almost there! One last thing: what's the name of your empire?";
            default: return "Welcome to the portal!";
        }
    };

    return (
        <div className="w-full max-w-md mx-auto relative">

            {/* Mascot & Speech Bubble */}
            <div className="absolute -top-24 -right-12 md:-right-24 z-20 flex flex-col items-center animate-float">
                <div className="relative group">
                    {/* Speech Bubble */}
                    <div className="absolute bottom-full right-0 mb-4 w-48 bg-white dark:bg-slate-800 p-4 rounded-2xl shadow-xl border border-primary/20 animate-in fade-in slide-in-from-bottom-4 duration-500">
                        <p className="text-xs font-bold text-slate-700 dark:text-slate-200 leading-relaxed">
                            {getMascotMessage()}
                        </p>
                        {/* Bubble Tail */}
                        <div className="absolute -bottom-2 right-6 w-4 h-4 bg-white dark:bg-slate-800 border-r border-b border-primary/20 rotate-45"></div>
                    </div>

                    {/* Mascot Image */}
                    <div className="w-24 h-24 relative">
                        <div className="absolute inset-0 bg-primary/20 rounded-full blur-xl animate-pulse"></div>
                        <img
                            src="/mascot.png"
                            alt="Gravity Mascot"
                            className="w-full h-full object-contain relative z-10 drop-shadow-2xl"
                        />
                    </div>
                </div>
            </div>

            <div className="bg-card/50 backdrop-blur-xl border border-border rounded-[2.5rem] p-10 shadow-2xl relative overflow-hidden transition-all duration-500">

                {/* Progress Bar */}
                <div className="absolute top-0 left-0 w-full h-1 bg-border/50">
                    <div
                        className="h-full bg-primary transition-all duration-500 ease-out"
                        style={{ width: `${(step / 3) * 100}%` }}
                    ></div>
                </div>

                <form onSubmit={handleSubmit} className="relative z-10">
                    {/* Step 1: User Name */}
                    {step === 1 && (
                        <div className="animate-in fade-in slide-in-from-right-8 duration-500">
                            <h2 className="text-3xl font-bold text-foreground mb-2 font-sans">Welcome!</h2>
                            <p className="text-muted-foreground mb-8">What should we call you?</p>

                            <div className="relative group mb-8">
                                <label className="text-xs font-bold text-primary uppercase tracking-widest absolute -top-2 left-4 bg-card px-2">Full Name</label>
                                <input
                                    type="text"
                                    required
                                    value={formData.name}
                                    onChange={(e) => updateFormData('name', e.target.value)}
                                    placeholder="Enter your name"
                                    className="w-full bg-background border border-border rounded-2xl p-4 pt-5 outline-none focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all font-medium text-foreground"
                                />
                            </div>

                            <button
                                type="submit"
                                className="w-full py-4 bg-primary text-primary-foreground rounded-2xl font-bold text-lg hover:shadow-xl hover:shadow-primary/20 hover:-translate-y-1 active:scale-95 transition-all flex items-center justify-center gap-2 group"
                            >
                                Continue
                                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                </svg>
                            </button>
                        </div>
                    )}

                    {/* Step 2: Credentials */}
                    {step === 2 && (
                        <div className="animate-in fade-in slide-in-from-right-8 duration-500">
                            <button
                                type="button"
                                onClick={prevStep}
                                className="mb-6 text-sm font-bold text-muted-foreground hover:text-primary transition-colors flex items-center gap-1"
                            >
                                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                                </svg>
                                Back
                            </button>
                            <h2 className="text-3xl font-bold text-foreground mb-2 font-sans">Secure Your Account</h2>
                            <p className="text-muted-foreground mb-8">Great to meet you, {formData.name}!</p>

                            <div className="space-y-6 mb-8">
                                <div className="relative group">
                                    <label className="text-xs font-bold text-primary uppercase tracking-widest absolute -top-2 left-4 bg-card px-2">Work Email</label>
                                    <input
                                        type="email"
                                        required
                                        value={formData.email}
                                        onChange={(e) => updateFormData('email', e.target.value)}
                                        placeholder="name@company.com"
                                        className="w-full bg-background border border-border rounded-2xl p-4 pt-5 outline-none focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all font-medium text-foreground"
                                    />
                                </div>
                                <div className="relative group">
                                    <label className="text-xs font-bold text-primary uppercase tracking-widest absolute -top-2 left-4 bg-card px-2">Password</label>
                                    <input
                                        type="password"
                                        required
                                        value={formData.password}
                                        onChange={(e) => updateFormData('password', e.target.value)}
                                        placeholder="••••••••"
                                        className="w-full bg-background border border-border rounded-2xl p-4 pt-5 outline-none focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all font-medium text-foreground"
                                    />
                                </div>
                            </div>

                            <button
                                type="submit"
                                className="w-full py-4 bg-primary text-primary-foreground rounded-2xl font-bold text-lg hover:shadow-xl hover:shadow-primary/20 hover:-translate-y-1 active:scale-95 transition-all flex items-center justify-center gap-2 group"
                            >
                                Setup Account
                                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                </svg>
                            </button>
                        </div>
                    )}

                    {/* Step 3: Business/Freelancer Name */}
                    {step === 3 && (
                        <div className="animate-in fade-in slide-in-from-right-8 duration-500">
                            <button
                                type="button"
                                onClick={prevStep}
                                className="mb-6 text-sm font-bold text-muted-foreground hover:text-primary transition-colors flex items-center gap-1"
                            >
                                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                                </svg>
                                Back
                            </button>
                            <h2 className="text-3xl font-bold text-foreground mb-2 font-sans">Final Step</h2>
                            <p className="text-muted-foreground mb-8">What's the name of your brand or agency?</p>

                            <div className="relative group mb-8">
                                <label className="text-xs font-bold text-primary uppercase tracking-widest absolute -top-2 left-4 bg-card px-2">Business Name</label>
                                <input
                                    type="text"
                                    required
                                    value={formData.businessName}
                                    onChange={(e) => updateFormData('businessName', e.target.value)}
                                    placeholder="e.g. Acme Design or John Doe Freelance"
                                    className="w-full bg-background border border-border rounded-2xl p-4 pt-5 outline-none focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all font-medium text-foreground"
                                />
                            </div>

                            <button
                                type="submit"
                                disabled={isLoading}
                                className="w-full py-4 bg-primary text-primary-foreground rounded-2xl font-bold text-lg hover:shadow-xl hover:shadow-primary/20 hover:-translate-y-1 active:scale-95 transition-all flex items-center justify-center gap-2 group disabled:opacity-50 disabled:pointer-events-none"
                            >
                                {isLoading ? (
                                    <span className="flex items-center gap-2">
                                        <svg className="animate-spin h-5 w-5 text-current" viewBox="0 0 24 24">
                                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none"></circle>
                                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                        </svg>
                                        Creating Account...
                                    </span>
                                ) : (
                                    <>
                                        Complete Registration
                                        <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                    </>
                                )}
                            </button>
                        </div>
                    )}
                </form>

                {/* Social Login (Only on Step 1) */}
                {step === 1 && (
                    <div className="mt-8 pt-8 border-t border-border/50 animate-in fade-in duration-700 delay-200">
                        <p className="text-center text-xs font-bold text-muted-foreground uppercase tracking-widest mb-6">Or continue with</p>
                        <div className="grid grid-cols-2 gap-4">
                            <button className="flex items-center justify-center gap-2 py-3 border border-border rounded-xl hover:bg-secondary transition-colors text-foreground font-medium text-sm">
                                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.05-.015-2.07-3.345.72-4.05-1.605-4.05-1.605-.54-1.38-1.335-1.755-1.335-1.755-1.095-.75.09-.735.09-.735 1.2.09 1.83 1.23 1.83 1.23 1.08 1.86 2.805 1.32 3.495 1.005.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405 1.02 0 2.04.135 3 .405 2.28-1.545 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.285 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" /></svg>
                                GitHub
                            </button>
                            <button className="flex items-center justify-center gap-2 py-3 border border-border rounded-xl hover:bg-secondary transition-colors text-foreground font-medium text-sm">
                                <svg className="w-5 h-5" viewBox="0 0 24 24"><path fill="#EA4335" d="M12 5.04c1.64 0 3.12.56 4.28 1.67l3.2-3.2C17.52 1.6 14.96 0 12 0 7.31 0 3.25 2.69 1.21 6.63l3.74 2.9C5.82 7.07 8.7 5.04 12 5.04z" /><path fill="#FBBC04" d="M24 12.27c0-.88-.08-1.74-.23-2.57h-11.77v4.86h6.63c-.29 1.54-1.15 2.85-2.45 3.73l3.86 3c2.26-2.09 3.56-5.17 3.56-9.02z" /><path fill="#34A853" d="M12 24c3.24 0 5.97-1.07 7.96-2.9l-3.86-3c-1.1.74-2.51 1.17-4.1 1.17-3.15 0-5.83-2.12-6.79-5.01l-3.89 3.01C3.25 21.31 7.31 24 12 24z" /><path fill="#4285F4" d="M5.21 15.26c-.24-.74-.38-1.53-.38-2.35S4.97 11.31 5.21 10.57l-3.89-3.01C.47 9.07 0 10.51 0 12.09c0 1.58.47 3.02 1.32 4.53l3.89-3.01z" /></svg>
                                Google
                            </button>
                        </div>
                    </div>
                )}

                {/* Bottom Footer */}
                <div className="mt-8 text-center">
                    <p className="text-sm text-muted-foreground">
                        Already have an account?{' '}
                        <Link href="/login" className="text-primary font-bold hover:underline">Sign In</Link>
                    </p>
                </div>
            </div>
        </div>
    );
}
