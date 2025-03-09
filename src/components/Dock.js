import React, { useState, useEffect } from 'react';

export default function Dock({ onOpenTerminal, onOpenBlog, onOpenBrowser }) {
    const [screenSize, setScreenSize] = useState({
        width: typeof window !== 'undefined' ? window.innerWidth : 1200
    });

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
        backgroundColor: 'rgba(255, 255, 255, 0.2)',
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

    // Shared hover effect
    const handleMouseEnter = (e) => {
        e.currentTarget.style.transform = 'scale(1.2)';
    };
    const handleMouseLeave = (e) => {
        e.currentTarget.style.transform = 'scale(1)';
    };

    return (
        <>
            <div style={dockContainer}>
                <div style={dockStyle}>
                    {/* Terminal */}
                    <img
                        src="/images/icon_image.png"
                        alt="Terminal"
                        style={iconStyle}
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                        onClick={onOpenTerminal}
                    />
                    {/* Blog */}
                    <img
                        src="/images/blog_icon.png"
                        alt="Blog"
                        style={iconStyle}
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                        onClick={onOpenBlog}
                    />
                    {/* Website */}
                    <img
                        src="/images/website_icon.png"
                        alt="Website"
                        style={iconStyle}
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                        onClick={onOpenBrowser}
                    />
                </div>
            </div>
        </>
    );
}
