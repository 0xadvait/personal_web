// IntroContent.js
import React, { useState, useEffect } from 'react';

const containerStyle = {
    width: '90vw',
    maxWidth: '650px',
    margin: '0 auto',
    padding: '1.5rem',
    fontSize: 'clamp(0.8rem, 1vw, 0.95rem)',
    lineHeight: 1.5,
};

const mainHeader = {
    color: '#fff',
    fontSize: 'clamp(1.2rem, 2vw, 1.5rem)',
    marginBottom: '0.8rem',
    fontWeight: 600,
};

const regularText = {
    color: '#ddd',
    fontSize: '0.95rem',
    lineHeight: '1.5',
};

const linkStyle = {
    color: '#58a6ff',
    textDecoration: 'underline',
    transition: 'color 0.2s ease',
};

const emphasisText = {
    color: '#bbb',
    fontStyle: 'italic',
};

export default function IntroContent() {
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
            ...mainHeader,
            fontSize: `${getFontSize(1.5)}rem`,
        },
        regularText: {
            ...regularText,
            fontSize: `${getFontSize(0.95)}rem`,
        },
        emphasisText: {
            ...emphasisText,
            fontSize: `${getFontSize(0.9)}rem`,
        }
    };

    return (
        <section style={containerStyle}>
            <h1 style={dynamicStyles.mainHeader}>Intro</h1>
            <p style={dynamicStyles.regularText}>
                Hi, I'm Advait. I'm based in London but frequently traveling for work and research.
            </p>

            <p style={{ ...dynamicStyles.regularText, marginTop: '1rem' }}>
                <strong>Work:</strong> Founder and CEO @ Peri Labs, where we transform idle hardware into sustainable revenue streams.
                Previously, I authored 57+ publications on AI at O'Reilly Media, lectured at University College London,
                and pursued a PhD at London Business School.
            </p>

            <p style={{ ...dynamicStyles.regularText, marginTop: '1.2rem', marginBottom: '0.6rem' }}>
                <em style={dynamicStyles.emphasisText}>Selected Publications & Talks:</em>
            </p>
            <ul style={{ ...dynamicStyles.regularText, marginLeft: '1rem' }}>
                <li>
                    Report on <strong>The AiFi Thesis</strong>:{' '}
                    <a
                        href="https://peri-labs.github.io/docs/assets/files/The_AiFi_Thesis.pdf"
                        style={linkStyle}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Download The AiFi Thesis PDF"
                    >
                        PDF
                    </a>
                </li>
                <li style={{ marginTop: '0.5rem' }}>
                    Report on <strong>State of Edge AI</strong>:{' '}
                    <a
                        href="https://peri-labs.github.io/docs/assets/files/The_State_of_Edge_AI.pdf"
                        style={linkStyle}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Download State of Edge AI PDF"
                    >
                        PDF
                    </a>
                </li>
                <li style={{ marginTop: '0.5rem' }}>
                    Talk on <strong>Using FHE For Consensus in AI Models</strong>:{' '}
                    <a
                        href="https://www.youtube.com/watch?v=4s_IhcMoOks"
                        style={linkStyle}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Watch FHE for Consensus in AI Models video"
                    >
                        Video
                    </a>
                </li>
                <li style={{ marginTop: '0.5rem' }}>
                    Talk on <strong>The Economics of Wash Trading</strong>:{' '}
                    <a
                        href="https://www.youtube.com/watch?v=ITuKRdlAdGA"
                        style={linkStyle}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Watch Economics of Wash Trading video"
                    >
                        Video
                    </a>
                </li>
                <li style={{ marginTop: '0.5rem' }}>
                    Paper on <strong>The Economics of Wash Trading</strong>:{' '}
                    <a
                        href="https://papers.ssrn.com/sol3/papers.cfm?abstract_id=4610162"
                        style={linkStyle}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Read Economics of Wash Trading paper"
                    >
                        Paper
                    </a>
                </li>
            </ul>

            <p style={{ ...dynamicStyles.regularText, marginTop: '1.2rem', display: 'flex', alignItems: 'center' }}>
                <strong>Contact:</strong>&nbsp;
                <a href="mailto:aj@perilabs.net" style={linkStyle} aria-label="Email Advait">
                    aj@perilabs.net
                </a>
            </p>
        </section>
    );
}
