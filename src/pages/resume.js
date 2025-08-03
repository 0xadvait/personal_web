import React from 'react';

export default function Resume() {
    return (
        <section style={resumeContainer}>
            <h1 style={mainHeader}>Resume</h1>
            <div>
                <p style={regularText}>
                    <strong>Advait Jayant</strong><br />
                    Email: <a href="mailto:advait@vannalabs.ai" style={linkStyle}>advait@vannalabs.ai</a><br />
                    Phone: +44 7843 440 997
                </p>
                <br />

                <h2 style={subHeader}>Education</h2>
                <ul style={listStyle}>
                    <li>
                        <strong>London Business School (England)</strong><br />
                        PhD in Accounting (Blockchain focus, Full Scholarship)<br />
                        Masters in Analytics &amp; Management (2020–2021)
                    </li>
                    <li style={{ marginTop: '1rem' }}>
                        <strong>BITS Pilani (India)</strong><br />
                        B.E. in Computer Science (First Class Honors, 2015–2019)
                    </li>
                </ul>
                <br />

                <h2 style={subHeader}>Business Experience</h2>
                <h3 style={jobTitle}>2023 – Present | SUPERSIGHT LTD (UK)</h3>
                <p style={regularText}>Founder &amp; CEO</p>
                <ul style={listStyle}>
                    <li>Leading design &amp; development of crypto-specific LLMs</li>
                    <li>Integrating advanced AI solutions with enterprise clients</li>
                    <li>Driving product-market validation across 30+ organizations</li>
                </ul>

                <h3 style={jobTitle}>2021 – 2022 | FABRIC VENTURES (UK)</h3>
                <p style={regularText}>Research Partner</p>
                <ul style={listStyle}>
                    <li>Technical due diligence on decentralized compute platforms</li>
                    <li>Launched “Le Crypto Fellowship” curriculum</li>
                </ul>

                <h3 style={jobTitle}>2021 – 2022 | UNIVERSITY COLLEGE LONDON (UCL)</h3>
                <p style={regularText}>Lecturer (Portfolio Management, Crypto/Venture Capital)</p>
                <ul style={listStyle}>
                    <li>Designed &amp; taught CEGE0115: Portfolio Management &amp; Asset Allocation</li>
                    <li>Mentored students pursuing crypto-related careers</li>
                </ul>

                <h3 style={jobTitle}>2019 – 2021 | TECHNICS PUBLICATIONS LLC (USA)</h3>
                <p style={regularText}>Author &amp; Course Instructor</p>
                <ul style={listStyle}>
                    <li>50+ video publications on Data Science, ML, NLP, Big Data Analytics</li>
                    <li>Courses featured on O’Reilly Safari &amp; Stanford Libraries</li>
                </ul>
                <br />

                <h2 style={subHeader}>Publications &amp; Awards</h2>
                <ul style={listStyle}>
                    <li>Apache Kafka Fundamentals, Markov Chain Fundamentals, CNNs, RNNs, etc.</li>
                    <li>MakerDAO Recognized Delegate (a16z Crypto Token Delegate)</li>
                    <li>PhD Full Scholarship at London Business School (£46k/yr)</li>
                    <li>Global LBS Case Competition Winner</li>
                </ul>
            </div>
        </section>
    );
}

const resumeContainer = {
    // fluid container
    width: '90vw',
    maxWidth: '750px',
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

const jobTitle = {
    color: '#ddd',
    marginTop: '1.2rem',
    marginBottom: '0.2rem',
};

const listStyle = {
    marginLeft: '1.2rem',
    marginBottom: '1rem',
    lineHeight: '1.7',
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
