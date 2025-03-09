// IntroContent.js
import React from 'react';

const containerStyle = {
    width: '90vw',
    maxWidth: '650px',
    margin: '0 auto',
    padding: '2rem',
    fontSize: 'clamp(0.8rem, 1vw, 1rem)',  // example
    lineHeight: 1.6,
};

const mainHeader = {
    color: '#fff',
    fontSize: 'clamp(1.5rem, 3vw, 2rem)',
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

export default function IntroContent() {
    return (
        <section style={containerStyle}>
            <h1 style={mainHeader}>Intro</h1>
            <p style={regularText}>
                Hi, I'm Advait. Usually in London, but I'm trying to move more.
            </p>

            <p style={{ ...regularText, marginTop: '1.2rem' }}>
                <strong>Work:</strong> Founder and CEO @ Peri Labs. At Peri, we turn idle hardware into sustainable revenue.

                Previously, I published 57x on AI at O'Reilly Media, lectured at UCL,
                and pursued a PhD at LBS.
            </p>

            <p style={{ ...regularText, marginTop: '1.2rem' }}>
                <em>Select Content:</em>
            </p>
            <ul style={{ ...regularText, marginLeft: '1.2rem' }}>
                <li>
                    Report on <strong>The AiFi Thesis</strong>:{' '}
                    <a
                        href="https://peri-labs.github.io/docs/assets/files/The_AiFi_Thesis.pdf"
                        style={linkStyle}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Link
                    </a>
                </li>
                <li style={{ marginTop: '0.6rem' }}>
                    Report on <strong>State of Edge AI</strong>:{' '}
                    <a
                        href="https://peri-labs.github.io/docs/assets/files/The_State_of_Edge_AI.pdf"
                        style={linkStyle}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Link
                    </a>
                </li>
                <li style={{ marginTop: '0.6rem' }}>
                    Talk on <strong>Using FHE For Consensus for AI Models</strong>:{' '}
                    <a
                        href="https://www.youtube.com/watch?v=4s_IhcMoOks"
                        style={linkStyle}
                        target="_blank"
                        rel="noopener noreferrer"
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
                    >
                        Paper
                    </a>
                </li>
            </ul>

            <p style={{ ...regularText, marginTop: '1.2rem' }}>
                <strong>Contact:</strong> aj (at) perilabs (dot) net
            </p>
        </section>
    );
}
