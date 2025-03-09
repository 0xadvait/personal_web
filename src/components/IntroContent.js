// IntroContent.js
import React from 'react';

const containerStyle = {
    width: '90vw',
    maxWidth: '650px',
    margin: '0 auto',
    padding: '2rem',
    fontSize: 'clamp(0.8rem, 1vw, 1rem)',
    lineHeight: 1.6,
};

const mainHeader = {
    color: '#fff',
    fontSize: 'clamp(1.5rem, 3vw, 2rem)',
    marginBottom: '1rem',
    fontWeight: 600,
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
    color: '#bbb',
    fontStyle: 'italic',
};

export default function IntroContent() {
    return (
        <section style={containerStyle}>
            <h1 style={mainHeader}>Intro</h1>
            <p style={regularText}>
                Hi, I'm Advait. I'm based in London but frequently traveling for work and research.
            </p>

            <p style={{ ...regularText, marginTop: '1.2rem' }}>
                <strong>Work:</strong> Founder and CEO @ Peri Labs, where we transform idle hardware into sustainable revenue streams.
                Previously, I authored 57+ publications on AI at O'Reilly Media, lectured at University College London,
                and pursued a PhD at London Business School.
            </p>

            <p style={{ ...regularText, marginTop: '1.5rem', marginBottom: '0.8rem' }}>
                <em style={emphasisText}>Selected Publications & Talks:</em>
            </p>
            <ul style={{ ...regularText, marginLeft: '1.2rem' }}>
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
                <li style={{ marginTop: '0.6rem' }}>
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
                <li style={{ marginTop: '0.6rem' }}>
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
                <li style={{ marginTop: '0.6rem' }}>
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
                <li style={{ marginTop: '0.6rem' }}>
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

            <p style={{ ...regularText, marginTop: '1.5rem', display: 'flex', alignItems: 'center' }}>
                <strong>Contact:</strong>&nbsp;
                <a href="mailto:aj@perilabs.net" style={linkStyle} aria-label="Email Advait">
                    aj@perilabs.net
                </a>
            </p>
        </section>
    );
}
