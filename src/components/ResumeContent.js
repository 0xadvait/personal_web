// ResumeContent.js

import React from 'react';

export default function ResumeContent() {
    return (
        <section style={containerStyle}>
            <h1 style={mainHeader}>Resume</h1>

            {/* Basic Info */}
            <p style={regularText}>
                <strong>Advait Jayant</strong>
                <br />
                Email:{' '}
                <a href="mailto:aj@perilabs.net" style={linkStyle}>
                    aj@perilabs.net
                </a>
            </p>

            {/* Education */}
            <h2 style={subHeader}>Education</h2>
            <ul style={{ ...regularText, marginLeft: '1.2rem', marginBottom: '1rem' }}>
                <li>
                    <strong>London Business School (England)</strong>
                    <br />
                    PhD in Accounting (Blockchain focus, Full Scholarship)
                    <br />
                    Masters in Analytics &amp; Management
                </li>
                <li style={{ marginTop: '1rem' }}>
                    <strong>BITS Pilani (India)</strong>
                    <br />
                    B.E. in Computer Science (First Class Honors)
                </li>
            </ul>

            {/* Professional Experience */}
            <h2 style={subHeader}>Professional Experience</h2>

            {/* Peri Labs */}
            <h3 style={subHeaderMinor}>
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
            <p style={regularText}>
                Founder &amp; CEO <br />
                <em>Transform Idle Resources into High Yield-Bearing Assets</em>
            </p>
            <ul style={{ ...regularText, marginLeft: '1.2rem', marginBottom: '1rem' }}>
                <li>
                    Raised $X in VC (still in stealth) from top-tier investors.
                </li>
                <li>
                    Hired a team of top-tier technical talent from Imperial College London, researchers from Apple,
                    managers from NVIDIA, and ex-quants from top-tier institutions.
                </li>
            </ul>

            {/* SuperSight */}
            <h3 style={subHeaderMinor}>
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
            <p style={regularText}>Founder &amp; CEO</p>
            <ul style={{ ...regularText, marginLeft: '1.2rem', marginBottom: '1rem' }}>
                <li>
                    Led the design and deployment of crypto-specific LLMs with 97% inference reliability for answering
                    questions related to crypto.
                </li>
                <li>
                    Scaled platform to 200,000 users and 70,000 monthly active users.
                </li>
                <li>
                    Raised $1.27M in Venture Capital when Bitcoin was trading at $16k.
                </li>
            </ul>

            {/* UCL */}
            <h3 style={subHeaderMinor}>2021 – 2022 | University College London (UCL)</h3>
            <p style={regularText}>Lecturer (Portfolio Management, Crypto/Venture Capital)</p>
            <ul style={{ ...regularText, marginLeft: '1.2rem', marginBottom: '1rem' }}>
                <li>
                    Developed and taught CEGE0115, a pioneering course merging traditional portfolio
                    management techniques with crypto-focused investments, attracting 80+ students.
                </li>
                <li>
                    Achieved a 95% course satisfaction rating and mentored 15 students who secured
                    roles in leading venture capital and crypto‐trading firms.
                </li>
            </ul>

            {/* O'Reilly */}
            <h3 style={subHeaderMinor}>2019 – 2021 | O&rsquo;Reilly Publications (USA)</h3>
            <p style={regularText}>Author &amp; Course Instructor</p>
            <ul style={{ ...regularText, marginLeft: '1.2rem', marginBottom: '1rem' }}>
                <li>
                    Produced 50+ video publications on ML, NLP, Big Data, and Data Science,
                    reaching over 100k learners on O&rsquo;Reilly Safari.
                </li>
                <li>
                    Refined advanced analytics curricula in collaboration with editorial teams,
                    resulting in a 10% monthly increase in course enrollments.
                </li>
            </ul>

            {/* Publications & Awards */}
            <h2 style={subHeader}>Publications &amp; Awards</h2>
            <ul style={{ ...regularText, marginLeft: '1.2rem', marginBottom: '1rem' }}>
                <li>
                    Contributed extensively to Apache Kafka Fundamentals, Markov Chain Fundamentals,
                    CNNs, RNNs, and cutting‐edge machine learning research.
                </li>
                <li>MakerDAO Recognized Delegate (a16z Crypto Token Delegate)</li>
                <li>PhD Full Scholarship at London Business School (£46k/yr)</li>
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

const mainHeader = {
    color: '#fff',
    fontSize: '2rem',
    marginBottom: '1rem',
};

const subHeader = {
    color: '#fff',
    fontSize: '1.4rem',
    margin: '1rem 0 0.5rem',
};

const subHeaderMinor = {
    color: '#ddd',
    marginTop: '1.2rem',
    marginBottom: '0.2rem',
    fontSize: '1.1rem',
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
