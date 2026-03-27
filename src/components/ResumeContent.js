// ResumeContent.js

import React, { useState, useEffect } from 'react';

export default function ResumeContent() {
    // Screen size state
    const [screenSize, setScreenSize] = useState({
        width: typeof window !== 'undefined' ? window.innerWidth : 1200,
        height: typeof window !== 'undefined' ? window.innerHeight : 800
    });

    // Handle window resize
    useEffect(() => {
        const handleResize = () => {
            setScreenSize({
                width: window.innerWidth,
                height: window.innerHeight
            });
        };

        if (typeof window !== 'undefined') {
            window.addEventListener('resize', handleResize);
            return () => window.removeEventListener('resize', handleResize);
        }
    }, []);

    // Responsive font sizes based on screen width
    const getFontSize = (baseSize) => {
        if (screenSize.width < 400) return baseSize * 0.8;
        if (screenSize.width < 600) return baseSize * 0.9;
        return baseSize;
    };

    // Dynamic styles based on screen size
    const dynamicStyles = {
        mainHeader: {
            color: '#fff',
            fontSize: 'clamp(1.2rem, 2vw, 1.5rem)',
            marginBottom: '1rem',
        },
        subHeader: {
            color: '#fff',
            fontSize: 'clamp(1rem, 1.8vw, 1.2rem)',
            margin: '1rem 0 0.5rem',
            borderBottom: '1px solid rgba(255,255,255,0.2)',
            paddingBottom: '0.3rem',
        },
        subHeaderMinor: {
            color: '#eee',
            marginBottom: '0.2rem',
            fontSize: 'clamp(0.9rem, 1.5vw, 1rem)',
            fontWeight: 600,
        },
        regularText: {
            color: '#ddd',
            fontSize: 'clamp(0.85rem, 1.4vw, 0.95rem)',
            lineHeight: '1.6',
        },
        nameStyle: {
            fontSize: 'clamp(0.95rem, 1.6vw, 1.1rem)',
            color: '#fff',
        }
    };

    return (
        <section style={containerStyle}>
            <h1 style={dynamicStyles.mainHeader}>Resume</h1>

            {/* Basic Info */}
            <div style={dynamicStyles.regularText}>
                <strong style={dynamicStyles.nameStyle}>Advait Jayant</strong>
                <br />
                Email:{' '}
                <a href="mailto:advait@opengradient.ai" style={linkStyle}>
                    advait@opengradient.ai
                </a>
            </div>

            {/* Education */}
            <h2 style={dynamicStyles.subHeader}>Education</h2>
            <ul style={{ ...dynamicStyles.regularText, marginLeft: '1.2rem', marginBottom: '1.2rem' }}>
                <li>
                    <strong>London Business School (England)</strong>
                    <br />
                    PhD candidate (on leave) — Capital Markets
                    <br />
                    MRes in Capital Markets
                    <br />
                    MSc in Analytics &amp; Management
                </li>
                <li style={{ marginTop: '0.8rem' }}>
                    <strong>BITS Pilani (India)</strong>
                    <br />
                    B.E. in Computer Science (First Class Honors)
                </li>
            </ul>

            {/* Professional Experience */}
            <h2 style={dynamicStyles.subHeader}>Professional Experience</h2>

            {/* OpenGradient */}
            <div style={experienceHeader}>
                <h3 style={dynamicStyles.subHeaderMinor}>
                    2025 – Present |{' '}
                    <a
                        href="https://opengradient.ai"
                        style={linkStyle}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        OpenGradient
                    </a>
                </h3>
                <div style={positionStyle}>Chief Strategy Officer</div>
            </div>
            <ul style={{ ...dynamicStyles.regularText, marginLeft: '1.2rem', marginBottom: '1.2rem' }}>
                <li>
                    The network for open intelligence. $10M seed led by a16z crypto, with participation from Coinbase Ventures, SALT, and SVA.
                </li>
            </ul>

            {/* SuperSight */}
            <div style={experienceHeader}>
                <h3 style={dynamicStyles.subHeaderMinor}>
                    2022 – 2024 |{' '}
                    <a
                        href="https://supersight.xyz"
                        style={linkStyle}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        SuperSight
                    </a>
                </h3>
                <div style={positionStyle}>Founder &amp; CEO</div>
            </div>
            <ul style={{ ...dynamicStyles.regularText, marginLeft: '1.2rem', marginBottom: '1.2rem' }}>
                <li>$1.5M raised. 200k+ users. AI copilot for onchain + offchain data. IP acquired.</li>
            </ul>

            {/* Aivos Labs */}
            <div style={experienceHeader}>
                <h3 style={dynamicStyles.subHeaderMinor}>
                    2025 – Present |{' '}
                    <a
                        href="https://aivoslabs.com"
                        style={linkStyle}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Aivos Labs
                    </a>
                </h3>
                <div style={positionStyle}>Cofounder</div>
            </div>
            <ul style={{ ...dynamicStyles.regularText, marginLeft: '1.2rem', marginBottom: '1.2rem' }}>
                <li>Developing privacy-preserving deployment rails for frontier AI models.</li>
            </ul>

            {/* Peri Labs */}
            <div style={experienceHeader}>
                <h3 style={dynamicStyles.subHeaderMinor}>2024 – 2025 | Peri Labs</h3>
                <div style={positionStyle}>Founder &amp; CEO</div>
            </div>
            <ul style={{ ...dynamicStyles.regularText, marginLeft: '1.2rem', marginBottom: '1.2rem' }}>
                <li>AI research lab anchored into Imperial College London. Received term sheets for $3M round. IP acquired.</li>
            </ul>

            {/* Fabric Ventures */}
            <div style={experienceHeader}>
                <h3 style={dynamicStyles.subHeaderMinor}>2021 – 2022 | Fabric Ventures</h3>
                <div style={positionStyle}>Research Partner</div>
            </div>
            <ul style={{ ...dynamicStyles.regularText, marginLeft: '1.2rem', marginBottom: '1.2rem' }}>
                <li>Head of Research at a UK-based VC fund ($140M AUM).</li>
            </ul>

            {/* UCL */}
            <div style={experienceHeader}>
                <h3 style={dynamicStyles.subHeaderMinor}>2022 – 2023 | University College London (UCL)</h3>
                <div style={positionStyle}>Lecturer</div>
            </div>
            <ul style={{ ...dynamicStyles.regularText, marginLeft: '1.2rem', marginBottom: '1.2rem' }}>
                <li>CEGE0115: Portfolio Management.</li>
            </ul>

            {/* O'Reilly */}
            <div style={experienceHeader}>
                <h3 style={dynamicStyles.subHeaderMinor}>2019 – 2022 | O&rsquo;Reilly Media</h3>
                <div style={positionStyle}>Author, Artificial Intelligence</div>
            </div>
            <ul style={{ ...dynamicStyles.regularText, marginLeft: '1.2rem', marginBottom: '1.2rem' }}>
                <li>50+ publications on AI, reaching 100,000+ learners.</li>
            </ul>

            {/* Publications & Awards */}
            <h2 style={dynamicStyles.subHeader}>Publications &amp; Awards</h2>
            <ul style={{ ...dynamicStyles.regularText, marginLeft: '1.2rem', marginBottom: '1rem' }}>
                <li>UK Tech Nation Exceptional Talent</li>
                <li>MakerDAO Recognized Delegate</li>
                <li>London Business School Full PhD Scholarship</li>
                <li>Guest Speaker, London Business School (Digital Investing)</li>
            </ul>
        </section>
    );
}

/* ---------- STYLES ---------- */
const containerStyle = {
    width: '90vw',
    maxWidth: '650px',
    margin: '0 auto',
    padding: '2rem',
};

const linkStyle = {
    color: '#58a6ff',
    textDecoration: 'underline',
    transition: 'color 0.2s',
};

const experienceHeader = {
    display: 'flex',
    flexDirection: 'column',
    marginTop: '1rem',
};

const positionStyle = {
    color: '#58a6ff',
    fontWeight: 500,
    marginBottom: '0.3rem',
};
