'use client';

import { createContext, useContext, useEffect, useState } from 'react';
import {
    User,
    onAuthStateChanged,
    signInWithPopup,
    GoogleAuthProvider,
    GithubAuthProvider,
    signOut,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    updateProfile
} from 'firebase/auth';
import { auth, db } from '@/lib/firebase';
import { doc, setDoc } from 'firebase/firestore';

interface AuthContextType {
    user: User | null;
    loading: boolean;
    signInWithGoogle: () => Promise<void>;
    signInWithGithub: () => Promise<void>;
    loginWithEmail: (email: string, pass: string) => Promise<void>;
    registerWithEmail: (email: string, pass: string, name: string, businessName: string) => Promise<void>;
    logout: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType>({
    user: null,
    loading: true,
    signInWithGoogle: async () => { },
    signInWithGithub: async () => { },
    loginWithEmail: async () => { },
    registerWithEmail: async () => { },
    logout: async () => { },
});

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
    const [user, setUser] = useState<User | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setUser(user);
            setLoading(false);
        });

        return () => unsubscribe();
    }, []);

    const createUserDocument = async (user: User, additionalData: any = {}) => {
        console.log("Syncing Firestore document for UID:", user.uid);
        const userRef = doc(db, 'users', user.uid);

        // Prepare base data
        const baseData = {
            uid: user.uid,
            email: user.email || additionalData.email || '',
            name: user.displayName || additionalData.name || 'User',
            photoURL: user.photoURL || '',
            lastLogin: new Date().toISOString(),
            updatedAt: new Date().toISOString(),
        };

        // If it's the first time creation, we might want to keep the original createdAt
        // Otherwise, we merge new fields like businessName/startupName
        const dataToSave = {
            ...baseData,
            ...additionalData,
        };

        // Use setDoc with merge: true to update existing or create new
        await setDoc(userRef, dataToSave, { merge: true }).catch(err => {
            console.error("Firestore sync error:", err);
            throw new Error("Could not synchronize your account data with the database.");
        });

        console.log("Firestore document synced successfully!");
    };

    const loginWithEmail = async (email: string, pass: string) => {
        try {
            console.log("DIAGNOSTIC: loginWithEmail initiated for:", email);
            if (!auth) throw new Error("Firebase Auth is not initialized.");

            const result = await signInWithEmailAndPassword(auth, email, pass);
            console.log("DIAGNOSTIC: Firebase Auth success. UID:", result.user.uid, "Email:", result.user.email);

            console.log("DIAGNOSTIC: Starting Firestore data verification...");
            await createUserDocument(result.user);
            console.log("DIAGNOSTIC: loginWithEmail fully completed (Auth + Firestore).");
        } catch (error: any) {
            console.error("DIAGNOSTIC: Login process failed at some step:", error);
            throw error;
        }
    };

    const registerWithEmail = async (email: string, pass: string, name: string, businessName: string) => {
        try {
            console.log("Creating Firebase Auth account...");
            const result = await createUserWithEmailAndPassword(auth, email, pass);
            await updateProfile(result.user, { displayName: name });
            console.log("Auth success, creating data...");
            await createUserDocument(result.user, { name, email, businessName, startupName: businessName });
        } catch (error: any) {
            console.error("Registration service error:", error);
            throw error;
        }
    };

    const signInWithGoogle = async () => {
        const provider = new GoogleAuthProvider();
        try {
            const result = await signInWithPopup(auth, provider);
            await createUserDocument(result.user);
        } catch (error: any) {
            console.error("Google sign-in service error:", error);
            throw error;
        }
    };

    const signInWithGithub = async () => {
        const provider = new GithubAuthProvider();
        try {
            const result = await signInWithPopup(auth, provider);
            await createUserDocument(result.user);
        } catch (error: any) {
            console.error("GitHub sign-in service error:", error);
            throw error;
        }
    };

    const logout = async () => {
        try {
            await signOut(auth);
        } catch (error) {
            console.error("Error signing out", error);
            throw error;
        }
    };

    return (
        <AuthContext.Provider value={{
            user,
            loading,
            signInWithGoogle,
            signInWithGithub,
            loginWithEmail,
            registerWithEmail,
            logout
        }}>
            {children}
        </AuthContext.Provider>
    );
};
