import React from 'react';

export default function Contact() {
    return (
        <section style={containerStyle}>
            <h1 style={mainHeader}>Contact</h1>
            <p style={{ ...regularText, marginBottom: '1.2rem' }}>
                For discussions on AI, blockchain, or new opportunities, feel free to reach out:
            </p>
            <p style={regularText}>
                Email: <a href="mailto:advait@vannalabs.ai" style={linkStyle}>advait@vannalabs.ai</a>
            </p>
            <p style={regularText}>
                Twitter: <a href="https://x.com/advait_jayant" style={linkStyle} target="_blank" rel="noopener noreferrer">@advait_jayant</a>
            </p>
        </section>
    );
}

const containerStyle = {
    width: '90vw',
    maxWidth: '650px',
    margin: '0 auto',
    padding: '2rem',
};

const mainHeader = {
    color: '#fff',
    fontSize: '2rem',
    marginBottom: '1rem',
};

const regularText = {
    color: '#ddd',
    fontSize: '1rem',
    lineHeight: '1.6',
};

const linkStyle = {
    color: '#ddd',
    textDecoration: 'none',
};
