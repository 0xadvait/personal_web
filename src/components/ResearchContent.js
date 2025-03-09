import React, { useState, useEffect } from 'react';

export default function ResearchContent() {
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
        regularText: {
            color: '#ddd',
            fontSize: `${getFontSize(1)}rem`,
            lineHeight: '1.6',
        },
        emphasisText: {
            color: '#aaa',
            fontStyle: 'normal',
            fontSize: `${getFontSize(0.95)}rem`,
        }
    };

    return (
        <section style={containerStyle}>
            <h1 style={dynamicStyles.mainHeader}>Research</h1>

            <p style={dynamicStyles.regularText}>
                At <strong>Peri Labs</strong>, I explore the intersection of advanced AI &amp; blockchain technologies. Select recent publications:
            </p>

            <ul style={{ ...dynamicStyles.regularText, marginLeft: '1.2rem', marginTop: '1rem', marginBottom: '1.2rem', lineHeight: '1.7' }}>
                <li style={{ marginBottom: '1.2rem' }}>
                    <strong>The State of Edge AI</strong> –
                    <a
                        href="https://peri-labs.github.io/docs/assets/files/The_State_of_Edge_AI.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={linkStyle}
                    >
                        &nbsp;PDF
                    </a>
                    <br />
                    <em style={dynamicStyles.emphasisText}>
                        Exploring real-time data analysis, privacy preservation techniques, and deployment strategies for large AI models at the edge.
                    </em>
                </li>

                <li style={{ marginBottom: '1.2rem' }}>
                    <strong>The AiFi Thesis</strong> –
                    <a
                        href="https://peri-labs.github.io/docs/assets/files/The_AiFi_Thesis.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={linkStyle}
                    >
                        &nbsp;PDF
                    </a>
                    <br />
                    <em style={dynamicStyles.emphasisText}>
                        A comprehensive framework for combining AI &amp; DeFi to tokenize computational resources, training data, and machine learning models.
                    </em>
                </li>
            </ul>

            <p style={dynamicStyles.regularText}>
                My research aims to build decentralized, scalable AI infrastructure that democratizes access to machine intelligence while preserving privacy and security.
            </p>

            <p style={{ ...dynamicStyles.regularText, marginTop: '1rem' }}>
                I'm currently focused on developing novel consensus mechanisms for distributed AI training and inference across heterogeneous hardware.
            </p>
        </section>
    );
}

/* ----- Styles ----- */
const containerStyle = {
    width: '90vw',
    maxWidth: '650px',
    margin: '0 auto',
    padding: '2rem',
};

const linkStyle = {
    color: '#58a6ff',
    textDecoration: 'underline',
    transition: 'color 0.2s ease',
};
