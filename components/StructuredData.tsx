import React from 'react';

export default function StructuredData({ nonce }: { nonce?: string }) {
    const organizationData = {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "DevPortal Pro",
        "url": "https://devportal.pro",
        "logo": "https://devportal.pro/logo.png",
        "description": "The elite real-time collaboration ecosystem bridging the gap between freelancers and clients.",
        "sameAs": [
            // Add social media links here
        ]
    };

    const softwareData = {
        "@context": "https://schema.org",
        "@type": "SoftwareApplication",
        "name": "DevPortal Pro",
        "operatingSystem": "Web",
        "applicationCategory": "BusinessApplication",
        "offers": {
            "@type": "Offer",
            "price": "0",
            "priceCurrency": "USD"
        },
        "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.9",
            "ratingCount": "120"
        }
    };

    return (
        <>
            <script
                type="application/ld+json"
                nonce={nonce}
                dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationData) }}
            />
            <script
                type="application/ld+json"
                nonce={nonce}
                dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareData) }}
            />
        </>
    );
}
