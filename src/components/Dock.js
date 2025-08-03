import React, { useState, useEffect } from 'react';

export default function Dock({ onOpenTerminal, onOpenBlog, onOpenBrowser }) {
    const [screenSize, setScreenSize] = useState({
        width: typeof window !== 'undefined' ? window.innerWidth : 1200
    });
    const [activeTooltip, setActiveTooltip] = useState(null);

    // Update screen size when window resizes
    useEffect(() => {
        const handleResize = () => {
            setScreenSize({
                width: window.innerWidth
            });
        };

        // Initial check
        handleResize();

        // Add event listener
        window.addEventListener('resize', handleResize);

        // Cleanup
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // Calculate dock size based on screen width
    const getDockSize = () => {
        if (screenSize.width < 600) {
            return {
                iconSize: 35,
                padding: '0.3rem 0.7rem',
                gap: '0.5rem'
            };
        } else if (screenSize.width < 900) {
            return {
                iconSize: 45,
                padding: '0.4rem 0.9rem',
                gap: '0.8rem'
            };
        } else {
            return {
                iconSize: 50,
                padding: '0.5rem 1rem',
                gap: '1rem'
            };
        }
    };

    const dockSize = getDockSize();

    const dockContainer = {
        position: 'fixed',
        bottom: '20px',
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        zIndex: 99,
    };

    const dockStyle = {
        backgroundColor: 'rgba(255, 255, 255, 0.3)',
        backdropFilter: 'blur(12px)',
        borderRadius: '40px',
        padding: dockSize.padding,
        display: 'flex',
        gap: dockSize.gap,
        alignItems: 'center',
        transition: 'all 0.3s',
    };

    const iconStyle = {
        width: `${dockSize.iconSize}px`,
        height: `${dockSize.iconSize}px`,
        cursor: 'pointer',
        objectFit: 'contain',
        transition: 'transform 0.2s',
    };

    const tooltipStyle = {
        position: 'absolute',
        top: '-35px',
        left: '50%',
        transform: 'translateX(-50%)',
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        color: 'white',
        padding: '5px 10px',
        borderRadius: '5px',
        fontSize: '14px',
        whiteSpace: 'nowrap',
        pointerEvents: 'none',
        opacity: 1,
        transition: 'opacity 0.2s',
    };

    // Shared hover effect
    const handleMouseEnter = (e, tooltipName) => {
        e.currentTarget.style.transform = 'scale(1.2)';
        setActiveTooltip(tooltipName);
    };
    
    const handleMouseLeave = (e) => {
        e.currentTarget.style.transform = 'scale(1)';
        setActiveTooltip(null);
    };

    return (
        <>
            <div style={dockContainer}>
                <div style={dockStyle}>
                    {/* Terminal */}
                    <div style={{ position: 'relative' }}>
                        <img
                            src="/images/icon_image.png"
                            alt="Terminal"
                            style={iconStyle}
                            onMouseEnter={(e) => handleMouseEnter(e, 'terminal')}
                            onMouseLeave={handleMouseLeave}
                            onClick={onOpenTerminal}
                        />
                        {activeTooltip === 'terminal' && (
                            <div style={tooltipStyle}>Terminal</div>
                        )}
                    </div>
                    
                    {/* Blog */}
                    <div style={{ position: 'relative' }}>
                        <img
                            src="/images/blog_icon.png"
                            alt="Blog"
                            style={iconStyle}
                            onMouseEnter={(e) => handleMouseEnter(e, 'blog')}
                            onMouseLeave={handleMouseLeave}
                            onClick={onOpenBlog}
                        />
                        {activeTooltip === 'blog' && (
                            <div style={tooltipStyle}>Chaos Theory (Blog)</div>
                        )}
                    </div>
                    
                    {/* OpenGradient */}
                    <div style={{ position: 'relative' }}>
                        <img
                            src="/images/website_icon.png"
                            alt="OpenGradient"
                            style={iconStyle}
                            onMouseEnter={(e) => handleMouseEnter(e, 'opengradient')}
                            onMouseLeave={handleMouseLeave}
                            onClick={() => onOpenBrowser('https://www.opengradient.ai/')}
                        />
                        {activeTooltip === 'opengradient' && (
                            <div style={tooltipStyle}>OpenGradient (Website)</div>
                        )}
                    </div>

                    {/* Aivos Labs */}
                    <div style={{ position: 'relative' }}>
                        <img
                            src="/images/website_icon.png"
                            alt="Aivos Labs"
                            style={iconStyle}
                            onMouseEnter={(e) => handleMouseEnter(e, 'aivos')}
                            onMouseLeave={handleMouseLeave}
                            onClick={() => onOpenBrowser('https://www.aivoslabs.com/')}
                        />
                        {activeTooltip === 'aivos' && (
                            <div style={tooltipStyle}>Aivos Labs (Website)</div>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
}
