import React from 'react';

export default function ContactContent() {
    return (
        <section style={containerStyle}>
            <h1 style={mainHeader}>Contact</h1>
            <p style={{ ...regularText, marginBottom: '1.2rem' }}>
                For discussions on AI, blockchain, or new opportunities, feel free to reach out:
            </p>
            <p style={regularText}>
                Email:{' '}
                <a href="mailto:aj@perilabs.net" style={linkStyle}>
                    aj@perilabs.net
                </a>
            </p>
            <p style={{ ...regularText, marginTop: '1rem' }}>
                More about <strong>Peri Labs</strong>:
                <a
                    href="https://www.perilabs.net"
                    style={linkStyle}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    &nbsp;perilabs.net
                </a>
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
    color: '#58a6ff',
    textDecoration: 'underline',
};
