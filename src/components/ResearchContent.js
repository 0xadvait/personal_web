import React from 'react';

export default function ResearchContent() {
    return (
        <section style={containerStyle}>
            <h1 style={mainHeader}>Research</h1>

            <p style={regularText}>
                At <strong>Peri Labs</strong>, I explore advanced AI &amp; blockchain. Recent works:
            </p>

            <ul style={{ ...regularText, marginLeft: '1.2rem', marginTop: '1rem', marginBottom: '1rem', lineHeight: '1.7' }}>
                <li style={{ marginBottom: '1rem' }}>
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
                    <em style={emphasisText}>
                        Real-time data analysis &amp; privacy for large AI models.
                    </em>
                </li>

                <li style={{ marginBottom: '1rem' }}>
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
                    <em style={emphasisText}>
                        Combining AI &amp; DeFi to tokenize compute, data, and ML models.
                    </em>
                </li>
            </ul>

            <p style={regularText}>
                My aim is to build decentralized, scalable AI solutions that shape the future
                of machine intelligence.
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

const emphasisText = {
    color: '#aaa',
    fontStyle: 'normal', // keep or remove if you prefer <em> default
};
