'use client';

import { useState, useEffect } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { useRouter } from 'next/navigation';

const InputField = ({ label, type, value, onChange, placeholder, required = true }: any) => (
    <div className="space-y-1.5">
        <label className="text-xs font-bold text-foreground/80 uppercase tracking-wider ml-1">{label}</label>
        <input
            type={type}
            required={required}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            className="w-full h-12 px-4 rounded-xl bg-secondary/30 border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all font-medium text-foreground placeholder:text-muted-foreground/50 outline-none"
        />
    </div>
);
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
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        businessName: ''
    });
    const [isLoading, setIsLoading] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const { signInWithGoogle, signInWithGithub, loginWithEmail, registerWithEmail } = useAuth();
    const router = useRouter();

    useEffect(() => {
        setInternalIsLogin(isLogin);
    }, [isLogin]);

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
        setIsLoading(true);
        setError(null);
        try {
            await signInWithGoogle();
            setIsSuccess(true);
            setTimeout(() => router.push('/dashboard'), 1500);
        } catch (err: any) {
            console.error("Social login error:", err);
            setError("Google login failed. If this persists, try to register manually.");
        } finally {
            setIsLoading(false);
        }
    };

    const handleGithubSignIn = async () => {
        setIsLoading(true);
        setError(null);
        try {
            await signInWithGithub();
            setIsSuccess(true);
            setTimeout(() => router.push('/dashboard'), 1500);
        } catch (err: any) {
            console.error("Social login error:", err);
            setError("GitHub login failed. If you don't have an account, try to register.");
        } finally {
            setIsLoading(false);
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError(null);
        if (isSuccess) return;

        if (internalIsLogin) {
            setIsLoading(true);
            try {
                await loginWithEmail(formData.email, formData.password);
                setIsSuccess(true);
                setTimeout(() => router.push('/dashboard'), 1500);
            } catch (err: any) {
                console.error("Detailed login error:", err);
                let errorMessage = "Something went wrong. Please try again.";
                if (err.code === 'auth/user-not-found' || err.message?.includes('user-not-found')) {
                    errorMessage = "Account not found. Try to register first!";
                } else if (err.code === 'auth/wrong-password' || err.message?.includes('wrong-password')) {
                    errorMessage = "Incorrect password. Please try again.";
                } else if (err.code === 'auth/invalid-credential' || err.message?.includes('invalid-credential')) {
                    errorMessage = "Invalid credentials. If you don't have an account, please register.";
                } else if (err.code === 'auth/network-request-failed') {
                    errorMessage = "Network error. Please check your internet connection or firewall.";
                }
                setError(errorMessage);
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
                await registerWithEmail(formData.email, formData.password, formData.name, formData.businessName);
                setIsSuccess(true);
                setTimeout(() => router.push('/dashboard'), 1500);
            } catch (err: any) {
                console.error("Detailed registration error:", err);
                let errorMessage = "Registration failed. Try again.";
                if (err.code === 'auth/email-already-in-use' || err.message?.includes('email-already-in-use')) {
                    errorMessage = "This email is already registered. Try signing in!";
                } else if (err.code === 'auth/weak-password') {
                    errorMessage = "Password is too weak. Try a stronger one.";
                } else if (err.code === 'auth/network-request-failed') {
                    errorMessage = "Network error. Please check your internet connection or firewall.";
                }
                setError(errorMessage);
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
        <div className="w-full relative">

            <div className={`transition-all duration-700 ${isSuccess ? 'opacity-0 scale-95 pointer-events-none' : 'opacity-100 scale-100'}`}>
                <form onSubmit={handleSubmit} className="relative z-10">
                    {/* Error Message */}
                    {error && (
                        <div className="mb-6 p-4 bg-red-500/10 border border-red-500/20 rounded-xl flex items-start gap-3">
                            <svg className="w-5 h-5 text-red-500 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                            </svg>
                            <span className="text-red-500 text-sm font-medium leading-tight">{error}</span>
                        </div>
                    )}

                    {/* Login Mode */}
                    {internalIsLogin && (
                        <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 space-y-8">
                            <div>
                                <h2 className="text-3xl font-bold text-foreground tracking-tight mb-2">Welcome back</h2>
                                <p className="text-muted-foreground">Enter your credentials to access your account.</p>
                            </div>

                            <div className="space-y-5">
                                <InputField
                                    label="Email"
                                    type="email"
                                    value={formData.email}
                                    onChange={(e: any) => updateFormData('email', e.target.value)}
                                    placeholder="name@company.com"
                                />
                                <InputField
                                    label="Password"
                                    type="password"
                                    value={formData.password}
                                    onChange={(e: any) => updateFormData('password', e.target.value)}
                                    placeholder="••••••••"
                                />
                            </div>

                            <button
                                type="submit"
                                disabled={isLoading}
                                className="w-full h-12 bg-primary text-primary-foreground rounded-xl font-bold text-sm shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 hover:-translate-y-0.5 active:scale-[0.98] transition-all flex items-center justify-center gap-2 disabled:opacity-70"
                            >
                                {isLoading ? (
                                    <>
                                        <svg className="animate-spin h-4 w-4 text-current" viewBox="0 0 24 24">
                                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none"></circle>
                                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                        </svg>
                                        <span>Signing in...</span>
                                    </>
                                ) : (
                                    <span>Sign In</span>
                                )}
                            </button>
                        </div>
                    )}

                    {/* Registration Steps */}
                    {!internalIsLogin && (
                        <div className="animate-in fade-in slide-in-from-right-4 duration-500 space-y-8">
                            {/* Step indicator */}
                            <div className="flex items-center gap-2 mb-8">
                                {[1, 2, 3].map((s) => (
                                    <div key={s} className={`h-1.5 rounded-full transition-all duration-300 ${s <= step ? 'bg-primary w-8' : 'bg-border w-2'}`} />
                                ))}
                            </div>

                            {step === 1 && (
                                <div className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-500">
                                    <div>
                                        <h2 className="text-3xl font-bold text-foreground tracking-tight mb-2">Create account</h2>
                                        <p className="text-muted-foreground">Let's start with your name.</p>
                                    </div>
                                    <InputField
                                        label="Full Name"
                                        type="text"
                                        value={formData.name}
                                        onChange={(e: any) => updateFormData('name', e.target.value)}
                                        placeholder="e.g. John Doe"
                                    />
                                    <button
                                        type="submit" // Triggers nextStep via handleSubmit logic
                                        className="w-full h-12 bg-primary text-primary-foreground rounded-xl font-bold text-sm hover:bg-primary/90 transition-all flex items-center justify-center gap-2"
                                    >
                                        Continue
                                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                                    </button>
                                </div>
                            )}

                            {step === 2 && (
                                <div className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-500">
                                    <button type="button" onClick={prevStep} className="text-xs font-bold text-muted-foreground hover:text-foreground flex items-center gap-1 mb-2">
                                        <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
                                        Back
                                    </button>
                                    <div>
                                        <h2 className="text-3xl font-bold text-foreground tracking-tight mb-2">Secure access</h2>
                                        <p className="text-muted-foreground">Set your email and password.</p>
                                    </div>
                                    <div className="space-y-5">
                                        <InputField label="Work Email" type="email" value={formData.email} onChange={(e: any) => updateFormData('email', e.target.value)} placeholder="name@company.com" />
                                        <InputField label="Password" type="password" value={formData.password} onChange={(e: any) => updateFormData('password', e.target.value)} placeholder="••••••••" />
                                    </div>
                                    <button
                                        type="submit"
                                        className="w-full h-12 bg-primary text-primary-foreground rounded-xl font-bold text-sm hover:bg-primary/90 transition-all flex items-center justify-center gap-2"
                                    >
                                        Continue
                                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                                    </button>
                                </div>
                            )}

                            {step === 3 && (
                                <div className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-500">
                                    <button type="button" onClick={prevStep} className="text-xs font-bold text-muted-foreground hover:text-foreground flex items-center gap-1 mb-2">
                                        <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
                                        Back
                                    </button>
                                    <div>
                                        <h2 className="text-3xl font-bold text-foreground tracking-tight mb-2">Final details</h2>
                                        <p className="text-muted-foreground">What's your business or agency name?</p>
                                    </div>
                                    <InputField
                                        label="Business Name"
                                        type="text"
                                        value={formData.businessName}
                                        onChange={(e: any) => updateFormData('businessName', e.target.value)}
                                        placeholder="e.g. Acme Studio"
                                    />
                                    <button
                                        type="submit"
                                        disabled={isLoading}
                                        className="w-full h-12 bg-primary text-primary-foreground rounded-xl font-bold text-sm shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 hover:-translate-y-0.5 active:scale-[0.98] transition-all flex items-center justify-center gap-2 disabled:opacity-70"
                                    >
                                        {isLoading ? (
                                            <>
                                                <svg className="animate-spin h-4 w-4 text-current" viewBox="0 0 24 24">
                                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none"></circle>
                                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                                </svg>
                                                <span>Creating Account...</span>
                                            </>
                                        ) : (
                                            <span>Complete Setup</span>
                                        )}
                                    </button>
                                </div>
                            )}
                        </div>
                    )}
                </form>

                {/* Social Login */}
                {(internalIsLogin || (!internalIsLogin && step === 1)) && (
                    <div className="mt-8 pt-8 border-t border-border/50">
                        <div className="grid grid-cols-2 gap-4">
                            <button
                                type="button"
                                onClick={handleGithubSignIn}
                                disabled={isLoading}
                                className="h-11 flex items-center justify-center gap-2.5 border border-border bg-card/50 hover:bg-accent hover:border-accent-foreground/10 rounded-xl transition-all text-sm font-semibold text-foreground/80 hover:text-foreground"
                            >
                                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.920.42.372.79 1.102.79 2.222 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" /></svg>
                                GitHub
                            </button>
                            <button
                                type="button"
                                onClick={handleGoogleSignIn}
                                disabled={isLoading}
                                className="h-11 flex items-center justify-center gap-2.5 border border-border bg-card/50 hover:bg-accent hover:border-accent-foreground/10 rounded-xl transition-all text-sm font-semibold text-foreground/80 hover:text-foreground"
                            >
                                <svg className="w-5 h-5" viewBox="0 0 24 24"><path fill="#EA4335" d="M12 5.04c1.64 0 3.12.56 4.28 1.67l3.2-3.2C17.52 1.6 14.96 0 12 0 7.31 0 3.25 2.69 1.21 6.63l3.74 2.9C5.82 7.07 8.7 5.04 12 5.04z" /><path fill="#FBBC04" d="M24 12.27c0-.88-.08-1.74-.23-2.57h-11.77v4.86h6.63c-.29 1.54-1.15 2.85-2.45 3.73l3.86 3c2.26-2.09 3.56-5.17 3.56-9.02z" /><path fill="#34A853" d="M12 24c3.24 0 5.97-1.07 7.96-2.9l-3.86-3c-1.1.74-2.51 1.17-4.1 1.17-3.15 0-5.83-2.12-6.79-5.01l-3.89 3.01C3.25 21.31 7.31 24 12 24z" /><path fill="#4285F4" d="M5.21 15.26c-.24-.74-.38-1.53-.38-2.35S4.97 11.31 5.21 10.57l-3.89-3.01C.47 9.07 0 10.51 0 12.09c0 1.58.47 3.02 1.32 4.53l3.89-3.01z" /></svg>
                                Google
                            </button>
                        </div>
                    </div>
                )}

                {/* Switch Mode */}
                <div className="mt-8 text-center">
                    <p className="text-sm text-muted-foreground">
                        {internalIsLogin ? "Don't have an account?" : "Already have an account?"}{' '}
                        <button
                            type="button"
                            onClick={toggleMode}
                            className="text-primary font-bold hover:underline"
                        >
                            {internalIsLogin ? 'Create one' : 'Sign in'}
                        </button>
                    </p>
                </div>
            </div>

            {/* Success Overlay */}
            {isSuccess && (
                <div className="absolute inset-0 z-50 flex flex-col items-center justify-center p-8 text-center bg-background/80 backdrop-blur-xl animate-in fade-in zoom-in duration-500 rounded-3xl">
                    <div className="w-20 h-20 bg-emerald-500 text-white rounded-full flex items-center justify-center mb-6 shadow-2xl shadow-emerald-500/30 animate-bounce">
                        <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                    </div>
                    <h2 className="text-2xl font-bold tracking-tight mb-2">Authenticated</h2>
                    <p className="text-muted-foreground font-medium text-sm">Redirecting to dashboard...</p>
                </div>
            )}
        </div>
    );
}
