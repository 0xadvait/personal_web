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
            fontSize: `${getFontSize(2)}rem`,
            marginBottom: '1.2rem',
        },
        subHeader: {
            color: '#fff',
            fontSize: `${getFontSize(1.4)}rem`,
            margin: '1.2rem 0 0.6rem',
            borderBottom: '1px solid rgba(255,255,255,0.2)',
            paddingBottom: '0.3rem',
        },
        subHeaderMinor: {
            color: '#eee',
            marginBottom: '0.2rem',
            fontSize: `${getFontSize(1.1)}rem`,
            fontWeight: 600,
        },
        regularText: {
            color: '#ddd',
            fontSize: `${getFontSize(1)}rem`,
            lineHeight: '1.6',
        },
        nameStyle: {
            fontSize: `${getFontSize(1.3)}rem`,
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
                <a href="mailto:aj@perilabs.net" style={linkStyle}>
                    aj@perilabs.net
                </a>
            </div>

            {/* Education */}
            <h2 style={dynamicStyles.subHeader}>Education</h2>
            <ul style={{ ...dynamicStyles.regularText, marginLeft: '1.2rem', marginBottom: '1.2rem' }}>
                <li>
                    <strong>London Business School (England)</strong>
                    <br />
                    PhD in Accounting with Blockchain specialization (Full Scholarship)
                    <br />
                    Masters in Analytics &amp; Management
                </li>
                <li style={{ marginTop: '0.8rem' }}>
                    <strong>BITS Pilani (India)</strong>
                    <br />
                    B.E. in Computer Science (First Class Honors)
                </li>
            </ul>

            {/* Professional Experience */}
            <h2 style={dynamicStyles.subHeader}>Professional Experience</h2>

            {/* Peri Labs */}
            <div style={experienceHeader}>
                <h3 style={dynamicStyles.subHeaderMinor}>
                    2024 – Present |{' '}
                    <a
                        href="https://www.perilabs.net/"
                        style={linkStyle}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Peri Labs
                    </a>
                </h3>
                <div style={positionStyle}>Founder &amp; CEO</div>
            </div>
            <p style={{ ...dynamicStyles.regularText, fontStyle: 'italic', marginBottom: '0.5rem' }}>
                Transform Idle Resources into High Yield-Bearing Assets
            </p>
            <ul style={{ ...dynamicStyles.regularText, marginLeft: '1.2rem', marginBottom: '1.2rem' }}>
                <li>
                    Raised $X in venture funding from top-tier investors (currently in stealth mode).
                </li>
                <li>
                    Built an elite technical team including researchers from Apple, engineering managers from NVIDIA, 
                    and quantitative analysts from leading financial institutions.
                </li>
            </ul>

            {/* SuperSight */}
            <div style={experienceHeader}>
                <h3 style={dynamicStyles.subHeaderMinor}>
                    2023 – 2024 |{' '}
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
                <li>
                    Designed and deployed specialized crypto LLMs achieving 97% inference reliability for domain-specific queries.
                </li>
                <li>
                    Scaled platform to 200,000 total users with 70,000 monthly active users.
                </li>
                <li>
                    Successfully raised $1.27M in venture capital during challenging market conditions (BTC at $16k).
                </li>
            </ul>

            {/* UCL */}
            <div style={experienceHeader}>
                <h3 style={dynamicStyles.subHeaderMinor}>2021 – 2022 | University College London (UCL)</h3>
                <div style={positionStyle}>Lecturer (Portfolio Management, Crypto/Venture Capital)</div>
            </div>
            <ul style={{ ...dynamicStyles.regularText, marginLeft: '1.2rem', marginBottom: '1.2rem' }}>
                <li>
                    Pioneered CEGE0115, an innovative course integrating traditional portfolio management with 
                    crypto investments, attracting 80+ students.
                </li>
            </ul>

            {/* O'Reilly */}
            <div style={experienceHeader}>
                <h3 style={dynamicStyles.subHeaderMinor}>2019 – 2021 | O&rsquo;Reilly Publications (USA)</h3>
                <div style={positionStyle}>Author &amp; Course Instructor</div>
            </div>
            <ul style={{ ...dynamicStyles.regularText, marginLeft: '1.2rem', marginBottom: '1.2rem' }}>
                <li>
                    Created 50+ technical works on ML, NLP, Big Data, and Data Science,
                    reaching over 100,000 learners on O&rsquo;Reilly Safari.
                </li>
            </ul>

            {/* Publications & Awards */}
            <h2 style={dynamicStyles.subHeader}>Publications &amp; Awards</h2>
            <ul style={{ ...dynamicStyles.regularText, marginLeft: '1.2rem', marginBottom: '1rem' }}>
                <li>MakerDAO Recognized Delegate</li>
                <li>London Business School Full PhD Scholarship (£46k/year)</li>
                <li>Global LBS Case Competition Winner</li>
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
