'use client';

import Header from '@/components/Header';
import Hero from '@/components/Hero';
import StackCarousel from '@/components/StackCarousel';
import Features from '@/components/Features';
import HowItWorks from '@/components/HowItWorks';
import Benefits from '@/components/Benefits';
import Pricing from '@/components/Pricing';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';

export default function LandingPage() {
    return (
        <main className="min-h-screen">
            <Header />
            <Hero />
            <StackCarousel />
            <Features />
            <HowItWorks />
            <Benefits />
            <Pricing />
            <CTA />
            <Footer />
        </main>
    );
}
