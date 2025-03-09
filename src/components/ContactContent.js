import React from 'react';

export default function ContactContent() {
    return (
        <section style={containerStyle}>
            <h1 style={mainHeader}>Contact</h1>
            
            <p style={{ ...regularText, marginBottom: '1.5rem' }}>
                For discussions on AI, blockchain, research collaborations, or new opportunities, feel free to reach out:
            </p>
            
            <div style={contactItemStyle}>
                <span style={contactLabelStyle}>Email:</span>
                <a href="mailto:aj@perilabs.net" style={linkStyle}>
                    aj@perilabs.net
                </a>
            </div>
            
            <div style={contactItemStyle}>
                <span style={contactLabelStyle}>LinkedIn:</span>
                <a 
                    href="https://www.linkedin.com/in/advait-jayant-21b465bb/" 
                    style={linkStyle}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Advait Jayant
                </a>
            </div>
            
            <div style={contactItemStyle}>
                <span style={contactLabelStyle}>Twitter:</span>
                <a 
                    href="https://twitter.com/advait_peri" 
                    style={linkStyle}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    @advait_peri
                </a>
            </div>
            
            <div style={contactItemStyle}>
                <span style={contactLabelStyle}>Peri Labs:</span>
                <a
                    href="https://www.perilabs.net"
                    style={linkStyle}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    perilabs.net
                </a>
            </div>
            
            <p style={{ ...regularText, marginTop: '2rem' }}>
                Based in London, but available for virtual meetings across time zones.
            </p>
        </section>
    );
}

const containerStyle = {
    width: '90vw',
    maxWidth: '650px',
    margin: '0 auto',
    padding: '3rem 2rem',
};

const mainHeader = {
    color: '#fff',
    fontSize: '2.2rem',
    marginBottom: '1.5rem',
    fontWeight: '600',
};

const regularText = {
    color: '#ddd',
    fontSize: '1.1rem',
    lineHeight: '1.7',
};

const linkStyle = {
    color: '#58a6ff',
    textDecoration: 'underline',
    transition: 'color 0.2s ease',
    fontSize: '1.1rem',
    ':hover': {
        color: '#8cb4ff'
    }
};

const contactItemStyle = {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '1.2rem',
    color: '#ddd',
    fontSize: '1.1rem',
};

const contactLabelStyle = {
    minWidth: '100px',
    fontWeight: '500',
};
