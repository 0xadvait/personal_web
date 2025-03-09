import React, { useState, useEffect } from 'react';

export default function ContactContent() {
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
            fontSize: 'clamp(1.2rem, 2vw, 1.5rem)',
            marginBottom: '1rem',
            fontWeight: '600',
        },
        regularText: {
            color: '#ddd',
            fontSize: 'clamp(0.85rem, 1.4vw, 0.95rem)',
            lineHeight: '1.6',
        },
        linkText: {
            color: '#58a6ff',
            textDecoration: 'underline',
            transition: 'color 0.2s ease',
            fontSize: 'clamp(0.85rem, 1.4vw, 0.95rem)',
        }
    };

    return (
        <section style={containerStyle}>
            <h1 style={dynamicStyles.mainHeader}>Contact</h1>
            
            <p style={{ ...dynamicStyles.regularText, marginBottom: '1rem' }}>
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
            
            <p style={{ ...dynamicStyles.regularText, marginTop: '1.5rem' }}>
                Based in London, but available for virtual meetings across time zones.
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

const linkStyle = {
    color: '#58a6ff',
    textDecoration: 'underline',
    transition: 'color 0.2s ease',
    fontSize: 'inherit',
    ':hover': {
        color: '#8cb4ff'
    }
};

const contactItemStyle = {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '1rem',
    color: '#ddd',
    fontSize: 'clamp(0.85rem, 1.4vw, 0.95rem)',
};

const contactLabelStyle = {
    minWidth: '100px',
    fontWeight: '500',
};
