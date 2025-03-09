import React from 'react';

export default function ResearchContent() {
    return (
        <section style={containerStyle}>
            <h1 style={mainHeader}>Research</h1>

            <p style={regularText}>
                At <strong>Peri Labs</strong>, I explore the intersection of advanced AI &amp; blockchain technologies. Select recent publications:
            </p>

            <ul style={{ ...regularText, marginLeft: '1.2rem', marginTop: '1rem', marginBottom: '1.2rem', lineHeight: '1.7' }}>
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
                    <em style={emphasisText}>
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
                    <em style={emphasisText}>
                        A comprehensive framework for combining AI &amp; DeFi to tokenize computational resources, training data, and machine learning models.
                    </em>
                </li>
            </ul>

            <p style={regularText}>
                My research aims to build decentralized, scalable AI infrastructure that democratizes access to machine intelligence while preserving privacy and security.
            </p>

            <p style={{ ...regularText, marginTop: '1rem' }}>
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

const mainHeader = {
    color: '#fff',
    fontSize: '2rem',
    marginBottom: '1.2rem',
};

const regularText = {
    color: '#ddd',
    fontSize: '1rem',
    lineHeight: '1.6',
};

const linkStyle = {
    color: '#58a6ff',
    textDecoration: 'underline',
    transition: 'color 0.2s ease',
};

const emphasisText = {
    color: '#aaa',
    fontStyle: 'normal',
    fontSize: '0.95rem',
};
