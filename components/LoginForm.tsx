'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useAuth } from '@/contexts/AuthContext';
import { useRouter } from 'next/navigation';
import { doc, setDoc, getDoc } from 'firebase/firestore';
import { db, auth } from '@/lib/firebase';
import { createUserWithEmailAndPassword, updateProfile, signInWithEmailAndPassword } from 'firebase/auth';

export default function LoginForm({
    onStepChange,
    onModeToggle,
    isLogin = false
}: {
    onStepChange: (step: number, name: string) => void,
    onModeToggle: (isLogin: boolean) => void,
    isLogin?: boolean
}) {
    const [internalIsLogin, setInternalIsLogin] = useState(isLogin);

    useEffect(() => {
        setInternalIsLogin(isLogin);
    }, [isLogin]);
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        businessName: ''
    });
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const { signInWithGoogle } = useAuth();
    const router = useRouter();

    const nextStep = () => {
        const newStep = step + 1;
        setStep(newStep);
        onStepChange(newStep, formData.name);
    };
    const prevStep = () => {
        const newStep = step - 1;
        setStep(newStep);
        onStepChange(newStep, formData.name);
    };

    const handleGoogleSignIn = async () => {
        try {
            await signInWithGoogle();
            router.push('/dashboard');
        } catch (err: any) {
            setError(err.message);
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError(null);

        if (internalIsLogin) {
            setIsLoading(true);
            try {
                await signInWithEmailAndPassword(auth, formData.email, formData.password);
                router.push('/dashboard');
            } catch (err: any) {
                console.error("Login error:", err);
                setError(err.message === 'Firebase: Error (auth/user-not-found).'
                    ? 'No user found with this email.'
                    : err.message === 'Firebase: Error (auth/wrong-password).'
                        ? 'Incorrect password.'
                        : 'Failed to sign in. Please check your credentials.');
            } finally {
                setIsLoading(false);
            }
            return;
        }

        if (step < 3) {
            nextStep();
        } else {
            setIsLoading(true);
            try {
                // Create user with email and password
                const userCredential = await createUserWithEmailAndPassword(auth, formData.email, formData.password);
                const user = userCredential.user;

                // Update profile with name
                await updateProfile(user, {
                    displayName: formData.name
                });

                // Store additional user data in Firestore
                await setDoc(doc(db, 'users', user.uid), {
                    name: formData.name,
                    email: formData.email,
                    businessName: formData.businessName,
                    createdAt: new Date().toISOString()
                });

                // Redirect to dashboard
                router.push('/dashboard');
            } catch (err: any) {
                console.error("Registration error:", err);
                setError(err.message);
            } finally {
                setIsLoading(false);
            }
        }
    };

    const updateFormData = (field: string, value: string) => {
        const newData = { ...formData, [field]: value };
        setFormData(newData);
        if (field === 'name') onStepChange(step, value);
    };

    const toggleMode = () => {
        const newMode = !internalIsLogin;
        setInternalIsLogin(newMode);
        onModeToggle(newMode);
        setStep(1);
        setError(null);
        onStepChange(1, formData.name);
    };

    return (
        <div className="w-full max-w-lg mx-auto relative px-4 sm:px-0">
            {/* iOS-style Glow Effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-primary/30 to-blue-500/30 rounded-[3rem] blur-2xl opacity-20 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>

            <div className="bg-card/40 backdrop-blur-3xl border border-white/10 dark:border-white/5 rounded-[3rem] p-8 sm:p-12 shadow-[0_32px_64px_-12px_rgba(0,0,0,0.2)] dark:shadow-[0_32px_64px_-12px_rgba(0,0,0,0.5)] relative overflow-hidden transition-all duration-700">

                {/* Progress Bar (Only for registration) */}
                {!internalIsLogin && (
                    <div className="absolute top-0 left-0 w-full h-1 bg-border/50">
                        <div
                            className="h-full bg-primary transition-all duration-500 ease-out"
                            style={{ width: `${(step / 3) * 100}%` }}
                        ></div>
                    </div>
                )}

                <form onSubmit={handleSubmit} className="relative z-10">
                    {/* Error Message */}
                    {error && (
                        <div className="mb-4 p-3 bg-red-500/10 border border-red-500/20 rounded-xl text-red-500 text-sm font-medium">
                            {error}
                        </div>
                    )}

                    {/* Login Mode */}
                    {internalIsLogin && (
                        <div className="animate-in fade-in slide-in-from-bottom-8 duration-700">
                            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-2 font-sans tracking-tight">Welcome Back</h2>
                            <p className="text-muted-foreground mb-8 sm:mb-10 font-medium">Sign in to your dashboard</p>

                            <div className="space-y-5 sm:space-y-6 mb-8 sm:mb-10">
                                <div className="relative group">
                                    <label className="text-[10px] sm:text-xs font-bold text-primary uppercase tracking-widest absolute -top-2 left-4 bg-background px-2 py-0.5 rounded-full border border-border/50 z-20">Email</label>
                                    <input
                                        type="email"
                                        required
                                        value={formData.email}
                                        onChange={(e) => updateFormData('email', e.target.value)}
                                        placeholder="name@company.com"
                                        className="w-full bg-background/50 border border-border rounded-2xl p-4 sm:p-5 outline-none focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all font-medium text-foreground placeholder:text-muted-foreground/50"
                                    />
                                    <div className="absolute inset-0 rounded-2xl bg-primary/5 opacity-0 group-focus-within:opacity-100 transition-opacity pointer-events-none" />
                                </div>
                                <div className="relative group">
                                    <label className="text-[10px] sm:text-xs font-bold text-primary uppercase tracking-widest absolute -top-2 left-4 bg-background px-2 py-0.5 rounded-full border border-border/50 z-20">Password</label>
                                    <input
                                        type="password"
                                        required
                                        value={formData.password}
                                        onChange={(e) => updateFormData('password', e.target.value)}
                                        placeholder="••••••••"
                                        className="w-full bg-background/50 border border-border rounded-2xl p-4 sm:p-5 outline-none focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all font-medium text-foreground placeholder:text-muted-foreground/50"
                                    />
                                    <div className="absolute inset-0 rounded-2xl bg-primary/5 opacity-0 group-focus-within:opacity-100 transition-opacity pointer-events-none" />
                                </div>
                            </div>

                            <button
                                type="submit"
                                disabled={isLoading}
                                className="w-full py-4 sm:py-5 bg-primary text-primary-foreground rounded-2xl font-bold text-lg sm:text-xl shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 hover:-translate-y-1 active:scale-[0.98] transition-all flex items-center justify-center gap-3 group disabled:opacity-50"
                            >
                                {isLoading ? (
                                    <span className="flex items-center gap-3">
                                        <svg className="animate-spin h-6 w-6 text-current" viewBox="0 0 24 24">
                                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none"></circle>
                                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                        </svg>
                                        Signing In...
                                    </span>
                                ) : (
                                    <>
                                        Sign In
                                        <svg className="w-6 h-6 group-hover:translate-x-1.5 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                        </svg>
                                    </>
                                )}
                            </button>
                        </div>
                    )}

                    {/* Step 1: User Name (Register) */}
                    {!internalIsLogin && step === 1 && (
                        <div className="animate-in fade-in slide-in-from-right-8 duration-700">
                            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-2 font-sans tracking-tight text-balance">Welcome!</h2>
                            <p className="text-muted-foreground mb-8 sm:mb-10 font-medium">What should we call you?</p>

                            <div className="relative group mb-8 sm:mb-10">
                                <label className="text-[10px] sm:text-xs font-bold text-primary uppercase tracking-widest absolute -top-2 left-4 bg-background px-2 py-0.5 rounded-full border border-border/50 z-20">Full Name</label>
                                <input
                                    type="text"
                                    required
                                    value={formData.name}
                                    onChange={(e) => updateFormData('name', e.target.value)}
                                    placeholder="Enter your name"
                                    className="w-full bg-background/50 border border-border rounded-2xl p-4 sm:p-5 outline-none focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all font-medium text-foreground placeholder:text-muted-foreground/50"
                                />
                                <div className="absolute inset-0 rounded-2xl bg-primary/5 opacity-0 group-focus-within:opacity-100 transition-opacity pointer-events-none" />
                            </div>

                            <button
                                type="submit"
                                className="w-full py-4 sm:py-5 bg-primary text-primary-foreground rounded-2xl font-bold text-lg sm:text-xl shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 hover:-translate-y-1 active:scale-[0.98] transition-all flex items-center justify-center gap-3 group"
                            >
                                Continue
                                <svg className="w-6 h-6 group-hover:translate-x-1.5 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                </svg>
                            </button>
                        </div>
                    )}

                    {/* Step 2: Credentials (Register) */}
                    {!internalIsLogin && step === 2 && (
                        <div className="animate-in fade-in slide-in-from-right-8 duration-700">
                            <button
                                type="button"
                                onClick={prevStep}
                                className="mb-6 py-2 px-1 text-sm font-bold text-muted-foreground hover:text-primary transition-colors flex items-center gap-2 group/back"
                            >
                                <svg className="w-5 h-5 group-hover/back:-translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
                                </svg>
                                Back
                            </button>
                            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-2 font-sans tracking-tight">Secure Account</h2>
                            <p className="text-muted-foreground mb-8 sm:mb-10 font-medium">Great to meet you, {formData.name}!</p>

                            <div className="space-y-5 sm:space-y-6 mb-8 sm:mb-10">
                                <div className="relative group">
                                    <label className="text-[10px] sm:text-xs font-bold text-primary uppercase tracking-widest absolute -top-2 left-4 bg-background px-2 py-0.5 rounded-full border border-border/50 z-20">Work Email</label>
                                    <input
                                        type="email"
                                        required
                                        value={formData.email}
                                        onChange={(e) => updateFormData('email', e.target.value)}
                                        placeholder="name@company.com"
                                        className="w-full bg-background/50 border border-border rounded-2xl p-4 sm:p-5 outline-none focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all font-medium text-foreground placeholder:text-muted-foreground/50"
                                    />
                                    <div className="absolute inset-0 rounded-2xl bg-primary/5 opacity-0 group-focus-within:opacity-100 transition-opacity pointer-events-none" />
                                </div>
                                <div className="relative group">
                                    <label className="text-[10px] sm:text-xs font-bold text-primary uppercase tracking-widest absolute -top-2 left-4 bg-background px-2 py-0.5 rounded-full border border-border/50 z-20">Password</label>
                                    <input
                                        type="password"
                                        required
                                        value={formData.password}
                                        onChange={(e) => updateFormData('password', e.target.value)}
                                        placeholder="••••••••"
                                        className="w-full bg-background/50 border border-border rounded-2xl p-4 sm:p-5 outline-none focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all font-medium text-foreground placeholder:text-muted-foreground/50"
                                    />
                                    <div className="absolute inset-0 rounded-2xl bg-primary/5 opacity-0 group-focus-within:opacity-100 transition-opacity pointer-events-none" />
                                </div>
                            </div>

                            <button
                                type="submit"
                                className="w-full py-4 sm:py-5 bg-primary text-primary-foreground rounded-2xl font-bold text-lg sm:text-xl shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 hover:-translate-y-1 active:scale-[0.98] transition-all flex items-center justify-center gap-3 group"
                            >
                                Setup Account
                                <svg className="w-6 h-6 group-hover:translate-x-1.5 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                </svg>
                            </button>
                        </div>
                    )}

                    {/* Step 3: Business/Freelancer Name (Register) */}
                    {!internalIsLogin && step === 3 && (
                        <div className="animate-in fade-in slide-in-from-right-8 duration-700">
                            <button
                                type="button"
                                onClick={prevStep}
                                className="mb-6 py-2 px-1 text-sm font-bold text-muted-foreground hover:text-primary transition-colors flex items-center gap-2 group/back"
                            >
                                <svg className="w-5 h-5 group-hover/back:-translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
                                </svg>
                                Back
                            </button>
                            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-2 font-sans tracking-tight">Final Step</h2>
                            <p className="text-muted-foreground mb-8 sm:mb-10 font-medium">What's the name of your brand or agency?</p>

                            <div className="relative group mb-8 sm:mb-10">
                                <label className="text-[10px] sm:text-xs font-bold text-primary uppercase tracking-widest absolute -top-2 left-4 bg-background px-2 py-0.5 rounded-full border border-border/50 z-20">Business Name</label>
                                <input
                                    type="text"
                                    required
                                    value={formData.businessName}
                                    onChange={(e) => updateFormData('businessName', e.target.value)}
                                    placeholder="e.g. Acme Design"
                                    className="w-full bg-background/50 border border-border rounded-2xl p-4 sm:p-5 outline-none focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all font-medium text-foreground placeholder:text-muted-foreground/50"
                                />
                                <div className="absolute inset-0 rounded-2xl bg-primary/5 opacity-0 group-focus-within:opacity-100 transition-opacity pointer-events-none" />
                            </div>

                            <button
                                type="submit"
                                disabled={isLoading}
                                className="w-full py-4 sm:py-5 bg-primary text-primary-foreground rounded-2xl font-bold text-lg sm:text-xl shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 hover:-translate-y-1 active:scale-[0.98] transition-all flex items-center justify-center gap-3 group disabled:opacity-50 disabled:pointer-events-none"
                            >
                                {isLoading ? (
                                    <span className="flex items-center gap-3">
                                        <svg className="animate-spin h-6 w-6 text-current" viewBox="0 0 24 24">
                                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none"></circle>
                                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                        </svg>
                                        Creating Account...
                                    </span>
                                ) : (
                                    <>
                                        Complete Registration
                                        <svg className="w-6 h-6 group-hover:translate-x-1.5 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                                        </svg>
                                    </>
                                )}
                            </button>
                        </div>
                    )}
                </form>

                {/* Social Login (Only on first screen) */}
                {(internalIsLogin || step === 1) && (
                    <div className="mt-10 sm:mt-12 pt-8 sm:pt-10 border-t border-border/40 animate-in fade-in duration-1000 delay-500">
                        <p className="text-center text-[10px] sm:text-xs font-bold text-muted-foreground uppercase tracking-widest mb-6 sm:mb-8">Or continue with</p>
                        <div className="grid grid-cols-2 gap-4 sm:gap-6">
                            <button className="flex items-center justify-center gap-3 py-3.5 sm:py-4 border border-border/60 rounded-2xl hover:bg-secondary/80 hover:border-primary/20 active:scale-[0.97] transition-all text-foreground font-bold text-sm sm:text-base disabled:opacity-50">
                                <svg className="w-5 h-5 sm:w-6 sm:h-6" viewBox="0 0 24 24" fill="currentColor"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.920.42.372.79 1.102.79 2.222 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" /></svg>
                                GitHub
                            </button>
                            <button
                                type="button"
                                onClick={handleGoogleSignIn}
                                className="flex items-center justify-center gap-3 py-3.5 sm:py-4 border border-border/60 rounded-2xl hover:bg-secondary/80 hover:border-primary/20 active:scale-[0.97] transition-all text-foreground font-bold text-sm sm:text-base"
                            >
                                <svg className="w-5 h-5 sm:w-6 sm:h-6" viewBox="0 0 24 24"><path fill="#EA4335" d="M12 5.04c1.64 0 3.12.56 4.28 1.67l3.2-3.2C17.52 1.6 14.96 0 12 0 7.31 0 3.25 2.69 1.21 6.63l3.74 2.9C5.82 7.07 8.7 5.04 12 5.04z" /><path fill="#FBBC04" d="M24 12.27c0-.88-.08-1.74-.23-2.57h-11.77v4.86h6.63c-.29 1.54-1.15 2.85-2.45 3.73l3.86 3c2.26-2.09 3.56-5.17 3.56-9.02z" /><path fill="#34A853" d="M12 24c3.24 0 5.97-1.07 7.96-2.9l-3.86-3c-1.1.74-2.51 1.17-4.1 1.17-3.15 0-5.83-2.12-6.79-5.01l-3.89 3.01C3.25 21.31 7.31 24 12 24z" /><path fill="#4285F4" d="M5.21 15.26c-.24-.74-.38-1.53-.38-2.35S4.97 11.31 5.21 10.57l-3.89-3.01C.47 9.07 0 10.51 0 12.09c0 1.58.47 3.02 1.32 4.53l3.89-3.01z" /></svg>
                                Google
                            </button>
                        </div>
                    </div>
                )}

                {/* Bottom Footer */}
                <div className="mt-8 text-center">
                    <p className="text-sm text-muted-foreground">
                        {internalIsLogin ? "Don't have an account?" : "Already have an account?"}{' '}
                        <button
                            type="button"
                            onClick={toggleMode}
                            className="text-primary font-bold hover:underline"
                        >
                            {internalIsLogin ? 'Register' : 'Sign In'}
                        </button>
                    </p>
                </div>
            </div>
        </div>
    );
}
