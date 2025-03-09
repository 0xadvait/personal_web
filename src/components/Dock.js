import React, { useState, useEffect } from 'react';

export default function Dock({ onOpenTerminal, onOpenBlog, onOpenBrowser }) {
    const [collapsed, setCollapsed] = useState(false);

    // Check screen size on mount and when window resizes
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 600) {
                setCollapsed(true);
            }
        };

        // Initial check
        handleResize();

        // Add event listener
        window.addEventListener('resize', handleResize);

        // Cleanup
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const dockContainer = {
        position: 'fixed',
        bottom: '20px',
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        zIndex: 99,
    };

    const toggleButtonStyle = {
        position: 'fixed',
        bottom: '0px',
        right: '50%',
        transform: 'translateX(50%)',
        padding: '4px 8px',
        borderRadius: '6px 6px 0 0',
        backgroundColor: 'rgba(0,0,0,0.7)',
        color: '#fff',
        cursor: 'pointer',
        zIndex: 999,
        display: collapsed ? 'block' : 'none',
    };

    const dockStyle = {
        backgroundColor: 'rgba(255, 255, 255, 0.2)',
        backdropFilter: 'blur(12px)',
        borderRadius: '40px',
        padding: '0.5rem 1rem',
        display: collapsed ? 'none' : 'flex',
        gap: '1rem',
        alignItems: 'center',
        transition: 'opacity 0.3s',
    };

    const iconStyle = {
        width: '50px',
        height: '50px',
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

            {/* Only show the "Show Dock" button when collapsed */}
            <div
                style={toggleButtonStyle}
                onClick={() => setCollapsed(false)}
            >
                ▲ Show Dock ▲
            </div>
        </>
    );
}
